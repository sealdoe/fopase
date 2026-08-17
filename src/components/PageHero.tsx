import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <section className="bg-navy px-5 pb-16 pt-10 text-navy-foreground md:px-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="label-eyebrow text-ember">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            {subtitle}
          </p>
        )}
        {action && <div className="mt-9 flex flex-wrap gap-3">{action}</div>}
      </div>
    </section>
  );
}
