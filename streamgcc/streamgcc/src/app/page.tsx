import { Devices } from "@/components/Devices";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Setup } from "@/components/Setup";
import { Support } from "@/components/Support";
import { PLAN } from "@/content/plan";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: site.name, url: site.url },
    {
      "@type": "Product",
      name: `${site.name} ${PLAN.name}`,
      description: `${PLAN.term} streaming subscription.`,
      brand: { "@type": "Brand", name: site.name },
      offers: {
        "@type": "Offer",
        price: PLAN.priceUsd.toFixed(2),
        priceCurrency: "USD",
        url: `${site.url}/#plans`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Plans />
      <Devices />
      <Setup />
      <Faq />
      <Support />
    </>
  );
}
