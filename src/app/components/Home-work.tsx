"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * RecentWork.tsx
 * "A Glimpse Of Our Recent Work" section — category tabs + animated project cards.
 * Reference style: bloopsdesign.com portfolio section
 *
 * Requirements:
 *   npm install framer-motion
 *
 * Usage:
 *   import RecentWork from "@/components/RecentWork";
 *   <RecentWork />
 */

type Category =
  | "Logo Design"
  | "Website Design"
  | "Branding"
  | "E-Commerce"
  | "Video Animation"
  | "NFT Design"
  | "Social Media Marketing";

interface Work {
  img: string;
  alt: string;
  category: Category;
  subCategory?: string;
}

const CATEGORIES: Category[] = [
  "Logo Design",
  "Website Design",
  "Branding",
  "E-Commerce",
  "Video Animation",
  "NFT Design",
  "Social Media Marketing",
];

const VIDEO_SUBCATEGORIES = [
  "2D Animation",
  "3D Animation",
  "Whiteboard",
  "Motion Graphics",
  "Typography",
  "Screen Cast",
  "Logo Animations",
  "Product Animations",
  "Illustration",
  "Animated Music Videos",
];

const works: Work[] = [
  // ---- Logo Design ----
  { img: "/image/port-1.jpg", alt: "", category: "" },
  { img: "/image/port-2.jpg", alt: "", category: "Logo Design" },
  { img: "/image/port-3.jpg", alt: "", category: "Logo Design" },
  { img: "/image/logo-img-6.webp", alt: "", category: "Logo Design" },
  { img: "/image/logo-img-3.webp", alt: "", category: "Logo Design" },
  { img: "/image/logo-img-1.webp", alt: "", category: "Logo Design" },
  { img: "/image/logo-img-5.webp", alt: "", category: "Logo Design" },
  { img: "/image/3.webp", alt: "", category: "Logo Design" },
  { img: "/image/17.webp", alt: "", category: "Logo Design" },

  // ---- Website Design ----
  { img: "/image/1.webp", alt: "Website Work 1", category: "Website Design" },
  { img: "/image/000000.webp", alt: "Website Work 2", category: "Website Design" },
  { img: "/image/2.webp", alt: "Website Work 3", category: "Website Design" },
  { img: "/image/4.webp", alt: "Website Work 4", category: "Website Design" },
  { img: "/image/5.webp", alt: "Website Work 5", category: "Website Design" },
  { img: "/image/6.webp", alt: "Website Work 6", category: "Website Design" },
  { img: "/image/7.webp", alt: "Website Work 7", category: "Website Design" },
  { img: "/image/11.webp", alt: "Website Work 8", category: "Website Design" },
  { img: "/image/8.webp", alt: "Website Work 9", category: "Website Design" },
  { img: "/image/9 (2).webp", alt: "Website Work 10", category: "Website Design" },
  { img: "/image/9.webp", alt: "Website Work 11", category: "Website Design" },
  { img: "/image/10.webp", alt: "Website Work 12", category: "Website Design" },

  // ---- Branding ----
  { img: "/image/1 (1).webp", alt: "Branding Work 1", category: "Branding" },
  { img: "/image/2 (1).webp", alt: "Branding Work 2", category: "Branding" },
  { img: "/image/3 (1).webp", alt: "Branding Work 3", category: "Branding" },
  { img: "/image/4 (1).webp", alt: "Branding Work 4", category: "Branding" },
  { img: "/image/5 (1).webp", alt: "Branding Work 5", category: "Branding" },
  { img: "/image/6 (1).webp", alt: "Branding Work 6", category: "Branding" },
  { img: "/image/7 (1).webp", alt: "Branding Work 7", category: "Branding" },
  { img: "/image/8 (1).webp", alt: "Branding Work 8", category: "Branding" },
  { img: "/image/9 (1).webp", alt: "Branding Work 9", category: "Branding" },
  { img: "/image/10 (1).webp", alt: "Branding Work 10", category: "Branding" },
  { img: "/image/11 (1).webp", alt: "Branding Work 11", category: "Branding" },
  { img: "/image/12.webp", alt: "Branding Work 12", category: "Branding" },

  // ---- E-Commerce ----
  { img: "/image/11 (2).webp", alt: "E-Commerce Work 1", category: "E-Commerce" },
  { img: "/image/4 (2).webp", alt: "E-Commerce Work 2", category: "E-Commerce" },
  { img: "/image/3 (2).webp", alt: "E-Commerce Work 3", category: "E-Commerce" },
  { img: "/image/3.webp", alt: "E-Commerce Work 4", category: "E-Commerce" },
  { img: "/image/5 (2).webp", alt: "E-Commerce Work 5", category: "E-Commerce" },
  { img: "/image/6 (2).webp", alt: "E-Commerce Work 6", category: "E-Commerce" },
  { img: "/image/7 (2).webp", alt: "E-Commerce Work 7", category: "E-Commerce" },
  { img: "/image/10 (2).webp", alt: "E-Commerce Work 8", category: "E-Commerce" },
  { img: "/image/11.webp", alt: "E-Commerce Work 9", category: "E-Commerce" },
  { img: "/image/9 (2).webp", alt: "E-Commerce Work 10", category: "E-Commerce" },
  { img: "/image/1 (2).webp", alt: "E-Commerce Work 11", category: "E-Commerce" },
  { img: "/image/2 (2).webp", alt: "E-Commerce Work 12", category: "E-Commerce" },

  // ---- NFT Design ----
  { img: "/image/port-img-1.webp", alt: "NFT Work 1", category: "NFT Design" },
  { img: "/image/port-img-2.webp", alt: "NFT Work 2", category: "NFT Design" },
  { img: "/image/port-img-3.webp", alt: "NFT Work 3", category: "NFT Design" },
  { img: "/image/port-img-4.webp", alt: "NFT Work 4", category: "NFT Design" },
  { img: "/image/port-img-5.webp", alt: "NFT Work 5", category: "NFT Design" },
  { img: "/image/port-img-6.webp", alt: "NFT Work 6", category: "NFT Design" },
  { img: "/image/port-img-7.webp", alt: "NFT Work 7", category: "NFT Design" },
  { img: "/image/port-img-8.webp", alt: "NFT Work 8", category: "NFT Design" },

  // ---- Social Media Marketing ----
  { img: "/image/12 (2).webp", alt: "Social Media Work 1", category: "Social Media Marketing" },
  { img: "/image/12.webp", alt: "Social Media Work 2", category: "Social Media Marketing" },
  { img: "/image/13.webp", alt: "Social Media Work 3", category: "Social Media Marketing" },
  { img: "/image/14.webp", alt: "Social Media Work 4", category: "Social Media Marketing" },
  { img: "/image/15.webp", alt: "Social Media Work 5", category: "Social Media Marketing" },
  { img: "/image/16.webp", alt: "Social Media Work 6", category: "Social Media Marketing" },
  { img: "/image/7 (9).webp", alt: "Social Media Work 7", category: "Social Media Marketing" },
  { img: "/image/8 (9).webp", alt: "Social Media Work 8", category: "Social Media Marketing" },
  { img: "/image/10 (3).webp", alt: "Social Media Work 9", category: "Social Media Marketing" },
  { img: "/image/6 (11).webp", alt: "Social Media Work 10", category: "Social Media Marketing" },
  { img: "/image/11 (3).webp", alt: "Social Media Work 11", category: "Social Media Marketing" },
  { img: "/image/9 (3).webp", alt: "Social Media Work 12", category: "Social Media Marketing" },

  // ---- Video Animation ----
  ...VIDEO_SUBCATEGORIES.flatMap((sub) =>
    Array.from({ length: 9 }, (_, i) => ({
      img: `/image/${sub.toLowerCase().replace(/ /g, "-")}-${i + 1}.jpg`,
      alt: `${sub} ${i + 1}`,
      category: "Video Animation" as Category,
      subCategory: sub,
    }))
  ),
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.15 } },
};

export default function RecentWork() {
  const [active, setActive] = useState<Category>("Website Design");
  const [activeSub, setActiveSub] = useState<string>(VIDEO_SUBCATEGORIES[0]);

  const isVideo = active === "Video Animation";

  const filtered = useMemo(() => {
    if (isVideo) {
      return works.filter(
        (w) => w.category === "Video Animation" && w.subCategory === activeSub
      );
    }
    return works.filter((w) => w.category === active);
  }, [active, activeSub, isVideo]);

  const handleCategoryClick = (cat: Category) => {
    setActive(cat);
    if (cat === "Video Animation") setActiveSub(VIDEO_SUBCATEGORIES[0]);
  };

  const handleSubClick = (sub: string) => {
    setActiveSub(sub);
  };

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          A Glimpse Of Our Recent Work
        </h2>
        <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We have years of experience in digital marketing and design. We
          have spent years in delivering high quality work for our
          customers. Have a look at our recent work for our customers.
        </p>

        {/* Main category tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`relative text-sm sm:text-base font-semibold transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-sky-500"
                    : "text-gray-900 hover:text-sky-500"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-sky-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sub tabs — only for Video Animation */}
        <AnimatePresence>
          {isVideo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {VIDEO_SUBCATEGORIES.map((sub) => {
                  const isSubActive = sub === activeSub;
                  return (
                    <button
                      key={sub}
                      onClick={() => handleSubClick(sub)}
                      className={`text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                        isSubActive
                          ? "bg-sky-500 text-white border-sky-500"
                          : "bg-transparent text-gray-500 border-gray-300 hover:border-sky-400 hover:text-sky-500"
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cards — flush edge-to-edge grid, full width, no gap, no radius */}
      <div className="w-full mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={isVideo ? `${active}-${activeSub}` : active}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3"
          >
            {filtered.length === 0 ? (
              <p className="col-span-full text-center text-gray-400 py-10">
                No projects added for this category yet.
              </p>
            ) : (
              filtered.map((work, idx) => (
                <motion.div
                  key={`${work.img}-${idx}`}
                  variants={card}
                  className="gallery-img-box group relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={work.img}
                    alt={work.alt}
                    loading="lazy"
                    onError={(e) => {
                      // Falls back to a placeholder photo if the real image
                      // is missing from /public — so nothing ever renders broken.
                      const el = e.currentTarget;
                      el.onerror = null;
                      el.src = `https://picsum.photos/seed/${encodeURIComponent(
                        work.alt
                      )}/600/450`;
                    }}
                    className="absolute inset-0 h-full w-full object-cover scale-100 transition-transform duration-[400ms] ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay — always visible on mobile, hover-reveal on sm+ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent sm:bg-none sm:bg-black/0 sm:group-hover:bg-black/60 transition-colors duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-block text-[11px] font-semibold text-sky-300 uppercase tracking-wide mb-1">
                      {work.subCategory ?? work.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-snug">
                      {work.alt}
                    </h3>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}