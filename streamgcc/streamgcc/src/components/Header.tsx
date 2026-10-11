import Link from "next/link";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-black/90 backdrop-blur">
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="STREAMGCC home" className="flex items-center">
          <Logo priority className="h-9" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-white/75 transition-colors hover:text-gold-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/checkout"
            className="inline-flex min-h-11 items-center bg-gold-500 px-5 text-[0.95rem] font-semibold text-black transition-colors hover:bg-gold-300"
          >
            Get the plan
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
