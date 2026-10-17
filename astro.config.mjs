// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { GOOGLE } from './src/config/site.ts';
import { COPY } from './src/i18n/copy/index.ts';
import { LANGS } from './src/i18n/locales.ts';
import { path } from './src/i18n/routes.ts';
import { plain } from './src/i18n/format.ts';

// The book video of each language's home, for the sitemap (video extension).
const videoOf = new Map(
  LANGS.map((lang) => {
    const v = COPY[lang].ui.video;
    return [
      `https://babybookai.com${path('home', lang)}`,
      [
        {
          title: v.name,
          description: plain(v.caption, lang),
          thumbnail_loc: `https://babybookai.com/videos/book-${lang}-poster.webp`,
          content_loc: `https://babybookai.com/videos/book-${lang}.mp4`,
          duration: 29,
          family_friendly: 'yes',
        },
      ],
    ];
  }),
);

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
  // Latin files from Fontsource, served by Astro with fallbacks whose metrics
  // match each face: the page does not move when the web fonts arrive (it
  // used to, CLS 0.04-0.06), and the browser lays it out once less.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      fallbacks: ['sans-serif'],
      options: {
        variants: [{ src: ['./node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2'], weight: '200 1000', style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Baloo 2',
      cssVariable: '--font-baloo',
      fallbacks: ['sans-serif'],
      options: {
        variants: [{ src: ['./node_modules/@fontsource-variable/baloo-2/files/baloo-2-latin-wght-normal.woff2'], weight: '400 800', style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Lora',
      cssVariable: '--font-lora',
      fallbacks: ['serif'],
      options: {
        variants: [
          { src: ['./node_modules/@fontsource-variable/lora/files/lora-latin-wght-normal.woff2'], weight: '400 700', style: 'normal' },
          { src: ['./node_modules/@fontsource-variable/lora/files/lora-latin-wght-italic.woff2'], weight: '400 700', style: 'italic' },
        ],
      },
    },
  ],
  integrations: [
    sitemap({
      serialize(item) {
        const video = videoOf.get(item.url);
        return video ? { ...item, video } : item;
      },
    }),
    // Google Analytics runs in a web worker, off the main thread, so the tag
    // costs no blocking time. Only once there is an ID (src/config/site.ts).
    ...(GOOGLE.analyticsId ? [partytown({ config: { forward: ['dataLayer.push', 'gtag'] } })] : []),
  ],
});
