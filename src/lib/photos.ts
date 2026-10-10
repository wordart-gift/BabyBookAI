import type { ImageMetadata } from 'astro';
import { COPY } from '../i18n/copy';
import type { Lang } from '../i18n/locales';

import screenSetup from '../assets/app/screen-setup.png';
import screenSelection from '../assets/app/screen-selection.png';
import screenOrder from '../assets/app/screen-order.png';

/**
 * Real material from the app (the store screenshots in librofotos
 * tool/out/store_noa), cropped.
 */
export type Photo = { src: ImageMetadata; alt: string };

/** App screens, cut where a phone's display ends. No people in any of them. */
export const screens = (lang: Lang) => {
  const alt = COPY[lang].ui.screens;
  return {
    setup: { src: screenSetup, alt: alt.setup },
    selection: { src: screenSelection, alt: alt.selection },
    order: { src: screenOrder, alt: alt.order },
  } satisfies Record<string, Photo>;
};
