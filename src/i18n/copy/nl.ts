import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Nederlands, met je/jij, zoals de app (librofotos lib/l10n/app_nl.arb). Het
 * gezochte woord is «baby fotoboek» (Semrush, Nederland en België, okt. 2026;
 * de gegevens staan in docs/keywords/nl), met «maken» erbij de haalbaarste.
 * «Fotoalbum» deelt deels de eerste pagina en staat in de tekst. «Babyboek»
 * en «invulboek» zijn het boek om in te vullen: niet in titels.
 */
const a = linker('nl');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const nl: Copy = {
  ui: {
    skip: 'Naar de inhoud',
    homeAria: `${SITE.name}, startpagina`,
    mainNav: 'Hoofdmenu',
    nav: { babyPhotoBook: 'Baby-fotoboek', firstYear: 'Het eerste jaar' },
    getApp: 'Download',
    language: 'Taal',
    breadcrumb: 'Kruimelpad',
    home: 'Home',
    footer: {
      tagline: 'Het eerste jaar van je baby, als boek voor jou gemaakt.',
      productOf: 'Een product van',
      book: 'Het boek',
      company: 'Bedrijf',
      links: {
        babyPhotoBook: 'Baby-fotoboek',
        firstYear: 'Fotoboek eerste jaar',
        boy: 'Fotoalbum babyjongen',
        girl: 'Fotoalbum babymeisje',
        ideas: 'Ideeën voor een baby-fotoboek',
        about: 'Over ons',
        support: 'Hulp en vragen',
        privacy: 'Privacy',
        terms: 'Voorwaarden',
      },
      rights: 'Alle rechten voorbehouden.',
    },
    closing: {
      title: 'Maak het boek in een paar minuten. Bewaar het voor altijd.',
      body: 'Download BabyBookAI, geef de naam van je baby en de data op, en zie het eerste jaar opgemaakt voordat je koffie koud wordt.',
    },
    free: 'Gratis te downloaden. Je betaalt alleen het gedrukte boek.',
    badges: {
      aria: `${SITE.name} downloaden`,
      appStore: 'Download in de App Store',
      googlePlay: 'Ontdek het op Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: binnenkort',
    },
    qr: {
      aria: `QR-code om ${SITE.name} te downloaden`,
      title: 'Op je computer?',
      body: 'Scan met de camera van je telefoon om de app te downloaden.',
    },
    how: {
      eyebrow: 'Zo werkt het',
      title: 'Drie stappen, en jij doet alleen het makkelijke',
      steps: [
        {
          title: 'Geef de naam en de data op',
          body: 'De naam van je baby komt op de kaft. De meeste boeken beginnen op de geboortedag en eindigen op de eerste verjaardag.',
        },
        {
          title: 'Onze eigen AI kiest de foto’s',
          body: 'Op je telefoon loopt onze AI de foto’s van dat jaar langs, laat de wazige en bijna dubbele weg, houdt de beste van elk moment en sorteert ze maand voor maand. Zelf hoef je er niet één te kiezen.',
        },
        {
          title: 'Bladeren, wisselen, bestellen',
          body: 'Het boek wordt voor je opgemaakt. Vind je een foto niet mooi, wissel hem dan voor een andere uit dezelfde maand of haal hem eruit. Pas de teksten aan als je wilt, en het hardcover wordt gedrukt en bij je thuis bezorgd.',
        },
      ],
    },
    tones: {
      pink: 'Zachtroze',
      blue: 'Zachtblauw',
      neutral: 'Klassiek crème',
      caption: 'De drie papiertinten. De hele pagina krijgt de tint.',
    },
    stork: 'Een ooievaar met een bundeltje',
    spreadMonth: 'Eerste maand',
    defaultDescription:
      'BabyBookAI maakt van de foto’s die al op je telefoon staan een gedrukt hardcover fotoboek van het eerste jaar van je baby. De app kiest, sorteert en maakt de foto’s voor je op.',
    ogImageAlt: 'BabyBookAI: een gedrukt fotoboek van het eerste jaar van een baby',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Een BabyBookAI-spread, “Eerste maand”: zeven foto’s van een baby met haar gezin en grootouders',
    screens: {
      setup: 'Startscherm van BabyBookAI: een naam en een geboortedatum, daarna de lengte van het boek en de prijs',
      selection: 'Resultaatscherm van BabyBookAI: 225 foto’s bewaard, per maand',
      order: 'Bestelscherm van BabyBookAI: 30 pagina’s, hardcover, verzending inbegrepen',
    },
    translationNote:
      'Dit is een vertaling van de Engelse tekst. Als de twee van elkaar afwijken, geldt de Engelse versie.',
    schema: {
      appFeatures: [
        'Kiest de foto’s op de telefoon: alleen het afgewerkte boek wordt voor druk verstuurd',
        'Houdt de scherpste foto van elk moment en laat dubbele en serie-opnamen weg',
        'Sorteert de foto’s maand voor maand op de datum waarop ze zijn gemaakt',
        `Maakt een vierkant hardcover boek op van ${BOOK.pagesMin} tot ${BOOK.pagesMax} pagina’s`,
        'Stuurt het boek naar de drukker en laat het bezorgen',
      ],
      bookName: 'BabyBookAI baby-fotoboek',
      bookDescription: `Een vierkant hardcover fotoboek, 28 × 28 cm, over het eerste jaar van een baby, ${BOOK.pagesMin} tot ${BOOK.pagesMax} pagina’s op zijdemat papier van 170 g, gemaakt door de BabyBookAI-app van de foto’s op je telefoon.`,
      pages: 'Pagina’s',
      binding: 'Binding',
      bindingValue: 'Hardcover',
    },
  },

  home: {
    title: 'BabyBookAI — Het baby-fotoboek dat zichzelf maakt',
    description:
      'Het eerste jaar van je baby als gedrukt hardcover fotoboek, gemaakt van de foto’s die al op je telefoon staan. BabyBookAI kiest, sorteert en maakt ze voor je op.',
    eyebrow: 'Fotoboek van het eerste jaar van je baby',
    h1: 'Het baby-fotoboek dat zichzelf maakt',
    lead: 'Onze eigen AI loopt je galerij langs, kiest voor jou de mooiste foto’s van elke maand en maakt een hardcover boek op. Jij bladert erdoorheen, wisselt een foto voor een andere uit dezelfde maand of haalt hem eruit, en het is onderweg.',
    homework: {
      title: 'Elk babyalbum is huiswerk. Behalve dit.',
      body: 'De foto’s heb je al gemaakt: honderden, elke maand. Er een boek van maken is het deel waar niemand tijd voor heeft met een baby in huis.',
      yourPart: 'Jouw deel',
      ways: [
        { name: 'Een invulboek voor de baby', effort: 'Printen, knippen, plakken en schrijven, elke maand', verdict: 'De meesten stoppen rond maand drie.' },
        { name: 'Een wekelijkse babyboek-app', effort: 'Een paar minuten per week, 52 weken lang', verdict: 'Het werk is er nog, in 52 stukjes.' },
        { name: 'BabyBookAI', effort: 'Niets tot het jaar voorbij is', verdict: 'Dan één keer doorbladeren, en klaar.' },
      ],
    },
    book: {
      eyebrow: 'Het boek',
      title: 'Een echt hardcover, gemaakt om te bewaren',
      body: 'De naam van je baby en de mooiste foto op de kaft. De geboortedag op de eerste pagina. Dan een dubbele pagina voor elke maand, in de volgorde waarin het gebeurde, elk opgemaakt voor de foto’s die erin staan, tot de eerste verjaardag.',
      specs: [
        { label: 'Formaat', value: '{size}, vierkant' },
        { label: 'Kaft', value: 'Hardcover, mat' },
        { label: 'Pagina’s', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Papier', value: 'Zijdemat 170 g' },
        { label: 'Opmaak', value: 'Een dubbele pagina per maand' },
        { label: 'Bezorgd in', value: '16 landen' },
      ],
      more: 'Bekijk het baby-fotoboek in detail',
    },
    privacy: {
      title: 'De foto’s van je baby blijven op je telefoon',
      body: 'BabyBookAI kiest de foto’s op je telefoon, niet op een server. Er wordt niets geüpload terwijl de app je galerij leest of terwijl je door het boek bladert. Pas als je bestelt, gaan de afgewerkte pagina’s naar de drukker. Geen abonnement en geen rechten op de foto’s van je kind.',
    },
    birthday: {
      title: 'Klaar voor de eerste verjaardag',
      body: 'Het jaar eindigt, het boek is klaar. Bestel het in de week van het feestje, of maak er ook een voor opa en oma. Hun favoriete cadeau is dat met de baby erin.',
      more: 'Zo werkt het fotoboek van het eerste jaar',
    },
    faqTitle: 'Vragen van ouders',
    faq: [
      {
        question: 'Wat is BabyBookAI?',
        answer:
          'BabyBookAI is een app die van de foto’s die al op je telefoon staan een gedrukt hardcover fotoboek van het eerste jaar van je baby maakt. De app kiest de foto’s, sorteert ze per maand en maakt elke pagina voor je op. De app is gratis: je betaalt alleen het gedrukte boek.',
      },
      {
        question: 'Hoe kiest BabyBookAI de foto’s?',
        answer:
          'De app leest de datum waarop elke foto is genomen en houdt alleen die uit het eerste jaar van je baby. Daarna laat ze wazige foto’s weg, houdt het scherpste beeld van elke serie en herkent dezelfde foto als die twee keer is opgeslagen (een WhatsApp-kopie en het origineel, bijvoorbeeld) om de beste kopie te houden. Foto’s die je als favoriet markeerde en die je het vaakst deelde, krijgen de beste plekken: de kaft en de hele pagina’s.',
      },
      {
        question: 'Worden mijn foto’s ergens geüpload?',
        answer:
          'Niet om het boek te maken. De hele selectie gebeurt op je telefoon. Pas als je bestelt, gaan de pagina’s van het afgewerkte boek naar de drukker.',
      },
      {
        question: 'Kan ik de gekozen foto’s veranderen?',
        answer:
          'Ja. Je bladert op je telefoon door het boek en tikt op een foto die je niet mooi vindt: wissel hem voor een andere uit dezelfde maand of haal hem eruit, en de pagina wordt vanzelf opnieuw opgemaakt. Je kunt ook de teksten op elke pagina bewerken en een eigen korte notitie toevoegen.',
      },
      {
        question: 'Hoe ziet het boek eruit?',
        answer: `Een vierkant hardcover boek van {size} met een matte kaft en ${BOOK.pagesMin} tot ${BOOK.pagesMax} pagina’s op zijdemat papier van 170 g. De naam van je baby en de mooiste foto komen op de kaft, de geboortedatum opent het boek en elke maand krijgt een eigen dubbele pagina.`,
      },
      {
        question: 'En als sommige foto’s in WhatsApp of iCloud staan?',
        answer:
          'Foto’s die je uit WhatsApp hebt opgeslagen staan in je galerij, dus ze worden gevonden zoals alle andere. Op de iPhone kan BabyBookAI voor maanden met weinig foto’s op de telefoon ook je iCloud-foto’s gebruiken. Op Android leest de app de foto’s die op de telefoon staan.',
      },
      {
        question: 'Werkt het alleen voor de eerste twaalf maanden?',
        answer:
          'De meeste ouders maken het eerste jaar, van de geboorte tot de eerste verjaardag. Jij kiest de dag waarop het begint en hoe lang het loopt: 6, 12 of 18 maanden, met een dubbele pagina per maand.',
      },
      {
        question: 'Wat kost het?',
        answer: `De app is gratis, en het boek maken en erdoorheen bladeren ook. Je betaalt pas als je het gedrukte hardcover bestelt: {price} voor ${BOOK.pagesMin} pagina’s, verzending inbegrepen, met extra pagina’s tot ${BOOK.pagesMax} tegen een meerprijs. De eindprijs zie je voordat je betaalt.`,
      },
      {
        question: 'Is het er voor iPhone en Android?',
        answer:
          'BabyBookAI is nu gratis op Google Play, voor Android. De iPhone-app komt binnenkort. De boeken worden bezorgd in 16 landen in Noord-Amerika, Europa en Azië.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Baby-fotoboek maken van de foto’s op je telefoon | BabyBookAI',
    description: `Een baby-fotoalbum dat gedrukt bij je aankomt: BabyBookAI kiest de mooiste foto’s op je telefoon, sorteert ze per maand en maakt een hardcover fotoboek op. {size}.`,
    crumb: 'Baby-fotoboek',
    eyebrow: 'Baby-fotoboek',
    h1: 'Baby-fotoboek maken van de foto’s op je telefoon',
    lead: 'BabyBookAI vindt de mooiste foto’s van je baby op je telefoon, sorteert ze maand voor maand en maakt een vierkant hardcover boek op. Niet uploaden, geen foto’s in sjablonen slepen. Jij bladert er alleen doorheen.',
    features: {
      title: 'Alles wat een babyalbum moet zijn. Zonder het werk.',
      items: [
        {
          title: 'De app kiest de foto’s',
          body: 'Uit honderden opnamen per maand houdt ze de scherpste van elk moment en laat wazige foto’s, serie-opnamen en dubbele weg.',
        },
        {
          title: 'Ze sorteert ze per maand',
          body: 'Elke foto komt waar hij hoort, op de datum waarop hij is genomen, zodat het boek het jaar vertelt in de volgorde waarin het gebeurde.',
        },
        {
          title: 'Ze maakt elke pagina op',
          body: 'Elke dubbele pagina is ontworpen voor de foto’s die erop staan: één grote foto en een raster, een hele pagina, of een foto over beide pagina’s.',
        },
        {
          title: 'Ze drukt ze scherp af',
          body: 'Een foto komt alleen waar hij genoeg pixels heeft om goed te drukken. Een kleine kopie uit een chat krijgt een klein plekje, nooit de kaft.',
        },
      ],
    },
    howTitle: 'Een baby-fotoboek maken in drie stappen',
    inside: {
      eyebrow: 'In het boek',
      title: 'Van de geboortedag tot de eerste verjaardag',
      tour: [
        { label: 'De kaft', body: 'De naam van je baby en de mooiste foto van het jaar, gekozen uit de foto’s die je het mooist vond en het meest deelde.' },
        { label: 'Pagina één', body: 'De geboortedag, met een kleine pentekening van een ooievaar met zijn bundeltje.' },
        {
          label: 'Een dubbele pagina per maand',
          body: 'Elke maand in zijn seizoen: zachte accenten en de lichtste patronen, vogeltjes, sterren of wolken, nooit luider dan de foto’s.',
        },
        { label: 'De laatste pagina', body: 'Een taart voor de eerste verjaardag sluit het jaar af: en toen was hij één.' },
      ],
    },
    personal: {
      eyebrow: 'Gepersonaliseerd',
      title: 'Een gepersonaliseerd babyalbum, zonder het gepriegel',
      body: 'Een eigen fotoboek betekent meestal een avond in een editor. Hier staan de foto’s al op hun plek, dus het van jou maken kost een paar tikken.',
      items: [
        { title: 'Zijn of haar naam op de kaft', body: 'En de data die je kiest: vanaf de geboortedag of een dag naar keuze, voor 6, 12 of 18 maanden.' },
        { title: 'Drie papiertinten', body: 'Klassiek crème, zachtroze of zachtblauw. De hele pagina krijgt de tint, niet alleen de rand.' },
        {
          title: 'Teksten die je kunt herschrijven',
          body: 'Elke pagina heeft korte regels zoals «Droom groot, kleintje». Houd ze, verander ze of voeg overal een eigen notitie toe.',
        },
      ],
      colors: `Op zoek naar kleuren? Bekijk het ${a('girl', 'fotoalbum babymeisje')} en het ${a('boy', 'fotoalbum babyjongen')}.`,
    },
    specs: {
      title: 'Het boek in detail',
      items: [
        { label: 'Formaat', value: 'Vierkant hardcover fotoboek' },
        { label: 'Afmeting', value: '{size}' },
        { label: 'Pagina’s', value: `${BOOK.pagesMin} tot ${BOOK.pagesMax}, een dubbele pagina per maand` },
        { label: 'Papier', value: 'Zijdemat papier van 170 g, in kleur gedrukt' },
        { label: 'Kaft', value: 'Hardcover met matte lamineerlaag' },
        { label: 'Druk', value: 'Op bestelling gedrukt, bezorgd in 16 landen' },
      ],
    },
    gift: {
      title: 'Het cadeau waar opa en oma om vragen',
      body: 'Een telefoon vol foto’s laat zich slecht rond de tafel doorgeven. Een baby-fotoboek wel. Het is het cadeau voor een eerste verjaardag, voor Moederdag of Vaderdag, en dat wat grootouders op de salontafel laten liggen.',
    },
    why: {
      title: 'Waarom een baby-fotoboek, als de foto’s al op je telefoon staan',
      paragraphs: [
        'In het eerste jaar van een baby maken ouders honderden foto’s per maand. Ze leven in een galerij, tussen screenshots en bonnetjes, en schieten voorbij bij het scrollen. Een fotoalbum voor een baby is het tegenovergestelde: een paar van de beste, op volgorde, op papier, in een boek dat iedereen kan oppakken.',
        'Het moeilijke deel was nooit het drukken. Het zijn de uren kiezen: welke van de veertig badfoto’s, bij welke maand die foto hoort, hoe je een staande foto naast een liggende krijgt. Daar blijven de meeste babyalbums steken, ergens rond maand drie.',
        `BabyBookAI doet dat deel voor je, op je telefoon. De app leest de data, houdt de scherpste foto van elk moment, geeft elke maand een eigen dubbele pagina en maakt een babyalbum op dat ontworpen oogt, niet gedumpt. Voor jou blijft het leuke deel over: erdoorheen bladeren. Wil je het hele eerste jaar, van het ziekenhuis tot de taart, kijk dan naar het ${a('firstYear', 'fotoboek van het eerste jaar')}.`,
      ],
    },
    faqTitle: 'Vragen over het baby-fotoboek',
    faq: [
      {
        question: 'Is het een fotoalbum om foto’s in te plakken?',
        answer:
          'Nee. Het is een gedrukt fotoboek: de foto’s staan op de pagina’s gedrukt, al op hun plek en opgemaakt. Geen insteekhoesjes, niets om in te plakken.',
      },
      {
        question: 'Hoe groot is het baby-fotoboek?',
        answer:
          'Het is een vierkant hardcover boek van {size}. Vierkant is de enige vorm waarin staande en liggende telefoonfoto’s allebei passen zonder dat een ervan slecht wordt bijgesneden.',
      },
      {
        question: 'Hoeveel pagina’s heeft het?',
        answer: `Tussen ${BOOK.pagesMin} en ${BOOK.pagesMax}. BabyBookAI stelt voor een eerste jaar ${BOOK.pagesMin} tot ${BOOK.pagesSuggestedMax} voor, een dubbele pagina per maand, en je kunt tegen een meerprijs pagina’s toevoegen tot ${BOOK.pagesMax}.`,
      },
      {
        question: 'Worden mijn telefoonfoto’s scherp gedrukt?',
        answer:
          'Elke foto komt alleen waar hij genoeg pixels heeft om goed te drukken. Een kleine kopie, zoals een uit een chat opgeslagen foto, komt op een kleinere plek op de pagina in plaats van een hele pagina of de kaft te vullen.',
      },
      {
        question: 'Kan ik het boek personaliseren?',
        answer:
          'Ja. De naam van je baby komt op de kaft, jij kiest de data en je kunt papier in zachtroze, zachtblauw of klassiek crème nemen. Elke pagina heeft korte regels die je kunt herschrijven, en je kunt overal een eigen notitie toevoegen.',
      },
      {
        question: 'Kan een gezicht in de middenvouw terechtkomen?',
        answer:
          'Nee. De lay-outs houden foto’s buiten de middenvouw. De enige foto die de vouw kruist, is er een die met opzet over beide pagina’s is geplaatst, en die worden daarvoor gekozen.',
      },
      {
        question: 'Hoe lang duurt het om te maken?',
        answer:
          'Een paar minuten. Het meeste daarvan is onze AI die op je telefoon je galerij langsloopt; daarna blader je door het boek, wissel of verwijder je foto’s zoals je wilt en bestel je.',
      },
    ],
  },

  firstYear: {
    title: 'Fotoboek van baby’s eerste jaar, maand voor maand | BabyBookAI',
    description:
      'Het baby-fotoboek van het eerste jaar, maand voor maand, gemaakt van de foto’s op je telefoon. Niets om in te vullen: BabyBookAI kiest, sorteert en maakt het hele jaar op.',
    crumb: 'Fotoboek eerste jaar',
    eyebrow: 'Fotoboek baby eerste jaar',
    h1: 'Het fotoboek van baby’s eerste jaar dat je niet zelf hoeft te maken',
    lead: 'Twaalf maanden, voor elke maand een dubbele pagina, van het ziekenhuis tot de taart. BabyBookAI bouwt het van de foto’s die al op je telefoon staan, dus je hoeft het hele jaar niets bij te houden.',
    months: {
      eyebrow: 'Maand voor maand',
      title: 'Een maandelijks baby-fotoboek, zonder de maandelijkse fotoshoot',
      body: 'Geen mijlpaalkaartjes, niet elke maand dezelfde pose op dezelfde deken. Het boek volgt de foto’s die je toch al maakte, in de volgorde waarin je ze maakte. Elke baby heeft zijn eigen kalender.',
      items: [
        { n: 'Pagina 1', moment: 'De geboortedag' },
        { n: 'Maand 1', moment: 'Thuiskomen' },
        { n: 'Maand 2', moment: 'De eerste echte glimlachjes' },
        { n: 'Maand 3', moment: 'Op de buik' },
        { n: 'Maand 4', moment: 'Hardop lachen' },
        { n: 'Maand 5', moment: 'Alles pakken' },
        { n: 'Maand 6', moment: 'De eerste hapjes' },
        { n: 'Maand 7', moment: 'Zelf zitten' },
        { n: 'Maand 8', moment: 'Op pad' },
        { n: 'Maand 9', moment: 'Kiekeboe' },
        { n: 'Maand 10', moment: 'Omhoogtrekken om te staan' },
        { n: 'Maand 11', moment: 'Bijna lopen' },
        { n: 'Maand 12', moment: 'De eerste verjaardag' },
        { n: 'Laatste pagina', moment: 'En toen was hij één' },
      ],
    },
    unfinished: {
      title: 'Waarom de meeste boeken van het eerste jaar nooit af komen',
      paragraphs: [
        'Een invulboek vraagt je elke maand te printen, plakken en schrijven. Een wekelijkse babyboek-app vraagt elke week een paar minuten, tweeënvijftig weken achter elkaar. Geen van beide klinkt als veel, tot het maand vijf is, je in shifts van twee uur slaapt en het boek drie weken achterloopt.',
        'De foto’s bleven echter komen. Je bent nooit gestopt ze te maken. BabyBookAI begint daar: als het jaar voorbij is, leest de app je galerij en maakt het boek van wat je al hebt. Jouw deel kost minuten, één keer.',
      ],
      compare: [
        { label: 'Invulboek', value: 'Elke maand' },
        { label: 'Wekelijkse babyboek-app', value: '52 weken' },
        { label: 'BabyBookAI', value: 'Eén keer, in minuten' },
      ],
    },
    howTitle: 'Zo wordt het fotoboek van het eerste jaar gemaakt',
    birthday: {
      title: 'Op tijd voor de eerste verjaardag',
      body: 'Jij kiest de data, dus het boek kan afsluiten in de week van het feestje, of de dag erna. Maanden met weinig foto’s zijn geen probleem: de opmaak volgt de foto’s, en een maand met één prachtige foto krijgt een pagina gemaakt voor één. Wil je verder dan het eerste jaar? Een boek kan tot 18 maanden beslaan.',
      more: 'Bekijk het baby-fotoboek in detail',
    },
    faqTitle: 'Vragen over het fotoboek van het eerste jaar',
    faq: [
      {
        question: 'Is het een invulboek?',
        answer:
          'Nee. Het fotoboek van het eerste jaar komt gedrukt en af: de foto’s staan al op hun pagina’s, maand voor maand. Je schrijft alleen als je een zin wilt veranderen of een eigen notitie wilt toevoegen.',
      },
      {
        question: 'Wanneer moet ik het fotoboek van het eerste jaar maken?',
        answer:
          'Op elk moment na de eerste verjaardag, of ervoor als je het boek voor het feestje wilt: jij kiest de data die het beslaat. Omdat BabyBookAI de foto’s leest die je al hebt, hoef je het hele jaar niets bij te houden.',
      },
      {
        question: 'Wat als ik van sommige maanden maar weinig foto’s heb?',
        answer:
          'De opmaak volgt de foto’s. Een maand met tientallen goede foto’s krijgt een volle dubbele pagina; een maand met één prachtige foto krijgt een pagina voor één foto. Op de iPhone kijkt BabyBookAI voor maanden met weinig foto’s op de telefoon ook in iCloud-foto’s.',
      },
      {
        question: 'Kan het boek later dan de geboorte beginnen, of langer dan een jaar duren?',
        answer:
          'Ja. De meeste boeken lopen van de geboorte tot de eerste verjaardag, maar jij kiest de dag waarop het begint en hoe lang het loopt: 6, 12 of 18 maanden, met een dubbele pagina per maand.',
      },
      {
        question: 'Wat staat er op de eerste en de laatste pagina?',
        answer:
          'De eerste pagina toont de dag waarop je baby is geboren, met een kleine tekening van een ooievaar met een bundeltje. De laatste sluit het jaar af met een taart voor de eerste verjaardag.',
      },
      {
        question: 'Moet ik elke week foto’s toevoegen?',
        answer:
          'Nee. Dat is juist het punt van BabyBookAI: de app werkt met de foto’s die al op je telefoon staan, dus er is geen wekelijkse upload en niets om achter te raken.',
      },
    ],
  },

  girl: {
    title: 'Fotoalbum babymeisje dat zichzelf vult | BabyBookAI',
    description:
      'Een roze fotoalbum voor je babymeisje, gemaakt van de foto’s op je telefoon. BabyBookAI kiest haar mooiste foto’s, sorteert ze maand voor maand en maakt een hardcover boek op.',
    crumb: 'Fotoalbum babymeisje',
    eyebrow: 'Fotoalbum babymeisje',
    h1: 'Het fotoalbum voor een babymeisje dat zichzelf vult',
    lead: 'Haar eerste jaar staat al op je telefoon, in honderden foto’s. BabyBookAI kiest de mooiste, zet elke foto in zijn maand en maakt een hardcover album op in zachtroze, met haar naam op de kaft.',
    empty: {
      title: 'De meeste albums voor babymeisjes zijn leeg',
      paragraphs: [
        'Een roze album met insteekhoesjes, een invulboek, een sjabloon in een fotobewerker: elk wacht tot jij een jaar aan foto’s print, kiest en plaatst. Met een baby in huis komt die avond zelden.',
        'Dit begint vol. Onze AI leest de data van je foto’s, houdt de scherpste van elk moment, laat de wazige foto’s en de twaalf bijna-kopieën van dezelfde glimlach weg en geeft elke maand een eigen dubbele pagina. Jij bladert erdoorheen en wisselt een foto voor een andere uit dezelfde maand, of haalt eruit wat je liever niet bewaart.',
      ],
    },
    howTitle: 'Een fotoalbum voor een babymeisje maken in een paar minuten',
    inside: {
      eyebrow: 'In haar album',
      title: 'Van de dag dat ze werd geboren tot haar eerste verjaardag',
      items: [
        { title: 'Haar naam op de kaft', body: 'Met de mooiste foto van haar jaar, gekozen uit de foto’s die je favoriet maakte en het meest deelde.' },
        { title: 'De dag dat ze werd geboren', body: 'Pagina één, met een kleine pentekening van een ooievaar met zijn bundeltje.' },
        { title: 'Een dubbele pagina per maand', body: 'Haar eerste lachje, eerste bad, eerste hapje, elk in de maand waarin het gebeurde.' },
        { title: 'Een taart om het jaar af te sluiten', body: 'De laatste pagina sluit het boek af met haar eerste verjaardag.' },
      ],
    },
    details: {
      title: 'Een aandenken om vast te pakken',
      body: `Een vierkant hardcover boek van {size} met een matte kaft en ${BOOK.pagesMin} tot ${BOOK.pagesMax} pagina’s op zijdemat papier van 170 g, voor {price} met verzending inbegrepen. Vierkant, omdat haar staande en liggende foto’s allebei passen zonder dat een ervan slecht wordt bijgesneden.`,
      more: `Liever blauw of crème? Bekijk het ${a('boy', 'fotoalbum babyjongen')}, of alles over het ${a('babyPhotoBook', 'baby-fotoboek')}.`,
    },
    faqTitle: 'Vragen over het fotoalbum babymeisje',
    faq: [
      {
        question: 'Kan ik haar fotoalbum roze maken?',
        answer:
          'Ja. Het boek heeft drie papiertinten: zachtroze, zachtblauw en klassiek crème. Roze kleurt elke pagina, niet alleen de rand, en de lichte patronen van elke maand nemen dezelfde tint aan. Je kunt hem zo vaak wisselen als je wilt voordat je bestelt.',
      },
      {
        question: 'Komt haar naam op de kaft?',
        answer:
          'Ja. Haar naam en de mooiste foto van haar jaar komen op de kaft, gekozen uit de foto’s die je favoriet maakte en het meest deelde. Pagina één toont de dag waarop ze is geboren.',
      },
      {
        question: 'Kan ik de teksten op de pagina’s veranderen?',
        answer:
          'Ja. Elke pagina heeft korte regels zoals «Ons zonnetje». Houd ze, herschrijf ze of voeg overal op de pagina een eigen notitie toe.',
      },
      {
        question: 'En als ze nog geen jaar is?',
        answer:
          'Jij kiest de data. Een boek kan 6, 12 of 18 maanden beslaan vanaf de dag die je kiest, dus je kunt er een maken als ze zes maanden is en nog een voor haar eerste verjaardag.',
      },
    ],
  },

  boy: {
    title: 'Fotoalbum babyjongen gemaakt van je telefoonfoto’s | BabyBookAI',
    description:
      'Een fotoalbum voor een babyjongen in zachtblauw, voor je gemaakt van de foto’s op je telefoon. BabyBookAI kiest zijn mooiste foto’s, sorteert ze per maand en maakt een hardcover boek op.',
    crumb: 'Fotoalbum babyjongen',
    eyebrow: 'Fotoalbum babyjongen',
    h1: 'Fotoalbum babyjongen, gemaakt van de foto’s op je telefoon',
    lead: 'Geef BabyBookAI zijn naam en zijn verjaardag. Onze eigen AI loopt de foto’s op je telefoon langs, houdt zijn mooiste momenten van elke maand en maakt een hardcover album op in zachtblauw. Jij bladert er alleen doorheen.',
    thousands: {
      title: 'Van duizenden foto’s naar één album',
      body: 'Het moeilijke deel van een babyalbum was nooit het drukken. Het is kiezen. BabyBookAI kiest op je telefoon, dus er wordt niets geüpload voordat je bestelt.',
      steps: [
        { label: '5.450 foto’s', body: 'Een jaar aan galerij: badtijd, dutjes, dezelfde grijns veertig keer.' },
        { label: '225 bewaard', body: 'De scherpste van elk moment, geen series, geen bijna-kopieën, geen screenshots.' },
        { label: 'Eén boek', body: 'Een dubbele pagina per maand, op volgorde, klaar om door te bladeren en te bestellen.' },
      ],
      note: 'De cijfers komen uit één echt jaar, dat op het scherm hierboven. Die van jou zullen anders zijn.',
    },
    howTitle: 'Een fotoalbum voor een babyjongen maken',
    colors: {
      eyebrow: 'Gepersonaliseerd',
      title: 'Zachtblauw, zijn naam, jouw woorden',
      paragraphs: [
        'Zijn naam en de mooiste foto van zijn jaar komen op de kaft. Kies zachtblauw, of crème of roze als je dat liever hebt: de tint kleurt elke pagina, met de lichtste patronen van vogeltjes, sterren of wolken achter de foto’s.',
        'Elke pagina heeft een korte regel die je kunt houden of herschrijven, en je kunt overal een eigen notitie toevoegen. Pagina één toont de dag waarop hij is geboren; de laatste pagina sluit het jaar af met een taart voor de eerste verjaardag.',
      ],
    },
    details: {
      title: 'Het album zelf',
      body: `Een vierkant hardcover boek van {size}, matte kaft, ${BOOK.pagesMin} tot ${BOOK.pagesMax} pagina’s op zijdemat papier van 170 g. {price} met verzending inbegrepen, op bestelling gedrukt en bij je thuis bezorgd. Elke foto komt alleen waar hij de pixels heeft om scherp te drukken, dus een kleine kopie uit een chat komt nooit op de kaft.`,
      more: `Maak je er een voor een dochter? Bekijk het ${a('girl', 'fotoalbum babymeisje')}. Voor het hele jaar, maand voor maand, zie het ${a('firstYear', 'fotoboek van het eerste jaar')}.`,
    },
    faqTitle: 'Vragen over het fotoalbum babyjongen',
    faq: [
      {
        question: 'Kan ik zijn fotoalbum blauw maken?',
        answer:
          'Ja. Kies zachtblauw, zachtroze of klassiek crème. De tint kleurt elke pagina, en de lichte patronen van elke maand nemen hem ook aan. Je kunt wisselen voordat je bestelt.',
      },
      {
        question: 'Komt zijn naam op de kaft?',
        answer:
          'Ja. Zijn naam en de mooiste foto van zijn jaar komen op de kaft. De eerste pagina toont de dag waarop hij is geboren, en de laatste sluit het jaar af met een taart voor de eerste verjaardag.',
      },
      {
        question: 'Kiest de app foto’s van hem en niet van iedereen?',
        answer:
          'De app kiest uit de foto’s van de data die je opgeeft, houdt de scherpste van elk moment en laat dubbele weg. Daarna blader je door het boek en wissel je een foto voor een andere uit dezelfde maand, of verwijder je wat je er niet in wilt.',
      },
      {
        question: 'Is het een goed cadeau voor opa en oma?',
        answer:
          'Het is het cadeau waar ze om vragen. Een telefoon vol foto’s laat zich slecht rond de tafel doorgeven; een hardcover boek van zijn eerste jaar wel.',
      },
    ],
  },

  ideas: {
    title: 'Ideeën voor een baby-fotoboek: 25 manieren om het eerste jaar te vertellen | BabyBookAI',
    headline: 'Ideeën voor een baby-fotoboek: 25 manieren om het eerste jaar te vertellen',
    description:
      'Ideeën voor een baby-fotoboek van het eerste jaar: hoe je het indeelt, wat je fotografeert, lay-outs die werken, onderschriften om te lenen en hoeveel foto’s je kiest.',
    crumb: 'Ideeën voor een fotoboek',
    eyebrow: 'Ideeën',
    h1: 'Ideeën voor een baby-fotoboek: 25 manieren om het eerste jaar te vertellen',
    byline: 'Door het BabyBookAI-team',
    date: '9 oktober 2026',
    lead: 'Bij de eerste verjaardag hebben de meeste ouders duizenden foto’s van hun baby en geen idee waar te beginnen. Deze ideeën voor een baby-fotoboek werken op papier: hoe je het jaar indeelt, wat je fotografeert zolang het nog kan, lay-outs die ontworpen oogen en onderschriften om te lenen.',
    tocTitle: 'In dit artikel',
    toc: {
      organize: 'Manieren om het boek in te delen',
      photograph: 'Wat je kunt fotograferen zolang het kan',
      layout: 'Ideeën voor pagina’s en lay-out',
      captions: 'Ideeën voor onderschriften',
      choosing: 'Hoeveel foto’s, en welke',
      gifts: 'Cadeau-ideeën',
    },
    organize: {
      title: 'Manieren om een baby-fotoboek in te delen',
      body: 'Kies een rode draad voor het boek voordat je één foto kiest. Die bepaalt wat erin komt en wat op de telefoon blijft.',
      items: [
        {
          title: 'Maand voor maand',
          body: 'Het klassieke fotoboek van het eerste jaar: een dubbele pagina per maand, in de volgorde waarin het gebeurde. Bladerend zie je hem groeien. Het lost ook de moeilijkste vraag op, waar een foto hoort, met alleen de datum.',
        },
        {
          title: 'Per eerste keer',
          body: 'Eerste bad, eerste lach, eerste hapje, eerste stapjes, eerste knipbeurt. Elk krijgt een eigen pagina. Werkt goed voor een korter boek, of als onderdeel na de maanden.',
        },
        {
          title: 'Per seizoen',
          body: 'Vier hoofdstukken: de eerste sneeuw, het eerste strand, de eerste herfstbladeren. Goed als de foto’s zich rond reizen en feestdagen groeperen.',
        },
        {
          title: 'Dezelfde plek, elke maand',
          body: 'Dezelfde stoel, dezelfde teddybeer als maatstaf, elke maand op dezelfde dag gefotografeerd. Als je daarmee begonnen bent, geef de reeks aan het einde een eigen dubbele pagina, naast elkaar.',
        },
        {
          title: 'Een gewone dag',
          body: 'Eén gewone dag, van ochtend tot bedtijd: de fles, het dutje, het bad, de wandeling. Het alledaagse vergeet je het eerst.',
        },
        {
          title: 'De mensen die hem vasthielden',
          body: 'Een pagina voor elke opa en oma, broertjes en zusjes, peetouders, de vriend die elke zondag kwam. De foto’s met andere mensen zijn degene die een kind later zoekt.',
        },
      ],
    },
    photograph: {
      title: 'Wat je kunt fotograferen zolang het kan',
      body: 'Als het jaar nog niet voorbij is, zijn dit de foto’s waarvan ouders het vaakst wensen dat ze ze hadden als ze het boek maken:',
      items: [
        'Handjes en voetjes naast die van jou, om de paar maanden',
        'De babykamer zoals hij is, voordat hij verandert',
        'De rommel bij het eten, niet alleen portretten met een schoon gezicht',
        'Slapend op rare plekken: het autostoeltje, je schouder, de hondenmand',
        'Een totaalshot van de kamer, niet alleen close-ups',
        'Jij ook op de foto: geef de telefoon aan iemand anders',
        'De mislukkingen: het wazige, de geeuw, het huilen voor de glimlach',
      ],
    },
    layout: {
      title: 'Ideeën voor pagina’s en lay-out',
      body: 'Het verschil tussen een boek dat ontworpen oogt en een boek dat gedumpt oogt zit vooral in een paar regels.',
      items: [
        {
          title: 'Eén grote foto, dan een raster',
          body: 'De beste foto van de maand groot links, vijf of zes kleinere rechts. Zo heeft elke dubbele pagina een plek waar je eerst kijkt.',
        },
        {
          title: 'Een hele pagina voor de foto die het verdient',
          body: 'Niet elke maand heeft een raster nodig. Eén prachtig portret alleen op een pagina zegt meer dan zes goede.',
        },
        {
          title: 'Houd gezichten uit de vouw',
          body: 'De meeste fotoboeken zijn aan de rug gelijmd, dus het midden van een dubbele pagina buigt weg. Houd foto’s op hun eigen pagina en kruis de vouw alleen met opzet.',
        },
        {
          title: 'Meng close-ups en totaalshots',
          body: 'Een close-up naast een close-up oogt eentonig. Zet er een totaalshot van de kamer of het park naast.',
        },
        {
          title: 'Laat wat papier vrij',
          body: 'Witruimte zorgt dat een pagina ontworpen oogt in plaats van volgepropt. Een korte regel in een open plek doet meer dan nog een foto.',
        },
        {
          title: 'Kies vierkant',
          body: 'Telefoonfoto’s zijn staand en liggend. Op een vierkante pagina passen ze allebei zonder dat een ervan slecht wordt bijgesneden.',
        },
      ],
      figcaption: 'Eén grote foto, een raster ernaast, niets over de vouw.',
    },
    captions: {
      title: 'Ideeën voor onderschriften in een baby-fotoboek',
      body: 'Houd onderschriften kort: één regel per pagina. Data, plaatsen, koosnaampjes en de details die je vergeet (het liedje dat het huilen stopte, het eerste woord) zijn beter dan lange alinea’s. Een paar om te lenen:',
      items: [
        'Droom groot, kleintje',
        'Ons zonnetje',
        'Wat ben je schattig',
        'Kleine handjes, grote plannen',
        'Thuis is waar jij bent',
        'De maand waarin je je voetjes ontdekte',
        'Tien vingertjes, tien teentjes, helemaal hart',
        'Hallo, wereld',
        'Je wordt zo geliefd',
        'En toen was je één',
      ],
    },
    choosing: {
      title: 'Hoeveel foto’s, en welke',
      tips: [
        {
          lead: 'Mik op 10 tot 15 per maand.',
          body: 'Een fotoboek van het eerste jaar van 30 pagina’s biedt comfortabel plaats aan zo’n 150 foto’s. In een echt jaar dat we bekeken, bleven 225 van de 5.450 foto’s over.',
        },
        { lead: 'Houd er één per moment.', body: 'Telefoons maken series; het boek heeft het scherpste beeld nodig, niet alle twaalf.' },
        {
          lead: 'Pas op voor kopieën uit chats.',
          body: 'Een foto uit een berichten-app is een kleinere kopie. Klein drukt hij goed af, maar niet over een hele pagina of op de kaft. Heb je het origineel, gebruik dat.',
        },
      ],
      product: `Dit deel, het kiezen, is waar de meeste babyboeken blijven steken. Het is het deel dat ${a('home', 'BabyBookAI')} voor je doet: de app leest je galerij op je telefoon, houdt de scherpste foto van elk moment, sorteert het jaar maand voor maand en maakt het boek op, zodat jij alleen hoeft te bladeren. Bekijk hoe het ${a('firstYear', 'fotoboek van het eerste jaar')} wordt gemaakt.`,
    },
    gifts: {
      title: 'Cadeau-ideeën',
      items: [
        { lead: 'Voor de eerste verjaardag.', body: 'Sluit het boek af in de week van het feestje en geef het rond aan tafel.' },
        {
          lead: 'Voor opa en oma.',
          body: `Het cadeau dat ze op de salontafel houden. Een ${a('girl', 'fotoalbum babymeisje')} in roze of een ${a('boy', 'fotoalbum babyjongen')} in blauw, met de naam van de baby op de kaft.`,
        },
      ],
    },
    box: {
      title: 'Weinig vrije avonden?',
      body: 'BabyBookAI maakt van de foto’s die al op je telefoon staan in een paar minuten een hardcover boek van het eerste jaar.',
    },
    faqTitle: 'Vragen over het baby-fotoboek',
    faq: [
      {
        question: 'Hoeveel foto’s moet een baby-fotoboek hebben?',
        answer:
          'Voor een eerste jaar werken 10 tot 15 foto’s per maand goed: 120 tot 180 in totaal. Een boek van 30 pagina’s bevat er zo’n 150 zonder vol te voelen, met ruimte voor één grote foto op de meeste dubbele pagina’s.',
      },
      {
        question: 'Wat hoort er in het fotoboek van het eerste jaar van een baby?',
        answer:
          'De geboortedag, een dubbele pagina voor elke maand op volgorde, de eerste keren die je op de foto zette (lach, bad, eten, stapjes), de mensen die hem vasthielden en een eerste verjaardag om het jaar af te sluiten. Korte onderschriften met data helpen meer dan lange teksten.',
      },
      {
        question: 'Wat schrijf je in een baby-fotoboek?',
        answer:
          'Korte regels: een datum, een plaats, een koosnaampje, een gewicht, of datgene wat je over vijf jaar vergeten bent (het liedje dat het huilen stopte, zijn eerste woord). Eén regel per pagina is genoeg.',
      },
      {
        question: 'Kunnen telefoonfoto’s in een fotoboek worden gedrukt?',
        answer:
          'Ja. Foto’s rechtstreeks uit de telefooncamera drukken scherp af, zelfs over een hele pagina. Kopieën uit chat-apps zijn kleiner; ze drukken goed af op een klein plekje op de pagina, niet over een hele pagina of op de kaft.',
      },
    ],
  },

  about: {
    title: 'Over BabyBookAI | Het baby-fotoboek dat zichzelf maakt',
    description:
      'BabyBookAI is een app van Photo-to-Text die de foto’s op je telefoon omzet in een gedrukt fotoboek van het eerste jaar van je baby. Wie we zijn en hoe we het maken.',
    crumb: 'Over ons',
    eyebrow: 'Over ons',
    h1: 'Een baby-fotoboek voor ouders die geen tijd hebben om er een te maken',
    paragraphs: [
      'In het eerste jaar van een baby maken ouders duizenden foto’s. Heel weinig daarvan belandt in een boek, omdat er een maken uren kiezen, sorteren en plaatsen betekent, met een baby in huis.',
      `${SITE.name} doet dat werk voor je. De app leest de foto’s op je telefoon, houdt het beste van elk moment, sorteert ze maand voor maand en maakt een hardcover boek op. Jij bladert erdoorheen, verandert wat je wilt, en het wordt gedrukt en bij je thuis bezorgd.`,
    ],
    beliefsTitle: 'Waar we aan vasthouden',
    beliefs: [
      {
        title: 'De selectie is het product',
        body: 'Iedereen kan 200 foto’s printen. De waarde zit in het kiezen van de beste 150 uit duizenden en ze zo opmaken dat het boek gecomponeerd oogt, niet gegenereerd.',
      },
      {
        title: 'Je foto’s blijven op je telefoon',
        body: 'De foto’s worden op je telefoon gekozen. Om ze te kiezen wordt niets geüpload; alleen het afgewerkte boek wordt, als je het bestelt, verstuurd om gedrukt te worden.',
      },
      {
        title: 'Geen huiswerk',
        body: 'Geen wekelijkse herinneringen, geen dagboek, geen abonnement. De foto’s heb je al gemaakt; het boek wordt ervan gemaakt, één keer, wanneer jij wilt.',
      },
      {
        title: 'Een boek gemaakt om lang mee te gaan',
        body: 'Een vierkant hardcover boek van {size} op zijdemat papier van 170 g, op bestelling gedrukt door onze drukpartner en bij je thuis bezorgd.',
      },
    ],
    who: {
      title: `Een product van ${PUBLISHER.name}`,
      body: `${SITE.name} wordt gemaakt door <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, een klein bedrijf dat persoonlijke cadeaus maakt van foto’s. Het logo staat op de achterkant van elk boek. Vragen, ideeën of een boek dat niet goed is uitgevallen: schrijf naar <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Bekijk het ${a('babyPhotoBook', 'baby-fotoboek')}, lees de ${a('privacy', 'privacyverklaring')} of krijg hulp op de ${a('support', 'hulppagina')}.`,
  },

  support: {
    title: 'BabyBookAI hulp en vragen | Hulp bij je baby-fotoboek',
    description:
      'Hulp bij de BabyBookAI-app en je bestelling: foto’s vinden, WhatsApp-foto’s, je boek bewaren, prijs en verzending, en hoe je ons bereikt.',
    crumb: 'Hulp en vragen',
    eyebrow: 'Hulp',
    h1: 'Hoe kunnen we helpen?',
    lead: 'De meeste antwoorden staan hieronder. Voor al het andere, over de app of een bestelling, schrijf je ons en antwoordt een mens.',
    emailLabel: 'E-mail',
    emailNote: 'Gaat het over een bestelling? Schrijf vanaf het e-mailadres waarmee je bestelde, zodat we hem kunnen vinden.',
    appTitle: 'De app en je bestelling',
    bookTitle: 'Het boek en hoe het wordt gemaakt',
    more: `Meer: de ${a('privacy', 'privacyverklaring')}, de ${a('terms', 'voorwaarden')} en ${a('about', 'wie we zijn')}.`,
    faq: [
      {
        question: 'De app vond weinig foto’s. Waarom?',
        answer:
          'BabyBookAI kan alleen de foto’s zien die het mag zien. Als je telefoon het vraagt, kies dan «Alles toestaan»: met «Foto’s selecteren» ziet de app alleen de foto’s die je koos. Op Android leest ze de foto’s die op de telefoon staan, dus foto’s die alleen online in Google Foto’s staan, worden niet gevonden.',
      },
      {
        question: 'Waar zijn mijn WhatsApp-foto’s?',
        answer:
          'Foto’s die je uit WhatsApp hebt opgeslagen staan in de galerij van je telefoon, dus de scan vindt ze. Ze vullen maanden met weinig camerafoto’s aan, en als dezelfde foto twee keer op je telefoon staat, wordt de scherpere, grotere kopie bewaard.',
      },
      {
        question: 'Wordt mijn boek bewaard als ik de app sluit?',
        answer:
          'Ja. Je boek wordt tijdens het werken op je telefoon bewaard, met je foto’s, teksten en kleuren, en opent waar je was gebleven. Een nieuw boek beginnen vervangt het.',
      },
      {
        question: 'Wat kosten het boek en de verzending?',
        answer: `{price} voor ${BOOK.pagesMin} pagina’s, verzending inbegrepen. Extra pagina’s, tot ${BOOK.pagesMax}, kosten extra. De eindprijs wordt voordat je betaalt in jouw valuta getoond.`,
      },
      {
        question: 'In welke landen bezorgen jullie?',
        answer:
          'De Verenigde Staten, het Verenigd Koninkrijk, Canada, Australië, Ierland, Duitsland, Oostenrijk, Frankrijk, België, Spanje, Italië, Nederland, Portugal, Japan, Zuid-Korea en China.',
      },
      {
        question: 'Hoe betaal ik?',
        answer: 'Met een kaart, via Stripe. We zien je kaartgegevens nooit.',
      },
      {
        question: 'Er is iets mis met mijn bestelling. Wat nu?',
        answer: `Schrijf naar ${EMAIL} vanaf het e-mailadres waarmee je bestelde, en voeg een foto toe als het boek beschadigd aankwam.`,
      },
      {
        question: 'Is er een iPhone-app?',
        answer: 'Nog niet. BabyBookAI staat op Google Play voor Android, en de iPhone-app komt binnenkort.',
      },
      {
        question: 'Hoe verwijder ik mijn gegevens?',
        answer: `Je foto’s verlaten je telefoon nooit om het boek te maken, en als je de app verwijdert, verdwijnt ook het bewaarde boek. Voor een geplaatste bestelling schrijf je naar ${EMAIL} en wij verwijderen wat we hebben en wat we volgens de wet niet hoeven te bewaren. De privacyverklaring geeft de details.`,
      },
    ],
  },

  privacy: {
    title: 'Privacyverklaring | BabyBookAI',
    description:
      'Wat BabyBookAI doet met je foto’s en je bestelgegevens: je bibliotheek wordt op je telefoon gelezen, en alleen het afgewerkte boek wordt verstuurd om gedrukt te worden.',
    crumb: 'Privacy',
    eyebrow: 'Privacy',
    h1: 'De foto’s van je baby blijven op je telefoon',
    updatedLabel: 'Privacyverklaring · Laatst bijgewerkt:',
    updated: '9 oktober 2026',
    intro: `BabyBookAI («wij») is een app die van de foto’s op je telefoon een gedrukt fotoboek van het eerste jaar van je baby maakt. Het is een product van Photo-to-Text. Contact: ${EMAIL}.`,
    shortTitle: 'In het kort',
    short: [
      'Je fotobibliotheek wordt <strong>op je telefoon</strong> gelezen. Wij zien hem nooit.',
      'Als je een boek bestelt, wordt het bestand van het afgewerkte boek (de gekozen foto’s, je teksten, de naam van je baby) naar ons en onze drukker gestuurd.',
      'Om het te bezorgen hebben we je naam, e-mailadres en adres nodig. De betaling wordt door Stripe afgehandeld; wij zien je kaart nooit.',
      'De app heeft geen reclame, geen analyse, geen tracking en geen account.',
    ],
    phoneTitle: 'Wat de app op je telefoon doet',
    phone: [
      'Om de foto’s te kiezen leest de app de foto’s in je bibliotheek uit de maanden die je opgeeft: hun data, afmetingen, scherpte en dubbelen. Dit gebeurt alleen op je telefoon, en er wordt niets over je bibliotheek naar waar dan ook verstuurd.',
      '<strong>Je baby herkennen (optioneel).</strong> Als je vóór de scan de herkenningsschakelaar aanzet, leert de app het gezicht van je baby kennen uit foto’s waarop je tikt, op je telefoon, om de kinderen van anderen uit het boek te houden. De gezichtsgegevens bestaan alleen in het geheugen van de telefoon tijdens de scan en worden gewist als de scan eindigt; ze worden nooit opgeslagen of verstuurd. De schakelaar staat standaard uit en wordt niet aangeboden in Illinois, Texas en Washington.',
      'Het boek waaraan je werkt wordt op je telefoon bewaard zodat je erop kunt terugkomen. Het bevat welke foto’s erin staan, je teksten en waar gezichten in die foto’s zitten (om ze te kaderen), nooit gezichtsgegevens. Een nieuw boek beginnen wist het, net als de app verwijderen.',
    ],
    receiveTitle: 'Wat we ontvangen, en waarom',
    table: {
      head: ['Wat', 'Waarom', 'Gedeeld met'],
      rows: [
        ['Het boekbestand: de foto’s in je boek, je teksten, de naam en het geboortejaar van je baby', 'Om je boek te drukken', 'Gelato (onze drukker)'],
        ['Aantal pagina’s, valuta', 'Om de bestelling te prijzen', '—'],
        ['Je naam, e-mail, bezorgadres, telefoon (optioneel)', 'Om het boek te bezorgen en de bon te sturen', 'Gelato (bezorging), Stripe (bon)'],
        ['Betaalgegevens', 'Om de betaling te innen', 'Alleen Stripe; wij ontvangen ze nooit'],
      ],
    },
    receiveNote:
      'We gebruiken deze gegevens alleen om je bestelling te maken, te verzenden en te ondersteunen. We verkopen ze niet, gebruiken ze niet voor reclame en gebruiken je foto’s voor niets anders dan het drukken van je boek.',
    othersTitle: 'Wie ze nog meer verwerkt',
    others: [
      '<strong>Stripe</strong> verwerkt betalingen (<a class="lnk" href="https://stripe.com/nl/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> drukt en verzendt het boek (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'Onze bestelserver, waar het boekbestand wacht tot het de drukker bereikt.',
    ],
    keepTitle: 'Hoe lang we ze bewaren',
    keep: [
      'Bestellingen die nooit worden betaald, worden na 7 dagen gewist, samen met hun boekbestand.',
      'Van betaalde bestellingen bewaren we de bestelgegevens en het boekbestand zolang we nodig hebben om de bestelling te bezorgen, je te helpen en aan fiscale en boekhoudkundige regels te voldoen. Je kunt ons op elk moment vragen ze te wissen (zie hieronder).',
    ],
    rightsTitle: 'Je rechten, en hoe je je gegevens wist',
    rights: [
      `Je kunt ons vragen om een kopie van je gegevens, om ze te corrigeren of te wissen door te schrijven naar ${EMAIL} vanaf het e-mailadres waarmee je bestelde, onder vermelding van BabyBookAI. We antwoorden binnen 30 dagen. Om je gegevens te wissen, schrijf je «wis mijn gegevens»: dan wissen we je bestelgegevens en je boekbestand, behalve wat de wet ons verplicht te bewaren, en vragen we Gelato en Stripe de hunne te wissen.`,
      'Woon je in de Europese Unie of het Verenigd Koninkrijk, dan kun je ook een klacht indienen bij je gegevensbeschermingsautoriteit (in Nederland de Autoriteit Persoonsgegevens). We verwerken je bestelgegevens omdat je ons vroeg je boek te maken en te verzenden en, als je het gebruikt, gezichtsherkenning alleen met je toestemming, die je kunt intrekken door de schakelaar uit te zetten.',
    ],
    websiteTitle: 'Deze website',
    websiteLanguage:
      'babybookai.com leest het land waaruit je bezoek komt, zoals onze hostingpartij (Cloudflare) dat meldt, om prijzen in jouw valuta en, bij een eerste bezoek, de pagina in jouw taal te tonen. Het wordt niet opgeslagen. Eén cookie, «lang», onthoudt de taal waarin je de site het laatst las, zodat de startpagina de volgende keer daarin opent.',
    websiteAnalytics:
      'babybookai.com gebruikt Google Analytics om bezoeken te tellen en te zien welke pagina’s worden gelezen, met cookies van Google. Het ontvangt je IP-adres, browser en de pagina’s die je bezoekt, nooit iets uit de app. Je kunt het blokkeren met de instellingen van je browser of de opt-outextensie van Google (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). Het beleid van Google: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'babybookai.com gebruikt geen analyse- of reclamescripts.',
    childrenTitle: 'Kinderen',
    children:
      'BabyBookAI is voor ouders. De app is niet gericht op kinderen en we verzamelen niet bewust gegevens van kinderen. De foto’s van je baby worden alleen gebruikt om je boek te drukken.',
    securityTitle: 'Beveiliging',
    security:
      'Alles wat de app verstuurt, reist versleuteld (HTTPS). Boekbestanden staan in een privémap op onze server en bereiken de drukker alleen via een ondertekende, verlopende link.',
    changesTitle: 'Wijzigingen',
    changes: 'Wijzigingen plaatsen we hier en we werken de datum hierboven bij.',
  },

  terms: {
    title: 'Gebruiks- en verkoopvoorwaarden | BabyBookAI',
    description:
      'De voorwaarden voor het gebruik van de BabyBookAI-app en het bestellen van een gedrukt baby-fotoboek: je foto’s, bestellingen en betaling, druk en bezorging, en beschadigde boeken.',
    crumb: 'Voorwaarden',
    eyebrow: 'Voorwaarden',
    h1: 'Gebruiks- en verkoopvoorwaarden',
    updatedLabel: 'Laatst bijgewerkt:',
    updated: '9 oktober 2026',
    intro: `Deze voorwaarden gelden voor de app ${SITE.name} en voor de gedrukte boeken die ermee worden besteld. ${SITE.name} is een product van ${PUBLISHER.name} («wij»). Door de app te gebruiken of een boek te bestellen ga je ermee akkoord. Vragen: ${EMAIL}.`,
    sections: [
      {
        title: 'De app',
        paragraphs: [
          'De app is gratis te downloaden en te gebruiken. Een boek maken en erdoorheen bladeren kost niets; je betaalt alleen als je een gedrukt boek bestelt. Je mag de app gebruiken voor eigen, persoonlijk, niet-commercieel gebruik. We kunnen functies van de app in de loop van de tijd verbeteren, veranderen of stopzetten.',
        ],
      },
      {
        title: 'Je foto’s en teksten',
        list: [
          'Je foto’s en je teksten blijven van jou. We maken er geen aanspraak op.',
          `Als je bestelt, geef je ons en onze drukker toestemming het boekbestand alleen te gebruiken om die bestelling te drukken, te verzenden en te ondersteunen, zoals de ${a('privacy', 'privacyverklaring')} beschrijft.`,
          'Je bevestigt dat je het recht hebt de foto’s en teksten in je boek te laten drukken en dat niets erin onrechtmatig is. We mogen weigeren een boek te drukken dat dat wel is.',
        ],
      },
      {
        title: 'Bestellingen en betaling',
        list: [
          'Je moet 18 jaar of ouder zijn om een bestelling te plaatsen.',
          `De app toont de volledige prijs voordat je betaalt, in de valuta van je land, met verzending inbegrepen. Een boek van ${BOOK.pagesMin} pagina’s kost {price}; extra pagina’s, tot ${BOOK.pagesMax}, kosten meer en worden in de app geprijsd.`,
          'Betaling gebeurt met een kaart via Stripe. We zien je kaartgegevens nooit.',
          'We controleren elke bestelling voordat ze naar de drukker gaat. Als we een bestelling niet kunnen uitvoeren, annuleren we haar en betalen we je het volledige bedrag terug.',
          'Bekijk voordat je betaalt het hele boek: foto’s, namen, data en spelling. Elk boek wordt precies zo gedrukt als jij het goedkeurt.',
        ],
      },
      {
        title: 'Druk en bezorging',
        paragraphs: [
          'Boeken worden op bestelling gedrukt door onze drukpartner en verzonden naar het adres dat je opgeeft, in de landen die de app toont. Getoonde levertijden zijn schattingen. Controleer het adres zorgvuldig: we kunnen een boek niet omleiden zodra het is verzonden.',
        ],
      },
      {
        title: 'Beschadigde, verkeerd gedrukte of verloren boeken',
        paragraphs: [
          `Elk boek wordt voor jou gemaakt, dus we kunnen het niet terugnemen als je van gedachten verandert. Als je boek beschadigd aankomt, een drukfout heeft of niet aankomt, schrijf dan binnen 30 dagen na bezorging (of na de verwachte bezorgdatum) naar ${EMAIL} met het e-mailadres van je bestelling en, als je kunt, een foto. We drukken het boek opnieuw of betalen je terug. Niets in deze voorwaarden beperkt de rechten die je hebt onder het consumentenrecht van waar je woont.`,
        ],
      },
      {
        title: 'Aansprakelijkheid',
        paragraphs: [
          'We doen ons best om de app en de boeken goed te maken, maar de app wordt geleverd zoals ze is. Voor zover de wet het toestaat, is onze aansprakelijkheid voor een bestelling beperkt tot wat je ervoor betaalde. We zijn niet verantwoordelijk voor foto’s die je op je telefoon kwijtraakt: de app leest je foto’s maar verwijdert ze nooit.',
        ],
      },
      {
        title: 'Wijzigingen',
        paragraphs: [
          'We kunnen deze voorwaarden bijwerken. Wijzigingen worden hier met een nieuwe datum geplaatst en gelden voor bestellingen na die datum.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Pagina niet gevonden | BabyBookAI',
    description: 'Deze pagina bestaat niet. Vind vanaf hier het baby-fotoboek van BabyBookAI.',
    h1: 'Deze pagina is verdwaald',
    body: 'De link is misschien oud. Dit zijn goede plekken om te beginnen:',
  },
};
