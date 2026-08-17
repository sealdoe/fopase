import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Résultats Annuels — FOPASE";
const description =
  "Consultez les résultats annuels des examens et évaluations de FOPASE par promotion, formation et année académique.";

export const Route = createFileRoute("/resultats-annuels")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/resultats-annuels" }],
  }),
  component: ResultatsAnnuels,
});

function ResultatsAnnuels() {
  return (
    <>
      <PageHero
        title="Résultats Annuels"
        subtitle="Résultats des examens et évaluations par promotion"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Résultats académiques à publier par FOPASE — par année et par formation.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
