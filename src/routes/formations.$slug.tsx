import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
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
import { FAQ_ADMISSION, ALUMNI } from "@/data/site";
import { getFormation } from "@/data/formations";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const formation = getFormation(params.slug);
    if (!formation) throw notFound();
    return { formation };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Formation introuvable — FOPASE" }, { name: "robots", content: "noindex" }] };
    }
    const f = loaderData.formation;
    const title = `${f.nom} — FOPASE`;
    const description = `${f.resume} ${f.niveau} · ${f.duree} · ${f.domaine}. Débouchés : ${f.debouches.join(", ")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/formations/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/formations/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: f.nom,
            description: f.resume,
            provider: { "@type": "CollegeOrUniversity", name: "FOPASE" },
          }),
        },
      ],
    };
  },
  component: FormationDetail,
  notFoundComponent: FormationNotFound,
});

function FormationNotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-5 px-5 text-center">
      <h1 className="font-display text-3xl font-extrabold">Cette formation n'existe pas</h1>
      <p className="max-w-md text-muted-foreground">
        Le parcours recherché n'est pas (ou plus) au catalogue. Explorez l'ensemble des formations
        FOPASE.
      </p>
      <Button asChild variant="navy" size="lg">
        <Link to="/formations">Voir toutes les formations</Link>
      </Button>
    </div>
  );
}

function FormationDetail() {
  const { formation: f } = Route.useLoaderData();
  const alumni = ALUMNI[0]!;

  return (
    <>
      <PageHero
        eyebrow={f.domaine}
        title={f.nom}
        subtitle={f.resume}
        action={
          <>
            <Button asChild variant="ember" size="xl">
              <Link to="/admission">
                Candidater <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/contact">Demander des informations</Link>
            </Button>
          </>
        }
      />

      <div className="border-b border-border bg-sand px-5 py-6 md:px-10">
        <dl className="mx-auto flex max-w-[1400px] flex-wrap gap-x-12 gap-y-4">
          {[
            ["Niveau", f.niveau],
            ["Durée", f.duree],
            ["Type", f.type],
            ["Domaine", f.domaine],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="label-eyebrow text-muted-foreground">{k}</dt>
              <dd className="mt-1 font-display text-lg font-bold tracking-tight">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Présentation</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{f.presentation}</p>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Objectifs</h2>
              <ul className="mt-6 space-y-3">
                {f.objectifs.map((o) => (
                  <li key={o} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-5 shrink-0 text-electric" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Programme</h2>
              <ol className="mt-6 divide-y divide-border border-y border-border">
                {f.programme.map((p, i) => (
                  <li key={p.annee} className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                    <span className="font-display text-2xl font-extrabold text-electric">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold">{p.annee}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.modules.join(" · ")}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-muted-foreground">
                Maquette pédagogique indicative — programme officiel à valider par FOPASE.
              </p>
            </Reveal>
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border p-7">
              <h2 className="text-lg font-bold">Compétences acquises</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {f.competences.map((c) => (
                  <li key={c} className="border border-border px-3 py-1.5 text-xs font-semibold">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy p-7 text-navy-foreground">
              <h2 className="text-lg font-bold">Débouchés professionnels</h2>
              <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
                {f.debouches.map((d) => (
                  <li key={d} className="border-b border-navy-foreground/15 pb-2">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-7">
              <h2 className="text-lg font-bold">Pourquoi choisir cette formation ?</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {f.pourquoi.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-sand">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            « {alumni.quote} »
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            {alumni.name} — {alumni.formation}, {alumni.promo}
          </figcaption>
        </figure>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
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

      <CtaBanner />
    </>
  );
}
