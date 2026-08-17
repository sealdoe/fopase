import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "S'Inscrire en Ligne — FOPASE | Formulaire d'inscription";
const description =
  "Déposez votre dossier d'inscription en ligne à FOPASE : formulaire de candidature, pièces à fournir et paiement des frais de dossier via MoMo.";

export const Route = createFileRoute("/inscription")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/inscription" }],
  }),
  component: Inscription,
});

function Inscription() {
  return (
    <>
      <PageHero
        title="S'Inscrire en Ligne"
        subtitle="Déposez votre dossier de candidature directement en ligne"
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-10">
        <p className="text-center text-muted-foreground">
          ⚠️ Formulaire d'inscription en ligne à intégrer — avec relais sur la boîte e-mail FOPASE et paiement MoMo.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
