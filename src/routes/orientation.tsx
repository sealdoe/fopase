import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/SectionHeading";
import { OrientationQuiz } from "@/components/OrientationQuiz";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Test d'orientation — Quel parcours FOPASE est fait pour toi ?";
const description =
  "Quatre questions pour identifier les formations FOPASE les plus adaptées à ton domaine d'intérêt, ton niveau d'études et le métier qui t'attire.";

export const Route = createFileRoute("/orientation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/orientation" },
    ],
    links: [{ rel: "canonical", href: "/orientation" }],
  }),
  component: OrientationPage,
});

function OrientationPage() {
  return (
    <>
      <PageHero
        eyebrow="Orientation"
        title="Quel parcours est fait pour toi ?"
        subtitle="Réponds à quatre questions : nous te proposons les formations FOPASE les plus proches de ton profil et de ton ambition."
      />
      <Section>
        <OrientationQuiz />
      </Section>
      <CtaBanner />
    </>
  );
}
