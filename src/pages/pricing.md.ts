import type { APIRoute } from 'astro';
import { pricingMd } from '../lib/llms';

/** /pricing.md: the price in every country, for AI agents (src/lib/llms.ts). */
export const GET: APIRoute = () =>
  new Response(pricingMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
