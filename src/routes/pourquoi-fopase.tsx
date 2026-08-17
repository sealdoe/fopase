import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PiliersSection } from "@/components/home/PiliersSection";
import { DebouchesSection } from "@/components/home/DebouchesSection";
import { PartenairesSection } from "@/components/home/PartenairesSection";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Pourquoi FOPASE ? — Employabilité et professionnalisation";
const description =
  "Pédagogie pratique, immersion en entreprise, esprit entrepreneurial et réseau professionnel : les raisons de choisir FOPASE pour construire sa carrière.";

export const Route = createFileRoute("/pourquoi-fopase")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pourquoi-fopase" },
    ],
    links: [{ rel: "canonical", href: "/pourquoi-fopase" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Pourquoi FOPASE ?"
        title="Une école pensée pour l'après."
        subtitle="Chaque module, chaque projet et chaque stage a une finalité : rendre l'étudiant capable de travailler, dès la sortie."
      />
      <PiliersSection />
      <DebouchesSection />
      <PartenairesSection />
      <CtaBanner />
    </>
  ),
});
