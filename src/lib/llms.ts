import { BOOK, PUBLISHER, SITE, SOCIAL, STORES } from '../config/site';
import { currencyFor, priceFor, SHIPPING_COUNTRIES, sizeFor } from '../config/pricing';
import { COPY } from '../i18n/copy';
import { LANGS, LOCALES, type Lang } from '../i18n/locales';
import { path, type PageId } from '../i18n/routes';
import { defaultPrice, defaultSize } from '../i18n/format';

/**
 * The site as plain Markdown, for AI assistants and agents (llmstxt.org):
 *
 *   /llms.txt, /xx/llms.txt            what BabyBookAI is and where each page is
 *   /llms-full.txt, /xx/llms-full.txt  the product pages' whole text
 *   /pricing.md                        the price in every country it ships to
 *
 * Nothing is written twice: every word comes from the same copy the pages
 * show (src/i18n/copy) and every price from src/config/pricing.ts, so these
 * files cannot say what the site does not. The only text of their own is the
 * English summary in `facts`, which states the same facts tersely; keep it
 * true when the product changes.
 */

const abs = (p: string) => new URL(p, SITE.url).href;
const prefix = (lang: Lang) => (lang === 'en' ? '' : `/${lang}`);
export const llmsPath = (lang: Lang) => `${prefix(lang)}/llms.txt`;
export const llmsFullPath = (lang: Lang) => `${prefix(lang)}/llms-full.txt`;

/** A copy string as Markdown: links kept, tokens filled, other markup dropped. */
function md(text: string, lang: Lang): string {
  return text
    .replaceAll('{price}', defaultPrice(lang))
    .replaceAll('{size}', defaultSize(lang))
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, (_, href: string, label: string) =>
      href.startsWith('mailto:') ? label : `[${label}](${href.startsWith('/') ? abs(href) : href})`,
    )
    .replace(/<\/?strong>/g, '**')
    .replace(/<[^>]+>/g, '')
    .replaceAll('&amp;', '&');
}

/** Keys that are page furniture, not content. */
const SKIP = new Set([
  'title', 'description', 'crumb', 'eyebrow', 'headline', 'tocTitle', 'toc', 'figcaption', 'yourPart',
  'emailLabel', 'bookTitle', 'priceNote', 'others',
]);

type Node = string | Node[] | { [key: string]: Node };

/** One item of a list: its first string in bold, the rest after it. */
function item(value: Node, lang: Lang): string {
  if (typeof value === 'string') return `- ${md(value, lang)}`;
  const parts = Object.values(value as Record<string, Node>).filter((v): v is string => typeof v === 'string');
  const [first, ...rest] = parts.map((p) => md(p, lang));
  // "Size: 28 × 28 cm", but "Aim for 10 to 15 a month. A 30-page book…" as it is.
  const label = /[.!?。!?::]$/.test(first) ? first : `${first}:`;
  return `- **${label}**${rest.length ? ` ${rest.join(' — ')}` : ''}`;
}

/**
 * A page's copy as Markdown, walking it in the order the page shows it. The
 * copy files share a few shapes and this reads them by shape, not by page:
 * `title` opens a section, `xxxTitle` a heading, a list of questions becomes
 * questions, `paragraphs` paragraphs, any other list bullets.
 */
function walk(node: { [key: string]: Node }, lang: Lang, depth: number, out: string[]): void {
  const h = '#'.repeat(Math.min(depth, 6));
  const how = COPY[lang].ui.how;
  for (const [key, value] of Object.entries(node)) {
    if (key === 'title' && depth > 1 && typeof value === 'string') {
      out.push(`${h} ${md(value, lang)}`);
    } else if (SKIP.has(key)) {
      continue;
    } else if (key === 'howTitle' && typeof value === 'string') {
      out.push(`${h}# ${md(value, lang)}`, how.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join('\n'));
    } else if (key.endsWith('Title') && typeof value === 'string') {
      out.push(`${h}# ${md(value, lang)}`);
    } else if (typeof value === 'string') {
      // A bare call to action ("See the baby photo book in detail") is a button's label.
      if (key === 'more' && !value.includes('<a')) continue;
      if (key === 'h1') out.push(`# ${md(value, lang)}`);
      else if (key === 'updated' || key === 'date' || key === 'byline') out.push(`_${md(value, lang)}_`);
      else out.push(md(value, lang));
    } else if (Array.isArray(value)) {
      if (key === 'paragraphs') {
        out.push(...value.map((p) => md(p as string, lang)));
      } else if (value.every((v) => typeof v === 'object' && !Array.isArray(v) && 'question' in v)) {
        for (const faq of value as { question: string; answer: string }[]) {
          out.push(`${h}## ${md(faq.question, lang)}`, md(faq.answer, lang));
        }
      } else {
        out.push(value.map((v) => item(v, lang)).join('\n'));
      }
    } else {
      walk(value, lang, depth + 1, out);
    }
  }
}

/** The pages whose text goes into llms-full.txt: the product, not the legal pages. */
const FULL_PAGES: PageId[] = ['home', 'babyPhotoBook', 'firstYear', 'girl', 'boy', 'ideas', 'about', 'support'];

function pageMarkdown(page: PageId, lang: Lang): string {
  const copy = COPY[lang];
  const out: string[] = [];
  const source = copy[page] as unknown as { [key: string]: Node };
  if (page === 'home') {
    // The three steps have no key of their own on the home page: they follow
    // the comparison, as on the page.
    // The page names ours by its tag, not in the card's own name.
    const homework = COPY[lang].home.homework;
    const ways = homework.ways.map((w, i) => (i === homework.ways.length - 1 ? { ...w, name: `${SITE.name} (${w.name})` } : w));
    const entries = Object.entries({ ...source, homework: { ...homework, ways } });
    const cut = entries.findIndex(([key]) => key === 'homework') + 1;
    walk(Object.fromEntries(entries.slice(0, cut)), lang, 1, out);
    out.push(`## ${copy.ui.how.title}`, copy.ui.how.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`).join('\n'));
    walk(Object.fromEntries(entries.slice(cut)), lang, 1, out);
  } else if (page === 'support') {
    // Its closing line of links belongs to the page's foot, not before the questions.
    const { more: _more, ...rest } = source;
    walk(rest, lang, 1, out);
    out.push(`${copy.support.emailLabel}: ${SITE.supportEmail}`);
  } else {
    walk(source, lang, 1, out);
  }
  // The page's address right under its heading.
  out.splice(1, 0, abs(path(page, lang)));
  return out.join('\n\n');
}

const countryName = (country: string, lang: Lang) =>
  new Intl.DisplayNames([LOCALES[lang].intl], { type: 'region' }).of(country) ?? country;

/** "United States: $49.99, 11 × 11″" for every country the book ships to. */
function priceList(lang: Lang): string {
  return SHIPPING_COUNTRIES.map(
    (c) => `- ${countryName(c, lang)}: ${priceFor(c, lang)} (${currencyFor(c)}), ${sizeFor(c)}`,
  ).join('\n');
}

/** The home page's own answer about the price, whichever place it holds. */
const priceFaq = (lang: Lang) => COPY[lang].home.faq.find((f) => f.answer.includes('{price}'))!;

/**
 * The facts an assistant is asked for, stated once and plainly. English only:
 * the other languages' files carry the same facts in their pages' own words.
 */
function facts(): string {
  const platforms = STORES.appStore
    ? 'Android (Google Play) and iPhone (App Store)'
    : 'Android (Google Play); the iPhone app is coming soon';
  return [
    `- **What it is:** a free phone app that makes a printed hardcover photo book of a baby’s first year from the photos already on the parent’s phone. Its own AI chooses the best photos automatically, sorts them month by month and lays out every page; the parent looks through the book, swaps any photo for another from the same month or takes it out, and orders it.`,
    `- **Who it is for:** parents who have thousands of baby photos and no time to make a photo book, and grandparents or relatives who want one as a gift.`,
    `- **How it differs:** fill-in memory books and weekly baby book apps need work every week or month of the year, and photo book editors need the parent to choose and place every photo. ${SITE.name} needs nothing during the year and a few minutes at the end.`,
    `- **The book:** square hardcover, 28 × 28 cm (11 × 11 in), ${BOOK.pagesMin}–${BOOK.pagesMax} pages, 170 gsm silk-coated paper, matte laminated cover, glued binding. A two-page spread for every month, the baby’s name and best photo on the cover, three paper tones (cream, soft pink, soft blue). It can cover ${BOOK.monthsOptions.join(', ').replace(/, (\d+)$/, ' or $1')} months.`,
    `- **Price:** the app is free and there is no subscription. The printed book costs ${priceFor('US', 'en')} in the United States for ${BOOK.pagesMin} pages, shipping included (${priceFor('GB', 'en')} in the UK, ${priceFor('IE', 'en')} in the euro area); more pages, up to ${BOOK.pagesMax}, cost extra. Every country’s price: ${abs('/pricing.md')}`,
    `- **Where:** ships to ${SHIPPING_COUNTRIES.length} countries: ${SHIPPING_COUNTRIES.map((c) => countryName(c, 'en')).join(', ')}.`,
    `- **Privacy:** the photos are chosen on the phone; nothing is uploaded to choose them. Only the finished book is sent, when it is ordered, to be printed. No account, no advertising.`,
    `- **Platforms:** ${platforms}. The app and this site are in ${LANGS.length} languages.`,
    `- **Download:** ${STORES.googlePlay ?? abs('/#download')}`,
    `- **Made by:** ${PUBLISHER.name} (${PUBLISHER.url}). Contact: ${SITE.supportEmail}`,
    `- **Social:** Instagram ${SOCIAL.instagram} · YouTube ${SOCIAL.youtube}`,
  ].join('\n');
}

const link = (page: PageId, lang: Lang) => {
  const copy = COPY[lang];
  const label = page === 'home' ? SITE.name : copy.ui.footer.links[page as keyof typeof copy.ui.footer.links];
  return `- [${label}](${abs(path(page, lang))}): ${md((copy[page] as { description: string }).description, lang)}`;
};

/** /llms.txt: what the product is, and a link to every page (llmstxt.org). */
export function llmsTxt(lang: Lang): string {
  const { ui, home } = COPY[lang];
  const price = priceFaq(lang);
  const others = LANGS.filter((l) => l !== lang);
  return [
    `# ${SITE.name}`,
    `> ${ui.defaultDescription}`,
    lang === 'en' ? facts() : [home.lead, md(price.answer, lang), ui.free].join('\n\n'),
    `## ${ui.footer.book}`,
    (['home', 'babyPhotoBook', 'firstYear', 'girl', 'boy', 'ideas'] as PageId[]).map((p) => link(p, lang)).join('\n'),
    `## ${ui.footer.company}`,
    (['about', 'support', 'privacy', 'terms'] as PageId[]).map((p) => link(p, lang)).join('\n'),
    `## ${ui.language}`,
    others.map((l) => `- [${LOCALES[l].name}](${abs(llmsPath(l))})`).join('\n'),
    // "Optional" is the name llmstxt.org gives the section a reader may skip.
    '## Optional',
    [
      `- [llms-full.txt](${abs(llmsFullPath(lang))}): ${ui.footer.book}, ${ui.footer.links.ideas}, ${ui.footer.links.support}`,
      `- [pricing.md](${abs('/pricing.md')}): ${md(price.question, lang)}`,
    ].join('\n'),
  ].join('\n\n') + '\n';
}

/** /llms-full.txt: the product pages' whole text, one after another. */
export function llmsFullTxt(lang: Lang): string {
  const { ui } = COPY[lang];
  const price = priceFaq(lang);
  return [
    `# ${SITE.name}`,
    `> ${ui.defaultDescription}`,
    ...(lang === 'en' ? [facts()] : []),
    `## ${md(price.question, lang)}`,
    md(price.answer, lang),
    priceList(lang),
    ...FULL_PAGES.flatMap((page) => ['---', pageMarkdown(page, lang)]),
  ].join('\n\n') + '\n';
}

/** /pricing.md: every country's price, for an agent comparing products. */
export function pricingMd(): string {
  const rows = SHIPPING_COUNTRIES.map(
    (c) => `| ${countryName(c, 'en')} | ${priceFor(c, 'en')} | ${currencyFor(c)} | ${sizeFor(c)} |`,
  );
  return [
    `# Pricing — ${SITE.name}`,
    `> The ${SITE.name} app is free. The only thing sold is the printed photo book, paid once when it is ordered. There is no subscription and no account.`,
    '## The app',
    [
      '- Price: free',
      '- Included: choosing the photos, laying out the book, looking through it and editing it, as many times as you like',
      `- Platforms: ${STORES.appStore ? 'Android and iPhone' : 'Android (Google Play); iPhone coming soon'}`,
    ].join('\n'),
    '## The printed book',
    [
      `- Price: ${priceFor('US', 'en')} in the United States, one payment, for a ${BOOK.pagesMin}-page book`,
      '- Shipping: included in the price',
      `- Extra pages: up to ${BOOK.pagesMax} pages, at an extra cost shown in the app before paying`,
      `- Format: square hardcover, 28 × 28 cm (11 × 11 in), 170 gsm silk-coated paper, matte laminated cover`,
      '- Payment: by card, through Stripe',
      '- Printed on demand and shipped to the address given',
    ].join('\n'),
    `## Price by country (${BOOK.pagesMin} pages, shipping included)`,
    ['| Country | Price | Currency | Page size |', '|---|---|---|---|', ...rows].join('\n'),
    `The book ships to these ${SHIPPING_COUNTRIES.length} countries only. The app shows the final price in the buyer’s currency before payment.`,
    `More: ${abs(path('babyPhotoBook', 'en'))} · ${abs(path('support', 'en'))} · ${abs(path('terms', 'en'))}`,
  ].join('\n\n') + '\n';
}
