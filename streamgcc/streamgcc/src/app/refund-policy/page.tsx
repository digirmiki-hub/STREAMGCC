import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { PLAN } from "@/content/plan";

export const metadata: Metadata = {
  title: "Refund policy",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund policy">
      <p>
        This policy covers the ${PLAN.priceUsd} annual plan. Decide your final refund window with
        your legal adviser before launch; the terms below are a starting draft.
      </p>

      <h2>When you can ask for a refund</h2>
      <ul>
        <li>
          Within 7 days of purchase, if your subscription has not been activated or used.
        </li>
        <li>
          If we are unable to deliver the activation instructions or the service you ordered, and
          cannot fix the problem after you contact support.
        </li>
        <li>If the law where you live gives you a right to a refund, that right is not affected by this policy.</li>
      </ul>

      <h2>When a refund is not available</h2>
      <ul>
        <li>After the subscription has been activated and used, except where required by law.</li>
        <li>For problems caused by an unsupported device or by your internet connection.</li>
        <li>Where the subscription was suspended for breaking the terms of service.</li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Contact support with the email address you used for your order and a short explanation. We
        will reply with the outcome. Approved refunds are returned to the original payment method.
        The time it takes to appear depends on your bank or payment provider.
      </p>

      <h2>Contact</h2>
      <ContactLine />
    </LegalPage>
  );
}
