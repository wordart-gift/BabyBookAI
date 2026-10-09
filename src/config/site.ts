/**
 * Every fact about the brand and the product that the site states, in one
 * place. Product facts must match the app's CLAUDE.md
 * (C:\Users\X421\proyectos\librofotos), which is their source of truth.
 */
export const SITE = {
  name: 'BabyBookAI',
  url: 'https://babybookai.com',
  defaultOgImage: '/og/default.png',
  /**
   * Where visitors write. Cloudflare Email Routing forwards it to
   * info@photo-to-text.com, the address the store listings were set up with.
   */
  supportEmail: 'info@babybookai.com',
} as const;

/**
 * Google. Both are null until Carlos creates them: with a null ID nothing is
 * loaded or printed. The GA4 tag runs off the main thread (Partytown), so it
 * does not cost the performance budget.
 */
export const GOOGLE = {
  /** GA4 measurement ID, "G-XXXXXXXXXX". */
  analyticsId: null as string | null,
  /** Search Console's HTML-tag token, if the property is not verified by DNS. */
  siteVerification: null as string | null,
} as const;

export const PUBLISHER = {
  name: 'Photo-to-Text',
  url: 'https://photo-to-text.com',
} as const;

/**
 * The printed book, as Gelato makes it. Never say "layflat": it is glued.
 * Its size and price depend on the visitor's country: src/config/pricing.ts.
 */
export const BOOK = {
  pagesMin: 30,
  pagesSuggestedMax: 36,
  /** Pages past pagesSuggestedMax cost extra. */
  pagesMax: 40,
  /** The setup offers these lengths; the start date is the parent's. */
  monthsOptions: [6, 12, 18],
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
