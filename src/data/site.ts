/**
 * Contenu éditorial du site FOPASE.
 * ⚠️ Les valeurs marquées PLACEHOLDER doivent être remplacées par les
 * informations officielles de l'établissement. Rien ici ne doit être
 * présenté comme une donnée vérifiée tant qu'elle n'est pas fournie.
 */

export const SITE = {
  name: "FOPASE",
  baseline: "Institut supérieur de formation professionnelle",
  country: "Bénin",
  promise: "L'avenir professionnel commence ici.",
  signature: "Formation • Compétences • Professionnalisation • Avenir",
};

export const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Historique", to: "/historique" },
  { label: "Mots du Président", to: "/mots-du-president" },
  { label: "Nos Formations", to: "/formations" },
  { label: "Cours à Distance", to: "/cours-a-distance" },
  { label: "Inscription en ligne", to: "/inscription" },
  { label: "Mémoires & Recherche", to: "/memoires-recherche" },
  { label: "Résultats Annuels", to: "/resultats-annuels" },
  { label: "Etudiez au Ghana", to: "/etudiez-au-ghana" },
  { label: "Galerie Photos-Vidéos", to: "/galerie" },
] as const;

/** PLACEHOLDER — chiffres à confirmer par FOPASE. */
export const STATS = [
  { value: 20, suffix: "+", label: "Années d'expérience", note: "à confirmer" },
  { value: 25, suffix: "+", label: "Formations", note: "à confirmer" },
  { value: 3000, suffix: "+", label: "Diplômés", note: "à confirmer" },
  { value: 40, suffix: "+", label: "Partenaires", note: "à confirmer" },
];

export const PILIERS = [
  {
    num: "01",
    title: "Des compétences concrètes",
    text: "Des enseignements orientés vers la pratique et les réalités professionnelles.",
  },
  {
    num: "02",
    title: "L'expérience professionnelle",
    text: "Stages, projets, mises en situation et immersion professionnelle.",
  },
  {
    num: "03",
    title: "L'esprit entrepreneurial",
    text: "Développer la capacité à créer, entreprendre, innover et prendre des initiatives.",
  },
  {
    num: "04",
    title: "Un réseau professionnel",
    text: "Créer des connexions avec entreprises, professionnels et partenaires.",
  },
];

export const JOURNEE = [
  { time: "08:00", title: "Cours", text: "Fondamentaux académiques et études de cas réelles." },
  { time: "10:30", title: "Travail en équipe", text: "Projets de groupe, recherche, résolution de problèmes." },
  { time: "13:00", title: "Vie étudiante", text: "Pause, échanges, rencontres entre promotions." },
  { time: "15:00", title: "Projet professionnel", text: "Mise en situation, accompagnement, coaching carrière." },
  { time: "17:00", title: "Activités & associations", text: "Clubs, sport, culture, initiatives étudiantes." },
  { time: "18:00", title: "Construire son avenir", text: "Ateliers CV, entrepreneuriat, préparation aux entretiens." },
];

export const PARCOURS_METIERS = [
  { domaine: "Finance & Comptabilité", steps: ["Comptable", "Auditeur", "Contrôleur de gestion", "Analyste financier"] },
  { domaine: "Marketing & Commerce", steps: ["Commercial", "Chargé marketing", "Responsable commercial", "Business developer"] },
  { domaine: "Ressources humaines", steps: ["Assistant RH", "Chargé de recrutement", "Responsable RH", "Consultant RH"] },
  { domaine: "Banque & Assurance", steps: ["Chargé de clientèle", "Conseiller patrimonial", "Analyste crédit", "Responsable agence"] },
  { domaine: "Technologies", steps: ["Développeur", "Administrateur systèmes", "Data analyst", "Chef de projet IT"] },
];

/** PLACEHOLDER — témoignages fictifs de démonstration, à remplacer. */
export const ALUMNI = [
  {
    initials: "A. K.",
    name: "Prénom Nom — placeholder",
    formation: "Licence Finance & Comptabilité",
    promo: "Promotion 20XX",
    role: "Intitulé de poste — placeholder",
    company: "Entreprise — placeholder",
    quote:
      "Espace réservé au témoignage réel d'un ancien étudiant. Le texte définitif sera fourni par FOPASE.",
  },
  {
    initials: "M. D.",
    name: "Prénom Nom — placeholder",
    formation: "Master Management & Gestion",
    promo: "Promotion 20XX",
    role: "Intitulé de poste — placeholder",
    company: "Entreprise — placeholder",
    quote:
      "Espace réservé au témoignage réel d'une ancienne étudiante. Le texte définitif sera fourni par FOPASE.",
  },
  {
    initials: "S. H.",
    name: "Prénom Nom — placeholder",
    formation: "Licence Marketing & Commerce",
    promo: "Promotion 20XX",
    role: "Intitulé de poste — placeholder",
    company: "Entreprise — placeholder",
    quote:
      "Espace réservé au témoignage réel d'un ancien étudiant. Le texte définitif sera fourni par FOPASE.",
  },
];

/** PLACEHOLDER — aucun partenaire réel n'est affiché tant que la liste officielle n'est pas fournie. */
export const PARTENAIRES_SLOTS = 8;

/** PLACEHOLDER — actualités de démonstration. */
export const ACTUALITES = [
  {
    slug: "rentree",
    date: "Date à confirmer",
    categorie: "Vie du campus",
    title: "Rentrée académique — informations à venir",
    excerpt: "Le contenu officiel de cette actualité sera fourni par FOPASE.",
  },
  {
    slug: "forum-entreprises",
    date: "Date à confirmer",
    categorie: "Carrière",
    title: "Forum entreprises — informations à venir",
    excerpt: "Le contenu officiel de cette actualité sera fourni par FOPASE.",
  },
  {
    slug: "ateliers",
    date: "Date à confirmer",
    categorie: "Pédagogie",
    title: "Ateliers professionnalisants — informations à venir",
    excerpt: "Le contenu officiel de cette actualité sera fourni par FOPASE.",
  },
];

/** PLACEHOLDER — coordonnées à remplacer par les informations officielles. */
export const CONTACT = {
  phone: "+229 XX XX XX XX (à compléter)",
  whatsapp: "+229 XX XX XX XX (à compléter)",
  email: "contact@fopase.bj (à confirmer)",
  address: "Adresse du campus — à compléter, Cotonou, Bénin",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const FAQ_ADMISSION = [
  {
    q: "Quelles sont les conditions d'admission ?",
    a: "Les conditions officielles seront précisées par FOPASE. À titre indicatif : dossier de candidature complet, niveau requis selon la formation visée, et entretien d'orientation.",
  },
  {
    q: "Quelles pièces dois-je fournir ?",
    a: "Liste indicative en attente de validation : pièce d'identité, diplôme ou relevés de notes, photo, formulaire de candidature.",
  },
  {
    q: "Quand puis-je candidater ?",
    a: "Les dates officielles d'ouverture et de clôture des candidatures seront communiquées par l'établissement.",
  },
  {
    q: "Quels sont les frais de formation ?",
    a: "Les informations financières seront publiées par FOPASE. Aucun montant n'est affiché tant qu'il n'est pas officiellement confirmé.",
  },
];
