import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Cours à Distance — FOPASE | Formations en ligne";
const description =
  "Suivez les formations FOPASE à distance : cours en ligne, supports pédagogiques, planning et modalités d'enseignement à distance.";

export const Route = createFileRoute("/cours-a-distance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/cours-a-distance" }],
  }),
  component: CoursADistance,
});

function CoursADistance() {
  return (
    <>
      <PageHero
        title="Cours à Distance"
        subtitle="Formez-vous depuis partout, à votre rythme"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Contenu à fournir par FOPASE — modalités et catalogue des cours à distance.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
