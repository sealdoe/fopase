import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Landmark,
  Briefcase,
  Megaphone,
  Users2,
  Cpu,
  FlaskConical,
  Wheat,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DOMAINES, FORMATIONS } from "@/data/formations";

const icons = [Calculator, Landmark, Briefcase, Megaphone, Users2, Cpu, FlaskConical, Wheat, Rocket];

export function DepartmentsSection() {
  const count = (d: string) => FORMATIONS.filter((f) => f.domaine === d).length;

  return (
    <section className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-ember">Départements</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Explorez nos domaines
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Neuf domaines de formation pour construire un projet professionnel cohérent.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINES.map((d, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal as="li" key={d} delay={(i % 3) * 80}>
                <Link
                  to="/formations"
                  search={{ domaine: d }}
                  className="group flex h-full flex-col rounded-2xl bg-card p-7 text-center shadow-[0_24px_60px_-46px_oklch(0_0_0/0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                  <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-accent text-navy transition-colors group-hover:bg-ember group-hover:text-ember-foreground">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{d}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {count(d)} formation{count(d) > 1 ? "s" : ""} disponible
                    {count(d) > 1 ? "s" : ""}.
                  </p>
                  <span className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-ember">
                    En savoir plus <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
