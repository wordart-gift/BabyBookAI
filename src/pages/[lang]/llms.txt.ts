import type { APIRoute, GetStaticPaths } from 'astro';
import { llmsTxt } from '../../lib/llms';
import { LANGS, type Lang } from '../../i18n/locales';

/** /es/llms.txt and the rest: llms.txt in each language but English. */
export const getStaticPaths = (() =>
  LANGS.filter((lang) => lang !== 'en').map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(llmsTxt(params.lang as Lang), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
