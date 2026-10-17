import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';

/**
 * The site in American English: every word a page shows, the shape every
 * other language copies (Copy). Strings may hold a link (a()) and the
 * {price} and {size} tokens (src/i18n/format.ts). Facts must match the app's
 * CLAUDE.md (librofotos); check there before changing one, then change it in
 * every language.
 */
const a = linker('en');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const en = {
  ui: {
    skip: 'Skip to content',
    homeAria: `${SITE.name} home`,
    mainNav: 'Main',
    nav: { babyPhotoBook: 'Baby photo book', firstYear: 'First year book' },
    getApp: 'Get the app',
    language: 'Language',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    footer: {
      tagline: 'Your baby’s first year, made into a book for you.',
      productOf: 'A product of',
      book: 'The book',
      company: 'Company',
      links: {
        babyPhotoBook: 'Baby photo book',
        firstYear: 'First year photo book',
        boy: 'Baby boy photo album',
        girl: 'Baby girl photo album',
        ideas: 'Baby book ideas',
        about: 'About',
        support: 'Support & FAQ',
        privacy: 'Privacy policy',
        terms: 'Terms',
      },
      rights: 'All rights reserved.',
      follow: 'Follow us',
    },
    closing: {
      title: 'Make the book in minutes. Keep it for good.',
      body: 'Download BabyBookAI, give it your baby’s name and dates, and see their first year laid out before your coffee gets cold.',
    },
    free: 'Free to download. You only pay for the printed book.',
    badges: {
      aria: `Download ${SITE.name}`,
      appStore: 'Download on the App Store',
      googlePlay: 'Get it on Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: coming soon',
    },
    qr: {
      aria: `QR code to download ${SITE.name}`,
      title: 'On your computer?',
      body: 'Scan with your phone’s camera to get the app.',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three steps, and you only do the easy one',
      steps: [
        {
          title: 'Tell it the name and the dates',
          body: 'Your baby’s name goes on the cover. Most books start on the day they were born and end on the first birthday.',
        },
        {
          title: 'Our own AI picks the photos',
          body: 'On your phone, our AI goes through that year’s photos, drops the blurry ones and the near-duplicates, keeps the best of every moment and sorts them month by month. You don’t have to choose a single one.',
        },
        {
          title: 'Flip through, swap, order',
          body: 'The book is laid out for you. Swap any photo you don’t love for another from the same month, or take it out, change the words if you like, and the hardcover is printed and shipped to your door.',
        },
      ],
    },
    tones: {
      pink: 'Soft pink',
      blue: 'Soft blue',
      neutral: 'Classic cream',
      caption: 'The three paper tones. The whole page takes the tone.',
    },
    stork: 'A stork carrying a bundle',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'A BabyBookAI spread, “First month”: seven photos of a baby with her family and grandparents',
    /** The app's screens, as their store screenshots show them (in English). */
    screens: {
      setup: 'BabyBookAI setup screen: a name and a birthday, then the book length and price',
      selection: 'BabyBookAI results screen: 225 photos kept, shown by month',
      order: 'BabyBookAI order screen: 30 pages, hardcover, shipping included',
    },
    /** The app's own words for the month (librofotos BookWords.monthNames). */
    spreadMonth: 'First month',
    /** The landings' spreads (lib/photos.ts spreads()), the app's month names. */
    spreads: {
      fifth: { month: 'Fifth month', alt: 'A BabyBookAI spread, “Fifth month”: a baby lying on her tummy, with her grandmothers' },
      seventh: { month: 'Seventh month', alt: 'A BabyBookAI spread, “Seventh month”: a baby in a pink knitted hat, and photos with her father' },
      ninth: { month: 'Ninth month', alt: 'A BabyBookAI spread, “Ninth month”: a baby sitting on the grass in the garden' },
    },
    defaultDescription:
      'BabyBookAI turns the photos already on your phone into a printed hardcover book of your baby’s first year. It picks, sorts and lays out the photos for you.',
    ogImageAlt: 'BabyBookAI: a printed photo book of a baby’s first year',
    /** Shown on legal pages in every language but English. */
    translationNote: '',
    schema: {
      appFeatures: [
        'Picks the photos on the phone: only the finished book is sent to print',
        'Picks the sharpest photo of every moment and drops duplicates and bursts',
        'Sorts the photos month by month from the date each was taken',
        `Lays out a square hardcover book of ${BOOK.pagesMin}–${BOOK.pagesMax} pages`,
        'Sends the book to print and ships it',
      ],
      bookName: 'BabyBookAI baby photo book',
      bookDescription: `A square 11 × 11″ (28 × 28 cm) hardcover photo book of a baby’s first year, ${BOOK.pagesMin}–${BOOK.pagesMax} pages on 170 gsm silk-coated paper, made by the BabyBookAI app from the photos on your phone.`,
      pages: 'Pages',
      binding: 'Binding',
      bindingValue: 'Hardcover',
    },
  },

  home: {
    title: 'BabyBookAI — The Baby Book App That Makes the Book for You',
    description:
      'Your baby’s first year as a printed hardcover photo book, made from the photos already on your phone. BabyBookAI picks, sorts and lays them out for you.',
    eyebrow: 'Baby’s first year photo book',
    h1: 'The baby memory book that makes itself',
    lead: 'Our own AI goes through your camera roll, picks the best photos of every month for you and lays out a hardcover book. You flip through, swap any photo for another from the same month or take it out, and it’s on its way.',
    homework: {
      title: 'Every baby book is homework. Except this one.',
      body: 'You already took the photos: hundreds of them, every month. Turning them into a book is the part nobody has time for with a baby in the house.',
      yourPart: 'Your part',
      ways: [
        { name: 'A fill-in memory book', effort: 'Print, cut, glue and write, every month', verdict: 'Most stop around month three.' },
        { name: 'A weekly baby book app', effort: 'A few minutes every week, for 52 weeks', verdict: 'The work is still there, in 52 pieces.' },
        { name: 'BabyBookAI', effort: 'Nothing until the year is over', verdict: 'Then one look-through, and it’s done.' },
      ],
    },
    book: {
      eyebrow: 'The book',
      title: 'A real hardcover, made to be kept',
      body: 'Your baby’s name and best photo on the cover. The day they were born on the first page. Then a two-page spread for every month, in the order it happened, each laid out for the photos it holds, until the first birthday.',
      specs: [
        { label: 'Size', value: '{size}, square' },
        { label: 'Cover', value: 'Hardcover, matte' },
        { label: 'Pages', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Paper', value: '170 gsm silk' },
        { label: 'Layout', value: 'A spread for every month' },
        { label: 'Ships to', value: '16 countries' },
      ],
      more: 'See the baby photo book in detail',
    },
    privacy: {
      title: 'Your baby’s photos stay on your phone',
      body: 'BabyBookAI chooses the photos on your phone, not on a server. Nothing is uploaded while it reads your camera roll or while you look through the book. Only when you order are the finished pages sent to the printer. No subscription, and no rights over your child’s pictures.',
    },
    birthday: {
      title: 'Ready for the first birthday',
      body: 'The year ends, the book is made. Order it the week of the party, or make one for the grandparents too. Their favorite gift is the one with the baby in it.',
      more: 'How the first year photo book works',
    },
    faqTitle: 'Questions parents ask',
    faq: [
      {
        question: 'What is BabyBookAI?',
        answer:
          'BabyBookAI is a baby book app that turns the photos already on your phone into a printed hardcover photo book of your baby’s first year. It picks the photos, sorts them month by month and lays out every page for you. The app is free: you only pay for the printed book.',
      },
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
          'Yes. You flip through the book on your phone and tap any photo you don’t love: swap it for another from the same month, or take it out, and the page lays itself out again. You can also edit the words on each page and add a short note of your own.',
      },
      {
        question: 'What does the book look like?',
        answer: `A square {size} hardcover with a matte cover and ${BOOK.pagesMin} to ${BOOK.pagesMax} pages on 170 gsm silk-coated paper. Your baby’s name and best photo go on the cover, the birth date opens the book, and every month gets its own two-page spread.`,
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
        answer: `The app is free, and so is making the book and looking through it. You only pay when you order the printed hardcover: {price} for ${BOOK.pagesMin} pages, shipping included, with extra pages up to ${BOOK.pagesMax} at an extra cost. You see the final price before you pay.`,
      },
      {
        question: 'Is it on iPhone and Android?',
        answer:
          'BabyBookAI is free on Google Play now, for Android. The iPhone app is coming soon. Books ship to 16 countries in North America, Europe and Asia.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Baby Photo Album Made From Your Camera Roll | BabyBookAI',
    description: `A baby photo album that arrives printed: a hardcover photo book made for you. BabyBookAI picks the best photos on your phone, sorts them by month and lays out every page. {size}.`,
    crumb: 'Baby photo book',
    eyebrow: 'Baby photo book',
    h1: 'Baby photo album, made from your camera roll',
    lead: 'BabyBookAI finds the best photos of your baby on your phone, sorts them month by month and lays out a square hardcover photo book, printed and shipped to your door. No sleeves to fill, no uploading, no dragging photos into templates. You just look through it.',
    features: {
      title: 'Everything a baby photo album should be. Minus the work.',
      items: [
        {
          title: 'Our own AI picks the photos',
          body: 'From hundreds of shots a month, it keeps the sharpest of every moment and leaves out the blurry ones, the bursts and the duplicates.',
        },
        {
          title: 'It sorts them by month',
          body: 'Every photo goes where it belongs, by the date it was taken, so the book tells the year in the order it happened.',
        },
        {
          title: 'It lays out every page',
          body: 'Each spread is designed for the photos it holds: one hero shot and a grid, a full page, or a photo across both pages.',
        },
        {
          title: 'It prints them sharp',
          body: 'A photo only goes where it has the pixels to print well. A small copy from a chat gets a small spot, never the cover.',
        },
      ],
    },
    howTitle: 'How to make a baby photo book in three steps',
    inside: {
      eyebrow: 'Inside the book',
      title: 'From the day they were born to the first birthday',
      tour: [
        { label: 'The cover', body: 'Your baby’s name and the best photo of the year, chosen from the ones you loved and shared most.' },
        { label: 'Page one', body: 'The day they were born, with a little pen drawing of a stork carrying a bundle.' },
        {
          label: 'A spread a month',
          body: 'Each month in its season: soft accents and the lightest patterns, little birds, stars or clouds, never louder than the photos.',
        },
        { label: 'The last page', body: 'A first birthday cake to close the year: and then they were one.' },
      ],
    },
    personal: {
      eyebrow: 'Personalized',
      title: 'A personalized baby photo album, without the fiddly part',
      body: 'A custom baby photo book usually means an evening in an editor. Here the photos are already in place, so making it yours is a few taps.',
      items: [
        { title: 'Their name on the cover', body: 'And the dates you choose: from the day they were born, or any day you like, for 6, 12 or 18 months.' },
        { title: 'Three paper tones', body: 'Classic cream, a soft pink or a soft blue. The whole page takes the tone, not just the trim.' },
        {
          title: 'Words you can rewrite',
          body: 'Every page comes with short lines like “Dream big, little one”. Keep them, change them, or add your own note anywhere.',
        },
      ],
      colors: `Looking for colors? See the ${a('girl', 'baby girl photo album')} and the ${a('boy', 'baby boy photo album')}.`,
    },
    specs: {
      title: 'The book, in detail',
      items: [
        { label: 'Format', value: 'Square hardcover photo book' },
        { label: 'Size', value: '{size}' },
        { label: 'Pages', value: `${BOOK.pagesMin}–${BOOK.pagesMax}, a spread for every month` },
        { label: 'Paper', value: '170 gsm silk-coated paper, printed in full color' },
        { label: 'Cover', value: 'Hard cover with matte lamination' },
        { label: 'Printing', value: 'Printed on demand, shipped to 16 countries' },
      ],
    },
    gift: {
      title: 'The gift grandparents ask for',
      body: 'A phone full of photos is hard to pass around the table. A baby photo book isn’t. It’s the gift for a first birthday, for Mother’s Day or Father’s Day, and the one grandparents keep on the coffee table.',
    },
    why: {
      title: 'Why a baby photo book, when the photos are already on your phone',
      paragraphs: [
        'In a baby’s first year, parents take hundreds of photos a month. They live in a camera roll, between screenshots and receipts, and they scroll past in a blur. A photo album for a baby is the opposite: a few of the best, in order, on paper, in a book anyone can pick up.',
        'The hard part has never been the printing. It’s the hours of choosing: which of the forty bath-time shots, which month that photo belongs to, how to fit an upright photo next to a wide one. That’s where most baby albums stall, somewhere around month three.',
        `BabyBookAI does that part for you, on your phone. It reads the dates, keeps the sharpest photo of every moment, gives each month its own spread and lays out a baby album book that looks designed, not dumped. What’s left for you is the nice part: looking through it. If you want the whole first year, from the hospital to the cake, see the ${a('firstYear', 'baby’s first year photo book')}.`,
      ],
    },
    faqTitle: 'Baby photo book questions',
    faq: [
      {
        question: 'Is it an album you slip photos into?',
        answer:
          'No. It is a printed baby photo album: the photos are printed on the pages, already placed and laid out, like a photo book. There are no sleeves or pockets, and nothing to stick in.',
      },
      {
        question: 'What size is the baby photo book?',
        answer:
          'It is a square {size} hardcover. Square is the one shape where upright and wide phone photos both fit without one of them being cropped badly.',
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
          'A few minutes. Most of that is our AI going through your camera roll on your phone; then you flip through the book, swap or remove any photo you like and order.',
      },
    ],
  },

  firstYear: {
    title: 'Baby’s First Year Photo Book You Don’t Have to Make | BabyBookAI',
    description:
      'A baby’s first year photo book, month by month, made from the photos already on your phone. No weekly uploads: BabyBookAI picks, sorts and lays out the whole year.',
    crumb: 'First year photo book',
    eyebrow: 'Baby’s first year photo book',
    h1: 'Baby’s first year photo book you don’t have to make',
    lead: 'Twelve months, a spread for each, from the hospital to the cake. BabyBookAI builds it from the photos already on your phone, so there’s nothing to keep up with during the year.',
    months: {
      eyebrow: 'Month by month',
      title: 'A monthly baby photo book, without the monthly photo shoot',
      body: 'No milestone cards, no setting up the same shot on the same blanket every month. The book follows the photos you took anyway, in the order you took them. Every baby keeps their own calendar.',
      // What parents tend to photograph, not a developmental chart.
      items: [
        { n: 'Page 1', moment: 'The day they were born' },
        { n: 'Month 1', moment: 'Coming home' },
        { n: 'Month 2', moment: 'The first real smiles' },
        { n: 'Month 3', moment: 'Tummy time' },
        { n: 'Month 4', moment: 'Laughing out loud' },
        { n: 'Month 5', moment: 'Grabbing everything' },
        { n: 'Month 6', moment: 'A first taste of food' },
        { n: 'Month 7', moment: 'Sitting up' },
        { n: 'Month 8', moment: 'On the move' },
        { n: 'Month 9', moment: 'Peekaboo' },
        { n: 'Month 10', moment: 'Pulling up to stand' },
        { n: 'Month 11', moment: 'Almost walking' },
        { n: 'Month 12', moment: 'The first birthday' },
        { n: 'Last page', moment: 'And then they were one' },
      ],
    },
    unfinished: {
      title: 'Why most baby’s first year books never get finished',
      paragraphs: [
        'A fill-in baby book asks you to print, glue and write every month. A weekly baby book app asks for a few minutes every week, fifty-two weeks in a row. Neither sounds like much, until it’s month five, you’re sleeping in two-hour shifts, and the book is three weeks behind.',
        'The photos, though, kept coming. You never stopped taking them. BabyBookAI starts there: when the year is over, it reads your camera roll and makes the book from what you already have. Your part takes minutes, once.',
      ],
      compare: [
        { label: 'Fill-in memory book', value: 'Every month' },
        { label: 'Weekly baby book app', value: '52 weeks' },
        { label: 'BabyBookAI', value: 'Once, in minutes' },
      ],
    },
    howTitle: 'How the first year photo book gets made',
    birthday: {
      title: 'In time for the first birthday',
      body: 'You choose the dates, so the book can close the week of the party, or the day after it. Thin months are fine: the layout follows the photos, and a month with one great shot gets a page made for one. Want to go past the first year? A book can cover up to 18 months.',
      more: 'See the baby photo book in detail',
    },
    faqTitle: 'First year photo book questions',
    faq: [
      {
        question: 'Is it a first year photo album, or a baby book to fill in?',
        answer:
          'A first year photo album, and it arrives finished: the photos are printed on the pages, month by month. There is nothing to fill in by hand. You only write if you want to change a line or add a note of your own.',
      },
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
    ],
  },

  girl: {
    title: 'Baby Girl Photo Album That Fills Itself | BabyBookAI',
    description:
      'A pink baby girl photo album made from the photos on your phone. BabyBookAI picks her best photos, sorts them month by month and lays out a hardcover book.',
    crumb: 'Baby girl photo album',
    eyebrow: 'Baby girl photo album',
    h1: 'The baby girl photo album that fills itself',
    lead: 'Her first year is already on your phone, in hundreds of photos. BabyBookAI picks the best of them, puts each in its month and lays out a hardcover album in soft pink, with her name on the cover.',
    empty: {
      title: 'Most baby girl albums arrive empty',
      paragraphs: [
        'A pink album with sleeves, a fill-in memory book, a template in a photo editor: each one waits for you to print, choose and place a year of photos. With a baby in the house, that evening rarely comes.',
        'This one starts full. Our AI reads the dates on your photos, keeps the sharpest of every moment, leaves out the blurry shots and the twelve near-copies of the same smile, and gives every month its own spread. You flip through it, swap any photo for another from the same month, or take out the ones you would rather not keep.',
      ],
    },
    howTitle: 'How to make a baby girl photo album in minutes',
    inside: {
      eyebrow: 'Inside her album',
      title: 'From the day she was born to her first birthday',
      items: [
        { title: 'Her name on the cover', body: 'With the best photo of her year, picked from the ones you favorited and shared most.' },
        { title: 'The day she was born', body: 'Page one, with a little pen drawing of a stork carrying a bundle.' },
        { title: 'A spread for every month', body: 'Her first smile, first bath, first food, each in the month it happened.' },
        { title: 'A cake to close the year', body: 'The last page ends the book with her first birthday.' },
      ],
    },
    details: {
      title: 'A keepsake made to be handled',
      body: `A square {size} hardcover with a matte cover and ${BOOK.pagesMin} to ${BOOK.pagesMax} pages on 170 gsm silk-coated paper, {price} with shipping included. Square, because her upright and wide photos both fit without one of them being cropped badly.`,
      more: `Prefer blue or cream? See the ${a('boy', 'baby boy photo album')}, or everything about the ${a('babyPhotoBook', 'baby photo book')}.`,
    },
    faqTitle: 'Baby girl photo album questions',
    faq: [
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
    ],
  },

  boy: {
    title: 'Baby Boy Photo Album Made From Your Camera Roll | BabyBookAI',
    description:
      'A baby boy photo album in soft blue, made for you from the photos on your phone. BabyBookAI picks his best shots, sorts them by month and lays out a hardcover.',
    crumb: 'Baby boy photo album',
    eyebrow: 'Baby boy photo album',
    h1: 'Baby boy photo album, made from your camera roll',
    lead: 'Give BabyBookAI his name and his birthday. Our own AI goes through the photos on your phone, keeps his best moments of every month and lays out a soft blue hardcover album. You just look through it.',
    thousands: {
      title: 'From thousands of photos to one album',
      body: 'The hard part of a baby boy photo album was never the printing. It is choosing. BabyBookAI does the choosing on your phone, so nothing is uploaded until you order.',
      steps: [
        { label: '5,450 photos', body: 'A year of camera roll: bath time, naps, the same grin forty times.' },
        { label: '225 kept', body: 'The sharpest of every moment, no bursts, no near-copies, no screenshots.' },
        { label: 'One book', body: 'A spread for each month, in order, ready to flip through and order.' },
      ],
      note: 'The numbers are from one real year, the one on the screen above. Yours will differ.',
    },
    howTitle: 'How to make a baby boy photo album',
    colors: {
      eyebrow: 'Personalized',
      title: 'Soft blue, his name, your words',
      paragraphs: [
        'His name and the best photo of his year go on the cover. Pick soft blue, or cream or pink if you prefer: the tone colors every page, with the lightest patterns of little birds, stars or clouds behind the photos.',
        'Every page comes with a short line you can keep or rewrite, and you can add a note of your own anywhere. Page one has the day he was born; the last page closes the year with a first birthday cake.',
      ],
    },
    details: {
      title: 'The album itself',
      body: `A square {size} hardcover, matte cover, ${BOOK.pagesMin} to ${BOOK.pagesMax} pages on 170 gsm silk-coated paper. {price} with shipping included, printed on demand and sent to your door. Each photo goes only where it has the pixels to print sharp, so a small copy from a chat never ends up on the cover.`,
      more: `Making one for a daughter? See the ${a('girl', 'baby girl photo album')}. For the whole year, month by month, see the ${a('firstYear', 'first year photo book')}.`,
    },
    faqTitle: 'Baby boy photo album questions',
    faq: [
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
          'It picks from the photos of the dates you choose, keeps the sharpest of every moment and drops duplicates. Then you flip through the book and swap any photo for another from the same month, or remove the ones you don’t want in it.',
      },
      {
        question: 'Is it a good gift for grandparents?',
        answer:
          'It is the one they ask for. A phone full of photos is hard to pass around the table; a hardcover book of his first year is not.',
      },
    ],
  },

  ideas: {
    title: 'Baby Book Ideas: 25 Ways to Tell the First Year in Photos | BabyBookAI',
    headline: 'Baby Book Ideas: 25 Ways to Tell the First Year in Photos',
    description:
      'Baby book ideas for a first year told in photos: ways to organize a baby photo book, what to photograph, layouts that work, captions to borrow, and how many photos to pick.',
    crumb: 'Baby book ideas',
    eyebrow: 'Ideas',
    h1: 'Baby book ideas: 25 ways to tell the first year in photos',
    byline: 'By the BabyBookAI team',
    date: 'October 9, 2026',
    lead: 'By the first birthday most parents have thousands of photos of their baby and no idea where to start. These baby photo book ideas are the ones that work on paper: how to organize the year, what to photograph while there is still time, layouts that look designed, and captions you can borrow.',
    tocTitle: 'In this article',
    toc: {
      organize: 'Ways to organize the book',
      photograph: 'What to photograph while there’s time',
      layout: 'Page and layout ideas',
      captions: 'Caption ideas',
      choosing: 'How many photos, and which',
      gifts: 'Gift ideas',
    },
    organize: {
      title: 'Ways to organize a baby photo book',
      body: 'Pick one spine for the book before choosing a single photo. It decides what goes in and what stays on the phone.',
      items: [
        {
          title: 'Month by month',
          body: 'The classic first year photo book: a two-page spread for each month, in the order it happened. Flipping through, you watch them grow. It also solves the hardest question, where a photo goes, by its date alone.',
        },
        {
          title: 'By firsts',
          body: 'First bath, first smile, first food, first steps, first haircut. Each gets its own page. Works well for a shorter book, or as a section after the months.',
        },
        {
          title: 'By season',
          body: 'Four chapters: the first snow, the first beach, the first fall leaves. Good when the photos cluster around trips and holidays.',
        },
        {
          title: 'The same spot, every month',
          body: 'The same chair, the same teddy for scale, photographed on the same day each month. If you started this, give the series its own spread at the end, side by side.',
        },
        {
          title: 'A day in the life',
          body: 'One ordinary day, morning to bedtime: bottle, nap, bath, the walk. The everyday is what you forget first.',
        },
        {
          title: 'The people who held them',
          body: 'A page each for grandparents, siblings, godparents, the friend who came every Sunday. The photos with other people in them are the ones a child looks for later.',
        },
      ],
    },
    photograph: {
      title: 'What to photograph while there’s time',
      body: 'If the year is not over yet, these are the photos parents most often wish they had when they make the book:',
      items: [
        'Hands and feet next to yours, every few months',
        'The nursery as it is, before it changes',
        'Mealtime mess, not just the clean-faced portraits',
        'Asleep in odd places: the car seat, the shoulder, the dog’s bed',
        'A wide shot of the room, not only close-ups',
        'You in the photo, too: hand the phone to someone else',
        'The outtakes: the blur, the yawn, the cry before the smile',
      ],
    },
    layout: {
      title: 'Page and layout ideas',
      body: 'The difference between a book that looks designed and one that looks dumped is mostly in a few rules.',
      items: [
        {
          title: 'One large photo, then a grid',
          body: 'The best photo of the month large on the left, five or six smaller ones on the right. It gives every spread a place to look first.',
        },
        {
          title: 'A full page for the photo that earns it',
          body: 'Not every month needs a grid. One great portrait alone on a page says more than six good ones.',
        },
        {
          title: 'Keep faces out of the fold',
          body: 'Most photo books are glued at the spine, so the middle of a spread curves away. Keep photos on their own page, and only cross the fold on purpose.',
        },
        {
          title: 'Mix close and wide',
          body: 'A close-up next to a close-up looks repetitive. Put a wide shot of the room or the park beside them.',
        },
        {
          title: 'Leave some paper',
          body: 'White space is what makes a page look designed instead of filled. A short line in a gap does more than another photo.',
        },
        {
          title: 'Choose square',
          body: 'Phone photos come upright and wide. On a square page both fit without one being cropped badly.',
        },
      ],
      figcaption: 'One large photo, a grid beside it, nothing across the fold.',
    },
    captions: {
      title: 'Caption ideas for a baby photo book',
      body: 'Keep captions short: one line a page. Dates, places, nicknames and the details you will forget (the song that stopped the crying, the first word) beat long paragraphs. A few to borrow:',
      items: [
        'Dream big, little one',
        'Our little sunshine',
        'Cute, loud, and ready to rock',
        'You are so adorable',
        'Small hands, big plans',
        'Home is wherever you are',
        'The month you found your feet',
        'Ten fingers, ten toes, all heart',
        'Hello, world',
        'And then you were one',
      ],
    },
    choosing: {
      title: 'How many photos, and which ones',
      tips: [
        {
          lead: 'Aim for 10 to 15 a month.',
          body: 'A 30-page first year book holds about 150 photos comfortably. In one real year we looked at, 225 photos were kept out of 5,450.',
        },
        { lead: 'Keep one of each moment.', body: 'Phones take bursts; the book needs the sharpest frame, not all twelve.' },
        {
          lead: 'Mind the copies from chats.',
          body: 'A photo saved from a messaging app is a smaller copy. It prints well small, but not across a full page or on the cover. If you have the original, use it.',
        },
      ],
      product: `This part, the choosing, is where most baby books stall. It is the part ${a('home', 'BabyBookAI')} does for you: it reads your camera roll on your phone, keeps the sharpest photo of every moment, sorts the year month by month and lays out the book, so you only look through it. See how the ${a('firstYear', 'first year photo book')} is made.`,
    },
    gifts: {
      title: 'Gift ideas',
      items: [
        { lead: 'For the first birthday.', body: 'Close the book the week of the party and pass it around the table.' },
        {
          lead: 'For the grandparents.',
          body: `The gift they keep on the coffee table. A ${a('girl', 'baby girl photo album')} in pink or a ${a('boy', 'baby boy photo album')} in blue, with the baby’s name on the cover.`,
        },
      ],
    },
    box: {
      title: 'Short on evenings?',
      body: 'BabyBookAI turns the photos already on your phone into a hardcover book of the first year, in minutes.',
    },
    faqTitle: 'Baby photo book questions',
    faq: [
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
    ],
  },

  about: {
    title: 'About BabyBookAI | The Baby Photo Book That Makes Itself',
    description:
      'BabyBookAI is a Photo-to-Text app that turns the photos on your phone into a printed photo book of your baby’s first year. Who we are and how we make it.',
    crumb: 'About',
    eyebrow: 'About',
    h1: 'A baby book for parents with no time to make one',
    paragraphs: [
      'In a baby’s first year, parents take thousands of photos. Very few of them end up in a book, because making one means hours of choosing, sorting and placing, with a baby in the house.',
      `${SITE.name} does that work for you. It reads the photos on your phone, keeps the best of every moment, sorts them month by month and lays out a hardcover book. You look through it, change what you like, and it is printed and sent to your door.`,
    ],
    beliefsTitle: 'What we hold to',
    beliefs: [
      {
        title: 'The selection is the product',
        body: 'Anyone can print 200 photos. The value is picking the best 150 out of thousands and laying them out so the book looks composed, not generated.',
      },
      {
        title: 'Your photos stay on your phone',
        body: 'The photos are chosen on your phone. Nothing is uploaded to choose them; only the finished book is sent, when you order it, to be printed.',
      },
      {
        title: 'No homework',
        body: 'No weekly prompts, no journaling, no subscription. You took the photos already; the book is made from them, once, when you want it.',
      },
      {
        title: 'A book made to last',
        body: 'A square {size} hardcover on 170 gsm silk-coated paper, printed on demand by our print partner and shipped to your door.',
      },
    ],
    who: {
      title: `A ${PUBLISHER.name} product`,
      body: `${SITE.name} is made by <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, a small company that makes personalized gifts from photos. Its logo is on the back cover of every book. Questions, ideas or a book that did not turn out right: write to <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `See the ${a('babyPhotoBook', 'baby photo book')}, read the ${a('privacy', 'privacy policy')}, or get help on the ${a('support', 'support page')}.`,
  },

  support: {
    title: 'BabyBookAI Support & FAQ | Help With Your Baby Photo Book',
    description:
      'Help with the BabyBookAI app and your order: finding photos, WhatsApp pictures, saving your book, price and shipping, and how to reach us.',
    crumb: 'Support & FAQ',
    eyebrow: 'Support',
    h1: 'How can we help?',
    lead: 'Most answers are below. For anything else, about the app or an order, write to us and a person will reply.',
    emailLabel: 'Email',
    emailNote: 'About an order? Write from the email address you ordered with, so we can find it.',
    appTitle: 'The app and your order',
    bookTitle: 'The book and how it is made',
    more: `More: the ${a('privacy', 'privacy policy')}, the ${a('terms', 'terms')}, and ${a('about', 'who we are')}.`,
    faq: [
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
        answer: `{price} for ${BOOK.pagesMin} pages, shipping included. Extra pages, up to ${BOOK.pagesMax}, cost extra. The final price is shown in your currency before you pay.`,
      },
      {
        question: 'Which countries do you ship to?',
        answer:
          'The United States, the United Kingdom, Canada, Australia, Ireland, Germany, Austria, France, Belgium, Spain, Italy, the Netherlands, Portugal, Japan, South Korea and China.',
      },
      {
        question: 'How do I pay?',
        answer: 'By card, through Stripe. We never see your card details.',
      },
      {
        question: 'Something is wrong with my order. What do I do?',
        answer: `Write to ${EMAIL} from the email you ordered with, and include a photo if the book arrived damaged.`,
      },
      {
        question: 'Is there an iPhone app?',
        answer: 'Not yet. BabyBookAI is on Google Play for Android now, and the iPhone app is coming soon.',
      },
      {
        question: 'How do I delete my data?',
        answer: `Your photos never leave your phone to make the book, and deleting the app deletes the saved book. For an order you placed, write to ${EMAIL} and we delete what we hold that the law does not require us to keep. The privacy policy has the details.`,
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy | BabyBookAI',
    description:
      'What BabyBookAI does with your photos and your order details: your library is read on your phone, and only the finished book is sent to be printed.',
    crumb: 'Privacy policy',
    eyebrow: 'Privacy',
    h1: 'Your baby’s photos stay on your phone',
    updatedLabel: 'Privacy policy · Last updated:',
    updated: 'October 9, 2026',
    intro: `BabyBookAI (“we”) is an app that makes a printed photo book of your baby’s first year from the photos on your phone. It is a Photo-to-Text product. Contact ${EMAIL}.`,
    shortTitle: 'The short version',
    short: [
      'Your photo library is read <strong>on your phone</strong>. We never see it.',
      'When you order a book, the finished book file (the photos you chose, your words, your baby’s name) is sent to us and to our printer.',
      'To deliver it we need your name, email and address. Payment is handled by Stripe; we never see your card.',
      'The app has no advertising, no analytics, no tracking and no account.',
    ],
    phoneTitle: 'What the app does on your phone',
    phone: [
      'To choose the photos, the app reads the photos in your library from the months you pick: their dates, sizes, sharpness and duplicates. This happens only on your phone, and nothing about your library is sent anywhere.',
      '<strong>Recognizing your baby (optional).</strong> If you turn on the recognition switch before the scan, the app learns your baby’s face from photos you tap, on your phone, to keep other people’s children out of the book. The face data exists only in the phone’s memory during the scan and is deleted when the scan ends; it is never saved or sent. The switch is off by default and is not offered in Illinois, Texas or Washington.',
      'The book you are working on is saved on your phone so you can come back to it. It holds which photos are in it, your words, and where faces are in those photos (to frame them), never face data. Starting a new book deletes it, as does uninstalling the app.',
    ],
    receiveTitle: 'What we receive, and why',
    table: {
      head: ['What', 'Why', 'Shared with'],
      rows: [
        ['The book file: the photos in your book, your words, your baby’s name and birth year', 'To print your book', 'Gelato (our printer)'],
        ['Number of pages, currency', 'To price the order', '—'],
        ['Your name, email, shipping address, phone (optional)', 'To deliver the book and send the receipt', 'Gelato (delivery), Stripe (receipt)'],
        ['Payment details', 'To take payment', 'Stripe only; we never receive them'],
      ],
    },
    receiveNote:
      'We use this information only to make, ship and support your order. We do not sell it, use it for advertising, or use your photos for anything other than printing your book.',
    othersTitle: 'Who else handles it',
    others: [
      '<strong>Stripe</strong> processes payments (<a class="lnk" href="https://stripe.com/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> prints and ships the book (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'Our order server, where the book file waits until it reaches the printer.',
    ],
    keepTitle: 'How long we keep it',
    keep: [
      'Orders that are never paid are deleted, with their book file, after 7 days.',
      'For paid orders we keep the order details and the book file for as long as we need to deliver the order, support you, and meet tax and accounting rules. You can ask us to delete them at any time (see below).',
    ],
    rightsTitle: 'Your rights, and how to delete your data',
    rights: [
      `You can ask us for a copy of your data, to correct it, or to delete it, by writing to ${EMAIL} from the email address you ordered with, naming BabyBookAI. We will answer within 30 days. To delete your data, tell us “delete my data”: we then delete your order details and your book file, except what the law obliges us to keep, and ask Gelato and Stripe to delete theirs.`,
      'If you live in the European Union or the United Kingdom, you can also complain to your data protection authority. We handle your order details because you asked us to make and ship your book, and, if you use it, face recognition only with your consent, which you can withdraw by turning the switch off.',
    ],
    websiteTitle: 'This website',
    websiteLanguage:
      'babybookai.com reads the country your visit comes from, as our hosting provider (Cloudflare) reports it, to show prices in your currency and, on a first visit, the page in your language. It is not stored. One cookie, “lang”, remembers the language you last read the site in, so the home page opens in it next time.',
    websiteAnalytics:
      'babybookai.com uses Google Analytics to count visits and see which pages are read, through cookies set by Google. It receives your IP address, browser and the pages you visit, never anything from the app. You can block it with your browser’s settings or Google’s opt-out add-on (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). Google’s policy: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'babybookai.com runs no analytics or advertising scripts.',
    childrenTitle: 'Children',
    children:
      'BabyBookAI is for parents. It is not directed at children, and we do not knowingly collect information from children. The photos of your baby are used only to print your book.',
    securityTitle: 'Security',
    security:
      'Everything sent from the app travels encrypted (HTTPS). Book files are stored in a private folder on our server and reach the printer only through a signed, expiring link.',
    changesTitle: 'Changes',
    changes: 'We will post any changes here and update the date above.',
  },

  terms: {
    title: 'Terms of Use and Sale | BabyBookAI',
    description:
      'The terms for using the BabyBookAI app and ordering a printed baby photo book: your photos, orders and payment, printing and delivery, and damaged books.',
    crumb: 'Terms',
    eyebrow: 'Terms',
    h1: 'Terms of use and sale',
    updatedLabel: 'Last updated:',
    updated: 'October 9, 2026',
    intro: `These terms apply to the ${SITE.name} app and to the printed books ordered through it. ${SITE.name} is a ${PUBLISHER.name} product (“we”, “us”). By using the app or ordering a book you agree to them. Questions: ${EMAIL}.`,
    sections: [
      {
        title: 'The app',
        paragraphs: [
          'The app is free to download and use. Making a book and looking through it costs nothing; you pay only if you order a printed book. You may use the app for your own personal, non-commercial use. We may improve, change or stop features of the app over time.',
        ],
      },
      {
        title: 'Your photos and words',
        list: [
          'Your photos and your words remain yours. We claim no rights over them.',
          `When you order, you allow us and our printer to use the book file only to print, ship and support that order, as the ${a('privacy', 'privacy policy')} describes.`,
          'You confirm that you have the right to print the photos and words in your book, and that nothing in it is unlawful. We may decline to print a book that is.',
        ],
      },
      {
        title: 'Orders and payment',
        list: [
          'You must be 18 or older to place an order.',
          `The app shows the full price before you pay, in your country’s currency, with shipping included. A ${BOOK.pagesMin}-page book is {price}; extra pages, up to ${BOOK.pagesMax}, cost more and are priced in the app.`,
          'Payment is taken by card through Stripe. We never see your card details.',
          'We check every order before it goes to print. If we cannot fulfil an order, we cancel it and refund you in full.',
          'Before you pay, look through the whole book: photos, names, dates and spelling. Each book is printed exactly as you approve it.',
        ],
      },
      {
        title: 'Printing and delivery',
        paragraphs: [
          'Books are printed on demand by our print partner and shipped to the address you give, in the countries the app lists. Delivery times shown are estimates. Please check the address carefully: we cannot redirect a book once it has shipped.',
        ],
      },
      {
        title: 'Damaged, misprinted or lost books',
        paragraphs: [
          `Every book is made for you, so we cannot take it back if you change your mind. If your book arrives damaged, has a printing defect, or does not arrive, write to ${EMAIL} within 30 days of delivery (or of the expected delivery date) with your order email and, if you can, a photo. We will reprint the book or refund you. Nothing in these terms limits rights you have under the consumer law where you live.`,
        ],
      },
      {
        title: 'Liability',
        paragraphs: [
          'We work hard to make the app and the books right, but the app is provided as it is. To the extent the law allows, our liability for an order is limited to what you paid for it. We are not responsible for photos lost on your phone: the app reads your photos but never deletes them.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: ['We may update these terms. Changes are posted here with a new date, and apply to orders placed after that date.'],
      },
    ] as { title: string; paragraphs?: string[]; list?: string[] }[],
  },

  notFound: {
    title: 'Page not found | BabyBookAI',
    description: 'This page does not exist. Find the BabyBookAI baby photo book from here.',
    h1: 'This page wandered off',
    body: 'The link may be old. These are good places to start:',
  },
};

export type Copy = typeof en;
