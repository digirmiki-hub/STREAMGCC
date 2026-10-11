import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const name = site.legal.entity;
  return (
    <LegalPage title="Privacy policy">
      <p>
        This policy explains what personal information {name} collects through the {site.name}{" "}
        website, why, and what choices you have.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Your name and email address when you place an order.</li>
        <li>Order details, such as the plan you bought and the date.</li>
        <li>Messages you send to customer support.</li>
      </ul>
      <p>
        Payment card details are entered with our payment provider and are not stored on this
        website. This site does not currently use analytics or advertising cookies.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To process your order and send your confirmation and activation instructions.</li>
        <li>To provide customer support.</li>
        <li>To meet legal, tax and fraud-prevention obligations.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We share information only with service providers that help us run the service, such as the
        payment provider and email delivery, and only as needed for those purposes. We do not sell
        your personal information.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep order and support records for as long as needed to provide the service and meet our
        legal obligations, then delete or anonymise them.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct or delete your
        personal information, or to object to certain uses. Contact us to make a request.
      </p>

      <h2>Cookies</h2>
      <p>
        This website uses only what is needed to work. If we add analytics or marketing tools in the
        future, we will update this policy and ask for consent where the law requires it.
      </p>

      <h2>Changes</h2>
      <p>We will publish any changes to this policy on this page with a new &ldquo;last updated&rdquo; date.</p>

      <h2>Contact</h2>
      <ContactLine />
    </LegalPage>
  );
}
