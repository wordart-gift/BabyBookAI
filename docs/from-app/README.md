# From the app (librofotos) — material for the site

Handed over from the app project on 2026-10-01. The app's `CLAUDE.md`
(`C:\Users\X421\proyectos\librofotos\CLAUDE.md`) stays the source of truth for
product facts; this file is a site-oriented digest of it and of how the app
behaves today. **Nothing here is published by itself**: copy what you use into
`src/assets/` deliberately.

## Files

| file | what it is | use |
|---|---|---|
| `app-icon-1024.png` | the app icon: the stork carrying a book, sky gradient | store-style icon, favicon source, OG image element |
| `app-icon-play-512.png` | the same, Google Play size | |
| `stork-mascot-body.svg`, `stork-mascot-bundle.svg` | the app's mascot, flat illustration (the guide on every app screen) | hero art, section illustrations |
| `photo-to-text-logo.svg` / `.png` | Photo-to-Text logo (printed on the book's back cover) | footer "A Photo-to-Text product" |
| `book-sketches.png` | the pen-sketch drawings used in the book (stork with bundle, teddy, number blocks, stacking rings, rocking horse, pram, duck…) | decorative accents, in the book's own style |
| `book-first-and-last-page.png` | page 1 ("Welcome to the world, little Noa!", born date, stork) and the last page (birthday cake, "And then Noa was one, with a whole world waiting and a lifetime of love ahead") | to show the book's opening and closing |
| `book-spine-three-tones.png` | the printed spine in the three tones | detail shot |

Not included on purpose: **phone screenshots of a real book** — they show
Carlos's family. UI screenshots without personal photos (welcome, name,
dates, summary) can be taken from the phone on request; a printed copy should
be photographed for the real product shots.

## What the app does (true today)

1. **Setup, three questions** with the stork: the baby's name, when the book
   starts (usually the birth date) and for how long (6, 12 or 18 months), then
   a summary with the page count and the price, shipping included.
2. **Scan**: reads the phone's photo library **on the phone** (nothing is
   uploaded to choose photos). Drops blurred shots, screenshots, duplicates and
   bursts (keeps the best of a burst), keeps the highest-resolution copy of a
   photo forwarded around (WhatsApp), favours photos the parent hearted and
   the ones shared most. Takes a few minutes on a large library.
3. **Optional baby recognition** (off by default, a switch the parent turns on,
   on the phone, forgotten after the scan; not offered in Illinois, Texas or
   Washington). The parent taps the baby's faces once; the book then keeps
   photos of the baby, not the cousins'. **Never a selling point on the site**
   (see the site's own decision).
4. **The book is laid out by itself**: a spread a month in time order, page
   designs that vary so it does not look generated, a quiet background pattern
   per month in the book's tone (neutral, pink or blue), short lines in script
   in empty spaces ("Dream big, little one"…), page 1 with the birth date and
   the stork, the last page with the first-birthday cake.
5. **Editing, kept small on purpose**: swap a photo, frame and zoom it, take it
   out, change the tone, and edit, move, resize or turn any text, or add one.
   No manual layout.
6. **Order**: the book is printed by Gelato and shipped in the US.

## Product facts for copy

- Hardcover, **11 × 11 in (28 × 28 cm)**, square, **30 to 40 pages**
  (the app proposes 30–36), 170 gsm coated silk, matt laminated cover.
- Binding is glued: **never say "layflat"**.
- Languages in the book: English, Spanish, German, French (the site is English).
- Print-ready resolution checks: photos too small to print sharp are not used
  large.

## Not settled / not built — do not state on the site yet

- **Retail price**: not set. Gelato cost is about 14.49–17.54 EUR (30–40 pages)
  plus shipping from 5.89 EUR to the US.
- **Ordering and payment** inside the app are not finished (Gelato order API,
  print PDF in progress). Delivery times: not measured.
- **iPhone**: not yet run on an iPhone; the app is developed and tested on
  Android so far.
- Store listings and URLs: not published.

## Brand

- Name: **BabyBookAI** (domain babybookai.com).
- App colours: deep teal / ink `#0E2A31`, amber `#E8A33F` for the next action
  only, soft sky blues for backgrounds, warm off-white paper.
- Book type: Dancing Script (script lines), Nunito (spaced capitals), Lora
  (serif, the birth date); all OFL, in `librofotos/assets/`.
