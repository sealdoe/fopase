import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { PILIERS } from "@/data/site";
import campus2 from "@/assets/campus-2.jpg";

const title = "À propos — FOPASE, institut supérieur au Bénin";
const description =
  "Découvrez FOPASE : notre mission, notre vision et notre approche de la formation professionnalisante au Bénin, au service de l'employabilité des étudiants.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="FOPASE"
        title="On ne vient pas seulement chercher un diplôme."
        subtitle="FOPASE est un institut supérieur de formation professionnelle qui prépare des femmes et des hommes à réussir dans le monde du travail. Contenus institutionnels de démonstration : le texte officiel sera fourni par l'établissement."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Notre mission</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Former des professionnels compétents, responsables et immédiatement opérationnels, en
              plaçant la pratique, le projet et l'entreprise au cœur du parcours d'apprentissage.
            </p>
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Notre vision
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Faire de chaque étudiant un acteur de son avenir : capable d'analyser, de décider,
              d'entreprendre et de s'adapter aux mutations économiques de l'Afrique de l'Ouest.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={campus2}
              alt="Bâtiment du campus sous un ciel dégagé"
              width={1300}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Visuel d'illustration — à remplacer par une photo officielle du campus.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand">
        <SectionHeading eyebrow="Notre approche" title="Quatre convictions pédagogiques" />
        <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PILIERS.map((p, i) => (
            <Reveal as="li" key={p.num} delay={i * 70} className="bg-background p-7">
              <span className="font-display text-3xl font-extrabold text-electric">{p.num}</span>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Notre équipe"
          title="Une équipe pédagogique et professionnelle"
          subtitle="Les profils de la direction et du corps enseignant seront publiés dès que les informations officielles seront communiquées par FOPASE."
        />
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="bg-background p-7">
              <div className="aspect-square w-full bg-muted" aria-hidden />
              <p className="mt-5 font-semibold">Prénom Nom — placeholder</p>
              <p className="text-sm text-muted-foreground">Fonction — à compléter</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
