import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-students.jpg";
import { SITE, PILIERS } from "@/data/site";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[84svh] overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImg}
          alt="Étudiantes et étudiants échangeant dans le hall d'un campus moderne"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/35" />

        <div className="relative mx-auto flex min-h-[84svh] max-w-[1400px] flex-col justify-center px-5 pb-32 pt-10 md:px-10 md:pb-44">
          <p className="label-eyebrow inline-flex w-fit items-center gap-2 border-b-2 border-ember pb-1 text-ember">
            <GraduationCap className="size-5" /> Bienvenue à {SITE.name} — {SITE.country}
          </p>

          <h1 className="mt-6 max-w-[15ch] text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Construisez un avenir <span className="text-ember">brillant</span> et professionnel
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Des formations professionnalisantes conçues pour développer les compétences, révéler les
            talents et préparer chaque étudiant aux réalités du monde professionnel.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ember" size="xl" className="w-full sm:w-auto">
              <Link to="/formations">
                Nos formations <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl" className="w-full sm:w-auto">
              <Link to="/admission">
                Je candidate <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cartes atouts chevauchant le hero */}
      <div className="relative z-10 mx-auto -mt-24 max-w-[1400px] px-5 md:-mt-28 md:px-10">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILIERS.map((p) => (
            <li
              key={p.num}
              className="group rounded-2xl bg-card p-7 shadow-[0_28px_60px_-38px_oklch(0_0_0/0.6)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-navy text-navy-foreground transition-colors group-hover:bg-ember group-hover:text-ember-foreground">
                  <GraduationCap className="size-7" />
                </span>
                <span className="font-display text-3xl font-extrabold text-navy/25">{p.num}</span>
              </div>
              <h2 className="mt-6 text-lg font-bold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
