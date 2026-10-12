import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Français de France, avec vous, comme l'app (librofotos lib/l10n/app_fr.arb).
 * Le mot cherché est « album photo » (Semrush, France, oct. 2026 ; les données
 * sont dans docs/keywords/fr) : « album photo bébé » ouvre les titres et les H1.
 * « Livre photo », le mot des imprimeurs, se cherche trois fois moins mais mène
 * aux mêmes résultats : il reste dans les sous-titres et le texte. « Album »
 * désigne aussi l'album en tissu, à pochettes ou à remplir : chaque page dit
 * vite que le nôtre arrive imprimé et déjà mis en page.
 */
const a = linker('fr');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const fr: Copy = {
  ui: {
    skip: 'Aller au contenu',
    homeAria: `${SITE.name}, accueil`,
    mainNav: 'Principal',
    nav: { babyPhotoBook: 'Album photo bébé', firstYear: 'Première année' },
    getApp: 'Télécharger',
    language: 'Langue',
    breadcrumb: "Fil d'Ariane",
    home: 'Accueil',
    footer: {
      tagline: 'La première année de votre bébé, transformée en album photo pour vous.',
      productOf: 'Un produit de',
      book: "L'album photo",
      company: 'Société',
      links: {
        babyPhotoBook: 'Album photo bébé',
        firstYear: 'Album photo de la première année',
        boy: 'Album photo bébé garçon',
        girl: 'Album photo bébé fille',
        ideas: "Idées d'album photo bébé",
        about: 'À propos',
        support: 'Aide et questions',
        privacy: 'Confidentialité',
        terms: 'Conditions',
      },
      rights: 'Tous droits réservés.',
    },
    closing: {
      title: "Faites l'album en quelques minutes. Gardez-le pour toujours.",
      body: 'Téléchargez BabyBookAI, donnez-lui le prénom de votre bébé et les dates, et voyez sa première année mise en page avant que votre café refroidisse.',
    },
    free: "Téléchargement gratuit. Vous ne payez que l'album imprimé.",
    badges: {
      aria: `Télécharger ${SITE.name}`,
      appStore: "Télécharger dans l'App Store",
      googlePlay: 'Disponible sur Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store : bientôt',
    },
    qr: {
      aria: `QR code pour télécharger ${SITE.name}`,
      title: 'Sur votre ordinateur ?',
      body: "Scannez-le avec l'appareil photo de votre téléphone pour obtenir l'app.",
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'Trois étapes, et vous ne faites que la plus simple',
      steps: [
        {
          title: 'Donnez-lui le prénom et les dates',
          body: 'Le prénom de votre bébé va sur la couverture. La plupart des livres commencent le jour de sa naissance et se terminent à son premier anniversaire.',
        },
        {
          title: 'Il parcourt votre galerie',
          body: "Sur votre téléphone, il trouve les photos de l'année, écarte les floues et les quasi-doublons, garde la meilleure de chaque moment et les classe mois par mois.",
        },
        {
          title: 'Feuilletez, remplacez, commandez',
          body: "L'album est mis en page pour vous. Remplacez la photo qui ne vous plaît pas, retouchez les textes si vous le souhaitez, et il est imprimé avec une couverture rigide et livré chez vous.",
        },
      ],
    },
    tones: {
      pink: 'Rose doux',
      blue: 'Bleu doux',
      neutral: 'Crème classique',
      caption: 'Les trois teintes de papier. Toute la page prend la teinte.',
    },
    stork: 'Une cigogne portant un balluchon',
    spreadMonth: 'Premier mois',
    defaultDescription:
      'BabyBookAI transforme les photos déjà dans votre téléphone en un album photo imprimé, à couverture rigide, de la première année de votre bébé. Il choisit, classe et met en page les photos pour vous.',
    ogImageAlt: "BabyBookAI : un album photo imprimé de la première année d'un bébé",
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Une double page BabyBookAI, « Premier mois » : sept photos d’une bébé avec sa famille et ses grands-parents',
    screens: {
      setup: "Écran de départ de BabyBookAI : un prénom et une date de naissance, puis la durée du livre et le prix",
      selection: 'Écran de résultats de BabyBookAI : 225 photos gardées, mois par mois',
      order: 'Écran de commande de BabyBookAI : 30 pages, couverture rigide, livraison comprise',
    },
    translationNote:
      "Ceci est une traduction du texte anglais. En cas de différence entre les deux, c'est la version anglaise qui s'applique.",
    schema: {
      appFeatures: [
        "Choisit les photos sur le téléphone : seul le livre terminé est envoyé à l'impression",
        'Garde la photo la plus nette de chaque moment et écarte doublons et rafales',
        'Classe les photos mois par mois selon leur date de prise de vue',
        `Met en page un album photo carré à couverture rigide de ${BOOK.pagesMin} à ${BOOK.pagesMax} pages`,
        "Envoie le livre à l'impression et le livre chez vous",
      ],
      bookName: 'Album photo bébé BabyBookAI',
      bookDescription: `Un album photo (livre photo) carré à couverture rigide de 28 × 28 cm sur la première année d'un bébé, de ${BOOK.pagesMin} à ${BOOK.pagesMax} pages sur papier satiné 170 g, réalisé par l'app BabyBookAI à partir des photos de votre téléphone.`,
      pages: 'Pages',
      binding: 'Reliure',
      bindingValue: 'Couverture rigide',
    },
  },

  home: {
    title: "BabyBookAI — L'album photo de bébé qui se fait tout seul",
    description:
      'La première année de votre bébé en album photo imprimé, à couverture rigide, réalisé avec les photos déjà dans votre téléphone. BabyBookAI les choisit, les classe et les met en page pour vous.',
    eyebrow: 'Album photo de la première année de bébé',
    h1: "L'album photo de votre bébé qui se fait tout seul",
    lead: 'Il parcourt la galerie de votre téléphone, choisit les meilleures photos de chaque mois et met en page un album photo à couverture rigide. Vous le feuilletez, remplacez ce qui ne vous plaît pas, et il arrive imprimé chez vous.',
    homework: {
      title: "Chaque album de bébé est un devoir. Sauf celui-ci.",
      body: "Les photos, vous les avez déjà prises : des centaines, chaque mois. En faire un album, c'est la partie pour laquelle personne n'a le temps avec un bébé à la maison.",
      yourPart: 'Votre part',
      ways: [
        { name: 'Un livre de naissance à remplir', effort: 'Imprimer, découper, coller et écrire, chaque mois', verdict: 'La plupart arrêtent vers le troisième mois.' },
        { name: 'Une app de livre hebdomadaire', effort: 'Quelques minutes chaque semaine, pendant 52 semaines', verdict: 'Le travail est toujours là, en 52 morceaux.' },
        { name: 'BabyBookAI', effort: "Rien jusqu'à la fin de l'année", verdict: "Puis un coup d'œil, et c'est fait." },
      ],
    },
    book: {
      eyebrow: "L'album",
      title: 'Une vraie couverture rigide, faite pour être gardée',
      body: "Le prénom de votre bébé et sa plus belle photo sur la couverture. Le jour de sa naissance en première page. Puis une double page pour chaque mois, dans l'ordre où tout s'est passé, chacune mise en page pour ses photos, jusqu'au premier anniversaire.",
      specs: [
        { label: 'Format', value: '{size}, carré' },
        { label: 'Couverture', value: 'Rigide, mate' },
        { label: 'Pages', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Papier', value: 'Satiné 170 g' },
        { label: 'Mise en page', value: 'Une double page par mois' },
        { label: 'Livraison', value: '16 pays' },
      ],
      more: "Voir l'album photo bébé en détail",
    },
    privacy: {
      title: 'Les photos de votre bébé restent sur votre téléphone',
      body: "BabyBookAI choisit les photos sur votre téléphone, pas sur un serveur. Rien n'est envoyé pendant qu'il parcourt votre galerie ni pendant que vous feuilletez le livre. Ce n'est qu'au moment de la commande que les pages terminées partent chez l'imprimeur. Pas d'abonnement, et aucun droit sur les photos de votre enfant.",
    },
    birthday: {
      title: 'Prêt pour le premier anniversaire',
      body: "L'année se termine, le livre est fait. Commandez-le la semaine de la fête, ou faites-en un aussi pour les grands-parents. Leur cadeau préféré, c'est celui où il y a le bébé.",
      more: "Comment fonctionne l'album photo de la première année",
    },
    faqTitle: 'Les questions des parents',
    faq: [
      {
        question: 'Qu’est-ce que BabyBookAI ?',
        answer:
          'BabyBookAI est une app qui transforme les photos déjà dans votre téléphone en un album photo imprimé à couverture rigide de la première année de votre bébé. Elle choisit les photos, les classe mois par mois et compose chaque page pour vous. L’app est gratuite : vous ne payez que l’album imprimé.',
      },
      {
        question: 'Comment BabyBookAI choisit-il les photos ?',
        answer:
          "Il lit la date de chaque photo et ne garde que celles de la première année de votre bébé. Puis il écarte les photos floues, garde l'image la plus nette de chaque rafale et repère la même photo enregistrée deux fois (une copie WhatsApp et l'originale, par exemple) pour garder la meilleure. Les photos que vous avez mises en favori et celles que vous avez le plus partagées obtiennent les meilleures places : la couverture et les pleines pages.",
      },
      {
        question: 'Mes photos sont-elles envoyées quelque part ?',
        answer:
          "Pas pour faire le livre. Toute la sélection se fait sur votre téléphone. Ce n'est qu'au moment de la commande que les pages du livre terminé sont envoyées à l'imprimeur.",
      },
      {
        question: "Puis-je changer les photos qu'il a choisies ?",
        answer:
          'Oui. Vous feuilletez le livre sur votre téléphone et remplacez toute photo qui ne vous plaît pas. Vous pouvez aussi modifier les textes de chaque page et ajouter un petit mot à vous.',
      },
      {
        question: "À quoi ressemble l'album ?",
        answer: `Un album carré à couverture rigide de {size}, couverture mate, de ${BOOK.pagesMin} à ${BOOK.pagesMax} pages sur papier satiné 170 g. Le prénom de votre bébé et sa plus belle photo vont sur la couverture, la date de naissance ouvre le livre, et chaque mois a sa propre double page.`,
      },
      {
        question: 'Et si certaines photos sont dans WhatsApp ou iCloud ?',
        answer:
          "Les photos enregistrées depuis WhatsApp sont dans votre galerie, il les trouve donc comme les autres. Sur iPhone, BabyBookAI peut aussi utiliser vos photos iCloud pour les mois où le téléphone en a peu. Sur Android, il lit les photos enregistrées sur le téléphone.",
      },
      {
        question: 'Ça ne marche que pour les douze premiers mois ?',
        answer:
          "La plupart des parents font la première année, de la naissance au premier anniversaire. Vous choisissez le jour où le livre commence et sa durée : 6, 12 ou 18 mois, avec une double page par mois.",
      },
      {
        question: 'Combien ça coûte ?',
        answer: `L'app est gratuite, tout comme faire le livre et le feuilleter. Vous ne payez qu'au moment de commander l'album imprimé : {price} pour ${BOOK.pagesMin} pages, livraison comprise, avec des pages en plus jusqu'à ${BOOK.pagesMax} moyennant un supplément. Vous voyez le prix final avant de payer.`,
      },
      {
        question: 'Est-ce disponible sur iPhone et Android ?',
        answer:
          "BabyBookAI est déjà gratuit sur Google Play, pour Android. L'app iPhone arrive bientôt. Les livres sont livrés dans 16 pays d'Amérique du Nord, d'Europe et d'Asie.",
      },
    ],
  },

  babyPhotoBook: {
    title: 'Album photo bébé imprimé, fait avec votre téléphone | BabyBookAI',
    description: `Un album photo bébé livré imprimé et déjà mis en page : BabyBookAI choisit les meilleures photos de votre téléphone et les classe par mois. Couverture rigide, {size}.`,
    crumb: 'Album photo bébé',
    eyebrow: 'Album photo bébé',
    h1: 'Album photo bébé, fait avec les photos de votre téléphone',
    lead: "BabyBookAI trouve les meilleures photos de votre bébé sur votre téléphone, les classe mois par mois et met en page un livre photo carré à couverture rigide, livré imprimé chez vous. Aucune photo à coller ni à glisser dans un modèle, et rien à téléverser pour les choisir. Vous n'avez qu'à le feuilleter.",
    features: {
      title: 'Tout ce que doit être un album photo de bébé. Sans le travail.',
      items: [
        {
          title: 'Il choisit les photos',
          body: 'Parmi des centaines de photos par mois, il garde la plus nette de chaque moment et laisse de côté les floues, les rafales et les doublons.',
        },
        {
          title: 'Il les classe par mois',
          body: "Chaque photo va là où elle doit aller, selon sa date, pour que le livre raconte l'année dans l'ordre où elle s'est déroulée.",
        },
        {
          title: 'Il met en page chaque page',
          body: 'Chaque double page est conçue pour ses photos : une grande photo et une grille, une pleine page, ou une photo sur les deux pages.',
        },
        {
          title: 'Il les imprime nettes',
          body: "Une photo ne va que là où elle a assez de pixels pour bien s'imprimer. Une petite copie venue d'une messagerie obtient un petit emplacement, jamais la couverture.",
        },
      ],
    },
    howTitle: 'Comment faire un album photo bébé en trois étapes',
    inside: {
      eyebrow: "À l'intérieur de l'album",
      title: 'Du jour de sa naissance à son premier anniversaire',
      tour: [
        { label: 'La couverture', body: "Le prénom de votre bébé et la plus belle photo de l'année, choisie parmi celles que vous avez préférées et le plus partagées." },
        { label: 'La première page', body: "Le jour de sa naissance, avec un petit dessin à la plume d'une cigogne portant un balluchon." },
        {
          label: 'Une double page par mois',
          body: "Chaque mois dans sa saison : des touches douces et les motifs les plus légers, petits oiseaux, étoiles ou nuages, jamais plus voyants que les photos.",
        },
        { label: 'La dernière page', body: "Un gâteau de premier anniversaire pour clore l'année : et puis il a eu un an." },
      ],
    },
    personal: {
      eyebrow: 'Personnalisé',
      title: 'Un album photo de bébé personnalisé, sans la partie fastidieuse',
      body: "Un livre photo personnalisé, c'est souvent une soirée entière dans un éditeur. Ici, les photos sont déjà en place : le rendre unique ne prend que quelques gestes.",
      items: [
        { title: 'Son prénom sur la couverture', body: "Et les dates de votre choix : depuis le jour de sa naissance ou n'importe quel jour, pour 6, 12 ou 18 mois." },
        { title: 'Trois teintes de papier', body: 'Crème classique, rose doux ou bleu doux. Toute la page prend la teinte, pas seulement le bord.' },
        {
          title: 'Des textes à réécrire',
          body: 'Chaque page arrive avec de courtes phrases comme « Rêve en grand, petit trésor ». Gardez-les, modifiez-les ou ajoutez votre propre mot où vous voulez.',
        },
      ],
      colors: `Vous cherchez des couleurs ? Voyez l'${a('girl', 'album photo bébé fille')} et l'${a('boy', 'album photo bébé garçon')}.`,
    },
    specs: {
      title: "L'album, en détail",
      items: [
        { label: 'Format', value: 'Album photo imprimé (livre photo), carré, à couverture rigide' },
        { label: 'Taille', value: '{size}' },
        { label: 'Pages', value: `De ${BOOK.pagesMin} à ${BOOK.pagesMax}, une double page par mois` },
        { label: 'Papier', value: 'Papier satiné 170 g, impression en couleur' },
        { label: 'Couverture', value: 'Couverture rigide pelliculée mate' },
        { label: 'Impression', value: 'Imprimé à la demande, livré dans 16 pays' },
      ],
    },
    gift: {
      title: 'Le cadeau que réclament les grands-parents',
      body: "Un téléphone plein de photos, ça ne se fait pas passer autour de la table. Un livre photo bébé, si. C'est le cadeau du premier anniversaire, de la fête des mères ou des pères, et celui que les grands-parents gardent sur la table du salon.",
    },
    why: {
      title: 'Pourquoi un livre photo bébé, quand les photos sont déjà dans votre téléphone',
      paragraphs: [
        "Pendant la première année d'un bébé, les parents prennent des centaines de photos par mois. Elles vivent dans la galerie, entre captures d'écran et tickets de caisse, et défilent sans qu'on les regarde. Un album photo de bébé, c'est l'inverse : quelques-unes des meilleures, dans l'ordre, sur papier, dans un livre que tout le monde peut prendre en main.",
        "Le plus dur n'a jamais été l'impression. Ce sont les heures à choisir : laquelle des quarante photos du bain, à quel mois appartient cette photo, comment placer une photo verticale à côté d'une horizontale. C'est là que la plupart des albums de bébé s'arrêtent, quelque part vers le troisième mois.",
        `BabyBookAI fait cette partie pour vous, sur votre téléphone. Il lit les dates, garde la photo la plus nette de chaque moment, donne à chaque mois sa double page et met en page un album qui semble conçu, pas déversé. Il vous reste la partie agréable : le feuilleter. Pour toute la première année, de la maternité au gâteau, voyez l'${a('firstYear', 'album photo de la première année de bébé')}.`,
      ],
    },
    faqTitle: "Questions sur l'album photo bébé",
    faq: [
      {
        question: 'Est-ce un album où il faut coller les photos ?',
        answer:
          "Non. C'est un album photo imprimé : les photos sont imprimées sur les pages, déjà placées et mises en page, comme dans un livre photo. Pas de pochettes, rien à coller ni à remplir.",
      },
      {
        question: 'Est-ce un album photo en tissu pour bébé ?',
        answer:
          "Non. C'est un livre à couverture rigide et aux pages en papier, fait pour être gardé et feuilleté en famille, pas un album en tissu que le bébé manipule.",
      },
      {
        question: 'Peut-on en faire un album photo de naissance ?',
        answer:
          "Oui. L'album commence le jour que vous choisissez, le plus souvent celui de la naissance : la première page porte la date de naissance, et les photos de la maternité ouvrent le premier mois.",
      },
      {
        question: "Quelle est la taille de l'album photo bébé ?",
        answer:
          "C'est un album carré à couverture rigide de {size}. Le carré est le seul format où les photos verticales et horizontales d'un téléphone tiennent toutes les deux sans qu'aucune ne soit mal recadrée.",
      },
      {
        question: 'Combien de pages compte-t-il ?',
        answer: `Entre ${BOOK.pagesMin} et ${BOOK.pagesMax}. BabyBookAI propose de ${BOOK.pagesMin} à ${BOOK.pagesSuggestedMax} pages pour une première année, une double page par mois, et vous pouvez ajouter des pages jusqu'à ${BOOK.pagesMax} moyennant un supplément.`,
      },
      {
        question: 'Les photos de mon téléphone seront-elles nettes à l’impression ?',
        answer:
          "Chaque photo n'est placée que là où elle a assez de pixels pour bien s'imprimer. Une petite copie, comme une photo enregistrée depuis une messagerie, va dans un emplacement plus petit au lieu d'occuper une pleine page ou la couverture.",
      },
      {
        question: "Puis-je personnaliser l'album ?",
        answer:
          'Oui. Le prénom de votre bébé va sur la couverture, vous choisissez les dates et vous pouvez prendre un papier rose doux, bleu doux ou crème classique. Chaque page arrive avec de courtes phrases à réécrire, et vous pouvez ajouter votre propre mot où vous voulez.',
      },
      {
        question: 'Un visage peut-il finir dans le pli central ?',
        answer:
          "Non. Les mises en page tiennent les photos hors du pli central. La seule photo qui le traverse est une photo placée exprès sur les deux pages, et celles-là sont choisies pour ça.",
      },
      {
        question: 'Combien de temps faut-il pour le faire ?',
        answer:
          "Quelques minutes. L'essentiel, c'est votre téléphone qui parcourt la galerie ; ensuite vous feuilletez le livre, remplacez ce que vous voulez et commandez.",
      },
    ],
  },

  firstYear: {
    title: 'Album photo bébé 1ère année, de la naissance à 1 an | BabyBookAI',
    description:
      "L'album photo de la première année de bébé, mois par mois, de la naissance à 1 an, fait avec les photos de votre téléphone. BabyBookAI choisit, classe et met en page.",
    crumb: 'Album photo de la première année',
    eyebrow: 'Album photo bébé 1ère année',
    h1: "L'album photo de la 1ère année de bébé, mois par mois et déjà fait",
    lead: "Douze mois, une double page pour chacun, de la maternité au gâteau. BabyBookAI construit l'album avec les photos déjà dans votre téléphone et vous le recevez imprimé : rien à tenir à jour pendant l'année.",
    months: {
      eyebrow: 'Mois par mois',
      title: 'Un album photo bébé mois par mois, sans la séance photo de chaque mois',
      body: "Pas de cartes étapes, pas la même photo sur la même couverture chaque mois. Le livre suit les photos que vous avez prises de toute façon, dans l'ordre où vous les avez prises. Chaque bébé a son propre calendrier.",
      items: [
        { n: 'Page 1', moment: 'Le jour de sa naissance' },
        { n: 'Mois 1', moment: 'Le retour à la maison' },
        { n: 'Mois 2', moment: 'Les premiers vrais sourires' },
        { n: 'Mois 3', moment: 'Sur le ventre' },
        { n: 'Mois 4', moment: 'Les premiers éclats de rire' },
        { n: 'Mois 5', moment: 'Tout attraper' },
        { n: 'Mois 6', moment: 'Les premières purées' },
        { n: 'Mois 7', moment: 'Assis tout seul' },
        { n: 'Mois 8', moment: 'En mouvement' },
        { n: 'Mois 9', moment: 'Coucou, caché !' },
        { n: 'Mois 10', moment: 'Se mettre debout' },
        { n: 'Mois 11', moment: 'Presque à marcher' },
        { n: 'Mois 12', moment: 'Le premier anniversaire' },
        { n: 'Dernière page', moment: 'Et puis il a eu un an' },
      ],
    },
    unfinished: {
      title: "Pourquoi la plupart des albums de la première année ne sont jamais finis",
      paragraphs: [
        "Un album photo à remplir ou un livre de naissance vous demandent d'imprimer, coller et écrire chaque mois. Une app de livre hebdomadaire vous demande quelques minutes chaque semaine, cinquante-deux semaines de suite. Aucun des deux ne semble énorme, jusqu'au cinquième mois, quand vous dormez par tranches de deux heures et que le livre a trois semaines de retard.",
        "Les photos, elles, ont continué d'arriver. Vous n'avez jamais arrêté d'en prendre. BabyBookAI part de là : quand l'année est finie, il parcourt votre galerie et fait le livre avec ce que vous avez déjà. Votre part prend quelques minutes, une seule fois.",
      ],
      compare: [
        { label: 'Livre de naissance à remplir', value: 'Chaque mois' },
        { label: 'App de livre hebdomadaire', value: '52 semaines' },
        { label: 'BabyBookAI', value: 'Une fois, en minutes' },
      ],
    },
    howTitle: "Comment se fait l'album photo de la première année",
    birthday: {
      title: 'À temps pour le premier anniversaire',
      body: "Vous choisissez les dates : le livre peut se terminer la semaine de la fête, ou le lendemain. Les mois avec peu de photos ne posent pas de problème : la mise en page suit les photos, et un mois avec une seule belle photo a une page faite pour une. Envie d'aller au-delà de la première année ? Un livre peut couvrir jusqu'à 18 mois.",
      more: "Voir l'album photo bébé en détail",
    },
    faqTitle: "Questions sur l'album photo de la première année",
    faq: [
      {
        question: 'Est-ce un album à remplir à la main ?',
        answer:
          "Non. L'album de la première année BabyBookAI arrive imprimé et terminé : les photos sont déjà placées sur leurs pages, mois par mois. Vous n'écrivez que si vous voulez changer une phrase ou ajouter un mot à vous.",
      },
      {
        question: "Quand faire l'album photo de la première année ?",
        answer:
          "Quand vous voulez après le premier anniversaire, ou avant si vous voulez le livre pour la fête : vous choisissez les dates qu'il couvre. Comme BabyBookAI lit les photos que vous avez déjà, il n'y a rien à tenir à jour pendant l'année.",
      },
      {
        question: "Et si j'ai peu de photos de certains mois ?",
        answer:
          "La mise en page suit les photos. Un mois avec des dizaines de belles photos a une double page complète ; un mois avec une seule belle photo a une page faite pour une photo. Sur iPhone, BabyBookAI regarde aussi Photos iCloud pour les mois où le téléphone en a peu.",
      },
      {
        question: "Le livre peut-il commencer après la naissance, ou couvrir plus d'un an ?",
        answer:
          'Oui. La plupart des livres vont de la naissance au premier anniversaire, mais vous choisissez le jour où il commence et sa durée : 6, 12 ou 18 mois, avec une double page par mois.',
      },
      {
        question: 'Que trouve-t-on sur la première et la dernière page ?',
        answer:
          "La première page porte le jour de la naissance de votre bébé, avec un petit dessin d'une cigogne portant un balluchon. La dernière clôt l'année avec un gâteau de premier anniversaire.",
      },
      {
        question: 'Dois-je ajouter des photos chaque semaine ?',
        answer:
          "Non. C'est tout l'intérêt de BabyBookAI : il part des photos déjà dans votre téléphone, donc rien à téléverser chaque semaine et aucun retard à rattraper.",
      },
    ],
  },

  girl: {
    title: 'Album photo bébé fille qui se remplit tout seul | BabyBookAI',
    description:
      'Un album photo rose pour votre bébé fille, réalisé avec les photos de votre téléphone. BabyBookAI choisit ses plus belles photos, les classe mois par mois et met en page un livre à couverture rigide.',
    crumb: 'Album photo bébé fille',
    eyebrow: 'Album photo bébé fille',
    h1: "L'album photo bébé fille qui se remplit tout seul",
    lead: "Sa première année est déjà dans votre téléphone, en centaines de photos. BabyBookAI choisit les meilleures, place chacune dans son mois et met en page un album à couverture rigide en rose doux, avec son prénom sur la couverture.",
    empty: {
      title: 'La plupart des albums de bébé fille arrivent vides',
      paragraphs: [
        "Un album rose à pochettes, un livre de naissance à remplir, un modèle dans un éditeur photo : tous attendent que vous imprimiez, choisissiez et placiez une année de photos. Avec un bébé à la maison, cette soirée-là arrive rarement.",
        "Celui-ci commence plein. Il lit les dates de vos photos, garde la plus nette de chaque moment, laisse de côté les floues et les douze quasi-copies du même sourire, et donne à chaque mois sa double page. Vous le feuilletez et remplacez ce que vous préférez ne pas garder.",
      ],
    },
    howTitle: 'Comment faire un album photo bébé fille en quelques minutes',
    inside: {
      eyebrow: "Dans son album",
      title: 'Du jour de sa naissance à son premier anniversaire',
      items: [
        { title: 'Son prénom sur la couverture', body: "Avec la plus belle photo de son année, choisie parmi celles que vous avez mises en favori et le plus partagées." },
        { title: 'Le jour de sa naissance', body: "La première page, avec un petit dessin à la plume d'une cigogne portant un balluchon." },
        { title: 'Une double page par mois', body: 'Son premier sourire, son premier bain, sa première purée, chacun dans le mois où il a eu lieu.' },
        { title: "Un gâteau pour clore l'année", body: 'La dernière page termine le livre avec son premier anniversaire.' },
      ],
    },
    details: {
      title: 'Un souvenir fait pour être manipulé',
      body: `Un livre carré à couverture rigide de {size}, couverture mate, de ${BOOK.pagesMin} à ${BOOK.pagesMax} pages sur papier satiné 170 g, à {price} livraison comprise. Carré, parce que ses photos verticales et horizontales y tiennent toutes sans qu'aucune ne soit mal recadrée.`,
      more: `Vous préférez le bleu ou le crème ? Voyez l'${a('boy', 'album photo bébé garçon')}, ou tout sur l'${a('babyPhotoBook', 'album photo bébé')}.`,
    },
    faqTitle: "Questions sur l'album photo bébé fille",
    faq: [
      {
        question: 'Puis-je faire son album photo en rose ?',
        answer:
          "Oui. Le livre existe en trois teintes de papier : rose doux, bleu doux et crème classique. Le rose teinte chaque page, pas seulement le bord, et les motifs légers de chaque mois prennent la même teinte. Vous pouvez la changer autant de fois que vous voulez avant de commander.",
      },
      {
        question: 'Son prénom va-t-il sur la couverture ?',
        answer:
          "Oui. Son prénom et la plus belle photo de son année vont sur la couverture, choisie parmi les photos que vous avez mises en favori et le plus partagées. La première page porte le jour de sa naissance.",
      },
      {
        question: 'Puis-je modifier les textes des pages ?',
        answer:
          "Oui. Chaque page arrive avec de courtes phrases comme « Notre petit rayon de soleil ». Gardez-les, réécrivez-les ou ajoutez votre propre mot n'importe où sur la page.",
      },
      {
        question: "Et si elle n'a pas encore un an ?",
        answer:
          "Vous choisissez les dates. Un livre peut couvrir 6, 12 ou 18 mois à partir du jour de votre choix : vous pouvez en faire un à six mois et un autre pour son premier anniversaire.",
      },
    ],
  },

  boy: {
    title: 'Album photo bébé garçon réalisé avec votre téléphone | BabyBookAI',
    description:
      'Un album photo bébé garçon en bleu doux, réalisé pour vous avec les photos de votre téléphone. BabyBookAI choisit ses plus belles photos, les classe par mois et met en page un livre à couverture rigide.',
    crumb: 'Album photo bébé garçon',
    eyebrow: 'Album photo bébé garçon',
    h1: 'Album photo bébé garçon, réalisé avec les photos de votre téléphone',
    lead: "Donnez à BabyBookAI son prénom et sa date de naissance. Il parcourt les photos de votre téléphone, garde ses plus beaux moments de chaque mois et met en page un album à couverture rigide en bleu doux. Vous n'avez qu'à le feuilleter.",
    thousands: {
      title: 'Des milliers de photos, un seul album',
      body: "Le plus dur dans un album photo de bébé, ça n'a jamais été l'impression. C'est le choix. BabyBookAI fait ce choix sur votre téléphone : rien n'est envoyé avant votre commande.",
      steps: [
        { label: '5 450 photos', body: 'Une année de galerie : bains, siestes, le même sourire quarante fois.' },
        { label: '225 gardées', body: "La plus nette de chaque moment, sans rafales, sans quasi-copies, sans captures d'écran." },
        { label: 'Un livre', body: 'Une double page par mois, dans l’ordre, prête à feuilleter et à commander.' },
      ],
      note: "Les chiffres viennent d'une vraie année, celle de l'écran ci-dessus. Les vôtres seront différents.",
    },
    howTitle: 'Comment faire un album photo bébé garçon',
    colors: {
      eyebrow: 'Personnalisé',
      title: 'Bleu doux, son prénom, vos mots',
      paragraphs: [
        "Son prénom et la plus belle photo de son année vont sur la couverture. Choisissez le bleu doux, ou le crème ou le rose si vous préférez : la teinte colore chaque page, avec de très légers motifs de petits oiseaux, d'étoiles ou de nuages derrière les photos.",
        "Chaque page arrive avec une courte phrase à garder ou à réécrire, et vous pouvez ajouter votre propre mot où vous voulez. La première page porte le jour de sa naissance ; la dernière clôt l'année avec un gâteau de premier anniversaire.",
      ],
    },
    details: {
      title: "L'album lui-même",
      body: `Un livre carré à couverture rigide de {size}, couverture mate, de ${BOOK.pagesMin} à ${BOOK.pagesMax} pages sur papier satiné 170 g. {price} livraison comprise, imprimé à la demande et livré chez vous. Chaque photo ne va que là où elle a les pixels pour s'imprimer nette : une petite copie venue d'une messagerie ne finit jamais sur la couverture.`,
      more: `Vous le faites pour une fille ? Voyez l'${a('girl', 'album photo bébé fille')}. Pour toute l'année, mois par mois, voyez l'${a('firstYear', 'album photo de la première année')}.`,
    },
    faqTitle: "Questions sur l'album photo bébé garçon",
    faq: [
      {
        question: 'Puis-je faire son album photo en bleu ?',
        answer:
          'Oui. Choisissez bleu doux, rose doux ou crème classique. La teinte colore chaque page, et les motifs légers de chaque mois la prennent aussi. Vous pouvez changer avant de commander.',
      },
      {
        question: 'Son prénom va-t-il sur la couverture ?',
        answer:
          "Oui. Son prénom et la plus belle photo de son année vont sur la couverture. La première page porte le jour de sa naissance, et la dernière clôt l'année avec un gâteau de premier anniversaire.",
      },
      {
        question: "Choisira-t-il des photos de lui, et pas de tout le monde ?",
        answer:
          "Il choisit parmi les photos des dates que vous indiquez, garde la plus nette de chaque moment et écarte les doublons. Ensuite vous feuilletez le livre et remplacez ou retirez toute photo que vous ne voulez pas.",
      },
      {
        question: 'Est-ce un bon cadeau pour les grands-parents ?',
        answer:
          "C'est celui qu'ils réclament. Un téléphone plein de photos, ça ne se fait pas passer autour de la table ; un livre à couverture rigide de sa première année, si.",
      },
    ],
  },

  ideas: {
    title: 'Album photo bébé : 25 idées et exemples de textes | BabyBookAI',
    headline: 'Album photo bébé : 25 idées et exemples de textes',
    description:
      "Idées d'album photo bébé pour la première année : comment l'organiser, quoi photographier, des mises en page qui marchent, des exemples de textes et combien de photos choisir.",
    crumb: "Idées d'album photo bébé",
    eyebrow: 'Idées',
    h1: "Idées d'album photo bébé : 25 façons de raconter la première année",
    byline: "Par l'équipe BabyBookAI",
    date: '9 octobre 2026',
    lead: "Au premier anniversaire, la plupart des parents ont des milliers de photos de leur bébé et aucune idée de par où commencer. Ces idées d'album photo bébé sont celles qui marchent sur papier : comment organiser l'année, quoi photographier tant qu'il est encore temps, des mises en page qui ont l'air conçues et des légendes à emprunter.",
    tocTitle: 'Dans cet article',
    toc: {
      organize: 'Façons d’organiser l’album',
      photograph: 'Quoi photographier tant qu’il est temps',
      layout: 'Idées de pages et de mise en page',
      captions: 'Exemples de textes',
      choosing: 'Combien de photos, et lesquelles',
      gifts: 'Idées cadeaux',
    },
    organize: {
      title: "Façons d'organiser un album photo bébé",
      body: "Choisissez un fil conducteur avant de choisir la moindre photo. C'est lui qui décide de ce qui entre dans le livre et de ce qui reste dans le téléphone.",
      items: [
        {
          title: 'Mois par mois',
          body: "L'album photo classique de la première année : une double page par mois, dans l'ordre. En le feuilletant, on le voit grandir. Et il règle la question la plus difficile, où va chaque photo, avec sa seule date.",
        },
        {
          title: 'Par premières fois',
          body: 'Premier bain, premier sourire, première purée, premiers pas, première coupe de cheveux. Chacune a sa page. Idéal pour un livre plus court, ou comme section après les mois.',
        },
        {
          title: 'Par saison',
          body: "Quatre chapitres : la première neige, la première plage, les premières feuilles d'automne. Bien quand les photos se concentrent autour des voyages et des vacances.",
        },
        {
          title: 'Au même endroit, chaque mois',
          body: "La même chaise, le même doudou pour l'échelle, photographiés le même jour chaque mois. Si vous avez commencé, donnez à la série sa propre double page à la fin, côte à côte.",
        },
        {
          title: 'Une journée ordinaire',
          body: "Une journée normale, du matin au coucher : le biberon, la sieste, le bain, la promenade. Le quotidien, c'est ce qu'on oublie en premier.",
        },
        {
          title: "Ceux qui l'ont tenu dans leurs bras",
          body: "Une page pour chaque grand-parent, les frères et sœurs, le parrain et la marraine, l'amie qui venait tous les dimanches. Les photos avec d'autres personnes sont celles qu'un enfant cherche plus tard.",
        },
      ],
    },
    photograph: {
      title: "Quoi photographier tant qu'il est temps",
      body: "Si l'année n'est pas encore finie, voici les photos que les parents regrettent le plus de ne pas avoir au moment de faire le livre :",
      items: [
        'Ses mains et ses pieds à côté des vôtres, tous les quelques mois',
        'Sa chambre telle qu’elle est, avant qu’elle ne change',
        'Le désordre des repas, pas seulement les portraits au visage propre',
        'Endormi dans des endroits improbables : le siège auto, l’épaule, le panier du chien',
        'Un plan large de la pièce, pas seulement des gros plans',
        'Vous aussi sur la photo : passez le téléphone à quelqu’un d’autre',
        'Les ratés : la photo floue, le bâillement, les pleurs avant le sourire',
      ],
    },
    layout: {
      title: 'Idées de pages et de mise en page',
      body: "La différence entre un livre qui a l'air conçu et un livre qui a l'air rempli tient surtout à quelques règles.",
      items: [
        {
          title: 'Une grande photo, puis une grille',
          body: 'La meilleure photo du mois en grand à gauche, cinq ou six plus petites à droite. Chaque double page a ainsi un endroit où le regard se pose d’abord.',
        },
        {
          title: 'Une pleine page pour la photo qui la mérite',
          body: "Tous les mois n'ont pas besoin d'une grille. Un beau portrait seul sur une page en dit plus que six bonnes photos.",
        },
        {
          title: 'Les visages hors du pli',
          body: "La plupart des livres photo sont collés au dos : le centre d'une double page s'incurve. Gardez chaque photo sur sa page et ne traversez le pli que volontairement.",
        },
        {
          title: 'Mélangez gros plans et plans larges',
          body: "Un gros plan à côté d'un gros plan, c'est répétitif. Placez à côté un plan large de la pièce ou du parc.",
        },
        {
          title: 'Laissez du papier',
          body: "Le blanc, c'est ce qui donne à une page un air conçu plutôt que rempli. Une phrase courte dans un espace vide fait plus qu'une photo de plus.",
        },
        {
          title: 'Choisissez le carré',
          body: "Les photos de téléphone sont verticales ou horizontales. Sur une page carrée, les deux tiennent sans qu'aucune ne soit mal recadrée.",
        },
      ],
      figcaption: 'Une grande photo, une grille à côté, rien sur le pli.',
    },
    captions: {
      title: 'Exemples de textes pour un album photo bébé',
      body: "Des légendes courtes : une ligne par page. Des dates, des lieux, des surnoms et les détails que vous oublierez (la chanson qui arrêtait les pleurs, le premier mot) valent mieux que de longs paragraphes. Quelques-unes à emprunter :",
      items: [
        'Rêve en grand, petit trésor',
        'Notre petit rayon de soleil',
        'Tu es tellement adorable',
        'Petites mains, grands projets',
        'La maison, c’est là où tu es',
        'Le mois où tu as trouvé tes pieds',
        'Dix doigts, dix orteils, tout un cœur',
        'Bonjour le monde',
        'Tu es tant aimé',
        'Et puis tu as eu un an',
      ],
    },
    choosing: {
      title: 'Combien de photos, et lesquelles',
      tips: [
        {
          lead: 'Visez 10 à 15 par mois.',
          body: "Un livre de la première année de 30 pages contient environ 150 photos sans être chargé. Sur une vraie année que nous avons étudiée, 225 photos ont été gardées sur 5 450.",
        },
        { lead: 'Gardez une photo par moment.', body: "Les téléphones prennent des rafales ; le livre a besoin de l'image la plus nette, pas des douze." },
        {
          lead: 'Attention aux copies venues des messageries.',
          body: "Une photo enregistrée depuis une app de messagerie est une copie plus petite. Elle s'imprime bien en petit, mais pas en pleine page ni sur la couverture. Si vous avez l'originale, utilisez-la.",
        },
      ],
      product: `Cette partie, le choix, c'est là que la plupart des albums de bébé s'arrêtent. C'est la partie que ${a('home', 'BabyBookAI')} fait pour vous : il parcourt votre galerie sur votre téléphone, garde la photo la plus nette de chaque moment, classe l'année mois par mois et met le livre en page ; vous n'avez qu'à le feuilleter. Voyez comment se fait l'${a('firstYear', 'album photo de la première année')}.`,
    },
    gifts: {
      title: 'Idées cadeaux',
      items: [
        { lead: 'Pour le premier anniversaire.', body: 'Terminez le livre la semaine de la fête et faites-le passer autour de la table.' },
        {
          lead: 'Pour les grands-parents.',
          body: `Le cadeau qu'ils gardent sur la table du salon. Un ${a('girl', 'album photo bébé fille')} en rose ou un ${a('boy', 'album photo bébé garçon')} en bleu, avec le prénom du bébé sur la couverture.`,
        },
      ],
    },
    box: {
      title: 'Pas beaucoup de soirées libres ?',
      body: "BabyBookAI transforme les photos déjà dans votre téléphone en un album photo à couverture rigide de la première année, en quelques minutes.",
    },
    faqTitle: "Questions sur l'album photo bébé",
    faq: [
      {
        question: 'Combien de photos mettre dans un album photo bébé ?',
        answer:
          "Pour une première année, 10 à 15 photos par mois fonctionnent bien : 120 à 180 en tout. Un livre de 30 pages en contient environ 150 sans paraître chargé, avec de la place pour une grande photo sur la plupart des doubles pages.",
      },
      {
        question: "Que mettre dans l'album photo de la première année de bébé ?",
        answer:
          "Le jour de sa naissance, une double page pour chaque mois dans l'ordre, les premières fois que vous avez photographiées (sourire, bain, repas, pas), les personnes qui l'ont tenu dans leurs bras, et un premier anniversaire pour clore l'année. De courtes légendes avec des dates aident plus que de longs textes.",
      },
      {
        question: "Qu'écrire dans un album photo bébé ?",
        answer:
          "Des phrases courtes : une date, un lieu, un surnom, un poids, ou ce que vous aurez oublié dans cinq ans (la chanson qui arrêtait les pleurs, son premier mot). Une ligne par page suffit.",
      },
      {
        question: 'Peut-on imprimer les photos du téléphone dans un livre photo ?',
        answer:
          "Oui. Les photos prises avec l'appareil du téléphone s'impriment nettes, même en pleine page. Les copies enregistrées depuis les messageries sont plus petites ; elles s'impriment bien dans un petit emplacement, pas en pleine page ni sur la couverture.",
      },
    ],
  },

  about: {
    title: "À propos de BabyBookAI | L'album photo de bébé qui se fait tout seul",
    description:
      "BabyBookAI est une app de Photo-to-Text qui transforme les photos de votre téléphone en album photo imprimé de la première année de votre bébé. Qui nous sommes et comment nous le faisons.",
    crumb: 'À propos',
    eyebrow: 'À propos',
    h1: "Un album de bébé pour les parents qui n'ont pas le temps d'en faire un",
    paragraphs: [
      "Pendant la première année d'un bébé, les parents prennent des milliers de photos. Très peu finissent dans un album, parce qu'en faire un demande des heures à choisir, trier et placer, avec un bébé à la maison.",
      `${SITE.name} fait ce travail pour vous. Il lit les photos de votre téléphone, garde le meilleur de chaque moment, les classe mois par mois et met en page un livre à couverture rigide. Vous le feuilletez, changez ce que vous voulez, et il est imprimé et livré chez vous.`,
    ],
    beliefsTitle: 'Ce à quoi nous tenons',
    beliefs: [
      {
        title: 'La sélection est le produit',
        body: "N'importe qui peut imprimer 200 photos. Ce qui compte, c'est de choisir les 150 meilleures parmi des milliers et de les mettre en page pour que le livre ait l'air composé, pas généré.",
      },
      {
        title: 'Vos photos restent sur votre téléphone',
        body: "Les photos sont choisies sur votre téléphone. Rien n'est envoyé pour les choisir ; seul le livre terminé part, quand vous le commandez, pour être imprimé.",
      },
      {
        title: 'Pas de devoirs',
        body: "Pas de rappels hebdomadaires, pas de journal, pas d'abonnement. Les photos, vous les avez déjà prises ; le livre se fait avec elles, une fois, quand vous le voulez.",
      },
      {
        title: 'Un livre fait pour durer',
        body: 'Un livre carré à couverture rigide de {size} sur papier satiné 170 g, imprimé à la demande par notre partenaire d’impression et livré chez vous.',
      },
    ],
    who: {
      title: `Un produit ${PUBLISHER.name}`,
      body: `${SITE.name} est fait par <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, une petite entreprise qui crée des cadeaux personnalisés à partir de photos. Son logo figure au dos de chaque livre. Questions, idées ou un livre qui n'est pas réussi : écrivez à <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Voyez l'${a('babyPhotoBook', 'album photo bébé')}, lisez la ${a('privacy', 'politique de confidentialité')} ou trouvez de l'aide sur la ${a('support', "page d'aide")}.`,
  },

  support: {
    title: 'Aide BabyBookAI | Questions sur votre album photo bébé',
    description:
      "Aide pour l'app BabyBookAI et votre commande : trouver les photos, les photos WhatsApp, enregistrer votre livre, prix et livraison, et comment nous joindre.",
    crumb: 'Aide et questions',
    eyebrow: 'Aide',
    h1: 'Comment pouvons-nous vous aider ?',
    lead: "La plupart des réponses sont ci-dessous. Pour tout le reste, sur l'app ou une commande, écrivez-nous : une personne vous répondra.",
    emailLabel: 'E-mail',
    emailNote: "C'est au sujet d'une commande ? Écrivez-nous depuis l'adresse avec laquelle vous avez commandé, pour que nous la retrouvions.",
    appTitle: "L'app et votre commande",
    bookTitle: 'Le livre et sa fabrication',
    more: `Plus : la ${a('privacy', 'politique de confidentialité')}, les ${a('terms', 'conditions')} et ${a('about', 'qui nous sommes')}.`,
    faq: [
      {
        question: "L'app a trouvé peu de photos. Pourquoi ?",
        answer:
          "BabyBookAI ne voit que les photos qu'on l'autorise à voir. Quand votre téléphone vous le demande, choisissez « Tout autoriser » : avec « Sélectionner des photos », il ne voit que celles que vous avez choisies. Sur Android, il lit les photos enregistrées sur le téléphone : celles qui ne sont que dans Google Photos en ligne ne sont pas trouvées.",
      },
      {
        question: 'Où sont mes photos WhatsApp ?',
        answer:
          "Les photos enregistrées depuis WhatsApp sont dans la galerie de votre téléphone, la recherche les trouve donc. Elles servent à compléter les mois avec peu de photos de l'appareil, et si la même photo est deux fois sur votre téléphone, la copie la plus nette et la plus grande est gardée.",
      },
      {
        question: "Mon livre est-il enregistré si je ferme l'app ?",
        answer:
          "Oui. Votre livre est enregistré sur votre téléphone au fur et à mesure, avec vos photos, vos textes et vos couleurs, et il s'ouvre là où vous l'avez laissé. Commencer un nouveau livre le remplace.",
      },
      {
        question: 'Combien coûtent le livre et la livraison ?',
        answer: `{price} pour ${BOOK.pagesMin} pages, livraison comprise. Les pages en plus, jusqu'à ${BOOK.pagesMax}, sont en supplément. Le prix final s'affiche dans votre devise avant de payer.`,
      },
      {
        question: 'Dans quels pays livrez-vous ?',
        answer:
          'États-Unis, Royaume-Uni, Canada, Australie, Irlande, Allemagne, Autriche, France, Belgique, Espagne, Italie, Pays-Bas, Portugal, Japon, Corée du Sud et Chine.',
      },
      {
        question: 'Comment payer ?',
        answer: 'Par carte, via Stripe. Nous ne voyons jamais les données de votre carte.',
      },
      {
        question: 'Il y a un problème avec ma commande. Que faire ?',
        answer: `Écrivez à ${EMAIL} depuis l'adresse avec laquelle vous avez commandé, avec une photo si le livre est arrivé abîmé.`,
      },
      {
        question: 'Y a-t-il une app iPhone ?',
        answer: "Pas encore. BabyBookAI est déjà sur Google Play pour Android, et l'app iPhone arrive bientôt.",
      },
      {
        question: 'Comment supprimer mes données ?',
        answer: `Vos photos ne quittent jamais votre téléphone pour faire le livre, et supprimer l'app supprime le livre enregistré. Pour une commande passée, écrivez à ${EMAIL} et nous supprimons ce que nous détenons et que la loi ne nous oblige pas à garder. La politique de confidentialité donne les détails.`,
      },
    ],
  },

  privacy: {
    title: 'Politique de confidentialité | BabyBookAI',
    description:
      "Ce que BabyBookAI fait de vos photos et des données de votre commande : votre galerie est lue sur votre téléphone, et seul le livre terminé est envoyé pour être imprimé.",
    crumb: 'Confidentialité',
    eyebrow: 'Confidentialité',
    h1: 'Les photos de votre bébé restent sur votre téléphone',
    updatedLabel: 'Politique de confidentialité · Dernière mise à jour :',
    updated: '9 octobre 2026',
    intro: `BabyBookAI (« nous ») est une app qui réalise un livre photo imprimé de la première année de votre bébé à partir des photos de votre téléphone. C'est un produit Photo-to-Text. Contact : ${EMAIL}.`,
    shortTitle: 'En bref',
    short: [
      'Votre photothèque est lue <strong>sur votre téléphone</strong>. Nous ne la voyons jamais.',
      "Quand vous commandez un livre, le fichier du livre terminé (les photos choisies, vos textes, le prénom de votre bébé) nous est envoyé, ainsi qu'à notre imprimeur.",
      "Pour le livrer, nous avons besoin de votre nom, de votre e-mail et de votre adresse. Le paiement est géré par Stripe ; nous ne voyons jamais votre carte.",
      "L'app n'a ni publicité, ni statistiques, ni pistage, ni compte.",
    ],
    phoneTitle: "Ce que l'app fait sur votre téléphone",
    phone: [
      "Pour choisir les photos, l'app lit les photos de votre photothèque des mois que vous indiquez : leurs dates, tailles, netteté et doublons. Cela se fait uniquement sur votre téléphone, et rien sur votre photothèque n'est envoyé nulle part.",
      "<strong>Reconnaître votre bébé (facultatif).</strong> Si vous activez l'interrupteur de reconnaissance avant la recherche, l'app apprend le visage de votre bébé à partir des photos que vous touchez, sur votre téléphone, pour garder les enfants des autres hors du livre. Les données du visage n'existent que dans la mémoire du téléphone pendant la recherche et sont effacées à la fin ; elles ne sont jamais enregistrées ni envoyées. L'interrupteur est désactivé par défaut et n'est pas proposé dans l'Illinois, au Texas ni dans l'État de Washington.",
      "Le livre en cours est enregistré sur votre téléphone pour que vous puissiez y revenir. Il contient les photos qu'il comprend, vos textes et l'emplacement des visages dans ces photos (pour les cadrer), jamais de données de visage. Commencer un nouveau livre l'efface, tout comme désinstaller l'app.",
    ],
    receiveTitle: 'Ce que nous recevons, et pourquoi',
    table: {
      head: ['Quoi', 'Pourquoi', 'Partagé avec'],
      rows: [
        ['Le fichier du livre : les photos de votre livre, vos textes, le prénom de votre bébé et son année de naissance', 'Pour imprimer votre livre', 'Gelato (notre imprimeur)'],
        ['Nombre de pages, devise', 'Pour calculer le prix de la commande', '—'],
        ['Votre nom, e-mail, adresse de livraison, téléphone (facultatif)', 'Pour livrer le livre et envoyer le reçu', 'Gelato (livraison), Stripe (reçu)'],
        ['Données de paiement', 'Pour encaisser le paiement', 'Stripe uniquement ; nous ne les recevons jamais'],
      ],
    },
    receiveNote:
      "Nous utilisons ces informations uniquement pour fabriquer, livrer et suivre votre commande. Nous ne les vendons pas, ne les utilisons pas pour la publicité et n'utilisons vos photos que pour imprimer votre livre.",
    othersTitle: 'Qui d’autre les traite',
    others: [
      '<strong>Stripe</strong> traite les paiements (<a class="lnk" href="https://stripe.com/fr/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> imprime et livre le livre (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      "Notre serveur de commandes, où le fichier du livre attend d'arriver chez l'imprimeur.",
    ],
    keepTitle: 'Combien de temps nous les gardons',
    keep: [
      'Les commandes jamais payées sont supprimées, avec leur fichier, au bout de 7 jours.',
      "Pour les commandes payées, nous gardons les données de commande et le fichier du livre le temps nécessaire pour livrer la commande, vous assister et respecter les règles fiscales et comptables. Vous pouvez nous demander de les supprimer à tout moment (voir ci-dessous).",
    ],
    rightsTitle: 'Vos droits, et comment supprimer vos données',
    rights: [
      `Vous pouvez nous demander une copie de vos données, leur correction ou leur suppression en écrivant à ${EMAIL} depuis l'adresse avec laquelle vous avez commandé, en mentionnant BabyBookAI. Nous répondons sous 30 jours. Pour supprimer vos données, écrivez « supprimer mes données » : nous supprimons alors les données de votre commande et le fichier de votre livre, sauf ce que la loi nous oblige à conserver, et demandons à Gelato et à Stripe de supprimer les leurs.`,
      "Si vous vivez dans l'Union européenne ou au Royaume-Uni, vous pouvez aussi saisir votre autorité de protection des données (en France, la CNIL). Nous traitons les données de votre commande parce que vous nous avez demandé de fabriquer et de livrer votre livre et, si vous l'utilisez, la reconnaissance faciale uniquement avec votre consentement, que vous pouvez retirer en désactivant l'interrupteur.",
    ],
    websiteTitle: 'Ce site',
    websiteLanguage:
      "babybookai.com lit le pays d'où vient votre visite, tel que l'indique notre hébergeur (Cloudflare), pour afficher les prix dans votre devise et, lors d'une première visite, la page dans votre langue. Ce n'est pas enregistré. Un cookie, « lang », retient la langue dans laquelle vous avez lu le site en dernier, pour que la page d'accueil s'ouvre dans cette langue la prochaine fois.",
    websiteAnalytics:
      'babybookai.com utilise Google Analytics pour compter les visites et voir quelles pages sont lues, au moyen de cookies déposés par Google. Il reçoit votre adresse IP, votre navigateur et les pages visitées, jamais rien de l’app. Vous pouvez le bloquer dans les réglages de votre navigateur ou avec le module de désactivation de Google (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). La politique de Google : <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: "babybookai.com n'utilise aucun script de statistiques ni de publicité.",
    childrenTitle: 'Enfants',
    children:
      "BabyBookAI s'adresse aux parents. L'app ne vise pas les enfants, et nous ne collectons pas sciemment d'informations sur des enfants. Les photos de votre bébé servent uniquement à imprimer votre livre.",
    securityTitle: 'Sécurité',
    security:
      "Tout ce que l'app envoie voyage chiffré (HTTPS). Les fichiers des livres sont stockés dans un dossier privé de notre serveur et n'arrivent chez l'imprimeur que par un lien signé qui expire.",
    changesTitle: 'Modifications',
    changes: 'Nous publierons ici toute modification et mettrons à jour la date ci-dessus.',
  },

  terms: {
    title: "Conditions d'utilisation et de vente | BabyBookAI",
    description:
      "Les conditions pour utiliser l'app BabyBookAI et commander un livre photo bébé imprimé : vos photos, commandes et paiement, impression et livraison, et livres abîmés.",
    crumb: 'Conditions',
    eyebrow: 'Conditions',
    h1: "Conditions d'utilisation et de vente",
    updatedLabel: 'Dernière mise à jour :',
    updated: '9 octobre 2026',
    intro: `Ces conditions s'appliquent à l'app ${SITE.name} et aux livres imprimés commandés avec elle. ${SITE.name} est un produit ${PUBLISHER.name} (« nous »). En utilisant l'app ou en commandant un livre, vous les acceptez. Questions : ${EMAIL}.`,
    sections: [
      {
        title: "L'app",
        paragraphs: [
          "L'app est gratuite à télécharger et à utiliser. Faire un livre et le feuilleter ne coûte rien ; vous ne payez que si vous commandez un livre imprimé. Vous pouvez utiliser l'app pour votre usage personnel, non commercial. Nous pouvons améliorer, modifier ou arrêter des fonctions de l'app au fil du temps.",
        ],
      },
      {
        title: 'Vos photos et vos textes',
        list: [
          'Vos photos et vos textes restent les vôtres. Nous ne revendiquons aucun droit sur eux.',
          `Quand vous commandez, vous nous autorisez, ainsi que notre imprimeur, à utiliser le fichier du livre uniquement pour imprimer, livrer et suivre cette commande, comme le décrit la ${a('privacy', 'politique de confidentialité')}.`,
          "Vous confirmez avoir le droit d'imprimer les photos et les textes de votre livre, et que rien n'y est illégal. Nous pouvons refuser d'imprimer un livre qui le serait.",
        ],
      },
      {
        title: 'Commandes et paiement',
        list: [
          'Vous devez avoir 18 ans ou plus pour passer commande.',
          `L'app affiche le prix complet avant le paiement, dans la devise de votre pays, livraison comprise. Un livre de ${BOOK.pagesMin} pages coûte {price} ; les pages en plus, jusqu'à ${BOOK.pagesMax}, coûtent davantage et leur prix est indiqué dans l'app.`,
          'Le paiement se fait par carte via Stripe. Nous ne voyons jamais les données de votre carte.',
          "Nous vérifions chaque commande avant l'impression. Si nous ne pouvons pas honorer une commande, nous l'annulons et vous remboursons intégralement.",
          "Avant de payer, parcourez tout le livre : photos, prénoms, dates et orthographe. Chaque livre est imprimé exactement tel que vous l'approuvez.",
        ],
      },
      {
        title: 'Impression et livraison',
        paragraphs: [
          "Les livres sont imprimés à la demande par notre partenaire d'impression et livrés à l'adresse que vous indiquez, dans les pays proposés par l'app. Les délais de livraison affichés sont des estimations. Vérifiez bien l'adresse : nous ne pouvons pas réacheminer un livre une fois expédié.",
        ],
      },
      {
        title: 'Livres abîmés, mal imprimés ou perdus',
        paragraphs: [
          `Chaque livre est fabriqué pour vous : nous ne pouvons donc pas le reprendre si vous changez d'avis. Si votre livre arrive abîmé, présente un défaut d'impression ou n'arrive pas, écrivez à ${EMAIL} dans les 30 jours suivant la livraison (ou la date de livraison prévue) avec l'e-mail de votre commande et, si possible, une photo. Nous réimprimerons le livre ou vous rembourserons. Rien dans ces conditions ne limite les droits que vous accorde le droit de la consommation de votre pays.`,
        ],
      },
      {
        title: 'Responsabilité',
        paragraphs: [
          "Nous faisons tout pour que l'app et les livres soient réussis, mais l'app est fournie telle quelle. Dans la mesure permise par la loi, notre responsabilité pour une commande est limitée au montant que vous avez payé. Nous ne sommes pas responsables des photos perdues sur votre téléphone : l'app lit vos photos mais ne les supprime jamais.",
        ],
      },
      {
        title: 'Modifications',
        paragraphs: [
          'Nous pouvons mettre à jour ces conditions. Les modifications sont publiées ici avec une nouvelle date et s’appliquent aux commandes passées après cette date.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Page introuvable | BabyBookAI',
    description: "Cette page n'existe pas. Retrouvez l'album photo bébé BabyBookAI à partir d'ici.",
    h1: "Cette page s'est égarée",
    body: 'Le lien est peut-être ancien. Voici de bons points de départ :',
  },
};
