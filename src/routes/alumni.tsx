import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AlumniSection } from "@/components/home/AlumniSection";
import { CtaBanner } from "@/components/CtaBanner";
import { ALUMNI } from "@/data/site";

const title = "Alumni — Ils sont passés par FOPASE";
const description =
  "Parcours et témoignages des anciens étudiants de FOPASE : formations suivies, métiers exercés et trajectoires professionnelles.";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/alumni" },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: AlumniPage,
});

function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title="Ils sont passés par FOPASE."
        subtitle="Voici où ils sont aujourd'hui. Les portraits réels remplaceront ces emplacements dès réception des témoignages officiels."
      />
      <AlumniSection />
      <Section>
        <SectionHeading eyebrow="Réseau" title="Tous les témoignages" />
        <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {ALUMNI.map((a, i) => (
            <Reveal as="li" key={a.initials} delay={i * 70} className="bg-background p-8">
              <span
                aria-hidden
                className="flex size-14 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground"
              >
                {a.initials}
              </span>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">« {a.quote} »</p>
              <p className="mt-6 font-semibold">{a.name}</p>
              <p className="text-sm text-muted-foreground">
                {a.formation} · {a.promo}
              </p>
              <p className="text-sm text-muted-foreground">
                {a.role} — {a.company}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
}
