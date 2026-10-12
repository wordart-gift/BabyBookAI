import { BOOK, PUBLISHER, SITE, STORES } from '../config/site';
import { allPrices } from '../config/pricing';
import { COPY } from '../i18n/copy';
import { LANGS, LOCALES, type Lang } from '../i18n/locales';
import { path, type PageId } from '../i18n/routes';

/**
 * JSON-LD builders. Every page gets WebSite, Organization and its own WebPage
 * from the layout (SEO.astro); pages add the nodes they need and the layout
 * prints them all as one @graph, tied together by @id.
 *
 * Nothing here may claim what is not true yet: no aggregateRating or review
 * until the stores have real ones. Google drops some rich results without
 * them, and that is the honest outcome.
 */
export type SchemaNode = Record<string, unknown>;

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const APP_ID = `${SITE.url}/#app`;
export const BOOK_ID = `${SITE.url}/#book`;

const abs = (path: string) => new URL(path, SITE.url).href;
const days = ([minValue, maxValue]: readonly number[]) => ({
  '@type': 'QuantitativeValue',
  minValue,
  maxValue,
  unitCode: 'DAY',
});

export function organization(lang: Lang): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: PUBLISHER.name,
    url: PUBLISHER.url,
    logo: {
      '@type': 'ImageObject',
      url: abs('/brand/photo-to-text.png'),
      width: 600,
      height: 115,
    },
    email: SITE.supportEmail,
    brand: { '@type': 'Brand', name: SITE.name, logo: abs('/brand/babybookai-icon.png') },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.supportEmail,
      // Support answers in English and Spanish.
      availableLanguage: ['en', 'es'],
      url: abs(path('support', lang)),
    },
  };
}

export function website(lang: Lang): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: COPY[lang].ui.defaultDescription,
    inLanguage: LANGS.map((l) => LOCALES[l].tag),
    publisher: { '@id': ORG_ID },
  };
}

export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';

/** The page itself. Built by SEO.astro for every page, so none can forget it. */
export function webPage(opts: {
  url: string;
  name: string;
  description: string;
  image: string;
  type?: PageType;
  hasBreadcrumb?: boolean;
  about?: string[];
  lang: Lang;
}): SchemaNode {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: LOCALES[opts.lang].tag,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: opts.image },
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${opts.url}#breadcrumb` } } : {}),
    ...(opts.about?.length ? { about: opts.about.map((id) => ({ '@id': id })) } : {}),
  };
}

export function mobileApplication(lang: Lang): SchemaNode {
  const downloadUrl = [STORES.appStore, STORES.googlePlay].filter(Boolean) as string[];
  return {
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: SITE.name,
    url: abs(path('home', lang)),
    description: COPY[lang].ui.defaultDescription,
    image: abs('/brand/babybookai-icon.png'),
    // Add iOS when the App Store listing is live (STORES.appStore).
    operatingSystem: STORES.appStore ? 'iOS, Android' : 'Android',
    applicationCategory: 'PhotographyApplication',
    inLanguage: LANGS.map((l) => LOCALES[l].tag),
    publisher: { '@id': ORG_ID },
    ...(downloadUrl.length ? { downloadUrl, installUrl: downloadUrl[0], sameAs: downloadUrl } : {}),
    // The app itself is free; the printed book is bought inside it.
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: COPY[lang].ui.schema.appFeatures,
  };
}

/**
 * The printed book, the thing a parent pays for. Its prices are the app's
 * order screen: pagesMin pages, shipping included, one offer per currency
 * for the countries that pay in it. Bought in the app, which the offer's url
 * leads to through the download section.
 */
export function photoBook(lang: Lang): SchemaNode {
  const t = COPY[lang].ui.schema;
  return {
    '@type': 'Product',
    '@id': BOOK_ID,
    name: t.bookName,
    description: t.bookDescription,
    image: [abs(SITE.defaultOgImage)],
    brand: { '@type': 'Brand', name: SITE.name },
    category: 'Photo books',
    width: { '@type': 'QuantitativeValue', value: 28, unitCode: 'CMT' },
    height: { '@type': 'QuantitativeValue', value: 28, unitCode: 'CMT' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: t.pages, value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
      { '@type': 'PropertyValue', name: t.binding, value: t.bindingValue },
    ],
    offers: allPrices().map((offer) => ({
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: offer.currency,
      eligibleRegion: offer.countries.map((c) => ({ '@type': 'Country', name: c })),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: abs(path('babyPhotoBook', lang)),
      seller: { '@id': ORG_ID },
      shippingDetails: offer.countries.map((c) => ({
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: offer.currency },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: c },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: days(BOOK.handlingDays),
          transitTime: days(BOOK.transitDays),
        },
      })),
      // A book made for one family is not taken back for a change of mind
      // (the terms page). One that arrives damaged or misprinted is reprinted
      // or refunded on a photo of it: a remedy, not a return, which this
      // vocabulary has no word for, so the terms page is linked.
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: offer.countries,
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        merchantReturnLink: abs(path('terms', lang)),
      },
    })),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]): SchemaNode {
  const last = items[items.length - 1];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(last.path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/**
 * The three steps every product page shows (ui.how), under the page's own
 * heading. Google no longer draws a rich result for HowTo; it is here for
 * the assistants that read a process as steps.
 */
export function howTo(lang: Lang, page: PageId, name?: string): SchemaNode {
  const how = COPY[lang].ui.how;
  const url = abs(path(page, lang));
  return {
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name: name ?? how.title,
    inLanguage: LOCALES[lang].tag,
    tool: { '@type': 'HowToTool', name: SITE.name },
    step: how.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.body,
      url: `${url}#how`,
    })),
  };
}

export type Faq = { question: string; answer: string };

/**
 * The questions as their own node. The answers must be the same text the page
 * shows. Google shows FAQ rich results only for a few sites now, but the
 * markup still states plainly what the page answers, which AI answers read.
 */
export function faqPage(faqs: Faq[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function article(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  lang: Lang;
}): SchemaNode {
  const url = abs(opts.path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    image: [abs(opts.image ?? SITE.defaultOgImage)],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: LOCALES[opts.lang].tag,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

export function graph(nodes: SchemaNode[]): string {
  // `<` escaped so no string in the data can close the script tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
