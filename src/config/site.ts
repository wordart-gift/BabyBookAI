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
  pagesMax: 40,
  paper: '170 gsm silk-coated paper',
  cover: 'Matte-laminated hardcover',
  shipsTo: 'United States',
} as const;

/** The apps are not out yet; links go live by filling these in. */
export const STORES = {
  appStore: null as string | null,
  googlePlay: null as string | null,
} as const;
