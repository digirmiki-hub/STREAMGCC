"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, ButtonLink } from "./Button";

const field =
  "mt-2 block min-h-12 w-full border border-line bg-black px-4 text-white placeholder:text-white/40 focus:border-gold-300";

/**
 * DEMO checkout. It collects nothing, sends nothing and charges nothing.
 * Replace the submit handler with a call to your server-side payment
 * route once a provider is connected (see README).
 */
export function DemoCheckout({ priceUsd, term }: { priceUsd: number; term: string }) {
  const [done, setDone] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
      <div>
        <p
          role="note"
          className="border border-gold-500 bg-gold-500/10 p-5 text-gold-300"
        >
          <strong className="font-semibold">Demo checkout.</strong> No payment is taken and nothing
          you type here is stored or sent. A secure payment form will replace this once a payment
          provider is connected.
        </p>

        {done ? (
          <div role="status" className="mt-8 border border-line bg-panel p-7">
            <h2 className="font-display text-2xl font-medium">Demo complete</h2>
            <p className="mt-3 max-w-[56ch] text-white/75">
              In the live version, you would now see your payment confirmation. Because this is a
              demo, no order was created and you were not charged.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={() => setDone(false)}>
                Run the demo again
              </Button>
              <ButtonLink href="/">Back to the homepage</ButtonLink>
            </div>
          </div>
        ) : (
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <div>
              <label htmlFor="name" className="font-medium">
                Full name
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required className={field} />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Email for your order confirmation
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className={field} />
            </div>

            <div className="border border-dashed border-line p-5 text-white/65">
              Secure payment fields will appear here once a payment provider is connected.
            </div>

            <label className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1.5 size-5 accent-[#c9a24b]" />
              <span className="text-white/78">
                I have read the{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-gold-300">
                  terms of service
                </Link>
                ,{" "}
                <Link href="/subscription-conditions" className="underline underline-offset-4 hover:text-gold-300">
                  subscription conditions
                </Link>{" "}
                and{" "}
                <Link href="/refund-policy" className="underline underline-offset-4 hover:text-gold-300">
                  refund policy
                </Link>
                .
              </span>
            </label>

            <Button type="submit" className="w-full sm:w-auto">
              Complete demo checkout
            </Button>
          </form>
        )}
      </div>

      <aside aria-label="Order summary" className="h-fit border border-gold-500/70 bg-panel p-7">
        <h2 className="font-display text-xl font-medium">Order summary</h2>
        <dl className="mt-5 space-y-3 text-white/78">
          <div className="flex justify-between gap-4">
            <dt>Annual plan</dt>
            <dd>${priceUsd.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Term</dt>
            <dd>{term}</dd>
          </div>
        </dl>
        <div className="mt-5 flex justify-between border-t border-line pt-5 text-lg font-semibold">
          <span>Total (USD)</span>
          <span className="text-gold-300">${priceUsd.toFixed(2)}</span>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Any applicable taxes will be shown before payment once checkout is live.
        </p>
      </aside>
    </div>
  );
}
