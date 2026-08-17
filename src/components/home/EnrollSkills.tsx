import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { FORMATIONS } from "@/data/formations";

/** PLACEHOLDER — indicateurs illustratifs, à remplacer par des données officielles. */
const SKILLS = [
  { label: "Enseignements pratiques", value: 85 },
  { label: "Accompagnement carrière", value: 70 },
  { label: "Projets en entreprise", value: 75 },
];

export function EnrollSkills() {
  return (
    <section className="bg-navy px-5 py-20 text-navy-foreground md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
        <Reveal className="rounded-2xl bg-card p-8 text-card-foreground shadow-[0_30px_70px_-40px_oklch(0_0_0/0.6)]">
          <h2 className="text-2xl font-extrabold tracking-[-0.03em]">Démarrer ma candidature</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Laissez vos coordonnées, notre équipe vous rappelle.
          </p>
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              required
              placeholder="Nom complet"
              className="h-12 w-full rounded-full border border-input bg-background px-5 text-sm outline-none focus:border-ember"
            />
            <input
              required
              type="email"
              placeholder="Adresse e-mail"
              className="h-12 w-full rounded-full border border-input bg-background px-5 text-sm outline-none focus:border-ember"
            />
            <input
              placeholder="Téléphone"
              className="h-12 w-full rounded-full border border-input bg-background px-5 text-sm outline-none focus:border-ember"
            />
            <select
              className="h-12 w-full rounded-full border border-input bg-background px-5 text-sm outline-none focus:border-ember"
              defaultValue=""
            >
              <option value="" disabled>
                Choisir une formation
              </option>
              {FORMATIONS.slice(0, 8).map((f) => (
                <option key={f.slug}>{f.nom}</option>
              ))}
            </select>
            <Button asChild variant="ember" size="lg" className="w-full">
              <Link to="/admission">
                Continuer ma candidature <ArrowRight />
              </Link>
            </Button>
          </form>
        </Reveal>

        <Reveal>
          <p className="label-eyebrow text-ember">Notre approche</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Révélez votre talent et votre créativité avec nous
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            Chaque parcours FOPASE conjugue savoir, savoir-faire et savoir-être : un socle
            académique solide, une pratique constante et un accompagnement individualisé jusqu'à
            l'insertion professionnelle.
          </p>

          <ul className="mt-10 space-y-7">
            {SKILLS.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 90}>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{s.label}</span>
                  <span className="text-ember">{s.value}%</span>
                </div>
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-navy-foreground/15">
                  <div className="h-full rounded-full bg-ember" style={{ width: `${s.value}%` }} />
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
