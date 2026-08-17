import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import cover from "@/assets/video-cover.jpg";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
            Découvrez FOPASE en 90 secondes
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Emplacement réservé à la vidéo institutionnelle FOPASE. Le lecteur peut être remplacé
            par la vidéo officielle sans modifier la mise en page.
          </p>
        </div>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-navy">
          {playing ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-navy-foreground">
              <p className="label-eyebrow text-ember">Lecteur vidéo</p>
              <p className="max-w-md text-sm text-navy-foreground/70">
                Aucune vidéo n'est encore disponible. Intégrez ici l'URL de la vidéo officielle
                FOPASE (YouTube, Vimeo ou fichier hébergé).
              </p>
              <button
                type="button"
                onClick={() => setPlaying(false)}
                className="mt-2 text-sm font-semibold text-ember underline underline-offset-4"
              >
                Revenir à la miniature
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Lire la vidéo de présentation de FOPASE"
              className="group h-full w-full"
            >
              <img
                src={cover}
                alt="Amphithéâtre rempli d'étudiants attentifs"
                width={1600}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/25" />
              <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ember text-ember-foreground transition-transform duration-300 group-hover:scale-110 md:size-28">
                <span className="absolute inset-0 animate-ping rounded-full bg-ember/40" />
                <Play className="relative size-7 md:size-9" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
