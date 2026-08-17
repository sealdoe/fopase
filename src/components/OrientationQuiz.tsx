import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOMAINES, FORMATIONS, NIVEAUX, type Formation } from "@/data/formations";
import { cn } from "@/lib/utils";

type Answers = { domaine?: string; niveau?: string; posture?: string; rythme?: string };

const POSTURES: { label: string; domaines: string[] }[] = [
  { label: "Entreprendre", domaines: ["Entrepreneuriat", "Management & Gestion", "Marketing & Commerce"] },
  { label: "Gérer & piloter", domaines: ["Management & Gestion", "Ressources humaines", "Finance & Comptabilité"] },
  { label: "Analyser & chiffrer", domaines: ["Finance & Comptabilité", "Banque & Assurance", "Technologies"] },
  { label: "Vendre & convaincre", domaines: ["Marketing & Commerce", "Banque & Assurance"] },
  { label: "Créer & construire", domaines: ["Technologies", "Agroalimentaire", "Entrepreneuriat"] },
  { label: "Sciences & laboratoire", domaines: ["Sciences biomédicales", "Agroalimentaire"] },
];

const RYTHMES = ["Initiale", "Alternance", "Continue"];

const QUESTIONS = [
  { key: "domaine" as const, title: "Quel domaine t'intéresse ?", options: [...DOMAINES] },
  { key: "niveau" as const, title: "Quel niveau vises-tu ?", options: NIVEAUX as string[] },
  { key: "posture" as const, title: "Quel type de métier t'attire ?", options: POSTURES.map((p) => p.label) },
  { key: "rythme" as const, title: "Quel rythme te correspond ?", options: RYTHMES },
];

function score(f: Formation, a: Answers) {
  let s = 0;
  if (a.domaine === f.domaine) s += 4;
  if (a.niveau === f.niveau) s += 3;
  const posture = POSTURES.find((p) => p.label === a.posture);
  if (posture?.domaines.includes(f.domaine)) s += 2;
  if (a.rythme === f.type) s += 1;
  return s;
}

export function OrientationQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= QUESTIONS.length;

  const results = useMemo(() => {
    if (!done) return [];
    return [...FORMATIONS]
      .map((f) => ({ f, s: score(f, answers) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 3)
      .filter((r) => r.s > 0)
      .map((r) => r.f);
  }, [answers, done]);

  const q = QUESTIONS[step];

  return (
    <div className="border border-border bg-background p-6 sm:p-10">
      {!done && q ? (
        <>
          <div className="flex items-center justify-between gap-4">
            <p className="label-eyebrow text-electric">
              Question {step + 1} / {QUESTIONS.length}
            </p>
            <div className="h-1 w-32 bg-border" aria-hidden>
              <div
                className="h-full bg-ember transition-all duration-500"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{q.title}</h3>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {q.options.map((opt) => {
              const selected = answers[q.key] === opt;
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => {
                      setAnswers((a) => ({ ...a, [q.key]: opt }));
                      setStep((s) => s + 1);
                    }}
                    className={cn(
                      "w-full border border-border px-4 py-4 text-left text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-navy-foreground",
                      selected && "border-navy bg-navy text-navy-foreground",
                    )}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>

          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Question précédente
            </button>
          )}
        </>
      ) : (
        <>
          <p className="label-eyebrow text-electric">Résultat</p>
          <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Voici les formations FOPASE qui correspondent le mieux à ton profil.
          </h3>

          {results.length === 0 ? (
            <p className="mt-6 max-w-xl text-muted-foreground">
              Aucune correspondance nette pour ces réponses. Explore le catalogue complet ou
              contacte-nous : nous t'aiderons à préciser ton projet.
            </p>
          ) : (
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {results.map((f) => (
                <li key={f.slug} className="flex flex-wrap items-center justify-between gap-4 py-5">
                  <div>
                    <p className="label-eyebrow text-muted-foreground">{f.domaine}</p>
                    <p className="mt-1 font-display text-lg font-bold tracking-tight">{f.nom}</p>
                    <p className="text-sm text-muted-foreground">
                      {f.niveau} · {f.duree} · {f.type}
                    </p>
                  </div>
                  <Button asChild variant="navy">
                    <Link to="/formations/$slug" params={{ slug: f.slug }}>
                      Découvrir <ArrowRight />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="ember" size="lg">
              <Link to="/admission">Candidater</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/formations">Voir toutes les formations</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                setAnswers({});
                setStep(0);
              }}
            >
              <RotateCcw /> Recommencer
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
