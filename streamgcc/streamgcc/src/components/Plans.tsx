import Link from "next/link";
import { INCLUDES, LICENSED_CONTENT, PLAN } from "@/content/plan";
import { site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { Section } from "./Section";

export function Plans() {
  return (
    <Section
      id="plans"
      title="Services and the annual plan"
      intro="There is one plan and one price. This is exactly what it covers."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div>
          <ul className="border-t border-line">
            {INCLUDES.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-b border-line py-7 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <h3 className="font-display text-xl font-medium">{item.title}</h3>
                <p className="max-w-[56ch] text-white/72">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="font-display text-xl font-medium">Channels and content</h3>
            {LICENSED_CONTENT.length > 0 ? (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {LICENSED_CONTENT.map((item) => (
                  <li key={item.name} className="border border-line bg-panel p-4">
                    <p className="font-medium">{item.name}</p>
                    {item.note ? <p className="mt-1 text-sm text-white/65">{item.note}</p> : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-[60ch] border border-dashed border-line p-5 text-white/72">
                Channels and content are listed here only once STREAMGCC has confirmed it is
                authorised to distribute them. Nothing is listed until then, so you will never
                see a title here that we cannot provide.
              </p>
            )}
          </div>
        </div>

        <aside
          aria-label="Plan summary"
          className="h-fit border border-gold-500/70 bg-panel p-7 lg:sticky lg:top-28"
        >
          <p className="text-white/70">{PLAN.name}</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-6xl font-medium leading-none text-gold-300">
              ${PLAN.priceUsd}
            </span>
            <span className="text-white/70">per year, USD</span>
          </p>

          <ul className="mt-7 space-y-3 border-t border-line pt-6 text-[0.95rem] text-white/78">
            <li>{PLAN.term} of access from activation</li>
            <li>Does not renew automatically</li>
            <li>Refunds follow the published refund policy</li>
            <li>Streaming quality and uptime are not guaranteed</li>
          </ul>

          <ButtonLink href="/checkout" className="mt-8 w-full">
            Continue to checkout
          </ButtonLink>
          {!site.payments.live ? (
            <p className="mt-4 text-sm text-white/60">
              Checkout is a demo for now. No payment is taken.
            </p>
          ) : null}
          <p className="mt-4 text-sm text-white/60">
            Read the{" "}
            <Link className="underline underline-offset-4 hover:text-gold-300" href="/subscription-conditions">
              subscription conditions
            </Link>{" "}
            and{" "}
            <Link className="underline underline-offset-4 hover:text-gold-300" href="/refund-policy">
              refund policy
            </Link>{" "}
            first.
          </p>
        </aside>
      </div>
    </Section>
  );
}
