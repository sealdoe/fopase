import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import cover from "@/assets/video-cover.jpg";

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-navy-foreground md:px-10 md:py-32">
      <img src={cover} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="label-eyebrow text-ember">Candidatures</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
          Les inscriptions sont ouvertes — rejoignez la prochaine promotion
        </h2>
        <p className="mt-5 text-base text-navy-foreground/75">
          Dates officielles et modalités à confirmer par FOPASE. Déposez dès maintenant votre
          intention de candidature, notre équipe vous recontacte.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild variant="ember" size="xl">
            <Link to="/admission">
              Candidater <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
