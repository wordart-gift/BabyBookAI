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
| Photos are real, from the app's store screenshots (`src/assets/app/`, cropped from `librofotos/tool/out/store_noa/`). Photos with the family may be used too; pick the best framed. Unsplash stand-ins are gone | Carlos, Oct 2026 (he first allowed only Noa alone) |
| App screens sit in a whole phone (`PhoneShot`): the screenshots are cut just under the last button, where a display would end | A frame open at the bottom read as a cropped image |
| Contact is **info@babybookai.com** (`SITE.supportEmail`), forwarded to info@photo-to-text.com by Cloudflare Email Routing | Carlos, Oct 2026 |

## Performance budget

Lighthouse 100 in every category. LCP < 1.5 s, CLS 0. No JS on any page
(Google Analytics, once it has an ID, runs in a Partytown worker). Images through
`astro:assets` with explicit sizes. Fonts through Astro's fonts API
(`astro.config.mjs`): latin files only, fallbacks with matched metrics, so the
page does not move when they arrive; do not go back to `@fontsource` CSS imports.

Measured Oct 2026 on a Cloudflare preview, Lighthouse mobile (simulated slow
4G): performance 96-100, accessibility, best practices 100, CLS 0 (privacy
0.05), LCP 1.3-2.1 s. The home's LCP is its H1. Measure on a preview deploy,
not `astro preview` (no compression there). Previews score SEO 69 on purpose:
`*.pages.dev` is `noindex` (`public/_headers`).

## Structured data

`src/lib/schema.ts`. The layout adds WebSite, Organization and the page's own
WebPage (or AboutPage / ContactPage) to every page; pages add BreadcrumbList,
MobileApplication, Product (the book, $49.99 with US shipping, from the app's
order screen), FAQPage, Article. All tied by `@id`. Validate with
validator.schema.org and Google's Rich Results Test after changing it.

## Google and indexing

- `GOOGLE` in `src/config/site.ts`: the GA4 measurement ID and, if needed, the
  Search Console HTML-tag token. Both null until Carlos creates them; nothing
  loads while null. The privacy policy's "This website" paragraph follows the
  GA ID by itself.
- Search Console: a Domain property verified by a DNS TXT record in Cloudflare
  is preferred; then submit `https://babybookai.com/sitemap-index.xml`.
- `npm run indexnow` after a deploy tells Bing and Yandex (not Google) to recrawl
  every URL in the sitemap. Key file: `public/<key>.txt`.

## Commands

```
npm run dev       # or: npx astro dev --background
npm run build
npm run preview
npm run deploy    # build + direct upload to Cloudflare Pages (wrangler)
npm run indexnow  # after a deploy: ping Bing/Yandex with the sitemap's URLs
```
