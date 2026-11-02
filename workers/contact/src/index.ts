/**
 * The contact form's other end (src/views/Support.astro): takes the POST from
 * /api/contact, emails it to the site's owner and sends the browser back to the
 * support page, at #sent or #failed, which the page shows with :target.
 *
 * A Worker of its own and not a Pages Function: Pages has no send_email binding
 * (Cloudflare's docs, Nov 2026). Its route runs in front of the site, so Pages
 * itself needs no configuration.
 *
 * The page carries no captcha, which would need JavaScript: a hidden field bots
 * fill in, a check of where the POST comes from, and a rate limit per address
 * keep the rubbish out.
 */
import { DEFAULT_LANG, isLang } from '../../../src/i18n/locales';
import { path } from '../../../src/i18n/routes';

interface Env {
  EMAIL: {
    send(message: {
      to: string;
      from: { email: string; name: string };
      replyTo: { email: string; name: string };
      subject: string;
      text: string;
    }): Promise<unknown>;
  };
  LIMIT: { limit(options: { key: string }): Promise<{ success: boolean }> };
  TO: string;
  FROM: string;
}

const ALLOWED_HOSTS = new Set(['babybookai.com', 'www.babybookai.com']);
const LIMITS = { name: 120, email: 200, subject: 200, message: 5000 };
const MAX_BODY = 32 * 1024;
const EMAIL = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/;

/** A header's value on one line: the mail library should see to it, and so do we. */
const oneLine = (value: string) => value.replace(/[\r\n\t]+/g, ' ').trim();

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });

    const origin = request.headers.get('origin');
    if (!origin || !ALLOWED_HOSTS.has(new URL(origin).hostname)) return new Response(null, { status: 403 });

    const back = (lang: string, status: 'sent' | 'failed') =>
      new Response(null, {
        status: 303,
        headers: { Location: `${path('support', isLang(lang) ? lang : DEFAULT_LANG)}#${status}` },
      });

    if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY) return back(DEFAULT_LANG, 'failed');

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return back(DEFAULT_LANG, 'failed');
    }
    const field = (name: string) => String(form.get(name) ?? '').trim();
    const lang = field('lang');

    // The trap: nobody can see this field. Tell the bot it worked and drop it.
    if (field('fax')) return back(lang, 'sent');

    const name = oneLine(field('name')).slice(0, LIMITS.name);
    const email = oneLine(field('email')).slice(0, LIMITS.email);
    const subject = oneLine(field('subject')).slice(0, LIMITS.subject);
    const message = field('message').slice(0, LIMITS.message);
    // The browser checks these first; this is for whatever did not come through it.
    if (!name || !subject || !message || !EMAIL.test(email)) return back(lang, 'failed');

    const { success } = await env.LIMIT.limit({ key: request.headers.get('cf-connecting-ip') ?? 'unknown' });
    if (!success) return back(lang, 'failed');

    try {
      await env.EMAIL.send({
        to: env.TO,
        from: { email: env.FROM, name: 'BabyBookAI contact form' },
        // Replying answers the visitor, not the form's address.
        replyTo: { email, name },
        subject: `[${isLang(lang) ? lang : DEFAULT_LANG}] ${subject}`,
        text: `${name} <${email}>\n\n${message}\n`,
      });
    } catch (error) {
      console.error('Could not send the contact form', error);
      return back(lang, 'failed');
    }
    return back(lang, 'sent');
  },
};
