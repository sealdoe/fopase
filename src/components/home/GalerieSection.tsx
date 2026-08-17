import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import c1 from "@/assets/campus-1.jpg";
import c2 from "@/assets/campus-2.jpg";
import c3 from "@/assets/campus-3.jpg";
import c4 from "@/assets/campus-4.jpg";

export const GALERIE = [
  { src: c2, alt: "Bâtiment du campus sous un ciel bleu", cat: "Campus", span: "lg:col-span-2 lg:row-span-1 aspect-[16/10]" },
  { src: c1, alt: "Étudiants travaillant ensemble sur des ordinateurs", cat: "Cours", span: "aspect-[3/4]" },
  { src: c4, alt: "Étudiants souriants lors d'un événement de campus", cat: "Vie associative", span: "aspect-[3/4]" },
  { src: c3, alt: "Étudiant présentant son projet devant un jury", cat: "Soutenances", span: "lg:col-span-2 aspect-[16/10]" },
];

export function GalerieSection() {
  return (
    <Section className="bg-navy text-navy-foreground">
      <SectionHeading
        dark
        eyebrow="Vie étudiante"
        title="Vivre FOPASE"
        subtitle="Campus, cours, événements, soutenances, vie associative, ateliers et projets : un environnement vivant où l'on apprend autant en dehors des salles qu'à l'intérieur."
        action={
          <Button asChild variant="onDark" size="lg">
            <Link to="/vie-etudiante">Voir la galerie →</Link>
          </Button>
        }
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GALERIE.map((img, i) => (
          <Reveal as="li" key={img.alt} delay={i * 80} className={img.span}>
            <figure className="group relative h-full w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-navy/85 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-foreground">
                {img.cat}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
      <p className="mt-6 text-xs text-navy-foreground/50">
        Photographies d'illustration — à remplacer par les visuels officiels FOPASE.
      </p>
    </Section>
  );
}
