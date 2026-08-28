"use client";

import { useMemo, useState } from "react";
   import { AnimatePresence, motion, type Variants } from "framer-motion";

/**
 * RecentWork.tsx
 * "A Glimpse Of Our Recent Work" section
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

  // ---- Branding ----
  {
    img: "/iamge/design078.webp",
    alt: "Branding Work 1",
    category: "Branding",
  },
  {
    img: "/iamge/design079.webp",
    alt: "Branding Work 2",
    category: "Branding",
  },
  {
    img: "/iamge/design080.webp",
    alt: "Branding Work 3",
    category: "Branding",
  },
  {
    img: "/iamge/design081.webp",
    alt: "Branding Work 4",
    category: "Branding",
  },
  {
    img: "/iamge/design082.webp",
    alt: "Branding Work 5",
    category: "Branding",
  },
  {
    img: "/iamge/design083.webp",
    alt: "Branding Work 6",
    category: "Branding",
  },
  {
    img: "/iamge/design084.webp",
    alt: "Branding Work 7",
    category: "Branding",
  },
  {
    img: "/iamge/design085.webp",
    alt: "Branding Work 8",
    category: "Branding",
  },
  {
    img: "/iamge/design086.webp",
    alt: "Branding Work 9",
    category: "Branding",
  },
  {
    img: "/iamge/design087.webp",
    alt: "Branding Work 10",
    category: "Branding",
  },
  {
    img: "/iamge/design085.webp",
    alt: "Branding Work 11",
    category: "Branding",
  },
  {
    img: "/iamge/design081.webp",
    alt: "Branding Work 12",
    category: "Branding",
  },

  // ---- E-Commerce ----
  {
    img: "/iamge/design088.webp",
    alt: "E-Commerce Work 1",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design089.webp",
    alt: "E-Commerce Work 2",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design090.webp",
    alt: "E-Commerce Work 3",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design091.webp",
    alt: "E-Commerce Work 4",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design092.webp",
    alt: "E-Commerce Work 5",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design093.webp",
    alt: "E-Commerce Work 6",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design094.webp",
    alt: "E-Commerce Work 7",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design095.webp.webp",
    alt: "E-Commerce Work 8",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design096.webp",
    alt: "E-Commerce Work 9",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design097.webp",
    alt: "E-Commerce Work 10",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design098.webp",
    alt: "E-Commerce Work 11",
    category: "E-Commerce",
  },
  {
    img: "/iamge/design099.webp",
    alt: "E-Commerce Work 12",
    category: "E-Commerce",
  },

  // ---- NFT Design ----
  {
    img: "/iamge/design182.webp",
    alt: "NFT Work 1",
    category: "NFT Design",
  },
  {
    img: "/iamge/design183.webp",
    alt: "NFT Work 2",
    category: "NFT Design",
  },
  {
    img: "/iamge/design184.webp",
    alt: "NFT Work 3",
    category: "NFT Design",
  },
  {
    img: "/iamge/design185.webp",
    alt: "NFT Work 4",
    category: "NFT Design",
  },
  {
    img: "/iamge/design186.webp",
    alt: "NFT Work 5",
    category: "NFT Design",
  },
  {
    img: "/iamge/design187.webp",
    alt: "NFT Work 6",
    category: "NFT Design",
  },
  {
    img: "/iamge/design188.webp",
    alt: "NFT Work 7",
    category: "NFT Design",
  },
  {
    img: "/iamge/design189.webp",
    alt: "NFT Work 8",
    category: "NFT Design",
  },
  {
    img: "/iamge/design002.webp",
    alt: "NFT Work 8",
    category: "NFT Design",
  },

  // ---- Social Media Marketing ----
  {
    img: "/iamge/design170.webp",
    alt: "Social Media Work 1",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design171.webp",
    alt: "Social Media Work 2",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design172.webp",
    alt: "Social Media Work 3",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design173.webp",
    alt: "Social Media Work 4",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design174.webp",
    alt: "Social Media Work 5",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design175.webp",
    alt: "Social Media Work 6",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design176.webp",
    alt: "Social Media Work 7",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design177.webp",
    alt: "Social Media Work 8",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design178.webp",
    alt: "Social Media Work 9",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design179.webp",
    alt: "Social Media Work 10",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design180.webp",
    alt: "Social Media Work 11",
    category: "Social Media Marketing",
  },
  {
    img: "/iamge/design181.webp",
    alt: "Social Media Work 12",
    category: "Social Media Marketing",
  },

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

const card = {
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

const reviewLogos = [
  {
    img: "/iamge/design192.png",
    alt: "Trustpilot",
  },
  {
    img: "/iamge/design193.png",
    alt: "Yelp",
  },
  {
    img: "/iamge/design191.png",
    alt: "GoodFirms",
  },
  {
    img: "/iamge/design194.png",
    alt: "Bark",
  },
  {
    img: "/iamge/design190.png",
    alt: "Clutch",
  },
];
export default function RecentWork() {
  const [active, setActive] =
    useState<Category>("Website Design");

  const [activeSub, setActiveSub] =
    useState<string>(VIDEO_SUBCATEGORIES[0]);

  const [popupImage, setPopupImage] =
    useState<string | null>(null);

  const isVideo = active === "Video Animation";

  const filtered = useMemo(() => {
    if (isVideo) {
      return works.filter(
        (w) =>
          w.category === "Video Animation" &&
          w.subCategory === activeSub
      );
    }

    return works.filter(
      (w) => w.category === active
    );
  }, [active, activeSub, isVideo]);

  const handleCategoryClick = (
    cat: Category
  ) => {
    setActive(cat);

    if (cat === "Video Animation") {
      setActiveSub(
        VIDEO_SUBCATEGORIES[0]
      );
    }
  };

  const handleSubClick = (
    sub: string
  ) => {
    setActiveSub(sub);
  };

  return (
    <>
      <section className="w-full bg-white py-0">

        {/* =================================
            HEADING + CATEGORIES
        ================================= */}

        <div className="mx-auto max-w-6xl  mt-30 text-center">

          <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            A Glimpse Of Our Recent Work
          </h2>

          <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We have years of experience in digital
            marketing and design. We have spent years
            in delivering high quality work for our
            customers. Have a look at our recent work
            for our customers.
          </p>

          {/* Main Category Tabs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">

            {CATEGORIES.map((cat) => {
              const isActive = cat === active;

              return (
                <button
                  key={cat}
                  onClick={() =>
                    handleCategoryClick(cat)
                  }
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
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

          </div>

          {/* Video Sub Categories */}
          <AnimatePresence>
            {isVideo && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden"
              >
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">

                  {VIDEO_SUBCATEGORIES.map(
                    (sub) => {
                      const isSubActive =
                        sub === activeSub;

                      return (
                        <button
                          key={sub}
                          onClick={() =>
                            handleSubClick(sub)
                          }
                          className={`text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                            isSubActive
                              ? "bg-sky-500 text-white border-sky-500"
                              : "bg-transparent text-gray-500 border-gray-300 hover:border-sky-400 hover:text-sky-500"
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    }
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* =================================
            GALLERY
        ================================= */}

        <div className="w-full mt-14">

          <AnimatePresence mode="wait">

            <motion.div
              key={
                isVideo
                  ? `${active}-${activeSub}`
                  : active
              }
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3"
            >

              {filtered.length === 0 ? (
                <p className="col-span-full text-center text-gray-400 py-10">
                  No projects added for this
                  category yet.
                </p>
              ) : (
                filtered.map(
                  (work, idx) => (

                    <motion.div
                      key={`${work.img}-${idx}`}
                      variants={card}
                      onClick={() =>
                        setPopupImage(work.img)
                      }
                      className="gallery-img-box group relative h-64 sm:h-72 lg:h-[385px] w-full overflow-hidden cursor-pointer"
                    >

                      <img
                        src={work.img}
                        alt={work.alt}
                        loading="lazy"
                        onError={(e) => {
                          const el =
                            e.currentTarget;

                          el.onerror = null;

                          el.src = `https://picsum.photos/seed/${encodeURIComponent(
                            work.alt
                          )}/600/450`;
                        }}
                        className="absolute inset-0 h-full w-full object-cover scale-100 transition-transform duration-[400ms] ease-in-out group-hover:scale-110"
                      />

                    </motion.div>

                  )
                )
              )}

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =========================================
    AUTO REVIEW LOGO SLIDER
========================================= */}

<section className="review-slider-section">

  <div className="review-slider-window">

    <div className="review-slider-track">

      {/* SET 1 */}
      {reviewLogos.map((logo, index) => (
        <div
          className="review-logo"
          key={`set1-${index}`}
        >
          <img
            src={logo.img}
            alt={logo.alt}
          />
        </div>
      ))}

      {/* SET 2 */}
      {reviewLogos.map((logo, index) => (
        <div
          className="review-logo"
          key={`set2-${index}`}
        >
          <img
            src={logo.img}
            alt={logo.alt}
          />
        </div>
      ))}

      {/* SET 3 */}
      {reviewLogos.map((logo, index) => (
        <div
          className="review-logo"
          key={`set3-${index}`}
        >
          <img
            src={logo.img}
            alt={logo.alt}
          />
        </div>
      ))}

    </div>

  </div>

</section>


      {/* =================================
          FULL IMAGE POPUP
      ================================= */}

      <AnimatePresence>

        {popupImage && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
            onClick={() =>
              setPopupImage(null)
            }
          >

            {/* CLOSE BUTTON */}

            <button
              onClick={() =>
                setPopupImage(null)
              }
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
              onClick={(e) =>
                e.stopPropagation()
              }
            />

          </motion.div>

        )}

      </AnimatePresence>


     <style jsx global>{`

/* =========================================
   REVIEW LOGO AUTO SLIDER
========================================= */

.review-slider-section {
  width: 100%;
  height: 160px;

  margin: 0;
  padding: 0;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to bottom,
    #0086d5 0%,
    #009fdf 35%,
    #00bce9 68%,
    #00d7f2 100%
  );

  box-sizing: border-box;
}


/* =========================================
   SLIDER WINDOW
========================================= */

.review-slider-window {
  width: 100%;
  max-width: 1250px;

  height: 160px;

  margin: 0 auto;
  padding: 0;

  overflow: hidden;

  box-sizing: border-box;
}


/* =========================================
   MOVING TRACK
========================================= */

.review-slider-track {
  display: flex;
  align-items: center;

  width: max-content;
  height: 160px;

  margin: 0;
  padding: 0;

  animation: reviewLogoMove 20s linear infinite;

  will-change: transform;

  box-sizing: border-box;
}


/* =========================================
   EACH LOGO BOX
========================================= */

.review-logo {
  width: 250px;
  min-width: 250px;

  height: 160px;

  margin: 0;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  flex-shrink: 0;
}


/* =========================================
   LOGO IMAGE
========================================= */

.review-logo img {
  display: block;

  width: auto;
  height: auto;

  max-width: 155px;
  max-height: 62px;

  margin: 0;
  padding: 0;

  object-fit: contain;

  box-sizing: border-box;
}


/* =========================================
   AUTO SLIDER
========================================= */

@keyframes reviewLogoMove {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1250px);
  }

}


/* =========================================
   PAUSE ON HOVER
========================================= */

.review-slider-section:hover
.review-slider-track {
  animation-play-state: paused;
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1024px) {

  .review-slider-section {
    height: 140px;
  }

  .review-slider-window {
    height: 140px;
  }

  .review-slider-track {
    height: 140px;

    animation-duration: 18s;
  }

  .review-logo {
    width: 210px;
    min-width: 210px;

    height: 140px;

    padding: 0 15px;
  }

  .review-logo img {
    max-width: 140px;
    max-height: 55px;
  }

  @keyframes reviewLogoMove {

    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-1050px);
    }

  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {

  .review-slider-section {
    height: 115px;
  }

  .review-slider-window {
    height: 115px;
  }

  .review-slider-track {
    height: 115px;

    animation-duration: 16s;
  }

  .review-logo {
    width: 170px;
    min-width: 170px;

    height: 115px;

    padding: 0 12px;
  }

  .review-logo img {
    max-width: 120px;
    max-height: 48px;
  }

  @keyframes reviewLogoMove {

    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-850px);
    }

  }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 480px) {

  .review-slider-section {
    height: 95px;
  }

  .review-slider-window {
    height: 95px;
  }

  .review-slider-track {
    height: 95px;

    animation-duration: 14s;
  }

  .review-logo {
    width: 150px;
    min-width: 150px;

    height: 95px;

    padding: 0 10px;
  }

  .review-logo img {
    max-width: 105px;
    max-height: 42px;
  }

  @keyframes reviewLogoMove {

    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-750px);
    }

  }

}


/* =========================================
   PREVENT HORIZONTAL PAGE SCROLL
========================================= */

html,
body {
  overflow-x: hidden;
}

`}
</style>

    </>
  );
}