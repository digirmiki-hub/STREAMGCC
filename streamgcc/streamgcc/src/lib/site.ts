/**
 * Central site configuration.
 *
 * Only NEXT_PUBLIC_* values are read here. Those are safe to expose in the
 * browser (a support email, a site URL). Secrets such as payment keys or
 * supplier credentials must only be read in server code (route handlers,
 * server actions) and never imported from this file.
 */

const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

export const site = {
  name: "STREAMGCC",
  description:
    "STREAMGCC is a streaming subscription priced at $40 per year, with the price, conditions and refund policy published before you pay.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /** Drop your official logo at public/logo.png (see README). */
  logo: { src: "/logo.png", width: 640, height: 200 },

  contact: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || null,
    whatsappUrl: whatsappDigits ? `https://wa.me/${whatsappDigits}` : null,
  },

  legal: {
    entity: process.env.NEXT_PUBLIC_LEGAL_ENTITY || "STREAMGCC",
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || null,
    /** Set to "true" once a lawyer has reviewed the legal pages. */
    reviewed: process.env.NEXT_PUBLIC_LEGAL_REVIEWED === "true",
    lastUpdated: "11 October 2026",
  },

  payments: {
    /** Set to "true" only after a real payment provider is connected. */
    live: process.env.NEXT_PUBLIC_PAYMENTS_LIVE === "true",
  },
} as const;

export const NAV = [
  { label: "Plan", href: "/#plans" },
  { label: "Devices", href: "/#devices" },
  { label: "Setup", href: "/#setup" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/#support" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Refund policy", href: "/refund-policy" },
  { label: "Subscription conditions", href: "/subscription-conditions" },
] as const;
