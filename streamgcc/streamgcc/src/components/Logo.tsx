"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Renders the official logo from public/logo.png, unchanged.
 * If the file is not there yet, a plain text wordmark is shown instead so the
 * page never has a broken image.
 */
export function Logo({
  className = "h-9",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="font-display text-2xl font-semibold tracking-tight"
        aria-label={site.name}
      >
        STREAM<span className="text-gold-400">GCC</span>
      </span>
    );
  }

  return (
    <Image
      src={site.logo.src}
      alt={site.name}
      width={site.logo.width}
      height={site.logo.height}
      priority={priority}
      onError={() => setFailed(true)}
      className={`${className} w-auto`}
    />
  );
}
