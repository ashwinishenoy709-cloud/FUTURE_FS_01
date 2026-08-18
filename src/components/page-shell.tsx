import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto max-w-5xl px-5 pt-12 pb-4 sm:pt-16", className)}>
      <header className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-3xl font-semibold text-balance-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </header>
      <div className="mt-12 space-y-14">{children}</div>
    </main>
  );
}

export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
