/**
 * Plan, devices and content data.
 *
 * Everything the public sees about what is included lives here so it can be
 * reviewed in one place. Review this file against your real operations and
 * licences before launch: the site must only describe what you can deliver.
 */

export const PLAN = {
  name: "Annual plan",
  priceUsd: 40,
  term: "12 months",
} as const;

export const INCLUDES = [
  {
    title: "12 months of access",
    body: "Your subscription runs for 12 months from the day it is activated.",
  },
  {
    title: "Activation instructions by email",
    body: "After your order is confirmed, you receive the steps to activate your subscription.",
  },
  {
    title: "Setup guidance",
    body: "Follow the setup guide on this page, or contact support if you get stuck.",
  },
  {
    title: "Customer support",
    body: "Reach support by the channels listed in the support section. Include your order details so we can help faster.",
  },
] as const;

/**
 * Content and channels you are legally authorised to distribute.
 * Leave empty until each item is cleared. Nothing is shown that is not listed.
 */
export const LICENSED_CONTENT: readonly { name: string; note?: string }[] = [];

/**
 * Devices you have personally tested and verified.
 * Leave empty until a device has been verified. Nothing is shown that is not listed.
 */
export const VERIFIED_DEVICES: readonly {
  name: string;
  note?: string;
  verifiedOn?: string;
}[] = [];

export const STEPS = [
  {
    title: "Choose the annual plan",
    body: "Review the plan and conditions, then continue to checkout.",
  },
  {
    title: "Complete your order",
    body: "Enter your name and email and pay. Your order confirmation goes to the email you give.",
  },
  {
    title: "Check your email for activation steps",
    body: "Your instructions name the app or player to use and how to sign in. Check your spam folder if nothing arrives.",
  },
  {
    title: "Set up on a verified device",
    body: "Use a device from the verified list above. Follow your instructions to install and sign in.",
  },
  {
    title: "Contact support if something fails",
    body: "Send us your order details and what you see on screen. We will help you from there.",
  },
] as const;

export const FAQ = [
  {
    q: "What does the $40 annual plan include?",
    a: "Twelve months of access starting from activation, activation instructions by email, setup guidance and customer support. The plan section lists exactly what is covered. Content is shown only where STREAMGCC is authorised to distribute it.",
  },
  {
    q: "Which devices are supported?",
    a: "Only devices we have verified ourselves are listed in the devices section. If your device is not listed, we cannot confirm it will work, so please ask support before you buy.",
  },
  {
    q: "Is streaming quality guaranteed?",
    a: "No. Quality and availability depend on your internet connection, your device and conditions outside our control. We do not guarantee uninterrupted service or a specific picture quality.",
  },
  {
    q: "Does the subscription renew automatically?",
    a: "No. The annual plan covers 12 months and ends on its own. We will not charge you again unless you place a new order.",
  },
  {
    q: "Can I get a refund?",
    a: "Refund eligibility is set out in the refund policy. Read it before you buy, and contact support if you think you qualify.",
  },
  {
    q: "How is my payment handled?",
    a: "Payments will be processed by a third-party payment provider. This website does not store your card details.",
  },
  {
    q: "How do I contact support?",
    a: "Use the contact options in the support section. Include your order email and a short description of the problem.",
  },
] as const;
