"use client";

import Image from "next/image";
import React from "react";

/**
 * AboutHero
 * -------------------------------------------------------------
 * Top hero of the About page: "WE ARE MORE THAN JUST AN AVERAGE
 * BRAND AGENCY" — matches bloopsdesign.com/about.php
 */
export const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      {/* decorative asterisk elements, like the live site */}
      <Image
        src="https://bloopsdesign.com/images/webp/element-22.webp"
        alt=""
        width={60}
        height={60}
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-16 opacity-70"
      />
      <Image
        src="https://bloopsdesign.com/images/webp/element-14.webp"
        alt=""
        width={40}
        height={40}
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-32 opacity-70"
      />
      <Image
        src="https://bloopsdesign.com/images/webp/element-11.webp"
        alt=""
        width={50}
        height={50}
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[30%] opacity-60"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            We are more than just{" "}
            <span className="block">an average brand agency</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-500">
            We develop a strong brand identity that connects with your
            audience!
          </p>

          <a
            href="/index.php"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-900 underline decoration-teal-400 decoration-2 underline-offset-4 transition-colors hover:text-teal-500"
          >
            Read more
          </a>
        </div>

        {/* "Design Creative." rotated side label, like the live site */}
        <div
          className="hidden select-none text-right text-3xl font-light italic leading-none text-neutral-300 lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Design
          <span className="ml-2 font-serif not-italic text-neutral-400">
            Creative.
          </span>
        </div>
      </div>
    </section>
  );
};

/**
 * AboutExperienceSection
 * -------------------------------------------------------------
 * "Experienced Award-Winning Certified Company" / "Where We Are
 * Today" section directly below the hero — matches
 * bloopsdesign.com/about.php
 */
export const AboutExperienceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1.3fr_1fr]">
          {/* left: collage graphic (single composed image, as on the live site) */}
          <div className="relative mx-auto w-full max-w-sm">
            <Image
              src="https://bloopsdesign.com/images/webp/exper-img-1.webp"
              alt="Bloops Design portfolio collage"
              width={560}
              height={480}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* middle: copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl">
              Experienced Award-Winning Certified Company
            </h2>

            <p className="mt-6 text-lg font-semibold text-teal-500">
              Where We Are Today
            </p>

            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-500">
              <p>
                Bloops Design is a huge team of artists, designers,
                developers and managers providing all design services and
                solutions to both large and small scale businesses around
                the globe. We are now leading Design and Marketing company
                in the Canada, with an aim to establish itself as Full
                Stack Design Company in Canada.
              </p>
              <p>
                Bloops Design was founded in 2010, it then started
                searching for people who had dedicated their lives for
                design industry. There is no doubt that Bloops Design has
                the cream of logo and web design and development talent.
                We also have a huge portfolio of logo, website and
                branding.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-teal-400 px-8 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-teal-400 hover:text-white"
            >
              Lets Get Started
            </a>
          </div>

          {/* right: duotone team photo */}
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-md">
            <Image
              src="/iamge/image (1).png"
              alt="Bloops Design team collaborating"
              width={480}
              height={560}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Combined default export — drop straight into about/page.tsx
 */
const AboutPageTop: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutExperienceSection />
    </>
  );
};

export default AboutPageTop;