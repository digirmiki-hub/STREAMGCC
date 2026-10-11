import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-12 items-center justify-center px-7 text-base font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-gold-500 text-black hover:bg-gold-300",
  secondary: "border border-gold-500/60 text-white hover:border-gold-300 hover:text-gold-300",
};

type LinkProps = { href: string; variant?: Variant; className?: string; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "href" | "className" | "children"
>;

export function ButtonLink({ href, variant = "primary", className = "", children, ...rest }: LinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = { variant?: Variant } & ComponentProps<"button">;

export function Button({ variant = "primary", className = "", ...rest }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...rest} />;
}
