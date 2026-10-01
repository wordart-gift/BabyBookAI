// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Pages that exist for people who just acted, not for search.
const NOT_IN_SITEMAP = ['/waitlist/thanks/'];

// https://astro.build/config
export default defineConfig({
  // The apex is canonical; www is redirected to it at Cloudflare.
  site: 'https://babybookai.com',
  // One URL per page: Cloudflare Pages serves /page/ for page/index.html and
  // redirects /page to it, so the canonical has to carry the slash too.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // The whole stylesheet is a few KB: inlining it removes the only
    // render-blocking request on first load.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !NOT_IN_SITEMAP.some((path) => page.endsWith(path)),
    }),
  ],
});
