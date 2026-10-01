import type { Faq } from '../lib/schema';
import { BOOK } from '../config/site';

/**
 * One source for the questions, so the page and its FAQPage JSON-LD can never
 * say different things. Every answer must match the app's CLAUDE.md
 * (librofotos); check there before changing a fact.
 */
export const HOME_FAQ: Faq[] = [
  {
    question: 'How does BabyBookAI choose the photos?',
    answer:
      'It reads the date each photo was taken and keeps only the ones from your baby’s first year. Then it drops blurry shots, keeps the sharpest frame of every burst, and spots the same photo saved twice (a WhatsApp copy and the original, say) to keep the best copy. Photos you marked as favorites, and the ones you shared most, get the best places: the cover and the full pages.',
  },
  {
    question: 'Are my photos uploaded anywhere?',
    answer:
      'Not to make the book. The whole selection happens on your phone. Only when you order are the pages of the finished book sent to the printer.',
  },
  {
    question: 'Can I change the photos it picked?',
    answer:
      'Yes. You flip through the book on your phone and swap any photo you don’t love. You can also edit the words on each page and add a short note of your own.',
  },
  {
    question: 'What does the book look like?',
    answer: `A square ${BOOK.sizeIn} (${BOOK.sizeCm}) hardcover with a matte cover and ${BOOK.pagesMin} to ${BOOK.pagesMax} pages on ${BOOK.paper}. Your baby’s name and best photo go on the cover, the birth date opens the book, and every month gets its own two-page spread.`,
  },
  {
    question: 'What if some photos are in WhatsApp or iCloud?',
    answer:
      'Photos saved from WhatsApp are in your camera roll, so they are found like any other. On iPhone, BabyBookAI can also use your iCloud Photos for months with few photos on the phone. On Android it reads the photos stored on the phone.',
  },
  {
    question: 'Does it only work for the first twelve months?',
    answer:
      'Most parents make the first year, from birth to the first birthday. You choose the dates, and a book can cover up to 18 months: one spread for each.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The app is free. You only pay for the printed book, and the price will be announced at launch. Join the waitlist and you will be the first to know.',
  },
  {
    question: 'When can I get it?',
    answer:
      'BabyBookAI is coming to iPhone first, then Android. Books are printed and shipped in the United States. Join the waitlist and we will email you once, the day it is out.',
  },
];
