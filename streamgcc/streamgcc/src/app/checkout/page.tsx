import type { Metadata } from "next";
import { DemoCheckout } from "@/components/DemoCheckout";
import { PLAN } from "@/content/plan";

export const metadata: Metadata = {
  title: "Checkout (demo)",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight">
        Checkout
      </h1>
      <p className="mt-4 max-w-[56ch] text-lg text-white/72">
        Review your order, then complete the demo to see how the final step will work.
      </p>
      <div className="mt-12">
        <DemoCheckout priceUsd={PLAN.priceUsd} term={PLAN.term} />
      </div>
    </div>
  );
}
