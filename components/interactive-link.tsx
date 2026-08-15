"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function InteractiveLink({
  href,
  children,
  accent,
}: {
  href: string;
  children: ReactNode;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="block border p-4 text-center transition-all duration-200"
      style={{
        borderColor: `${accent}30`,
        color: accent,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${accent}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </Link>
  );
}
