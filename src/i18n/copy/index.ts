import type { Lang } from '../locales';
import { en, type Copy } from './en';

/** Every word on the site, by language. Each file has the shape of en.ts. */
export const COPY: Record<Lang, Copy> = {
  en,
  es: en,
  fr: en,
  de: en,
  it: en,
  pt: en,
  nl: en,
  ja: en,
  ko: en,
  zh: en,
};

export type { Copy };
