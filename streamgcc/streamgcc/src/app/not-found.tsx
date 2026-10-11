import { ButtonLink } from "@/components/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <h1 className="font-display text-5xl font-medium tracking-tight">This page doesn&apos;t exist</h1>
      <p className="mt-5 max-w-[50ch] text-lg text-white/72">
        The link may be old or mistyped. Go back to the homepage to find the plan, setup guide or support.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to the homepage
      </ButtonLink>
    </div>
  );
}
