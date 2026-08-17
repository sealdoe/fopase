import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE, CONTACT } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barre supérieure info */}
      <div
        className={cn(
          "hidden overflow-hidden bg-navy text-navy-foreground transition-all duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-stretch justify-between text-[0.8rem]">
          <div className="flex items-center gap-3 bg-ember px-8 py-3 text-ember-foreground [clip-path:polygon(0_0,100%_0,calc(100%-22px)_100%,0_100%)]">
            <span className="font-bold">Suivez-nous :</span>
            {CONTACT.socials.map((s) => (
              <a key={s.label} href={s.href} className="font-medium underline-offset-4 hover:underline">
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-7 px-8 py-3 text-navy-foreground/85">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-ember" /> {CONTACT.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-ember" /> {CONTACT.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-ember" /> {CONTACT.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Barre logo + CTA */}
      <div className="border-b border-border/50 bg-background shadow-sm">
        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 transition-all duration-300 md:px-10",
            scrolled ? "h-12" : "h-16 md:h-20",
          )}
        >
          <Link to="/" className="flex items-baseline gap-0.5" aria-label={`${SITE.name} — accueil`}>
            <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-navy">FOP</span>
            <span className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ember">ASE</span>
            <span className="ml-2 hidden text-xs font-medium text-foreground/50 sm:inline">
              {SITE.baseline}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button asChild variant="ember" size={scrolled ? "sm" : "default"} className="hidden sm:inline-flex">
              <Link to="/inscription">
                S'inscrire <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size={scrolled ? "sm" : "default"} className="hidden md:inline-flex">
              <Link to="/contact">Contact</Link>
            </Button>
            {/* Burger mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale (desktop) */}
      <nav
        aria-label="Navigation principale"
        className="hidden border-b border-border bg-navy lg:block"
      >
        <div className="mx-auto flex max-w-[1400px] items-stretch overflow-x-auto px-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative whitespace-nowrap px-4 py-3 text-[0.78rem] font-semibold text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-white",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 hover:after:scale-x-100",
              )}
              activeProps={{
                className: "text-white bg-white/10 after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-ember",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden">
          <nav
            className="flex h-[calc(100dvh-7rem)] flex-col gap-1 overflow-y-auto bg-background px-5 pb-10 pt-4"
            aria-label="Navigation mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border py-4 font-display text-xl font-bold tracking-tight text-foreground"
                activeProps={{ className: "text-ember" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="ember" size="lg" className="mt-6 w-full">
              <Link to="/inscription">S'inscrire <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="mt-3 w-full">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
