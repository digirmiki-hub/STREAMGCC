"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-12 items-center justify-center border border-line text-white"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" />
          )}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-black px-5 pb-6 pt-2"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line/60">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="mt-6 flex min-h-12 items-center justify-center bg-gold-500 px-7 font-semibold text-black"
          >
            Get the annual plan
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
