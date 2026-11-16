/**
 * /get/ — one link for both stores, so the site can show a single QR code
 * and ads and emails can carry one URL. Runs at Cloudflare's edge as a Pages
 * Function: a redirect decided on the User-Agent, no page and no JS.
 */
import { STORES } from '../../src/config/site';
import { track, type StatsEnv } from '../../src/server-stats';

export const onRequestGet: PagesFunction<StatsEnv> = async ({ request, env, waitUntil }) => {
  const ua = request.headers.get('user-agent') ?? '';
  const isApple = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && /Mobile/i.test(ua));
  const isAndroid = /Android/i.test(ua);

  // A campaign tag on the /get/ link (?utm_campaign=...) goes on to the store, so Play Console and App Store
  // Connect show which link brought each install. Plain text only, short.
  const q = new URL(request.url).searchParams;
  const tag = (k: string, n: number) => (q.get(k) ?? '').replace(/[^w.-]/g, '').slice(0, n);
  const source = tag('utm_source', 40);
  const campaign = tag('utm_campaign', 60);
  const withTag = (store: string | null, kind: 'play' | 'apple') => {
    if (!store || (!source && !campaign)) return store;
    const u = new URL(store);
    if (kind === 'play') u.searchParams.set('referrer', new URLSearchParams({ ...(source && { utm_source: source }), ...(campaign && { utm_campaign: campaign }) }).toString());
    else if (campaign) u.searchParams.set('ct', campaign);
    return u.href;
  };

  const target =
    (isApple && withTag(STORES.appStore, 'apple')) ||
    (isAndroid && withTag(STORES.googlePlay, 'play')) ||
    // A desktop, or a store not live yet: the page with both buttons.
    new URL('/#download', request.url).href;

  if (target !== new URL('/#download', request.url).href) waitUntil(track(env, request, 'store_click', isApple ? 'ios' : 'android'));
  return new Response(null, {
    status: 302,
    headers: { Location: target, 'Cache-Control': 'private, no-store' },
  });
};
