"use client";

import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link
      href="/contact"
      className="
        fixed
        left-[-98px]
        top-1/3
        -translate-y-1/2
        -rotate-90
        z-[99999]
        bg-[#4a4a4a]
        text-white
        px-5
        py-3
        rounded-l-2xl
        text-2xl
        font-bold
        shadow-1xl
        whitespace-nowrap
      "
    >
      Let's Get Started
    </Link>
  );
}