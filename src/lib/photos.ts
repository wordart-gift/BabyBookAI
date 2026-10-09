import type { ImageMetadata } from 'astro';

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
 * what a grid cell needs.
 */
export const MONTH_SIX: Photo[] = [
  { src: m6Hero, alt: 'A baby sitting on her mother’s lap, playing with building blocks' },
  { src: noaStroller, alt: 'A baby laughing in her stroller' },
  { src: m6Playmat, alt: 'A baby on her tummy on a colorful play mat' },
  { src: m6Dad, alt: 'A baby next to her smiling father on the sofa' },
  { src: noaHat, alt: 'A baby in a pink knitted hat with pompoms, smiling' },
  { src: noaCrib, alt: 'A baby in a flowered dress smiling in her crib' },
  { src: m6Grandparents, alt: 'Grandparents holding the baby and her cousin' },
];

/** App screens, cut where a phone's display ends. No people in any of them. */
export const SCREENS = {
  setup: { src: screenSetup, alt: 'BabyBookAI setup screen: a name and a birthday, then the book length and price' },
  selection: { src: screenSelection, alt: 'BabyBookAI results screen: 157 photos kept, shown by month' },
  order: { src: screenOrder, alt: 'BabyBookAI order screen: 30 pages, 11 × 11 in hardcover, shipping included' },
} satisfies Record<string, Photo>;
