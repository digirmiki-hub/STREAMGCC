import { site } from "@/lib/site";
import { Section } from "./Section";

export function Support() {
  const { email, whatsappUrl } = site.contact;
  const hasChannel = Boolean(email || whatsappUrl);

  return (
    <Section
      id="support"
      title="Customer support"
      intro="Write to us before or after you buy. We answer questions about plans, setup and orders."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          {hasChannel ? (
            <ul className="space-y-4">
              {email ? (
                <li className="border border-line bg-panel p-6">
                  <p className="text-white/70">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block break-all font-display text-2xl font-medium text-gold-300 underline-offset-4 hover:underline"
                  >
                    {email}
                  </a>
                </li>
              ) : null}
              {whatsappUrl ? (
                <li className="border border-line bg-panel p-6">
                  <p className="text-white/70">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-1 block font-display text-2xl font-medium text-gold-300 underline-offset-4 hover:underline"
                  >
                    Message us on WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          ) : (
            <p className="border border-dashed border-gold-500/50 p-6 text-white/75">
              {process.env.NODE_ENV === "development"
                ? "Developer note: set NEXT_PUBLIC_SUPPORT_EMAIL in .env.local to show a support email here."
                : "Support contact details will be published here before the plan goes on sale."}
            </p>
          )}
        </div>

        <div>
          <h3 className="font-display text-xl font-medium">Help us help you faster</h3>
          <p className="mt-3 text-white/72">Include these details in your first message:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/78">
            <li>The email address you used for your order</li>
            <li>The device and app you are using</li>
            <li>What you expected, and what happened instead</li>
          </ul>
          <p className="mt-6 max-w-[56ch] text-white/72">
            Never send your card number or password. We will never ask for them.
          </p>
        </div>
      </div>
    </Section>
  );
}
