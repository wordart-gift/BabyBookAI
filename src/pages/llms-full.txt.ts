import type { APIRoute } from 'astro';
import { llmsFullTxt } from '../lib/llms';

/** /llms-full.txt, in English: the product pages' whole text (src/lib/llms.ts). */
export const GET: APIRoute = () =>
  new Response(llmsFullTxt('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
