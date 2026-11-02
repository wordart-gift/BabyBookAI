import { getCollection, type CollectionEntry } from 'astro:content';
import { rich } from '../i18n/format';
import { isLang, LOCALES, type Lang } from '../i18n/locales';
import { path, PAGES, type PageId } from '../i18n/routes';

export type Post = CollectionEntry<'blog'>;

/** The article that already existed when the blog arrived, listed on its index too. */
export const IDEAS_PUBLISHED = '2026-10-09';

/** es/diario-del-bebe: the folder is the language, the file the slug. */
export function postLang(post: Post): Lang {
  const lang = post.id.split('/')[0];
  if (!isLang(lang)) throw new Error(`Blog post outside a language folder: ${post.id}`);
  return lang;
}

export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');

export function postPath(post: Post): string {
  const lang = postLang(post);
  return `${lang === 'en' ? '' : `/${lang}`}/blog/${postSlug(post)}/`;
}

/** Every post, newest first. One keyword, one page: a repeated keyword stops the build. */
export async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  const seen = new Map<string, string>();
  for (const post of posts) {
    const key = `${postLang(post)}:${post.data.keyword.toLowerCase()}`;
    const other = seen.get(key);
    if (other) throw new Error(`Keyword "${post.data.keyword}" is taken by both ${other} and ${post.id}`);
    seen.set(key, post.id);
  }
  return posts.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export const postsIn = async (lang: Lang) => (await allPosts()).filter((post) => postLang(post) === lang);

/** The path a `page:` link in a post stands for; a mistyped page stops the build. */
export function pageLink(url: string, lang: Lang): string {
  const page = url.slice('page:'.length);
  if (!(PAGES as readonly string[]).includes(page)) throw new Error(`Unknown page in a blog post: ${url}`);
  return path(page as PageId, lang);
}

/** Each cell names its column: on a phone a table's rows stack (`.post td`) and lose their header. */
const labelCells = (html: string) =>
  html.replace(/<table>.*?<\/table>/gs, (table) => {
    const heads = [...table.matchAll(/<th[^>]*>(.*?)<\/th>/gs)].map(([, head]) => head.replace(/<[^>]+>/g, '').trim());
    return table.replace(/<tr>.*?<\/tr>/gs, (row) => {
      let column = 0;
      return row.replace(/<td/g, () => `<td data-label="${heads[column++] ?? ''}"`);
    });
  });

/**
 * A post's rendered HTML in the site's own terms: `page:` links become the
 * page's path in the post's language, tables get ready for a phone, and {price}
 * and {size} become the spans the edge middleware rewrites for a visitor from
 * another country.
 */
export const resolvePostHtml = (html: string, lang: Lang) =>
  rich(labelCells(html).replace(/href="(page:[^"]+)"/g, (_, url: string) => `href="${pageLink(url, lang)}"`), lang);

/** "2 de noviembre de 2026". Noon, so no timezone can move the day. */
export const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALES[lang].intl, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`));
