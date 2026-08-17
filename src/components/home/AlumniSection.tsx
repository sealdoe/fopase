import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ALUMNI } from "@/data/site";

export function AlumniSection() {
  const [index, setIndex] = useState(0);
  const item = ALUMNI[index]!;
  const go = (d: number) => setIndex((i) => (i + d + ALUMNI.length) % ALUMNI.length);

  return (
    <Section className="bg-sand">
      <SectionHeading
        eyebrow="Alumni"
        title="Ils sont passés par FOPASE. Voici où ils sont aujourd'hui."
        subtitle="Témoignages en attente : les portraits réels d'anciens étudiants remplaceront ces emplacements."
      />

      <Reveal className="mt-14 grid gap-10 border-t border-border pt-12 lg:grid-cols-[1fr_auto]">
        <figure className="max-w-4xl">
          <Quote className="size-8 text-electric" aria-hidden />
          <blockquote className="mt-6 font-display text-2xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-3xl md:text-4xl">
            « {item.quote} »
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span
              aria-hidden
              className="flex size-14 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground"
            >
              {item.initials}
            </span>
            <span className="text-sm">
              <span className="block font-semibold">{item.name}</span>
              <span className="block text-muted-foreground">
                {item.formation} · {item.promo}
              </span>
              <span className="block text-muted-foreground">
                {item.role} — {item.company}
              </span>
            </span>
          </figcaption>
        </figure>

        <div className="flex items-start gap-3 lg:flex-col">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Témoignage précédent"
            className="inline-flex size-12 items-center justify-center border border-border transition-colors hover:bg-navy hover:text-navy-foreground"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Témoignage suivant"
            className="inline-flex size-12 items-center justify-center border border-border transition-colors hover:bg-navy hover:text-navy-foreground"
          >
            <ArrowRight className="size-5" />
          </button>
          <span className="self-center text-sm text-muted-foreground lg:mt-2">
            {index + 1} / {ALUMNI.length}
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
