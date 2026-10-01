import type { ImageMetadata } from 'astro';

import newbornDad from '../assets/photos/newborn-dad.jpg';
import newbornFeet from '../assets/photos/newborn-feet.jpg';
import newbornHands from '../assets/photos/newborn-hands.jpg';
import newbornSleeping from '../assets/photos/newborn-sleeping.jpg';
import newbornDad2 from '../assets/photos/newborn-dad-2.jpg';
import newbornAsleepHand from '../assets/photos/newborn-asleep-hand.jpg';
import momSofa from '../assets/photos/mom-sofa.jpg';
import babyCurious from '../assets/photos/baby-curious.jpg';
import babyLaughing from '../assets/photos/baby-laughing.jpg';
import babyGrass from '../assets/photos/baby-grass.jpg';
import babyCrawling from '../assets/photos/baby-crawling.jpg';
import momLaughing from '../assets/photos/mom-laughing.jpg';
import dadSunlight from '../assets/photos/dad-sunlight.jpg';
import babySwing from '../assets/photos/baby-swing.jpg';
import firstBirthday from '../assets/photos/first-birthday.jpg';

/**
 * Stand-in photographs (Unsplash; see src/assets/photos/CREDITS.md) until the
 * real printed book can be photographed. Grouped as the book would group
 * them: one spread per month, the large photo first.
 */
export type Photo = { src: ImageMetadata; alt: string };

export const MONTH_ONE: Photo[] = [
  { src: newbornDad, alt: 'A father holding his sleeping newborn in the hospital' },
  { src: newbornFeet, alt: 'A newborn’s tiny feet on a white blanket' },
  { src: newbornHands, alt: 'A parent’s hands cradling a newborn’s feet' },
  { src: newbornSleeping, alt: 'A newborn asleep, wrapped in a blanket' },
  { src: momSofa, alt: 'A mother resting on the sofa with her baby' },
  { src: newbornDad2, alt: 'A father looking down at his newborn daughter' },
  { src: newbornAsleepHand, alt: 'A newborn sleeping in a parent’s hand' },
];

export const MONTH_SEVEN: Photo[] = [
  { src: babyCurious, alt: 'A baby looking up, curious' },
  { src: babyLaughing, alt: 'A baby laughing on a white bed' },
  { src: babyGrass, alt: 'A baby laughing outdoors at sunset' },
  { src: babyCrawling, alt: 'A baby crawling across a wooden floor' },
  { src: momLaughing, alt: 'A mother and her baby laughing together' },
  { src: dadSunlight, alt: 'A father holding his baby in the sunlight' },
  { src: babySwing, alt: 'A baby laughing on a swing' },
];

export const FIRST_BIRTHDAY: Photo = {
  src: firstBirthday,
  alt: 'A baby girl at her first birthday, sitting by the cake',
};
