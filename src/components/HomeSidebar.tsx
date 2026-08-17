import { Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Star,
  Handshake,
  ImageIcon,
  Megaphone,
  BookOpen,
  Mail,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  {
    icon: Heart,
    label: "Nos Valeurs",
    href: "/a-propos#valeurs",
    description: "Intégrité, excellence, engagement",
  },
  {
    icon: Users,
    label: "Notre Équipe",
    href: "/a-propos#equipe",
    description: "Enseignants et administration",
  },
  {
    icon: Star,
    label: "Nos Atouts",
    href: "/pourquoi-fopase",
    description: "Ce qui nous différencie",
  },
  {
    icon: Handshake,
    label: "Nos Partenaires",
    href: "/pourquoi-fopase#partenaires",
    description: "Entreprises et institutions",
  },
  {
    icon: ImageIcon,
    label: "Le Bénin en Images",
    href: "/galerie",
    description: "Galerie photos & vidéos",
  },
  {
    icon: Megaphone,
    label: "Communiqué – Évènements",
    href: "/actualites",
    description: "Actualités et agenda FOPASE",
  },
  {
    icon: BookOpen,
    label: "La Chronique du Manager",
    href: "/actualites#revue",
    description: "Notre revue trimestrielle",
  },
  {
    icon: Mail,
    label: "Nous Contacter",
    href: "/contact",
    description: "Formulaire & coordonnées",
    cta: true,
  },
] as const;

export function HomeSidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("flex flex-col gap-1", className)}>
      <p className="mb-3 border-b border-border pb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        Rubriques
      </p>

      {SIDEBAR_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            to={item.href as "/contact"}
            className={cn(
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
              item.cta
                ? "bg-ember text-ember-foreground hover:bg-ember/90"
                : "hover:bg-navy/5 hover:text-navy",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                item.cta ? "bg-white/20" : "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white",
              )}
            >
              <Icon className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold leading-tight">
                {item.label}
              </span>
              <span
                className={cn(
                  "block truncate text-[0.72rem]",
                  item.cta ? "text-ember-foreground/80" : "text-muted-foreground",
                )}
              >
                {item.description}
              </span>
            </span>
            <ChevronRight
              className={cn(
                "ml-auto size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100",
                item.cta && "opacity-60",
              )}
            />
          </Link>
        );
      })}
    </aside>
  );
}
