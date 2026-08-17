import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Formation } from "@/data/formations";

export function FormationCard({ formation }: { formation: Formation }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:shadow-[0_24px_60px_-32px_oklch(0.22_0.06_262/0.5)]">
      <p className="label-eyebrow text-electric">{formation.domaine}</p>
      <h3 className="mt-4 text-xl font-bold leading-snug">
        <Link
          to="/formations/$slug"
          params={{ slug: formation.slug }}
          className="after:absolute after:inset-0"
        >
          {formation.nom}
        </Link>
      </h3>
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
        <span>{formation.niveau}</span>
        <span aria-hidden>•</span>
        <span>{formation.duree}</span>
        <span aria-hidden>•</span>
        <span>{formation.type}</span>
      </p>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{formation.resume}</p>

      <div className="mt-6 border-t border-border pt-5">
        <p className="label-eyebrow text-muted-foreground">Débouchés</p>
        <p className="mt-2 text-sm text-foreground/80">
          {formation.debouches.slice(0, 3).join(" · ")}
        </p>
      </div>

      <Link
        to="/formations/$slug"
        params={{ slug: formation.slug }}
        tabIndex={-1}
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy"
      >
        Découvrir la formation
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
      </Link>
    </article>
  );
}
