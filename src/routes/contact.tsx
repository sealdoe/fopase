import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/site";
import { FORMATIONS } from "@/data/formations";

const title = "Contact — FOPASE | Demander des informations";
const description =
  "Contactez FOPASE : formulaire de demande d'informations, téléphone, e-mail, WhatsApp et adresse du campus. Notre équipe accompagne votre projet de formation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "sent" | "error";

const field =
  "mt-2 h-12 w-full border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-electric";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("nom") ?? "").trim()) next["nom"] = "Le nom est requis.";
    if (!String(data.get("prenom") ?? "").trim()) next["prenom"] = "Le prénom est requis.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Adresse e-mail invalide.";
    if (!String(data.get("message") ?? "").trim()) next["message"] = "Le message est requis.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Aucun backend connecté : envoi simulé. Brancher ici l'envoi réel (e-mail / CRM).
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Une question sur une formation, l'admission ou la vie étudiante ? Écrivez-nous, nous revenons vers vous rapidement."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            {status === "sent" ? (
              <div className="border border-border bg-sand p-10">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy text-navy-foreground">
                  <Check className="size-6" />
                </span>
                <h2 className="mt-6 text-2xl font-extrabold tracking-tight">Demande envoyée</h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Merci ! Votre demande a bien été prise en compte (démonstration : aucun envoi
                  réel n'est effectué tant que le service de messagerie n'est pas connecté).
                </p>
                <Button className="mt-7" variant="navy" onClick={() => setStatus("idle")}>
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="max-w-2xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="label-eyebrow text-muted-foreground">
                      Nom
                    </label>
                    <input id="nom" name="nom" className={field} aria-invalid={!!errors["nom"]} />
                    {errors["nom"] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors["nom"]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="prenom" className="label-eyebrow text-muted-foreground">
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      className={field}
                      aria-invalid={!!errors["prenom"]}
                    />
                    {errors["prenom"] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors["prenom"]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="label-eyebrow text-muted-foreground">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={field}
                      aria-invalid={!!errors["email"]}
                    />
                    {errors["email"] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="tel" className="label-eyebrow text-muted-foreground">
                      Téléphone
                    </label>
                    <input id="tel" name="tel" type="tel" className={field} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="formation" className="label-eyebrow text-muted-foreground">
                      Formation souhaitée
                    </label>
                    <select id="formation" name="formation" className={field}>
                      <option value="">Je ne sais pas encore</option>
                      {FORMATIONS.map((f) => (
                        <option key={f.slug} value={f.nom}>
                          {f.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="label-eyebrow text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="mt-2 w-full border border-input bg-background p-4 text-sm outline-none transition-colors focus:border-electric"
                      aria-invalid={!!errors["message"]}
                    />
                    {errors["message"] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="ember"
                  size="xl"
                  className="mt-8 w-full sm:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" && <Loader2 className="animate-spin" />}
                  {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
                </Button>

                {status === "error" && (
                  <p role="alert" className="mt-4 text-sm text-destructive">
                    Merci de corriger les champs signalés avant d'envoyer.
                  </p>
                )}
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="bg-navy p-8 text-navy-foreground">
              <h2 className="text-xl font-bold">Contact rapide</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                  <span>{CONTACT.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                  <span>{CONTACT.email}</span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                  <span>WhatsApp : {CONTACT.whatsapp}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden />
                  <span>{CONTACT.address}</span>
                </li>
              </ul>
              <p className="mt-7 text-xs text-navy-foreground/50">
                Coordonnées provisoires — à remplacer par les informations officielles FOPASE.
              </p>
            </div>

            <div className="border border-border p-8">
              <h2 className="text-lg font-bold">Réseaux sociaux</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {CONTACT.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="inline-block border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-navy"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
