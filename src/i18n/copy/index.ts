import type { Lang } from '../locales';
import { en, type Copy } from './en';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { pt } from './pt';
import { nl } from './nl';
import { ja } from './ja';
import { ko } from './ko';
import { zh } from './zh';

/** Every word on the site, by language. Each file has the shape of en.ts. */
export const COPY: Record<Lang, Copy> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
  nl,
  ja,
  ko,
  zh,
};

export type { Copy };
