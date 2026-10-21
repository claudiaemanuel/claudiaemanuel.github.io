/* =========================================================
   CONTENUTI DEL SITO — Claudia & Manuel
   Tutti i testi, le carte e le domande stanno qui.
   Per correggere un testo basta modificarlo in questo file.
   ========================================================= */

const RETRO = "carte/retro.webp";

/* ---------- LE CARTE ----------
   hotspots: punti cliccabili sul fronte (x, y in % della carta)
   quiz: id delle domande che riguardano questa carta (per l'etichetta in galleria)
*/
const CARDS = {
  "asso-denari": {
    name: "Asso di Denari",
    img: "carte/asso-denari.webp",
    title: "La Trinacria",
    subtitle: "Le radici siciliane di Claudia",
    quiz: ["q1"],
    hotspots: [
      { x: 50, y: 50, text: "La Trinacria, simbolo della Sicilia e omaggio alle origini di Claudia." }
    ],
    story: `
<p>Al centro della carta compare la <strong>Trinacria</strong>, uno dei simboli più riconoscibili della Sicilia. Le sue tre gambe richiamano tradizionalmente la forma triangolare dell’isola e i suoi tre promontori estremi, mentre nel tempo la Trinacria è diventata soprattutto un emblema di identità, appartenenza e legame con la terra siciliana.</p>
<p>Racchiusa all’interno del Denaro, diventa così una piccola commemorazione delle origini di Claudia: un modo per portare nel mazzo la terra da cui proviene e le radici che continueranno ad accompagnarla anche nel nuovo cammino.</p>`
  },

  "asso-coppe": {
    name: "Asso di Coppe",
    img: "carte/asso-coppe.webp",
    title: "L’inferriata del Lungomare",
    subtitle: "Il Lungomare di Reggio, dalla storia di Manuel alla nostra",
    quiz: ["q2"],
    hotspots: [
      { x: 50, y: 39, text: "Il motivo dell’inferriata del Lungomare di Reggio Calabria, reinterpretato come decorazione della coppa." }
    ],
    story: `
<p>Al centro della carta compare un richiamo al <strong>motivo ornamentale dell’inferriata del Lungomare di Reggio Calabria</strong>, reinterpretato come elemento decorativo della coppa.</p>
<p>Il Lungomare è un luogo strettamente legato all’infanzia di Manuel e alla sua quotidianità a Reggio. Oggi continua ad avere un posto importante anche nella nostra vita: quando torniamo in città, è uno dei luoghi in cui amiamo passeggiare insieme.</p>
<p>Il motivo dell’inferriata diventa così il punto d’incontro tra <strong>memoria e presente</strong>: un luogo che prima apparteneva alla storia di Manuel e che, con il tempo, è diventato parte anche della nostra.</p>`
  },

  "asso-spade": {
    name: "Asso di Spade",
    img: "carte/asso-spade.webp",
    title: "Il pesce spada",
    subtitle: "Il mare e lo Stretto",
    quiz: [],
    hotspots: [
      { x: 50, y: 52, text: "Il pesce spada, simbolo dello Stretto di Messina e della sua antica tradizione di pesca." }
    ],
    story: `
<p>L’Asso di Spade introduce il mare, filo conduttore di tutte le carte di questo seme. È l’elemento che forse più ci rappresenta: una passione che condividiamo, parte del nostro lavoro e, allo stesso tempo, il luogo in cui entrambi riusciamo a ritrovare tranquillità e sentirci a casa.</p>
<p>Nell’Asso questo legame prende la forma del <strong>pesce spada</strong>, fortemente associato allo Stretto di Messina e alla tradizione della sua pesca. Una pratica che nel tempo ha sviluppato tecniche, rituali, racconti e leggende profondamente legati alla cultura dello Stretto.</p>
<p>La scelta del pesce spada richiama quindi sia il rapporto con il mare sia un interesse particolare di Manuel, da sempre affascinato <strong>dalla storia della pesca e dalle tradizioni legate al pesce spada</strong>.</p>`
  },

  "asso-bastoni": {
    name: "Asso di Bastoni",
    img: "carte/asso-bastoni.webp",
    title: "La vite e il fico",
    subtitle: "La leggenda della fondazione di Reggio",
    quiz: ["q10"],
    hotspots: [
      { x: 48, y: 50, text: "La vite avvinghiata al fico selvatico: il segno che, secondo la leggenda, indicò dove fondare Rhegion." }
    ],
    story: `
<p>L’<strong>Asso di Bastoni</strong> richiama una delle leggende legate alla fondazione di Reggio Calabria.</p>
<p>Secondo la tradizione, i coloni calcidesi, guidati dalle indicazioni dell’oracolo di Delfi, avrebbero dovuto fondare la nuova città nel luogo in cui avessero trovato simbolicamente <strong>“una femmina che sposa un maschio”</strong>. Giunti nei pressi del fiume Apsias (oggi nota come fiumara Calopinace), riconobbero il segno in una <strong>vite avvinghiata a un fico selvatico</strong> e decisero di stabilirsi lì, dando origine a Rhegion.</p>
<p>Nella carta abbiamo ripreso proprio la <strong>vite e il fico</strong>, mantenendo il riferimento alla leggenda ma attribuendogli anche un significato personale. L’immagine di due elementi distinti che si intrecciano fino a formare qualcosa di nuovo richiama il nostro matrimonio e l’unione delle nostre storie.</p>
<p>La tradizione identifica nella vite e nel fico la figura femminile e quella maschile; nella nostra reinterpretazione, però, ciò che ci interessa soprattutto è il significato più ampio dell’<strong>incontro tra due individualità</strong>: diverse, riconoscibili e capaci di crescere insieme senza perdere ciò che sono.</p>`
  },

  "tre-denari": {
    name: "Tre di Denari",
    img: "carte/tre-denari.webp",
    title: "Il Genio di Palermo",
    subtitle: "Il nume tutelare della città",
    quiz: ["b2"],
    hotspots: [
      { x: 50, y: 50, text: "Il Genio di Palermo, con il serpente che si nutre al suo petto." }
    ],
    story: `
<p>Un omaggio a Palermo e alla Sicilia attraverso una delle sue figure simboliche più antiche e particolari: il <strong>Genio di Palermo</strong>.</p>
<p>Il Genio è la personificazione della città e il suo <strong>nume tutelare laico</strong>, una sorta di <em>genius loci</em> che rappresenta Palermo e i suoi abitanti, indipendentemente dalle loro origini o appartenenze. Le sue radici sono molto antiche, probabilmente precedenti all’epoca romana, e la sua origine precisa resta ancora avvolta nel mistero.</p>
<p>Viene tradizionalmente raffigurato come un uomo maturo, coronato e barbuto, con un <strong>serpente che si nutre al suo petto</strong>. Anche il significato di questa immagine non ha un’unica interpretazione: al serpente sono stati associati nel tempo concetti come rinnovamento, trasformazione, fertilità e conoscenza. Una delle leggende racconta invece che il serpente rappresenti <strong>Scipione l’Africano</strong>, nutrito simbolicamente da Palermo dopo l’aiuto ricevuto dalla città durante le guerre contro Cartagine.</p>
<p>Non esiste un unico Genio: Palermo ne conserva numerose rappresentazioni sparse per la città, realizzate in epoche e forme differenti. Tra quelle monumentali conosciute si contano tradizionalmente nove raffigurazioni principali, tra sculture, affreschi e mosaici, alle quali si aggiungono altre rappresentazioni dell’emblema cittadino.</p>`
  },

  "tre-spade": {
    name: "Tre di Spade",
    img: "carte/tre-spade.webp",
    title: "Le farfalle",
    subtitle: "Il nostro primo appuntamento",
    quiz: ["q3"],
    hotspots: [
      { x: 51, y: 25, text: "Le farfalle: la Casa delle Farfalle di Palermo, il luogo del nostro primo appuntamento." }
    ],
    story: `
<p>Era la <strong>prima domenica di aprile del 2019</strong> e la destinazione era la Casa delle Farfalle di Palermo. L’appuntamento, però, era iniziato con un piccolo equivoco già qualche giorno prima: quando Manuel propose a Claudia di uscire, lei pensò che si trattasse di un’uscita in compagnia. Fu Manuel a chiarire che no, l’invito era proprio per lei.</p>
<p>Quello che Manuel non sapeva era che <strong>Claudia quella richiesta la aspettava già da un po’</strong>: lo aveva notato tempo prima, in mensa all’università.</p>
<p>Quella domenica trascorremmo la giornata facendo quasi i turisti, tra la Casa delle Farfalle e Palermo vissuta con occhi un po’ diversi dal solito.</p>
<p>Le farfalle del Tre di Spade ricordano così il luogo del nostro primo appuntamento e una giornata che, senza che potessimo ancora saperlo, sarebbe diventata l’inizio della nostra storia.</p>`
  },

  "tre-coppe": {
    name: "Tre di Coppe",
    img: "carte/tre-coppe.webp",
    title: "I pinguini e la casa",
    subtitle: "Casa, musica e vita insieme",
    quiz: ["q6"],
    hotspots: [
      { x: 37, y: 52, text: "I pinguini: amore, condivisione… e i Pinguini Tattici Nucleari." },
      { x: 49, y: 49, text: "La casa con il cuore e la chiave: uno spazio nostro, da costruire e condividere." }
    ],
    story: `
<p>Un’idea di casa, condivisione e vita insieme.</p>
<p>Sulla carta compaiono due pinguini accanto alla porta di una casa con un cuore, mentre uno dei due tiene in mano una chiave. È un insieme di simboli costruito su più livelli.</p>
<p>La casa richiama innanzitutto il desiderio di costruire qualcosa di nostro, uno spazio condiviso da immaginare e abitare insieme. Allo stesso tempo, rappresenta anche un significato più semplice e immediato: quando siamo insieme, quello è casa.</p>
<p>I pinguini sono stati scelti come simbolo di amore e condivisione, per il modo in cui evocano legami stabili, complicità e vita di coppia. Ma in questa carta rimandano anche a uno dei gruppi che più ci accompagna, i <strong>Pinguini Tattici Nucleari</strong>.</p>
<p>Il riferimento musicale è legato in particolare a due canzoni. <em>“Antartide”</em> richiama le volte in cui Manuel la suonava con la chitarra, mentre <em>“Bergamo”</em> è diventata in qualche modo la colonna sonora della nostra storia. Quando Manuel la canta sostituendo Bergamo con Reggio, quel brano assume per noi un significato ancora più personale. Nel brano, Bergamo non è soltanto una città: è un luogo vissuto come qualcosa di profondamente proprio, legato agli affetti, all’identità e a un amore così forte da diventare quasi parte di sé. È proprio questo sentimento che Manuel ha fatto nostro.</p>
<p>La chiave, infine, rafforza il senso complessivo della carta: non solo l’idea di una casa da costruire, ma anche quella di un accesso reciproco, intimo e condiviso, a ciò che nel tempo è diventato il nostro spazio comune.</p>`
  },

  "quattro-spade": {
    name: "Quattro di Spade",
    img: "carte/quattro-spade.webp",
    title: "Ettore",
    subtitle: "Il labrador di Claudia",
    quiz: ["q4"],
    hotspots: [
      { x: 52, y: 47, text: "Ettore, il labrador di Claudia, al posto del cane della carta tradizionale." }
    ],
    story: `
<p>Nel Quattro di Spade delle carte siciliane compare tradizionalmente un cane, figura familiare di questo seme. Nella nostra reinterpretazione abbiamo voluto mantenere questo elemento, ma dandogli un significato ancora più personale: il cane della carta è diventato <strong>Ettore, il labrador di Claudia</strong>.</p>
<p>La presenza del cane ci ha permesso di intrecciare la tradizione del mazzo con una parte concreta della nostra vita. Se nella carta originaria questo animale accompagna la scena come presenza riconoscibile e viva, qui assume il volto di un compagno reale, legato alla quotidianità, alla casa e agli affetti più semplici e profondi.</p>
<p>In questo senso, la figura di Minicheddu si incontra con quella di Ettore: da un lato il richiamo alla carta tradizionale, dall’altro un cane gioioso, affettuoso, sempre presente, vera ombra della famiglia. Non solo un dettaglio illustrativo, quindi, ma un piccolo simbolo di compagnia, fedeltà e calore domestico.</p>
<p>Il Quattro di Spade custodisce così anche questa presenza: quella di chi, con la sua gioia silenziosa e costante, ha fatto parte della storia familiare ogni giorno.</p>`
  },

  "cinque-denari": {
    name: "Cinque di Denari",
    img: "carte/cinque-denari.webp",
    title: "Il Foro Italico",
    subtitle: "Il nostro primo bacio",
    quiz: ["q5"],
    hotspots: [
      { x: 50, y: 48, text: "Il Foro Italico di Palermo e le sue panchine: qui c’è stato il nostro primo bacio." }
    ],
    story: `
<p>Nel Cinque di Denari ritorna il mare, ma questa volta attraverso un luogo preciso e immediatamente riconoscibile di Palermo: il <strong>Foro Italico</strong> con le sue panchine.</p>
<p>È uno spazio aperto, affacciato sul mare, molto presente nella vita della città e nella memoria di chi la vive. Nella carta è stato inserito non solo per il suo valore simbolico e paesaggistico, ma soprattutto per il significato che ha nella nostra storia.</p>
<p>È lì, infatti, che c’è stato il nostro <strong>primo bacio</strong>.</p>`
  },

  "cinque-spade": {
    name: "Cinque di Spade",
    img: "carte/cinque-spade.webp",
    title: "Il luntro",
    subtitle: "Attesa, osservazione, pazienza",
    quiz: ["q11"],
    hotspots: [
      { x: 50, y: 25, text: "Il luntro, l’antica imbarcazione reggina per la pesca al pesce spada nello Stretto." }
    ],
    story: `
<p>Nel Cinque di Spade il richiamo al mare prende forma attraverso una scena di pesca al pesce spada nello Stretto, rappresentata con il <strong>luntro</strong>, l’antica imbarcazione tradizionale reggina.</p>
<p>Questa pesca ha sempre richiesto qualcosa di più della semplice abilità: <strong>attesa, osservazione e conoscenza del mare</strong>. Prima dell’azione viene il tempo trascorso a scrutare la superficie, cercando di individuare il pesce e interpretarne i movimenti. Solo allora inizia una fase fatta di precisione, coordinamento e gesti tramandati nel tempo.</p>
<p>Il luntro racconta quindi un sapere costruito attraverso esperienza e pazienza, profondamente legato alla cultura marinara di Reggio Calabria.</p>
<p>Una relazione, come questa antica pratica, non si costruisce tutta in un momento: richiede tempo, attenzione, la capacità di conoscersi e di imparare a muoversi insieme. Il matrimonio rappresenta per noi un nuovo passaggio di questo percorso.</p>
<p>Per questo il Cinque di Spade parla sì di mare e di tradizione, ma anche del valore di saper aspettare, osservare e procedere nella stessa direzione.</p>`
  },

  "sei-coppe": {
    name: "Sei di Coppe",
    img: "carte/sei-coppe.webp",
    title: "La Porta d’Europa",
    subtitle: "Lampedusa e la proposta",
    quiz: ["q8", "b3"],
    hotspots: [
      { x: 50, y: 43, text: "Noi due davanti alla Porta d’Europa di Lampedusa, la notte della proposta." }
    ],
    story: `
<p>Il Sei di Coppe è dedicato a <strong>Lampedusa</strong>, rappresentata attraverso noi due di spalle davanti alla Porta d’Europa, di notte, in attesa di scorgere qualche stella cadente.</p>
<p>Per Claudia, Lampedusa è molto più di un’isola: è un posto del cuore, una seconda casa, il luogo in cui riesce a ritrovarsi ogni volta che si sente smarrita. È un luogo che ha un odore preciso, quello dell’aria che sa di finocchietto selvatico, e che custodisce abitudini, angoli segreti e una parte profonda della sua vita. Condividere Lampedusa con Manuel ha significato, per lei, mostrargli attraverso un luogo un altro piccolo pezzo di sé, con tutta la gioia — e anche il timore — che questo comporta.</p>
<p>È proprio lì, il <strong>19 giugno 2026</strong>, che Manuel ha fatto la sua proposta di matrimonio. Non avrebbe potuto scegliere un posto più giusto. Dopo uno dei tramonti unici dell’isola, con quella luce quasi africana che rende Lampedusa inconfondibile, Manuel ha lasciato che fosse Claudia a scegliere il posto e il cibo giusto per la serata: pizza e birra, come non poteva essere altrimenti.</p>
<p>Poi, nel buio tiepido della notte lampedusana, davanti alla Porta d’Europa, ha fatto la sua mossa.</p>
<p>Claudia, come spesso accade quando le emozioni la riguardano da vicino, non si era accorta di nulla. Alla domanda <strong>“Mi vuoi sposare?”</strong> ha prima bevuto un sorso di birra, poi ha guardato l’anello e l’uomo della sua vita, ha poggiato la bottiglia per terra e, dopo un piccolo interrogatorio fatto di <em>come, quando, perché</em>, alla richiesta di una risposta è arrivato il suo: <strong>“Certo! Sì, sì, sì”</strong>.</p>
<p>Un sì che richiama quello già pronunciato al momento del primo appuntamento, quasi a chiudere un cerchio.</p>
<p>Il Sei di Coppe custodisce così uno dei momenti più importanti della nostra storia: un luogo del cuore, condiviso fino in fondo, diventato anche il luogo in cui abbiamo scelto di iniziare il nostro futuro insieme.</p>`
  },

  "donna-spade": {
    name: "Donna di Spade",
    img: "carte/donna-spade.webp",
    title: "Le costardelle",
    subtitle: "Il sapore di Reggio (e una collana speciale)",
    quiz: ["q7", "b1"],
    hotspots: [
      { x: 53, y: 25, text: "La collana a forma di trancio di pizza: il regalo del nostro primo San Valentino." },
      { x: 54, y: 76, text: "Le costardelle sul vestito: uno dei cibi preferiti di Manuel." }
    ],
    story: `
<p>Qui un riferimento molto personale: le <strong>costardelle</strong>. Uno dei cibi preferiti di Manuel, uno di quei cibi che bisogna mangiare quando si rientra a Reggio e uno di quei sapori che, prima o poi, dovevano inevitabilmente diventare un: <em>“Claudia, devi provarle!”</em>.</p>
<h4>Il dettaglio nelle Donne…</h4>
<p>La <strong>collana a forma di trancio di pizza</strong>, che compare in tutte le figure femminili che richiamano Claudia, quindi nelle Donne e nei Cavalli. È il ricordo del regalo del nostro primo San Valentino: un gesto semplice, ironico e affettuoso, ma proprio per questo molto rappresentativo del nostro modo di volerci bene.</p>`
  },

  "cavallo-denari": {
    name: "Cavallo di Denari",
    img: "carte/cavallo-denari.webp",
    title: "Il limone",
    subtitle: "Aldo, Giovanni e Giacomo",
    quiz: ["q9"],
    hotspots: [
      { x: 45, y: 76, text: "Le due metà del limone: Aldo, Giovanni e Giacomo in “Tre uomini e una gamba”." },
      { x: 49, y: 29.5, text: "Anche qui, la collana a forma di trancio di pizza." }
    ],
    story: `
<p>Nel Cavallo di Denari, all’interno dell’emblema, compare un piccolo dettaglio che per noi significa moltissimo: un <strong>limone</strong>.</p>
<p>È un richiamo ad <strong>Aldo, Giovanni e Giacomo</strong>, il nostro trio comico del cuore. Le loro battute sono diventate nel tempo quasi un linguaggio parallelo della nostra relazione: le citiamo continuamente, spesso basta una parola perché entrambi capiamo il riferimento e, qualche volta, finiamo per ridere senza che chi ci sta intorno sappia bene perché.</p>
<p>Tra i loro film, <em>“Odio l’estate”</em> ha avuto un posto particolare nella nostra storia, ma il limone della carta rimanda a una scena ormai iconica di <em>“Tre uomini e una gamba”</em>, costruita intorno al mito raccontato nel <em>Simposio</em> di Platone.</p>
<p>Nel mito, gli esseri umani erano originariamente uniti e furono poi divisi in due; da quel momento ciascuna metà sarebbe destinata a cercare l’altra, spinta dal desiderio di ricomporre quella completezza perduta. Nel film questa immagine romantica viene immediatamente riportata nello stile di Aldo, Giovanni e Giacomo: mentre si parla delle due metà che finalmente si riconoscono, Aldo e Giovanni provano concretamente ad accostare due metà di un limone.</p>
<p>Ed è proprio questo contrasto ad averci fatto scegliere il limone per la carta: una battuta che ci fa ridere da sempre, ma che nasconde anche un’idea che ci piace molto. Tra tutte le persone e tutte le possibilità, a un certo punto ci si incontra, ci si riconosce e si sceglie di continuare insieme.</p>
<p>Forse non saremo due metà perfettamente combacianti di una mela platonica — e conoscendoci sarebbe stato fin troppo semplice — ma abbiamo trovato qualcuno con cui condividere lo stesso modo di guardare il mondo, comprese battute incomprensibili agli altri.</p>
<p>E, in fondo, <strong>chi sa fare, sa capire.</strong></p>`
  }
};

/* ---------- SEZIONI DELLA GALLERIA ---------- */
const GALLERY = [
  { title: "Le radici",                      cards: ["asso-denari", "asso-coppe", "asso-bastoni", "tre-denari"] },
  { title: "La nostra storia",               cards: ["tre-spade", "cinque-denari", "sei-coppe"] },
  { title: "Le cose che ci rappresentano",   cards: ["tre-coppe", "donna-spade", "cavallo-denari", "quattro-spade"] },
  { title: "Il mare",                        cards: ["asso-spade", "cinque-spade"] }
];

const SEMI_TEXT = `
<p>Ogni seme di questo mazzo racconta qualcosa di noi, delle nostre radici e del modo in cui immaginiamo il nostro futuro insieme.</p>
<p><strong>I Denari</strong> parlano di prosperità, di ciò che cresce e porta frutto. Gli agrumi, la zagara e il bergamotto richiamano le nostre terre e diventano simboli di abbondanza, di nuovi inizi e di tutto ciò che speriamo di costruire insieme.</p>
<p><strong>Le Coppe</strong> sono il seme della festa e della condivisione. Raccontano i brindisi, il vino, le tavolate e le risate: tutti quei momenti in cui la felicità diventa più grande perché condivisa con le persone che amiamo.</p>
<p><strong>Le Spade</strong> rappresentano la forza e la protezione. Richiamano le tradizioni che ci hanno preceduto, la capacità di custodire ciò che conta e la forza necessaria per affrontare insieme ciò che verrà.</p>
<p><strong>I Bastoni</strong>, infine, parlano di radici. Il legno, la vite e il fico raccontano la famiglia, la terra e ciò da cui proveniamo. In questo seme abbiamo voluto lasciare anche un richiamo alla storia e alla leggenda, intrecciando ancora una volta memoria, appartenenza e tradizione.</p>
<p>Quattro semi diversi, ma una sola storia: <strong>crescere, condividere, proteggere e ricordare da dove veniamo.</strong></p>
<p>È questo il filo che unisce il mazzo: portare con noi le nostre radici mentre iniziamo a costruire qualcosa di nuovo insieme.</p>`;

/* ---------- QUIZ ----------
   hint: immagine mostrata con "Mostrami un indizio"
     { card: "id", zoom: {x, y, scale} }  → dettaglio ingrandito
     { card: "id" }                       → carta intera
*/
const QUESTIONS = [
  { id: "q1", label: "Asso di Denari",
    q: "Nell’Asso di Denari compare uno dei simboli più riconoscibili della Sicilia. Quale?",
    options: ["Il Genio di Palermo", "La Trinacria", "La Porta d’Europa", "Il fico selvatico"], correct: 1 },

  { id: "q2", label: "Asso di Coppe",
    q: "Il motivo ornamentale al centro dell’Asso di Coppe riproduce un dettaglio di un luogo molto importante per Manuel. Quale?",
    options: ["L’inferriata del Lungomare di Reggio Calabria", "La ringhiera del Foro Italico di Palermo", "La Porta d’Europa di Lampedusa", "Un balcone della sua casa d’infanzia"], correct: 0,
    hint: { card: "asso-coppe" } },

  { id: "q3", label: "Tre di Spade",
    q: "Le farfalle del Tre di Spade ricordano quale momento della nostra storia?",
    options: ["Il primo bacio", "Il primo appuntamento", "Il primo viaggio insieme", "La proposta di matrimonio"], correct: 1 },

  { id: "q4", label: "Quattro di Spade",
    q: "Nel Quattro di Spade il cane della tradizione siciliana è stato sostituito da un cane molto più personale. Chi è?",
    options: ["Un cane dell’infanzia di Manuel", "Minicheddu, lasciato identico alla carta tradizionale", "Ettore, il labrador di Claudia", "Un cane simbolico dello Stretto"], correct: 2 },

  { id: "q5", label: "Cinque di Denari",
    q: "Perché nel Cinque di Denari compaiono il Foro Italico di Palermo e le sue panchine?",
    options: ["È lì che Claudia ha notato Manuel per la prima volta", "È lì che c’è stato il nostro primo bacio", "È il luogo del nostro primo appuntamento", "È lì che abbiamo deciso di sposarci"], correct: 1,
    hint: { card: "cinque-denari" } },

  { id: "q6", label: "Tre di Coppe",
    q: "Nel Tre di Coppe compaiono due pinguini. Oltre a rappresentare amore e condivisione, a cosa rimandano?",
    options: ["A un viaggio fatto insieme", "Ai Pinguini Tattici Nucleari", "A una leggenda siciliana", "A un animale preferito da Claudia"], correct: 1,
    hint: { card: "tre-coppe", zoom: { x: 49, y: 50, scale: 2.6 } } },

  { id: "q7", label: "Donna di Spade",
    q: "Tutte le figure femminili che richiamano Claudia indossano una collana molto particolare. Che forma ha?",
    options: ["Un limone", "Una conchiglia", "Un trancio di pizza", "Un pesce spada"], correct: 2,
    hint: { card: "donna-spade" } },

  { id: "q8", label: "Sei di Coppe",
    q: "Nel Sei di Coppe siamo rappresentati davanti alla Porta d’Europa di Lampedusa. Che cosa è successo lì il 19 giugno 2026?",
    options: ["Il nostro primo bacio", "Manuel ha fatto la proposta di matrimonio", "Abbiamo festeggiato il primo anniversario", "Abbiamo deciso la data del matrimonio"], correct: 1,
    hint: { card: "sei-coppe" } },

  { id: "q9", label: "Cavallo di Denari",
    q: "Nell’emblema del Cavallo di Denari compare un limone. A cosa fa riferimento?",
    options: ["Agli agrumi siciliani", "A una scena di “Tre uomini e una gamba”", "Al bergamotto calabrese", "Alla cena del primo appuntamento"], correct: 1,
    hint: { card: "cavallo-denari", zoom: { x: 45, y: 76, scale: 3 } } },

  { id: "q10", label: "Asso di Bastoni",
    q: "Nell’Asso di Bastoni una vite si avvinghia a un fico selvatico. A quale leggenda fa riferimento?",
    options: ["Alla fondazione di Reggio Calabria", "Alla nascita della Sicilia", "Alla pesca tradizionale nello Stretto", "Alla fondazione di Palermo"], correct: 0 },

  { id: "q11", label: "Cinque di Spade",
    q: "Nel Cinque di Spade compare il luntro, antica imbarcazione reggina legata alla pesca al pesce spada. Quale idea abbiamo associato a questa scena anche in riferimento alla nostra relazione?",
    options: ["Il coraggio di partire senza sapere dove si arriverà", "Attesa, osservazione, pazienza e capacità di muoversi insieme", "La necessità di affrontare tutto da soli", "Il desiderio di vivere lontano dal mare"], correct: 1 },

  { id: "q12", label: "I quattro semi",
    q: "Qual è l’associazione corretta tra i quattro semi e il significato che abbiamo scelto per il mazzo?",
    options: [
      "Denari → prosperità · Coppe → condivisione · Spade → forza e protezione · Bastoni → radici",
      "Denari → radici · Coppe → protezione · Spade → festa · Bastoni → prosperità",
      "Denari → forza · Coppe → prosperità · Spade → radici · Bastoni → condivisione",
      "Denari → festa · Coppe → radici · Spade → prosperità · Bastoni → protezione"], correct: 0 }
];

const BONUS_INTRO = {
  title: "Pensavi fosse finita?",
  text: "Ci sono ancora alcuni dettagli per chi ha guardato davvero bene le carte. Queste domande non cambieranno il tuo risultato… ma potrebbero cambiare il tuo livello di ossessione per questo mazzo."
};

const BONUS = [
  { id: "b1", label: "Bonus 1 — Le costardelle",
    q: "Guarda bene il vestito della Donna di Spade. Quali pesci sono rappresentati?",
    options: ["Sardine", "Acciughe", "Costardelle", "Pesci spada"], correct: 2,
    hint: { card: "donna-spade", zoom: { x: 54, y: 76, scale: 2.6 } } },

  { id: "b2", label: "Bonus 2 — Il Genio di Palermo",
    q: "Nel Tre di Denari compare il Genio di Palermo. Quale animale lo accompagna tradizionalmente?",
    options: ["Un’aquila", "Un serpente", "Un leone", "Un cavallo"], correct: 1,
    hint: { card: "tre-denari" } },

  { id: "b3", label: "Bonus 3 — La cena prima della proposta",
    q: "Il 19 giugno 2026, poco prima della proposta a Lampedusa, quale cena scelse Claudia senza sospettare nulla?",
    options: ["Arancine e vino", "Pesce e prosecco", "Pizza e birra", "Pasta e spritz"], correct: 2 }
];

const FEEDBACK = {
  right: "Hai trovato l’easter egg! 🔎",
  wrong: "Questa volta ti era sfuggito… 👀"
};

/* ---------- RISULTATI (sulle 12 domande principali) ---------- */
const PROFILES = [
  { min: 0, max: 3, title: "Esploratore del mazzo",
    text: "<p><strong>Hai iniziato a guardare oltre i semi e le figure.</strong></p><p>Qualche dettaglio ti è sfuggito, ma adesso sai che ogni carta può nascondere qualcosa.</p><p>La Galleria potrebbe riservarti parecchie sorprese.</p>" },
  { min: 4, max: 6, title: "Cacciatore di dettagli",
    text: "<p>Hai un buon occhio.</p><p>Hai trovato diversi indizi e cominciato a collegare simboli, luoghi e ricordi.</p><p>Ma nel mazzo c’è ancora qualcosa da scoprire.</p>" },
  { min: 7, max: 9, title: "Esperto di easter egg",
    text: "<p>Non guardi semplicemente le carte: le osservi.</p><p>Hai riconosciuto buona parte dei riferimenti e probabilmente alcune delle nostre stranezze non hanno bisogno di troppe spiegazioni.</p>" },
  { min: 10, max: 12, title: "Custode dei segreti di Claudia & Manuel",
    text: "<p>A questo punto abbiamo due possibilità:<br>o ci conosci davvero molto bene…</p><p>…oppure hai studiato questo mazzo con una dedizione leggermente preoccupante.</p><p>In entrambi i casi: complimenti.</p>" }
];

const RESULT_OUTRO = "<p>Qualunque sia il risultato, adesso conosci qualche pezzo in più della nostra storia.</p><p>Ma finora hai visto soltanto gli indizi.</p>";

const INTRO_TEXT = `
<p>Questo mazzo non racconta soltanto le nostre radici.<br>Tra le sue carte abbiamo nascosto piccoli dettagli che parlano di noi, della nostra storia e delle cose che amiamo condividere.</p>
<p>Alcuni saranno facili da riconoscere, altri un po’ meno. Potrebbero essere un simbolo, un oggetto, un particolare apparentemente fuori posto… o qualcosa che solo chi ci conosce davvero saprà interpretare.</p>
<p class="big"><strong>Riuscirai a trovarli tutti?</strong></p>
<p>Guarda attentamente le carte, cerca gli indizi e prova a capire cosa significano.</p>
<p>Quando penserai di averli scoperti tutti, mettiti alla prova: scoprirai <strong>quanto ci conosci davvero… e forse anche qualcosa di noi che ancora non sapevi.</strong></p>`;

const CLOSING_TEXT = `
<h2>Adesso li hai trovati davvero tutti.</h2>
<p>Dietro questi simboli ci sono luoghi, persone, passioni, battute, ricordi e piccoli pezzi della nostra quotidianità.</p>
<p>Abbiamo voluto nasconderli nelle carte perché questo mazzo potesse raccontare qualcosa di noi anche dopo il matrimonio.</p>
<p>Adesso conoscete tutti i suoi segreti.</p>
<p><em>O quasi.</em></p>`;

const WEDDING_DATE = "09 luglio 2027";
