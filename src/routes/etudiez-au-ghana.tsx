import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Etudiez au Ghana — FOPASE | Programme d'échanges";
const description =
  "Partez étudier au Ghana avec FOPASE : programme d'échanges académiques, universités partenaires, démarches et témoignages d'anciens étudiants.";

export const Route = createFileRoute("/etudiez-au-ghana")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/etudiez-au-ghana" }],
  }),
  component: EtudiezAuGhana,
});

function EtudiezAuGhana() {
  return (
    <>
      <PageHero
        title="Etudiez au Ghana"
        subtitle="Un programme d'échanges pour élargir vos horizons académiques"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Contenu du programme Ghana à fournir par FOPASE — universités partenaires, conditions, démarches.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
