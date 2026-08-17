import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Historique — FOPASE, depuis la création";
const description =
  "Retracez l'histoire de FOPASE : fondation, évolution, accréditations et étapes clés qui ont forgé l'identité de l'institut.";

export const Route = createFileRoute("/historique")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/historique" }],
  }),
  component: Historique,
});

function Historique() {
  return (
    <>
      <PageHero
        title="Notre Historique"
        subtitle="Les grandes étapes qui ont construit FOPASE"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Contenu à fournir par FOPASE — historique officiel de l'établissement.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
