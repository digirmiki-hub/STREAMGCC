/**
 * Placeholder for the future server-side checkout endpoint.
 *
 * When you connect a payment provider (Stripe, Paddle, Lemon Squeezy, etc.),
 * create the checkout session HERE, on the server, using secrets from
 * process.env (for example PAYMENT_SECRET_KEY). Never use a NEXT_PUBLIC_
 * variable for a secret, and never return secrets to the browser.
 *
 * Until then this endpoint refuses every request so nothing can be
 * mistaken for a working payment flow.
 */
export function POST() {
  return Response.json(
    { error: "Payments are not enabled on this site yet." },
    { status: 501 },
  );
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}
