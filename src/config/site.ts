/**
 * Every fact about the brand and the product that the site states, in one
 * place. Product facts must match the app's CLAUDE.md
 * (C:\Users\X421\proyectos\librofotos), which is their source of truth.
 */
export const SITE = {
  name: 'BabyBookAI',
  url: 'https://babybookai.com',
  locale: 'en_US',
  lang: 'en-US',
  /** Used when a page does not bring its own. */
  defaultDescription:
    'BabyBookAI turns the photos already on your phone into a printed hardcover book of your baby’s first year. It picks, sorts and lays out the photos for you.',
  defaultOgImage: '/og/default.png',
  // TODO: confirm the mailbox exists before launch.
  supportEmail: 'hello@babybookai.com',
} as const;

export const PUBLISHER = {
  name: 'Photo-to-Text',
  // TODO: Photo-to-Text's own site, if it has one, for Organization.sameAs.
  url: 'https://babybookai.com',
} as const;

/** The printed book, as Gelato makes it. Never say "layflat": it is glued. */
export const BOOK = {
  format: 'Hardcover',
  sizeIn: '11 × 11 in',
  sizeCm: '28 × 28 cm',
  pagesMin: 30,
  pagesSuggestedMax: 36,
  /** Pages past pagesSuggestedMax cost extra. */
  pagesMax: 40,
  /** The setup offers these lengths; the start date is the parent's. */
  monthsOptions: [6, 12, 18],
  paper: '170 gsm silk-coated paper',
  cover: 'Matte-laminated hardcover',
  shipsTo: 'United States',
} as const;

/**
 * The store listings. The site goes live with the apps, so every download
 * button and the /get/ smart link read these. Google Play is live (Oct 2026);
 * the iPhone app is not yet: while appStore is null the site says "coming soon".
 */
export const STORES = {
  appStore: null as string | null,
  googlePlay: 'https://play.google.com/store/apps/details?id=com.babybookai.app' as string | null,
} as const;

/** One link for both stores (functions/get/[[path]].ts sends each phone to its own). */
export const SMART_LINK = `${SITE.url}/get/`;
