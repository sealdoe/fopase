import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ADMISSION } from "@/data/site";
import { FORMATIONS } from "@/data/formations";

const title = "Admission — Intègre FOPASE | Candidature et inscription";
const description =
  "Conditions d'admission, pièces à fournir, processus d'inscription et dates clés pour rejoindre FOPASE, institut supérieur de formation professionnelle au Bénin.";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/admission" },
    ],
    links: [{ rel: "canonical", href: "/admission" }],
  }),
  component: AdmissionPage,
});

const etapes = [
  { n: "01", t: "Choisir sa formation", d: "Explore le catalogue ou utilise l'outil d'orientation." },
  { n: "02", t: "Déposer son dossier", d: "Formulaire de candidature et pièces justificatives." },
  { n: "03", t: "Entretien d'orientation", d: "Un échange pour valider la cohérence du projet." },
  { n: "04", t: "Réponse & inscription", d: "Confirmation d'admission puis finalisation de l'inscription." },
];

const conditions = [
  "Être titulaire du diplôme requis pour la formation visée (niveau à confirmer par FOPASE)",
  "Présenter un dossier de candidature complet",
  "Participer à l'entretien d'orientation",
  "Respecter les délais de candidature communiqués par l'établissement",
];

const pieces = [
  "Formulaire de candidature complété",
  "Pièce d'identité en cours de validité",
  "Diplôme et/ou relevés de notes",
  "Photo d'identité récente",
  "Tout justificatif complémentaire demandé selon la formation",
];

function AdmissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Intègre FOPASE"
        subtitle="Un parcours de candidature simple, en quatre étapes. Informations indicatives : les conditions officielles seront confirmées par FOPASE."
        action={
          <>
            <Button asChild variant="ember" size="xl">
              <Link to="/contact">
                Candidater <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/orientation">Je ne sais pas encore quoi choisir</Link>
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading eyebrow="Processus" title="Comment ça se passe" />
        <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((e, i) => (
            <Reveal as="li" key={e.n} delay={i * 70} className="bg-background p-7">
              <span className="font-display text-3xl font-extrabold text-ember">{e.n}</span>
              <h3 className="mt-5 text-lg font-bold">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="bg-sand">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Conditions d'admission
            </h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {conditions.map((c) => (
                <li key={c} className="py-4 text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Pièces à fournir</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {pieces.map((c) => (
                <li key={c} className="py-4 text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Dates importantes</h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Le calendrier officiel des candidatures (ouverture, clôture, rentrée) sera publié par
              FOPASE. Aucune date n'est affichée tant qu'elle n'est pas confirmée.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Frais & informations financières</h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Les frais de formation et les modalités de paiement seront communiqués par
              l'établissement. Contactez-nous pour obtenir le détail à jour.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Formations"
          title="Formations disponibles"
          subtitle="Catalogue de démonstration — l'offre officiellement ouverte à candidature sera confirmée par FOPASE."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATIONS.map((f) => (
            <li key={f.slug} className="border-b border-border py-3">
              <Link
                to="/formations/$slug"
                params={{ slug: f.slug }}
                className="group flex items-center justify-between gap-4 text-sm font-medium"
              >
                {f.nom}
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-sand">
        <SectionHeading eyebrow="FAQ" title="Vos questions sur l'admission" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {FAQ_ADMISSION.map((item, i) => (
            <AccordionItem key={item.q} value={`i${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <CtaBanner title="Prêt à construire votre avenir ?" />
    </>
  );
}
