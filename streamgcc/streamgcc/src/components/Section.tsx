import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <header className="max-w-2xl">
          <h2
            id={`${id}-title`}
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight"
          >
            {title}
          </h2>
          {intro ? <p className="mt-5 max-w-[60ch] text-lg text-white/70">{intro}</p> : null}
        </header>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
