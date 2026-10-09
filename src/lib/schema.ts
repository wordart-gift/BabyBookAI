import { BOOK, PUBLISHER, SITE, STORES } from '../config/site';

/**
 * JSON-LD builders. Pages pick the nodes they need and the layout prints
 * them as one @graph.
 *
 * Nothing here may claim what is not true yet: no aggregateRating until the
 * stores have real reviews, and no price for the book until it is set. Google drops
 * the rich result without them, and that is the honest outcome.
 */
export type SchemaNode = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#app`;

export function organization(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: PUBLISHER.name,
    url: PUBLISHER.url,
    brand: { '@type': 'Brand', name: SITE.name },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.supportEmail,
      availableLanguage: 'English',
    },
  };
}

export function website(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
  };
}

export function mobileApplication(): SchemaNode {
  const downloadUrl = [STORES.appStore, STORES.googlePlay].filter(Boolean);
  return {
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.defaultDescription,
    // Add iOS when the App Store listing is live (STORES.appStore).
    operatingSystem: STORES.appStore ? 'iOS, Android' : 'Android',
    applicationCategory: 'LifestyleApplication',
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
    ...(downloadUrl.length ? { downloadUrl } : {}),
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

export function breadcrumbs(items: { name: string; path: string }[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}

export type Faq = { question: string; answer: string };

/** The answers must be the same text the page shows. */
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

export function graph(nodes: SchemaNode[]): string {
  // `<` escaped so no string in the data can close the script tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
