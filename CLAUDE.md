# BabyBookAI — website (babybookai.com)

Marketing site for the BabyBookAI app: a Flutter app (Android is live
on Google Play since Oct 2026; iPhone is coming) that builds a printed hardcover photo book of a baby's first year from
the phone's camera roll. A Photo-to-Text product. US market, **American
English**. Carlos, the owner, works in Spanish: reply to him in Spanish; code,
comments, commit messages and site copy in English.

Stack: Astro (static output, no JS by default), Tailwind CSS v4, Cloudflare
Pages, GitHub (`wordart-gift/BabyBookAI`).

## Sources of truth

- **Product facts** (printer, format, pages, how photos are picked, privacy):
  the app's `CLAUDE.md` in `C:\Users\X421\proyectos\librofotos`. Read only.
  `src/config/site.ts` mirrors what the site states; keep it in step.
- **Keyword strategy**: `docs/` (Carlos's research, Sept–Oct 2026).

## Settled decisions

| Decision | Why |
|---|---|
| Brand is **BabyBookAI** everywhere | Carlos, Oct 2026 |
| Rank on the **"photo book"** family; "memory book" only for naming (H1 on home, App Store, ads) | "memory book" SERPs are Amazon, Etsy and media; "photo book" SERPs are small printers |
| Pages: `/`, `/baby-photo-book/`, `/first-year-photo-book/`, `/baby-boy-photo-album/`, `/baby-girl-photo-album/`, `/baby-photo-book-ideas/` + support, about, legal | One search intent per page. Do not add pages without checking the real SERP |
| Titles, H1s and meta: `[searched keyword] + [what is different]` | Speed and "zero work" are not searched, but they win the click |
| SEO is a complement; App Store + Meta are the channels | Measured on competitors; build once, keep it small |
| **No fake social proof**: no ratings, reviews or `aggregateRating` until real ones exist | |
| Never say **"layflat"** | The Gelato binding is glued |
| Face recognition is never a selling point | Opt-in, on-device, forgotten after the scan, not offered in IL/TX/WA; wording needs a lawyer's review (BIPA) |
| Amber is only for the next action (buttons); teal, ink and paper for the rest | Same rule as the app's theme |
| Trailing slash on every URL | One canonical URL per page on Cloudflare Pages |
| **No waitlist.** The site goes live the day the apps do, so it is written as if they are out; store URLs live in `src/config/site.ts` (`STORES`) | Carlos, Oct 2026 |
| Official store badges, unaltered, same height; one QR code (desktop only) to the `/get/` smart link, which `functions/get/[[path]].ts` sends to the right store by User-Agent | Two QR codes make the visitor pick; one works for both phones |
| Every page ends with the download section (`#download`, from the layout) | The header's "Get the app" must work on every page |
| **Android first, iPhone coming.** Google Play badge is live; while `STORES.appStore` is null the site shows an "App Store: coming soon" label (no Apple badge: Apple's rules cover live apps only). Set `STORES.appStore` and the badge, QR redirect and schema follow | Carlos, Oct 2026 |
| Photos are real, from the app's store screenshots (`src/assets/app/`, cropped from `librofotos/tool/out/store_noa/`). **Only photos where Noa is alone**; never the ones with family. Unsplash stand-ins are gone | The site and paid ads are public; family members have not agreed |

## Performance budget

Lighthouse 100 in every category. LCP < 1.5 s, CLS 0. JS only where a page
cannot work without it (the waitlist form works without JS too). Images through
`astro:assets` with explicit sizes.

## Commands

```
npm run dev       # or: npx astro dev --background
npm run build
npm run preview
npm run deploy    # build + direct upload to Cloudflare Pages (wrangler)
```
