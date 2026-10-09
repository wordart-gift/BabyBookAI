import type { ImageMetadata } from 'astro';

import noaPortrait from '../assets/app/noa-portrait.png';
import noaPacifier from '../assets/app/noa-pacifier.png';
import screenSetup from '../assets/app/screen-setup.png';
import screenSelection from '../assets/app/screen-selection.png';
import screenOrder from '../assets/app/screen-order.png';

/**
 * Real material from the app (the store screenshots in librofotos
 * tool/out/store_noa), cropped. Only photos in which Noa appears alone: the
 * ones with family in them stay out of the site, which paid ads also use.
 */
export type Photo = { src: ImageMetadata; alt: string };

/** A month spread with two photos: the large one left, the other right. */
export const NOA_SPREAD: Photo[] = [
  { src: noaPortrait, alt: 'A baby girl lying on her tummy, looking at the camera' },
  { src: noaPacifier, alt: 'A baby with a pacifier on a green sofa, next to a plush dog' },
];

/** App screens, cropped to the phone's display. No people in any of them. */
export const SCREENS = {
  setup: { src: screenSetup, alt: 'BabyBookAI setup screen: a name and a birthday, then the book length and price' },
  selection: { src: screenSelection, alt: 'BabyBookAI results screen: 157 photos kept, shown by month' },
  order: { src: screenOrder, alt: 'BabyBookAI order screen: 30 pages, 11 × 11 in hardcover, $49.99, shipping included' },
} satisfies Record<string, Photo>;
