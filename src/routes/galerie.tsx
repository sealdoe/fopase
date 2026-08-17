import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Galerie Photos-Vidéos — FOPASE";
const description =
  "Découvrez FOPASE en images et en vidéos : campus, événements, cérémonies de remise de diplômes, ateliers et vie étudiante.";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: Galerie,
});

function Galerie() {
  return (
    <>
      <PageHero
        title="Galerie Photos-Vidéos"
        subtitle="FOPASE en images — campus, événements et vie étudiante"
      />
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Photos et vidéos à fournir par FOPASE — galerie à alimenter.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
