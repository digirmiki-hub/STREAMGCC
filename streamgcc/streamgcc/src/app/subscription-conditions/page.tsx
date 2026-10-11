import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { PLAN } from "@/content/plan";

export const metadata: Metadata = {
  title: "Subscription conditions",
  alternates: { canonical: "/subscription-conditions" },
};

export default function SubscriptionConditionsPage() {
  return (
    <LegalPage title="Subscription conditions">
      <p>These conditions apply to every {PLAN.name.toLowerCase()} purchase, together with the terms of service.</p>

      <h2>Price and term</h2>
      <ul>
        <li>The annual plan costs ${PLAN.priceUsd} (US dollars) for {PLAN.term}.</li>
        <li>The term starts on the day your subscription is activated, not the day you pay.</li>
        <li>Any applicable taxes are shown before you pay.</li>
      </ul>

      <h2>Renewal</h2>
      <p>
        The subscription does not renew automatically. When your {PLAN.term} end, access ends and
        you are not charged again unless you place a new order.
      </p>

      <h2>What is included</h2>
      <p>
        The plan section of the website describes what the subscription covers. Channels and content
        are listed only where we are authorised to distribute them, and the lineup may change over
        time as licences change.
      </p>

      <h2>Devices</h2>
      <p>
        Only devices listed as verified on the website are confirmed to work. We cannot promise
        that other devices will work.
      </p>

      <h2>Service quality</h2>
      <p>
        We do not guarantee uninterrupted service, a specific streaming quality, or any level of
        uptime. Your experience depends on your connection, your device and conditions outside our
        control.
      </p>

      <h2>Personal use only</h2>
      <p>
        The subscription is for your own use. You may not resell it, share your activation details,
        or use it commercially.
      </p>

      <h2>Suspension and cancellation</h2>
      <p>
        We may suspend or end a subscription that breaks the terms of service. Refunds are handled
        under the refund policy.
      </p>

      <h2>Contact</h2>
      <ContactLine />
    </LegalPage>
  );
}
