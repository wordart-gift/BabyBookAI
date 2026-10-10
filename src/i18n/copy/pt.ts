import { BOOK, PUBLISHER, SITE } from '../../config/site';
import { linker } from '../format';
import type { Copy } from './en';

/**
 * Português europeu, com tu, como a app (librofotos lib/l10n/app_pt.arb: bebé,
 * telemóvel). A palavra procurada é «fotolivro»; o Keyword Tool não deu dados
 * para Portugal, por isso é uma tradução guiada pelos outros mercados.
 */
const a = linker('pt');
const EMAIL = `<a class="lnk" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

export const pt: Copy = {
  ui: {
    skip: 'Saltar para o conteúdo',
    homeAria: `${SITE.name}, página inicial`,
    mainNav: 'Principal',
    nav: { babyPhotoBook: 'Fotolivro do bebé', firstYear: 'O primeiro ano' },
    getApp: 'Descarregar',
    language: 'Idioma',
    breadcrumb: 'Caminho de navegação',
    home: 'Início',
    footer: {
      tagline: 'O primeiro ano do teu bebé, transformado num livro para ti.',
      productOf: 'Um produto de',
      book: 'O livro',
      company: 'Empresa',
      links: {
        babyPhotoBook: 'Fotolivro do bebé',
        firstYear: 'Fotolivro do primeiro ano',
        boy: 'Álbum de fotografias de bebé menino',
        girl: 'Álbum de fotografias de bebé menina',
        ideas: 'Ideias para o fotolivro do bebé',
        about: 'Sobre nós',
        support: 'Ajuda e perguntas',
        privacy: 'Privacidade',
        terms: 'Termos',
      },
      rights: 'Todos os direitos reservados.',
    },
    closing: {
      title: 'Faz o livro em minutos. Guarda-o para sempre.',
      body: 'Descarrega o BabyBookAI, dá-lhe o nome do teu bebé e as datas, e vê o primeiro ano dele organizado antes de o café arrefecer.',
    },
    free: 'Descarga gratuita. Só pagas o livro impresso.',
    badges: {
      aria: `Descarregar o ${SITE.name}`,
      appStore: 'Descarrega na App Store',
      googlePlay: 'Obter no Google Play',
      iphone: 'iPhone',
      comingSoon: 'App Store: em breve',
    },
    qr: {
      aria: `Código QR para descarregar o ${SITE.name}`,
      title: 'Estás no computador?',
      body: 'Lê-o com a câmara do telemóvel para obteres a app.',
    },
    how: {
      eyebrow: 'Como funciona',
      title: 'Três passos, e tu só fazes o fácil',
      steps: [
        {
          title: 'Diz-lhe o nome e as datas',
          body: 'O nome do teu bebé vai na capa. A maioria dos livros começa no dia em que nasceu e acaba no primeiro aniversário.',
        },
        {
          title: 'Lê a galeria do telemóvel',
          body: 'No teu telemóvel, encontra as fotografias desse ano, deixa de fora as tremidas e as quase repetidas, fica com a melhor de cada momento e ordena-as mês a mês.',
        },
        {
          title: 'Folheia, troca, encomenda',
          body: 'O livro é organizado por ti. Troca qualquer fotografia de que não gostes, altera os textos se quiseres, e o livro de capa dura é impresso e enviado para tua casa.',
        },
      ],
    },
    tones: {
      pink: 'Rosa suave',
      blue: 'Azul suave',
      neutral: 'Creme clássico',
      caption: 'Os três tons de papel. A página inteira ganha o tom.',
    },
    stork: 'Uma cegonha a carregar uma trouxa',
    spreadMonth: 'Primeiro mês',
    defaultDescription:
      'O BabyBookAI transforma as fotografias que já tens no telemóvel num fotolivro impresso de capa dura do primeiro ano do teu bebé. Escolhe, ordena e paginas as fotografias por ti.',
    ogImageAlt: 'BabyBookAI: um fotolivro impresso do primeiro ano de um bebé',
    /** The spread picture's alt text (src/assets/app/spread-first-month.png). */
    spreadAlt:
      'Uma página dupla do BabyBookAI, «Primeiro mês»: sete fotos de uma bebê com a família e os avós',
    screens: {
      setup: 'Ecrã inicial do BabyBookAI: um nome e uma data de nascimento, depois a duração do livro e o preço',
      selection: 'Ecrã de resultados do BabyBookAI: 225 fotografias escolhidas, por meses',
      order: 'Ecrã da encomenda do BabyBookAI: 30 páginas, capa dura, portes incluídos',
    },
    translationNote:
      'Esta é uma tradução do texto em inglês. Se houver alguma diferença entre os dois, aplica-se a versão em inglês.',
    schema: {
      appFeatures: [
        'Escolhe as fotografias no telemóvel: só o livro acabado é enviado para impressão',
        'Fica com a fotografia mais nítida de cada momento e deixa de fora duplicados e rajadas',
        'Ordena as fotografias mês a mês pela data em que foram tiradas',
        `Pagina um livro quadrado de capa dura de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas`,
        'Envia o livro para impressão e entrega-o',
      ],
      bookName: 'Fotolivro do bebé BabyBookAI',
      bookDescription: `Um fotolivro quadrado de capa dura, 28 × 28 cm, do primeiro ano de um bebé, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas em papel acetinado de 170 g, feito pela app BabyBookAI com as fotografias do teu telemóvel.`,
      pages: 'Páginas',
      binding: 'Encadernação',
      bindingValue: 'Capa dura',
    },
  },

  home: {
    title: 'BabyBookAI — O fotolivro do bebé que se faz sozinho',
    description:
      'O primeiro ano do teu bebé num fotolivro impresso de capa dura, feito com as fotografias que já tens no telemóvel. O BabyBookAI escolhe-as, ordena-as e pagina-as por ti.',
    eyebrow: 'Fotolivro do primeiro ano do bebé',
    h1: 'O livro do bebé que se faz sozinho',
    lead: 'Lê a galeria do teu telemóvel, escolhe as melhores fotografias de cada mês e pagina um livro de capa dura. Tu folheias, trocas o que não te agrada, e ele segue a caminho.',
    homework: {
      title: 'Todos os livros de bebé dão trabalho. Menos este.',
      body: 'As fotografias já as tiraste: centenas, todos os meses. Transformá-las num livro é a parte para a qual ninguém tem tempo com um bebé em casa.',
      yourPart: 'A tua parte',
      ways: [
        { name: 'Um livro de bebé para preencher', effort: 'Imprimir, recortar, colar e escrever, todos os meses', verdict: 'A maioria desiste por volta do terceiro mês.' },
        { name: 'Uma app de livro semanal', effort: 'Uns minutos por semana, durante 52 semanas', verdict: 'O trabalho continua lá, em 52 pedaços.' },
        { name: 'BabyBookAI', effort: 'Nada até o ano acabar', verdict: 'Depois uma vista de olhos, e está feito.' },
      ],
    },
    book: {
      eyebrow: 'O livro',
      title: 'Um verdadeiro livro de capa dura, feito para guardar',
      body: 'O nome do teu bebé e a melhor fotografia dele na capa. O dia em que nasceu na primeira página. Depois uma página dupla para cada mês, pela ordem em que aconteceu, cada uma paginada para as fotografias que leva, até ao primeiro aniversário.',
      specs: [
        { label: 'Tamanho', value: '{size}, quadrado' },
        { label: 'Capa', value: 'Dura, mate' },
        { label: 'Páginas', value: `${BOOK.pagesMin}–${BOOK.pagesMax}` },
        { label: 'Papel', value: 'Acetinado de 170 g' },
        { label: 'Paginação', value: 'Uma página dupla por mês' },
        { label: 'Envio para', value: '16 países' },
      ],
      more: 'Ver o fotolivro do bebé em detalhe',
    },
    privacy: {
      title: 'As fotografias do teu bebé ficam no teu telemóvel',
      body: 'O BabyBookAI escolhe as fotografias no teu telemóvel, não num servidor. Não se carrega nada enquanto lê a tua galeria ou enquanto folheias o livro. Só quando encomendas é que as páginas acabadas vão para a gráfica. Sem subscrição e sem direitos sobre as imagens do teu filho.',
    },
    birthday: {
      title: 'Pronto para o primeiro aniversário',
      body: 'O ano acaba, o livro está feito. Encomenda-o na semana da festa, ou faz também um para os avós. O presente preferido deles é aquele em que está o bebé.',
      more: 'Como funciona o fotolivro do primeiro ano',
    },
    faqTitle: 'O que os pais perguntam',
    faq: [
      {
        question: 'Como escolhe o BabyBookAI as fotografias?',
        answer:
          'Lê a data em que cada fotografia foi tirada e fica só com as do primeiro ano do teu bebé. Depois deixa de fora as tremidas, fica com a imagem mais nítida de cada rajada e deteta a mesma fotografia guardada duas vezes (uma cópia do WhatsApp e o original, por exemplo) para ficar com a melhor cópia. As fotografias que marcaste como favoritas e as que mais partilhaste ficam com os melhores lugares: a capa e as páginas inteiras.',
      },
      {
        question: 'As minhas fotografias são carregadas para algum lado?',
        answer:
          'Não para fazer o livro. Toda a seleção acontece no teu telemóvel. Só quando encomendas é que as páginas do livro acabado seguem para a gráfica.',
      },
      {
        question: 'Posso mudar as fotografias que escolheu?',
        answer:
          'Sim. Folheias o livro no telemóvel e trocas qualquer fotografia de que não gostes. Também podes editar os textos de cada página e juntar uma pequena nota tua.',
      },
      {
        question: 'Como é o livro?',
        answer: `Um livro quadrado de capa dura, {size}, com capa mate e de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas em papel acetinado de 170 g. O nome do teu bebé e a melhor fotografia dele vão na capa, a data de nascimento abre o livro e cada mês tem a sua página dupla.`,
      },
      {
        question: 'E se algumas fotografias estiverem no WhatsApp ou no iCloud?',
        answer:
          'As fotografias guardadas do WhatsApp estão na galeria do telemóvel, por isso são encontradas como as outras. No iPhone, o BabyBookAI também pode usar as tuas fotografias do iCloud nos meses com poucas fotografias no telemóvel. No Android lê as fotografias guardadas no telemóvel.',
      },
      {
        question: 'Só serve para os primeiros doze meses?',
        answer:
          'A maioria dos pais faz o primeiro ano, do nascimento ao primeiro aniversário. Tu escolhes o dia em que começa e quanto dura: 6, 12 ou 18 meses, com uma página dupla por mês.',
      },
      {
        question: 'Quanto custa?',
        answer: `A app é gratuita, tal como fazer o livro e folheá-lo. Só pagas quando encomendas o livro de capa dura impresso: {price} por ${BOOK.pagesMin} páginas, portes incluídos, com páginas extra até ${BOOK.pagesMax} por um custo adicional. Vês o preço final antes de pagar.`,
      },
      {
        question: 'Existe para iPhone e Android?',
        answer:
          'O BabyBookAI já está gratuito no Google Play, para Android. A app para iPhone chega em breve. Os livros são enviados para 16 países da América do Norte, da Europa e da Ásia.',
      },
    ],
  },

  babyPhotoBook: {
    title: 'Fotolivro do bebé feito com as fotografias do teu telemóvel | BabyBookAI',
    description: `Um fotolivro do bebé de capa dura feito para ti: o BabyBookAI escolhe as melhores fotografias do teu telemóvel, ordena-as por meses e pagina cada página. {size}, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas.`,
    crumb: 'Fotolivro do bebé',
    eyebrow: 'Fotolivro do bebé',
    h1: 'Fotolivro do bebé, feito com as fotografias do teu telemóvel',
    lead: 'O BabyBookAI encontra as melhores fotografias do teu bebé no telemóvel, ordena-as mês a mês e pagina um livro quadrado de capa dura. Sem carregar nada, sem arrastar fotografias para modelos. Só tens de o folhear.',
    features: {
      title: 'Tudo o que um álbum de bebé deve ser. Sem o trabalho.',
      items: [
        {
          title: 'Escolhe as fotografias',
          body: 'De centenas de fotografias por mês, fica com a mais nítida de cada momento e deixa de fora as tremidas, as rajadas e os duplicados.',
        },
        {
          title: 'Ordena-as por meses',
          body: 'Cada fotografia vai para o sítio a que pertence, pela data em que foi tirada, para o livro contar o ano pela ordem em que aconteceu.',
        },
        {
          title: 'Pagina cada página',
          body: 'Cada página dupla é pensada para as fotografias que leva: uma fotografia grande e uma grelha, uma página inteira ou uma fotografia nas duas páginas.',
        },
        {
          title: 'Imprime-as nítidas',
          body: 'Uma fotografia só vai onde tem píxeis para imprimir bem. Uma cópia pequena de uma conversa fica num lugar pequeno, nunca na capa.',
        },
      ],
    },
    howTitle: 'Como fazer um fotolivro do bebé em três passos',
    inside: {
      eyebrow: 'Dentro do livro',
      title: 'Do dia em que nasceu ao primeiro aniversário',
      tour: [
        { label: 'A capa', body: 'O nome do teu bebé e a melhor fotografia do ano, escolhida entre as que mais gostaste e partilhaste.' },
        { label: 'Página um', body: 'O dia em que nasceu, com um pequeno desenho a caneta de uma cegonha com a sua trouxa.' },
        {
          label: 'Uma página dupla por mês',
          body: 'Cada mês na sua estação: toques suaves e os padrões mais leves, passarinhos, estrelas ou nuvens, nunca mais chamativos do que as fotografias.',
        },
        { label: 'A última página', body: 'Um bolo de primeiro aniversário para fechar o ano: e depois fez um ano.' },
      ],
    },
    personal: {
      eyebrow: 'Personalizado',
      title: 'Um álbum de bebé personalizado, sem a parte chata',
      body: 'Um fotolivro personalizado costuma significar uma noite inteira num editor. Aqui as fotografias já estão no sítio, por isso torná-lo teu são uns toques.',
      items: [
        { title: 'O nome dele na capa', body: 'E as datas que escolheres: desde o dia em que nasceu ou desde o dia que quiseres, para 6, 12 ou 18 meses.' },
        { title: 'Três tons de papel', body: 'Creme clássico, rosa suave ou azul suave. A página inteira ganha o tom, não só a margem.' },
        {
          title: 'Textos que podes reescrever',
          body: 'Cada página traz frases curtas como «Sonha em grande, pequeno amor». Mantém-nas, altera-as ou junta uma nota tua onde quiseres.',
        },
      ],
      colors: `À procura de cores? Vê o ${a('girl', 'álbum de fotografias de bebé menina')} e o ${a('boy', 'álbum de fotografias de bebé menino')}.`,
    },
    specs: {
      title: 'O livro, em detalhe',
      items: [
        { label: 'Formato', value: 'Fotolivro quadrado de capa dura' },
        { label: 'Tamanho', value: '{size}' },
        { label: 'Páginas', value: `De ${BOOK.pagesMin} a ${BOOK.pagesMax}, uma página dupla por mês` },
        { label: 'Papel', value: 'Papel acetinado de 170 g, impresso a cores' },
        { label: 'Capa', value: 'Capa dura com plastificação mate' },
        { label: 'Impressão', value: 'Impresso por encomenda, enviado para 16 países' },
      ],
    },
    gift: {
      title: 'O presente que os avós pedem',
      body: 'Um telemóvel cheio de fotografias é difícil de passar pela mesa. Um fotolivro do bebé não. É o presente para um primeiro aniversário, para o Dia da Mãe ou do Pai, e aquele que os avós deixam na mesa da sala.',
    },
    why: {
      title: 'Porquê um fotolivro do bebé, se as fotografias já estão no telemóvel',
      paragraphs: [
        'No primeiro ano de um bebé, os pais tiram centenas de fotografias por mês. Vivem numa galeria, entre capturas de ecrã e talões, e passam num borrão ao fazer scroll. Um álbum de bebé é o contrário: poucas das melhores, por ordem, em papel, num livro que qualquer pessoa pode pegar.',
        'A parte difícil nunca foi imprimir. São as horas a escolher: qual das quarenta fotografias do banho, a que mês pertence aquela fotografia, como pôr uma fotografia vertical ao lado de uma horizontal. É aí que a maioria dos álbuns de bebé pára, por volta do terceiro mês.',
        `O BabyBookAI faz essa parte por ti, no teu telemóvel. Lê as datas, fica com a fotografia mais nítida de cada momento, dá a cada mês a sua página dupla e pagina um álbum que parece desenhado, não despejado. Fica para ti a parte boa: folheá-lo. Se queres o primeiro ano inteiro, da maternidade ao bolo, vê o ${a('firstYear', 'fotolivro do primeiro ano do bebé')}.`,
      ],
    },
    faqTitle: 'Perguntas sobre o fotolivro do bebé',
    faq: [
      {
        question: 'Que tamanho tem o fotolivro do bebé?',
        answer:
          'É um livro quadrado de capa dura, {size}. O quadrado é o único formato em que as fotografias verticais e horizontais do telemóvel cabem sem que alguma seja mal cortada.',
      },
      {
        question: 'Quantas páginas tem?',
        answer: `Entre ${BOOK.pagesMin} e ${BOOK.pagesMax}. O BabyBookAI sugere de ${BOOK.pagesMin} a ${BOOK.pagesSuggestedMax} para um primeiro ano, uma página dupla por mês, e podes juntar páginas até ${BOOK.pagesMax} por um custo adicional.`,
      },
      {
        question: 'As fotografias do telemóvel vão imprimir-se nítidas?',
        answer:
          'Cada fotografia só é colocada onde tem píxeis suficientes para imprimir bem. Uma cópia pequena, como uma guardada de uma conversa, vai para um lugar mais pequeno da página em vez de ocupar uma página inteira ou a capa.',
      },
      {
        question: 'Posso personalizar o livro?',
        answer:
          'Sim. O nome do teu bebé vai na capa, tu escolhes as datas e podes escolher papel rosa suave, azul suave ou creme clássico. Cada página traz frases curtas que podes reescrever, e podes juntar uma nota tua onde quiseres.',
      },
      {
        question: 'Pode um rosto ficar na dobra do meio?',
        answer:
          'Não. As paginações mantêm as fotografias fora da dobra central. A única fotografia que a atravessa é uma colocada de propósito nas duas páginas, e essas são escolhidas para isso.',
      },
      {
        question: 'Quanto tempo demora a fazer?',
        answer:
          'Uns minutos. Quase todo esse tempo é o teu telemóvel a ler a galeria; depois folheias o livro, trocas o que quiseres e encomendas.',
      },
    ],
  },

  firstYear: {
    title: 'Fotolivro do primeiro ano do bebé que não tens de fazer | BabyBookAI',
    description:
      'Um fotolivro do primeiro ano do bebé, mês a mês, feito com as fotografias que já tens no telemóvel. Sem carregar fotografias todas as semanas: o BabyBookAI escolhe, ordena e pagina o ano inteiro.',
    crumb: 'Fotolivro do primeiro ano',
    eyebrow: 'Fotolivro do primeiro ano do bebé',
    h1: 'O fotolivro do primeiro ano do bebé que não tens de fazer',
    lead: 'Doze meses, uma página dupla para cada um, da maternidade ao bolo. O BabyBookAI constrói-o a partir das fotografias que já tens no telemóvel, por isso não tens nada para manter em dia durante o ano.',
    months: {
      eyebrow: 'Mês a mês',
      title: 'Um fotolivro mensal do bebé, sem a sessão de fotografias de cada mês',
      body: 'Sem cartões de marcos, sem repetir a mesma pose na mesma manta todos os meses. O livro segue as fotografias que tiraste de qualquer forma, pela ordem em que as tiraste. Cada bebé tem o seu próprio calendário.',
      items: [
        { n: 'Página 1', moment: 'O dia em que nasceu' },
        { n: 'Mês 1', moment: 'A chegada a casa' },
        { n: 'Mês 2', moment: 'Os primeiros sorrisos a sério' },
        { n: 'Mês 3', moment: 'De barriga para baixo' },
        { n: 'Mês 4', moment: 'As primeiras gargalhadas' },
        { n: 'Mês 5', moment: 'Agarrar tudo' },
        { n: 'Mês 6', moment: 'As primeiras papas' },
        { n: 'Mês 7', moment: 'Sentar-se sozinho' },
        { n: 'Mês 8', moment: 'Em movimento' },
        { n: 'Mês 9', moment: 'Cucu, achou!' },
        { n: 'Mês 10', moment: 'Pôr-se de pé' },
        { n: 'Mês 11', moment: 'Quase a andar' },
        { n: 'Mês 12', moment: 'O primeiro aniversário' },
        { n: 'Última página', moment: 'E depois fez um ano' },
      ],
    },
    unfinished: {
      title: 'Porque é que a maioria dos livros do primeiro ano nunca se acaba',
      paragraphs: [
        'Um livro de bebé para preencher pede-te que imprimas, coles e escrevas todos os meses. Uma app de livro semanal pede uns minutos por semana, cinquenta e duas semanas seguidas. Nenhum parece muito, até chegar o quinto mês, dormires por turnos de duas horas e o livro estar três semanas atrasado.',
        'As fotografias, essas, continuaram a chegar. Nunca deixaste de as tirar. O BabyBookAI começa aí: quando o ano acaba, lê a tua galeria e faz o livro com o que já tens. A tua parte leva minutos, uma só vez.',
      ],
      compare: [
        { label: 'Livro de bebé para preencher', value: 'Todos os meses' },
        { label: 'App de livro semanal', value: '52 semanas' },
        { label: 'BabyBookAI', value: 'Uma vez, em minutos' },
      ],
    },
    howTitle: 'Como se faz o fotolivro do primeiro ano',
    birthday: {
      title: 'A tempo do primeiro aniversário',
      body: 'Tu escolhes as datas, por isso o livro pode acabar na semana da festa ou no dia a seguir. Meses com poucas fotografias não são problema: a paginação segue as fotografias, e um mês com uma só ótima fotografia tem uma página feita para uma. Queres ir além do primeiro ano? Um livro pode cobrir até 18 meses.',
      more: 'Ver o fotolivro do bebé em detalhe',
    },
    faqTitle: 'Perguntas sobre o fotolivro do primeiro ano',
    faq: [
      {
        question: 'Quando devo fazer o fotolivro do primeiro ano?',
        answer:
          'A qualquer altura depois do primeiro aniversário, ou antes se quiseres o livro para a festa: tu escolhes as datas que cobre. Como o BabyBookAI lê as fotografias que já tens, não há nada para manter em dia durante o ano.',
      },
      {
        question: 'E se tiver poucas fotografias de alguns meses?',
        answer:
          'A paginação segue as fotografias. Um mês com dezenas de fotografias boas tem uma página dupla cheia; um mês com uma ótima fotografia tem uma página feita para uma só. No iPhone, o BabyBookAI também consulta as Fotos do iCloud nos meses com poucas fotografias no telemóvel.',
      },
      {
        question: 'O livro pode começar depois do nascimento, ou cobrir mais de um ano?',
        answer:
          'Sim. A maioria dos livros vai do nascimento ao primeiro aniversário, mas tu escolhes o dia em que começa e quanto dura: 6, 12 ou 18 meses, com uma página dupla por mês.',
      },
      {
        question: 'O que vai na primeira e na última página?',
        answer:
          'A primeira página tem o dia em que o teu bebé nasceu, com um pequeno desenho de uma cegonha com a sua trouxa. A última fecha o ano com um bolo de primeiro aniversário.',
      },
      {
        question: 'Tenho de juntar fotografias todas as semanas?',
        answer:
          'Não. É esse o ponto do BabyBookAI: trabalha com as fotografias que já estão no teu telemóvel, por isso não há carregamentos semanais nem nada em que ficar para trás.',
      },
    ],
  },

  girl: {
    title: 'Álbum de fotografias de bebé menina que se enche sozinho | BabyBookAI',
    description:
      'Um álbum de fotografias cor-de-rosa para a tua bebé, feito com as fotografias do teu telemóvel. O BabyBookAI escolhe as melhores, ordena-as mês a mês e pagina um livro de capa dura.',
    crumb: 'Álbum de fotografias de bebé menina',
    eyebrow: 'Álbum de fotografias de bebé menina',
    h1: 'O álbum de fotografias de bebé menina que se enche sozinho',
    lead: 'O primeiro ano dela já está no teu telemóvel, em centenas de fotografias. O BabyBookAI escolhe as melhores, põe cada uma no seu mês e pagina um álbum de capa dura em rosa suave, com o nome dela na capa.',
    empty: {
      title: 'A maioria dos álbuns de bebé menina chega vazia',
      paragraphs: [
        'Um álbum cor-de-rosa com bolsas, um livro de bebé para preencher, um modelo num editor de fotografia: todos esperam que imprimas, escolhas e coloques um ano de fotografias. Com um bebé em casa, essa noite raramente chega.',
        'Este começa cheio. Lê as datas das tuas fotografias, fica com a mais nítida de cada momento, deixa de fora as tremidas e as doze quase cópias do mesmo sorriso, e dá a cada mês a sua página dupla. Folheias e trocas o que preferires não guardar.',
      ],
    },
    howTitle: 'Como fazer um álbum de fotografias de bebé menina em minutos',
    inside: {
      eyebrow: 'Dentro do álbum dela',
      title: 'Do dia em que nasceu ao primeiro aniversário',
      items: [
        { title: 'O nome dela na capa', body: 'Com a melhor fotografia do ano dela, escolhida entre as que marcaste como favoritas e mais partilhaste.' },
        { title: 'O dia em que nasceu', body: 'Página um, com um pequeno desenho a caneta de uma cegonha com a sua trouxa.' },
        { title: 'Uma página dupla por mês', body: 'O primeiro sorriso, o primeiro banho, as primeiras papas, cada um no mês em que aconteceu.' },
        { title: 'Um bolo para fechar o ano', body: 'A última página termina o livro com o primeiro aniversário dela.' },
      ],
    },
    details: {
      title: 'Uma recordação feita para ser manuseada',
      body: `Um livro quadrado de capa dura, {size}, com capa mate e de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas em papel acetinado de 170 g, por {price} com portes incluídos. Quadrado, porque as fotografias verticais e horizontais dela cabem sem que alguma seja mal cortada.`,
      more: `Preferes azul ou creme? Vê o ${a('boy', 'álbum de fotografias de bebé menino')}, ou tudo sobre o ${a('babyPhotoBook', 'fotolivro do bebé')}.`,
    },
    faqTitle: 'Perguntas sobre o álbum de fotografias de bebé menina',
    faq: [
      {
        question: 'Posso fazer o álbum de fotografias dela em rosa?',
        answer:
          'Sim. O livro tem três tons de papel: rosa suave, azul suave e creme clássico. O rosa tinge todas as páginas, não só a margem, e os padrões leves de cada mês ganham o mesmo tom. Podes mudá-lo as vezes que quiseres antes de encomendar.',
      },
      {
        question: 'O nome dela vai na capa?',
        answer:
          'Sim. O nome dela e a melhor fotografia do ano vão na capa, escolhida entre as fotografias que marcaste como favoritas e mais partilhaste. A primeira página tem o dia em que nasceu.',
      },
      {
        question: 'Posso mudar os textos das páginas?',
        answer:
          'Sim. Cada página traz frases curtas como «O nosso pequeno raio de sol». Mantém-nas, reescreve-as ou junta uma nota tua em qualquer ponto da página.',
      },
      {
        question: 'E se ainda não fez um ano?',
        answer:
          'Tu escolhes as datas. Um livro pode cobrir 6, 12 ou 18 meses a partir do dia que escolheres, por isso podes fazer um aos seis meses e outro para o primeiro aniversário dela.',
      },
    ],
  },

  boy: {
    title: 'Álbum de fotografias de bebé menino feito com o teu telemóvel | BabyBookAI',
    description:
      'Um álbum de fotografias de bebé menino em azul suave, feito para ti com as fotografias do teu telemóvel. O BabyBookAI escolhe as melhores, ordena-as por meses e pagina um livro de capa dura.',
    crumb: 'Álbum de fotografias de bebé menino',
    eyebrow: 'Álbum de fotografias de bebé menino',
    h1: 'Álbum de fotografias de bebé menino, feito com as fotografias do teu telemóvel',
    lead: 'Dá ao BabyBookAI o nome dele e o dia do aniversário. Percorre as fotografias do teu telemóvel, fica com os melhores momentos dele de cada mês e pagina um álbum de capa dura em azul suave. Só tens de o folhear.',
    thousands: {
      title: 'De milhares de fotografias a um só álbum',
      body: 'A parte difícil de um álbum de bebé nunca foi imprimir. É escolher. O BabyBookAI escolhe no teu telemóvel, por isso não se carrega nada até encomendares.',
      steps: [
        { label: '5437 fotografias', body: 'Um ano de galeria: banhos, sestas, o mesmo sorriso quarenta vezes.' },
        { label: '157 escolhidas', body: 'A mais nítida de cada momento, sem rajadas, sem quase cópias, sem capturas de ecrã.' },
        { label: 'Um livro', body: 'Uma página dupla por mês, por ordem, pronta a folhear e encomendar.' },
      ],
      note: 'Os números são de um ano real, o do ecrã acima. Os teus serão diferentes.',
    },
    howTitle: 'Como fazer um álbum de fotografias de bebé menino',
    colors: {
      eyebrow: 'Personalizado',
      title: 'Azul suave, o nome dele, as tuas palavras',
      paragraphs: [
        'O nome dele e a melhor fotografia do ano vão na capa. Escolhe azul suave, ou creme ou rosa se preferires: o tom colore todas as páginas, com os padrões mais leves de passarinhos, estrelas ou nuvens atrás das fotografias.',
        'Cada página traz uma frase curta que podes manter ou reescrever, e podes juntar uma nota tua onde quiseres. A primeira página tem o dia em que nasceu; a última fecha o ano com um bolo de primeiro aniversário.',
      ],
    },
    details: {
      title: 'O álbum em si',
      body: `Um livro quadrado de capa dura, {size}, capa mate, de ${BOOK.pagesMin} a ${BOOK.pagesMax} páginas em papel acetinado de 170 g. {price} com portes incluídos, impresso por encomenda e enviado para tua casa. Cada fotografia só vai onde tem píxeis para imprimir nítida, por isso uma cópia pequena de uma conversa nunca acaba na capa.`,
      more: `Estás a fazer um para uma filha? Vê o ${a('girl', 'álbum de fotografias de bebé menina')}. Para o ano inteiro, mês a mês, vê o ${a('firstYear', 'fotolivro do primeiro ano')}.`,
    },
    faqTitle: 'Perguntas sobre o álbum de fotografias de bebé menino',
    faq: [
      {
        question: 'Posso fazer o álbum de fotografias dele em azul?',
        answer:
          'Sim. Escolhe azul suave, rosa suave ou creme clássico. O tom colore todas as páginas, e os padrões leves de cada mês também o ganham. Podes mudar antes de encomendar.',
      },
      {
        question: 'O nome dele vai na capa?',
        answer:
          'Sim. O nome dele e a melhor fotografia do ano vão na capa. A primeira página tem o dia em que nasceu, e a última fecha o ano com um bolo de primeiro aniversário.',
      },
      {
        question: 'Vai escolher fotografias dele e não de toda a gente?',
        answer:
          'Escolhe entre as fotografias das datas que indicares, fica com a mais nítida de cada momento e deixa de fora os duplicados. Depois folheias o livro e trocas ou tiras qualquer fotografia que não queiras.',
      },
      {
        question: 'É um bom presente para os avós?',
        answer:
          'É o que eles pedem. Um telemóvel cheio de fotografias é difícil de passar pela mesa; um livro de capa dura do primeiro ano dele não.',
      },
    ],
  },

  ideas: {
    title: 'Ideias para o fotolivro do bebé: 25 maneiras de contar o primeiro ano | BabyBookAI',
    headline: 'Ideias para o fotolivro do bebé: 25 maneiras de contar o primeiro ano',
    description:
      'Ideias para o fotolivro do bebé no primeiro ano: como organizá-lo, o que fotografar, paginações que funcionam, legendas para aproveitar e quantas fotografias escolher.',
    crumb: 'Ideias para o fotolivro',
    eyebrow: 'Ideias',
    h1: 'Ideias para o fotolivro do bebé: 25 maneiras de contar o primeiro ano',
    byline: 'Pela equipa do BabyBookAI',
    date: '9 de outubro de 2026',
    lead: 'No primeiro aniversário, a maioria dos pais tem milhares de fotografias do bebé e nenhuma ideia de por onde começar. Estas ideias para o fotolivro do bebé são as que funcionam em papel: como organizar o ano, o que fotografar enquanto ainda há tempo, paginações que parecem desenhadas e legendas que podes aproveitar.',
    tocTitle: 'Neste artigo',
    toc: {
      organize: 'Maneiras de organizar o livro',
      photograph: 'O que fotografar enquanto há tempo',
      layout: 'Ideias de páginas e paginação',
      captions: 'Ideias de legendas',
      choosing: 'Quantas fotografias, e quais',
      gifts: 'Ideias de presente',
    },
    organize: {
      title: 'Maneiras de organizar um fotolivro do bebé',
      body: 'Escolhe um fio condutor para o livro antes de escolheres uma só fotografia. Ele decide o que entra e o que fica no telemóvel.',
      items: [
        {
          title: 'Mês a mês',
          body: 'O fotolivro clássico do primeiro ano: uma página dupla por mês, pela ordem em que aconteceu. Ao folhear, vês o bebé crescer. Resolve também a pergunta mais difícil, onde vai cada fotografia, só pela data.',
        },
        {
          title: 'Por primeiras vezes',
          body: 'Primeiro banho, primeiro sorriso, primeiras papas, primeiros passos, primeiro corte de cabelo. Cada uma com a sua página. Funciona bem num livro mais curto, ou como secção depois dos meses.',
        },
        {
          title: 'Por estação',
          body: 'Quatro capítulos: a primeira neve, a primeira praia, as primeiras folhas de outono. Bom quando as fotografias se concentram em viagens e feriados.',
        },
        {
          title: 'O mesmo sítio, todos os meses',
          body: 'A mesma cadeira, o mesmo peluche para comparar, fotografados no mesmo dia de cada mês. Se começaste, dá à série uma página dupla só dela no fim, lado a lado.',
        },
        {
          title: 'Um dia normal',
          body: 'Um dia comum, da manhã à hora de dormir: o biberão, a sesta, o banho, o passeio. O dia a dia é o que se esquece primeiro.',
        },
        {
          title: 'As pessoas que o tiveram ao colo',
          body: 'Uma página para cada avô, para os irmãos, os padrinhos, o amigo que vinha todos os domingos. As fotografias com outras pessoas são as que uma criança procura mais tarde.',
        },
      ],
    },
    photograph: {
      title: 'O que fotografar enquanto há tempo',
      body: 'Se o ano ainda não acabou, estas são as fotografias que os pais mais lamentam não ter quando fazem o livro:',
      items: [
        'As mãos e os pés ao lado dos teus, de poucos em poucos meses',
        'O quarto tal como está, antes de mudar',
        'A desarrumação das refeições, não só os retratos de cara lavada',
        'A dormir em sítios estranhos: a cadeirinha do carro, o ombro, a cama do cão',
        'Um plano geral do quarto, não só grandes planos',
        'Tu também na fotografia: dá o telemóvel a outra pessoa',
        'Os falhanços: a tremida, o bocejo, o choro antes do sorriso',
      ],
    },
    layout: {
      title: 'Ideias de páginas e paginação',
      body: 'A diferença entre um livro que parece desenhado e um que parece despejado está sobretudo em poucas regras.',
      items: [
        {
          title: 'Uma fotografia grande, depois uma grelha',
          body: 'A melhor fotografia do mês grande à esquerda, cinco ou seis mais pequenas à direita. Cada página dupla ganha um sítio para onde olhar primeiro.',
        },
        {
          title: 'Uma página inteira para a fotografia que a merece',
          body: 'Nem todos os meses precisam de uma grelha. Um ótimo retrato sozinho numa página diz mais do que seis bons.',
        },
        {
          title: 'Rostos fora da dobra',
          body: 'A maioria dos fotolivros é colada na lombada, por isso o meio da página dupla curva. Mantém cada fotografia na sua página e só atravessa a dobra de propósito.',
        },
        {
          title: 'Mistura grandes planos e planos gerais',
          body: 'Um grande plano ao lado de outro é repetitivo. Põe ao lado um plano geral do quarto ou do jardim.',
        },
        {
          title: 'Deixa algum papel livre',
          body: 'O espaço em branco faz uma página parecer desenhada em vez de cheia. Uma frase curta num espaço vazio faz mais do que outra fotografia.',
        },
        {
          title: 'Escolhe o quadrado',
          body: 'As fotografias do telemóvel saem verticais e horizontais. Numa página quadrada cabem as duas sem que nenhuma seja mal cortada.',
        },
      ],
      figcaption: 'Uma fotografia grande, uma grelha ao lado, nada na dobra.',
    },
    captions: {
      title: 'Ideias de legendas para um fotolivro do bebé',
      body: 'Mantém as legendas curtas: uma linha por página. Datas, lugares, alcunhas e os detalhes que vais esquecer (a canção que parava o choro, a primeira palavra) valem mais do que parágrafos longos. Algumas para aproveitar:',
      items: [
        'Sonha em grande, pequeno amor',
        'O nosso pequeno raio de sol',
        'És tão adorável',
        'Mãos pequenas, grandes planos',
        'Casa é onde estás',
        'O mês em que descobriste os teus pés',
        'Dez dedinhos, dez dedinhos, todo coração',
        'Olá, mundo',
        'És tão amado',
        'E depois fizeste um ano',
      ],
    },
    choosing: {
      title: 'Quantas fotografias, e quais',
      tips: [
        {
          lead: 'Aponta para 10 a 15 por mês.',
          body: 'Um fotolivro do primeiro ano de 30 páginas leva cerca de 150 fotografias à vontade. Num ano real que analisámos, ficaram 157 fotografias de 5437.',
        },
        { lead: 'Fica com uma de cada momento.', body: 'Os telemóveis tiram rajadas; o livro precisa da imagem mais nítida, não das doze.' },
        {
          lead: 'Cuidado com as cópias das conversas.',
          body: 'Uma fotografia guardada de uma app de mensagens é uma cópia mais pequena. Imprime bem em pequeno, mas não numa página inteira nem na capa. Se tiveres o original, usa esse.',
        },
      ],
      product: `Esta parte, a escolha, é onde a maioria dos livros de bebé pára. É a parte que o ${a('home', 'BabyBookAI')} faz por ti: lê a tua galeria no telemóvel, fica com a fotografia mais nítida de cada momento, ordena o ano mês a mês e pagina o livro, para só teres de o folhear. Vê como se faz o ${a('firstYear', 'fotolivro do primeiro ano')}.`,
    },
    gifts: {
      title: 'Ideias de presente',
      items: [
        { lead: 'Para o primeiro aniversário.', body: 'Fecha o livro na semana da festa e passa-o pela mesa.' },
        {
          lead: 'Para os avós.',
          body: `O presente que ficam na mesa da sala. Um ${a('girl', 'álbum de fotografias de bebé menina')} em rosa ou um ${a('boy', 'álbum de fotografias de bebé menino')} em azul, com o nome do bebé na capa.`,
        },
      ],
    },
    box: {
      title: 'Poucas noites livres?',
      body: 'O BabyBookAI transforma as fotografias que já tens no telemóvel num livro de capa dura do primeiro ano, em minutos.',
    },
    faqTitle: 'Perguntas sobre o fotolivro do bebé',
    faq: [
      {
        question: 'Quantas fotografias deve ter um fotolivro do bebé?',
        answer:
          'Para um primeiro ano, 10 a 15 fotografias por mês funcionam bem: 120 a 180 no total. Um livro de 30 páginas leva cerca de 150 sem parecer apinhado, com espaço para uma fotografia grande na maioria das páginas duplas.',
      },
      {
        question: 'O que deve ter o fotolivro do primeiro ano do bebé?',
        answer:
          'O dia em que nasceu, uma página dupla para cada mês por ordem, as primeiras vezes que apanhaste na câmara (sorriso, banho, comida, passos), as pessoas que o tiveram ao colo e um primeiro aniversário para fechar o ano. Legendas curtas com datas ajudam mais do que textos longos.',
      },
      {
        question: 'O que se escreve num fotolivro do bebé?',
        answer:
          'Frases curtas: uma data, um lugar, uma alcunha, um peso, ou aquilo de que te vais esquecer daqui a cinco anos (a canção que parava o choro, a primeira palavra). Uma linha por página chega.',
      },
      {
        question: 'Podem imprimir-se fotografias do telemóvel num fotolivro?',
        answer:
          'Sim. As fotografias tiradas diretamente com a câmara do telemóvel imprimem-se nítidas mesmo numa página inteira. As cópias guardadas de apps de mensagens são mais pequenas; imprimem bem num lugar pequeno da página, não numa página inteira nem na capa.',
      },
    ],
  },

  about: {
    title: 'Sobre o BabyBookAI | O fotolivro do bebé que se faz sozinho',
    description:
      'O BabyBookAI é uma app da Photo-to-Text que transforma as fotografias do teu telemóvel num fotolivro impresso do primeiro ano do teu bebé. Quem somos e como o fazemos.',
    crumb: 'Sobre nós',
    eyebrow: 'Sobre nós',
    h1: 'Um livro de bebé para pais sem tempo para o fazer',
    paragraphs: [
      'No primeiro ano de um bebé, os pais tiram milhares de fotografias. Muito poucas acabam num livro, porque fazer um significa horas a escolher, ordenar e colocar, com um bebé em casa.',
      `O ${SITE.name} faz esse trabalho por ti. Lê as fotografias do teu telemóvel, fica com o melhor de cada momento, ordena-as mês a mês e pagina um livro de capa dura. Tu folheias, alteras o que quiseres, e ele é impresso e enviado para tua casa.`,
    ],
    beliefsTitle: 'O que defendemos',
    beliefs: [
      {
        title: 'A seleção é o produto',
        body: 'Qualquer pessoa pode imprimir 200 fotografias. O valor está em escolher as melhores 150 entre milhares e paginá-las para que o livro pareça composto, não gerado.',
      },
      {
        title: 'As tuas fotografias ficam no teu telemóvel',
        body: 'As fotografias são escolhidas no teu telemóvel. Não se carrega nada para as escolher; só o livro acabado é enviado, quando o encomendas, para ser impresso.',
      },
      {
        title: 'Sem trabalhos de casa',
        body: 'Sem lembretes semanais, sem diário, sem subscrição. As fotografias já as tiraste; o livro faz-se com elas, uma vez, quando quiseres.',
      },
      {
        title: 'Um livro feito para durar',
        body: 'Um livro quadrado de capa dura, {size}, em papel acetinado de 170 g, impresso por encomenda pelo nosso parceiro de impressão e enviado para tua casa.',
      },
    ],
    who: {
      title: `Um produto ${PUBLISHER.name}`,
      body: `O ${SITE.name} é feito pela <a class="lnk-light" href="${PUBLISHER.url}">${PUBLISHER.name}</a>, uma pequena empresa que faz presentes personalizados a partir de fotografias. O logótipo dela está na contracapa de cada livro. Perguntas, ideias ou um livro que não saiu bem: escreve para <a class="lnk-light" href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>.`,
    },
    more: `Vê o ${a('babyPhotoBook', 'fotolivro do bebé')}, lê a ${a('privacy', 'política de privacidade')} ou procura ajuda na ${a('support', 'página de ajuda')}.`,
  },

  support: {
    title: 'Ajuda do BabyBookAI | Ajuda com o teu fotolivro do bebé',
    description:
      'Ajuda com a app BabyBookAI e a tua encomenda: encontrar as fotografias, as fotografias do WhatsApp, guardar o livro, preço e envio, e como falar connosco.',
    crumb: 'Ajuda e perguntas',
    eyebrow: 'Ajuda',
    h1: 'Como podemos ajudar?',
    lead: 'A maioria das respostas está em baixo. Para tudo o resto, sobre a app ou uma encomenda, escreve-nos e uma pessoa responderá.',
    emailLabel: 'E-mail',
    emailNote: 'É sobre uma encomenda? Escreve a partir do e-mail com que encomendaste, para a podermos encontrar.',
    appTitle: 'A app e a tua encomenda',
    bookTitle: 'O livro e como é feito',
    more: `Mais: a ${a('privacy', 'política de privacidade')}, os ${a('terms', 'termos')} e ${a('about', 'quem somos')}.`,
    faq: [
      {
        question: 'A app encontrou poucas fotografias. Porquê?',
        answer:
          'O BabyBookAI só vê as fotografias que lhe é permitido ver. Quando o telemóvel perguntar, escolhe «Permitir todas»: com «Selecionar fotografias» só vê as que escolheste. No Android lê as fotografias guardadas no telemóvel, por isso as que só estão no Google Fotos online não são encontradas.',
      },
      {
        question: 'Onde estão as minhas fotografias do WhatsApp?',
        answer:
          'As fotografias que guardaste do WhatsApp estão na galeria do telemóvel, por isso a procura encontra-as. Servem para preencher os meses com poucas fotografias da câmara, e se a mesma fotografia estiver duas vezes no telemóvel, fica a cópia mais nítida e maior.',
      },
      {
        question: 'O meu livro fica guardado se eu fechar a app?',
        answer:
          'Sim. O teu livro é guardado no telemóvel enquanto trabalhas, com as tuas fotografias, textos e cores, e abre onde o deixaste. Começar um livro novo substitui-o.',
      },
      {
        question: 'Quanto custa o livro e o envio?',
        answer: `{price} por ${BOOK.pagesMin} páginas, portes incluídos. As páginas extra, até ${BOOK.pagesMax}, custam à parte. O preço final é mostrado na tua moeda antes de pagares.`,
      },
      {
        question: 'Para que países enviam?',
        answer:
          'Estados Unidos, Reino Unido, Canadá, Austrália, Irlanda, Alemanha, Áustria, França, Bélgica, Espanha, Itália, Países Baixos, Portugal, Japão, Coreia do Sul e China.',
      },
      {
        question: 'Como pago?',
        answer: 'Com cartão, através da Stripe. Nunca vemos os dados do teu cartão.',
      },
      {
        question: 'Há algo errado com a minha encomenda. O que faço?',
        answer: `Escreve para ${EMAIL} a partir do e-mail com que encomendaste, e junta uma fotografia se o livro chegou danificado.`,
      },
      {
        question: 'Existe app para iPhone?',
        answer: 'Ainda não. O BabyBookAI está no Google Play para Android, e a app para iPhone chega em breve.',
      },
      {
        question: 'Como apago os meus dados?',
        answer: `As tuas fotografias nunca saem do telemóvel para fazer o livro, e apagar a app apaga o livro guardado. Se fizeste uma encomenda, escreve para ${EMAIL} e apagamos o que guardamos e que a lei não nos obriga a conservar. A política de privacidade tem os detalhes.`,
      },
    ],
  },

  privacy: {
    title: 'Política de privacidade | BabyBookAI',
    description:
      'O que o BabyBookAI faz com as tuas fotografias e os dados da tua encomenda: a tua biblioteca é lida no teu telemóvel, e só o livro acabado é enviado para ser impresso.',
    crumb: 'Privacidade',
    eyebrow: 'Privacidade',
    h1: 'As fotografias do teu bebé ficam no teu telemóvel',
    updatedLabel: 'Política de privacidade · Última atualização:',
    updated: '9 de outubro de 2026',
    intro: `O BabyBookAI («nós») é uma app que faz um fotolivro impresso do primeiro ano do teu bebé com as fotografias do teu telemóvel. É um produto da Photo-to-Text. Contacto: ${EMAIL}.`,
    shortTitle: 'Em resumo',
    short: [
      'A tua biblioteca de fotografias é lida <strong>no teu telemóvel</strong>. Nós nunca a vemos.',
      'Quando encomendas um livro, o ficheiro do livro acabado (as fotografias escolhidas, os teus textos, o nome do teu bebé) é enviado para nós e para a nossa gráfica.',
      'Para o entregar precisamos do teu nome, e-mail e morada. O pagamento é tratado pela Stripe; nunca vemos o teu cartão.',
      'A app não tem publicidade, análise, rastreio nem conta.',
    ],
    phoneTitle: 'O que a app faz no teu telemóvel',
    phone: [
      'Para escolher as fotografias, a app lê as fotografias da tua biblioteca dos meses que indicas: datas, tamanhos, nitidez e duplicados. Isto acontece só no teu telemóvel, e nada sobre a tua biblioteca é enviado para lado nenhum.',
      '<strong>Reconhecer o teu bebé (opcional).</strong> Se ativares o interruptor de reconhecimento antes da pesquisa, a app aprende o rosto do teu bebé a partir de fotografias em que tocas, no teu telemóvel, para deixar de fora do livro os filhos dos outros. Os dados do rosto só existem na memória do telemóvel durante a pesquisa e são apagados quando acaba; nunca são guardados nem enviados. O interruptor está desligado por predefinição e não é oferecido no Illinois, no Texas nem em Washington.',
      'O livro em que estás a trabalhar é guardado no teu telemóvel para poderes voltar a ele. Contém que fotografias lá estão, os teus textos e onde estão os rostos nessas fotografias (para as enquadrar), nunca dados de rostos. Começar um livro novo apaga-o, tal como desinstalar a app.',
    ],
    receiveTitle: 'O que recebemos, e porquê',
    table: {
      head: ['O quê', 'Porquê', 'Partilhado com'],
      rows: [
        ['O ficheiro do livro: as fotografias do teu livro, os teus textos, o nome e o ano de nascimento do teu bebé', 'Para imprimir o teu livro', 'Gelato (a nossa gráfica)'],
        ['Número de páginas, moeda', 'Para calcular o preço da encomenda', '—'],
        ['O teu nome, e-mail, morada de entrega, telefone (opcional)', 'Para entregar o livro e enviar o recibo', 'Gelato (entrega), Stripe (recibo)'],
        ['Dados de pagamento', 'Para cobrar o pagamento', 'Só a Stripe; nós nunca os recebemos'],
      ],
    },
    receiveNote:
      'Usamos esta informação apenas para fazer, enviar e acompanhar a tua encomenda. Não a vendemos, não a usamos para publicidade e não usamos as tuas fotografias para mais nada além de imprimir o teu livro.',
    othersTitle: 'Quem mais a trata',
    others: [
      '<strong>Stripe</strong> processa os pagamentos (<a class="lnk" href="https://stripe.com/pt/privacy">stripe.com/privacy</a>).',
      '<strong>Gelato</strong> imprime e envia o livro (<a class="lnk" href="https://www.gelato.com/legal/privacy">gelato.com/legal/privacy</a>).',
      'O nosso servidor de encomendas, onde o ficheiro do livro espera até chegar à gráfica.',
    ],
    keepTitle: 'Durante quanto tempo os guardamos',
    keep: [
      'As encomendas nunca pagas são apagadas, com o respetivo ficheiro do livro, ao fim de 7 dias.',
      'Nas encomendas pagas guardamos os dados da encomenda e o ficheiro do livro durante o tempo necessário para entregar a encomenda, apoiar-te e cumprir as regras fiscais e contabilísticas. Podes pedir-nos que os apaguemos a qualquer momento (ver abaixo).',
    ],
    rightsTitle: 'Os teus direitos, e como apagar os teus dados',
    rights: [
      `Podes pedir-nos uma cópia dos teus dados, a sua correção ou o seu apagamento escrevendo para ${EMAIL} a partir do e-mail com que encomendaste, indicando BabyBookAI. Responderemos em 30 dias. Para apagar os teus dados, escreve «apagar os meus dados»: apagamos então os dados da tua encomenda e o ficheiro do teu livro, exceto o que a lei nos obriga a conservar, e pedimos à Gelato e à Stripe que apaguem os deles.`,
      'Se vives na União Europeia ou no Reino Unido, podes também apresentar queixa à tua autoridade de proteção de dados (em Portugal, a CNPD). Tratamos os dados da tua encomenda porque nos pediste que fizéssemos e enviássemos o teu livro e, se a usares, o reconhecimento facial apenas com o teu consentimento, que podes retirar desligando o interruptor.',
    ],
    websiteTitle: 'Este sítio',
    websiteLanguage:
      'O babybookai.com lê o país de onde vem a tua visita, tal como o indica o nosso fornecedor de alojamento (Cloudflare), para mostrar os preços na tua moeda e, na primeira visita, a página no teu idioma. Não é guardado. Um cookie, «lang», lembra o idioma em que leste o sítio da última vez, para a página inicial abrir nele da próxima vez.',
    websiteAnalytics:
      'O babybookai.com usa o Google Analytics para contar as visitas e ver que páginas são lidas, através de cookies da Google. Recebe o teu endereço IP, o navegador e as páginas que visitas, nunca nada da app. Podes bloqueá-lo nas definições do navegador ou com o suplemento de desativação da Google (<a class="lnk" href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). A política da Google: <a class="lnk" href="https://policies.google.com/privacy">policies.google.com/privacy</a>.',
    websiteNoAnalytics: 'O babybookai.com não usa scripts de análise nem de publicidade.',
    childrenTitle: 'Crianças',
    children:
      'O BabyBookAI é para pais. Não se dirige a crianças, e não recolhemos conscientemente informação de crianças. As fotografias do teu bebé só são usadas para imprimir o teu livro.',
    securityTitle: 'Segurança',
    security:
      'Tudo o que a app envia viaja cifrado (HTTPS). Os ficheiros dos livros ficam numa pasta privada do nosso servidor e só chegam à gráfica através de uma ligação assinada que expira.',
    changesTitle: 'Alterações',
    changes: 'Publicaremos aqui quaisquer alterações e atualizaremos a data acima.',
  },

  terms: {
    title: 'Termos de utilização e de venda | BabyBookAI',
    description:
      'Os termos para usar a app BabyBookAI e encomendar um fotolivro do bebé impresso: as tuas fotografias, encomendas e pagamento, impressão e entrega, e livros danificados.',
    crumb: 'Termos',
    eyebrow: 'Termos',
    h1: 'Termos de utilização e de venda',
    updatedLabel: 'Última atualização:',
    updated: '9 de outubro de 2026',
    intro: `Estes termos aplicam-se à app ${SITE.name} e aos livros impressos encomendados através dela. O ${SITE.name} é um produto da ${PUBLISHER.name} («nós»). Ao usares a app ou ao encomendares um livro, aceitas estes termos. Perguntas: ${EMAIL}.`,
    sections: [
      {
        title: 'A app',
        paragraphs: [
          'A app é gratuita para descarregar e usar. Fazer um livro e folheá-lo não custa nada; só pagas se encomendares um livro impresso. Podes usar a app para uso pessoal e não comercial. Podemos melhorar, alterar ou terminar funcionalidades da app ao longo do tempo.',
        ],
      },
      {
        title: 'As tuas fotografias e textos',
        list: [
          'As tuas fotografias e os teus textos continuam a ser teus. Não reivindicamos quaisquer direitos sobre eles.',
          `Quando encomendas, permites que nós e a nossa gráfica usemos o ficheiro do livro apenas para imprimir, enviar e acompanhar essa encomenda, como a ${a('privacy', 'política de privacidade')} descreve.`,
          'Confirmas que tens o direito de imprimir as fotografias e os textos do teu livro e que nada nele é ilegal. Podemos recusar imprimir um livro que o seja.',
        ],
      },
      {
        title: 'Encomendas e pagamento',
        list: [
          'Tens de ter 18 anos ou mais para fazer uma encomenda.',
          `A app mostra o preço total antes de pagares, na moeda do teu país, com portes incluídos. Um livro de ${BOOK.pagesMin} páginas custa {price}; as páginas extra, até ${BOOK.pagesMax}, custam mais e o preço é indicado na app.`,
          'O pagamento é feito com cartão através da Stripe. Nunca vemos os dados do teu cartão.',
          'Verificamos cada encomenda antes de ir para impressão. Se não pudermos cumprir uma encomenda, cancelamo-la e reembolsamos-te na totalidade.',
          'Antes de pagares, vê o livro todo: fotografias, nomes, datas e ortografia. Cada livro é impresso exatamente como o aprovas.',
        ],
      },
      {
        title: 'Impressão e entrega',
        paragraphs: [
          'Os livros são impressos por encomenda pelo nosso parceiro de impressão e enviados para a morada que indicas, nos países que a app apresenta. Os prazos de entrega indicados são estimativas. Verifica bem a morada: não podemos redirecionar um livro depois de enviado.',
        ],
      },
      {
        title: 'Livros danificados, mal impressos ou perdidos',
        paragraphs: [
          `Cada livro é feito para ti, por isso não o podemos aceitar de volta se mudares de ideias. Se o teu livro chegar danificado, tiver um defeito de impressão ou não chegar, escreve para ${EMAIL} no prazo de 30 dias após a entrega (ou da data de entrega prevista) com o e-mail da tua encomenda e, se puderes, uma fotografia. Voltaremos a imprimir o livro ou reembolsar-te-emos. Nada nestes termos limita os direitos que tens ao abrigo da lei do consumo do local onde vives.`,
        ],
      },
      {
        title: 'Responsabilidade',
        paragraphs: [
          'Esforçamo-nos para que a app e os livros saiam bem, mas a app é fornecida tal como está. Na medida em que a lei o permita, a nossa responsabilidade por uma encomenda limita-se ao que pagaste por ela. Não somos responsáveis por fotografias perdidas no teu telemóvel: a app lê as tuas fotografias, mas nunca as apaga.',
        ],
      },
      {
        title: 'Alterações',
        paragraphs: [
          'Podemos atualizar estes termos. As alterações são publicadas aqui com uma data nova e aplicam-se às encomendas feitas depois dessa data.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Página não encontrada | BabyBookAI',
    description: 'Esta página não existe. Encontra aqui o fotolivro do bebé do BabyBookAI.',
    h1: 'Esta página perdeu-se',
    body: 'A ligação pode ser antiga. Estes são bons sítios por onde começar:',
  },
};
