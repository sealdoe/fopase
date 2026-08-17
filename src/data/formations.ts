/**
 * Catalogue de formations FOPASE.
 * ⚠️ CONTENU DE DÉMONSTRATION — la liste officielle, les programmes et les
 * durées doivent être validés par FOPASE avant mise en ligne.
 * Structure pensée pour être remplacée par un CMS / une API sans changer l'UI.
 */

export type Niveau = "Licence" | "Master" | "Formation professionnelle";

export type Formation = {
  slug: string;
  nom: string;
  domaine: string;
  niveau: Niveau;
  duree: string;
  type: "Initiale" | "Continue" | "Alternance";
  resume: string;
  presentation: string;
  objectifs: string[];
  programme: { annee: string; modules: string[] }[];
  competences: string[];
  debouches: string[];
  pourquoi: string[];
};

export const DOMAINES = [
  "Finance & Comptabilité",
  "Banque & Assurance",
  "Management & Gestion",
  "Marketing & Commerce",
  "Ressources humaines",
  "Technologies",
  "Sciences biomédicales",
  "Agroalimentaire",
  "Entrepreneuriat",
] as const;

export const NIVEAUX: Niveau[] = ["Licence", "Master", "Formation professionnelle"];
export const DUREES = ["1 an", "2 ans", "3 ans"];
export const TYPES = ["Initiale", "Continue", "Alternance"];

const base = (
  slug: string,
  nom: string,
  domaine: string,
  niveau: Niveau,
  duree: string,
  type: Formation["type"],
  resume: string,
  debouches: string[],
): Formation => ({
  slug,
  nom,
  domaine,
  niveau,
  duree,
  type,
  resume,
  presentation: `Ce parcours ${nom.toLowerCase()} forme des professionnels immédiatement opérationnels dans le domaine ${domaine.toLowerCase()}. Il combine fondamentaux académiques, mises en situation et immersion en entreprise. (Descriptif de démonstration — texte officiel à fournir par FOPASE.)`,
  objectifs: [
    "Maîtriser les fondamentaux théoriques du domaine",
    "Développer des compétences directement mobilisables en entreprise",
    "Savoir travailler en équipe et gérer un projet de bout en bout",
    "Construire un projet professionnel clair et réaliste",
  ],
  programme: [
    { annee: "Semestres 1 & 2", modules: ["Fondamentaux du domaine", "Méthodologie & communication", "Outils numériques", "Anglais professionnel"] },
    { annee: "Semestres 3 & 4", modules: ["Approfondissement métier", "Études de cas", "Gestion de projet", "Stage d'immersion"] },
    { annee: "Semestres 5 & 6", modules: ["Spécialisation", "Projet professionnel", "Entrepreneuriat", "Mémoire & soutenance"] },
  ],
  competences: [
    "Analyse et résolution de problèmes",
    "Maîtrise des outils métiers",
    "Communication professionnelle",
    "Travail collaboratif",
    "Rigueur et éthique professionnelle",
  ],
  debouches,
  pourquoi: [
    "Une pédagogie orientée pratique et terrain",
    "Un accompagnement carrière individualisé",
    "Un réseau d'entreprises et de professionnels",
    "Une préparation réelle à l'insertion professionnelle",
  ],
});

export const FORMATIONS: Formation[] = [
  base("licence-finance-comptabilite", "Licence Finance & Comptabilité", "Finance & Comptabilité", "Licence", "3 ans", "Initiale",
    "Former des professionnels capables de piloter la comptabilité et la performance financière d'une organisation.",
    ["Comptable", "Assistant auditeur", "Contrôleur de gestion junior", "Analyste financier"]),
  base("master-audit-controle", "Master Audit & Contrôle de gestion", "Finance & Comptabilité", "Master", "2 ans", "Initiale",
    "Approfondir l'audit, le contrôle interne et le pilotage de la performance.",
    ["Auditeur", "Contrôleur de gestion", "Consultant en organisation", "Risk analyst"]),
  base("licence-banque-assurance", "Licence Banque & Assurance", "Banque & Assurance", "Licence", "3 ans", "Initiale",
    "Comprendre les métiers de la banque, de l'assurance et de la relation client.",
    ["Chargé de clientèle", "Conseiller assurance", "Analyste crédit junior", "Gestionnaire de contrats"]),
  base("licence-management-gestion", "Licence Management & Gestion", "Management & Gestion", "Licence", "3 ans", "Initiale",
    "Acquérir les clés du pilotage d'une organisation et du management d'équipe.",
    ["Assistant de direction", "Gestionnaire administratif", "Chef de projet junior", "Responsable d'unité"]),
  base("master-management-strategique", "Master Management stratégique", "Management & Gestion", "Master", "2 ans", "Alternance",
    "Piloter la stratégie, les opérations et la transformation des organisations.",
    ["Manager opérationnel", "Consultant en management", "Responsable de business unit"]),
  base("licence-marketing-commerce", "Licence Marketing & Commerce", "Marketing & Commerce", "Licence", "3 ans", "Initiale",
    "Concevoir, promouvoir et vendre des offres sur des marchés concurrentiels.",
    ["Commercial", "Chargé marketing", "Community manager", "Business developer junior"]),
  base("licence-ressources-humaines", "Licence Ressources humaines", "Ressources humaines", "Licence", "3 ans", "Initiale",
    "Accompagner le recrutement, la paie, la formation et le développement des talents.",
    ["Assistant RH", "Chargé de recrutement", "Gestionnaire paie", "Chargé de formation"]),
  base("licence-informatique-technologies", "Licence Informatique & Technologies", "Technologies", "Licence", "3 ans", "Initiale",
    "Développer, administrer et sécuriser des solutions numériques.",
    ["Développeur", "Administrateur systèmes & réseaux", "Data analyst junior", "Support IT"]),
  base("licence-sciences-biomedicales", "Licence Sciences biomédicales", "Sciences biomédicales", "Licence", "3 ans", "Initiale",
    "Maîtriser les techniques d'analyse et les protocoles de laboratoire.",
    ["Technicien de laboratoire", "Assistant de recherche", "Qualiticien laboratoire"]),
  base("licence-agroalimentaire", "Licence Agroalimentaire", "Agroalimentaire", "Licence", "3 ans", "Initiale",
    "Transformer, contrôler et valoriser les productions agroalimentaires.",
    ["Technicien qualité", "Responsable production", "Chargé HSE junior"]),
  base("formation-entrepreneuriat", "Formation Entrepreneuriat & Création d'entreprise", "Entrepreneuriat", "Formation professionnelle", "1 an", "Continue",
    "Structurer un projet, valider un modèle économique et lancer son activité.",
    ["Créateur d'entreprise", "Chargé de projet", "Consultant indépendant"]),
  base("formation-comptabilite-pratique", "Formation professionnelle Comptabilité pratique", "Finance & Comptabilité", "Formation professionnelle", "1 an", "Continue",
    "Monter rapidement en compétences sur les opérations comptables courantes.",
    ["Aide-comptable", "Assistant administratif et financier"]),
];

export const getFormation = (slug: string) => FORMATIONS.find((f) => f.slug === slug);
