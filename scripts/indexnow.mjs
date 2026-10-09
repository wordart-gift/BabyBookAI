/**
 * Tells Bing, Yandex and the other IndexNow engines that every URL in the
 * sitemap has changed, so they recrawl after a deploy instead of whenever
 * they come by. Google does not take IndexNow: it reads the sitemap, which
 * Search Console is given once.
 *
 * The key is public by design: the engines check it at
 * https://babybookai.com/<key>.txt (public/).
 *
 *   node scripts/indexnow.mjs        # after `npm run deploy`
 */
import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'babybookai.com';
const keyFile = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('No IndexNow key file in public/');
const key = keyFile.slice(0, -4);

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);
