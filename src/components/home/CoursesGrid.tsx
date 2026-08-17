import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, GraduationCap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { FORMATIONS } from "@/data/formations";
import img1 from "@/assets/campus-1.jpg";
import img2 from "@/assets/campus-2.jpg";
import img3 from "@/assets/campus-3.jpg";
import img4 from "@/assets/campus-4.jpg";
import img5 from "@/assets/video-cover.jpg";
import img6 from "@/assets/hero-students.jpg";

const covers = [img1, img2, img3, img4, img5, img6];

export function CoursesGrid() {
  const selection = FORMATIONS.slice(0, 6);

  return (
    <section className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-ember">Nos formations</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Découvrez nos parcours
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Licences, masters et formations professionnelles conçus avec les réalités du marché de
            l'emploi béninois.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {selection.map((f, i) => (
            <Reveal as="li" key={f.slug} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-40px_oklch(0_0_0/0.5)] transition-transform duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={covers[i % covers.length]}
                    alt=""
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ember px-4 py-1.5 text-xs font-bold text-ember-foreground">
                    {f.domaine}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-electric">
                    <Layers className="size-4" /> {f.niveau}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug">
                    <Link
                      to="/formations/$slug"
                      params={{ slug: f.slug }}
                      className="transition-colors hover:text-ember"
                    >
                      {f.nom}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.resume}</p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4 text-ember" /> {f.duree}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap className="size-4 text-ember" /> {f.type}
                    </span>
                    <Link
                      to="/formations/$slug"
                      params={{ slug: f.slug }}
                      className="inline-flex items-center gap-1 text-navy"
                    >
                      Détails <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="ember" size="xl">
            <Link to="/formations">
              Voir toutes les formations <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
