import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ACTUALITES } from "@/data/site";

const title = "Actualités — La vie de FOPASE";
const description =
  "Rentrée académique, forums entreprises, ateliers professionnalisants : suivez les actualités et les événements de FOPASE.";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: ActualitesPage,
});

function ActualitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Ce qui se passe à FOPASE"
        subtitle="Espace éditorial prêt à accueillir les publications officielles de l'établissement."
      />
      <Section>
        {ACTUALITES.length === 0 ? (
          <div className="border border-dashed border-border p-14 text-center">
            <p className="font-display text-xl font-bold">Aucune actualité pour le moment</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Les publications apparaîtront ici dès leur mise en ligne.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-border border-y border-border">
            {ACTUALITES.map((a, i) => (
              <Reveal
                as="li"
                key={a.slug}
                delay={i * 70}
                className="group grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <div className="text-sm text-muted-foreground">
                  <p className="label-eyebrow text-electric">{a.categorie}</p>
                  <p className="mt-2">{a.date}</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {a.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{a.excerpt}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}
        <p className="mt-6 text-xs text-muted-foreground">
          Contenus de démonstration — articles officiels à fournir par FOPASE.
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
