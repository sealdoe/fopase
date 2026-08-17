import { BookOpen, GraduationCap, Users, Award } from "lucide-react";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { STATS } from "@/data/site";

const icons = [BookOpen, GraduationCap, Users, Award];

export function CountersBar() {
  return (
    <section className="bg-navy px-5 py-16 text-navy-foreground md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 lg:grid-cols-4">
        {STATS.map((s, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <Reveal key={s.label} delay={i * 80} className="flex items-center gap-4">
              <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-navy-foreground/10 text-ember">
                <Icon className="size-8" />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-foreground/75">{s.label}</p>
                <p className="text-[0.65rem] uppercase tracking-widest text-navy-foreground/45">
                  chiffre {s.note}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
