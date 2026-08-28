"use client";

import { Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 py-10 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:items-center md:justify-center md:gap-16">
        {/* Left: heading */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium tracking-wide text-white/90">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold leading-[1.12] text-white">
            Let&apos;s write your
            <br />
            story, together.
          </h2>
        </div>

        {/* Right: text + CTA + phone */}
        <div className="flex flex-col items-center gap-5 text-center  ml-39 md:max-w-sm md:items-start md:text-left">
          <p className="leading-relaxed text-white/95">
            We do not tell you our story. We write it together. Partnering
            with us means a seat at the table where you will be heard.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 md:justify-start">
            <a
              href="/contact-us"
              className="rounded-full bg-white px-8 py-3 font-bold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </a>

            <a
              href="tel:+13135129347"
              className="flex items-center gap-3 text-white"
            >
              <Phone size={22} className="shrink-0" />
              <span>
                <span className="block text-xs font-semibold tracking-wide">
                  CALL US AT
                </span>
                <span className="block text-base font-bold">
                  (313) 512-9347
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}