import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, GraduationCap } from "lucide-react";

const ANNONCES = [
  "📅 Rentrée académique 2026-2027 — Inscriptions ouvertes",
  "🎓 Allocations & ½ Bourses d'études FOPASE 2026-2030 — Dépôt de dossiers en cours",
  "📄 Téléchargez le Guide FOPASE « Comprendre le LMD »",
  "💳 Frais de dossier payables par MoMo — Inscription rapide en ligne",
  "🇬🇭 Programme Etudiez au Ghana — Places limitées, candidatez dès maintenant",
];

export function RentreeBanner() {
  return (
    <div className="border-y border-ember/20 bg-navy">
      {/* Ticker animé */}
      <div className="overflow-hidden border-b border-white/10 py-2.5">
        <div className="flex animate-[ticker_30s_linear_infinite] gap-16 whitespace-nowrap">
          {[...ANNONCES, ...ANNONCES].map((msg, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-white/90">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Cartes rentrée + bourses */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-5 md:grid-cols-2 md:px-10">
        {/* Carte rentrée */}
        <div className="flex items-start gap-4 border-b border-white/10 py-5 md:border-b-0 md:border-r md:pr-10">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember text-white">
            <CalendarDays className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ember">
              Rentrée académique
            </p>
            <p className="mt-0.5 font-display text-lg font-bold text-white">
              2026 – 2027
            </p>
            <p className="mt-1 text-[0.82rem] text-white/70">
              Plaquettes, tarifs, contacts et guide LMD disponibles.{" "}
              <span className="font-semibold text-white/90">
                Inscriptions ouvertes en ligne.
              </span>
            </p>
            <Link
              to="/inscription"
              className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-ember hover:underline"
            >
              S'inscrire maintenant <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Carte bourses */}
        <div className="flex items-start gap-4 py-5 md:pl-10">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
            <GraduationCap className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ember">
              Allocations & ½ Bourses d'études
            </p>
            <p className="mt-0.5 font-display text-lg font-bold text-white">
              FOPASE 2026 – 2030
            </p>
            <p className="mt-1 text-[0.82rem] text-white/70">
              Demande de réduction sur les frais annuels de scolarité.{" "}
              <span className="font-semibold text-white/90">
                Formulaire disponible en ligne.
              </span>
            </p>
            <Link
              to="/inscription"
              className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-ember hover:underline"
            >
              Demander une bourse <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
