import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const name = site.legal.entity;
  return (
    <LegalPage title="Terms of service">
      <p>
        These terms govern your use of the {site.name} website and your purchase of a {site.name}{" "}
        subscription. By placing an order you agree to them.
      </p>

      <h2>The service</h2>
      <p>
        {name} sells a 12-month streaming subscription. What the subscription includes is described
        in the plan section of the website and in your order confirmation. We list content only
        where we are authorised to distribute it.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of majority where you live, to place an order.
      </p>

      <h2>Your account and personal use</h2>
      <ul>
        <li>The subscription is for your personal, non-commercial use.</li>
        <li>You may not resell, share or redistribute your subscription or any content accessed through it.</li>
        <li>Keep your activation details private. You are responsible for activity under your subscription.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>
        You agree not to copy, record for redistribution, circumvent technical protections, or use
        the service in any way that breaks the law or the rights of others. We may suspend a
        subscription that is used in breach of these terms.
      </p>

      <h2>No guarantee of availability or quality</h2>
      <p>
        We work to provide a reliable service, but we do not guarantee uninterrupted access, a
        particular picture quality, or that the service will work on every device or network.
        Performance depends on factors outside our control, including your internet connection and
        your device.
      </p>

      <h2>Prices and payment</h2>
      <p>
        The annual plan is priced in US dollars as shown at checkout. Payments are handled by a
        third-party payment provider. See the subscription conditions and refund policy for renewal
        and refund terms.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, logo and website content belong to {name} or its licensors. Content
        offered through the service remains the property of its respective rights holders.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {name} is not liable for indirect or consequential loss
        arising from the use of, or inability to use, the service. Nothing in these terms limits
        rights you have under consumer protection law that cannot be excluded.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. The version published on this page with its &ldquo;last
        updated&rdquo; date applies to orders placed on or after that date.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which {name} is established.
        This section should be completed once your legal entity and jurisdiction are confirmed.
      </p>

      <h2>Contact</h2>
      <ContactLine />
    </LegalPage>
  );
}
