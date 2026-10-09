import { LANGS, type Lang } from './locales';

/**
 * Every page in every language, with its own slug: the searched words in
 * each language's URL (fotolibro, Fotobuch, livre photo... the product words
 * the Play listings found searched in each market). Japanese, Korean and
 * Chinese keep the English slugs: a URL in their script travels as
 * percent-escapes.
 *
 * Changing a slug changes a live URL: add a redirect in public/_redirects.
 */
export const PAGES = [
  'home',
  'babyPhotoBook',
  'firstYear',
  'boy',
  'girl',
  'ideas',
  'about',
  'support',
  'privacy',
  'terms',
] as const;
export type PageId = (typeof PAGES)[number];

const EN: Record<PageId, string> = {
  home: '',
  babyPhotoBook: 'baby-photo-book',
  firstYear: 'first-year-photo-book',
  boy: 'baby-boy-photo-album',
  girl: 'baby-girl-photo-album',
  ideas: 'baby-photo-book-ideas',
  about: 'about',
  support: 'support',
  privacy: 'privacy-policy',
  terms: 'terms',
};

const SLUGS: Record<Lang, Record<PageId, string>> = {
  en: EN,
  es: {
    home: '',
    babyPhotoBook: 'fotolibro-bebe',
    firstYear: 'fotolibro-primer-ano',
    boy: 'album-fotos-bebe-nino',
    girl: 'album-fotos-bebe-nina',
    ideas: 'ideas-fotolibro-bebe',
    about: 'sobre-nosotros',
    support: 'ayuda',
    privacy: 'privacidad',
    terms: 'condiciones',
  },
  fr: {
    home: '',
    babyPhotoBook: 'livre-photo-bebe',
    firstYear: 'livre-photo-premiere-annee',
    boy: 'album-photo-bebe-garcon',
    girl: 'album-photo-bebe-fille',
    ideas: 'idees-livre-photo-bebe',
    about: 'a-propos',
    support: 'aide',
    privacy: 'confidentialite',
    terms: 'conditions',
  },
  de: {
    home: '',
    babyPhotoBook: 'fotobuch-baby',
    firstYear: 'fotobuch-erstes-lebensjahr',
    boy: 'fotoalbum-baby-junge',
    girl: 'fotoalbum-baby-maedchen',
    ideas: 'fotobuch-baby-ideen',
    about: 'ueber-uns',
    support: 'hilfe',
    privacy: 'datenschutz',
    terms: 'agb',
  },
  it: {
    home: '',
    babyPhotoBook: 'fotolibro-neonato',
    firstYear: 'fotolibro-primo-anno',
    boy: 'album-foto-bambino',
    girl: 'album-foto-bambina',
    ideas: 'idee-fotolibro-neonato',
    about: 'chi-siamo',
    support: 'assistenza',
    privacy: 'privacy',
    terms: 'termini',
  },
  pt: {
    home: '',
    babyPhotoBook: 'fotolivro-bebe',
    firstYear: 'fotolivro-primeiro-ano',
    boy: 'album-fotos-bebe-menino',
    girl: 'album-fotos-bebe-menina',
    ideas: 'ideias-fotolivro-bebe',
    about: 'sobre-nos',
    support: 'ajuda',
    privacy: 'privacidade',
    terms: 'termos',
  },
  nl: {
    home: '',
    babyPhotoBook: 'fotoboek-baby',
    firstYear: 'fotoboek-eerste-jaar',
    boy: 'fotoalbum-babyjongen',
    girl: 'fotoalbum-babymeisje',
    ideas: 'fotoboek-baby-ideeen',
    about: 'over-ons',
    support: 'hulp',
    privacy: 'privacy',
    terms: 'voorwaarden',
  },
  ja: EN,
  ko: EN,
  zh: EN,
};

/** The page's path in a language, with the trailing slash every URL carries. */
export function path(page: PageId, lang: Lang): string {
  const slug = SLUGS[lang][page];
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** The same page in every language, for hreflang and the switcher. */
export function alternates(page: PageId): { lang: Lang; path: string }[] {
  return LANGS.map((lang) => ({ lang, path: path(page, lang) }));
}

/** Every route the site builds (all but the 404). */
export function routes(): { page: PageId; lang: Lang; path: string }[] {
  return LANGS.flatMap((lang) => PAGES.map((page) => ({ page, lang, path: path(page, lang) })));
}
