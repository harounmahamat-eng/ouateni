/* ============================================================
   MARQUE — point de configuration unique.
   Changer le nom ici et sur tout le site : 3 lignes.
   (brand.shortName / brand.nameAr / brand.tagline)
   Nom validé par le responsable du projet le 22/11/2026 : OUATENI.
   ============================================================ */
window.BRAND = {
  // --- Identité ---
  shortName: "OUATENI",
  fullName: "OUATENI — un pays avant tout",
  nameAr: "وطني",
  tagline: "Un pays avant tout.",
  taglineAr: "وطن واحد قبل كل شيء.",
  taglineDj: "بلد واحد قبل كل شي.",
  phase: "Atelier d'idées ouvert à tous. Ceci n'est pas un parti politique.",

  // --- Charte couleur (3 couleurs, pas une de plus) ---
  colors: {
    ink: "#10151f",      // nuit de N'Djamena
    ochre: "#c8862b",    // ocre / latérite
    sand: "#f4efe6"      // sable clair (fond)
  },

  // --- Contacts & réseaux : identifiants RÉSERVÉS à l'avance, comptes NON encore ouverts.
  //     L'ouverture se fait avec la pièce d'identité et le numéro du responsable.
  handles: {
    tiktok: "@ouateni.tchad",
    facebook: "ouateni.tchad",
    youtube: "@ouatenitchad",
    whatsapp_channel: "ouateni-tchad",
    x: "@ouateni_tchad"
  },
  contact: {
    email: "",    // ⚠ à renseigner APRÈS création de la boîte dédiée au projet
    whatsapp: ""  // ⚠ à renseigner après la ligne dédiée au projet
  },

  // --- Règles éditoriales affichées publiquement ---
  promises: [
    "Nous ne nommons aucun adversaire politique.",
    "Nous citons la source de chaque chiffre, ou nous écrivons « à vérifier ».",
    "Nous ne publions rien que nous ne puissions défendre devant un juge.",
    "Nous répondons à la critique en public, jamais par suppression."
  ],
  promisesAr: [
    "لا نسمّي خصمًا سياسيًا.",
    "كل رقم بمصدره، أو نكتب «يحتاج تحققًا».",
    "لا ننشر ما لا نستطيع الدفاع عنه أمام قاضٍ.",
    "نجيب على النقد علنًا، ولا نحذف شيئًا."
  ],
  promisesDj: [
    "ما نسمّي أي خصم سياسي.",
    "كل رقم ومصدره، أو نكتب «يحتاج تحقّق».",
    "ما ننشر حاجة ما نقدر ندافع عنها قدام قاضي.",
    "نرد على العيب في العلن، وما نمسح حاجة."
  ],

  // --- Compteurs affichés (mettre 0 tant que rien n'est publié : ne jamais gonfler) ---
  stats: {
    notes: 0,        // notes VRAIMENT publiées (compteur manuel)
    localites: 0,    // localités couvertes par un relevé de terrain
    contributeurs: 0
  },

  launchedOn: "2026-11-22"
};
