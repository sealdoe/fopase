import { ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PARCOURS_METIERS } from "@/data/site";

export function DebouchesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Employabilité"
        title="Et après FOPASE ?"
        subtitle="Chaque formation ouvre une trajectoire professionnelle concrète. Voici des exemples de progression de carrière par domaine."
      />

      <ul className="mt-14 space-y-0 border-t border-border">
        {PARCOURS_METIERS.map((p, i) => (
          <Reveal
            as="li"
            key={p.domaine}
            delay={i * 60}
            className="group grid items-center gap-4 border-b border-border py-7 lg:grid-cols-[280px_1fr] lg:gap-10"
          >
            <p className="font-display text-lg font-bold tracking-tight text-navy">{p.domaine}</p>
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {p.steps.map((s, j) => (
                <li key={s} className="flex items-center gap-1.5">
                  {j > 0 && <ChevronRight className="size-4 text-electric" aria-hidden />}
                  <span className="border border-border px-3 py-1.5 text-sm transition-colors group-hover:border-navy/40">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        Exemples de trajectoires indicatives — les débouchés définitifs seront précisés par FOPASE.
      </p>
    </Section>
  );
}
