import { LOCALES, type Lang } from './locales';
import { path, type PageId } from './routes';
import { priceFor, sizeFor } from '../config/pricing';

/**
 * Copy is written as short HTML strings so a sentence can carry a link, and
 * with two tokens that depend on the visitor's country, not on the language:
 * {price} (the 30-page book) and {size} (cm or inches). In the page they
 * become spans holding the language's own country's value; the edge
 * middleware rewrites the spans' contents for a visitor from anywhere else.
 */

export const defaultPrice = (lang: Lang) => priceFor(LOCALES[lang].country, lang);
export const defaultSize = (lang: Lang) => sizeFor(LOCALES[lang].country);

/** For set:html. Only the site's own copy goes through here, never input. */
export function rich(text: string, lang: Lang): string {
  return text
    .replaceAll('{price}', `<span data-price>${defaultPrice(lang)}</span>`)
    .replaceAll('{size}', `<span data-size>${defaultSize(lang)}</span>`);
}

/** The same text without markup, for <title>, meta and JSON-LD. */
export function plain(text: string, lang: Lang): string {
  return text
    .replaceAll('{price}', defaultPrice(lang))
    .replaceAll('{size}', defaultSize(lang))
    .replace(/<[^>]+>/g, '')
    .replaceAll('&amp;', '&');
}

/** A link inside a sentence, to a page in the same language. */
export function linker(lang: Lang) {
  return (page: PageId, text: string) => `<a class="lnk" href="${path(page, lang)}">${text}</a>`;
}

/**
 * The dates of the spread drawn on the pages (Noa's sixth month: born
 * 9 May 2021), as the language writes a short range: "Oct 9 – Nov 8",
 * "9 oct – 8 nov".
 */
export function spreadDates(lang: Lang): string {
  const fmt = new Intl.DateTimeFormat(LOCALES[lang].intl, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  return fmt.formatRange(new Date(Date.UTC(2021, 9, 9)), new Date(Date.UTC(2021, 10, 8)));
}
