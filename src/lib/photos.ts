import type { ImageMetadata } from 'astro';
import { COPY } from '../i18n/copy';
import type { Lang } from '../i18n/locales';

import m6Hero from '../assets/app/month6-hero.png';
import m6Playmat from '../assets/app/month6-playmat.png';
import m6Dad from '../assets/app/month6-dad.png';
import m6Grandparents from '../assets/app/month6-grandparents.png';
import noaStroller from '../assets/app/noa-stroller.png';
import noaHat from '../assets/app/noa-hat.png';
import noaCrib from '../assets/app/noa-crib.png';
import screenSetup from '../assets/app/screen-setup.png';
import screenSelection from '../assets/app/screen-selection.png';
import screenOrder from '../assets/app/screen-order.png';

/**
 * Real material from the app (the store screenshots in librofotos
 * tool/out/store_noa), cropped. Carlos (Oct 2026): photos with the family in
 * them may be used too, not only those of Noa alone.
 */
export type Photo = { src: ImageMetadata; alt: string };

/**
 * A month spread: the large photo on the left page (Noa's sixth month in
 * store screenshot 3), then the right page's grid, row by row: the best
 * framed of screenshots 3 and 5. They are small (about 200 px), which is
 * what a grid cell needs. The alt texts are the language's (ui.photos), in
 * this order.
 */
const SPREAD = [m6Hero, noaStroller, m6Playmat, m6Dad, noaHat, noaCrib, m6Grandparents];

export const monthSix = (lang: Lang): Photo[] =>
  SPREAD.map((src, i) => ({ src, alt: COPY[lang].ui.photos[i] }));

/** App screens, cut where a phone's display ends. No people in any of them. */
export const screens = (lang: Lang) => {
  const alt = COPY[lang].ui.screens;
  return {
    setup: { src: screenSetup, alt: alt.setup },
    selection: { src: screenSelection, alt: alt.selection },
    order: { src: screenOrder, alt: alt.order },
  } satisfies Record<string, Photo>;
};
