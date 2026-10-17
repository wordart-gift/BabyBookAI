import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Italiano, con il tu, come l'app (librofotos lib/l10n/app_it.arb). Si cerca
 * «album foto neonato» (Semrush, Italia, ott. 2026; i dati sono in
 * docs/keywords/it): «fotolibro neonato» ha 20 ricerche, «album neonato» quasi
 * quattromila. «Nascita», «ricordi» e «da compilare» indicano il libro da
 * riempire a mano: mai nei titoli. L'articolo delle idee tiene «fotolibro»,
 * l'unica forma che lì si cerca.
 */
const a = linker('it');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const it: Copy = {
  ui: {
    skip: 'Vai al contenuto',
    homeAria: `${SITE.name}, home`,
    mainNav: 'Principale',
    nav: { babyPhotoBook: 'Album foto del neonato', firstYear: 'Il primo anno' },
    getApp: 'Scarica',
    language: 'Lingua',
    breadcrumb: 'Percorso di navigazione',
    home: 'Home',
    footer: {
      tagline: 'Il primo anno del tuo bebè, trasformato in un album per te.',
      productOf: 'Un prodotto di',
      book: 'L’album',
      company: 'Azienda',
      links: {
        babyPhotoBook: 'Album foto del neonato',
        firstYear: 'Album del primo anno',
        boy: 'Album foto per bambino',
        girl: 'Album foto per neonata',
        ideas: 'Idee per l’album foto del neonato',
        about: 'Chi siamo',
        support: 'Assistenza e domande',
        privacy: 'Privacy',
        terms: 'Termini',
      },
      rights: 'Tutti i diritti riservati.',
      follow: 'Seguici',
    },
    closing: {
      title: 'Fai il libro in pochi minuti. Tienilo per sempre.',
      body: 'Scarica BabyBookAI, dagli il nome del tuo bebè e le date, e guarda il suo primo anno impaginato prima che il caffè si raffreddi.',
    },
    free: 'Download gratuito. Paghi solo il libro stampato.',
    badges: {
      aria: `Scarica ${SITE.name}`,
      appStore: "Scarica dall'App Store",
      googlePlay: 'Disponibile su Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: in arrivo',
    },
    qr: {
      aria: `Codice QR per scaricare ${SITE.name}`,
      title: 'Sei al computer?',
      body: "Inquadralo con la fotocamera del telefono per scaricare l'app.",
    },
    how: {
      eyebrow: 'Come funziona',
      title: 'Tre passi, e tu fai solo quello facile',
      steps: [
        {
          title: 'Dagli il nome e le date',
          body: 'Il nome del tuo bebè va in copertina. La maggior parte dei libri inizia il giorno della nascita e finisce al primo compleanno.',
        },
        {
          title: 'La nostra IA sceglie le foto',
          body: "Sul tuo telefono la nostra IA passa in rassegna le foto di quell’anno, scarta quelle sfocate e le quasi doppie, tiene la migliore di ogni momento e le ordina mese per mese. Non devi sceglierne nemmeno una.",
        },
        {
          title: 'Sfoglia, cambia, ordina',
          body: 'Il libro è impaginato per te. Se una foto non ti convince, la cambi con un’altra dello stesso mese o la togli; ritocchi i testi se vuoi, e il libro rigido viene stampato e spedito a casa tua.',
        },
      ],
    },
    tones: {
      pink: 'Rosa tenue',
      blue: 'Azzurro tenue',
      neutral: 'Crema classico',
      caption: 'I tre toni della carta. Tutta la pagina prende il tono.',
    },
    stork: 'Una cicogna che porta un fagotto',
    spreadMonth: 'Primo mese',
    /** The book video under the home's hero (src/components/BookVideo.astro). */
    video: {
      title: 'Ecco come viene stampato',
      caption: 'Un libro rigido di {size} con le foto del primo anno del tuo bebè: una doppia pagina per ogni mese.',
      play: 'Riproduci il video',
      pause: 'Metti in pausa il video',
      label: 'Video: si apre un libro rigido di BabyBookAI e si sfogliano le pagine, una doppia pagina per ogni mese del primo anno',
      name: 'BabyBookAI: il libro stampato a copertina rigida',
    },
    /** The landings' spreads (lib/photos.ts spreads()), the app's month names. */
    spreads: {
      fifth: { month: 'Quinto mese', alt: 'Una doppia pagina di BabyBookAI, «Quinto mese»: una bimba a pancia in giù, con le nonne' },
      seventh: { month: 'Settimo mese', alt: 'Una doppia pagina di BabyBookAI, «Settimo mese»: una bimba con un berretto rosa e foto con il papà' },
      ninth: { month: 'Nono mese', alt: 'Una doppia pagina di BabyBookAI, «Nono mese»: una bimba seduta sul prato del giardino' },
    },
    defaultDescription:
      'BabyBookAI trasforma le foto che hai già sul telefono in un album foto stampato con copertina rigida sul primo anno del tuo bebè. Sceglie, ordina e impagina le foto per te.',
    ogImageAlt: 'BabyBookAI: un album foto stampato sul primo anno di un bebè',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Una doppia pagina di BabyBookAI, «Primo mese»: sette foto di una neonata con la famiglia e i nonni',
    screens: {
      setup: 'Schermata iniziale di BabyBookAI: un nome e una data di nascita, poi la durata del libro e il prezzo',
      selection: 'Schermata dei risultati di BabyBookAI: 225 foto scelte, mese per mese',
      order: "Schermata dell'ordine di BabyBookAI: 30 pagine, copertina rigida, spedizione inclusa",
    },
    translationNote:
      "Questa è una traduzione del testo inglese. In caso di differenze tra i due, vale la versione inglese.",
    schema: {
      appFeatures: [
        'Sceglie le foto sul telefono: solo il libro finito viene inviato in stampa',
        'Tiene la foto più nitida di ogni momento e scarta doppioni e raffiche',
        'Ordina le foto mese per mese in base alla data di scatto',
        `Impagina un libro quadrato a copertina rigida da ${BOOK.pagesMin} a ${BOOK.pagesMax} pagine`,
        'Invia il libro in stampa e lo spedisce',
      ],
      bookName: 'Album foto del neonato BabyBookAI',
      bookDescription: `Un album foto (fotolibro) quadrato a copertina rigida, 28 × 28 cm, sul primo anno di un bebè, da ${BOOK.pagesMin} a ${BOOK.pagesMax} pagine su carta patinata da 170 g, realizzato dall'app BabyBookAI con le foto del tuo telefono.`,
      pages: 'Pagine',
      binding: 'Rilegatura',
      bindingValue: 'Copertina rigida',
    },
  },

  home: {
    title: 'BabyBookAI — L’album foto del neonato che si fa da solo',
    description:
      'Il primo anno del tuo bebè in un album foto stampato con copertina rigida, fatto con le foto che hai già sul telefono. BabyBookAI le sceglie, le ordina e le impagina per te.',
    eyebrow: 'Album del primo anno del neonato',
    h1: 'L’album foto del tuo bambino che si fa da solo',
    lead: 'La nostra IA passa in rassegna la galleria del tuo telefono, sceglie per te le foto migliori di ogni mese e impagina un album con copertina rigida. Tu lo sfogli, cambi una foto con un’altra dello stesso mese o la togli, e ti arriva stampato a casa.',
    homework: {
      title: 'Ogni album del bebè costa fatica. Tranne questo.',
      body: 'Le foto le hai già fatte: centinaia, ogni mese. Trasformarle in un libro è la parte per cui nessuno ha tempo con un bebè in casa.',
      yourPart: 'La tua parte',
      ways: [
        { name: 'Un libro del bebè da compilare', effort: 'Stampare, ritagliare, incollare e scrivere, ogni mese', verdict: 'Quasi tutti smettono verso il terzo mese.' },
        { name: 'Un’app di libro settimanale', effort: 'Qualche minuto a settimana, per 52 settimane', verdict: 'Il lavoro c’è ancora, in 52 pezzi.' },
        { name: 'BabyBookAI', effort: 'Niente fino alla fine dell’anno', verdict: 'Poi un’occhiata, ed è fatto.' },
      ],
    },
    book: {
      eyebrow: 'Il libro',
      title: 'Un vero libro rigido, fatto per essere conservato',
      body: 'Il nome del tuo bebè e la sua foto migliore in copertina. Il giorno della nascita sulla prima pagina. Poi una doppia pagina per ogni mese, nell’ordine in cui è successo, ognuna impaginata per le foto che contiene, fino al primo compleanno.',
      specs: [
        { label: 'Formato', value: '{size}, quadrato' },
        { label: 'Copertina', value: 'Rigida, opaca' },
        { label: 'Pagine', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Carta', value: 'Patinata 170 g' },
        { label: 'Impaginazione', value: 'Una doppia pagina per mese' },
        { label: 'Spedizione in', value: '16 paesi' },
      ],
      more: 'Vedi l’album foto del neonato nel dettaglio',
    },
    privacy: {
      title: 'Le foto del tuo bebè restano sul tuo telefono',
      body: 'BabyBookAI sceglie le foto sul tuo telefono, non su un server. Non viene caricato nulla mentre legge la galleria o mentre sfogli il libro. Solo quando ordini le pagine finite vanno alla tipografia. Nessun abbonamento e nessun diritto sulle foto di tuo figlio.',
    },
    birthday: {
      title: 'Pronto per il primo compleanno',
      body: 'L’anno finisce, il libro è fatto. Ordinalo la settimana della festa, o fanne uno anche per i nonni. Il loro regalo preferito è quello con il bebè dentro.',
      more: 'Come funziona l’album del primo anno',
    },
    faqTitle: 'Le domande dei genitori',
    faq: [
      {
        question: 'Che cos’è BabyBookAI?',
        answer:
          'BabyBookAI è un’app che trasforma le foto che hai già sul telefono in un album foto stampato con copertina rigida sul primo anno del tuo bebè. Sceglie le foto, le ordina mese per mese e impagina ogni pagina per te. L’app è gratuita: paghi solo il libro stampato.',
      },
      {
        question: 'Come sceglie le foto BabyBookAI?',
        answer:
          'Legge la data di ogni foto e tiene solo quelle del primo anno del tuo bebè. Poi scarta le sfocate, tiene il fotogramma più nitido di ogni raffica e riconosce la stessa foto salvata due volte (una copia di WhatsApp e l’originale, per esempio) per tenere la migliore. Le foto che hai segnato come preferite e quelle che hai condiviso di più ottengono i posti migliori: la copertina e le pagine intere.',
      },
      {
        question: 'Le mie foto vengono caricate da qualche parte?',
        answer:
          'Non per fare il libro. Tutta la selezione avviene sul tuo telefono. Solo quando ordini le pagine del libro finito vengono inviate alla tipografia.',
      },
      {
        question: 'Posso cambiare le foto che ha scelto?',
        answer:
          'Sì. Sfogli il libro sul telefono e tocchi la foto che non ti piace: la cambi con un’altra dello stesso mese o la togli, e la pagina si reimpagina da sola. Puoi anche modificare i testi di ogni pagina e aggiungere una tua breve nota.',
      },
      {
        question: 'Com’è il libro?',
        answer: `Un libro quadrato a copertina rigida, {size}, con copertina opaca e da ${BOOK.pagesMin} a ${BOOK.pagesMax} pagine su carta patinata da 170 g. Il nome del tuo bebè e la sua foto migliore vanno in copertina, la data di nascita apre il libro e ogni mese ha la sua doppia pagina.`,
      },
      {
        question: 'E se alcune foto sono su WhatsApp o iCloud?',
        answer:
          'Le foto salvate da WhatsApp sono nella galleria del telefono, quindi vengono trovate come le altre. Su iPhone, BabyBookAI può usare anche le tue foto di iCloud per i mesi con poche foto sul telefono. Su Android legge le foto salvate sul telefono.',
      },
      {
        question: 'Funziona solo per i primi dodici mesi?',
        answer:
          'La maggior parte dei genitori fa il primo anno, dalla nascita al primo compleanno. Scegli tu il giorno in cui inizia e quanto dura: 6, 12 o 18 mesi, con una doppia pagina per mese.',
      },
      {
        question: 'Quanto costa?',
        answer: `L’app è gratuita, e lo sono anche fare il libro e sfogliarlo. Paghi solo quando ordini il libro stampato: {price} per ${BOOK.pagesMin} pagine, spedizione inclusa, con pagine in più fino a ${BOOK.pagesMax} a un costo extra. Vedi il prezzo finale prima di pagare.`,
      },
      {
        question: 'C’è per iPhone e Android?',
        answer:
          'BabyBookAI è già gratuito su Google Play, per Android. L’app per iPhone arriva presto. I libri vengono spediti in 16 paesi del Nord America, dell’Europa e dell’Asia.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Album foto neonato stampato, fatto con il tuo telefono | BabyBookAI',
    description: `Un album foto del neonato che arriva stampato e già impaginato: BabyBookAI sceglie le foto migliori del tuo telefono e le ordina per mese. Copertina rigida, {size}.`,
    crumb: 'Album foto neonato',
    eyebrow: 'Album foto neonato',
    h1: 'Album fotografico del neonato, fatto con le foto del tuo telefono',
    lead: 'BabyBookAI trova le foto migliori del tuo bebè sul telefono, le ordina mese per mese e impagina un album quadrato con copertina rigida, che ti arriva stampato a casa. Niente foto da incollare o da trascinare in un modello, niente caricamenti. Lo sfogli e basta.',
    features: {
      title: 'Tutto ciò che un album del bebè dovrebbe essere. Senza il lavoro.',
      items: [
        {
          title: 'Sceglie le foto',
          body: 'Tra centinaia di scatti al mese tiene il più nitido di ogni momento e lascia fuori sfocate, raffiche e doppioni.',
        },
        {
          title: 'Le ordina per mese',
          body: 'Ogni foto va dove deve andare, secondo la data di scatto, così il libro racconta l’anno nell’ordine in cui è successo.',
        },
        {
          title: 'Impagina ogni pagina',
          body: 'Ogni doppia pagina è pensata per le foto che contiene: una foto grande e una griglia, una pagina intera o una foto su entrambe le pagine.',
        },
        {
          title: 'Le stampa nitide',
          body: 'Una foto va solo dove ha i pixel per stamparsi bene. Una copia piccola da una chat ha un posto piccolo, mai la copertina.',
        },
      ],
    },
    howTitle: 'Come fare un album foto del neonato in tre passi',
    inside: {
      eyebrow: 'Dentro il libro',
      title: 'Dal giorno della nascita al primo compleanno',
      tour: [
        { label: 'La copertina', body: 'Il nome del tuo bebè e la foto migliore dell’anno, scelta tra quelle che ti sono piaciute e che hai condiviso di più.' },
        { label: 'Pagina uno', body: 'Il giorno della nascita, con un piccolo disegno a penna di una cicogna con il suo fagotto.' },
        {
          label: 'Una doppia pagina al mese',
          body: 'Ogni mese nella sua stagione: tocchi morbidi e i motivi più leggeri, uccellini, stelle o nuvole, mai più vistosi delle foto.',
        },
        { label: 'L’ultima pagina', body: 'Una torta di primo compleanno per chiudere l’anno: e poi ha compiuto uno.' },
      ],
    },
    personal: {
      eyebrow: 'Personalizzato',
      title: 'Un album del bebè personalizzato, senza la parte noiosa',
      body: 'Un album del neonato personalizzato di solito significa una serata intera in un editor. Qui le foto sono già al loro posto, quindi renderlo tuo richiede pochi tocchi.',
      items: [
        { title: 'Il suo nome in copertina', body: 'E le date che scegli: dal giorno della nascita o da qualsiasi giorno, per 6, 12 o 18 mesi.' },
        { title: 'Tre toni di carta', body: 'Crema classico, rosa tenue o azzurro tenue. Tutta la pagina prende il tono, non solo il bordo.' },
        {
          title: 'Testi che puoi riscrivere',
          body: 'Ogni pagina ha brevi frasi come «Sogna in grande, piccolo amore». Tienile, cambiale o aggiungi una tua nota dove vuoi.',
        },
      ],
      colors: `Cerchi i colori? Guarda l’${a('girl', 'album foto per neonata')} e l’${a('boy', 'album foto per bambino')}.`,
    },
    specs: {
      title: 'Il libro, nel dettaglio',
      items: [
        { label: 'Formato', value: 'Album foto stampato (fotolibro), quadrato, a copertina rigida' },
        { label: 'Dimensioni', value: '{size}' },
        { label: 'Pagine', value: `Da ${BOOK.pagesMin} a ${BOOK.pagesMax}, una doppia pagina per mese` },
        { label: 'Carta', value: 'Carta patinata da 170 g, stampa a colori' },
        { label: 'Copertina', value: 'Rigida con plastificazione opaca' },
        { label: 'Stampa', value: 'Stampato su ordinazione, spedito in 16 paesi' },
      ],
    },
    gift: {
      title: 'Il regalo che chiedono i nonni',
      body: 'Un telefono pieno di foto è difficile da far girare a tavola. Un album foto del neonato no. È il regalo per un primo compleanno, per la Festa della mamma o del papà, e quello che i nonni tengono sul tavolino del salotto.',
    },
    why: {
      title: 'Perché un album foto del neonato, se le foto sono già sul telefono',
      paragraphs: [
        'Nel primo anno di un bebè i genitori scattano centinaia di foto al mese. Vivono in una galleria, tra screenshot e scontrini, e scorrono via in un lampo. Un album del bebè è il contrario: poche delle migliori, in ordine, su carta, in un libro che chiunque può prendere in mano.',
        'La parte difficile non è mai stata la stampa. Sono le ore passate a scegliere: quale delle quaranta foto del bagnetto, a che mese appartiene quella foto, come far stare una foto verticale accanto a una orizzontale. È lì che si fermano la maggior parte degli album, intorno al terzo mese.',
        `BabyBookAI fa quella parte per te, sul tuo telefono. Legge le date, tiene la foto più nitida di ogni momento, dà a ogni mese la sua doppia pagina e impagina un album che sembra progettato, non buttato lì. A te resta la parte bella: sfogliarlo. Per tutto il primo anno, dall’ospedale alla torta, guarda l’${a('firstYear', 'album del primo anno')}.`,
      ],
    },
    faqTitle: 'Domande sull’album foto del neonato',
    faq: [
      {
        question: 'È un album in cui incollare le foto?',
        answer:
          'No. È un album fotografico stampato: le foto sono stampate sulle pagine, già messe al loro posto e impaginate, come in un fotolibro. Niente taschine, niente da incollare.',
      },
      {
        question: 'È un album nascita da compilare?',
        answer:
          'No. Non ci sono pagine da riempire a mano: l’album arriva finito, con le foto del primo anno mese per mese. Scrivi solo se vuoi cambiare una frase o aggiungere una tua nota.',
      },
      {
        question: 'Che dimensioni ha l’album foto del neonato?',
        answer:
          'È un album quadrato a copertina rigida, {size}. Il quadrato è l’unica forma in cui le foto verticali e orizzontali del telefono stanno entrambe senza che una sia ritagliata male.',
      },
      {
        question: 'Quante pagine ha?',
        answer: `Tra ${BOOK.pagesMin} e ${BOOK.pagesMax}. BabyBookAI propone da ${BOOK.pagesMin} a ${BOOK.pagesSuggestedMax} per un primo anno, una doppia pagina per mese, e puoi aggiungere pagine fino a ${BOOK.pagesMax} a un costo extra.`,
      },
      {
        question: 'Le foto del telefono si stamperanno nitide?',
        answer:
          'Ogni foto viene messa solo dove ha pixel sufficienti per stamparsi bene. Una copia piccola, come una salvata da una chat, va in un posto più piccolo della pagina invece di riempire una pagina intera o la copertina.',
      },
      {
        question: 'Posso personalizzare il libro?',
        answer:
          'Sì. Il nome del tuo bebè va in copertina, scegli le date e puoi prendere carta rosa tenue, azzurro tenue o crema classico. Ogni pagina ha brevi frasi che puoi riscrivere, e puoi aggiungere una tua nota dove vuoi.',
      },
      {
        question: 'Un viso può finire nella piega centrale?',
        answer:
          'No. Le impaginazioni tengono le foto fuori dalla piega centrale. L’unica foto che la attraversa è una messa di proposito su entrambe le pagine, e quelle vengono scelte per questo.',
      },
      {
        question: 'Quanto ci vuole?',
        answer:
          'Pochi minuti. Quasi tutto è la nostra IA che passa in rassegna la galleria sul telefono; poi sfogli il libro, cambi o togli le foto che vuoi e ordini.',
      },
    ],
  },

  firstYear: {
    title: 'Album del primo anno di vita del bambino, mese per mese | BabyBookAI',
    description:
      'L’album del primo anno di vita del tuo bambino, mese per mese, fatto con le foto che hai già sul telefono. Niente da compilare: BabyBookAI sceglie, ordina e impagina tutto l’anno.',
    crumb: 'Album del primo anno',
    eyebrow: 'Album del primo anno di vita',
    h1: 'L’album del primo anno del tuo bambino, mese per mese e già fatto',
    lead: 'Dodici mesi, una doppia pagina per ciascuno, dall’ospedale alla torta. BabyBookAI fa l’album con le foto che hai già sul telefono e ti arriva stampato, quindi durante l’anno non devi tenere aggiornato niente.',
    months: {
      eyebrow: 'Mese per mese',
      title: 'Un album del bebè mese per mese, senza il servizio fotografico di ogni mese',
      body: 'Niente cartoncini delle tappe, niente stessa posa sulla stessa copertina ogni mese. Il libro segue le foto che hai scattato comunque, nell’ordine in cui le hai scattate. Ogni bebè ha il suo calendario.',
      items: [
        { n: 'Pagina 1', moment: 'Il giorno della nascita' },
        { n: 'Mese 1', moment: 'L’arrivo a casa' },
        { n: 'Mese 2', moment: 'I primi veri sorrisi' },
        { n: 'Mese 3', moment: 'A pancia in giù' },
        { n: 'Mese 4', moment: 'Le prime risate' },
        { n: 'Mese 5', moment: 'Afferra tutto' },
        { n: 'Mese 6', moment: 'Le prime pappe' },
        { n: 'Mese 7', moment: 'Seduto da solo' },
        { n: 'Mese 8', moment: 'In movimento' },
        { n: 'Mese 9', moment: 'Cu-cù, settete!' },
        { n: 'Mese 10', moment: 'In piedi aggrappato' },
        { n: 'Mese 11', moment: 'Quasi cammina' },
        { n: 'Mese 12', moment: 'Il primo compleanno' },
        { n: 'Ultima pagina', moment: 'E poi ha compiuto uno' },
      ],
    },
    unfinished: {
      title: 'Perché la maggior parte dei libri del primo anno non viene mai finita',
      paragraphs: [
        'Un libro del bebè da compilare ti chiede di stampare, incollare e scrivere ogni mese. Un’app di libro settimanale ti chiede qualche minuto ogni settimana, per cinquantadue settimane di fila. Nessuna delle due sembra molto, finché non arriva il quinto mese, dormi a turni di due ore e il libro ha tre settimane di ritardo.',
        'Le foto, invece, hanno continuato ad arrivare. Non hai mai smesso di farle. BabyBookAI parte da lì: quando l’anno è finito, legge la tua galleria e fa il libro con quello che hai già. La tua parte richiede minuti, una volta sola.',
      ],
      compare: [
        { label: 'Libro del bebè da compilare', value: 'Ogni mese' },
        { label: 'App di libro settimanale', value: '52 settimane' },
        { label: 'BabyBookAI', value: 'Una volta, in minuti' },
      ],
    },
    howTitle: 'Come si fa l’album del primo anno',
    birthday: {
      title: 'In tempo per il primo compleanno',
      body: 'Scegli tu le date, quindi il libro può chiudersi la settimana della festa o il giorno dopo. I mesi con poche foto non sono un problema: l’impaginazione segue le foto, e un mese con una sola foto bellissima ha una pagina fatta per una. Vuoi andare oltre il primo anno? Un libro può coprire fino a 18 mesi.',
      more: 'Vedi l’album foto del neonato nel dettaglio',
    },
    faqTitle: 'Domande sull’album del primo anno',
    faq: [
      {
        question: 'È un album da compilare a mano?',
        answer:
          'No. L’album del primo anno di BabyBookAI arriva stampato e finito: le foto sono già sulle loro pagine, mese per mese. Scrivi solo se vuoi cambiare una frase o aggiungere una tua nota.',
      },
      {
        question: 'Quando devo fare l’album del primo anno?',
        answer:
          'Quando vuoi dopo il primo compleanno, o prima se lo vuoi per la festa: scegli tu le date che copre. Poiché BabyBookAI legge le foto che hai già, durante l’anno non c’è nulla da tenere aggiornato.',
      },
      {
        question: 'E se di alcuni mesi ho poche foto?',
        answer:
          'L’impaginazione segue le foto. Un mese con decine di foto belle ha una doppia pagina piena; un mese con una sola foto bellissima ha una pagina fatta per una foto. Su iPhone, BabyBookAI controlla anche Foto di iCloud per i mesi con poche foto sul telefono.',
      },
      {
        question: 'Il libro può iniziare dopo la nascita, o coprire più di un anno?',
        answer:
          'Sì. La maggior parte dei libri va dalla nascita al primo compleanno, ma scegli tu il giorno di inizio e la durata: 6, 12 o 18 mesi, con una doppia pagina per mese.',
      },
      {
        question: 'Cosa c’è nella prima e nell’ultima pagina?',
        answer:
          'La prima pagina ha il giorno in cui è nato il tuo bebè, con un piccolo disegno di una cicogna con il suo fagotto. L’ultima chiude l’anno con una torta di primo compleanno.',
      },
      {
        question: 'Devo aggiungere foto ogni settimana?',
        answer:
          'No. È proprio questo il punto di BabyBookAI: lavora con le foto che hai già sul telefono, quindi niente caricamenti settimanali e niente da cui restare indietro.',
      },
    ],
  },

  girl: {
    title: 'Album foto per neonata che si riempie da solo | BabyBookAI',
    description:
      'Un album foto per neonata, in rosa, fatto con le foto del tuo telefono. BabyBookAI sceglie le sue foto migliori, le ordina mese per mese e impagina un libro rigido.',
    crumb: 'Album foto per neonata',
    eyebrow: 'Album foto per neonata',
    h1: 'L’album foto per neonata che si riempie da solo',
    lead: 'Il suo primo anno è già sul tuo telefono, in centinaia di foto. BabyBookAI sceglie le migliori, mette ciascuna nel suo mese e impagina un album rigido in rosa tenue, con il suo nome in copertina.',
    empty: {
      title: 'La maggior parte degli album per neonata arriva vuota',
      paragraphs: [
        'Un album rosa con le taschine, un libro del bebè da compilare, un modello in un editor di foto: ognuno aspetta che tu stampi, scelga e metta al suo posto un anno di foto. Con un bebè in casa, quella serata arriva di rado.',
        'Questo parte già pieno. La nostra IA legge le date delle tue foto, tiene la più nitida di ogni momento, lascia fuori le sfocate e le dodici quasi copie dello stesso sorriso, e dà a ogni mese la sua doppia pagina. Lo sfogli e, se una foto non ti convince, la cambi con un’altra dello stesso mese o la togli.',
      ],
    },
    howTitle: 'Come fare un album foto per neonata in pochi minuti',
    inside: {
      eyebrow: 'Dentro il suo album',
      title: 'Dal giorno della nascita al primo compleanno',
      items: [
        { title: 'Il suo nome in copertina', body: 'Con la foto migliore del suo anno, scelta tra quelle che hai messo tra i preferiti e condiviso di più.' },
        { title: 'Il giorno della nascita', body: 'Pagina uno, con un piccolo disegno a penna di una cicogna con il suo fagotto.' },
        { title: 'Una doppia pagina per ogni mese', body: 'Il suo primo sorriso, il primo bagnetto, la prima pappa, ognuno nel mese in cui è successo.' },
        { title: 'Una torta per chiudere l’anno', body: 'L’ultima pagina chiude il libro con il suo primo compleanno.' },
      ],
    },
    details: {
      title: 'Un ricordo fatto per essere toccato',
      body: `Un libro quadrato a copertina rigida, {size}, copertina opaca e da ${BOOK.pagesMin} a ${BOOK.pagesMax} pagine su carta patinata da 170 g, a {price} con spedizione inclusa. Quadrato, perché le sue foto verticali e orizzontali stanno entrambe senza che una sia ritagliata male.`,
      more: `Preferisci azzurro o crema? Guarda l’${a('boy', 'album foto per bambino')}, o tutto sull’${a('babyPhotoBook', 'album foto del neonato')}.`,
    },
    faqTitle: 'Domande sull’album foto per neonata',
    faq: [
      {
        question: 'Posso fare il suo album foto rosa?',
        answer:
          'Sì. Il libro ha tre toni di carta: rosa tenue, azzurro tenue e crema classico. Il rosa colora ogni pagina, non solo il bordo, e i motivi leggeri di ogni mese prendono lo stesso tono. Puoi cambiarlo quante volte vuoi prima di ordinare.',
      },
      {
        question: 'Il suo nome va in copertina?',
        answer:
          'Sì. Il suo nome e la foto migliore del suo anno vanno in copertina, scelta tra le foto che hai messo tra i preferiti e condiviso di più. La prima pagina ha il giorno in cui è nata.',
      },
      {
        question: 'Posso cambiare i testi delle pagine?',
        answer:
          'Sì. Ogni pagina ha brevi frasi come «Il nostro piccolo raggio di sole». Tienile, riscrivile o aggiungi una tua nota ovunque nella pagina.',
      },
      {
        question: 'E se non ha ancora un anno?',
        answer:
          'Scegli tu le date. Un libro può coprire 6, 12 o 18 mesi dal giorno che scegli, quindi puoi farne uno a sei mesi e un altro per il suo primo compleanno.',
      },
    ],
  },

  boy: {
    title: 'Album foto per bambino fatto con il tuo telefono | BabyBookAI',
    description:
      'Un album foto per bambino in azzurro tenue, fatto per te con le foto del tuo telefono. BabyBookAI sceglie le sue foto migliori, le ordina per mese e impagina un libro rigido.',
    crumb: 'Album foto per bambino',
    eyebrow: 'Album foto per bambino',
    h1: 'Album foto per bambino, fatto con le foto del tuo telefono',
    lead: 'Dai a BabyBookAI il suo nome e la sua data di nascita. La nostra IA passa in rassegna le foto del tuo telefono, tiene i suoi momenti migliori di ogni mese e impagina un album rigido in azzurro tenue. Tu lo sfogli e basta.',
    thousands: {
      title: 'Da migliaia di foto a un solo album',
      body: 'La parte difficile di un album del bebè non è mai stata la stampa. È la scelta. BabyBookAI sceglie sul tuo telefono, quindi non viene caricato nulla finché non ordini.',
      steps: [
        { label: '5.450 foto', body: 'Un anno di galleria: bagnetti, pisolini, lo stesso sorriso quaranta volte.' },
        { label: '225 scelte', body: 'La più nitida di ogni momento, niente raffiche, niente quasi copie, niente screenshot.' },
        { label: 'Un libro', body: 'Una doppia pagina per mese, in ordine, pronta da sfogliare e ordinare.' },
      ],
      note: 'I numeri vengono da un anno reale, quello sullo schermo qui sopra. I tuoi saranno diversi.',
    },
    howTitle: 'Come fare un album foto per bambino',
    colors: {
      eyebrow: 'Personalizzato',
      title: 'Azzurro tenue, il suo nome, le tue parole',
      paragraphs: [
        'Il suo nome e la foto migliore del suo anno vanno in copertina. Scegli l’azzurro tenue, o crema o rosa se preferisci: il tono colora ogni pagina, con i motivi più leggeri di uccellini, stelle o nuvole dietro le foto.',
        'Ogni pagina ha una breve frase che puoi tenere o riscrivere, e puoi aggiungere una tua nota dove vuoi. La prima pagina ha il giorno in cui è nato; l’ultima chiude l’anno con una torta di primo compleanno.',
      ],
    },
    details: {
      title: 'L’album in sé',
      body: `Un libro quadrato a copertina rigida, {size}, copertina opaca, da ${BOOK.pagesMin} a ${BOOK.pagesMax} pagine su carta patinata da 170 g. {price} con spedizione inclusa, stampato su ordinazione e spedito a casa tua. Ogni foto va solo dove ha i pixel per stamparsi nitida, quindi una copia piccola da una chat non finisce mai in copertina.`,
      more: `Lo fai per una figlia? Guarda l’${a('girl', 'album foto per neonata')}. Per tutto l’anno, mese per mese, guarda l’${a('firstYear', 'album del primo anno')}.`,
    },
    faqTitle: 'Domande sull’album foto per bambino',
    faq: [
      {
        question: 'Posso fare il suo album foto azzurro?',
        answer:
          'Sì. Scegli azzurro tenue, rosa tenue o crema classico. Il tono colora ogni pagina, e anche i motivi leggeri di ogni mese lo prendono. Puoi cambiare prima di ordinare.',
      },
      {
        question: 'Il suo nome va in copertina?',
        answer:
          'Sì. Il suo nome e la foto migliore del suo anno vanno in copertina. La prima pagina ha il giorno in cui è nato, e l’ultima chiude l’anno con una torta di primo compleanno.',
      },
      {
        question: 'Sceglierà foto di lui e non di tutti gli altri?',
        answer:
          'Sceglie tra le foto delle date che indichi, tiene la più nitida di ogni momento e scarta i doppioni. Poi sfogli il libro e cambi una foto con un’altra dello stesso mese, o togli quella che non vuoi.',
      },
      {
        question: 'È un buon regalo per i nonni?',
        answer:
          'È quello che chiedono. Un telefono pieno di foto è difficile da far girare a tavola; un libro rigido del suo primo anno no.',
      },
    ],
  },

  ideas: {
    title: 'Idee per il fotolibro del neonato: 25 modi di raccontare il primo anno | BabyBookAI',
    headline: 'Idee per il fotolibro del neonato: 25 modi di raccontare il primo anno',
    description:
      'Idee per il fotolibro del neonato sul primo anno: come organizzarlo, cosa fotografare, impaginazioni che funzionano, frasi da prendere in prestito e quante foto scegliere.',
    crumb: 'Idee per il fotolibro',
    eyebrow: 'Idee',
    h1: 'Idee per il fotolibro del neonato: 25 modi di raccontare il primo anno',
    byline: 'Dal team di BabyBookAI',
    date: '9 ottobre 2026',
    lead: 'Al primo compleanno la maggior parte dei genitori ha migliaia di foto del proprio bebè e nessuna idea da dove cominciare. Queste idee per il fotolibro del neonato sono quelle che funzionano su carta: come organizzare l’anno, cosa fotografare finché c’è tempo, impaginazioni che sembrano progettate e frasi da prendere in prestito.',
    tocTitle: 'In questo articolo',
    toc: {
      organize: 'Modi di organizzare il libro',
      photograph: 'Cosa fotografare finché c’è tempo',
      layout: 'Idee per pagine e impaginazione',
      captions: 'Idee per le frasi',
      choosing: 'Quante foto, e quali',
      gifts: 'Idee regalo',
    },
    organize: {
      title: 'Modi di organizzare un fotolibro del neonato',
      body: 'Scegli un filo conduttore per il libro prima di scegliere anche una sola foto. Decide cosa entra e cosa resta sul telefono.',
      items: [
        {
          title: 'Mese per mese',
          body: 'Il classico fotolibro del primo anno: una doppia pagina per mese, nell’ordine in cui è successo. Sfogliandolo lo vedi crescere. Risolve anche la domanda più difficile, dove va una foto, con la sola data.',
        },
        {
          title: 'Per prime volte',
          body: 'Primo bagnetto, primo sorriso, prima pappa, primi passi, primo taglio di capelli. Ognuna ha la sua pagina. Funziona bene per un libro più breve, o come sezione dopo i mesi.',
        },
        {
          title: 'Per stagione',
          body: 'Quattro capitoli: la prima neve, la prima spiaggia, le prime foglie d’autunno. Va bene quando le foto si concentrano intorno a viaggi e vacanze.',
        },
        {
          title: 'Lo stesso posto, ogni mese',
          body: 'La stessa sedia, lo stesso orsacchiotto come riferimento, fotografati lo stesso giorno di ogni mese. Se hai iniziato, dai alla serie una doppia pagina tutta sua alla fine, una foto accanto all’altra.',
        },
        {
          title: 'Un giorno qualunque',
          body: 'Un giorno normale, dal mattino all’ora della nanna: biberon, pisolino, bagnetto, la passeggiata. Il quotidiano è ciò che si dimentica per primo.',
        },
        {
          title: 'Le persone che l’hanno tenuto in braccio',
          body: 'Una pagina per ogni nonno, i fratelli, i padrini, l’amica che veniva ogni domenica. Le foto con altre persone sono quelle che un bambino cerca più tardi.',
        },
      ],
    },
    photograph: {
      title: 'Cosa fotografare finché c’è tempo',
      body: 'Se l’anno non è ancora finito, queste sono le foto che i genitori più spesso rimpiangono di non avere quando fanno il libro:',
      items: [
        'Mani e piedi accanto ai tuoi, ogni pochi mesi',
        'La cameretta com’è, prima che cambi',
        'Il disordine dei pasti, non solo i ritratti con la faccia pulita',
        'Addormentato in posti strani: il seggiolino, la spalla, la cuccia del cane',
        'Un campo largo della stanza, non solo primi piani',
        'Anche tu nella foto: passa il telefono a qualcun altro',
        'I fuori programma: la foto mossa, lo sbadiglio, il pianto prima del sorriso',
      ],
    },
    layout: {
      title: 'Idee per pagine e impaginazione',
      body: 'La differenza tra un libro che sembra progettato e uno che sembra buttato lì sta soprattutto in poche regole.',
      items: [
        {
          title: 'Una foto grande, poi una griglia',
          body: 'La foto migliore del mese grande a sinistra, cinque o sei più piccole a destra. Ogni doppia pagina ha un punto da cui iniziare a guardare.',
        },
        {
          title: 'Una pagina intera per la foto che se la merita',
          body: 'Non ogni mese ha bisogno di una griglia. Un bel ritratto da solo su una pagina dice più di sei belle foto.',
        },
        {
          title: 'I visi fuori dalla piega',
          body: 'La maggior parte dei fotolibri è incollata sul dorso, quindi il centro della doppia pagina si incurva. Tieni ogni foto sulla sua pagina e attraversa la piega solo di proposito.',
        },
        {
          title: 'Alterna primi piani e campi larghi',
          body: 'Un primo piano accanto a un primo piano è ripetitivo. Metti accanto un campo largo della stanza o del parco.',
        },
        {
          title: 'Lascia un po’ di carta',
          body: 'Lo spazio bianco fa sembrare una pagina progettata invece che riempita. Una frase breve in uno spazio vuoto fa più di un’altra foto.',
        },
        {
          title: 'Scegli il quadrato',
          body: 'Le foto del telefono sono verticali e orizzontali. In una pagina quadrata stanno entrambe senza che una sia ritagliata male.',
        },
      ],
      figcaption: 'Una foto grande, una griglia accanto, niente sulla piega.',
    },
    captions: {
      title: 'Idee di frasi per un fotolibro del neonato',
      body: 'Frasi brevi: una riga per pagina. Date, luoghi, soprannomi e i dettagli che dimenticherai (la canzone che fermava il pianto, la prima parola) valgono più di lunghi paragrafi. Alcune da prendere in prestito:',
      items: [
        'Sogna in grande, piccolo amore',
        'Il nostro piccolo raggio di sole',
        'Sei così adorabile',
        'Piccole mani, grandi progetti',
        'Casa è dove sei tu',
        'Il mese in cui hai scoperto i tuoi piedi',
        'Dieci dita, dieci ditini, tutto cuore',
        'Ciao, mondo',
        'Sei così amato',
        'E poi hai compiuto uno',
      ],
    },
    choosing: {
      title: 'Quante foto, e quali',
      tips: [
        {
          lead: 'Punta a 10-15 al mese.',
          body: 'Un fotolibro del primo anno da 30 pagine contiene comodamente circa 150 foto. In un anno reale che abbiamo esaminato, ne sono state tenute 225 su 5.450.',
        },
        { lead: 'Tieni una per ogni momento.', body: 'I telefoni scattano raffiche; il libro ha bisogno del fotogramma più nitido, non di tutti e dodici.' },
        {
          lead: 'Attenzione alle copie dalle chat.',
          body: 'Una foto salvata da un’app di messaggistica è una copia più piccola. Si stampa bene in piccolo, ma non a pagina intera né in copertina. Se hai l’originale, usa quella.',
        },
      ],
      product: `Questa parte, la scelta, è dove si fermano la maggior parte dei libri del bebè. È la parte che ${a('home', 'BabyBookAI')} fa per te: legge la galleria sul tuo telefono, tiene la foto più nitida di ogni momento, ordina l’anno mese per mese e impagina il libro, così tu lo sfogli e basta. Guarda come si fa l’${a('firstYear', 'album del primo anno')}.`,
    },
    gifts: {
      title: 'Idee regalo',
      items: [
        { lead: 'Per il primo compleanno.', body: 'Chiudi il libro la settimana della festa e fallo girare a tavola.' },
        {
          lead: 'Per i nonni.',
          body: `Il regalo che tengono sul tavolino del salotto. Un ${a('girl', 'album foto per neonata')} in rosa o un ${a('boy', 'album foto per bambino')} in azzurro, con il nome del bebè in copertina.`,
        },
      ],
    },
    box: {
      title: 'Poche serate libere?',
      body: 'BabyBookAI trasforma le foto che hai già sul telefono in un libro rigido del primo anno, in pochi minuti.',
    },
    faqTitle: 'Domande sul fotolibro del neonato',
    faq: [
      {
        question: 'Quante foto deve avere un fotolibro del neonato?',
        answer:
          'Per un primo anno funzionano bene 10-15 foto al mese: da 120 a 180 in tutto. Un libro da 30 pagine ne contiene circa 150 senza sembrare affollato, con posto per una foto grande nella maggior parte delle doppie pagine.',
      },
      {
        question: 'Cosa deve esserci nel fotolibro del primo anno del bebè?',
        answer:
          'Il giorno della nascita, una doppia pagina per ogni mese in ordine, le prime volte che hai immortalato (sorriso, bagnetto, pappa, passi), le persone che l’hanno tenuto in braccio e un primo compleanno per chiudere l’anno. Brevi frasi con le date aiutano più di testi lunghi.',
      },
      {
        question: 'Cosa si scrive in un fotolibro del neonato?',
        answer:
          'Frasi brevi: una data, un luogo, un soprannome, un peso, o la cosa che tra cinque anni avrai dimenticato (la canzone che fermava il pianto, la prima parola). Una riga per pagina basta.',
      },
      {
        question: 'Le foto del telefono si possono stampare in un fotolibro?',
        answer:
          'Sì. Le foto scattate direttamente con la fotocamera del telefono si stampano nitide anche a pagina intera. Le copie salvate dalle app di messaggistica sono più piccole; si stampano bene in un posto piccolo della pagina, non a pagina intera né in copertina.',
      },
    ],
  },

  about: {
    title: 'Chi è BabyBookAI | L’album foto del neonato che si fa da solo',
    description:
      'BabyBookAI è un’app di Photo-to-Text che trasforma le foto del tuo telefono in un album foto stampato del primo anno del tuo bebè. Chi siamo e come lo facciamo.',
    crumb: 'Chi siamo',
    eyebrow: 'Chi siamo',
    h1: 'Un album del bebè per genitori che non hanno tempo di farlo',
    paragraphs: [
      'Nel primo anno di un bebè i genitori scattano migliaia di foto. Pochissime finiscono in un libro, perché farne uno significa ore a scegliere, ordinare e sistemare, con un bebè in casa.',
      `${SITE.name} fa questo lavoro per te. Legge le foto del tuo telefono, tiene il meglio di ogni momento, le ordina mese per mese e impagina un libro rigido. Lo sfogli, cambi ciò che vuoi, e viene stampato e spedito a casa tua.`,
    ],
    beliefsTitle: 'A cosa teniamo',
    beliefs: [
      {
        title: 'La selezione è il prodotto',
        body: 'Chiunque può stampare 200 foto. Il valore sta nello scegliere le 150 migliori tra migliaia e impaginarle in modo che il libro sembri composto, non generato.',
      },
      {
        title: 'Le tue foto restano sul tuo telefono',
        body: 'Le foto vengono scelte sul tuo telefono. Per sceglierle non si carica nulla; solo il libro finito viene inviato, quando lo ordini, per essere stampato.',
      },
      {
        title: 'Niente da fare ogni settimana',
        body: 'Niente promemoria settimanali, niente diario, niente abbonamento. Le foto le hai già fatte; il libro nasce da loro, una volta, quando vuoi.',
      },
      {
        title: 'Un libro fatto per durare',
        body: 'Un libro quadrato a copertina rigida, {size}, su carta patinata da 170 g, stampato su ordinazione dal nostro partner di stampa e spedito a casa tua.',
      },
    ],
    who: {
      title: `Un prodotto ${PUBLISHER.name}`,
      body: `${SITE.name} è fatto da <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, una piccola azienda che crea regali personalizzati dalle foto. Il suo logo è sul retro di ogni libro. Domande, idee o un libro che non è venuto bene: scrivi a <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Guarda l’${a('babyPhotoBook', 'album foto del neonato')}, leggi l’${a('privacy', 'informativa sulla privacy')} o cerca aiuto nella ${a('support', 'pagina di assistenza')}.`,
  },

  support: {
    title: 'Assistenza BabyBookAI | Aiuto con il tuo album foto del neonato',
    description:
      'Aiuto con l’app BabyBookAI e il tuo ordine: trovare le foto, le foto di WhatsApp, salvare il libro, prezzo e spedizione, e come contattarci.',
    crumb: 'Assistenza e domande',
    eyebrow: 'Assistenza',
    h1: 'Come possiamo aiutarti?',
    lead: 'La maggior parte delle risposte è qui sotto. Per tutto il resto, sull’app o su un ordine, scrivici e ti risponderà una persona.',
    emailLabel: 'E-mail',
    emailNote: 'Si tratta di un ordine? Scrivici dall’indirizzo con cui hai ordinato, così possiamo trovarlo.',
    appTitle: 'L’app e il tuo ordine',
    bookTitle: 'Il libro e come si fa',
    more: `Altro: l’${a('privacy', 'informativa sulla privacy')}, i ${a('terms', 'termini')} e ${a('about', 'chi siamo')}.`,
    faq: [
      {
        question: 'L’app ha trovato poche foto. Perché?',
        answer:
          'BabyBookAI vede solo le foto che le è permesso vedere. Quando il telefono te lo chiede, scegli «Consenti tutte»: con «Seleziona foto» vede solo quelle che hai scelto. Su Android legge le foto salvate sul telefono, quindi le foto che stanno solo su Google Foto online non vengono trovate.',
      },
      {
        question: 'Dove sono le mie foto di WhatsApp?',
        answer:
          'Le foto che hai salvato da WhatsApp sono nella galleria del telefono, quindi la scansione le trova. Servono a riempire i mesi con poche foto della fotocamera, e se la stessa foto è due volte sul telefono, viene tenuta la copia più nitida e più grande.',
      },
      {
        question: 'Il mio libro viene salvato se chiudo l’app?',
        answer:
          'Sì. Il tuo libro viene salvato sul telefono mentre lavori, con foto, testi e colori, e si apre dove l’avevi lasciato. Iniziare un nuovo libro lo sostituisce.',
      },
      {
        question: 'Quanto costa il libro e quanto la spedizione?',
        answer: `{price} per ${BOOK.pagesMin} pagine, spedizione inclusa. Le pagine in più, fino a ${BOOK.pagesMax}, costano extra. Il prezzo finale viene mostrato nella tua valuta prima di pagare.`,
      },
      {
        question: 'In quali paesi spedite?',
        answer:
          'Stati Uniti, Regno Unito, Canada, Australia, Irlanda, Germania, Austria, Francia, Belgio, Spagna, Italia, Paesi Bassi, Portogallo, Giappone, Corea del Sud e Cina.',
      },
      {
        question: 'Come si paga?',
        answer: 'Con carta, tramite Stripe. Non vediamo mai i dati della tua carta.',
      },
      {
        question: 'C’è un problema con il mio ordine. Cosa faccio?',
        answer: `Scrivi a ${EMAIL} dall’indirizzo con cui hai ordinato, e allega una foto se il libro è arrivato danneggiato.`,
      },
      {
        question: 'C’è un’app per iPhone?',
        answer: 'Non ancora. BabyBookAI è su Google Play per Android, e l’app per iPhone arriva presto.',
      },
      {
        question: 'Come cancello i miei dati?',
        answer: `Le tue foto non lasciano mai il telefono per fare il libro, ed eliminare l’app elimina il libro salvato. Per un ordine effettuato, scrivi a ${EMAIL} e cancelliamo ciò che conserviamo e che la legge non ci obbliga a tenere. L’informativa sulla privacy ha i dettagli.`,
      },
    ],
  },

  privacy: {
    title: 'Informativa sulla privacy | BabyBookAI',
    description:
      'Cosa fa BabyBookAI con le tue foto e i dati del tuo ordine: la tua libreria viene letta sul telefono, e solo il libro finito viene inviato per essere stampato.',
    crumb: 'Privacy',
    eyebrow: 'Privacy',
    h1: 'Le foto del tuo bebè restano sul tuo telefono',
    updatedLabel: 'Informativa sulla privacy · Ultimo aggiornamento:',
    updated: '9 ottobre 2026',
    intro: `BabyBookAI («noi») è un’app che realizza un album foto stampato del primo anno del tuo bebè con le foto del tuo telefono. È un prodotto di Photo-to-Text. Contatto: ${EMAIL}.`,
    shortTitle: 'In breve',
    short: [
      'La tua libreria di foto viene letta <strong>sul tuo telefono</strong>. Noi non la vediamo mai.',
      'Quando ordini un libro, il file del libro finito (le foto scelte, i tuoi testi, il nome del tuo bebè) viene inviato a noi e alla nostra tipografia.',
      'Per consegnarlo ci servono il tuo nome, la tua e-mail e il tuo indirizzo. Il pagamento è gestito da Stripe; non vediamo mai la tua carta.',
      'L’app non ha pubblicità, analisi, tracciamento né account.',
    ],
    phoneTitle: 'Cosa fa l’app sul tuo telefono',
    phone: [
      'Per scegliere le foto, l’app legge le foto della tua libreria dei mesi che indichi: date, dimensioni, nitidezza e doppioni. Questo avviene solo sul tuo telefono, e nulla sulla tua libreria viene inviato da nessuna parte.',
      '<strong>Riconoscere il tuo bebè (facoltativo).</strong> Se attivi l’interruttore di riconoscimento prima della scansione, l’app impara il viso del tuo bebè dalle foto che tocchi, sul tuo telefono, per tenere fuori dal libro i figli degli altri. I dati del viso esistono solo nella memoria del telefono durante la scansione e vengono cancellati alla fine; non vengono mai salvati né inviati. L’interruttore è spento per impostazione predefinita e non è offerto in Illinois, Texas e Washington.',
      'Il libro su cui lavori è salvato sul tuo telefono perché tu possa tornarci. Contiene quali foto ci sono, i tuoi testi e dove si trovano i visi in quelle foto (per inquadrarle), mai dati dei visi. Iniziare un nuovo libro lo cancella, così come disinstallare l’app.',
    ],
    receiveTitle: 'Cosa riceviamo, e perché',
    table: {
      head: ['Cosa', 'Perché', 'Condiviso con'],
      rows: [
        ['Il file del libro: le foto del tuo libro, i tuoi testi, il nome e l’anno di nascita del tuo bebè', 'Per stampare il tuo libro', 'Gelato (la nostra tipografia)'],
        ['Numero di pagine, valuta', 'Per calcolare il prezzo dell’ordine', '—'],
        ['Il tuo nome, e-mail, indirizzo di spedizione, telefono (facoltativo)', 'Per consegnare il libro e inviare la ricevuta', 'Gelato (consegna), Stripe (ricevuta)'],
        ['Dati di pagamento', 'Per incassare il pagamento', 'Solo Stripe; noi non li riceviamo mai'],
      ],
    },
    receiveNote:
      'Usiamo queste informazioni solo per realizzare, spedire e assistere il tuo ordine. Non le vendiamo, non le usiamo per la pubblicità e non usiamo le tue foto per nulla di diverso dalla stampa del tuo libro.',
    othersTitle: 'Chi altro le tratta',
    others: [
      '<strong>Stripe</strong> elabora i pagamenti (<a class="lnk" href="https://stripe.com/it/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> stampa e spedisce il libro (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'Il nostro server degli ordini, dove il file del libro attende di arrivare alla tipografia.',
    ],
    keepTitle: 'Per quanto tempo li conserviamo',
    keep: [
      'Gli ordini mai pagati vengono cancellati, con il loro file del libro, dopo 7 giorni.',
      'Per gli ordini pagati conserviamo i dati dell’ordine e il file del libro per il tempo necessario a consegnare l’ordine, assisterti e rispettare le norme fiscali e contabili. Puoi chiederci di cancellarli in qualsiasi momento (vedi sotto).',
    ],
    rightsTitle: 'I tuoi diritti, e come cancellare i tuoi dati',
    rights: [
      `Puoi chiederci una copia dei tuoi dati, di correggerli o di cancellarli scrivendo a ${EMAIL} dall’indirizzo con cui hai ordinato, indicando BabyBookAI. Risponderemo entro 30 giorni. Per cancellare i tuoi dati, scrivici «cancella i miei dati»: cancelleremo i dati del tuo ordine e il file del tuo libro, tranne ciò che la legge ci obbliga a conservare, e chiederemo a Gelato e a Stripe di cancellare i loro.`,
      'Se vivi nell’Unione europea o nel Regno Unito, puoi anche presentare reclamo alla tua autorità per la protezione dei dati (in Italia, il Garante per la protezione dei dati personali). Trattiamo i dati del tuo ordine perché ci hai chiesto di realizzare e spedire il tuo libro e, se lo usi, il riconoscimento facciale solo con il tuo consenso, che puoi revocare spegnendo l’interruttore.',
    ],
    websiteTitle: 'Questo sito',
    websiteLanguage:
      'babybookai.com legge il paese da cui proviene la tua visita, come lo segnala il nostro fornitore di hosting (Cloudflare), per mostrare i prezzi nella tua valuta e, alla prima visita, la pagina nella tua lingua. Non viene memorizzato. Un cookie, «lang», ricorda la lingua in cui hai letto il sito l’ultima volta, così la home si apre in quella la volta successiva.',
    websiteAnalytics:
      'babybookai.com usa Google Analytics per contare le visite e vedere quali pagine vengono lette, tramite cookie di Google. Riceve il tuo indirizzo IP, il browser e le pagine che visiti, mai nulla dall’app. Puoi bloccarlo con le impostazioni del browser o con il componente aggiuntivo di disattivazione di Google (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). L’informativa di Google: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'babybookai.com non usa script di analisi né di pubblicità.',
    childrenTitle: 'Minori',
    children:
      'BabyBookAI è per i genitori. Non è rivolta ai minori e non raccogliamo consapevolmente informazioni da minori. Le foto del tuo bebè sono usate solo per stampare il tuo libro.',
    securityTitle: 'Sicurezza',
    security:
      'Tutto ciò che l’app invia viaggia cifrato (HTTPS). I file dei libri sono conservati in una cartella privata sul nostro server e arrivano alla tipografia solo tramite un link firmato che scade.',
    changesTitle: 'Modifiche',
    changes: 'Pubblicheremo qui eventuali modifiche e aggiorneremo la data in alto.',
  },

  terms: {
    title: 'Termini di utilizzo e di vendita | BabyBookAI',
    description:
      'I termini per usare l’app BabyBookAI e ordinare un album foto del neonato stampato: le tue foto, ordini e pagamento, stampa e consegna, e libri danneggiati.',
    crumb: 'Termini',
    eyebrow: 'Termini',
    h1: 'Termini di utilizzo e di vendita',
    updatedLabel: 'Ultimo aggiornamento:',
    updated: '9 ottobre 2026',
    intro: `Questi termini si applicano all’app ${SITE.name} e ai libri stampati ordinati tramite essa. ${SITE.name} è un prodotto di ${PUBLISHER.name} («noi»). Usando l’app o ordinando un libro li accetti. Domande: ${EMAIL}.`,
    sections: [
      {
        title: 'L’app',
        paragraphs: [
          'L’app è gratuita da scaricare e da usare. Fare un libro e sfogliarlo non costa nulla; paghi solo se ordini un libro stampato. Puoi usare l’app per uso personale e non commerciale. Possiamo migliorare, cambiare o interrompere funzioni dell’app nel tempo.',
        ],
      },
      {
        title: 'Le tue foto e i tuoi testi',
        list: [
          'Le tue foto e i tuoi testi restano tuoi. Non rivendichiamo alcun diritto su di essi.',
          `Quando ordini, autorizzi noi e la nostra tipografia a usare il file del libro solo per stampare, spedire e assistere quell’ordine, come descrive l’${a('privacy', 'informativa sulla privacy')}.`,
          'Confermi di avere il diritto di stampare le foto e i testi del tuo libro e che nulla in esso è illecito. Possiamo rifiutarci di stampare un libro che lo sia.',
        ],
      },
      {
        title: 'Ordini e pagamento',
        list: [
          'Devi avere almeno 18 anni per effettuare un ordine.',
          `L’app mostra il prezzo completo prima del pagamento, nella valuta del tuo paese, con spedizione inclusa. Un libro da ${BOOK.pagesMin} pagine costa {price}; le pagine in più, fino a ${BOOK.pagesMax}, costano di più e il prezzo è indicato nell’app.`,
          'Il pagamento avviene con carta tramite Stripe. Non vediamo mai i dati della tua carta.',
          'Controlliamo ogni ordine prima che vada in stampa. Se non possiamo evadere un ordine, lo annulliamo e ti rimborsiamo per intero.',
          'Prima di pagare, guarda tutto il libro: foto, nomi, date e ortografia. Ogni libro viene stampato esattamente come lo approvi.',
        ],
      },
      {
        title: 'Stampa e consegna',
        paragraphs: [
          'I libri sono stampati su ordinazione dal nostro partner di stampa e spediti all’indirizzo che indichi, nei paesi elencati dall’app. I tempi di consegna indicati sono stime. Controlla bene l’indirizzo: non possiamo reindirizzare un libro già spedito.',
        ],
      },
      {
        title: 'Libri danneggiati, stampati male o persi',
        paragraphs: [
          `Ogni libro è realizzato per te, quindi non possiamo riprenderlo se cambi idea. Se il tuo libro arriva danneggiato, ha un difetto di stampa o non arriva, scrivi a ${EMAIL} entro 30 giorni dalla consegna (o dalla data di consegna prevista) con l’e-mail del tuo ordine e, se puoi, una foto. Ristamperemo il libro o ti rimborseremo. Nulla in questi termini limita i diritti che hai secondo la legge sui consumatori del luogo in cui vivi.`,
        ],
      },
      {
        title: 'Responsabilità',
        paragraphs: [
          'Ci impegniamo perché l’app e i libri siano fatti bene, ma l’app è fornita così com’è. Nei limiti consentiti dalla legge, la nostra responsabilità per un ordine è limitata a quanto hai pagato per esso. Non siamo responsabili delle foto perse sul tuo telefono: l’app legge le tue foto ma non le cancella mai.',
        ],
      },
      {
        title: 'Modifiche',
        paragraphs: [
          'Possiamo aggiornare questi termini. Le modifiche vengono pubblicate qui con una nuova data e si applicano agli ordini effettuati dopo quella data.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Pagina non trovata | BabyBookAI',
    description: 'Questa pagina non esiste. Trova da qui l’album foto del neonato di BabyBookAI.',
    h1: 'Questa pagina si è persa',
    body: 'Il link potrebbe essere vecchio. Questi sono buoni punti da cui partire:',
  },
};
