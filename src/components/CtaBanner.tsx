import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function CtaBanner({
  title = "Prêt à construire votre avenir ?",
  text = "Une question, un doute, un projet ? L'équipe FOPASE vous accompagne dans votre orientation et votre candidature.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ember px-5 py-16 text-ember-foreground md:px-10 md:py-20">
      <Reveal className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-ember-foreground/70 sm:text-lg">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button asChild variant="navy" size="xl">
            <Link to="/inscription">
              S'inscrire maintenant <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="xl" className="border-2 border-ember-foreground/30 bg-transparent text-ember-foreground hover:bg-ember-foreground/10">
            <Link to="/contact">Poser une question</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
