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
      'Most parents make the first year, from birth to the first birthday. You pick the day it starts and how long it runs: 6, 12 or 18 months, with a spread for each month.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The app is free, and so is making the book and looking through it. You only pay when you order the printed hardcover, and you see the price before you do.',
  },
  {
    question: 'Is it on iPhone and Android?',
    answer:
      'BabyBookAI is free on Google Play now, for Android. The iPhone app is coming soon. Books are printed and shipped in the United States.',
  },
];

export const PHOTO_BOOK_FAQ: Faq[] = [
  {
    question: 'What size is the baby photo book?',
    answer: `It is a square ${BOOK.sizeIn} (${BOOK.sizeCm}) hardcover. Square is the one shape where upright and wide phone photos both fit without one of them being cropped badly.`,
  },
  {
    question: 'How many pages does it have?',
    answer: `Between ${BOOK.pagesMin} and ${BOOK.pagesMax}. BabyBookAI suggests ${BOOK.pagesMin} to ${BOOK.pagesSuggestedMax} for a first year, a spread for each month, and you can add pages up to ${BOOK.pagesMax} at an extra cost.`,
  },
  {
    question: 'Will my phone photos print sharply?',
    answer:
      'Each photo is only placed where it has enough pixels to print well. A small copy, like one saved from a chat, goes in a smaller spot on the page instead of filling a whole page or the cover.',
  },
  {
    question: 'Can I personalize the book?',
    answer:
      'Yes. Your baby’s name goes on the cover, you choose the dates, and you can pick a soft pink, soft blue or classic cream paper. Each page comes with short lines you can rewrite, and you can add a note of your own anywhere.',
  },
  {
    question: 'Will a face end up in the middle fold?',
    answer:
      'No. The layouts keep photos out of the center fold. The only photo that crosses it is one placed across both pages on purpose, and those are chosen for it.',
  },
  {
    question: 'How long does it take to make?',
    answer:
      'A few minutes. Most of that is your phone reading the camera roll; then you flip through the book, swap anything you want and order.',
  },
];

export const FIRST_YEAR_FAQ: Faq[] = [
  {
    question: 'When should I make the first year photo book?',
    answer:
      'Any time after the first birthday, or before it if you want the book for the party: you choose the dates the book covers. Because BabyBookAI reads the photos you already have, there is nothing to keep up with during the year.',
  },
  {
    question: 'What if I have only a few photos of some months?',
    answer:
      'The layout follows the photos. A month with dozens of good ones gets a full spread; a month with one great photo gets a page made for one photo. On iPhone, BabyBookAI also checks iCloud Photos for months with few photos on the phone.',
  },
  {
    question: 'Can the book start later than birth, or cover more than a year?',
    answer:
      'Yes. Most books run from birth to the first birthday, but you pick the day it starts and how long it runs: 6, 12 or 18 months, with a spread for each month.',
  },
  {
    question: 'What goes on the first and last pages?',
    answer:
      'The first page has the day your baby was born, with a little drawing of a stork carrying a bundle. The last page closes the year with a first birthday cake.',
  },
  {
    question: 'Do I need to add photos every week?',
    answer:
      'No. That is the point of BabyBookAI: it works from the photos already on your phone, so there is no weekly upload and nothing to fall behind on.',
  },
];
