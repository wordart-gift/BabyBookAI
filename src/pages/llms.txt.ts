import type { APIRoute } from 'astro';
import { llmsTxt } from '../lib/llms';

/** /llms.txt, in English: the site for AI assistants (src/lib/llms.ts). */
export const GET: APIRoute = () =>
  new Response(llmsTxt('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
