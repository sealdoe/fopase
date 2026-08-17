import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import type { Plugin } from "vite";

interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

const ROUTES: RouteMeta[] = [
  // ── Pages principales ──────────────────────────────────────────────────────
  {
    path: "/",
    title: "FOPASE — Institut supérieur de formation professionnelle au Bénin",
    description:
      "FOPASE forme des professionnels prêts pour l'emploi : licences, masters et formations professionnelles au Bénin.",
  },
  {
    path: "/formations",
    title: "Formations — FOPASE | Licences, masters et formations professionnelles",
    description:
      "Explorez le catalogue de formations FOPASE : finance, banque, management, marketing, ressources humaines, technologies, sciences biomédicales, agroalimentaire et entrepreneuriat.",
  },
  {
    path: "/a-propos",
    title: "À propos — FOPASE, institut supérieur au Bénin",
    description:
      "Découvrez FOPASE : notre mission, notre vision et notre approche de la formation professionnalisante au Bénin, au service de l'employabilité des étudiants.",
  },
  {
    path: "/pourquoi-fopase",
    title: "Pourquoi FOPASE ? — Employabilité et professionnalisation",
    description:
      "Pédagogie pratique, immersion en entreprise, esprit entrepreneurial et réseau professionnel : les raisons de choisir FOPASE pour construire sa carrière.",
  },
  {
    path: "/admission",
    title: "Admission — Intègre FOPASE | Candidature et inscription",
    description:
      "Conditions d'admission, pièces à fournir, processus d'inscription et dates clés pour rejoindre FOPASE, institut supérieur de formation professionnelle au Bénin.",
  },
  {
    path: "/orientation",
    title: "Test d'orientation — Quel parcours FOPASE est fait pour toi ?",
    description:
      "Quatre questions pour identifier les formations FOPASE les plus adaptées à ton domaine d'intérêt, ton niveau d'études et le métier qui t'attire.",
  },
  {
    path: "/vie-etudiante",
    title: "Vie étudiante — Vivre FOPASE",
    description:
      "Campus, cours, événements, soutenances, vie associative, ateliers et projets : découvrez le quotidien des étudiants de FOPASE.",
  },
  {
    path: "/alumni",
    title: "Alumni — Ils sont passés par FOPASE",
    description:
      "Parcours et témoignages des anciens étudiants de FOPASE : formations suivies, métiers exercés et trajectoires professionnelles.",
  },
  {
    path: "/actualites",
    title: "Actualités — La vie de FOPASE",
    description:
      "Rentrée académique, forums entreprises, ateliers professionnalisants : suivez les actualités et les événements de FOPASE.",
  },
  {
    path: "/contact",
    title: "Contact — FOPASE | Demander des informations",
    description:
      "Contactez FOPASE : formulaire de demande d'informations, téléphone, e-mail, WhatsApp et adresse du campus. Notre équipe accompagne votre projet de formation.",
  },

  // ── Nouvelles rubriques client ─────────────────────────────────────────────
  {
    path: "/historique",
    title: "Historique — FOPASE, depuis la création",
    description: "Retracez l'histoire de FOPASE : fondation, évolution, accréditations et étapes clés qui ont forgé l'identité de l'institut.",
  },
  {
    path: "/mots-du-president",
    title: "Mots du Président — FOPASE",
    description: "Message du Président de FOPASE : vision, engagement et ambitions pour la formation professionnelle au Bénin.",
  },
  {
    path: "/cours-a-distance",
    title: "Cours à Distance — FOPASE | Formations en ligne",
    description: "Suivez les formations FOPASE à distance : cours en ligne, supports pédagogiques, planning et modalités d'enseignement à distance.",
  },
  {
    path: "/inscription",
    title: "S'Inscrire en Ligne — FOPASE | Formulaire d'inscription",
    description: "Déposez votre dossier d'inscription en ligne à FOPASE : formulaire de candidature, pièces à fournir et paiement des frais de dossier via MoMo.",
  },
  {
    path: "/memoires-recherche",
    title: "Mémoires & Travaux de Recherche — FOPASE",
    description: "Consultez les mémoires et travaux de recherche des étudiants et enseignants de FOPASE : bibliothèque numérique et publications académiques.",
  },
  {
    path: "/resultats-annuels",
    title: "Résultats Annuels — FOPASE",
    description: "Consultez les résultats annuels des examens et évaluations de FOPASE par promotion, formation et année académique.",
  },
  {
    path: "/etudiez-au-ghana",
    title: "Etudiez au Ghana — FOPASE | Programme d'échanges",
    description: "Partez étudier au Ghana avec FOPASE : programme d'échanges académiques, universités partenaires, démarches et témoignages d'anciens étudiants.",
  },
  {
    path: "/galerie",
    title: "Galerie Photos-Vidéos — FOPASE",
    description: "Découvrez FOPASE en images et en vidéos : campus, événements, cérémonies de remise de diplômes, ateliers et vie étudiante.",
  },

  // ── Détails formations ─────────────────────────────────────────────────────
  {
    path: "/formations/licence-finance-comptabilite",
    title: "Licence Finance & Comptabilité — FOPASE",
    description:
      "Former des professionnels capables de piloter la comptabilité et la performance financière d'une organisation.",
  },
  {
    path: "/formations/master-audit-controle",
    title: "Master Audit & Contrôle de gestion — FOPASE",
    description:
      "Approfondir l'audit, le contrôle interne et le pilotage de la performance.",
  },
  {
    path: "/formations/licence-banque-assurance",
    title: "Licence Banque & Assurance — FOPASE",
    description:
      "Comprendre les métiers de la banque, de l'assurance et de la relation client.",
  },
  {
    path: "/formations/licence-management-gestion",
    title: "Licence Management & Gestion — FOPASE",
    description:
      "Acquérir les clés du pilotage d'une organisation et du management d'équipe.",
  },
  {
    path: "/formations/master-management-strategique",
    title: "Master Management stratégique — FOPASE",
    description:
      "Piloter la stratégie, les opérations et la transformation des organisations.",
  },
  {
    path: "/formations/licence-marketing-commerce",
    title: "Licence Marketing & Commerce — FOPASE",
    description:
      "Concevoir, promouvoir et vendre des offres sur des marchés concurrentiels.",
  },
  {
    path: "/formations/licence-ressources-humaines",
    title: "Licence Ressources humaines — FOPASE",
    description:
      "Accompagner le recrutement, la paie, la formation et le développement des talents.",
  },
  {
    path: "/formations/licence-informatique-technologies",
    title: "Licence Informatique & Technologies — FOPASE",
    description:
      "Développer, administrer et sécuriser des solutions numériques.",
  },
  {
    path: "/formations/licence-sciences-biomedicales",
    title: "Licence Sciences biomédicales — FOPASE",
    description:
      "Maîtriser les techniques d'analyse et les protocoles de laboratoire.",
  },
  {
    path: "/formations/licence-agroalimentaire",
    title: "Licence Agroalimentaire — FOPASE",
    description:
      "Transformer, contrôler et valoriser les productions agroalimentaires.",
  },
  {
    path: "/formations/formation-entrepreneuriat",
    title: "Formation Entrepreneuriat & Création d'entreprise — FOPASE",
    description:
      "Structurer un projet, valider un modèle économique et lancer son activité.",
  },
  {
    path: "/formations/formation-comptabilite-pratique",
    title: "Formation professionnelle Comptabilité pratique — FOPASE",
    description:
      "Monter rapidement en compétences sur les opérations comptables courantes.",
  },
];

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHtml(template: string, route: RouteMeta, siteUrl: string): string {
  const tags = [
    `    <title>${esc(route.title)}</title>`,
    `    <meta name="description" content="${esc(route.description)}" />`,
    `    <meta property="og:title" content="${esc(route.title)}" />`,
    `    <meta property="og:description" content="${esc(route.description)}" />`,
    `    <meta property="og:url" content="${siteUrl}${route.path}" />`,
    `    <link rel="canonical" href="${siteUrl}${route.path}" />`,
  ].join("\n");

  return template
    .replace(/<title>[^<]*<\/title>/, "")
    .replace("</head>", `${tags}\n  </head>`);
}

export function prerenderMeta(siteUrl = "https://fopase.bj"): Plugin {
  return {
    name: "prerender-meta",
    apply: "build",
    closeBundle() {
      const dist = resolve("dist");
      const template = readFileSync(join(dist, "index.html"), "utf-8");

      for (const route of ROUTES) {
        const html = buildHtml(template, route, siteUrl);

        if (route.path === "/") {
          writeFileSync(join(dist, "index.html"), html);
        } else {
          const dir = join(dist, route.path.replace(/^\//, ""));
          mkdirSync(dir, { recursive: true });
          writeFileSync(join(dir, "index.html"), html);
        }
      }

      console.log(`\n✓ prerender-meta : ${ROUTES.length} pages générées`);
    },
  };
}
