import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Mémoires & Travaux de Recherche — FOPASE";
const description =
  "Consultez les mémoires et travaux de recherche des étudiants et enseignants de FOPASE : bibliothèque numérique et publications académiques.";

export const Route = createFileRoute("/memoires-recherche")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/memoires-recherche" }],
  }),
  component: MemoiresRecherche,
});

function MemoiresRecherche() {
  return (
    <>
      <PageHero
        title="Mémoires & Travaux de Recherche"
        subtitle="La production académique et scientifique de FOPASE"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Bibliothèque numérique à alimenter — mémoires et travaux de recherche à fournir par FOPASE.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
