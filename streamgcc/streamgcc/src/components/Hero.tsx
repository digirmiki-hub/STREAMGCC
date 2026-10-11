import { PLAN } from "@/content/plan";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

const FACTS = [
  `$${PLAN.priceUsd} per year`,
  `${PLAN.term} from activation`,
  "No automatic renewal",
] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12 lg:py-32">
        <div>
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.1rem,9.5vw,3.75rem)] font-medium leading-[1.04] tracking-tight whitespace-nowrap lg:text-[clamp(3rem,5.3vw,4.75rem)]"
          >
            <span className="line-mask">
              <span className="line-rise" style={{ "--i": 0 } as React.CSSProperties}>
                One annual plan.
              </span>
            </span>
            <span className="line-mask">
              <span className="line-rise" style={{ "--i": 1 } as React.CSSProperties}>
                Clear terms.
              </span>
            </span>
            <span className="line-mask">
              <span className="line-rise" style={{ "--i": 2 } as React.CSSProperties}>
                Real support.
              </span>
            </span>
          </h1>

          <div className="gold-draw mt-8 h-px w-40 bg-gold-500 sm:w-56" aria-hidden="true" />

          <p
            className="settle mt-8 max-w-[54ch] text-lg text-white/75 sm:text-xl"
            style={{ "--d": "0.9s" } as React.CSSProperties}
          >
            STREAMGCC is a streaming subscription for ${PLAN.priceUsd} a year. The price, the
            conditions and the refund policy are all published here before you pay.
          </p>

          <div
            className="settle mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--d": "1s" } as React.CSSProperties}
          >
            <ButtonLink href="/#plans">See what the plan includes</ButtonLink>
            <ButtonLink href="/#setup" variant="secondary">
              How setup works
            </ButtonLink>
          </div>

          <ul
            className="settle mt-12 flex flex-col gap-3 text-[0.95rem] text-white/70 sm:flex-row sm:gap-0"
            style={{ "--d": "1.1s" } as React.CSSProperties}
          >
            {FACTS.map((fact, i) => (
              <li
                key={fact}
                className={`sm:px-5 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-line"}`}
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <PassCard />
      </div>
    </section>
  );
}

/** The one memorable element: the plan as a gold-edged pass with a punched perforation. */
function PassCard() {
  return (
    <div className="settle mx-auto w-full max-w-md lg:max-w-none" style={{ "--d": "1.2s" } as React.CSSProperties}>
      <div className="relative border border-gold-500/70 bg-panel">
        <div className="px-8 pb-9 pt-8">
          <Logo className="h-8" />
          <p className="mt-10 text-white/70">{PLAN.name}</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-[5rem] font-medium leading-none tracking-tight text-gold-300">
              ${PLAN.priceUsd}
            </span>
            <span className="text-white/70">per year, USD</span>
          </p>
        </div>

        <div className="relative">
          <div className="border-t border-dashed border-gold-500/50" aria-hidden="true" />
          {/* Half-circle punches: each wrapper clips its circle to the inner half
              and sits over the card border, so the edge looks cut out. */}
          <span
            className="absolute -left-px top-0 h-6 w-3 -translate-y-1/2 overflow-hidden"
            aria-hidden="true"
          >
            <span className="block size-6 -translate-x-1/2 rounded-full border border-gold-500/70 bg-black" />
          </span>
          <span
            className="absolute -right-px top-0 h-6 w-3 -translate-y-1/2 overflow-hidden"
            aria-hidden="true"
          >
            <span className="block size-6 rounded-full border border-gold-500/70 bg-black" />
          </span>
        </div>

        <div className="px-8 pb-8 pt-7">
          <p className="text-white/70">
            Valid for {PLAN.term}, starting the day your subscription is activated.
          </p>
          <ButtonLink href="/checkout" className="mt-6 w-full">
            Get the annual plan
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
