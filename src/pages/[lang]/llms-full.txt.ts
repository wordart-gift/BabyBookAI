import type { APIRoute, GetStaticPaths } from 'astro';
import { llmsFullTxt } from '../../lib/llms';
import { LANGS, type Lang } from '../../i18n/locales';

/** /es/llms-full.txt and the rest: the product pages' text in each language but English. */
export const getStaticPaths = (() =>
  LANGS.filter((lang) => lang !== 'en').map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) =>
  new Response(await llmsFullTxt(params.lang as Lang), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
