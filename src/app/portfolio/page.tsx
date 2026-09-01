"use client";

import React, { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import StatsSection from "../components/Home-2package";
import ContactSection from "../components/Home-form";
import CtaBanner from "../components/Home-contact";


/**
 * Category types & data (RecentWork ka data yahan merge kiya)
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
  { img: "/iamge/design057.webp", alt: "", category: "Logo Design" },
  { img: "/iamge/design058.jpg", alt: "", category: "Logo Design" },
  { img: "/iamge/design059.webp", alt: "", category: "Logo Design" },
  { img: "/iamge/design060.jpg", alt: "", category: "Logo Design" },
  { img: "/iamge/design061.webp", alt: "", category: "Logo Design" },
  { img: "/iamge/design062.jpg", alt: "", category: "Logo Design" },
  { img: "/iamge/design063.webp", alt: "", category: "Logo Design" },
  { img: "/iamge/design064.webp", alt: "", category: "Logo Design" },
  { img: "/iamge/design065.webp", alt: "", category: "Logo Design" },

  // ---- Website Design ----
  { img: "/iamge/design066.webp", alt: "Website Work 1", category: "Website Design" },
  { img: "/iamge/design067.webp", alt: "Website Work 2", category: "Website Design" },
  { img: "/iamge/design068.webp", alt: "Website Work 3", category: "Website Design" },
  { img: "/iamge/design069.webp", alt: "Website Work 4", category: "Website Design" },
  { img: "/iamge/design070.webp", alt: "Website Work 5", category: "Website Design" },
  { img: "/iamge/design071.webp", alt: "Website Work 6", category: "Website Design" },
  { img: "/iamge/design072.webp", alt: "Website Work 7", category: "Website Design" },
  { img: "/iamge/design073.webp", alt: "Website Work 8", category: "Website Design" },
  { img: "/iamge/design074.webp", alt: "Website Work 9", category: "Website Design" },
  { img: "/iamge/design075.webp", alt: "Website Work 10", category: "Website Design" },
  { img: "/iamge/design076.webp", alt: "Website Work 11", category: "Website Design" },
  { img: "/iamge/design077.webp", alt: "Website Work 12", category: "Website Design" },

  // ---- Branding ----
  { img: "/iamge/design078.webp", alt: "Branding Work 1", category: "Branding" },
  { img: "/iamge/design079.webp", alt: "Branding Work 2", category: "Branding" },
  { img: "/iamge/design080.webp", alt: "Branding Work 3", category: "Branding" },
  { img: "/iamge/design081.webp", alt: "Branding Work 4", category: "Branding" },
  { img: "/iamge/design082.webp", alt: "Branding Work 5", category: "Branding" },
  { img: "/iamge/design083.webp", alt: "Branding Work 6", category: "Branding" },
  { img: "/iamge/design084.webp", alt: "Branding Work 7", category: "Branding" },
  { img: "/iamge/design085.webp", alt: "Branding Work 8", category: "Branding" },
  { img: "/iamge/design086.webp", alt: "Branding Work 9", category: "Branding" },
  { img: "/iamge/design087.webp", alt: "Branding Work 10", category: "Branding" },
  { img: "/iamge/design085.webp", alt: "Branding Work 11", category: "Branding" },
  { img: "/iamge/design081.webp", alt: "Branding Work 12", category: "Branding" },

  // ---- E-Commerce ----
  { img: "/iamge/design088.webp", alt: "E-Commerce Work 1", category: "E-Commerce" },
  { img: "/iamge/design089.webp", alt: "E-Commerce Work 2", category: "E-Commerce" },
  { img: "/iamge/design090.webp", alt: "E-Commerce Work 3", category: "E-Commerce" },
  { img: "/iamge/design091.webp", alt: "E-Commerce Work 4", category: "E-Commerce" },
  { img: "/iamge/design092.webp", alt: "E-Commerce Work 5", category: "E-Commerce" },
  { img: "/iamge/design093.webp", alt: "E-Commerce Work 6", category: "E-Commerce" },
  { img: "/iamge/design094.webp", alt: "E-Commerce Work 7", category: "E-Commerce" },
  { img: "/iamge/design095.webp.webp", alt: "E-Commerce Work 8", category: "E-Commerce" },
  { img: "/iamge/design096.webp", alt: "E-Commerce Work 9", category: "E-Commerce" },
  { img: "/iamge/design097.webp", alt: "E-Commerce Work 10", category: "E-Commerce" },
  { img: "/iamge/design098.webp", alt: "E-Commerce Work 11", category: "E-Commerce" },
  { img: "/iamge/design099.webp", alt: "E-Commerce Work 12", category: "E-Commerce" },

  // ---- NFT Design ----
  { img: "/iamge/design182.webp", alt: "NFT Work 1", category: "NFT Design" },
  { img: "/iamge/design183.webp", alt: "NFT Work 2", category: "NFT Design" },
  { img: "/iamge/design184.webp", alt: "NFT Work 3", category: "NFT Design" },
  { img: "/iamge/design185.webp", alt: "NFT Work 4", category: "NFT Design" },
  { img: "/iamge/design186.webp", alt: "NFT Work 5", category: "NFT Design" },
  { img: "/iamge/design187.webp", alt: "NFT Work 6", category: "NFT Design" },
  { img: "/iamge/design188.webp", alt: "NFT Work 7", category: "NFT Design" },
  { img: "/iamge/design189.webp", alt: "NFT Work 8", category: "NFT Design" },
  { img: "/iamge/design002.webp", alt: "NFT Work 8", category: "NFT Design" },

  // ---- Social Media Marketing ----
  { img: "/iamge/design170.webp", alt: "Social Media Work 1", category: "Social Media Marketing" },
  { img: "/iamge/design171.webp", alt: "Social Media Work 2", category: "Social Media Marketing" },
  { img: "/iamge/design172.webp", alt: "Social Media Work 3", category: "Social Media Marketing" },
  { img: "/iamge/design173.webp", alt: "Social Media Work 4", category: "Social Media Marketing" },
  { img: "/iamge/design174.webp", alt: "Social Media Work 5", category: "Social Media Marketing" },
  { img: "/iamge/design175.webp", alt: "Social Media Work 6", category: "Social Media Marketing" },
  { img: "/iamge/design176.webp", alt: "Social Media Work 7", category: "Social Media Marketing" },
  { img: "/iamge/design177.webp", alt: "Social Media Work 8", category: "Social Media Marketing" },
  { img: "/iamge/design178.webp", alt: "Social Media Work 9", category: "Social Media Marketing" },
  { img: "/iamge/design179.webp", alt: "Social Media Work 10", category: "Social Media Marketing" },
  { img: "/iamge/design180.webp", alt: "Social Media Work 11", category: "Social Media Marketing" },
  { img: "/iamge/design181.webp", alt: "Social Media Work 12", category: "Social Media Marketing" },

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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.15 } },
};

const HeroSection: React.FC = () => {
  // ✅ Left Side Animated Text Logic
  const leftText = "Design";
  const leftLetters = leftText.split("");
  const [leftIndex, setLeftIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % (leftLetters.length + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [leftLetters.length]);

  // ✅ Right Side Animated Text Logic
  const rightText = "Creative.";
  const rightLetters = rightText.split("");
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % (rightLetters.length + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [rightLetters.length]);

  // ✅ RecentWork Section Logic (isi file me merge kiya)
  const [active, setActive] = useState<Category>("Website Design");
  const [activeSub, setActiveSub] = useState<string>(VIDEO_SUBCATEGORIES[0]);
  const [popupImage, setPopupImage] = useState<string | null>(null);

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
    if (cat === "Video Animation") {
      setActiveSub(VIDEO_SUBCATEGORIES[0]);
    }
  };

  const handleSubClick = (sub: string) => {
    setActiveSub(sub);
  };

  return (
    <>
      {/* =================================
          HERO SECTION
      ================================= */}
      <section
        className="relative w-full h-[900px] bg-cover bg-center flex justify-center"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')", // ✅ Make sure folder is /image not /iamge
        }}
      >
        {/* ✅ Left Side Animated Text */}
        <div
          className="animated-vertical-text"
          style={{
            position: "absolute",
            left: "0px",
            top: "102%",
            transform: "translateY(-50%) rotate(180deg)",
            writingMode: "vertical-rl",
            fontSize: "7vw",
            fontWeight: "bold",
            color: "#333",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {leftLetters.map((letter, i) => (
            <span
              key={i}
              style={{
                display: "block",
                opacity: i < leftIndex ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* ✅ Right Side Animated Text */}
        <div
          className="animated-vertical-text"
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%) rotate(180deg)",
            writingMode: "vertical-rl",
            fontSize: "7vw",
            fontWeight: "bold",
            color: "#333",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {rightLetters.map((letter, i) => (
            <span
              key={i}
              style={{
                display: "block",
                opacity: i < rightIndex ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* ✅ Centered Image on top of background image */}
        <img
          src="/iamge/design1.webp" // ✅ Replace with your overlay image name
          alt="Center Overlay"
          className="absolute inset-0 m-auto z-10 max-w-[60%] max-h-[80%] w-auto h-auto mb-35 object-contain"
        />

        {/* Content */}
        <div className="relative z-20 text-center backdrop rounded-xl shadow-lg px-2 py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-72 font-semibold text-white">
            <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent tracking-wide leading-[1.2]">
              CREATING BRAND
              <br />
              FOCUSED CREATIVE
              <br />
              SOLUTIONS
            </span>
          </h1>
        </div>
      </section>

      {/* =================================
          RECENT WORK SECTION (Hero ke turant neeche)
      ================================= */}
      <section className="w-full bg-white py-0">
        <div className="mx-auto max-w-6xl  mt-30 text-center">
          <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
           Have a look at our work for our customers
          </h2>

          <p className="mt-5 text-gray-500  md:text-md max-w-2xl mx-auto leading-relaxed">
            We make sure to deliver high quality work for customers that is according to their demands. Catch a glimpse of our
portfolio now
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
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

      {/* =========================================
          LET'S GET STARTED BUTTON
      ========================================= */}
      <div className="w-full flex justify-center py-16 bg-white">
        <button className="px-10 py-2 rounded-full border-2 border-sky-500 text-gray-900 font-semibold text-sm sm:text-base tracking-wide hover:bg-[#0087e0] hover:text-white transition-colors duration-300">
          LET&apos;S GET STARTED
        </button>
      </div>

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
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-5 right-5 z-[100000] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-3xl font-bold shadow-lg transition-transform duration-200 hover:scale-110"
              aria-label="Close"
            >
              ×
            </button>

            <motion.img
              src={popupImage}
              alt="Full Preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[92vh] max-w-[94vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>
      <div>
        <StatsSection/>
        <ContactSection/>
        <CtaBanner/>
      </div>
    </>
  );
};

export default HeroSection;