import { BookOpenCheck, Users2, Briefcase, Handshake, Laptop, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import img from "@/assets/campus-4.jpg";

const items = [
  { icon: Users2, title: "Enseignants praticiens", text: "Des intervenants issus du monde professionnel." },
  { icon: BookOpenCheck, title: "Programmes actualisés", text: "Des contenus alignés sur les besoins des entreprises." },
  { icon: Briefcase, title: "Stages & immersion", text: "Une expérience terrain intégrée au parcours." },
  { icon: Handshake, title: "Réseau partenaire", text: "Un accompagnement vers l'insertion professionnelle." },
  { icon: Laptop, title: "Outils numériques", text: "Des ressources et plateformes pour apprendre autrement." },
  { icon: Wallet, title: "Frais transparents", text: "Informations financières officielles à confirmer." },
];

export function WhyChooseSection() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="label-eyebrow text-ember">Pourquoi nous choisir</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Nous mettons notre expertise au service de votre objectif
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Une formation exigeante, un accompagnement individualisé et une orientation constante
            vers l'employabilité.
          </p>

          <ul className="mt-10 grid gap-7 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={(i % 2) * 80}>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-navy">
                  <it.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-base font-bold">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal className="order-first lg:order-last">
          <img
            src={img}
            alt="Étudiants échangeant devant le campus"
            loading="lazy"
            className="h-[560px] w-full rounded-[2rem] object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
