/// <reference types="@cloudflare/workers-types" />
import { track, type StatsEnv } from '../../src/server-stats';

/** POST /api/event: the site reports a click on a store badge ({e:'store_click', d:'ios'|'android'}). Anonymous counter; always 204. */
export const onRequestPost: PagesFunction<StatsEnv> = async ({ request, env }) => {
  try {
    if (request.headers.get('sec-fetch-site') === 'cross-site') return new Response(null, { status: 204 });
    const b = (await request.json()) as { e?: string; d?: string };
    if (b.e === 'store_click' && (b.d === 'ios' || b.d === 'android')) await track(env, request, 'store_click', b.d);
  } catch {
    /* ignore */
  }
  return new Response(null, { status: 204 });
};
