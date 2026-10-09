/**
 * Runs at Cloudflare's edge in front of every page (public/_routes.json keeps
 * it off images, fonts and scripts). Two jobs, both from the visitor's
 * country (Cloudflare's own geolocation, request.cf.country):
 *
 * 1. The home page, on a first visit, sends the visitor to their language:
 *    babybookai.com from Spain opens /es/. Only the home page, never a deep
 *    page (Google advises against redirecting by location: a search result
 *    must open what it showed). Crawlers, links from the site itself (the
 *    language switcher, the logo) and anyone who has already picked a
 *    language (the "lang" cookie) are not redirected.
 *
 * 2. Every page shows the price and the size the visitor's country sees in
 *    the app (src/config/pricing.ts): the static HTML holds the values for the
 *    language's own country, inside [data-price] and [data-size]; they are
 *    rewritten here, streaming, for anyone else.
 *
 * If the Functions quota ever runs out, Pages serves the static files as
 * they are: English at /, each language's own country's price.
 */
import { COUNTRY_LANGS, DEFAULT_LANG, isLang, LOCALES, type Lang } from '../src/i18n/locales';
import { path } from '../src/i18n/routes';
import { priceFor, sizeFor } from '../src/config/pricing';

const COOKIE = 'lang';
const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|embedly|pinterest|whatsapp|telegram|lighthouse|pagespeed|headless|preview|validator/i;

function cookie(request: Request, name: string): string | null {
  const match = (request.headers.get('cookie') ?? '').match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/** The language a page is in, from its path: /es/... is Spanish. */
function langOf(pathname: string): Lang {
  const first = pathname.split('/')[1];
  return isLang(first) ? first : DEFAULT_LANG;
}

/** Which of `choices` the browser prefers, by Accept-Language; else the first. */
function preferred(request: Request, choices: Lang[]): Lang {
  const accepted = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { lang: tag.split('-')[0].toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return (accepted.find((a) => (choices as string[]).includes(a.lang))?.lang as Lang) ?? choices[0];
}

function sameSite(referer: string | null, url: URL): boolean {
  try {
    return !!referer && new URL(referer).host === url.host;
  } catch {
    return false;
  }
}

/** Where a request for "/" should go, or null to serve the English home. */
function homeFor(request: Request, url: URL, country: string): Lang | null {
  if (BOTS.test(request.headers.get('user-agent') ?? '')) return null;
  if (sameSite(request.headers.get('referer'), url)) return null;
  const chosen = cookie(request, COOKIE);
  const lang = isLang(chosen) ? chosen : preferred(request, COUNTRY_LANGS[country] ?? [DEFAULT_LANG]);
  return lang === DEFAULT_LANG ? null : lang;
}

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') return context.next();

  const url = new URL(request.url);
  const country = ((request.cf?.country as string | undefined) ?? '').toUpperCase();

  if (url.pathname === '/') {
    const lang = homeFor(request, url, country);
    if (lang) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(path('home', lang) + url.search, url).href,
          'Cache-Control': 'private, no-store',
          Vary: 'Cookie, Accept-Language',
        },
      });
    }
  }

  const response = await context.next();
  if (!(response.headers.get('content-type') ?? '').includes('text/html')) return response;

  const lang = langOf(url.pathname);
  const home = LOCALES[lang].country;
  // "XX" and "T1" (unknown, Tor) and no country at all keep the page's own values.
  const known = /^[A-Z]{2}$/.test(country) && country !== 'XX' && country !== 'T1';
  const price = known ? priceFor(country, lang) : null;
  const size = known ? sizeFor(country) : null;
  const rewrite = (price && price !== priceFor(home, lang)) || (size && size !== sizeFor(home));

  let out = response;
  if (rewrite) {
    out = new HTMLRewriter()
      .on('[data-price]', { element: (el) => void el.setInnerContent(price!) })
      .on('[data-size]', { element: (el) => void el.setInnerContent(size!) })
      .transform(response);
    out = new Response(out.body, out);
    // The body now depends on the country: the file's ETag no longer names it.
    out.headers.delete('etag');
  }

  // Remember the language last read, for the next visit to "/".
  if (response.status === 200 && cookie(request, COOKIE) !== lang) {
    if (out === response) out = new Response(response.body, response);
    out.headers.append('Set-Cookie', `${COOKIE}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`);
  }
  return out;
};
