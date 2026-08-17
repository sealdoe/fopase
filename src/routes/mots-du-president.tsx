import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Mots du Président — FOPASE";
const description =
  "Message du Président de FOPASE : vision, engagement et ambitions pour la formation professionnelle au Bénin.";

export const Route = createFileRoute("/mots-du-president")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/mots-du-president" }],
  }),
  component: MotsDuPresident,
});

function MotsDuPresident() {
  return (
    <>
      <PageHero
        title="Mots du Président"
        subtitle="La vision et l'engagement de la direction de FOPASE"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Message officiel du Président à fournir par FOPASE.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
