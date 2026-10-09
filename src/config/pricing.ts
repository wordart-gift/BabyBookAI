/**
 * The book's price and size as the visitor's country sees them, by the same
 * rules as the app (librofotos lib/order/pricing.dart and lib/util/dates.dart
 * BookSize). Keep the two in step: a price on the site that the app does not
 * charge would be a promise broken at checkout.
 *
 * Used at build time for each language's static page, and at the edge
 * (functions/_middleware.ts) to rewrite them for a visitor from elsewhere, so
 * nothing here may import Astro.
 */

type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY' | 'KRW' | 'CNY';

/** The 30-page book, shipping included, in each currency (the app's table). */
const BASE: Record<Currency, { amount: number; decimals: number }> = {
  USD: { amount: 49.99, decimals: 2 },
  EUR: { amount: 44.99, decimals: 2 },
  GBP: { amount: 39.99, decimals: 2 },
  CAD: { amount: 74.99, decimals: 2 },
  AUD: { amount: 74.99, decimals: 2 },
  JPY: { amount: 7500, decimals: 0 },
  KRW: { amount: 69000, decimals: 0 },
  CNY: { amount: 359, decimals: 2 },
};

const EURO = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV',
  'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES',
]);

/** Where the book is sold (the order server's ft_countries). */
export const SHIPPING_COUNTRIES = [
  'US', 'GB', 'CA', 'AU', 'IE', 'DE', 'AT', 'FR', 'BE', 'ES',
  'IT', 'NL', 'PT', 'JP', 'KR', 'CN',
] as const;

/** The currency of a country: the euro for the euro area, dollars elsewhere. */
export function currencyFor(country: string): Currency {
  switch (country) {
    case 'US': return 'USD';
    case 'CA': return 'CAD';
    case 'GB': return 'GBP';
    case 'AU': return 'AUD';
    case 'JP': return 'JPY';
    case 'KR': return 'KRW';
    case 'CN': return 'CNY';
    default: return EURO.has(country) ? 'EUR' : 'USD';
  }
}

/** How the country writes money; the currency's home for anywhere else. */
function moneyLocale(currency: Currency, country: string, lang: string): string {
  const byCountry: Record<string, string> = {
    US: 'en-US', GB: 'en-GB', IE: 'en-IE', AU: 'en-AU',
    CA: lang === 'fr' ? 'fr-CA' : 'en-CA',
    BE: lang === 'nl' ? 'nl-BE' : 'fr-BE',
    DE: 'de-DE', AT: 'de-AT', FR: 'fr-FR', ES: 'es-ES', IT: 'it-IT', PT: 'pt-PT', NL: 'nl-NL',
    JP: 'ja-JP', KR: 'ko-KR', CN: 'zh-CN',
  };
  if (byCountry[country]) return byCountry[country];
  const home: Record<Currency, string> = {
    USD: 'en-US', GBP: 'en-GB', CAD: 'en-CA', AUD: 'en-AU', EUR: 'de-DE',
    JPY: 'ja-JP', KRW: 'ko-KR', CNY: 'zh-CN',
  };
  return home[currency];
}

/**
 * "$49.99", "44,99 €", "CA$74.99": every dollar says which one it is, as in
 * the app (a Canadian could not tell theirs from the American "$").
 */
export function priceFor(country: string, lang: string): string {
  const currency = currencyFor(country);
  const { amount, decimals } = BASE[currency];
  const symbol: string | undefined = {
    USD: country === 'US' ? '$' : 'US$',
    CAD: 'CA$',
    AUD: 'A$',
    JPY: '¥',
  }[currency as 'USD' | 'CAD' | 'AUD' | 'JPY'];
  const parts = new Intl.NumberFormat(moneyLocale(currency, country, lang), {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).formatToParts(amount);
  return parts.map((p) => (p.type === 'currency' && symbol ? symbol : p.value)).join('');
}

/** Every price, for the Product's offers: one per currency and its countries. */
export function allPrices(): { currency: Currency; price: string; countries: string[] }[] {
  return (Object.keys(BASE) as Currency[]).map((currency) => ({
    currency,
    price: BASE[currency].amount.toFixed(BASE[currency].decimals),
    countries: SHIPPING_COUNTRIES.filter((c) => currencyFor(c) === currency),
  }));
}

const INCHES = new Set(['US', 'LR', 'MM']);

/** The page size, in inches only where people measure in inches. */
export function sizeFor(country: string): string {
  return INCHES.has(country) ? '11 × 11″' : '28 × 28 cm';
}
