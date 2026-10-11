import Link from "next/link";
import type { ReactNode } from "react";
import { LEGAL_LINKS, site } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-20">
        <article>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-white/60">Last updated {site.legal.lastUpdated}</p>

          {!site.legal.reviewed ? (
            <p role="note" className="mt-8 max-w-[68ch] border border-gold-500 bg-gold-500/10 p-5 text-gold-300">
              <strong className="font-semibold">Draft template.</strong> This text has not been
              reviewed by a lawyer. Have it checked for the countries where you sell, then set
              NEXT_PUBLIC_LEGAL_REVIEWED=true to remove this notice.
            </p>
          ) : null}

          <div className="legal mt-10">{children}</div>
        </article>

        <nav aria-label="Legal pages" className="h-fit lg:sticky lg:top-28">
          <h2 className="font-display text-lg font-medium">Legal</h2>
          <ul className="mt-4 space-y-3 border-l border-line pl-5">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/72 transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function ContactLine() {
  const { email } = site.contact;
  return (
    <p>
      Questions about this page? Contact {site.legal.entity}
      {email ? (
        <>
          {" "}at <a href={`mailto:${email}`}>{email}</a>
        </>
      ) : null}
      {site.legal.address ? <>. Address: {site.legal.address}</> : null}.
    </p>
  );
}
