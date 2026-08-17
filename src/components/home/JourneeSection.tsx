import { Reveal } from "@/components/Reveal";
import { JOURNEE } from "@/data/site";

export function JourneeSection() {
  return (
    <section className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="label-eyebrow text-electric">Une journée à FOPASE</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
            Une journée. Une ambition.
          </h2>
        </Reveal>

        {/* Timeline horizontale scrollable sur mobile, grille sur desktop */}
        <ol className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-0 lg:overflow-visible lg:pb-0">
          {JOURNEE.map((step, i) => (
            <Reveal
              as="li"
              key={step.time}
              delay={i * 70}
              className="min-w-[74%] snap-start sm:min-w-[46%] lg:min-w-0"
            >
              <div className="group h-full border-t-2 border-navy/15 pt-5 transition-colors hover:border-ember lg:border-l-0 lg:pr-6">
                <p className="font-display text-2xl font-extrabold tracking-tight text-navy">
                  {step.time}
                </p>
                <h3 className="mt-3 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
