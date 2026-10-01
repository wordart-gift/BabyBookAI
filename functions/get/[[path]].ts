/**
 * /get/ — one link for both stores, so the site can show a single QR code
 * and ads and emails can carry one URL. Runs at Cloudflare's edge as a Pages
 * Function: a redirect decided on the User-Agent, no page and no JS.
 */
import { STORES } from '../../src/config/site';

export const onRequestGet: PagesFunction = ({ request }) => {
  const ua = request.headers.get('user-agent') ?? '';
  const isApple = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && /Mobile/i.test(ua));
  const isAndroid = /Android/i.test(ua);

  const target =
    (isApple && STORES.appStore) ||
    (isAndroid && STORES.googlePlay) ||
    // A desktop, or a store not live yet: the page with both buttons.
    new URL('/#download', request.url).href;

  return new Response(null, {
    status: 302,
    headers: { Location: target, 'Cache-Control': 'private, no-store' },
  });
};
