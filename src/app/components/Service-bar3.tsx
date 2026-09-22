"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

/**
 * LogoDesign.tsx
 * Standalone "Logo Design" gallery section
 * (extracted from RecentWork.tsx)
 */

interface LogoWork {
  img: string;
  alt: string;
  category: string;
}

const logoWorks: LogoWork[] = [
   {
    img: "/iamge/design066.webp",
    alt: "Website Work 1",
    category: "Website Design",
  },
  {
    img: "/iamge/design067.webp",
    alt: "Website Work 2",
    category: "Website Design",
  },
  {
    img: "/iamge/design068.webp",
    alt: "Website Work 3",
    category: "Website Design",
  },
  {
    img: "/iamge/design069.webp",
    alt: "Website Work 4",
    category: "Website Design",
  },
  {
    img: "/iamge/design070.webp",
    alt: "Website Work 5",
    category: "Website Design",
  },
  {
    img: "/iamge/design071.webp",
    alt: "Website Work 6",
    category: "Website Design",
  },
  {
    img: "/iamge/design072.webp",
    alt: "Website Work 7",
    category: "Website Design",
  },
  {
    img: "/iamge/design073.webp",
    alt: "Website Work 8",
    category: "Website Design",
  },
  {
    img: "/iamge/design074.webp",
    alt: "Website Work 9",
    category: "Website Design",
  },
  {
    img: "/iamge/design075.webp",
    alt: "Website Work 10",
    category: "Website Design",
  },
  {
    img: "/iamge/design076.webp",
    alt: "Website Work 11",
    category: "Website Design",
  },
  {
    img: "/iamge/design077.webp",
    alt: "Website Work 12",
    category: "Website Design",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

export default function LogoDesign() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <>
      <section className="w-full bg-white py-0">
        {/* =================================
            HEADING
        ================================= */}
        <div className="mx-auto max-w-6xl mt-30 text-center">
          <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            A Glimpse of our recent work
          </h2>

          <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We have years of experience in digital marketing and design. We have spent years in
            delivering high quality work for our customers. Have a look at our recent work for our
            customers
          </p>
        </div>

        {/* =================================
            GALLERY
        ================================= */}
        <div className="w-full mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key="logo-design"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3"
            >
              {logoWorks.length === 0 ? (
                <p className="col-span-full text-center text-gray-400 py-10">
                  No projects added for this category yet.
                </p>
              ) : (
                logoWorks.map((work, idx) => (
                  <motion.div
                    key={`${work.img}-${idx}`}
                    variants={card}
                    onClick={() => setPopupImage(work.img)}
                    className="gallery-img-box group relative h-64 sm:h-72 lg:h-[385px] w-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={work.img}
                      alt={work.alt}
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.onerror = null;
                        el.src = `https://picsum.photos/seed/${encodeURIComponent(
                          work.alt
                        )}/600/450`;
                      }}
                      className="absolute inset-0 h-full w-full object-cover scale-100 transition-transform duration-[400ms] ease-in-out group-hover:scale-110"
                    />
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =================================
          FULL IMAGE POPUP
      ================================= */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setPopupImage(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-5 right-5 z-[100000] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-3xl font-bold shadow-lg transition-transform duration-200 hover:scale-110"
              aria-label="Close"
            >
              ×
            </button>

            {/* SELECTED IMAGE */}
            <motion.img
              src={popupImage}
              alt="Full Preview"
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="max-h-[92vh] max-w-[94vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-10 flex justify-center">
  <button
    type="button"
    className="w-full max-w-[340px] h-[52px] rounded-full border-2 border-cyan-400 bg-white text-gray-800 text-lg font-medium shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-cyan-400 hover:text-white"
  >
    LETS GET STARTED
  </button>
</div>
    </>
  );
}