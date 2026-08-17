import { Reveal } from "@/components/Reveal";

/** PLACEHOLDER — l'équipe pédagogique réelle sera fournie par FOPASE. */
const TEAM = [
  { name: "Prénom Nom — placeholder", role: "Direction pédagogique" },
  { name: "Prénom Nom — placeholder", role: "Responsable des formations" },
  { name: "Prénom Nom — placeholder", role: "Enseignant praticien" },
  { name: "Prénom Nom — placeholder", role: "Responsable insertion" },
];

export function TeamSection() {
  return (
    <section className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-ember">Notre équipe</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Rencontrez nos encadrants
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Emplacements réservés : noms, photos et fonctions officielles à communiquer par
            l'établissement.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={i} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl bg-card text-center shadow-[0_24px_60px_-42px_oklch(0_0_0/0.5)]">
                <div className="flex h-56 items-center justify-center bg-accent">
                  <span className="font-display text-4xl font-extrabold text-navy/30">Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm text-ember">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
