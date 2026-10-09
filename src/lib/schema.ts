import { BOOK, PUBLISHER, SITE, STORES } from '../config/site';

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

export function organization(): SchemaNode {
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
      availableLanguage: 'English',
      url: abs('/support/'),
    },
  };
}

export function website(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.defaultDescription,
    inLanguage: SITE.lang,
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
}): SchemaNode {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: opts.image },
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${opts.url}#breadcrumb` } } : {}),
    ...(opts.about?.length ? { about: opts.about.map((id) => ({ '@id': id })) } : {}),
  };
}

export function mobileApplication(): SchemaNode {
  const downloadUrl = [STORES.appStore, STORES.googlePlay].filter(Boolean) as string[];
  return {
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.defaultDescription,
    image: abs('/brand/babybookai-icon.png'),
    // Add iOS when the App Store listing is live (STORES.appStore).
    operatingSystem: STORES.appStore ? 'iOS, Android' : 'Android',
    applicationCategory: 'PhotographyApplication',
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
    ...(downloadUrl.length ? { downloadUrl, installUrl: downloadUrl[0], sameAs: downloadUrl } : {}),
    // The app itself is free; the printed book is bought inside it.
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      'Picks the photos on the phone: only the finished book is sent to print',
      'Picks the sharpest photo of every moment and drops duplicates and bursts',
      'Sorts the photos month by month from the date each was taken',
      `Lays out a ${BOOK.sizeIn} hardcover book of ${BOOK.pagesMin}–${BOOK.pagesMax} pages`,
      'Sends the book to print and ships it',
    ],
  };
}

/**
 * The printed book, the thing a parent pays for. Its price is the app's
 * order screen: pagesMin pages, US shipping included. Bought in the app,
 * which the offer's url leads to through the download section.
 */
export function photoBook(): SchemaNode {
  return {
    '@type': 'Product',
    '@id': BOOK_ID,
    name: `${SITE.name} baby photo book`,
    description: `A square ${BOOK.sizeIn} hardcover photo book of a baby’s first year, ${BOOK.pagesMin}–${BOOK.pagesMax} pages on ${BOOK.paper}, made by the ${SITE.name} app from the photos on your phone.`,
    image: [abs(SITE.defaultOgImage)],
    brand: { '@type': 'Brand', name: SITE.name },
    category: 'Photo books',
    material: BOOK.paper,
    width: { '@type': 'QuantitativeValue', value: 11, unitCode: 'INH' },
    height: { '@type': 'QuantitativeValue', value: 11, unitCode: 'INH' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Pages', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
      { '@type': 'PropertyValue', name: 'Binding', value: BOOK.format },
    ],
    offers: {
      '@type': 'Offer',
      price: BOOK.priceUsd,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: abs('/baby-photo-book/'),
      seller: { '@id': ORG_ID },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
      },
    },
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
    inLanguage: SITE.lang,
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
