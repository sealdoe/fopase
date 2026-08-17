import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FormationCard } from "@/components/FormationCard";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { DOMAINES, DUREES, FORMATIONS, NIVEAUX, TYPES } from "@/data/formations";
import { cn } from "@/lib/utils";

const title = "Formations — FOPASE | Licences, masters et formations professionnelles";
const description =
  "Explorez le catalogue de formations FOPASE : finance, banque, management, marketing, ressources humaines, technologies, sciences biomédicales, agroalimentaire et entrepreneuriat.";

type Search = { domaine?: string | undefined };

export const Route = createFileRoute("/formations/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    domaine: typeof s["domaine"] === "string" ? s["domaine"] : undefined,
  }),

  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/formations" },
    ],
    links: [{ rel: "canonical", href: "/formations" }],
  }),
  component: FormationsPage,
});

function Filtre({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="label-eyebrow text-muted-foreground">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-pressed={value === null}
          className={cn(
            "border border-border px-3 py-1.5 text-xs font-semibold transition-colors",
            value === null ? "bg-navy text-navy-foreground" : "hover:border-navy",
          )}
        >
          Tous
        </button>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={cn(
              "border border-border px-3 py-1.5 text-xs font-semibold transition-colors",
              value === o ? "bg-navy text-navy-foreground" : "hover:border-navy",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function FormationsPage() {
  const search = Route.useSearch();
  const [domaine, setDomaine] = useState<string | null>(search.domaine ?? null);
  const [niveau, setNiveau] = useState<string | null>(null);
  const [duree, setDuree] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const results = useMemo(
    () =>
      FORMATIONS.filter(
        (f) =>
          (!domaine || f.domaine === domaine) &&
          (!niveau || f.niveau === niveau) &&
          (!duree || f.duree === duree) &&
          (!type || f.type === type) &&
          (!q.trim() || `${f.nom} ${f.domaine} ${f.resume}`.toLowerCase().includes(q.toLowerCase())),
      ),
    [domaine, niveau, duree, type, q],
  );

  const reset = () => {
    setDomaine(null);
    setNiveau(null);
    setDuree(null);
    setType(null);
    setQ("");
  };

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Trouve ta formation"
        subtitle="Licences, masters et formations professionnelles conçues pour l'employabilité. Catalogue de démonstration : l'offre officielle sera confirmée par FOPASE."
      />

      <section className="border-b border-border bg-sand px-5 py-10 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <label className="block max-w-xl">
            <span className="label-eyebrow text-muted-foreground">Recherche</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ex. comptabilité, marketing, technologies…"
              className="mt-3 h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-electric"
            />
          </label>

          <div className="mt-8 grid gap-7 lg:grid-cols-4">
            <Filtre label="Niveau" options={NIVEAUX} value={niveau} onChange={setNiveau} />
            <Filtre label="Domaine" options={[...DOMAINES]} value={domaine} onChange={setDomaine} />
            <Filtre label="Durée" options={DUREES} value={duree} onChange={setDuree} />
            <Filtre label="Type" options={TYPES} value={type} onChange={setType} />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {results.length} formation{results.length > 1 ? "s" : ""} trouvée
              {results.length > 1 ? "s" : ""}
            </p>
            <Button variant="ghost" size="sm" onClick={reset}>
              Réinitialiser les filtres
            </Button>
          </div>

          {results.length === 0 ? (
            <div className="mt-12 border border-dashed border-border p-12 text-center">
              <p className="font-display text-xl font-bold">Aucune formation ne correspond</p>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                Élargis tes critères, ou laisse-toi guider par notre outil d'orientation.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button variant="navy" onClick={reset}>
                  Réinitialiser
                </Button>
                <Button asChild variant="outline">
                  <Link to="/orientation">Faire le test d'orientation</Link>
                </Button>
              </div>
            </div>
          ) : (
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((f, i) => (
                <Reveal as="li" key={f.slug} delay={(i % 3) * 70} className="relative">
                  <FormationCard formation={f} />
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
