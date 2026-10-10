import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Deutsch, mit du, wie die App (librofotos lib/l10n/app_de.arb). Gesucht
 * wird „Fotobuch“ und „Fotobuch erstellen“ (Keyword Tool, Deutschland,
 * Okt. 2026): Das Wort steht in Titeln und H1 vorn.
 */
const a = linker('de');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const de: Copy = {
  ui: {
    skip: 'Zum Inhalt springen',
    homeAria: `${SITE.name}, Startseite`,
    mainNav: 'Hauptmenü',
    nav: { babyPhotoBook: 'Baby-Fotobuch', firstYear: 'Erstes Lebensjahr' },
    getApp: 'App laden',
    language: 'Sprache',
    breadcrumb: 'Brotkrümelnavigation',
    home: 'Startseite',
    footer: {
      tagline: 'Das erste Jahr deines Babys, als Buch für dich gemacht.',
      productOf: 'Ein Produkt von',
      book: 'Das Buch',
      company: 'Unternehmen',
      links: {
        babyPhotoBook: 'Baby-Fotobuch',
        firstYear: 'Fotobuch erstes Lebensjahr',
        boy: 'Fotoalbum für Jungen',
        girl: 'Fotoalbum für Mädchen',
        ideas: 'Ideen fürs Baby-Fotobuch',
        about: 'Über uns',
        support: 'Hilfe & FAQ',
        privacy: 'Datenschutz',
        terms: 'AGB',
      },
      rights: 'Alle Rechte vorbehalten.',
    },
    closing: {
      title: 'In Minuten gemacht. Für immer behalten.',
      body: 'Lade BabyBookAI herunter, gib den Namen deines Babys und die Daten ein und sieh sein erstes Jahr gestaltet, bevor dein Kaffee kalt wird.',
    },
    free: 'Kostenlos herunterladen. Du bezahlst nur das gedruckte Buch.',
    badges: {
      aria: `${SITE.name} herunterladen`,
      appStore: 'Laden im App Store',
      googlePlay: 'Jetzt bei Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: bald verfügbar',
    },
    qr: {
      aria: `QR-Code zum Herunterladen von ${SITE.name}`,
      title: 'Am Computer?',
      body: 'Scanne ihn mit der Handykamera, um die App zu laden.',
    },
    how: {
      eyebrow: "So geht's",
      title: 'Drei Schritte, und du machst nur den leichten',
      steps: [
        {
          title: 'Name und Daten eingeben',
          body: 'Der Name deines Babys kommt aufs Cover. Die meisten Bücher beginnen am Tag der Geburt und enden am ersten Geburtstag.',
        },
        {
          title: 'Die App liest deine Galerie',
          body: 'Auf deinem Handy findet sie die Fotos des Jahres, sortiert verwackelte und fast doppelte aus, behält das beste von jedem Moment und ordnet sie Monat für Monat.',
        },
        {
          title: 'Durchblättern, tauschen, bestellen',
          body: 'Das Buch wird für dich gestaltet. Tausch jedes Foto, das dir nicht gefällt, ändere die Texte, wenn du magst, und das Hardcover wird gedruckt und zu dir nach Hause geschickt.',
        },
      ],
    },
    tones: {
      pink: 'Zartrosa',
      blue: 'Zartblau',
      neutral: 'Klassisch Creme',
      caption: 'Die drei Papiertöne. Die ganze Seite nimmt den Ton an.',
    },
    stork: 'Ein Storch mit einem Bündel',
    spreadMonth: 'Erster Monat',
    defaultDescription:
      'BabyBookAI macht aus den Fotos auf deinem Handy ein gedrucktes Hardcover-Fotobuch vom ersten Lebensjahr deines Babys. Die App wählt, sortiert und gestaltet die Fotos für dich.',
    ogImageAlt: 'BabyBookAI: ein gedrucktes Fotobuch vom ersten Lebensjahr eines Babys',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Eine BabyBookAI-Doppelseite, „Erster Monat“: sieben Fotos eines Babys mit Familie und Großeltern',
    screens: {
      setup: 'Start-Bildschirm von BabyBookAI: ein Name und ein Geburtstag, dann die Länge des Buches und der Preis',
      selection: 'Ergebnis-Bildschirm von BabyBookAI: 225 Fotos behalten, nach Monaten',
      order: 'Bestell-Bildschirm von BabyBookAI: 30 Seiten, Hardcover, Versand inklusive',
    },
    translationNote:
      'Dies ist eine Übersetzung des englischen Textes. Weichen beide voneinander ab, gilt die englische Fassung.',
    schema: {
      appFeatures: [
        'Wählt die Fotos auf dem Handy aus: Nur das fertige Buch wird zum Druck geschickt',
        'Behält das schärfste Foto jedes Moments und sortiert Duplikate und Serienbilder aus',
        'Ordnet die Fotos Monat für Monat nach ihrem Aufnahmedatum',
        `Gestaltet ein quadratisches Hardcover-Buch mit ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten`,
        'Schickt das Buch in den Druck und liefert es aus',
      ],
      bookName: 'BabyBookAI Baby-Fotobuch',
      bookDescription: `Ein quadratisches Hardcover-Fotobuch, 28 × 28 cm, vom ersten Lebensjahr eines Babys, ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten auf 170-g-Seidenpapier, gestaltet von der App BabyBookAI aus den Fotos auf deinem Handy.`,
      pages: 'Seiten',
      binding: 'Bindung',
      bindingValue: 'Hardcover',
    },
  },

  home: {
    title: 'BabyBookAI — Das Baby-Fotobuch, das sich selbst macht',
    description:
      'Das erste Jahr deines Babys als gedrucktes Hardcover-Fotobuch, gemacht aus den Fotos, die schon auf deinem Handy sind. BabyBookAI wählt, sortiert und gestaltet sie für dich.',
    eyebrow: 'Fotobuch vom ersten Babyjahr',
    h1: 'Das Babybuch, das sich selbst macht',
    lead: 'Die App liest deine Handy-Galerie, wählt die besten Fotos jedes Monats und gestaltet ein Hardcover-Buch. Du blätterst durch, tauschst aus, was dir nicht gefällt, und es ist unterwegs.',
    homework: {
      title: 'Jedes Babybuch macht Arbeit. Außer diesem.',
      body: 'Die Fotos hast du schon gemacht: Hunderte, jeden Monat. Ein Buch daraus zu machen, dafür hat mit einem Baby im Haus niemand Zeit.',
      yourPart: 'Dein Teil',
      ways: [
        { name: 'Ein Babybuch zum Ausfüllen', effort: 'Drucken, ausschneiden, kleben und schreiben, jeden Monat', verdict: 'Die meisten hören um den dritten Monat auf.' },
        { name: 'Eine wöchentliche Babybuch-App', effort: 'Ein paar Minuten pro Woche, 52 Wochen lang', verdict: 'Die Arbeit bleibt, nur in 52 Stücken.' },
        { name: 'BabyBookAI', effort: 'Nichts, bis das Jahr vorbei ist', verdict: 'Dann einmal durchblättern, fertig.' },
      ],
    },
    book: {
      eyebrow: 'Das Buch',
      title: 'Ein echtes Hardcover, gemacht zum Aufheben',
      body: 'Der Name deines Babys und sein schönstes Foto auf dem Cover. Der Tag der Geburt auf der ersten Seite. Dann eine Doppelseite für jeden Monat, in der Reihenfolge, in der alles geschah, jede für ihre Fotos gestaltet, bis zum ersten Geburtstag.',
      specs: [
        { label: 'Format', value: '{size}, quadratisch' },
        { label: 'Einband', value: 'Hardcover, matt' },
        { label: 'Seiten', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Papier', value: '170 g Seidenmatt' },
        { label: 'Gestaltung', value: 'Eine Doppelseite pro Monat' },
        { label: 'Versand in', value: '16 Länder' },
      ],
      more: 'Das Baby-Fotobuch im Detail',
    },
    privacy: {
      title: 'Die Fotos deines Babys bleiben auf deinem Handy',
      body: 'BabyBookAI wählt die Fotos auf deinem Handy aus, nicht auf einem Server. Nichts wird hochgeladen, während die App deine Galerie liest oder du das Buch durchblätterst. Erst wenn du bestellst, gehen die fertigen Seiten an die Druckerei. Kein Abo und keine Rechte an den Bildern deines Kindes.',
    },
    birthday: {
      title: 'Fertig zum ersten Geburtstag',
      body: 'Das Jahr endet, das Buch ist fertig. Bestell es in der Woche der Feier, oder mach gleich eins für die Großeltern mit. Ihr liebstes Geschenk ist das, in dem das Baby steckt.',
      more: "So funktioniert das Fotobuch vom ersten Lebensjahr",
    },
    faqTitle: 'Was Eltern fragen',
    faq: [
      {
        question: 'Wie wählt BabyBookAI die Fotos aus?',
        answer:
          'Die App liest das Aufnahmedatum jedes Fotos und behält nur die aus dem ersten Lebensjahr deines Babys. Dann sortiert sie unscharfe Bilder aus, behält das schärfste Bild jeder Serie und erkennt dasselbe Foto, wenn es doppelt gespeichert ist (eine WhatsApp-Kopie und das Original zum Beispiel), um die beste Kopie zu behalten. Fotos, die du als Favoriten markiert oder am häufigsten geteilt hast, bekommen die besten Plätze: das Cover und die ganzen Seiten.',
      },
      {
        question: 'Werden meine Fotos irgendwo hochgeladen?',
        answer:
          'Nicht, um das Buch zu machen. Die ganze Auswahl passiert auf deinem Handy. Erst wenn du bestellst, gehen die Seiten des fertigen Buches an die Druckerei.',
      },
      {
        question: 'Kann ich die ausgewählten Fotos ändern?',
        answer:
          'Ja. Du blätterst das Buch auf dem Handy durch und tauschst jedes Foto aus, das dir nicht gefällt. Du kannst auch die Texte jeder Seite bearbeiten und eine eigene kurze Notiz hinzufügen.',
      },
      {
        question: 'Wie sieht das Buch aus?',
        answer: `Ein quadratisches Hardcover-Buch, {size}, mit mattem Einband und ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten auf 170-g-Seidenpapier. Der Name deines Babys und sein schönstes Foto kommen aufs Cover, das Geburtsdatum eröffnet das Buch, und jeder Monat bekommt seine eigene Doppelseite.`,
      },
      {
        question: 'Und wenn manche Fotos in WhatsApp oder iCloud sind?',
        answer:
          'Aus WhatsApp gespeicherte Fotos liegen in deiner Galerie, also werden sie wie alle anderen gefunden. Auf dem iPhone kann BabyBookAI für Monate mit wenigen Fotos auf dem Handy auch deine iCloud-Fotos nutzen. Auf Android liest die App die auf dem Handy gespeicherten Fotos.',
      },
      {
        question: 'Geht das nur für die ersten zwölf Monate?',
        answer:
          'Die meisten Eltern machen das erste Jahr, von der Geburt bis zum ersten Geburtstag. Du wählst den Starttag und die Dauer: 6, 12 oder 18 Monate, mit einer Doppelseite pro Monat.',
      },
      {
        question: 'Was kostet es?',
        answer: `Die App ist kostenlos, ebenso das Erstellen und Durchblättern des Buches. Du bezahlst erst, wenn du das gedruckte Hardcover bestellst: {price} für ${BOOK.pagesMin} Seiten, Versand inklusive, zusätzliche Seiten bis ${BOOK.pagesMax} gegen Aufpreis. Den Endpreis siehst du vor dem Bezahlen.`,
      },
      {
        question: 'Gibt es die App für iPhone und Android?',
        answer:
          'BabyBookAI gibt es jetzt kostenlos bei Google Play, für Android. Die iPhone-App kommt bald. Die Bücher werden in 16 Länder in Nordamerika, Europa und Asien geliefert.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Baby-Fotobuch aus den Fotos auf deinem Handy | BabyBookAI',
    description: `Ein Hardcover-Baby-Fotobuch, für dich gemacht: BabyBookAI wählt die besten Fotos auf deinem Handy, ordnet sie nach Monaten und gestaltet jede Seite. {size}, ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten.`,
    crumb: 'Baby-Fotobuch',
    eyebrow: 'Baby-Fotobuch',
    h1: 'Baby-Fotobuch, erstellt aus den Fotos auf deinem Handy',
    lead: 'BabyBookAI findet die besten Fotos deines Babys auf deinem Handy, ordnet sie Monat für Monat und gestaltet ein quadratisches Hardcover-Buch. Kein Hochladen, kein Ziehen von Fotos in Vorlagen. Du blätterst es nur durch.',
    features: {
      title: 'Alles, was ein Babyalbum sein sollte. Ohne die Arbeit.',
      items: [
        {
          title: 'Die App wählt die Fotos',
          body: 'Aus Hunderten Aufnahmen pro Monat behält sie die schärfste jedes Moments und lässt verwackelte, Serienbilder und Duplikate weg.',
        },
        {
          title: 'Sie ordnet sie nach Monaten',
          body: 'Jedes Foto kommt dorthin, wo es hingehört, nach seinem Aufnahmedatum, damit das Buch das Jahr in der richtigen Reihenfolge erzählt.',
        },
        {
          title: 'Sie gestaltet jede Seite',
          body: 'Jede Doppelseite ist für ihre Fotos gemacht: ein großes Bild und ein Raster, eine ganze Seite oder ein Foto über beide Seiten.',
        },
        {
          title: 'Sie druckt sie scharf',
          body: 'Ein Foto kommt nur dorthin, wo es genug Pixel für einen guten Druck hat. Eine kleine Kopie aus einem Chat bekommt einen kleinen Platz, nie das Cover.',
        },
      ],
    },
    howTitle: 'Baby-Fotobuch erstellen in drei Schritten',
    inside: {
      eyebrow: 'Im Buch',
      title: 'Vom Tag der Geburt bis zum ersten Geburtstag',
      tour: [
        { label: 'Das Cover', body: 'Der Name deines Babys und das schönste Foto des Jahres, ausgewählt aus denen, die du am meisten mochtest und geteilt hast.' },
        { label: 'Seite eins', body: 'Der Tag der Geburt, mit einer kleinen Federzeichnung eines Storchs mit seinem Bündel.' },
        {
          label: 'Eine Doppelseite pro Monat',
          body: 'Jeder Monat in seiner Jahreszeit: sanfte Akzente und die leichtesten Muster, kleine Vögel, Sterne oder Wolken, nie lauter als die Fotos.',
        },
        { label: 'Die letzte Seite', body: 'Ein Kuchen zum ersten Geburtstag schließt das Jahr: und dann war es eins.' },
      ],
    },
    personal: {
      eyebrow: 'Personalisiert',
      title: 'Ein personalisiertes Babyalbum, ohne die Fummelei',
      body: 'Ein individuelles Fotobuch heißt meist: ein ganzer Abend im Editor. Hier sind die Fotos schon an ihrem Platz, also ist es mit ein paar Fingertipps deins.',
      items: [
        { title: 'Der Name auf dem Cover', body: 'Und die Daten, die du wählst: ab dem Tag der Geburt oder ab einem beliebigen Tag, für 6, 12 oder 18 Monate.' },
        { title: 'Drei Papiertöne', body: 'Klassisch Creme, Zartrosa oder Zartblau. Die ganze Seite nimmt den Ton an, nicht nur der Rand.' },
        {
          title: 'Texte zum Umschreiben',
          body: 'Jede Seite bringt kurze Zeilen mit wie „Träume groß, kleiner Schatz“. Lass sie, ändere sie oder schreib eine eigene Notiz, wo du willst.',
        },
      ],
      colors: `Auf der Suche nach Farben? Schau dir das ${a('girl', 'Fotoalbum für Mädchen')} und das ${a('boy', 'Fotoalbum für Jungen')} an.`,
    },
    specs: {
      title: 'Das Buch im Detail',
      items: [
        { label: 'Format', value: 'Quadratisches Hardcover-Fotobuch' },
        { label: 'Größe', value: '{size}' },
        { label: 'Seiten', value: `${BOOK.pagesMin} bis ${BOOK.pagesMax}, eine Doppelseite pro Monat` },
        { label: 'Papier', value: '170-g-Seidenpapier, farbig gedruckt' },
        { label: 'Einband', value: 'Hardcover mit matter Kaschierung' },
        { label: 'Druck', value: 'Auf Bestellung gedruckt, Versand in 16 Länder' },
      ],
    },
    gift: {
      title: 'Das Geschenk, nach dem Großeltern fragen',
      body: 'Ein Handy voller Fotos lässt sich schlecht am Tisch herumreichen. Ein Baby-Fotobuch schon. Es ist das Geschenk zum ersten Geburtstag, zum Mutter- oder Vatertag und das, das Großeltern auf dem Couchtisch liegen lassen.',
    },
    why: {
      title: 'Warum ein Baby-Fotobuch, wenn die Fotos schon auf dem Handy sind',
      paragraphs: [
        'Im ersten Lebensjahr machen Eltern Hunderte Fotos pro Monat. Sie liegen in der Galerie, zwischen Screenshots und Kassenbons, und rauschen beim Scrollen vorbei. Ein Fotoalbum fürs Baby ist das Gegenteil: ein paar der besten, in Reihenfolge, auf Papier, in einem Buch, das jeder in die Hand nehmen kann.',
        'Das Schwierige war nie das Drucken. Es sind die Stunden des Auswählens: welches der vierzig Badefotos, zu welchem Monat dieses Foto gehört, wie ein Hochformat neben ein Querformat passt. Daran bleiben die meisten Babyalben hängen, irgendwo um den dritten Monat.',
        `BabyBookAI übernimmt diesen Teil für dich, auf deinem Handy. Die App liest die Daten, behält das schärfste Foto jedes Moments, gibt jedem Monat seine Doppelseite und gestaltet ein Babyalbum, das gestaltet aussieht, nicht abgeladen. Dir bleibt der schöne Teil: das Durchblättern. Für das ganze erste Jahr, vom Krankenhaus bis zum Kuchen, schau dir das ${a('firstYear', 'Fotobuch vom ersten Lebensjahr')} an.`,
      ],
    },
    faqTitle: 'Fragen zum Baby-Fotobuch',
    faq: [
      {
        question: 'Wie groß ist das Baby-Fotobuch?',
        answer:
          'Es ist ein quadratisches Hardcover-Buch, {size}. Quadratisch ist das einzige Format, in das Hoch- und Querformat vom Handy passen, ohne dass eines schlecht beschnitten wird.',
      },
      {
        question: 'Wie viele Seiten hat es?',
        answer: `Zwischen ${BOOK.pagesMin} und ${BOOK.pagesMax}. BabyBookAI schlägt für ein erstes Jahr ${BOOK.pagesMin} bis ${BOOK.pagesSuggestedMax} vor, eine Doppelseite pro Monat, und du kannst gegen Aufpreis bis zu ${BOOK.pagesMax} Seiten hinzufügen.`,
      },
      {
        question: 'Werden meine Handyfotos scharf gedruckt?',
        answer:
          'Jedes Foto wird nur dort platziert, wo es genug Pixel für einen guten Druck hat. Eine kleine Kopie, etwa aus einem Chat gespeichert, kommt auf einen kleineren Platz der Seite, statt eine ganze Seite oder das Cover zu füllen.',
      },
      {
        question: 'Kann ich das Buch personalisieren?',
        answer:
          'Ja. Der Name deines Babys kommt aufs Cover, du wählst die Daten und kannst zartrosa, zartblaues oder cremefarbenes Papier nehmen. Jede Seite bringt kurze Zeilen mit, die du umschreiben kannst, und du kannst überall eine eigene Notiz hinzufügen.',
      },
      {
        question: 'Landet ein Gesicht in der Buchmitte?',
        answer:
          'Nein. Die Layouts halten Fotos aus dem Falz heraus. Das einzige Foto, das ihn kreuzt, ist eines, das bewusst über beide Seiten gesetzt wird, und dafür werden passende ausgewählt.',
      },
      {
        question: 'Wie lange dauert es?',
        answer:
          'Ein paar Minuten. Die meiste Zeit liest dein Handy die Galerie; dann blätterst du das Buch durch, tauschst aus, was du willst, und bestellst.',
      },
    ],
  },

  firstYear: {
    title: 'Fotobuch vom ersten Lebensjahr, ohne selbst zu basteln | BabyBookAI',
    description:
      'Ein Fotobuch vom ersten Lebensjahr deines Babys, Monat für Monat, aus den Fotos auf deinem Handy. Kein wöchentliches Hochladen: BabyBookAI wählt, ordnet und gestaltet das ganze Jahr.',
    crumb: 'Fotobuch erstes Lebensjahr',
    eyebrow: 'Fotobuch vom ersten Babyjahr',
    h1: 'Das Fotobuch vom ersten Lebensjahr, das du nicht basteln musst',
    lead: 'Zwölf Monate, eine Doppelseite für jeden, vom Krankenhaus bis zum Kuchen. BabyBookAI macht es aus den Fotos, die schon auf deinem Handy sind, also musst du das ganze Jahr über nichts nachhalten.',
    months: {
      eyebrow: 'Monat für Monat',
      title: 'Ein Baby-Fotobuch Monat für Monat, ohne monatliches Fotoshooting',
      body: 'Keine Meilensteinkarten, nicht jeden Monat dasselbe Foto auf derselben Decke. Das Buch folgt den Fotos, die du ohnehin gemacht hast, in der Reihenfolge, in der du sie gemacht hast. Jedes Baby hat seinen eigenen Kalender.',
      items: [
        { n: 'Seite 1', moment: 'Der Tag der Geburt' },
        { n: 'Monat 1', moment: 'Endlich zu Hause' },
        { n: 'Monat 2', moment: 'Das erste echte Lächeln' },
        { n: 'Monat 3', moment: 'Auf dem Bauch' },
        { n: 'Monat 4', moment: 'Laut lachen' },
        { n: 'Monat 5', moment: 'Alles greifen' },
        { n: 'Monat 6', moment: 'Der erste Brei' },
        { n: 'Monat 7', moment: 'Sitzen' },
        { n: 'Monat 8', moment: 'Unterwegs' },
        { n: 'Monat 9', moment: 'Kuckuck!' },
        { n: 'Monat 10', moment: 'Hochziehen zum Stehen' },
        { n: 'Monat 11', moment: 'Fast schon laufen' },
        { n: 'Monat 12', moment: 'Der erste Geburtstag' },
        { n: 'Letzte Seite', moment: 'Und dann war es eins' },
      ],
    },
    unfinished: {
      title: 'Warum die meisten Bücher vom ersten Jahr nie fertig werden',
      paragraphs: [
        'Ein Babybuch zum Ausfüllen will, dass du jeden Monat druckst, klebst und schreibst. Eine wöchentliche Babybuch-App will jede Woche ein paar Minuten, zweiundfünfzig Wochen am Stück. Beides klingt nach wenig, bis Monat fünf kommt, du in Zwei-Stunden-Schichten schläfst und das Buch drei Wochen hinterherhinkt.',
        'Die Fotos aber kamen weiter. Du hast nie aufgehört, welche zu machen. Genau dort setzt BabyBookAI an: Wenn das Jahr vorbei ist, liest die App deine Galerie und macht das Buch aus dem, was du schon hast. Dein Teil dauert Minuten, einmal.',
      ],
      compare: [
        { label: 'Babybuch zum Ausfüllen', value: 'Jeden Monat' },
        { label: 'Wöchentliche Babybuch-App', value: '52 Wochen' },
        { label: 'BabyBookAI', value: 'Einmal, in Minuten' },
      ],
    },
    howTitle: 'So entsteht das Fotobuch vom ersten Lebensjahr',
    birthday: {
      title: 'Rechtzeitig zum ersten Geburtstag',
      body: 'Du wählst die Daten, also kann das Buch in der Woche der Feier enden oder am Tag danach. Monate mit wenigen Fotos sind kein Problem: Das Layout folgt den Fotos, und ein Monat mit einem einzigen tollen Bild bekommt eine Seite für eins. Du willst über das erste Jahr hinaus? Ein Buch kann bis zu 18 Monate umfassen.',
      more: 'Das Baby-Fotobuch im Detail',
    },
    faqTitle: 'Fragen zum Fotobuch vom ersten Lebensjahr',
    faq: [
      {
        question: 'Wann sollte ich das Fotobuch vom ersten Jahr machen?',
        answer:
          'Jederzeit nach dem ersten Geburtstag, oder vorher, wenn du das Buch zur Feier haben willst: Du wählst die Daten, die das Buch umfasst. Weil BabyBookAI die Fotos liest, die du schon hast, musst du das Jahr über nichts nachhalten.',
      },
      {
        question: 'Was, wenn ich von manchen Monaten nur wenige Fotos habe?',
        answer:
          'Das Layout folgt den Fotos. Ein Monat mit Dutzenden guten Bildern bekommt eine volle Doppelseite; ein Monat mit einem tollen Foto bekommt eine Seite für ein Foto. Auf dem iPhone schaut BabyBookAI für Monate mit wenigen Fotos auf dem Handy auch in iCloud-Fotos.',
      },
      {
        question: 'Kann das Buch später als die Geburt beginnen oder länger als ein Jahr gehen?',
        answer:
          'Ja. Die meisten Bücher gehen von der Geburt bis zum ersten Geburtstag, aber du wählst den Starttag und die Dauer: 6, 12 oder 18 Monate, mit einer Doppelseite pro Monat.',
      },
      {
        question: 'Was kommt auf die erste und die letzte Seite?',
        answer:
          'Die erste Seite zeigt den Tag der Geburt deines Babys, mit einer kleinen Zeichnung eines Storchs mit seinem Bündel. Die letzte schließt das Jahr mit einem Kuchen zum ersten Geburtstag.',
      },
      {
        question: 'Muss ich jede Woche Fotos hinzufügen?',
        answer:
          'Nein. Genau darum geht es bei BabyBookAI: Die App arbeitet mit den Fotos, die schon auf deinem Handy sind, also gibt es kein wöchentliches Hochladen und nichts, womit du in Rückstand gerätst.',
      },
    ],
  },

  girl: {
    title: 'Fotoalbum für Mädchen, das sich selbst füllt | BabyBookAI',
    description:
      'Ein rosa Fotoalbum für dein Baby-Mädchen, aus den Fotos auf deinem Handy. BabyBookAI wählt ihre besten Fotos, ordnet sie Monat für Monat und gestaltet ein Hardcover-Buch.',
    crumb: 'Fotoalbum für Mädchen',
    eyebrow: 'Baby-Fotoalbum für Mädchen',
    h1: 'Das Baby-Fotoalbum für Mädchen, das sich selbst füllt',
    lead: 'Ihr erstes Jahr ist schon auf deinem Handy, in Hunderten Fotos. BabyBookAI wählt die besten aus, setzt jedes in seinen Monat und gestaltet ein Hardcover-Album in Zartrosa, mit ihrem Namen auf dem Cover.',
    empty: {
      title: 'Die meisten Mädchenalben kommen leer an',
      paragraphs: [
        'Ein rosa Album mit Einsteckhüllen, ein Babybuch zum Ausfüllen, eine Vorlage im Fotoeditor: Alle warten darauf, dass du ein Jahr voller Fotos druckst, auswählst und einklebst. Mit einem Baby im Haus kommt dieser Abend selten.',
        'Dieses fängt voll an. Es liest die Daten deiner Fotos, behält das schärfste jedes Moments, lässt verwackelte und die zwölf fast gleichen Bilder desselben Lächelns weg und gibt jedem Monat seine Doppelseite. Du blätterst durch und tauschst aus, was du lieber nicht behalten willst.',
      ],
    },
    howTitle: 'Ein Fotoalbum für Mädchen in Minuten erstellen',
    inside: {
      eyebrow: 'In ihrem Album',
      title: 'Vom Tag ihrer Geburt bis zu ihrem ersten Geburtstag',
      items: [
        { title: 'Ihr Name auf dem Cover', body: 'Mit dem schönsten Foto ihres Jahres, ausgewählt aus denen, die du favorisiert und am meisten geteilt hast.' },
        { title: 'Der Tag ihrer Geburt', body: 'Seite eins, mit einer kleinen Federzeichnung eines Storchs mit seinem Bündel.' },
        { title: 'Eine Doppelseite pro Monat', body: 'Ihr erstes Lächeln, ihr erstes Bad, ihr erster Brei, jedes im Monat, in dem es passiert ist.' },
        { title: 'Ein Kuchen zum Jahresschluss', body: 'Die letzte Seite beendet das Buch mit ihrem ersten Geburtstag.' },
      ],
    },
    details: {
      title: 'Ein Andenken zum Anfassen',
      body: `Ein quadratisches Hardcover-Buch, {size}, mit mattem Einband und ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten auf 170-g-Seidenpapier, für {price} inklusive Versand. Quadratisch, weil ihre Hoch- und Querformate beide hineinpassen, ohne dass eines schlecht beschnitten wird.`,
      more: `Lieber Blau oder Creme? Schau dir das ${a('boy', 'Fotoalbum für Jungen')} an, oder alles über das ${a('babyPhotoBook', 'Baby-Fotobuch')}.`,
    },
    faqTitle: 'Fragen zum Fotoalbum für Mädchen',
    faq: [
      {
        question: 'Kann ich ihr Fotoalbum in Rosa machen?',
        answer:
          'Ja. Das Buch gibt es in drei Papiertönen: Zartrosa, Zartblau und klassisch Creme. Rosa färbt jede Seite, nicht nur den Rand, und die leichten Muster jedes Monats nehmen denselben Ton an. Du kannst ihn vor der Bestellung so oft ändern, wie du willst.',
      },
      {
        question: 'Kommt ihr Name aufs Cover?',
        answer:
          'Ja. Ihr Name und das schönste Foto ihres Jahres kommen aufs Cover, ausgewählt aus den Fotos, die du favorisiert und am meisten geteilt hast. Seite eins zeigt den Tag ihrer Geburt.',
      },
      {
        question: 'Kann ich die Texte auf den Seiten ändern?',
        answer:
          'Ja. Jede Seite bringt kurze Zeilen mit wie „Unser kleiner Sonnenschein“. Lass sie, schreib sie um oder setz eine eigene Notiz irgendwo auf die Seite.',
      },
      {
        question: 'Und wenn sie noch kein Jahr alt ist?',
        answer:
          'Du wählst die Daten. Ein Buch kann 6, 12 oder 18 Monate ab einem Tag deiner Wahl umfassen, du kannst also eins mit sechs Monaten machen und ein weiteres zu ihrem ersten Geburtstag.',
      },
    ],
  },

  boy: {
    title: 'Fotoalbum für Jungen aus deinen Handyfotos | BabyBookAI',
    description:
      'Ein Baby-Fotoalbum für Jungen in Zartblau, für dich gemacht aus den Fotos auf deinem Handy. BabyBookAI wählt seine besten Bilder, ordnet sie nach Monaten und gestaltet ein Hardcover-Buch.',
    crumb: 'Fotoalbum für Jungen',
    eyebrow: 'Baby-Fotoalbum für Jungen',
    h1: 'Baby-Fotoalbum für Jungen, aus den Fotos auf deinem Handy',
    lead: 'Gib BabyBookAI seinen Namen und seinen Geburtstag. Die App geht die Fotos auf deinem Handy durch, behält seine schönsten Momente jedes Monats und gestaltet ein Hardcover-Album in Zartblau. Du blätterst es nur durch.',
    thousands: {
      title: 'Von Tausenden Fotos zu einem Album',
      body: 'Das Schwierige an einem Babyalbum war nie das Drucken. Es ist das Auswählen. BabyBookAI wählt auf deinem Handy aus, also wird nichts hochgeladen, bis du bestellst.',
      steps: [
        { label: '5.437 Fotos', body: 'Ein Jahr Galerie: Baden, Mittagsschlaf, vierzigmal dasselbe Grinsen.' },
        { label: '157 behalten', body: 'Das schärfste jedes Moments, keine Serienbilder, keine Fast-Kopien, keine Screenshots.' },
        { label: 'Ein Buch', body: 'Eine Doppelseite pro Monat, in Reihenfolge, fertig zum Durchblättern und Bestellen.' },
      ],
      note: 'Die Zahlen stammen aus einem echten Jahr, dem auf dem Bildschirm oben. Deine werden anders sein.',
    },
    howTitle: 'So erstellst du ein Fotoalbum für Jungen',
    colors: {
      eyebrow: 'Personalisiert',
      title: 'Zartblau, sein Name, deine Worte',
      paragraphs: [
        'Sein Name und das schönste Foto seines Jahres kommen aufs Cover. Wähl Zartblau, oder Creme oder Rosa, wenn dir das lieber ist: Der Ton färbt jede Seite, mit den leichtesten Mustern aus kleinen Vögeln, Sternen oder Wolken hinter den Fotos.',
        'Jede Seite bringt eine kurze Zeile mit, die du behalten oder umschreiben kannst, und du kannst überall eine eigene Notiz hinzufügen. Seite eins zeigt den Tag seiner Geburt; die letzte Seite schließt das Jahr mit einem Kuchen zum ersten Geburtstag.',
      ],
    },
    details: {
      title: 'Das Album selbst',
      body: `Ein quadratisches Hardcover-Buch, {size}, matter Einband, ${BOOK.pagesMin} bis ${BOOK.pagesMax} Seiten auf 170-g-Seidenpapier. {price} inklusive Versand, auf Bestellung gedruckt und zu dir nach Hause geschickt. Jedes Foto kommt nur dorthin, wo es die Pixel für einen scharfen Druck hat, also landet eine kleine Kopie aus einem Chat nie auf dem Cover.`,
      more: `Du machst eins für eine Tochter? Schau dir das ${a('girl', 'Fotoalbum für Mädchen')} an. Für das ganze Jahr, Monat für Monat, das ${a('firstYear', 'Fotobuch vom ersten Lebensjahr')}.`,
    },
    faqTitle: 'Fragen zum Fotoalbum für Jungen',
    faq: [
      {
        question: 'Kann ich sein Fotoalbum in Blau machen?',
        answer:
          'Ja. Wähl Zartblau, Zartrosa oder klassisch Creme. Der Ton färbt jede Seite, und die leichten Muster jedes Monats nehmen ihn auch an. Du kannst vor der Bestellung wechseln.',
      },
      {
        question: 'Kommt sein Name aufs Cover?',
        answer:
          'Ja. Sein Name und das schönste Foto seines Jahres kommen aufs Cover. Die erste Seite zeigt den Tag seiner Geburt, die letzte schließt das Jahr mit einem Kuchen zum ersten Geburtstag.',
      },
      {
        question: 'Wählt die App Fotos von ihm aus und nicht von allen anderen?',
        answer:
          'Sie wählt aus den Fotos der Daten, die du angibst, behält das schärfste jedes Moments und sortiert Duplikate aus. Dann blätterst du das Buch durch und tauschst oder entfernst jedes Foto, das du nicht drin haben willst.',
      },
      {
        question: 'Ist es ein gutes Geschenk für die Großeltern?',
        answer:
          'Es ist das, nach dem sie fragen. Ein Handy voller Fotos lässt sich schlecht am Tisch herumreichen; ein Hardcover-Buch von seinem ersten Jahr schon.',
      },
    ],
  },

  ideas: {
    title: 'Ideen fürs Baby-Fotobuch: 25 Wege, das erste Jahr zu erzählen | BabyBookAI',
    headline: 'Ideen fürs Baby-Fotobuch: 25 Wege, das erste Jahr zu erzählen',
    description:
      'Ideen fürs Baby-Fotobuch vom ersten Jahr: wie du es ordnest, was du fotografierst, Layouts, die funktionieren, Sprüche zum Ausleihen und wie viele Fotos du auswählst.',
    crumb: 'Ideen fürs Baby-Fotobuch',
    eyebrow: 'Ideen',
    h1: 'Ideen fürs Baby-Fotobuch: 25 Wege, das erste Jahr zu erzählen',
    byline: 'Vom BabyBookAI-Team',
    date: '9. Oktober 2026',
    lead: 'Zum ersten Geburtstag haben die meisten Eltern Tausende Fotos ihres Babys und keine Ahnung, wo sie anfangen sollen. Diese Ideen fürs Baby-Fotobuch funktionieren auf Papier: wie du das Jahr ordnest, was du fotografierst, solange noch Zeit ist, Layouts, die gestaltet aussehen, und Sprüche zum Ausleihen.',
    tocTitle: 'In diesem Artikel',
    toc: {
      organize: 'Wie du das Buch ordnest',
      photograph: 'Was du fotografieren solltest, solange Zeit ist',
      layout: 'Ideen für Seiten und Layout',
      captions: 'Ideen für Sprüche',
      choosing: 'Wie viele Fotos, und welche',
      gifts: 'Geschenkideen',
    },
    organize: {
      title: 'Wie du ein Baby-Fotobuch ordnest',
      body: 'Leg einen roten Faden fest, bevor du auch nur ein Foto auswählst. Er entscheidet, was ins Buch kommt und was auf dem Handy bleibt.',
      items: [
        {
          title: 'Monat für Monat',
          body: 'Das klassische Fotobuch vom ersten Jahr: eine Doppelseite pro Monat, in der Reihenfolge, in der alles geschah. Beim Blättern siehst du dein Kind wachsen. Und die schwierigste Frage, wohin ein Foto gehört, löst allein sein Datum.',
        },
        {
          title: 'Nach ersten Malen',
          body: 'Erstes Bad, erstes Lächeln, erster Brei, erste Schritte, erster Haarschnitt. Jedes bekommt seine Seite. Gut für ein kürzeres Buch oder als Teil nach den Monaten.',
        },
        {
          title: 'Nach Jahreszeiten',
          body: 'Vier Kapitel: der erste Schnee, der erste Strand, das erste Herbstlaub. Gut, wenn sich die Fotos um Reisen und Feiertage sammeln.',
        },
        {
          title: 'Derselbe Platz, jeden Monat',
          body: 'Derselbe Stuhl, derselbe Teddy zum Vergleich, fotografiert am selben Tag jedes Monats. Wenn du damit angefangen hast, gib der Serie am Ende ihre eigene Doppelseite, Bild neben Bild.',
        },
        {
          title: 'Ein ganz normaler Tag',
          body: 'Ein gewöhnlicher Tag, vom Morgen bis zum Schlafengehen: Fläschchen, Mittagsschlaf, Baden, Spaziergang. Den Alltag vergisst man zuerst.',
        },
        {
          title: 'Die Menschen, die es gehalten haben',
          body: 'Eine Seite für jede Oma und jeden Opa, Geschwister, Paten, die Freundin, die jeden Sonntag kam. Die Fotos mit anderen Menschen sind die, nach denen ein Kind später sucht.',
        },
      ],
    },
    photograph: {
      title: 'Was du fotografieren solltest, solange Zeit ist',
      body: 'Wenn das Jahr noch nicht vorbei ist: Das sind die Fotos, die Eltern beim Erstellen des Buches am häufigsten vermissen:',
      items: [
        'Hände und Füße neben deinen, alle paar Monate',
        'Das Kinderzimmer, wie es ist, bevor es sich verändert',
        'Das Chaos beim Essen, nicht nur die Porträts mit sauberem Gesicht',
        'Eingeschlafen an komischen Orten: Autositz, Schulter, Hundekorb',
        'Eine Totale vom Zimmer, nicht nur Nahaufnahmen',
        'Du selbst auf dem Foto: Gib das Handy jemand anderem',
        'Die Ausschüsse: das Verwackelte, das Gähnen, das Weinen vor dem Lächeln',
      ],
    },
    layout: {
      title: 'Ideen für Seiten und Layout',
      body: 'Der Unterschied zwischen einem Buch, das gestaltet aussieht, und einem, das vollgestopft wirkt, steckt vor allem in ein paar Regeln.',
      items: [
        {
          title: 'Ein großes Foto, dann ein Raster',
          body: 'Das beste Foto des Monats groß links, fünf oder sechs kleinere rechts. So hat jede Doppelseite einen Punkt, auf den der Blick zuerst fällt.',
        },
        {
          title: 'Eine ganze Seite für das Foto, das sie verdient',
          body: 'Nicht jeder Monat braucht ein Raster. Ein großartiges Porträt allein auf einer Seite sagt mehr als sechs gute.',
        },
        {
          title: 'Gesichter raus aus dem Falz',
          body: 'Die meisten Fotobücher sind am Rücken geklebt, also wölbt sich die Mitte einer Doppelseite weg. Lass jedes Foto auf seiner Seite und überquere den Falz nur mit Absicht.',
        },
        {
          title: 'Nah und weit mischen',
          body: 'Nahaufnahme neben Nahaufnahme wirkt eintönig. Setz eine Totale vom Zimmer oder vom Park daneben.',
        },
        {
          title: 'Lass etwas Papier frei',
          body: 'Weißraum lässt eine Seite gestaltet statt gefüllt aussehen. Eine kurze Zeile in einer Lücke bewirkt mehr als ein weiteres Foto.',
        },
        {
          title: 'Wähl quadratisch',
          body: 'Handyfotos kommen hoch und quer. Auf einer quadratischen Seite passen beide, ohne dass eines schlecht beschnitten wird.',
        },
      ],
      figcaption: 'Ein großes Foto, ein Raster daneben, nichts über dem Falz.',
    },
    captions: {
      title: 'Spruch-Ideen fürs Baby-Fotobuch',
      body: 'Halte die Texte kurz: eine Zeile pro Seite. Daten, Orte, Kosenamen und die Details, die du vergessen wirst (das Lied, das das Weinen stoppte, das erste Wort), sind besser als lange Absätze. Ein paar zum Ausleihen:',
      items: [
        'Träume groß, kleiner Schatz',
        'Unser kleiner Sonnenschein',
        'Du bist so bezaubernd',
        'Kleine Hände, große Pläne',
        'Zuhause ist, wo du bist',
        'Der Monat, in dem du deine Füße entdeckt hast',
        'Zehn Finger, zehn Zehen, ganz viel Herz',
        'Hallo, Welt',
        'Du bist so geliebt',
        'Und dann warst du eins',
      ],
    },
    choosing: {
      title: 'Wie viele Fotos, und welche',
      tips: [
        {
          lead: 'Peil 10 bis 15 pro Monat an.',
          body: 'Ein Fotobuch vom ersten Jahr mit 30 Seiten fasst bequem etwa 150 Fotos. In einem echten Jahr, das wir uns angesehen haben, blieben von 5.437 Fotos 157 übrig.',
        },
        { lead: 'Behalte eins pro Moment.', body: 'Handys machen Serienbilder; das Buch braucht das schärfste Bild, nicht alle zwölf.' },
        {
          lead: 'Vorsicht bei Kopien aus Chats.',
          body: 'Ein aus einer Messenger-App gespeichertes Foto ist eine kleinere Kopie. Klein gedruckt sieht es gut aus, aber nicht über eine ganze Seite oder auf dem Cover. Wenn du das Original hast, nimm das.',
        },
      ],
      product: `Genau an diesem Teil, dem Auswählen, bleiben die meisten Babybücher hängen. Diesen Teil übernimmt ${a('home', 'BabyBookAI')} für dich: Die App liest deine Galerie auf dem Handy, behält das schärfste Foto jedes Moments, ordnet das Jahr Monat für Monat und gestaltet das Buch, sodass du es nur durchblätterst. So entsteht das ${a('firstYear', 'Fotobuch vom ersten Lebensjahr')}.`,
    },
    gifts: {
      title: 'Geschenkideen',
      items: [
        { lead: 'Zum ersten Geburtstag.', body: 'Schließ das Buch in der Woche der Feier ab und reich es am Tisch herum.' },
        {
          lead: 'Für die Großeltern.',
          body: `Das Geschenk, das auf dem Couchtisch liegen bleibt. Ein ${a('girl', 'Fotoalbum für Mädchen')} in Rosa oder ein ${a('boy', 'Fotoalbum für Jungen')} in Blau, mit dem Namen des Babys auf dem Cover.`,
        },
      ],
    },
    box: {
      title: 'Zu wenig freie Abende?',
      body: 'BabyBookAI macht aus den Fotos auf deinem Handy in Minuten ein Hardcover-Buch vom ersten Jahr.',
    },
    faqTitle: 'Fragen zum Baby-Fotobuch',
    faq: [
      {
        question: 'Wie viele Fotos sollte ein Baby-Fotobuch haben?',
        answer:
          'Für ein erstes Jahr passen 10 bis 15 Fotos pro Monat gut: 120 bis 180 insgesamt. Ein Buch mit 30 Seiten fasst etwa 150, ohne voll zu wirken, mit Platz für ein großes Foto auf den meisten Doppelseiten.',
      },
      {
        question: 'Was gehört in ein Fotobuch vom ersten Lebensjahr?',
        answer:
          'Der Tag der Geburt, eine Doppelseite für jeden Monat in Reihenfolge, die ersten Male, die du fotografiert hast (Lächeln, Baden, Essen, Schritte), die Menschen, die dein Baby gehalten haben, und ein erster Geburtstag zum Abschluss. Kurze Texte mit Daten helfen mehr als lange.',
      },
      {
        question: 'Was schreibt man in ein Baby-Fotobuch?',
        answer:
          'Kurze Zeilen: ein Datum, ein Ort, ein Kosename, ein Gewicht oder das, was du in fünf Jahren vergessen hast (das Lied, das das Weinen stoppte, das erste Wort). Eine Zeile pro Seite reicht.',
      },
      {
        question: 'Kann man Handyfotos in einem Fotobuch drucken?',
        answer:
          'Ja. Fotos direkt aus der Handykamera werden auch über eine ganze Seite scharf gedruckt. Kopien aus Messenger-Apps sind kleiner; sie sehen auf einem kleinen Platz gut aus, nicht als ganze Seite oder auf dem Cover.',
      },
    ],
  },

  about: {
    title: 'Über BabyBookAI | Das Baby-Fotobuch, das sich selbst macht',
    description:
      'BabyBookAI ist eine App von Photo-to-Text, die aus den Fotos auf deinem Handy ein gedrucktes Fotobuch vom ersten Lebensjahr deines Babys macht. Wer wir sind und wie wir es machen.',
    crumb: 'Über uns',
    eyebrow: 'Über uns',
    h1: 'Ein Babybuch für Eltern ohne Zeit, eins zu basteln',
    paragraphs: [
      'Im ersten Lebensjahr machen Eltern Tausende Fotos. Nur sehr wenige landen in einem Buch, weil das Stunden des Auswählens, Sortierens und Platzierens bedeutet, mit einem Baby im Haus.',
      `${SITE.name} übernimmt diese Arbeit für dich. Die App liest die Fotos auf deinem Handy, behält das Beste jedes Moments, ordnet sie Monat für Monat und gestaltet ein Hardcover-Buch. Du blätterst es durch, änderst, was du magst, und es wird gedruckt und zu dir nach Hause geschickt.`,
    ],
    beliefsTitle: 'Woran wir festhalten',
    beliefs: [
      {
        title: 'Die Auswahl ist das Produkt',
        body: 'Jeder kann 200 Fotos drucken. Der Wert liegt darin, die besten 150 aus Tausenden zu wählen und so zu setzen, dass das Buch komponiert aussieht, nicht generiert.',
      },
      {
        title: 'Deine Fotos bleiben auf deinem Handy',
        body: 'Die Fotos werden auf deinem Handy ausgewählt. Für die Auswahl wird nichts hochgeladen; nur das fertige Buch wird, wenn du es bestellst, zum Drucken geschickt.',
      },
      {
        title: 'Keine Hausaufgaben',
        body: 'Keine wöchentlichen Erinnerungen, kein Tagebuch, kein Abo. Die Fotos hast du schon gemacht; das Buch entsteht daraus, einmal, wann du willst.',
      },
      {
        title: 'Ein Buch, das hält',
        body: 'Ein quadratisches Hardcover-Buch, {size}, auf 170-g-Seidenpapier, auf Bestellung von unserem Druckpartner gedruckt und zu dir nach Hause geschickt.',
      },
    ],
    who: {
      title: `Ein Produkt von ${PUBLISHER.name}`,
      body: `${SITE.name} wird von <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a> gemacht, einem kleinen Unternehmen für personalisierte Fotogeschenke. Sein Logo steht auf der Rückseite jedes Buches. Fragen, Ideen oder ein Buch, das nicht gut geworden ist: Schreib an <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Sieh dir das ${a('babyPhotoBook', 'Baby-Fotobuch')} an, lies die ${a('privacy', 'Datenschutzerklärung')} oder hol dir Hilfe auf der ${a('support', 'Hilfeseite')}.`,
  },

  support: {
    title: 'BabyBookAI Hilfe & FAQ | Hilfe zu deinem Baby-Fotobuch',
    description:
      'Hilfe zur BabyBookAI-App und deiner Bestellung: Fotos finden, WhatsApp-Bilder, dein Buch speichern, Preis und Versand und wie du uns erreichst.',
    crumb: 'Hilfe & FAQ',
    eyebrow: 'Hilfe',
    h1: 'Wie können wir helfen?',
    lead: 'Die meisten Antworten stehen unten. Für alles andere, zur App oder zu einer Bestellung, schreib uns, und ein Mensch antwortet dir.',
    emailLabel: 'E-Mail',
    emailNote: 'Geht es um eine Bestellung? Schreib von der E-Mail-Adresse, mit der du bestellt hast, damit wir sie finden.',
    appTitle: 'Die App und deine Bestellung',
    bookTitle: 'Das Buch und wie es entsteht',
    more: `Mehr: die ${a('privacy', 'Datenschutzerklärung')}, die ${a('terms', 'AGB')} und ${a('about', 'wer wir sind')}.`,
    faq: [
      {
        question: 'Die App hat nur wenige Fotos gefunden. Warum?',
        answer:
          'BabyBookAI sieht nur die Fotos, die es sehen darf. Wenn dein Handy fragt, wähl „Alle zulassen“: Mit „Fotos auswählen“ sieht die App nur die ausgewählten. Auf Android liest sie die auf dem Handy gespeicherten Fotos, also werden Fotos, die nur online in Google Fotos liegen, nicht gefunden.',
      },
      {
        question: 'Wo sind meine WhatsApp-Fotos?',
        answer:
          'Fotos, die du aus WhatsApp gespeichert hast, liegen in der Galerie deines Handys, also findet die Suche sie. Sie füllen Monate mit wenigen Kamerafotos auf, und wenn dasselbe Foto zweimal auf deinem Handy ist, wird die schärfere, größere Kopie behalten.',
      },
      {
        question: 'Wird mein Buch gespeichert, wenn ich die App schließe?',
        answer:
          'Ja. Dein Buch wird beim Arbeiten auf deinem Handy gespeichert, mit deinen Fotos, Texten und Farben, und öffnet sich dort, wo du aufgehört hast. Ein neues Buch zu beginnen ersetzt es.',
      },
      {
        question: 'Was kosten das Buch und der Versand?',
        answer: `{price} für ${BOOK.pagesMin} Seiten, Versand inklusive. Zusätzliche Seiten bis ${BOOK.pagesMax} kosten extra. Der Endpreis wird vor dem Bezahlen in deiner Währung angezeigt.`,
      },
      {
        question: 'In welche Länder liefert ihr?',
        answer:
          'USA, Vereinigtes Königreich, Kanada, Australien, Irland, Deutschland, Österreich, Frankreich, Belgien, Spanien, Italien, Niederlande, Portugal, Japan, Südkorea und China.',
      },
      {
        question: 'Wie bezahle ich?',
        answer: 'Mit Karte, über Stripe. Wir sehen deine Kartendaten nie.',
      },
      {
        question: 'Mit meiner Bestellung stimmt etwas nicht. Was tun?',
        answer: `Schreib an ${EMAIL} von der E-Mail-Adresse, mit der du bestellt hast, und leg ein Foto bei, wenn das Buch beschädigt ankam.`,
      },
      {
        question: 'Gibt es eine iPhone-App?',
        answer: 'Noch nicht. BabyBookAI gibt es jetzt bei Google Play für Android, die iPhone-App kommt bald.',
      },
      {
        question: 'Wie lösche ich meine Daten?',
        answer: `Deine Fotos verlassen nie dein Handy, um das Buch zu machen, und wenn du die App löschst, ist auch das gespeicherte Buch weg. Für eine Bestellung schreib an ${EMAIL}, und wir löschen, was wir haben und nicht gesetzlich aufbewahren müssen. Die Datenschutzerklärung hat die Details.`,
      },
    ],
  },

  privacy: {
    title: 'Datenschutzerklärung | BabyBookAI',
    description:
      'Was BabyBookAI mit deinen Fotos und deinen Bestelldaten macht: Deine Mediathek wird auf deinem Handy gelesen, und nur das fertige Buch wird zum Drucken geschickt.',
    crumb: 'Datenschutz',
    eyebrow: 'Datenschutz',
    h1: 'Die Fotos deines Babys bleiben auf deinem Handy',
    updatedLabel: 'Datenschutzerklärung · Zuletzt aktualisiert:',
    updated: '9. Oktober 2026',
    intro: `BabyBookAI („wir“) ist eine App, die aus den Fotos auf deinem Handy ein gedrucktes Fotobuch vom ersten Lebensjahr deines Babys macht. Sie ist ein Produkt von Photo-to-Text. Kontakt: ${EMAIL}.`,
    shortTitle: 'Kurz gesagt',
    short: [
      'Deine Fotomediathek wird <strong>auf deinem Handy</strong> gelesen. Wir sehen sie nie.',
      'Wenn du ein Buch bestellst, wird die fertige Buchdatei (die gewählten Fotos, deine Texte, der Name deines Babys) an uns und an unsere Druckerei geschickt.',
      'Für die Lieferung brauchen wir deinen Namen, deine E-Mail-Adresse und deine Anschrift. Die Zahlung wickelt Stripe ab; wir sehen deine Karte nie.',
      'Die App hat keine Werbung, keine Analyse, kein Tracking und kein Konto.',
    ],
    phoneTitle: 'Was die App auf deinem Handy macht',
    phone: [
      'Um die Fotos auszuwählen, liest die App die Fotos deiner Mediathek aus den Monaten, die du angibst: Datum, Größe, Schärfe und Duplikate. Das passiert nur auf deinem Handy, und nichts über deine Mediathek wird irgendwohin geschickt.',
      '<strong>Dein Baby erkennen (optional).</strong> Wenn du den Erkennungsschalter vor der Suche einschaltest, lernt die App das Gesicht deines Babys aus Fotos, die du antippst, auf deinem Handy, um die Kinder anderer Leute aus dem Buch herauszuhalten. Die Gesichtsdaten existieren nur während der Suche im Arbeitsspeicher des Handys und werden am Ende gelöscht; sie werden nie gespeichert oder verschickt. Der Schalter ist standardmäßig aus und wird in Illinois, Texas und Washington nicht angeboten.',
      'Das Buch, an dem du arbeitest, wird auf deinem Handy gespeichert, damit du zurückkommen kannst. Es enthält, welche Fotos darin sind, deine Texte und wo in diesen Fotos Gesichter sind (um sie zu rahmen), nie Gesichtsdaten. Ein neues Buch zu beginnen löscht es, ebenso das Deinstallieren der App.',
    ],
    receiveTitle: 'Was wir erhalten und warum',
    table: {
      head: ['Was', 'Warum', 'Geteilt mit'],
      rows: [
        ['Die Buchdatei: die Fotos in deinem Buch, deine Texte, Name und Geburtsjahr deines Babys', 'Um dein Buch zu drucken', 'Gelato (unsere Druckerei)'],
        ['Seitenzahl, Währung', 'Um die Bestellung zu berechnen', '—'],
        ['Dein Name, E-Mail, Lieferadresse, Telefon (optional)', 'Um das Buch zu liefern und die Quittung zu schicken', 'Gelato (Lieferung), Stripe (Quittung)'],
        ['Zahlungsdaten', 'Um die Zahlung einzuziehen', 'Nur Stripe; wir erhalten sie nie'],
      ],
    },
    receiveNote:
      'Wir nutzen diese Angaben nur, um deine Bestellung herzustellen, zu versenden und zu betreuen. Wir verkaufen sie nicht, nutzen sie nicht für Werbung und verwenden deine Fotos für nichts anderes als den Druck deines Buches.',
    othersTitle: 'Wer sie außerdem verarbeitet',
    others: [
      '<strong>Stripe</strong> wickelt Zahlungen ab (<a class="lnk" href="https://stripe.com/de/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> druckt und versendet das Buch (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'Unser Bestellserver, auf dem die Buchdatei wartet, bis sie bei der Druckerei ankommt.',
    ],
    keepTitle: 'Wie lange wir sie aufbewahren',
    keep: [
      'Nie bezahlte Bestellungen werden mit ihrer Buchdatei nach 7 Tagen gelöscht.',
      'Bei bezahlten Bestellungen bewahren wir die Bestelldaten und die Buchdatei so lange auf, wie wir sie brauchen, um die Bestellung zu liefern, dich zu betreuen und steuerliche und buchhalterische Vorschriften einzuhalten. Du kannst jederzeit verlangen, dass wir sie löschen (siehe unten).',
    ],
    rightsTitle: 'Deine Rechte und wie du deine Daten löschst',
    rights: [
      `Du kannst eine Kopie deiner Daten, ihre Berichtigung oder Löschung verlangen, indem du an ${EMAIL} schreibst, von der E-Mail-Adresse, mit der du bestellt hast, unter Angabe von BabyBookAI. Wir antworten innerhalb von 30 Tagen. Um deine Daten zu löschen, schreib uns „Meine Daten löschen“: Dann löschen wir deine Bestelldaten und deine Buchdatei, außer was wir gesetzlich aufbewahren müssen, und bitten Gelato und Stripe, ihre zu löschen.`,
      'Wenn du in der Europäischen Union oder im Vereinigten Königreich lebst, kannst du dich auch bei deiner Datenschutzbehörde beschweren. Wir verarbeiten deine Bestelldaten, weil du uns gebeten hast, dein Buch herzustellen und zu versenden, und, wenn du sie nutzt, die Gesichtserkennung nur mit deiner Einwilligung, die du widerrufen kannst, indem du den Schalter ausschaltest.',
    ],
    websiteTitle: 'Diese Website',
    websiteLanguage:
      'babybookai.com liest das Land, aus dem dein Besuch kommt, so wie unser Hosting-Anbieter (Cloudflare) es meldet, um Preise in deiner Währung und beim ersten Besuch die Seite in deiner Sprache zu zeigen. Es wird nicht gespeichert. Ein Cookie, „lang“, merkt sich die Sprache, in der du die Website zuletzt gelesen hast, damit sich die Startseite beim nächsten Mal darin öffnet.',
    websiteAnalytics:
      'babybookai.com nutzt Google Analytics, um Besuche zu zählen und zu sehen, welche Seiten gelesen werden, über Cookies von Google. Google erhält deine IP-Adresse, deinen Browser und die besuchten Seiten, nie etwas aus der App. Du kannst es in den Browsereinstellungen oder mit Googles Deaktivierungs-Add-on blockieren (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). Googles Datenschutzerklärung: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'babybookai.com verwendet keine Analyse- oder Werbeskripte.',
    childrenTitle: 'Kinder',
    children:
      'BabyBookAI ist für Eltern. Die App richtet sich nicht an Kinder, und wir erheben wissentlich keine Daten von Kindern. Die Fotos deines Babys werden nur verwendet, um dein Buch zu drucken.',
    securityTitle: 'Sicherheit',
    security:
      'Alles, was die App sendet, wird verschlüsselt übertragen (HTTPS). Buchdateien liegen in einem privaten Ordner auf unserem Server und erreichen die Druckerei nur über einen signierten, ablaufenden Link.',
    changesTitle: 'Änderungen',
    changes: 'Änderungen veröffentlichen wir hier und aktualisieren das Datum oben.',
  },

  terms: {
    title: 'Nutzungs- und Verkaufsbedingungen (AGB) | BabyBookAI',
    description:
      'Die Bedingungen für die Nutzung der BabyBookAI-App und die Bestellung eines gedruckten Baby-Fotobuches: deine Fotos, Bestellung und Zahlung, Druck und Lieferung und beschädigte Bücher.',
    crumb: 'AGB',
    eyebrow: 'AGB',
    h1: 'Nutzungs- und Verkaufsbedingungen',
    updatedLabel: 'Zuletzt aktualisiert:',
    updated: '9. Oktober 2026',
    intro: `Diese Bedingungen gelten für die App ${SITE.name} und die darüber bestellten gedruckten Bücher. ${SITE.name} ist ein Produkt von ${PUBLISHER.name} („wir“, „uns“). Wenn du die App nutzt oder ein Buch bestellst, stimmst du ihnen zu. Fragen: ${EMAIL}.`,
    sections: [
      {
        title: 'Die App',
        paragraphs: [
          'Die App ist kostenlos herunterzuladen und zu nutzen. Ein Buch zu erstellen und durchzublättern kostet nichts; du bezahlst nur, wenn du ein gedrucktes Buch bestellst. Du darfst die App für deine eigene, private, nicht kommerzielle Nutzung verwenden. Wir können Funktionen der App mit der Zeit verbessern, ändern oder einstellen.',
        ],
      },
      {
        title: 'Deine Fotos und Texte',
        list: [
          'Deine Fotos und deine Texte bleiben deine. Wir beanspruchen keine Rechte daran.',
          `Wenn du bestellst, erlaubst du uns und unserer Druckerei, die Buchdatei nur zum Drucken, Versenden und Betreuen dieser Bestellung zu nutzen, wie die ${a('privacy', 'Datenschutzerklärung')} beschreibt.`,
          'Du bestätigst, dass du das Recht hast, die Fotos und Texte in deinem Buch zu drucken, und dass nichts darin rechtswidrig ist. Wir können ablehnen, ein solches Buch zu drucken.',
        ],
      },
      {
        title: 'Bestellung und Zahlung',
        list: [
          'Für eine Bestellung musst du mindestens 18 Jahre alt sein.',
          `Die App zeigt vor dem Bezahlen den vollen Preis, in der Währung deines Landes, inklusive Versand. Ein Buch mit ${BOOK.pagesMin} Seiten kostet {price}; zusätzliche Seiten bis ${BOOK.pagesMax} kosten mehr und werden in der App ausgepreist.`,
          'Bezahlt wird mit Karte über Stripe. Wir sehen deine Kartendaten nie.',
          'Wir prüfen jede Bestellung, bevor sie in den Druck geht. Können wir eine Bestellung nicht ausführen, stornieren wir sie und erstatten dir den vollen Betrag.',
          'Sieh dir vor dem Bezahlen das ganze Buch an: Fotos, Namen, Daten und Schreibweise. Jedes Buch wird genau so gedruckt, wie du es freigibst.',
        ],
      },
      {
        title: 'Druck und Lieferung',
        paragraphs: [
          'Die Bücher werden auf Bestellung von unserem Druckpartner gedruckt und an die angegebene Adresse geliefert, in die Länder, die die App anbietet. Angezeigte Lieferzeiten sind Schätzungen. Bitte prüf die Adresse sorgfältig: Ein verschicktes Buch können wir nicht umleiten.',
        ],
      },
      {
        title: 'Beschädigte, fehlgedruckte oder verlorene Bücher',
        paragraphs: [
          `Jedes Buch wird für dich angefertigt, daher können wir es nicht zurücknehmen, wenn du es dir anders überlegst. Kommt dein Buch beschädigt an, hat es einen Druckfehler oder kommt es nicht an, schreib innerhalb von 30 Tagen nach Lieferung (oder nach dem erwarteten Liefertermin) an ${EMAIL}, mit der E-Mail-Adresse deiner Bestellung und, wenn möglich, einem Foto. Wir drucken das Buch neu oder erstatten dir den Preis. Nichts in diesen Bedingungen schränkt die Rechte ein, die dir das Verbraucherrecht deines Landes gibt.`,
        ],
      },
      {
        title: 'Haftung',
        paragraphs: [
          'Wir geben uns Mühe, dass App und Bücher stimmen, aber die App wird so bereitgestellt, wie sie ist. Soweit gesetzlich zulässig, ist unsere Haftung für eine Bestellung auf den Betrag begrenzt, den du dafür bezahlt hast. Für auf deinem Handy verlorene Fotos sind wir nicht verantwortlich: Die App liest deine Fotos, löscht sie aber nie.',
        ],
      },
      {
        title: 'Änderungen',
        paragraphs: [
          'Wir können diese Bedingungen aktualisieren. Änderungen werden hier mit neuem Datum veröffentlicht und gelten für Bestellungen nach diesem Datum.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Seite nicht gefunden | BabyBookAI',
    description: 'Diese Seite gibt es nicht. Von hier aus findest du das Baby-Fotobuch von BabyBookAI.',
    h1: 'Diese Seite hat sich verlaufen',
    body: 'Der Link ist vielleicht alt. Hier kannst du gut anfangen:',
  },
};
