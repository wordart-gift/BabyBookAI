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
- **Keyword strategy**: Carlos's research (Sept–Oct 2026) for the US; per
  country in `docs/keywords/<lang>/` (Semrush data and what it showed), one
  language at a time. English (US, UK), Spain, France, Germany, Italy and Portugal are done; the others still carry the Play listings'
  product words.

## Settled decisions

| Decision | Why |
|---|---|
| Brand is **BabyBookAI** everywhere | Carlos, Oct 2026 |
| Rank on the **"photo book" / "photo album"** family, which Google answers with one first page; "album" is searched twice as much, so it leads the baby photo book page's title and H1 while the URL and body say "photo book". "Memory book" only for naming (H1 on home, App Store, ads); the English home's title says "baby book app", the search that apps like ours answer with their home pages | "memory book" SERPs are fill-in book brands, Amazon and media; checked with Semrush, US and UK, Oct 2026 (`docs/keywords/en/`) |
| Pages: `/`, `/baby-photo-book/`, `/first-year-photo-book/`, `/baby-boy-photo-album/`, `/baby-girl-photo-album/`, `/baby-photo-book-ideas/` + support, about, legal. Each exists in the app's ten languages (see "Languages") | One search intent per page. Do not add pages without checking the real SERP |
| **Ten languages** (en es fr de it pt nl ja ko zh), English at the root, the rest under `/xx/` with their own slugs. The visitor's country picks the language of the home page on a first visit (never a deep page) and, on every page, the **price and size** the app shows there | Carlos, Oct 2026. Same rules as the app: `lib/order/pricing.dart`, `lib/util/dates.dart` |
| Size in inches only in US, LR, MM, written `11 × 11″`; everywhere else `28 × 28 cm` | Carlos, Oct 2026; the app's `BookSize` |
| Legal pages are translated, but the English text applies (`ui.translationNote`) | A lawyer reviews the English; a translation must not become a second contract |
| Spanish ranks on **"álbum"** (`album bebe primer año`, `album de fotos bebe`, as people type them), not "fotolibro" or "libro del bebé"; each page says early that ours arrives printed and laid out, since "álbum" also names the empty paste-in kind | Semrush, Spain, Oct 2026: "fotolibro bebe" has no searches; a small shop's page with no links ranks first for the first-year term (`docs/keywords/es/`) |
| French ranks on **"album photo bébé"**; "livre photo", the printers' word, stays in subtitles and body (a third of the searches, the same results). The first-year page keeps "1ère année"; "album photo naissance" is answered on the baby album page | Semrush, France, Oct 2026 (`docs/keywords/fr/`). Harder than Spain: the small shops that rank sit on domains with authority 27–34 |
| German ranks on **"Fotobuch"**, the only product word whose first page is printers; "Fotoalbum" (more searched, empty paste-in albums) stays in the body, "Babybuch" (books to read, fill-in books) out of titles. The first year is **"mein erstes Jahr"** (`/de/fotobuch-erstes-jahr/`), not "Lebensjahr" | Semrush, Germany and Austria, Oct 2026 (`docs/keywords/de/`). Small shops that rank sit on domains with authority 27–37 |
| Italian ranks on **"album foto neonato"** ("fotolibro neonato" has 20 searches); "nascita", "ricordi" and "da compilare" name the fill-in book and stay out of titles. The girl page says **"neonata"** (260 against 90 for "bambina"); the ideas article keeps "fotolibro", the only form searched there | Semrush, Italy, Oct 2026 (`docs/keywords/it/`) |
| Portuguese ranks on **"álbum de fotos do bebé"**; "fotolivro" has no searches and "livro do bebé" (fill-in book, books to read) stays out of titles. A small market: the whole family is about 2,000 searches a month | Semrush, Portugal, Oct 2026 (`docs/keywords/pt/`) |
| Semrush's **personal difficulty** for babybookai.com is 58–100 on every keyword (general KD 4–30): with no links, no keyword is easy. Where a variant of the same family was much lower, it went into the title without changing the URL | `docs/keywords/<lang>/dificultad-personal.md`, Oct 2026. Links, not keyword choice, are what is missing |
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
| Contact is **info@babybookai.com** (`SITE.supportEmail`), forwarded to Carlos's Gmail (cargarm3@gmail.com) by Cloudflare Email Routing | Carlos, Oct 2026 |

## Languages

- Words live in `src/i18n/copy/<lang>.ts`, all shaped like `en.ts` (TypeScript
  fails the build if a key is missing). One view per page in `src/views/`, one
  route file (`src/pages/[...path].astro`) builds every page in every language
  from `src/i18n/routes.ts` (slugs). Change a fact in English, then in all ten.
- Copy may hold a link (`linker`) and two tokens, `{price}` and `{size}`, which
  become `<span data-price>` / `<span data-size>` holding the value of the
  language's own country (`LOCALES[lang].country`).
- `functions/_middleware.ts` (Cloudflare edge, `request.cf.country`) rewrites
  those spans for a visitor from another country and redirects `/` by country
  and Accept-Language. It skips crawlers, same-site referrers and anyone with a
  `lang` cookie. Crawlers (search engines and AI assistants, `BOTS`) also get
  the page's own price and size, never the rewritten ones: they call from the
  US and would learn the Spanish page in dollars and inches. Without the function the static files still work.
- `src/config/pricing.ts` mirrors the app's price table and rounding. Keep it
  in step with `librofotos/lib/order/pricing.dart`; the 16 shipping countries
  are the order server's `ft_countries`.
- hreflang between all ten (plus x-default), Google Play badge per language
  (`src/assets/badges/google-play-<lang>.png`, official, unaltered).
- Japanese, Korean and Chinese use the system fonts (no web font to load).
- Changing a slug changes a live URL: add a redirect in `public/_redirects`.

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
MobileApplication, Product (the book, one offer per currency with its
countries, from the app's order screen), HowTo (the three steps), FAQPage, Article. All tied by `@id`. Validate with
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

## AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot)

- `src/lib/llms.ts` writes the site as Markdown at build time, from the same
  copy and prices the pages use, so it cannot drift: `/llms.txt` and
  `/xx/llms.txt` (what BabyBookAI is, a link to every page; llmstxt.org),
  `/llms-full.txt` and `/xx/llms-full.txt` (the product pages' whole text) and
  `/pricing.md` (every country's price). Its only own text is the English
  summary in `facts()`: keep it true when the product changes. A new page or
  a new shape in the copy files: check its section in `dist/llms-full.txt`.
- These files are `noindex` (`public/_headers`) and outside the edge function
  (`public/_routes.json`): read by whoever asks, never a search result.
- `public/robots.txt` names the AI crawlers and allows them all, training
  included (`Content-Signal`). Carlos wants the brand known to the models.
- The home FAQ opens with "What is BabyBookAI?" in every language: the
  one-paragraph definition assistants quote. Keep it first.
- Google's AI Overviews use none of this, only normal search ranking. What
  moves the others most is being named elsewhere (store reviews, Reddit,
  round-ups), which the site cannot do.

## Commands

```
npm run dev       # or: npx astro dev --background
npm run build
npm run preview
npm run deploy    # build + direct upload to Cloudflare Pages (wrangler)
npm run indexnow  # after a deploy: ping Bing/Yandex with the sitemap's URLs
```
