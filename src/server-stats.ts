/**
 * Store-click counters (Cloudflare Analytics Engine, binding STATS, dataset babybookai). Anonymous by construction: no cookie, no IP kept.
 * index1 = a hash of IP + browser + the UTC day + a salt (distinct visitors per day, irreversible); blob1 event, blob2 detail, blob3 country,
 * blob4 device. Read by the stats page of photo-to-text.com (private).
 */
export interface StatsEnv {
  STATS?: AnalyticsEngineDataset;
  STATS_SALT?: string;
}

async function daily(request: Request, salt: string): Promise<string> {
  const text = `${request.headers.get('cf-connecting-ip') ?? ''}|${request.headers.get('user-agent') ?? ''}|${new Date().toISOString().slice(0, 10)}|${salt}`;
  const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)));
  return [...hash.slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function track(env: StatsEnv, request: Request, event: string, detail = ''): Promise<void> {
  try {
    if (!env.STATS) return;
    const ua = request.headers.get('user-agent') ?? '';
    const device = /Mobi|Android|iPhone|iPad/i.test(ua) ? 'mobile' : 'desktop';
    env.STATS.writeDataPoint({
      indexes: [await daily(request, env.STATS_SALT ?? 'babybookai')],
      blobs: [event, detail.slice(0, 60), request.headers.get('cf-ipcountry') ?? '', device],
      doubles: [1],
    });
  } catch {
    /* counting never breaks a request */
  }
}
