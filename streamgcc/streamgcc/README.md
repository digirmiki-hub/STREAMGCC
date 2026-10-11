# STREAMGCC website

Next.js 16 (App Router), TypeScript and Tailwind CSS 4. Every page is statically prerendered. There is no database, no customer accounts and no payment processing yet.

## Run it locally

```bash
npm install
cp .env.example .env.local     # then fill in your values
npm run dev                    # http://localhost:3000
```

Production check:

```bash
npm run lint && npx tsc --noEmit
npm run build && npm run start
```

Requires Node 20.9 or newer.

## Add your logo

Save your official logo as **`public/logo.png`**. It is shown unchanged in the header, footer and plan card, scaled by height only.

- A transparent PNG (or a PNG with a pure black background) looks best.
- For a different file name or format, edit `site.logo` in `src/lib/site.ts`.
- If the file is missing, a plain text wordmark is shown instead.

## What to edit

| What | Where |
| --- | --- |
| Price, plan name, what is included, FAQ, setup steps | `src/content/plan.ts` |
| **Channels and content you are authorised to distribute** | `LICENSED_CONTENT` in `src/content/plan.ts` (empty by default) |
| **Devices you have verified** | `VERIFIED_DEVICES` in `src/content/plan.ts` (empty by default) |
| Support email, WhatsApp, legal entity, site URL | environment variables (see `.env.example`) |
| Legal pages | `src/app/terms`, `privacy`, `refund-policy`, `subscription-conditions` |
| Colours and fonts | `src/app/globals.css` (`@theme`) |

The device list and content list render only what you put in them. Empty lists show an honest "nothing listed yet" message, so the site never claims compatibility or content you have not confirmed.

## Environment variables

Variables starting with `NEXT_PUBLIC_` are built into the browser code. Use them only for public values (support email, site URL). Anything secret (payment keys, supplier credentials, subscription codes) must **not** start with `NEXT_PUBLIC_` and must only be read in server code such as `src/app/api/**` route handlers. `.env.local` is git-ignored; `.env.example` is committed and holds no secrets.

## Deploy

**Vercel (simplest)**

1. Push the project to a GitHub repository.
2. In Vercel, choose *Add New, Project* and import the repository. Defaults work.
3. Under *Settings, Environment Variables*, add the values from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to your real domain (it drives the canonical URL, sitemap and social tags).
4. Deploy, then add your domain under *Settings, Domains*.

**Any Node host or VPS**: run `npm run build` then `npm run start` (port 3000, set `PORT` to change), behind HTTPS (for example Caddy or nginx). A container works the same way.

Environment variables are read at build time for `NEXT_PUBLIC_*`, so rebuild after changing them.

## Checks run on this build

- `tsc --noEmit`, `eslint` and `next build`: clean.
- All routes return the expected status; unknown paths show the custom 404.
- All internal links and in-page anchors resolve; one `h1` per page.
- axe-core (WCAG 2.0/2.1 A and AA plus best practices): zero violations on every page at mobile, tablet and desktop widths.
- No horizontal scrolling from 320px to 1920px.
- Keyboard: skip link, mobile menu (Escape closes it), FAQ toggles, form validation.
- `prefers-reduced-motion` disables the hero animation.
- No console errors or failed requests with a logo file present.

## Before the site can accept real payments

**Business and legal**

1. Confirm in writing that you hold the rights to distribute every channel, title and feature you will sell, in every country you sell to. Then fill in `LICENSED_CONTENT`.
2. Have a lawyer review the four legal pages. The text is a starting draft. Decide and confirm: the refund window (drafted as 7 days if not activated), no automatic renewal (drafted), the age limit (drafted as 18), and the governing law and jurisdiction. Then set `NEXT_PUBLIC_LEGAL_REVIEWED=true` to remove the draft notice.
3. Set `NEXT_PUBLIC_LEGAL_ENTITY` and `NEXT_PUBLIC_LEGAL_ADDRESS` to your registered business details.
4. Check whether you must collect VAT or sales tax and how it appears at checkout.
5. Make sure the site copy matches how you really operate: that activation instructions are emailed after purchase, which channels support can be reached on, and what your support hours are.
6. Test and list each device in `VERIFIED_DEVICES` only after you have confirmed it works.

**Payments (engineering)**

1. Choose a payment provider that accepts your business type and the countries you sell to, and open and verify that account. Ask the provider whether your product category is allowed.
2. Create the checkout session in `src/app/api/checkout/route.ts` (currently returns 501). Keep the price on the server so it cannot be changed from the browser.
3. Replace the demo handler in `src/components/DemoCheckout.tsx` with a redirect to the provider's hosted checkout, or their embedded payment element. Never put card fields of your own on the page.
4. Add a webhook route that verifies the provider's signature, then marks the order as paid. Fulfil the order only from the webhook, not from the browser redirect.
5. Add order storage and fulfilment: record each order, send the confirmation and activation email, handle duplicates and failed payments. This needs a small, properly secured database and a transactional email service. Supplier credentials and subscription codes must live only on the server.
6. Handle refunds and chargebacks, and add rate limiting and bot protection on the checkout and any contact form.
7. Test the whole flow in the provider's test mode, then with one real low-value payment, before launch.
8. Set `NEXT_PUBLIC_PAYMENTS_LIVE=true` to remove the "demo" notices once all of the above works.

**Launch polish**

- Add your logo, support email and (optionally) WhatsApp number.
- Add a social share image (`src/app/opengraph-image.tsx` or a static `opengraph-image.png`).
- Add privacy-respecting analytics only if you need them, and update the privacy policy and cookie consent if you do.
- Re-run the checks above against the deployed URL.
