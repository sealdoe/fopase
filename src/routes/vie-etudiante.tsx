import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { JourneeSection } from "@/components/home/JourneeSection";
import { GALERIE } from "@/components/home/GalerieSection";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Vie étudiante — Vivre FOPASE";
const description =
  "Campus, cours, événements, soutenances, vie associative, ateliers et projets : découvrez le quotidien des étudiants de FOPASE.";

const categories = ["Campus", "Cours", "Événements", "Soutenances", "Vie associative", "Ateliers", "Projets"];

export const Route = createFileRoute("/vie-etudiante")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vie-etudiante" },
    ],
    links: [{ rel: "canonical", href: "/vie-etudiante" }],
  }),
  component: VieEtudiantePage,
});

function VieEtudiantePage() {
  return (
    <>
      <PageHero
        eyebrow="Vie étudiante"
        title="Vivre FOPASE"
        subtitle="Un environnement vivant, où l'on apprend autant dans les projets, les associations et les événements que dans les salles de cours."
      />

      <Section>
        <SectionHeading eyebrow="Galerie" title="Le quotidien en images" />
        <ul className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c} className="border border-border px-3 py-1.5 text-xs font-semibold">
              {c}
            </li>
          ))}
        </ul>

        <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {[...GALERIE, ...GALERIE].map((img, i) => (
            <Reveal as="li" key={`${img.alt}-${i}`} delay={(i % 3) * 70} className="break-inside-avoid">
              <figure className="group relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />
                <figcaption className="absolute bottom-0 left-0 bg-navy/85 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-foreground">
                  {img.cat}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">
          Photographies d'illustration — à remplacer par les visuels officiels FOPASE.
        </p>
      </Section>

      <JourneeSection />
      <CtaBanner />
    </>
  );
}
