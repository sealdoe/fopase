import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ExternalLink } from "lucide-react";
import { CONTACT, SITE } from "@/data/site";

const COLUMNS = [
  {
    title: "L'Institut",
    links: [
      { label: "Historique", to: "/historique" },
      { label: "Mots du Président", to: "/mots-du-president" },
      { label: "Pourquoi FOPASE ?", to: "/pourquoi-fopase" },
      { label: "Vie étudiante", to: "/vie-etudiante" },
      { label: "Alumni", to: "/alumni" },
    ],
  },
  {
    title: "Formations",
    links: [
      { label: "Toutes les formations", to: "/formations" },
      { label: "Cours à Distance", to: "/cours-a-distance" },
      { label: "Mémoires & Recherche", to: "/memoires-recherche" },
      { label: "Résultats Annuels", to: "/resultats-annuels" },
      { label: "Etudiez au Ghana", to: "/etudiez-au-ghana" },
    ],
  },
  {
    title: "Candidature",
    links: [
      { label: "Inscription en ligne", to: "/inscription" },
      { label: "Admission", to: "/admission" },
      { label: "Test d'orientation", to: "/orientation" },
      { label: "Actualités", to: "/actualites" },
      { label: "Galerie Photos-Vidéos", to: "/galerie" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* ── Corps principal ─────────────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
        {/* Haut : logo + réseaux — compact */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
          <div className="flex items-baseline gap-3">
            <Link to="/" className="inline-flex items-baseline gap-0.5">
              <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-white">
                FOP
              </span>
              <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ember">
                ASE
              </span>
            </Link>
            <span className="hidden text-xs text-navy-foreground/50 sm:inline">
              {SITE.baseline} — {SITE.country}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-navy-foreground/40">
              Suivez-nous
            </span>
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-navy-foreground/75 transition-colors hover:border-ember/50 hover:bg-ember/10 hover:text-white"
              >
                {s.label} <ExternalLink className="size-2.5 opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Colonnes de liens + contact */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label-eyebrow text-ember">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to as "/"}
                      className="group inline-flex items-center gap-1.5 text-[0.82rem] text-navy-foreground/60 transition-colors hover:text-white"
                    >
                      <span className="h-px w-2.5 shrink-0 bg-ember/40 transition-all group-hover:w-4 group-hover:bg-ember" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Colonne contact */}
          <div>
            <h3 className="label-eyebrow text-ember">Contact</h3>
            <ul className="mt-3 space-y-2.5 text-[0.82rem]">
              <li className="flex items-start gap-2 text-navy-foreground/60">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-ember" />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2 text-navy-foreground/60 transition-colors hover:text-white"
                >
                  <Phone className="size-3.5 shrink-0 text-ember" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-navy-foreground/60 transition-colors hover:text-white"
                >
                  <Mail className="size-3.5 shrink-0 text-ember" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy-foreground/60 transition-colors hover:text-white"
                >
                  <MessageCircle className="size-3.5 shrink-0 text-ember" />
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ember px-3.5 py-1.5 text-xs font-bold text-ember-foreground transition-colors hover:bg-ember/85"
                >
                  Formulaire de contact <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bas de page ─────────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1.5 px-5 py-4 text-xs text-navy-foreground/40 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} FOPASE — Institut supérieur de formation professionnelle,
            Bénin.
          </p>
          {/* <p className="italic">Contenus de démonstration — informations officielles à compléter par FOPASE.</p> */}
        </div>
      </div>
    </footer>
  );
}
