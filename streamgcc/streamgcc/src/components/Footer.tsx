import Link from "next/link";
import { LEGAL_LINKS, NAV, site } from "@/lib/site";
import { Logo } from "./Logo";

const linkClass = "text-white/72 transition-colors hover:text-gold-300";

export function Footer() {
  const { email, whatsappUrl } = site.contact;

  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-9" />
          <p className="mt-5 max-w-[34ch] text-white/65">
            A streaming subscription with the price and the rules published up front.
          </p>
        </div>

        <nav aria-label="Site">
          <h2 className="font-display text-lg font-medium">Site</h2>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="font-display text-lg font-medium">Legal</h2>
          <ul className="mt-4 space-y-3">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-medium">Contact</h2>
          <ul className="mt-4 space-y-3">
            {email ? (
              <li>
                <a href={`mailto:${email}`} className={`${linkClass} break-all`}>
                  {email}
                </a>
              </li>
            ) : null}
            {whatsappUrl ? (
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/#support" className={linkClass}>
                Support details
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/55 sm:px-8 md:flex-row md:justify-between">
          <p>© {site.legal.entity}. All rights reserved.</p>
          <p>Content is offered only where we are authorised to distribute it.</p>
        </div>
      </div>
    </footer>
  );
}
