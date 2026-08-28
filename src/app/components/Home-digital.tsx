"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Unlimited Revisions",
    description:
      "We keep striving unless you are 100 percent sure and satisfied with the product that you receive. You don't love what you see? Let's give it a redo.",
  },
  {
    title: "Creativity",
    description:
      "Creativity is the key in the industry and we have established this fact loud and clear since the very first day amongst our teams of designers and developers. We work with no limitations on creativity and innovation.",
  },
  {
    title: "Multiple Designers Assigned",
    description:
      "We have skilled designers who are experts in creating work that surpasses our customer's expectations. We ensure that our designers deliver high quality work without any limitations on innovation and creativity.",
  },
  {
    title: "Industry Specific Designers",
    description:
      "The management team has built up experience over years of services with the most creative designers with high quality services.",
  },
  {
    title: "Logo Delivery within 50 Minutes",
    description:
      "When it comes to designing skills supremacy, our team's expertise knows no bounds. Each aspect of designing is kept intact as well as making sure that none of the quality aspects are affected.",
  },
  {
    title: "Free Logo Multiple File Formats",
    description:
      "When you get a logo design it's not just an image that you need, you might need different formats if you intend to use the logo for different purposes.",
  },
];

// pixels moved per animation frame — tweak for faster/slower auto-scroll
const SCROLL_SPEED = 2;

type Direction = "left" | "right" | null;

export default function DigitalAgencySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [activeDirection, setActiveDirection] = useState<Direction>(null);

  // continuous auto-scroll loop, runs while activeDirection is set
  useEffect(() => {
    if (!activeDirection) return;

    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;

      if (activeDirection === "right") {
        if (el.scrollLeft >= maxScroll - 1) {
          // reached the end — loop back to the start
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += SCROLL_SPEED;
        }
      } else {
        if (el.scrollLeft <= 0) {
          // reached the start — loop to the end
          el.scrollLeft = maxScroll;
        } else {
          el.scrollLeft -= SCROLL_SPEED;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeDirection]);

  const handleArrowClick = (direction: Direction) => {
    // clicking the active arrow again stops the auto-scroll
    setActiveDirection((current) => (current === direction ? null : direction));
  };

  return (
    <section className="w-full border-y border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Left heading block */}
        <div className="w-full md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-gray-200 px-6 py-10 md:py-16 flex items-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-medium leading-tight text-gray-900">
            A <span className="text-cyan-400 font-bold">DIGITAL AGENCY</span>{" "}
            <span className="font-bold">SPECIALIZED</span> IN <br className="hidden md:block" />
            DIGITAL CREATION &amp;
            <br className="hidden md:block" /> BRAND STRATEGY
          </h2>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex flex-1 overflow-x-auto"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`w-[85%] xs:w-[70%] sm:w-1/2 md:w-1/3 shrink-0 px-4 sm:px-6 py-10 md:py-16 ${
                index !== 0 ? "border-l" : ""
              } border-gray-200`}
            >
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {index === 0 && (
                <div className="flex items-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => handleArrowClick("left")}
                    aria-label="Auto-scroll left"
                    aria-pressed={activeDirection === "left"}
                    className={`rounded-full p-1 transition-colors ${
                      activeDirection === "left"
                        ? "text-white bg-cyan-400"
                        : "text-cyan-400 hover:text-cyan-500"
                    }`}
                  >
                    <ArrowLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleArrowClick("right")}
                    aria-label="Auto-scroll right"
                    aria-pressed={activeDirection === "right"}
                    className={`rounded-full p-1 transition-colors ${
                      activeDirection === "right"
                        ? "text-white bg-cyan-400"
                        : "text-cyan-400 hover:text-cyan-500"
                    }`}
                  >
                    <ArrowRight size={22} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scoped scrollbar-hiding styles — no external CSS file needed */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Opera */
        }
      `}</style>
    </section>
  );
}