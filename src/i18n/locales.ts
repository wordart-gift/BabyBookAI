/**
 * The site's languages: the app's ten (librofotos lib/l10n). English is the
 * default and has no prefix; every other language lives under /xx/.
 *
 * Imported by the edge middleware too (functions/_middleware.ts), so nothing
 * here may import Astro.
 */
export const LANGS = ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ja', 'ko', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const isLang = (value: string | null | undefined): value is Lang =>
  !!value && (LANGS as readonly string[]).includes(value);

export const LOCALES: Record<
  Lang,
  {
    /** The language's own name, for the switcher. */
    name: string;
    /** <html lang> and hreflang. */
    tag: string;
    /** og:locale. */
    og: string;
    /** For dates (Intl). */
    intl: string;
    /**
     * The country a page in this language is written for: its price and its
     * size in the static HTML. The edge middleware rewrites both for a visitor
     * from anywhere else.
     */
    country: string;
  }
> = {
  en: { name: 'English', tag: 'en', og: 'en_US', intl: 'en-US', country: 'US' },
  es: { name: 'Español', tag: 'es', og: 'es_ES', intl: 'es-ES', country: 'ES' },
  fr: { name: 'Français', tag: 'fr', og: 'fr_FR', intl: 'fr-FR', country: 'FR' },
  de: { name: 'Deutsch', tag: 'de', og: 'de_DE', intl: 'de-DE', country: 'DE' },
  it: { name: 'Italiano', tag: 'it', og: 'it_IT', intl: 'it-IT', country: 'IT' },
  // European Portuguese, as the app writes it (bebé, telemóvel, tu).
  pt: { name: 'Português', tag: 'pt', og: 'pt_PT', intl: 'pt-PT', country: 'PT' },
  nl: { name: 'Nederlands', tag: 'nl', og: 'nl_NL', intl: 'nl-NL', country: 'NL' },
  ja: { name: '日本語', tag: 'ja', og: 'ja_JP', intl: 'ja-JP', country: 'JP' },
  ko: { name: '한국어', tag: 'ko', og: 'ko_KR', intl: 'ko-KR', country: 'KR' },
  zh: { name: '简体中文', tag: 'zh-Hans', og: 'zh_CN', intl: 'zh-CN', country: 'CN' },
};

/**
 * The language a first visit to the home page is sent to, by the visitor's
 * country (Cloudflare's CF-IPCountry). Countries that speak more than one of
 * ours list them all: the browser's Accept-Language picks among them, the
 * first being the default. Anywhere not listed gets English.
 */
export const COUNTRY_LANGS: Record<string, Lang[]> = {
  // Spanish
  ES: ['es'], MX: ['es'], AR: ['es'], CO: ['es'], CL: ['es'], PE: ['es'], VE: ['es'], EC: ['es'],
  GT: ['es'], CU: ['es'], BO: ['es'], DO: ['es'], HN: ['es'], PY: ['es'], SV: ['es'], NI: ['es'],
  CR: ['es'], PA: ['es'], UY: ['es'], PR: ['es'], GQ: ['es'], AD: ['es'],
  // French
  FR: ['fr'], MC: ['fr'], LU: ['fr', 'de'], SN: ['fr'], CI: ['fr'], CM: ['fr'], MA: ['fr'], TN: ['fr'],
  // German
  DE: ['de'], AT: ['de'], LI: ['de'], CH: ['de', 'fr', 'it'],
  // Italian
  IT: ['it'], SM: ['it'], VA: ['it'],
  // Portuguese
  PT: ['pt'], BR: ['pt'], AO: ['pt'], MZ: ['pt'],
  // Dutch
  NL: ['nl'], BE: ['nl', 'fr'], SR: ['nl'],
  // Japanese, Korean, Chinese
  JP: ['ja'], KR: ['ko'], CN: ['zh'], TW: ['zh'], HK: ['zh'], MO: ['zh'],
  // English where it shares the country with one of ours
  CA: ['en', 'fr'],
};
