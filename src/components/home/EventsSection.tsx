import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ACTUALITES, CONTACT } from "@/data/site";
import img1 from "@/assets/campus-2.jpg";
import img2 from "@/assets/campus-3.jpg";
import img3 from "@/assets/campus-1.jpg";

const covers = [img1, img2, img3];

export function EventsSection() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-ember">Événements</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Nos prochains rendez-vous
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Programme de démonstration : les dates et intitulés officiels seront publiés par FOPASE.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ACTUALITES.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={covers[i % covers.length]}
                    alt=""
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold">
                    <CalendarDays className="size-4 text-ember" /> {a.date}
                  </span>
                </div>
                <div className="p-6">
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
                    <MapPin className="size-4" /> {CONTACT.address}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <Link
                    to="/actualites"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-ember"
                  >
                    Lire la suite <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
