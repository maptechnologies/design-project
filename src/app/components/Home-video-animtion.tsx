"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio: React.FC = () => {
  // =========================================================
  // WORKS DATA
  // =========================================================

  const works = [
    // ---- Logo Design ----
    { img: "/image/port-1.jpg", alt: "Logo Work 1", category: "Logo Design" },
    { img: "/image/port-2.jpg", alt: "Logo Work 2", category: "Logo Design" },
    { img: "/image/port-3.jpg", alt: "Logo Work 3", category: "Logo Design" },
    { img: "/image/logo-img-6.webp", alt: "Logo Work 4", category: "Logo Design" },
    { img: "/image/logo-img-3.webp", alt: "Logo Work 5", category: "Logo Design" },
    { img: "/image/logo-img-1.webp", alt: "Logo Work 6", category: "Logo Design" },
    { img: "/image/logo-img-5.webp", alt: "Logo Work 7", category: "Logo Design" },
    { img: "/image/3.webp", alt: "Logo Work 8", category: "Logo Design" },
    { img: "/image/17.webp", alt: "Logo Work 9", category: "Logo Design" },

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
    ...[
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
    ].flatMap((sub) =>
      Array.from({ length: 9 }, (_, i) => ({
        img: `/image/${sub.toLowerCase().replace(/ /g, "-")}-${i + 1}.jpg`,
        alt: `${sub} ${i + 1}`,
        category: "Video Animation",
        subCategory: sub,
      }))
    ),
  ];

  // =========================================================
  // CATEGORIES
  // =========================================================

  const categories = [
    "All",
    "Logo Design",
    "Website Design",
    "Branding",
    "E-Commerce",
    "Video Animation",
    "NFT Design",
    "Social Media Marketing",
  ];

  const videoSubCategories = [
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

  // =========================================================
  // LOGO SLIDER
  // =========================================================

  const sliderLogos = [
    "/image/bark.png",
    "/image/clutch.png",
    "/image/goodfirms.png",
    "/image/trust.png",
    "/image/yelp.png",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // =========================================================
  // PORTFOLIO SLIDER SETTINGS
  // =========================================================

  const portfolioSliderSettings = {
    dots: true,
    infinite: true,

    // Smooth transition
    speed: 750,

    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2800,

    arrows: true,

    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,

    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // =========================================================
  // STATES
  // =========================================================

  const [selected, setSelected] = useState<any>(null);

  const [activeCategory, setActiveCategory] =
    useState<string>("All");

  const [activeSubCategory, setActiveSubCategory] =
    useState<string | null>(null);

  // =========================================================
  // FILTER WORKS
  // =========================================================

  const filteredWorks = works.filter((work) => {
    if (activeCategory === "All") {
      return true;
    }

    if (activeCategory === "Video Animation") {
      if (activeSubCategory) {
        return (
          work.category === "Video Animation" &&
          work.subCategory === activeSubCategory
        );
      }

      return work.category === "Video Animation";
    }

    return work.category === activeCategory;
  });

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="portfolio-section w-full py-8 sm:py-12 bg-black">

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="text-center mb-8 sm:mb-10 px-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          A Glimpse Of Our Recent Work
        </h2>

        <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg">
          We have years of expertise in digital marketing and design.
          <br className="hidden sm:block" />
          High-quality results for our customers.
        </p>

        {/* =================================================
            CATEGORY BUTTONS
        ================================================= */}

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">

          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory(null);
              }}
              className={`
                px-3 sm:px-4 md:px-5
                py-1.5 sm:py-2
                text-xs sm:text-sm
                border rounded-full
                transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/25"
                    : "border-gray-400 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent"
                }
              `}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* =================================================
            VIDEO SUB CATEGORIES
        ================================================= */}

        {activeCategory === "Video Animation" && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">

            {videoSubCategories.map((sub, i) => (
              <button
                key={i}
                onClick={() => setActiveSubCategory(sub)}
                className={`
                  px-2.5 sm:px-3 md:px-4
                  py-1 sm:py-1.5
                  text-[10px] sm:text-xs md:text-sm
                  border rounded-full
                  transition-all duration-300
                  ${
                    activeSubCategory === sub
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25"
                      : "border-gray-400 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent"
                  }
                `}
              >
                {sub}
              </button>
            ))}

          </div>
        )}

      </div>

      {/* =====================================================
          PORTFOLIO CARDS SLIDER
      ===================================================== */}

      <div className="portfolio-slider-wrapper w-full px-3 sm:px-5 md:px-8">

        {filteredWorks.length > 0 ? (

          <Slider
            key={`${activeCategory}-${activeSubCategory}`}
            {...portfolioSliderSettings}
          >

            {filteredWorks.map((work, index) => (

              <div
                key={index}
                className="portfolio-slide px-1.5 sm:px-2 md:px-2.5"
              >

                <div
                  onClick={() => setSelected(work)}
                  className="
                    portfolio-card
                    relative
                    overflow-hidden
                    rounded-lg
                    cursor-pointer
                    bg-gray-900
                    shadow-lg
                    group
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  {/* IMAGE */}

                  <div className="relative w-full aspect-[16/9] overflow-hidden">

                    <img
                      src={work.img}
                      alt={work.alt}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                      onError={(e) => {
                        (
                          e.target as HTMLImageElement
                        ).src =
                          "https://via.placeholder.com/800x500/1a1a1a/ffffff?text=No+Image";
                      }}
                    />

                    {/* DARK OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    {/* TEXT */}

                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        bottom-0
                        p-4
                        translate-y-5
                        opacity-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    >

                      <p className="text-white text-sm sm:text-base font-semibold">
                        {work.alt}
                      </p>

                      <span className="text-cyan-300 text-xs sm:text-sm">
                        {work.category}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </Slider>

        ) : (

          <p className="text-white text-center py-10 text-sm sm:text-base">
            {activeCategory === "Video Animation" &&
            !activeSubCategory
              ? "📹 Please select a sub-category to view works"
              : "No works available"}
          </p>

        )}

      </div>

      {/* =====================================================
          LOGO SLIDER
      ===================================================== */}

      <div className="w-full mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 py-6 sm:py-8">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <Slider {...sliderSettings}>

            {sliderLogos.map((logo, i) => (

              <div
                key={i}
                className="flex justify-center items-center"
              >

                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-8 sm:h-10 md:h-12 mx-auto object-contain"
                  onError={(e) => {
                    (
                      e.target as HTMLImageElement
                    ).src =
                      "https://via.placeholder.com/120x40/ffffff/1a1a1a?text=Logo";
                  }}
                />

              </div>

            ))}

          </Slider>

        </div>

      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {selected && (

        <div
          className="
            fixed
            inset-0
            bg-black/85
            flex
            items-center
            justify-center
            z-50
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelected(null)}
        >

          <div
            className="
              relative
              max-w-5xl
              w-full
              bg-gray-900
              rounded-xl
              shadow-2xl
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              className="
                absolute
                top-3
                right-3
                text-white
                text-2xl
                sm:text-3xl
                font-bold
                z-50
                w-8
                h-8
                sm:w-10
                sm:h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-black/50
                hover:bg-black/80
                transition-colors
              "
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* IMAGE */}

            <div className="p-2 sm:p-4">

              <img
                src={selected.img}
                alt={selected.alt}
                className="
                  w-full
                  h-auto
                  max-h-[75vh]
                  object-contain
                  rounded-lg
                "
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).src =
                    "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=No+Image";
                }}
              />

            </div>

            <div className="px-4 sm:px-6 pb-4 sm:pb-6">

              <p className="text-white text-center text-sm sm:text-base">
                {selected.alt}
              </p>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          CUSTOM SLIDER CSS
      ===================================================== */}

      <style jsx global>{`

        /* ---------------------------------------------
           PORTFOLIO SLIDER
        --------------------------------------------- */

        .portfolio-slider-wrapper {
          overflow: hidden;
        }

        .portfolio-slider-wrapper .slick-list {
          overflow: hidden;
          margin: 0 -4px;
        }

        .portfolio-slider-wrapper .slick-track {
          display: flex;
          align-items: stretch;
        }

        .portfolio-slider-wrapper .slick-slide {
          height: auto;
        }

        .portfolio-slider-wrapper .slick-slide > div {
          height: 100%;
        }

        .portfolio-slide {
          height: 100%;
        }

        .portfolio-card {
          height: 100%;
          min-height: 240px;
        }

        /* ---------------------------------------------
           SMOOTH IMAGE TRANSITION
        --------------------------------------------- */

        .portfolio-card img {
          will-change: transform;
        }

        /* ---------------------------------------------
           ARROWS
        --------------------------------------------- */

        .portfolio-slider-wrapper .slick-prev,
        .portfolio-slider-wrapper .slick-next {
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.65);
          transition: all 0.3s ease;
        }

        .portfolio-slider-wrapper .slick-prev {
          left: 12px;
        }

        .portfolio-slider-wrapper .slick-next {
          right: 12px;
        }

        .portfolio-slider-wrapper .slick-prev:hover,
        .portfolio-slider-wrapper .slick-next:hover {
          background: rgba(0, 200, 255, 0.9);
          transform: scale(1.08);
        }

        .portfolio-slider-wrapper .slick-prev:before,
        .portfolio-slider-wrapper .slick-next:before {
          color: white;
          font-size: 22px;
          opacity: 1;
        }

        /* ---------------------------------------------
           DOTS
        --------------------------------------------- */

        .portfolio-slider-wrapper .slick-dots {
          bottom: -38px;
        }

        .portfolio-slider-wrapper .slick-dots li button:before {
          color: white;
          font-size: 9px;
          opacity: 0.45;
          transition: all 0.3s ease;
        }

        .portfolio-slider-wrapper
          .slick-dots
          li.slick-active
          button:before {
          color: #22d3ee;
          opacity: 1;
          transform: scale(1.3);
        }

        /* ---------------------------------------------
           MOBILE
        --------------------------------------------- */

        @media (max-width: 600px) {

          .portfolio-slider-wrapper {
            padding-left: 8px;
            padding-right: 8px;
          }

          .portfolio-slide {
            padding-left: 5px;
            padding-right: 5px;
          }

          .portfolio-card {
            min-height: 200px;
            border-radius: 8px;
          }

          .portfolio-slider-wrapper .slick-dots {
            bottom: -32px;
          }

        }

        /* ---------------------------------------------
           TABLET
        --------------------------------------------- */

        @media (min-width: 601px) and (max-width: 900px) {

          .portfolio-card {
            min-height: 220px;
          }

        }

      `}</style>

    </div>
  );
};

export default Portfolio;