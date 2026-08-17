import { Reveal } from "@/components/Reveal";
import { PILIERS } from "@/data/site";
import campus1 from "@/assets/campus-1.jpg";

export function PiliersSection() {
  return (
    <section className="bg-navy px-5 py-20 text-navy-foreground md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="label-eyebrow text-ember">Notre promesse</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Plus qu'un diplôme. Une préparation au monde professionnel.
          </h2>
          <p className="mt-6 max-w-md text-navy-foreground/70">
            À FOPASE, on ne vient pas seulement chercher un diplôme. On vient construire son avenir
            professionnel.
          </p>
          <img
            src={campus1}
            alt="Étudiants travaillant en équipe autour d'ordinateurs portables"
            width={1000}
            height={1300}
            loading="lazy"
            className="mt-10 hidden aspect-[4/3] w-full object-cover lg:block"
          />
        </div>

        <ol className="divide-y divide-navy-foreground/15 border-y border-navy-foreground/15">
          {PILIERS.map((p, i) => (
            <Reveal
              as="li"
              key={p.num}
              delay={i * 90}
              className="group grid gap-4 py-9 sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <span className="font-display text-3xl font-extrabold text-ember/70 transition-colors group-hover:text-ember sm:text-4xl">
                {p.num}
              </span>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 max-w-xl text-navy-foreground/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
