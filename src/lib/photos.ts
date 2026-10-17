import type { ImageMetadata } from 'astro';
import { COPY } from '../i18n/copy';
import type { Lang } from '../i18n/locales';

/**
 * Real material from the app: captures of the three screens, one set per
 * language, taken on a phone set to that language's country (so the price,
 * the currency and the size are the ones the app shows there: $49.99 and
 * 11 × 11″ for en, 44,99 € and 28 × 28 cm for the euro countries, ¥7,500 for
 * ja...). Cropped to the 656 × 1374 the phone frame expects.
 */
export type Photo = { src: ImageMetadata; alt: string };

const shots = import.meta.glob<{ default: ImageMetadata }>('../assets/app/screen-*-*.png', { eager: true });
const shot = (screen: 'setup' | 'selection' | 'order', lang: Lang): ImageMetadata =>
  shots[`../assets/app/screen-${screen}-${lang}.png`].default;

/** App screens, cut where a phone's display ends. No people in any of them. */
export const screens = (lang: Lang) => {
  const alt = COPY[lang].ui.screens;
  return {
    setup: { src: shot('setup', lang), alt: alt.setup },
    selection: { src: shot('selection', lang), alt: alt.selection },
    order: { src: shot('order', lang), alt: alt.order },
  } satisfies Record<string, Photo>;
};

const spreadShots = import.meta.glob<{ default: ImageMetadata }>('../assets/app/spread-*-month-*.png', { eager: true });

/**
 * Three more spreads from the app, one set per language (cut from the store
 * screenshots, librofotos tool/out/store_noa/lang): each landing shows its
 * own, the home keeps the first month. Their month labels were cut short by
 * the page's corner in the capture, so the label is erased and set as text by
 * AppSpread, on the page the app prints it on.
 */
export const spreads = (lang: Lang) => {
  const t = COPY[lang].ui.spreads;
  const pick = (name: string) => spreadShots[`../assets/app/spread-${name}-${lang}.png`].default;
  return {
    fifth: { src: pick('fifth-month'), side: 'right' as const, ...t.fifth },
    seventh: { src: pick('seventh-month'), side: 'right' as const, ...t.seventh },
    ninth: { src: pick('ninth-month'), side: 'left' as const, ...t.ninth },
  };
};
