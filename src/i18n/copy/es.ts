import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Español de España, con tú, como la app (librofotos lib/l10n/app_es.arb).
 * La palabra que se busca es "fotolibro" (Keyword Tool, España, oct 2026):
 * encabeza títulos y H1; "álbum de fotos" va en el texto.
 */
const a = linker('es');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const es: Copy = {
  ui: {
    skip: 'Ir al contenido',
    homeAria: `${SITE.name}, inicio`,
    mainNav: 'Principal',
    nav: { babyPhotoBook: 'Fotolibro del bebé', firstYear: 'Su primer año' },
    getApp: 'Descargar',
    language: 'Idioma',
    breadcrumb: 'Ruta de navegación',
    home: 'Inicio',
    footer: {
      tagline: 'El primer año de tu bebé, convertido en un libro para ti.',
      productOf: 'Un producto de',
      book: 'El libro',
      company: 'Empresa',
      links: {
        babyPhotoBook: 'Fotolibro del bebé',
        firstYear: 'Fotolibro del primer año',
        boy: 'Álbum de fotos de bebé niño',
        girl: 'Álbum de fotos de bebé niña',
        ideas: 'Ideas para el fotolibro del bebé',
        about: 'Sobre nosotros',
        support: 'Ayuda y preguntas',
        privacy: 'Privacidad',
        terms: 'Condiciones',
      },
      rights: 'Todos los derechos reservados.',
    },
    closing: {
      title: 'Haz el libro en minutos. Guárdalo para siempre.',
      body: 'Descarga BabyBookAI, dale el nombre de tu bebé y las fechas, y verás su primer año maquetado antes de que se te enfríe el café.',
    },
    free: 'Descarga gratis. Solo pagas el libro impreso.',
    badges: {
      aria: `Descargar ${SITE.name}`,
      appStore: 'Descárgalo en el App Store',
      googlePlay: 'Disponible en Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: muy pronto',
    },
    qr: {
      aria: `Código QR para descargar ${SITE.name}`,
      title: '¿Estás en el ordenador?',
      body: 'Escanéalo con la cámara del móvil para descargar la app.',
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos, y tú solo haces el fácil',
      steps: [
        {
          title: 'Dile el nombre y las fechas',
          body: 'El nombre de tu bebé va en la portada. La mayoría de los libros empiezan el día que nació y terminan en su primer cumpleaños.',
        },
        {
          title: 'Revisa la galería del móvil',
          body: 'En tu móvil, encuentra las fotos de ese año, descarta las movidas y las casi repetidas, se queda con la mejor de cada momento y las ordena mes a mes.',
        },
        {
          title: 'Hojea, cambia y pide',
          body: 'El libro sale maquetado. Cambia la foto que no te convenza, retoca los textos si quieres, y el libro de tapa dura se imprime y te llega a casa.',
        },
      ],
    },
    tones: {
      pink: 'Rosa suave',
      blue: 'Azul suave',
      neutral: 'Crema clásico',
      caption: 'Los tres tonos de papel. Toda la página toma el tono.',
    },
    stork: 'Una cigüeña que lleva un hatillo',
    spreadMonth: 'Primer mes',
    defaultDescription:
      'BabyBookAI convierte las fotos que ya tienes en el móvil en un fotolibro de tapa dura del primer año de tu bebé. Elige, ordena y maqueta las fotos por ti.',
    ogImageAlt: 'BabyBookAI: un fotolibro impreso del primer año de un bebé',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Una doble página de BabyBookAI, «Primer mes»: siete fotos de una bebé con su familia y sus abuelos',
    screens: {
      setup: 'Pantalla de inicio de BabyBookAI: un nombre y una fecha de nacimiento, luego la duración del libro y el precio',
      selection: 'Pantalla de resultados de BabyBookAI: 225 fotos elegidas, por meses',
      order: 'Pantalla del pedido de BabyBookAI: 30 páginas, tapa dura, envío incluido',
    },
    translationNote:
      'Esta es una traducción del texto en inglés. Si hubiera alguna diferencia entre las dos, se aplica la versión en inglés.',
    schema: {
      appFeatures: [
        'Elige las fotos en el móvil: solo el libro terminado se envía a imprimir',
        'Se queda con la foto más nítida de cada momento y descarta duplicados y ráfagas',
        'Ordena las fotos mes a mes por la fecha en que se hizo cada una',
        `Maqueta un libro cuadrado de tapa dura de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas`,
        'Envía el libro a imprimir y te lo manda a casa',
      ],
      bookName: 'Fotolibro del bebé BabyBookAI',
      bookDescription: `Un fotolibro cuadrado de tapa dura de 28 × 28 cm del primer año de un bebé, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas en papel satinado de 170 g, hecho por la app BabyBookAI con las fotos de tu móvil.`,
      pages: 'Páginas',
      binding: 'Encuadernación',
      bindingValue: 'Tapa dura',
    },
  },

  home: {
    title: 'BabyBookAI — El fotolibro del bebé que se hace solo',
    description:
      'El primer año de tu bebé en un fotolibro impreso de tapa dura, hecho con las fotos que ya tienes en el móvil. BabyBookAI las elige, las ordena y las maqueta por ti.',
    eyebrow: 'Fotolibro del primer año del bebé',
    h1: 'El libro del bebé que se hace solo',
    lead: 'Revisa la galería de tu móvil, elige las mejores fotos de cada mes y maqueta un libro de tapa dura. Tú lo hojeas, cambias lo que no te convenza, y en camino.',
    homework: {
      title: 'Todo libro del bebé es deberes. Menos este.',
      body: 'Las fotos ya las hiciste: cientos, cada mes. Convertirlas en un libro es la parte para la que nadie tiene tiempo con un bebé en casa.',
      yourPart: 'Tu parte',
      ways: [
        { name: 'Un libro del bebé para rellenar', effort: 'Imprimir, recortar, pegar y escribir, cada mes', verdict: 'Casi todos lo dejan hacia el tercer mes.' },
        { name: 'Una app de libro semanal', effort: 'Unos minutos cada semana, 52 semanas', verdict: 'El trabajo sigue ahí, en 52 trozos.' },
        { name: 'BabyBookAI', effort: 'Nada hasta que acaba el año', verdict: 'Luego un vistazo, y listo.' },
      ],
    },
    book: {
      eyebrow: 'El libro',
      title: 'Un libro de tapa dura de verdad, hecho para guardarlo',
      body: 'El nombre de tu bebé y su mejor foto en la portada. El día que nació en la primera página. Después, una doble página para cada mes, en el orden en que pasó, cada una maquetada para las fotos que lleva, hasta su primer cumpleaños.',
      specs: [
        { label: 'Tamaño', value: '{size}, cuadrado' },
        { label: 'Cubierta', value: 'Tapa dura, mate' },
        { label: 'Páginas', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Papel', value: 'Satinado de 170 g' },
        { label: 'Maquetación', value: 'Una doble página por mes' },
        { label: 'Envíos a', value: '16 países' },
      ],
      more: 'Ver el fotolibro del bebé en detalle',
    },
    privacy: {
      title: 'Las fotos de tu bebé no salen de tu móvil',
      body: 'BabyBookAI elige las fotos en tu móvil, no en un servidor. No se sube nada mientras revisa tu galería ni mientras hojeas el libro. Solo cuando haces el pedido se envían las páginas terminadas a la imprenta. Sin suscripción y sin ningún derecho sobre las fotos de tu hijo.',
    },
    birthday: {
      title: 'Listo para su primer cumpleaños',
      body: 'Acaba el año y el libro está hecho. Pídelo la semana de la fiesta, o haz otro para los abuelos. Su regalo favorito es el que tiene al bebé dentro.',
      more: 'Cómo funciona el fotolibro del primer año',
    },
    faqTitle: 'Lo que preguntan los padres',
    faq: [
      {
        question: '¿Cómo elige BabyBookAI las fotos?',
        answer:
          'Lee la fecha en que se hizo cada foto y se queda solo con las del primer año de tu bebé. Después descarta las movidas, se queda con el fotograma más nítido de cada ráfaga y detecta la misma foto guardada dos veces (una copia de WhatsApp y la original, por ejemplo) para quedarse con la mejor. Las fotos que marcaste como favoritas y las que más compartiste se llevan los mejores sitios: la portada y las páginas completas.',
      },
      {
        question: '¿Se suben mis fotos a algún sitio?',
        answer:
          'Para hacer el libro, no. Toda la selección se hace en tu móvil. Solo cuando haces el pedido se envían a la imprenta las páginas del libro terminado.',
      },
      {
        question: '¿Puedo cambiar las fotos que ha elegido?',
        answer:
          'Sí. Hojeas el libro en el móvil y cambias cualquier foto que no te convenza. También puedes editar los textos de cada página y añadir una nota tuya.',
      },
      {
        question: '¿Cómo es el libro?',
        answer: `Un libro cuadrado de tapa dura de {size}, con cubierta mate y de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas en papel satinado de 170 g. El nombre de tu bebé y su mejor foto van en la portada, la fecha de nacimiento abre el libro y cada mes tiene su propia doble página.`,
      },
      {
        question: '¿Y si algunas fotos están en WhatsApp o en iCloud?',
        answer:
          'Las fotos guardadas desde WhatsApp están en la galería del móvil, así que las encuentra como cualquier otra. En iPhone, BabyBookAI también puede usar tus fotos de iCloud para los meses con pocas fotos en el móvil. En Android lee las fotos guardadas en el móvil.',
      },
      {
        question: '¿Solo sirve para los doce primeros meses?',
        answer:
          'La mayoría hace el primer año, del nacimiento al primer cumpleaños. Tú eliges el día en que empieza y cuánto dura: 6, 12 o 18 meses, con una doble página por mes.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: `La app es gratis, y hacer el libro y hojearlo también. Solo pagas cuando pides el libro impreso de tapa dura: {price} por ${BOOK.pagesMin} páginas, envío incluido, y páginas extra hasta ${BOOK.pagesMax} con un coste adicional. Ves el precio final antes de pagar.`,
      },
      {
        question: '¿Está para iPhone y para Android?',
        answer:
          'BabyBookAI ya está gratis en Google Play, para Android. La app para iPhone llegará muy pronto. Los libros se envían a 16 países de Norteamérica, Europa y Asia.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Fotolibro del bebé hecho con las fotos de tu móvil | BabyBookAI',
    description: `Un fotolibro del bebé de tapa dura hecho para ti: BabyBookAI elige las mejores fotos de tu móvil, las ordena por meses y maqueta cada página. {size}, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas.`,
    crumb: 'Fotolibro del bebé',
    eyebrow: 'Fotolibro del bebé',
    h1: 'Fotolibro del bebé, hecho con las fotos de tu móvil',
    lead: 'BabyBookAI encuentra las mejores fotos de tu bebé en tu móvil, las ordena mes a mes y maqueta un libro cuadrado de tapa dura. Sin subir nada, sin arrastrar fotos a plantillas. Tú solo lo hojeas.',
    features: {
      title: 'Todo lo que debe ser un álbum de fotos del bebé. Sin el trabajo.',
      items: [
        {
          title: 'Elige las fotos',
          body: 'De cientos de fotos al mes, se queda con la más nítida de cada momento y deja fuera las movidas, las ráfagas y los duplicados.',
        },
        {
          title: 'Las ordena por meses',
          body: 'Cada foto va donde le toca, por la fecha en que se hizo, para que el libro cuente el año en el orden en que pasó.',
        },
        {
          title: 'Maqueta cada página',
          body: 'Cada doble página se diseña para las fotos que lleva: una foto grande y una cuadrícula, una página completa o una foto que ocupa las dos páginas.',
        },
        {
          title: 'Las imprime nítidas',
          body: 'Una foto solo va donde tiene píxeles para imprimirse bien. Una copia pequeña de un chat va en un hueco pequeño, nunca en la portada.',
        },
      ],
    },
    howTitle: 'Cómo hacer un fotolibro del bebé en tres pasos',
    inside: {
      eyebrow: 'Dentro del libro',
      title: 'Del día en que nació a su primer cumpleaños',
      tour: [
        { label: 'La portada', body: 'El nombre de tu bebé y la mejor foto del año, elegida entre las que más te gustaron y más compartiste.' },
        { label: 'La primera página', body: 'El día en que nació, con un pequeño dibujo a pluma de una cigüeña con su hatillo.' },
        {
          label: 'Una doble página por mes',
          body: 'Cada mes en su estación: detalles suaves y los motivos más ligeros, pajaritos, estrellas o nubes, nunca más llamativos que las fotos.',
        },
        { label: 'La última página', body: 'Una tarta de primer cumpleaños para cerrar el año: y entonces cumplió uno.' },
      ],
    },
    personal: {
      eyebrow: 'Personalizado',
      title: 'Un álbum de fotos del bebé personalizado, sin la parte pesada',
      body: 'Un fotolibro personalizado suele significar una tarde entera en un editor. Aquí las fotos ya están colocadas, así que hacerlo tuyo son unos pocos toques.',
      items: [
        { title: 'Su nombre en la portada', body: 'Y las fechas que elijas: desde el día en que nació o desde el día que quieras, para 6, 12 o 18 meses.' },
        { title: 'Tres tonos de papel', body: 'Crema clásico, rosa suave o azul suave. Toda la página toma el tono, no solo el borde.' },
        {
          title: 'Textos que puedes reescribir',
          body: 'Cada página trae frases cortas como «Sueña en grande, pequeño amor». Déjalas, cámbialas o añade tu propia nota donde quieras.',
        },
      ],
      colors: `¿Buscas colores? Mira el ${a('girl', 'álbum de fotos de bebé niña')} y el ${a('boy', 'álbum de fotos de bebé niño')}.`,
    },
    specs: {
      title: 'El libro, en detalle',
      items: [
        { label: 'Formato', value: 'Fotolibro cuadrado de tapa dura' },
        { label: 'Tamaño', value: '{size}' },
        { label: 'Páginas', value: `De ${BOOK.pagesMin} a ${BOOK.pagesMax}, una doble página por mes` },
        { label: 'Papel', value: 'Papel satinado de 170 g, impreso a todo color' },
        { label: 'Cubierta', value: 'Tapa dura con plastificado mate' },
        { label: 'Impresión', value: 'Impreso bajo pedido, con envíos a 16 países' },
      ],
    },
    gift: {
      title: 'El regalo que piden los abuelos',
      body: 'Un móvil lleno de fotos no se puede ir pasando por la mesa. Un fotolibro del bebé, sí. Es el regalo para un primer cumpleaños, para el Día de la Madre o del Padre, y el que los abuelos dejan en la mesa del salón.',
    },
    why: {
      title: 'Por qué un fotolibro del bebé, si las fotos ya están en el móvil',
      paragraphs: [
        'En el primer año de un bebé, los padres hacen cientos de fotos al mes. Viven en la galería, entre capturas de pantalla y tiques, y pasan de largo al hacer scroll. Un álbum de fotos del bebé es lo contrario: unas pocas de las mejores, en orden, en papel, en un libro que cualquiera puede coger.',
        'Lo difícil nunca ha sido imprimir. Son las horas de elegir: cuál de las cuarenta fotos del baño, a qué mes pertenece esa foto, cómo encajar una foto vertical junto a una horizontal. Ahí es donde se atascan la mayoría de los álbumes del bebé, más o menos en el tercer mes.',
        `BabyBookAI hace esa parte por ti, en tu móvil. Lee las fechas, se queda con la foto más nítida de cada momento, da a cada mes su doble página y maqueta un álbum del bebé que parece diseñado, no volcado. Lo que te queda a ti es la parte bonita: hojearlo. Si quieres el primer año entero, del hospital a la tarta, mira el ${a('firstYear', 'fotolibro del primer año del bebé')}.`,
      ],
    },
    faqTitle: 'Preguntas sobre el fotolibro del bebé',
    faq: [
      {
        question: '¿De qué tamaño es el fotolibro del bebé?',
        answer:
          'Es un libro cuadrado de tapa dura de {size}. El formato cuadrado es el único en el que caben las fotos verticales y las horizontales del móvil sin recortar mal ninguna.',
      },
      {
        question: '¿Cuántas páginas tiene?',
        answer: `Entre ${BOOK.pagesMin} y ${BOOK.pagesMax}. BabyBookAI propone de ${BOOK.pagesMin} a ${BOOK.pagesSuggestedMax} para un primer año, una doble página por mes, y puedes añadir páginas hasta ${BOOK.pagesMax} con un coste adicional.`,
      },
      {
        question: '¿Se imprimirán nítidas las fotos del móvil?',
        answer:
          'Cada foto solo se coloca donde tiene píxeles suficientes para imprimirse bien. Una copia pequeña, como una guardada de un chat, va en un hueco más pequeño de la página en lugar de ocupar una página entera o la portada.',
      },
      {
        question: '¿Puedo personalizar el libro?',
        answer:
          'Sí. El nombre de tu bebé va en la portada, tú eliges las fechas y puedes escoger papel rosa suave, azul suave o crema clásico. Cada página trae frases cortas que puedes reescribir, y puedes añadir tu propia nota donde quieras.',
      },
      {
        question: '¿Puede quedar una cara en el pliegue central?',
        answer:
          'No. Las maquetas mantienen las fotos fuera del pliegue central. La única foto que lo cruza es una colocada a doble página a propósito, y esas se eligen para ello.',
      },
      {
        question: '¿Cuánto se tarda en hacerlo?',
        answer:
          'Unos minutos. Casi todo ese tiempo es tu móvil revisando la galería; después hojeas el libro, cambias lo que quieras y haces el pedido.',
      },
    ],
  },

  firstYear: {
    title: 'Fotolibro del primer año del bebé que no tienes que hacer | BabyBookAI',
    description:
      'Un fotolibro del primer año del bebé, mes a mes, hecho con las fotos que ya tienes en el móvil. Sin subir fotos cada semana: BabyBookAI elige, ordena y maqueta todo el año.',
    crumb: 'Fotolibro del primer año',
    eyebrow: 'Fotolibro del primer año del bebé',
    h1: 'El fotolibro del primer año del bebé que no tienes que hacer',
    lead: 'Doce meses, una doble página para cada uno, del hospital a la tarta. BabyBookAI lo hace con las fotos que ya tienes en el móvil, así que durante el año no tienes que ir al día con nada.',
    months: {
      eyebrow: 'Mes a mes',
      title: 'Un fotolibro mensual del bebé, sin la sesión de fotos de cada mes',
      body: 'Sin tarjetas de hitos, sin montar la misma foto en la misma mantita cada mes. El libro sigue las fotos que hiciste igualmente, en el orden en que las hiciste. Cada bebé lleva su propio calendario.',
      items: [
        { n: 'Página 1', moment: 'El día en que nació' },
        { n: 'Mes 1', moment: 'La llegada a casa' },
        { n: 'Mes 2', moment: 'Las primeras sonrisas de verdad' },
        { n: 'Mes 3', moment: 'Boca abajo' },
        { n: 'Mes 4', moment: 'Las primeras carcajadas' },
        { n: 'Mes 5', moment: 'Agarrarlo todo' },
        { n: 'Mes 6', moment: 'Las primeras papillas' },
        { n: 'Mes 7', moment: 'Sentarse solo' },
        { n: 'Mes 8', moment: 'En marcha' },
        { n: 'Mes 9', moment: 'Cucú, ¡tras!' },
        { n: 'Mes 10', moment: 'Ponerse de pie' },
        { n: 'Mes 11', moment: 'Casi andando' },
        { n: 'Mes 12', moment: 'El primer cumpleaños' },
        { n: 'Última página', moment: 'Y entonces cumplió uno' },
      ],
    },
    unfinished: {
      title: 'Por qué casi ningún libro del primer año se termina',
      paragraphs: [
        'Un libro del bebé para rellenar te pide imprimir, pegar y escribir cada mes. Una app de libro semanal te pide unos minutos cada semana, cincuenta y dos semanas seguidas. Ninguna de las dos parece mucho, hasta que llega el quinto mes, duermes a turnos de dos horas y el libro va tres semanas atrasado.',
        'Las fotos, en cambio, siguieron llegando. Nunca dejaste de hacerlas. BabyBookAI empieza ahí: cuando acaba el año, revisa tu galería y hace el libro con lo que ya tienes. Tu parte lleva minutos, una vez.',
      ],
      compare: [
        { label: 'Libro para rellenar', value: 'Cada mes' },
        { label: 'App de libro semanal', value: '52 semanas' },
        { label: 'BabyBookAI', value: 'Una vez, en minutos' },
      ],
    },
    howTitle: 'Cómo se hace el fotolibro del primer año',
    birthday: {
      title: 'A tiempo para su primer cumpleaños',
      body: 'Tú eliges las fechas, así que el libro puede cerrarse la semana de la fiesta o el día después. Los meses con pocas fotos no son problema: la maqueta sigue a las fotos, y un mes con una sola gran foto tiene una página hecha para una. ¿Quieres ir más allá del primer año? Un libro puede abarcar hasta 18 meses.',
      more: 'Ver el fotolibro del bebé en detalle',
    },
    faqTitle: 'Preguntas sobre el fotolibro del primer año',
    faq: [
      {
        question: '¿Cuándo debería hacer el fotolibro del primer año?',
        answer:
          'Cuando quieras después del primer cumpleaños, o antes si quieres el libro para la fiesta: tú eliges las fechas que abarca. Como BabyBookAI lee las fotos que ya tienes, durante el año no hay nada que llevar al día.',
      },
      {
        question: '¿Y si de algunos meses tengo pocas fotos?',
        answer:
          'La maqueta sigue a las fotos. Un mes con decenas de fotos buenas tiene una doble página completa; un mes con una gran foto tiene una página hecha para una sola foto. En iPhone, BabyBookAI también busca en Fotos de iCloud para los meses con pocas fotos en el móvil.',
      },
      {
        question: '¿Puede empezar después del nacimiento, o abarcar más de un año?',
        answer:
          'Sí. La mayoría de los libros van del nacimiento al primer cumpleaños, pero tú eliges el día en que empieza y cuánto dura: 6, 12 o 18 meses, con una doble página por mes.',
      },
      {
        question: '¿Qué va en la primera y en la última página?',
        answer:
          'La primera página lleva el día en que nació tu bebé, con un pequeño dibujo de una cigüeña con su hatillo. La última cierra el año con una tarta de primer cumpleaños.',
      },
      {
        question: '¿Tengo que añadir fotos cada semana?',
        answer:
          'No. Esa es la idea de BabyBookAI: trabaja con las fotos que ya tienes en el móvil, así que no hay subidas semanales ni nada en lo que retrasarse.',
      },
    ],
  },

  girl: {
    title: 'Álbum de fotos de bebé niña que se llena solo | BabyBookAI',
    description:
      'Un álbum de fotos rosa para tu bebé niña, hecho con las fotos de tu móvil. BabyBookAI elige sus mejores fotos, las ordena mes a mes y maqueta un libro de tapa dura.',
    crumb: 'Álbum de fotos de bebé niña',
    eyebrow: 'Álbum de fotos de bebé niña',
    h1: 'El álbum de fotos de bebé niña que se llena solo',
    lead: 'Su primer año ya está en tu móvil, en cientos de fotos. BabyBookAI elige las mejores, pone cada una en su mes y maqueta un álbum de tapa dura en rosa suave, con su nombre en la portada.',
    empty: {
      title: 'Casi todos los álbumes de bebé niña llegan vacíos',
      paragraphs: [
        'Un álbum rosa con fundas, un libro del bebé para rellenar, una plantilla en un editor de fotos: todos esperan a que imprimas, elijas y coloques un año de fotos. Con un bebé en casa, esa tarde casi nunca llega.',
        'Este empieza lleno. Lee las fechas de tus fotos, se queda con la más nítida de cada momento, deja fuera las movidas y las doce casi copias de la misma sonrisa, y da a cada mes su doble página. Tú lo hojeas y cambias lo que prefieras no guardar.',
      ],
    },
    howTitle: 'Cómo hacer un álbum de fotos de bebé niña en minutos',
    inside: {
      eyebrow: 'Dentro de su álbum',
      title: 'Del día en que nació a su primer cumpleaños',
      items: [
        { title: 'Su nombre en la portada', body: 'Con la mejor foto de su año, elegida entre las que marcaste como favoritas y más compartiste.' },
        { title: 'El día en que nació', body: 'La primera página, con un pequeño dibujo a pluma de una cigüeña con su hatillo.' },
        { title: 'Una doble página por mes', body: 'Su primera sonrisa, su primer baño, sus primeras papillas, cada uno en el mes en que pasó.' },
        { title: 'Una tarta para cerrar el año', body: 'La última página termina el libro con su primer cumpleaños.' },
      ],
    },
    details: {
      title: 'Un recuerdo hecho para tocarlo',
      body: `Un libro cuadrado de tapa dura de {size}, con cubierta mate y de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas en papel satinado de 170 g, por {price} con envío incluido. Cuadrado, porque así caben sus fotos verticales y horizontales sin recortar mal ninguna.`,
      more: `¿Prefieres azul o crema? Mira el ${a('boy', 'álbum de fotos de bebé niño')}, o todo sobre el ${a('babyPhotoBook', 'fotolibro del bebé')}.`,
    },
    faqTitle: 'Preguntas sobre el álbum de fotos de bebé niña',
    faq: [
      {
        question: '¿Puedo hacer su álbum de fotos en rosa?',
        answer:
          'Sí. El libro tiene tres tonos de papel: rosa suave, azul suave y crema clásico. El rosa tiñe todas las páginas, no solo el borde, y los motivos suaves de cada mes toman el mismo tono. Puedes cambiarlo todas las veces que quieras antes de pedirlo.',
      },
      {
        question: '¿Su nombre va en la portada?',
        answer:
          'Sí. Su nombre y la mejor foto de su año van en la portada, elegida entre las fotos que marcaste como favoritas y más compartiste. La primera página lleva el día en que nació.',
      },
      {
        question: '¿Puedo cambiar los textos de las páginas?',
        answer:
          'Sí. Cada página trae frases cortas como «Nuestro pequeño sol». Déjalas, reescríbelas o añade tu propia nota en cualquier sitio de la página.',
      },
      {
        question: '¿Y si todavía no ha cumplido un año?',
        answer:
          'Tú eliges las fechas. Un libro puede abarcar 6, 12 o 18 meses desde el día que elijas, así que puedes hacer uno a los seis meses y otro para su primer cumpleaños.',
      },
    ],
  },

  boy: {
    title: 'Álbum de fotos de bebé niño hecho con tu móvil | BabyBookAI',
    description:
      'Un álbum de fotos de bebé niño en azul suave, hecho para ti con las fotos de tu móvil. BabyBookAI elige sus mejores fotos, las ordena por meses y maqueta un libro de tapa dura.',
    crumb: 'Álbum de fotos de bebé niño',
    eyebrow: 'Álbum de fotos de bebé niño',
    h1: 'Álbum de fotos de bebé niño, hecho con las fotos de tu móvil',
    lead: 'Dale a BabyBookAI su nombre y su fecha de nacimiento. Repasa las fotos de tu móvil, se queda con sus mejores momentos de cada mes y maqueta un álbum de tapa dura en azul suave. Tú solo lo hojeas.',
    thousands: {
      title: 'De miles de fotos a un solo álbum',
      body: 'Lo difícil de un álbum de fotos de bebé nunca fue imprimirlo. Es elegir. BabyBookAI elige en tu móvil, así que no se sube nada hasta que haces el pedido.',
      steps: [
        { label: '5.437 fotos', body: 'Un año de galería: baños, siestas, la misma sonrisa cuarenta veces.' },
        { label: '157 elegidas', body: 'La más nítida de cada momento, sin ráfagas, sin casi copias, sin capturas de pantalla.' },
        { label: 'Un libro', body: 'Una doble página por mes, en orden, lista para hojear y pedir.' },
      ],
      note: 'Los números son de un año real, el de la pantalla de arriba. Los tuyos serán otros.',
    },
    howTitle: 'Cómo hacer un álbum de fotos de bebé niño',
    colors: {
      eyebrow: 'Personalizado',
      title: 'Azul suave, su nombre, tus palabras',
      paragraphs: [
        'Su nombre y la mejor foto de su año van en la portada. Elige azul suave, o crema o rosa si lo prefieres: el tono colorea todas las páginas, con motivos muy suaves de pajaritos, estrellas o nubes detrás de las fotos.',
        'Cada página trae una frase corta que puedes dejar o reescribir, y puedes añadir tu propia nota donde quieras. La primera página lleva el día en que nació; la última cierra el año con una tarta de primer cumpleaños.',
      ],
    },
    details: {
      title: 'El álbum en sí',
      body: `Un libro cuadrado de tapa dura de {size}, cubierta mate, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas en papel satinado de 170 g. {price} con envío incluido, impreso bajo pedido y enviado a tu casa. Cada foto va solo donde tiene píxeles para imprimirse nítida, así que una copia pequeña de un chat nunca acaba en la portada.`,
      more: `¿Lo haces para una hija? Mira el ${a('girl', 'álbum de fotos de bebé niña')}. Para todo el año, mes a mes, mira el ${a('firstYear', 'fotolibro del primer año')}.`,
    },
    faqTitle: 'Preguntas sobre el álbum de fotos de bebé niño',
    faq: [
      {
        question: '¿Puedo hacer su álbum de fotos en azul?',
        answer:
          'Sí. Elige azul suave, rosa suave o crema clásico. El tono colorea todas las páginas, y los motivos suaves de cada mes también lo toman. Puedes cambiarlo antes de hacer el pedido.',
      },
      {
        question: '¿Su nombre va en la portada?',
        answer:
          'Sí. Su nombre y la mejor foto de su año van en la portada. La primera página lleva el día en que nació, y la última cierra el año con una tarta de primer cumpleaños.',
      },
      {
        question: '¿Elegirá fotos de él y no de todos los demás?',
        answer:
          'Elige entre las fotos de las fechas que indiques, se queda con la más nítida de cada momento y descarta los duplicados. Después hojeas el libro y cambias o quitas cualquier foto que no quieras.',
      },
      {
        question: '¿Es un buen regalo para los abuelos?',
        answer:
          'Es el que piden. Un móvil lleno de fotos no se puede ir pasando por la mesa; un libro de tapa dura de su primer año, sí.',
      },
    ],
  },

  ideas: {
    title: 'Ideas para el fotolibro del bebé: 25 formas de contar su primer año | BabyBookAI',
    headline: 'Ideas para el fotolibro del bebé: 25 formas de contar su primer año',
    description:
      'Ideas para el fotolibro del bebé y su primer año: cómo organizarlo, qué fotografiar, maquetas que funcionan, frases para copiar y cuántas fotos elegir.',
    crumb: 'Ideas para el fotolibro',
    eyebrow: 'Ideas',
    h1: 'Ideas para el fotolibro del bebé: 25 formas de contar su primer año',
    byline: 'Por el equipo de BabyBookAI',
    date: '9 de octubre de 2026',
    lead: 'Al llegar el primer cumpleaños, casi todos los padres tienen miles de fotos de su bebé y ni idea de por dónde empezar. Estas ideas para el fotolibro del bebé son las que funcionan en papel: cómo organizar el año, qué fotografiar mientras aún hay tiempo, maquetas que parecen diseñadas y frases que puedes tomar prestadas.',
    tocTitle: 'En este artículo',
    toc: {
      organize: 'Formas de organizar el libro',
      photograph: 'Qué fotografiar mientras hay tiempo',
      layout: 'Ideas de páginas y maquetación',
      captions: 'Ideas de frases',
      choosing: 'Cuántas fotos, y cuáles',
      gifts: 'Ideas para regalar',
    },
    organize: {
      title: 'Formas de organizar un fotolibro del bebé',
      body: 'Elige un hilo para el libro antes de escoger una sola foto. Decide qué entra y qué se queda en el móvil.',
      items: [
        {
          title: 'Mes a mes',
          body: 'El fotolibro clásico del primer año: una doble página por mes, en el orden en que pasó. Al hojearlo, lo ves crecer. Además resuelve la pregunta más difícil, dónde va cada foto, solo con su fecha.',
        },
        {
          title: 'Por primeras veces',
          body: 'Primer baño, primera sonrisa, primeras papillas, primeros pasos, primer corte de pelo. Cada una con su página. Funciona bien para un libro más corto, o como sección después de los meses.',
        },
        {
          title: 'Por estaciones',
          body: 'Cuatro capítulos: la primera nieve, la primera playa, las primeras hojas de otoño. Va bien cuando las fotos se concentran en viajes y vacaciones.',
        },
        {
          title: 'El mismo sitio, cada mes',
          body: 'La misma silla, el mismo peluche para comparar, fotografiados el mismo día de cada mes. Si lo empezaste, dale a la serie su propia doble página al final, una foto junto a otra.',
        },
        {
          title: 'Un día cualquiera',
          body: 'Un día normal, de la mañana a la hora de dormir: el biberón, la siesta, el baño, el paseo. Lo cotidiano es lo primero que se olvida.',
        },
        {
          title: 'Las personas que lo tuvieron en brazos',
          body: 'Una página para cada abuelo, para los hermanos, los padrinos, la amiga que venía todos los domingos. Las fotos con otras personas son las que un niño busca después.',
        },
      ],
    },
    photograph: {
      title: 'Qué fotografiar mientras hay tiempo',
      body: 'Si el año aún no ha terminado, estas son las fotos que los padres más echan de menos cuando hacen el libro:',
      items: [
        'Sus manos y sus pies junto a los tuyos, cada pocos meses',
        'Su habitación tal como es, antes de que cambie',
        'El desastre de las comidas, no solo los retratos con la cara limpia',
        'Dormido en sitios raros: la sillita del coche, el hombro, la cama del perro',
        'Un plano general de la habitación, no solo primeros planos',
        'Tú también en la foto: pásale el móvil a otra persona',
        'Las tomas falsas: la foto movida, el bostezo, el llanto antes de la sonrisa',
      ],
    },
    layout: {
      title: 'Ideas de páginas y maquetación',
      body: 'La diferencia entre un libro que parece diseñado y uno que parece volcado está, sobre todo, en unas pocas reglas.',
      items: [
        {
          title: 'Una foto grande y luego una cuadrícula',
          body: 'La mejor foto del mes, grande a la izquierda, y cinco o seis más pequeñas a la derecha. Así cada doble página tiene un sitio donde mirar primero.',
        },
        {
          title: 'Una página entera para la foto que se la gana',
          body: 'No todos los meses necesitan una cuadrícula. Un gran retrato solo en una página dice más que seis buenos.',
        },
        {
          title: 'Las caras, fuera del pliegue',
          body: 'Casi todos los fotolibros van encolados en el lomo, así que el centro de la doble página se curva. Deja cada foto en su página y cruza el pliegue solo a propósito.',
        },
        {
          title: 'Mezcla primeros planos y planos generales',
          body: 'Un primer plano junto a otro primer plano resulta repetitivo. Pon al lado un plano general de la habitación o del parque.',
        },
        {
          title: 'Deja algo de papel',
          body: 'El espacio en blanco es lo que hace que una página parezca diseñada y no rellenada. Una frase corta en un hueco hace más que otra foto.',
        },
        {
          title: 'Elige el formato cuadrado',
          body: 'Las fotos del móvil salen verticales y horizontales. En una página cuadrada caben las dos sin recortar mal ninguna.',
        },
      ],
      figcaption: 'Una foto grande, una cuadrícula al lado, nada cruzando el pliegue.',
    },
    captions: {
      title: 'Ideas de frases para el fotolibro del bebé',
      body: 'Frases cortas: una línea por página. Fechas, lugares, apodos y los detalles que vas a olvidar (la canción que paraba el llanto, la primera palabra) valen más que párrafos largos. Algunas para tomar prestadas:',
      items: [
        'Sueña en grande, pequeño amor',
        'Nuestro pequeño sol',
        'Eres lo más bonito',
        'Manos pequeñas, grandes planes',
        'Nuestro hogar es donde estés tú',
        'El mes en que encontraste tus pies',
        'Diez deditos y todo corazón',
        'Hola, mundo',
        'Te queremos muchísimo',
        'Y entonces cumpliste uno',
      ],
    },
    choosing: {
      title: 'Cuántas fotos, y cuáles',
      tips: [
        {
          lead: 'Apunta a entre 10 y 15 al mes.',
          body: 'Un fotolibro del primer año de 30 páginas lleva unas 150 fotos con holgura. En un año real que revisamos, se eligieron 157 fotos de 5.437.',
        },
        { lead: 'Quédate con una de cada momento.', body: 'El móvil hace ráfagas; el libro necesita el fotograma más nítido, no los doce.' },
        {
          lead: 'Cuidado con las copias de los chats.',
          body: 'Una foto guardada de una app de mensajería es una copia más pequeña. Se imprime bien en pequeño, pero no a página completa ni en la portada. Si tienes la original, usa esa.',
        },
      ],
      product: `Esta parte, la de elegir, es donde se atascan la mayoría de los libros del bebé. Es la parte que ${a('home', 'BabyBookAI')} hace por ti: revisa la galería en tu móvil, se queda con la foto más nítida de cada momento, ordena el año mes a mes y maqueta el libro, así que tú solo lo hojeas. Mira cómo se hace el ${a('firstYear', 'fotolibro del primer año')}.`,
    },
    gifts: {
      title: 'Ideas para regalar',
      items: [
        { lead: 'Para el primer cumpleaños.', body: 'Cierra el libro la semana de la fiesta y pásalo por la mesa.' },
        {
          lead: 'Para los abuelos.',
          body: `El regalo que dejan en la mesa del salón. Un ${a('girl', 'álbum de fotos de bebé niña')} en rosa o un ${a('boy', 'álbum de fotos de bebé niño')} en azul, con el nombre del bebé en la portada.`,
        },
      ],
    },
    box: {
      title: '¿Te faltan tardes libres?',
      body: 'BabyBookAI convierte las fotos que ya tienes en el móvil en un libro de tapa dura del primer año, en minutos.',
    },
    faqTitle: 'Preguntas sobre el fotolibro del bebé',
    faq: [
      {
        question: '¿Cuántas fotos debe tener un fotolibro del bebé?',
        answer:
          'Para un primer año, entre 10 y 15 fotos al mes funcionan bien: de 120 a 180 en total. Un libro de 30 páginas lleva unas 150 sin parecer abarrotado, con sitio para una foto grande en casi todas las dobles páginas.',
      },
      {
        question: '¿Qué debe llevar el fotolibro del primer año del bebé?',
        answer:
          'El día en que nació, una doble página para cada mes en orden, las primeras veces que captaste con la cámara (sonrisa, baño, comida, pasos), las personas que lo tuvieron en brazos y un primer cumpleaños para cerrar el año. Las frases cortas con fechas ayudan más que los textos largos.',
      },
      {
        question: '¿Qué se escribe en un fotolibro del bebé?',
        answer:
          'Frases cortas: una fecha, un lugar, un apodo, un peso, o eso que olvidarás en cinco años (la canción que paraba el llanto, su primera palabra). Una línea por página es suficiente.',
      },
      {
        question: '¿Se pueden imprimir en un fotolibro las fotos del móvil?',
        answer:
          'Sí. Las fotos hechas con la cámara del móvil se imprimen nítidas incluso a página completa. Las copias guardadas de apps de mensajería son más pequeñas; se imprimen bien en un hueco pequeño de la página, no a página completa ni en la portada.',
      },
    ],
  },

  about: {
    title: 'Sobre BabyBookAI | El fotolibro del bebé que se hace solo',
    description:
      'BabyBookAI es una app de Photo-to-Text que convierte las fotos de tu móvil en un fotolibro impreso del primer año de tu bebé. Quiénes somos y cómo lo hacemos.',
    crumb: 'Sobre nosotros',
    eyebrow: 'Sobre nosotros',
    h1: 'Un libro del bebé para padres sin tiempo para hacerlo',
    paragraphs: [
      'En el primer año de un bebé, los padres hacen miles de fotos. Muy pocas acaban en un libro, porque hacerlo supone horas de elegir, ordenar y colocar, con un bebé en casa.',
      `${SITE.name} hace ese trabajo por ti. Lee las fotos de tu móvil, se queda con lo mejor de cada momento, las ordena mes a mes y maqueta un libro de tapa dura. Tú lo hojeas, cambias lo que quieras, y se imprime y te llega a casa.`,
    ],
    beliefsTitle: 'Lo que defendemos',
    beliefs: [
      {
        title: 'La selección es el producto',
        body: 'Cualquiera puede imprimir 200 fotos. Lo que vale es elegir las 150 mejores entre miles y maquetarlas para que el libro parezca compuesto, no generado.',
      },
      {
        title: 'Tus fotos se quedan en tu móvil',
        body: 'Las fotos se eligen en tu móvil. No se sube nada para elegirlas; solo el libro terminado se envía, cuando lo pides, para imprimirlo.',
      },
      {
        title: 'Sin deberes',
        body: 'Sin recordatorios semanales, sin diarios, sin suscripción. Las fotos ya las hiciste; el libro se hace con ellas, una vez, cuando tú quieras.',
      },
      {
        title: 'Un libro hecho para durar',
        body: 'Un libro cuadrado de tapa dura de {size} en papel satinado de 170 g, impreso bajo pedido por nuestro socio de impresión y enviado a tu casa.',
      },
    ],
    who: {
      title: `Un producto de ${PUBLISHER.name}`,
      body: `${SITE.name} lo hace <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, una pequeña empresa que hace regalos personalizados con fotos. Su logo va en la contraportada de cada libro. Preguntas, ideas o un libro que no salió bien: escríbenos a <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Mira el ${a('babyPhotoBook', 'fotolibro del bebé')}, lee la ${a('privacy', 'política de privacidad')} o busca ayuda en la ${a('support', 'página de ayuda')}.`,
  },

  support: {
    title: 'Ayuda de BabyBookAI | Preguntas sobre tu fotolibro del bebé',
    description:
      'Ayuda con la app BabyBookAI y tu pedido: encontrar las fotos, las fotos de WhatsApp, guardar tu libro, precio y envío, y cómo contactarnos.',
    crumb: 'Ayuda y preguntas',
    eyebrow: 'Ayuda',
    h1: '¿En qué podemos ayudarte?',
    lead: 'Casi todas las respuestas están aquí abajo. Para cualquier otra cosa, sobre la app o un pedido, escríbenos y te contestará una persona.',
    emailLabel: 'Correo',
    emailNote: '¿Es sobre un pedido? Escríbenos desde el correo con el que lo hiciste, para poder encontrarlo.',
    appTitle: 'La app y tu pedido',
    bookTitle: 'El libro y cómo se hace',
    more: `Más: la ${a('privacy', 'política de privacidad')}, las ${a('terms', 'condiciones')} y ${a('about', 'quiénes somos')}.`,
    faq: [
      {
        question: 'La app ha encontrado pocas fotos. ¿Por qué?',
        answer:
          'BabyBookAI solo ve las fotos que le dejas ver. Cuando el móvil te pregunte, elige «Permitir todo»: con «Seleccionar fotos» solo ve las que escogiste. En Android lee las fotos guardadas en el móvil, así que las que solo están en Google Fotos en la nube no aparecen.',
      },
      {
        question: '¿Dónde están mis fotos de WhatsApp?',
        answer:
          'Las fotos que guardaste desde WhatsApp están en la galería del móvil, así que la búsqueda las encuentra. Se usan para completar los meses con pocas fotos de la cámara, y si la misma foto está dos veces en el móvil, se queda con la copia más nítida y más grande.',
      },
      {
        question: '¿Se guarda mi libro si cierro la app?',
        answer:
          'Sí. Tu libro se guarda en el móvil mientras trabajas, con tus fotos, textos y colores, y se abre donde lo dejaste. Empezar un libro nuevo lo sustituye.',
      },
      {
        question: '¿Cuánto cuesta el libro y cuánto el envío?',
        answer: `{price} por ${BOOK.pagesMin} páginas, envío incluido. Las páginas extra, hasta ${BOOK.pagesMax}, cuestan aparte. El precio final se muestra en tu moneda antes de pagar.`,
      },
      {
        question: '¿A qué países enviáis?',
        answer:
          'Estados Unidos, Reino Unido, Canadá, Australia, Irlanda, Alemania, Austria, Francia, Bélgica, España, Italia, Países Bajos, Portugal, Japón, Corea del Sur y China.',
      },
      {
        question: '¿Cómo se paga?',
        answer: 'Con tarjeta, a través de Stripe. Nunca vemos los datos de tu tarjeta.',
      },
      {
        question: 'Algo va mal con mi pedido. ¿Qué hago?',
        answer: `Escribe a ${EMAIL} desde el correo con el que hiciste el pedido, e incluye una foto si el libro llegó dañado.`,
      },
      {
        question: '¿Hay app para iPhone?',
        answer: 'Todavía no. BabyBookAI ya está en Google Play para Android, y la app para iPhone llegará muy pronto.',
      },
      {
        question: '¿Cómo borro mis datos?',
        answer: `Tus fotos nunca salen del móvil para hacer el libro, y al borrar la app se borra el libro guardado. Si hiciste un pedido, escribe a ${EMAIL} y borraremos lo que tengamos que la ley no nos obligue a conservar. La política de privacidad tiene los detalles.`,
      },
    ],
  },

  privacy: {
    title: 'Política de privacidad | BabyBookAI',
    description:
      'Qué hace BabyBookAI con tus fotos y los datos de tu pedido: tu galería se lee en tu móvil, y solo el libro terminado se envía para imprimirlo.',
    crumb: 'Privacidad',
    eyebrow: 'Privacidad',
    h1: 'Las fotos de tu bebé no salen de tu móvil',
    updatedLabel: 'Política de privacidad · Última actualización:',
    updated: '9 de octubre de 2026',
    intro: `BabyBookAI («nosotros») es una app que hace un fotolibro impreso del primer año de tu bebé con las fotos de tu móvil. Es un producto de Photo-to-Text. Contacto: ${EMAIL}.`,
    shortTitle: 'En resumen',
    short: [
      'Tu galería de fotos se lee <strong>en tu móvil</strong>. Nosotros nunca la vemos.',
      'Cuando pides un libro, el archivo del libro terminado (las fotos que elegiste, tus textos, el nombre de tu bebé) se nos envía a nosotros y a nuestra imprenta.',
      'Para entregarlo necesitamos tu nombre, tu correo y tu dirección. El pago lo gestiona Stripe; nunca vemos tu tarjeta.',
      'La app no tiene publicidad, ni analítica, ni seguimiento, ni cuenta.',
    ],
    phoneTitle: 'Qué hace la app en tu móvil',
    phone: [
      'Para elegir las fotos, la app lee las fotos de tu galería de los meses que indicas: sus fechas, tamaños, nitidez y duplicados. Esto ocurre solo en tu móvil, y no se envía nada sobre tu galería a ningún sitio.',
      '<strong>Reconocer a tu bebé (opcional).</strong> Si activas el interruptor de reconocimiento antes de la búsqueda, la app aprende la cara de tu bebé a partir de las fotos que tocas, en tu móvil, para dejar fuera del libro a los hijos de otras personas. Los datos de la cara solo existen en la memoria del móvil durante la búsqueda y se borran al terminar; nunca se guardan ni se envían. El interruptor está apagado por defecto y no se ofrece en Illinois, Texas ni Washington.',
      'El libro en el que trabajas se guarda en tu móvil para que puedas volver a él. Contiene qué fotos lleva, tus textos y dónde están las caras en esas fotos (para encuadrarlas), nunca datos de caras. Empezar un libro nuevo lo borra, igual que desinstalar la app.',
    ],
    receiveTitle: 'Qué recibimos y para qué',
    table: {
      head: ['Qué', 'Para qué', 'Con quién se comparte'],
      rows: [
        ['El archivo del libro: las fotos de tu libro, tus textos, el nombre de tu bebé y su año de nacimiento', 'Para imprimir tu libro', 'Gelato (nuestra imprenta)'],
        ['Número de páginas, moneda', 'Para calcular el precio del pedido', '—'],
        ['Tu nombre, correo, dirección de envío y teléfono (opcional)', 'Para entregar el libro y enviar el recibo', 'Gelato (entrega), Stripe (recibo)'],
        ['Datos de pago', 'Para cobrar', 'Solo Stripe; nosotros nunca los recibimos'],
      ],
    },
    receiveNote:
      'Usamos esta información solo para hacer, enviar y atender tu pedido. No la vendemos, no la usamos para publicidad y no usamos tus fotos para nada más que imprimir tu libro.',
    othersTitle: 'Quién más la trata',
    others: [
      '<strong>Stripe</strong> procesa los pagos (<a class="lnk" href="https://stripe.com/es/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> imprime y envía el libro (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'Nuestro servidor de pedidos, donde el archivo del libro espera hasta llegar a la imprenta.',
    ],
    keepTitle: 'Cuánto tiempo la guardamos',
    keep: [
      'Los pedidos que nunca se pagan se borran, con su archivo del libro, a los 7 días.',
      'De los pedidos pagados guardamos los datos del pedido y el archivo del libro el tiempo necesario para entregarlo, atenderte y cumplir las normas fiscales y contables. Puedes pedirnos que los borremos en cualquier momento (ver abajo).',
    ],
    rightsTitle: 'Tus derechos y cómo borrar tus datos',
    rights: [
      `Puedes pedirnos una copia de tus datos, corregirlos o borrarlos escribiendo a ${EMAIL} desde el correo con el que hiciste el pedido e indicando BabyBookAI. Te responderemos en 30 días. Para borrar tus datos, escríbenos «borrar mis datos»: borraremos los datos de tu pedido y el archivo de tu libro, salvo lo que la ley nos obligue a conservar, y pediremos a Gelato y a Stripe que borren los suyos.`,
      'Si vives en la Unión Europea o en el Reino Unido, también puedes reclamar ante tu autoridad de protección de datos (en España, la AEPD). Tratamos los datos de tu pedido porque nos pediste hacer y enviar tu libro y, si lo usas, el reconocimiento facial solo con tu consentimiento, que puedes retirar apagando el interruptor.',
    ],
    websiteTitle: 'Esta web',
    websiteLanguage:
      'babybookai.com lee el país desde el que nos visitas, tal como lo indica nuestro proveedor de alojamiento (Cloudflare), para mostrar los precios en tu moneda y, en la primera visita, la página en tu idioma. No se guarda. Una cookie, «lang», recuerda el idioma en el que leíste la web por última vez, para que la página de inicio se abra en él la próxima vez.',
    websiteAnalytics:
      'babybookai.com usa Google Analytics para contar las visitas y ver qué páginas se leen, mediante cookies de Google. Recibe tu dirección IP, tu navegador y las páginas que visitas, nunca nada de la app. Puedes bloquearlo con los ajustes de tu navegador o con el complemento de inhabilitación de Google (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). La política de Google: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'babybookai.com no usa scripts de analítica ni de publicidad.',
    childrenTitle: 'Menores',
    children:
      'BabyBookAI es para padres. No está dirigida a menores y no recogemos a sabiendas información de menores. Las fotos de tu bebé solo se usan para imprimir tu libro.',
    securityTitle: 'Seguridad',
    security:
      'Todo lo que envía la app viaja cifrado (HTTPS). Los archivos de los libros se guardan en una carpeta privada de nuestro servidor y solo llegan a la imprenta mediante un enlace firmado que caduca.',
    changesTitle: 'Cambios',
    changes: 'Publicaremos aquí cualquier cambio y actualizaremos la fecha de arriba.',
  },

  terms: {
    title: 'Condiciones de uso y de venta | BabyBookAI',
    description:
      'Las condiciones para usar la app BabyBookAI y pedir un fotolibro del bebé impreso: tus fotos, pedidos y pago, impresión y envío, y libros dañados.',
    crumb: 'Condiciones',
    eyebrow: 'Condiciones',
    h1: 'Condiciones de uso y de venta',
    updatedLabel: 'Última actualización:',
    updated: '9 de octubre de 2026',
    intro: `Estas condiciones se aplican a la app ${SITE.name} y a los libros impresos que se piden con ella. ${SITE.name} es un producto de ${PUBLISHER.name} («nosotros»). Al usar la app o pedir un libro, las aceptas. Preguntas: ${EMAIL}.`,
    sections: [
      {
        title: 'La app',
        paragraphs: [
          'La app es gratis de descargar y de usar. Hacer un libro y hojearlo no cuesta nada; solo pagas si pides un libro impreso. Puedes usar la app para tu uso personal, no comercial. Podemos mejorar, cambiar o retirar funciones de la app con el tiempo.',
        ],
      },
      {
        title: 'Tus fotos y tus textos',
        list: [
          'Tus fotos y tus textos siguen siendo tuyos. No reclamamos ningún derecho sobre ellos.',
          `Al hacer un pedido, nos permites a nosotros y a nuestra imprenta usar el archivo del libro solo para imprimir, enviar y atender ese pedido, como describe la ${a('privacy', 'política de privacidad')}.`,
          'Confirmas que tienes derecho a imprimir las fotos y los textos de tu libro, y que nada en él es ilegal. Podemos negarnos a imprimir un libro que lo sea.',
        ],
      },
      {
        title: 'Pedidos y pago',
        list: [
          'Debes tener 18 años o más para hacer un pedido.',
          `La app muestra el precio completo antes de pagar, en la moneda de tu país, con el envío incluido. Un libro de ${BOOK.pagesMin} páginas cuesta {price}; las páginas extra, hasta ${BOOK.pagesMax}, cuestan más y su precio se muestra en la app.`,
          'El pago se hace con tarjeta a través de Stripe. Nunca vemos los datos de tu tarjeta.',
          'Revisamos cada pedido antes de imprimirlo. Si no podemos completar un pedido, lo cancelamos y te devolvemos todo el importe.',
          'Antes de pagar, revisa el libro entero: fotos, nombres, fechas y ortografía. Cada libro se imprime exactamente como lo apruebas.',
        ],
      },
      {
        title: 'Impresión y envío',
        paragraphs: [
          'Los libros los imprime bajo pedido nuestro socio de impresión y se envían a la dirección que indicas, en los países que muestra la app. Los plazos de entrega que se muestran son estimados. Revisa bien la dirección: no podemos desviar un libro una vez enviado.',
        ],
      },
      {
        title: 'Libros dañados, mal impresos o perdidos',
        paragraphs: [
          `Cada libro se hace para ti, así que no podemos aceptar su devolución si cambias de opinión. Si tu libro llega dañado, tiene un defecto de impresión o no llega, escribe a ${EMAIL} en los 30 días siguientes a la entrega (o a la fecha de entrega prevista) con el correo de tu pedido y, si puedes, una foto. Volveremos a imprimir el libro o te devolveremos el dinero. Nada en estas condiciones limita los derechos que te reconoce la ley de consumo de donde vives.`,
        ],
      },
      {
        title: 'Responsabilidad',
        paragraphs: [
          'Trabajamos para que la app y los libros salgan bien, pero la app se ofrece tal cual. En la medida en que la ley lo permita, nuestra responsabilidad por un pedido se limita a lo que pagaste por él. No somos responsables de fotos perdidas en tu móvil: la app lee tus fotos, pero nunca las borra.',
        ],
      },
      {
        title: 'Cambios',
        paragraphs: [
          'Podemos actualizar estas condiciones. Los cambios se publican aquí con una fecha nueva y se aplican a los pedidos hechos después de esa fecha.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Página no encontrada | BabyBookAI',
    description: 'Esta página no existe. Encuentra aquí el fotolibro del bebé de BabyBookAI.',
    h1: 'Esta página se ha perdido',
    body: 'Puede que el enlace sea antiguo. Estos son buenos sitios para empezar:',
  },
};
