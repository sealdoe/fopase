import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PARTENAIRES_SLOTS } from "@/data/site";

const engagements = [
  "Stages en entreprise",
  "Interventions de professionnels",
  "Conférences métiers",
  "Projets commandités",
  "Forums recrutement",
  "Collaborations académiques",
];

export function PartenairesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Entreprises & partenaires"
        title="Le monde professionnel est notre terrain de jeu."
        subtitle="L'entreprise n'intervient pas à la fin du parcours : elle en fait partie du premier jour au dernier."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-0 border-t border-border">
          {engagements.map((e, i) => (
            <Reveal
              as="li"
              key={e}
              delay={i * 50}
              className="flex items-center gap-4 border-b border-border py-4"
            >
              <span className="label-eyebrow text-electric">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-medium">{e}</span>
            </Reveal>
          ))}
        </ul>

        <div>
          <p className="label-eyebrow text-muted-foreground">Logos partenaires</p>
          <ul className="mt-4 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {Array.from({ length: PARTENAIRES_SLOTS }).map((_, i) => (
              <li
                key={i}
                className="flex aspect-[3/2] items-center justify-center bg-background text-[0.65rem] uppercase tracking-widest text-muted-foreground"
              >
                Logo {i + 1}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Emplacements réservés — aucun partenariat n'est affiché tant que la liste officielle
            n'est pas communiquée par FOPASE.
          </p>
        </div>
      </div>
    </Section>
  );
}
