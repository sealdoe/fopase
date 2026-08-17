import { Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Globe2, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/data/site";
import img1 from "@/assets/campus-1.jpg";
import img2 from "@/assets/campus-2.jpg";
import img3 from "@/assets/campus-3.jpg";

export function AboutEduka() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        {/* Collage d'images */}
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-5">
            <img
              src={img1}
              alt="Étudiants en cours sur le campus"
              loading="lazy"
              className="col-span-2 h-72 w-full rounded-2xl object-cover"
            />
            <img
              src={img2}
              alt="Travail en groupe à la bibliothèque"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover"
            />
            <img
              src={img3}
              alt="Atelier pratique en laboratoire"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 flex w-[78%] max-w-xs -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-2xl bg-ember p-5 text-ember-foreground shadow-[0_28px_60px_-30px_oklch(0_0_0/0.55)]">
            <GraduationCap className="size-10 shrink-0" />
            <p className="font-display text-lg font-extrabold leading-tight">
              Une expérience
              <br />
              au service de l'emploi
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="label-eyebrow text-ember">À propos de nous</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Notre modèle de formation vous inspire davantage.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            FOPASE est un institut supérieur de formation professionnelle au Bénin. Nos parcours
            associent fondamentaux académiques, pratique intensive et immersion en entreprise pour
            préparer chaque étudiant aux réalités du monde professionnel.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Lightbulb,
                title: "Pédagogie par la pratique",
                text: "Études de cas, projets et mises en situation professionnelles.",
              },
              {
                icon: Globe2,
                title: "Ouverture professionnelle",
                text: "Réseau d'entreprises, stages et accompagnement carrière.",
              },
            ].map((f) => (
              <div key={f.title}>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-navy">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Contenus institutionnels de démonstration : les textes officiels seront fournis par
            l'établissement.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild variant="ember" size="lg">
              <Link to="/a-propos">
                En savoir plus <ArrowRight />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-navy-foreground">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Appelez-nous
                </p>
                <p className="text-sm font-bold text-navy">{CONTACT.phone}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
