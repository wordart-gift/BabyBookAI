import type { Faq } from '../lib/schema';
import { BOOK, SITE } from '../config/site';

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
      `The app is free, and so is making the book and looking through it. You only pay when you order the printed hardcover: $${BOOK.priceUsd} for ${BOOK.pagesMin} pages, shipping included, with extra pages up to ${BOOK.pagesMax} at an extra cost. You see the final price before you pay.`,
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

export const GIRL_FAQ: Faq[] = [
  {
    question: 'Can I make her photo album pink?',
    answer:
      'Yes. The book comes in three paper tones: soft pink, soft blue and classic cream. Pink tints every page, not just the trim, and the light patterns on each month take the same tone. You can change it as many times as you like before ordering.',
  },
  {
    question: 'Does her name go on the cover?',
    answer:
      'Yes. Her name and the best photo of her year go on the cover, chosen from the photos you favorited and shared most. Page one has the day she was born.',
  },
  {
    question: 'Can I change the words on the pages?',
    answer:
      'Yes. Each page comes with short lines like “Our little sunshine”. Keep them, rewrite them, or add your own note anywhere on the page.',
  },
  {
    question: 'What if she is not one yet?',
    answer:
      'You pick the dates. A book can cover 6, 12 or 18 months from the day you choose, so you can make one at six months and another for her first birthday.',
  },
];

export const BOY_FAQ: Faq[] = [
  {
    question: 'Can I make his photo album blue?',
    answer:
      'Yes. Pick soft blue, soft pink or classic cream. The tone colors every page, and the light patterns on each month take it too. You can switch before ordering.',
  },
  {
    question: 'Does his name go on the cover?',
    answer:
      'Yes. His name and the best photo of his year go on the cover. The first page has the day he was born, and the last one closes the year with a first birthday cake.',
  },
  {
    question: 'Will it pick photos of him, not of everyone else?',
    answer:
      'It picks from the photos of the dates you choose, keeps the sharpest of every moment and drops duplicates. Then you flip through the book and swap or remove any photo you don’t want in it.',
  },
  {
    question: 'Is it a good gift for grandparents?',
    answer:
      'It is the one they ask for. A phone full of photos is hard to pass around the table; a hardcover book of his first year is not.',
  },
];

export const SUPPORT_FAQ: Faq[] = [
  {
    question: 'The app found few photos. Why?',
    answer:
      'BabyBookAI can only see the photos it is allowed to. When your phone asks, choose “Allow all”: with “Select photos” it sees only the ones you picked. On Android it reads the photos stored on the phone, so photos kept only in Google Photos online are not found.',
  },
  {
    question: 'Where are my WhatsApp photos?',
    answer:
      'Photos you saved from WhatsApp are in your phone’s gallery, so the scan finds them. They are used to fill months with few camera photos, and if the same photo is on your phone twice, the sharper, larger copy is kept.',
  },
  {
    question: 'Is my book saved if I close the app?',
    answer:
      'Yes. Your book is saved on your phone as you work, with your photos, words and colors, and it opens where you left it. Starting a new book replaces it.',
  },
  {
    question: 'How much is the book and what does shipping cost?',
    answer: `$${BOOK.priceUsd} for ${BOOK.pagesMin} pages, shipping included. Extra pages, up to ${BOOK.pagesMax}, cost extra. The final price is shown before you pay.`,
  },
  {
    question: 'How do I pay?',
    answer: 'By card, through Stripe. We never see your card details.',
  },
  {
    question: 'Something is wrong with my order. What do I do?',
    answer: `Write to ${SITE.supportEmail} from the email you ordered with, and include a photo if the book arrived damaged.`,
  },
  {
    question: 'Is there an iPhone app?',
    answer: 'Not yet. BabyBookAI is on Google Play for Android now, and the iPhone app is coming soon.',
  },
  {
    question: 'How do I delete my data?',
    answer: `Your photos never leave your phone to make the book, and deleting the app deletes the saved book. For an order you placed, write to ${SITE.supportEmail} and we delete what we hold that the law does not require us to keep. The privacy policy has the details.`,
  },
];

export const IDEAS_FAQ: Faq[] = [
  {
    question: 'How many photos should a baby photo book have?',
    answer:
      'For a first year, about 10 to 15 photos a month works well: 120 to 180 in all. A 30-page book holds around 150 without feeling crowded, with room for one large photo on most spreads.',
  },
  {
    question: 'What should be in a baby’s first year photo book?',
    answer:
      'The day they were born, a spread for each month in order, the firsts you caught on camera (smile, bath, food, steps), the people who held them, and a first birthday to close the year. Short captions with dates help more than long text.',
  },
  {
    question: 'What do you write in a baby photo book?',
    answer:
      'Short lines: a date, a place, a nickname, a weight, or the thing you will forget in five years (the song that stopped the crying, the word they said first). One line per page is enough.',
  },
  {
    question: 'Can phone photos be printed in a photo book?',
    answer:
      'Yes. Photos straight from a phone camera print sharply even across a full page. Copies saved from chat apps are smaller; they print well in a small spot on the page, not as a full page or the cover.',
  },
];
