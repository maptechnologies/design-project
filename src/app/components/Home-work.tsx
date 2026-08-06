"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio: React.FC = () => {
  const works = [

    // ---- Logo Design (9 items) ----
    { img: "/iamge/port-1.jpg", alt: "Logo Work 1", category: "Logo Design" },
    { img: "/iamge/port-2.jpg", alt: "Logo Work 2", category: "Logo Design" },
    { img: "/iamge/port-3.jpg", alt: "Logo Work 3", category: "Logo Design" },
    { img: "/iamge/logo-img-6.webp", alt: "Logo Work 4", category: "Logo Design" },
    { img: "/iamge/logo-img-3.webp", alt: "Logo Work 5", category: "Logo Design" },
    { img: "/iamge/logo-img-1.webp", alt: "Logo Work 6", category: "Logo Design" },
    { img: "/iamge/logo-img-5.webp", alt: "Logo Work 7", category: "Logo Design" },
    { img: "/iamge/3.webp", alt: "Logo Work 8", category: "Logo Design" },
    { img: "/iamge/17.webp", alt: "Logo Work 9", category: "Logo Design" },

    // ---- Website Design (12 items) ----
    { img: "/iamge/1.webp", alt: "Website Work 1", category: "Website Design" },
    { img: "/iamge/000000.webp", alt: "Website Work 2", category: "Website Design" },
    { img: "/iamge/2.webp", alt: "Website Work 3", category: "Website Design" },
    { img: "/iamge/4.webp", alt: "Website Work 4", category: "Website Design" },
    { img: "/iamge/5.webp", alt: "Website Work 5", category: "Website Design" },
    { img: "/iamge/6.webp", alt: "Website Work 6", category: "Website Design" },
    { img: "/iamge/7.webp", alt: "Website Work 7", category: "Website Design" },
    { img: "/iamge/11.webp", alt: "Website Work 8", category: "Website Design" },
    { img: "/iamge/8.webp", alt: "Website Work 9", category: "Website Design" },
    { img: "/iamge/9 (2).webp", alt: "Website Work 10", category: "Website Design" },
    { img: "/iamge/9.webp", alt: "Website Work 11", category: "Website Design" },
    { img: "/iamge/10.webp", alt: "Website Work 12", category: "Website Design" },

    // ---- Branding (12 items) ----
    { img: "/iamge/1 (1).webp", alt: "Branding Work 1", category: "Branding" },
    { img: "/iamge/2 (1).webp", alt: "Branding Work 2", category: "Branding" },
    { img: "/iamge/3 (1).webp", alt: "Branding Work 3", category: "Branding" },
    { img: "/iamge/4 (1).webp", alt: "Branding Work 4", category: "Branding" },
    { img: "/iamge/5 (1).webp", alt: "Branding Work 5", category: "Branding" },
    { img: "/iamge/6 (1).webp", alt: "Branding Work 6", category: "Branding" },
    { img: "/iamge/7 (1).webp", alt: "Branding Work 7", category: "Branding" },
    { img: "/iamge/8 (1).webp", alt: "Branding Work 8", category: "Branding" },
    { img: "/iamge/9 (1).webp", alt: "Branding Work 9", category: "Branding" },
    { img: "/iamge/10 (1).webp", alt: "Branding Work 10", category: "Branding" },
    { img: "/iamge/11 (1).webp", alt: "Branding Work 11", category: "Branding" },
    { img: "/iamge/12.webp", alt: "Branding Work 12", category: "Branding" },

    // ---- E-Commerce (12 items) ----
    { img: "/iamge/11 (2).webp", alt: "E-Commerce Work 1", category: "E-Commerce" },
    { img: "/iamge/4 (2).webp", alt: "E-Commerce Work 2", category: "E-Commerce" },
    { img: "/iamge/3 (2).webp", alt: "E-Commerce Work 3", category: "E-Commerce" },
    { img: "/iamge/3.webp", alt: "E-Commerce Work 4", category: "E-Commerce" },
    { img: "/iamge/5 (2).webp", alt: "E-Commerce Work 5", category: "E-Commerce" },
    { img: "/iamge/6 (2).webp", alt: "E-Commerce Work 6", category: "E-Commerce" },
    { img: "/iamge/7 (2).webp", alt: "E-Commerce Work 7", category: "E-Commerce" },
    { img: "/iamge/10 (2).webp", alt: "E-Commerce Work 8", category: "E-Commerce" },
    { img: "/iamge/11.webp", alt: "E-Commerce Work 9", category: "E-Commerce" },
    { img: "/iamge/9 (2).webp", alt: "E-Commerce Work 10", category: "E-Commerce" },
    { img: "/iamge/1 (2).webp", alt: "E-Commerce Work 11", category: "E-Commerce" },
    { img: "/iamge/2 (2).webp", alt: "E-Commerce Work 12", category: "E-Commerce" },

    // ---- NFT Design (8 items) ----
    { img: "/iamge/port-img-1.webp", alt: "NFT Work 1", category: "NFT Design" },
    { img: "/iamge/port-img-2.webp", alt: "NFT Work 2", category: "NFT Design" },
    { img: "/iamge/port-img-3.webp", alt: "NFT Work 3", category: "NFT Design" },
    { img: "/iamge/port-img-4.webp", alt: "NFT Work 4", category: "NFT Design" },
    { img: "/iamge/port-img-5.webp", alt: "NFT Work 5", category: "NFT Design" },
    { img: "/iamge/port-img-6.webp", alt: "NFT Work 6", category: "NFT Design" },
    { img: "/iamge/port-img-7.webp", alt: "NFT Work 7", category: "NFT Design" },
    { img: "/iamge/port-img-8.webp", alt: "NFT Work 8", category: "NFT Design" },

    // ---- Social Media Marketing (12 items) ----
    { img: "/iamge/12 (2).webp", alt: "Social Media Work 1", category: "Social Media Marketing" },
    { img: "/iamge/12.webp", alt: "Social Media Work 2", category: "Social Media Marketing" },
    { img: "/iamge/13.webp", alt: "Social Media Work 3", category: "Social Media Marketing" },
    { img: "/iamge/14.webp", alt: "Social Media Work 4", category: "Social Media Marketing" },
    { img: "/iamge/15.webp", alt: "Social Media Work 5", category: "Social Media Marketing" },
    { img: "/iamge/16.webp", alt: "Social Media Work 6", category: "Social Media Marketing" },
    { img: "/iamge/7 (9).webp", alt: "Social Media Work 7", category: "Social Media Marketing" },
    { img: "/iamge/8 (9).webp", alt: "Social Media Work 8", category: "Social Media Marketing" },
    { img: "/iamge/10 (3).webp", alt: "Social Media Work 9", category: "Social Media Marketing" },
    { img: "/iamge/6 (11).webp", alt: "Social Media Work 10", category: "Social Media Marketing" },
    { img: "/iamge/11 (3).webp", alt: "Social Media Work 11", category: "Social Media Marketing" },
    { img: "/iamge/9 (3).webp", alt: "Social Media Work 12", category: "Social Media Marketing" },
    
  ];

  const categories = 
  [
    "Logo Design",
    "Website Design",
    "Branding",
    "E-Commerce",
    "Video Animation",
    "NFT Design",
    "Social Media Marketing",
];
  const [selected, setSelected] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Logo Design");

  const filteredWorks = works.filter((w) => w.category === activeCategory);

  const sliderLogos = [
    "/iamge/bark.png",
    "/iamge/clutch.png",
    "/iamge/goodfirms.png",
    "/iamge/trust.png",
    "/iamge/yelp.png",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-12 bg-white">
      {/* ✅ Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          A Glimpse Of Our Recent Work
        </h2>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
          We have years of expertise in digital marketing and design. <br className="hidden sm:block" />
          High-quality results for our customers.
        </p>

        {/* ✅ Simple Category Buttons (no "All") */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-full transition ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Works Grid with Mixed Overlay */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-3 sm:px-6">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            onClick={() => setSelected(work)}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={work.img}
              alt={work.alt}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* 🔹 Soft Blend Overlay for Mixed Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-400/25 to-pink-400/20 mix-blend-overlay opacity-70 group-hover:opacity-80 transition duration-500"></div>
          </div>
        ))}
      </div>

      {/* ✅ Logo Slider */}
      <div className="w-full mt-12 bg-gradient-to-r from-[#0084e0] via- to-[#00d8f2] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Slider {...sliderSettings}>
            {sliderLogos.map((logo, i) => (
              <div key={i} className="flex justify-center items-center">
                <img src={logo} alt={`logo-${i}`} className="h-8 sm:h-10 md:h-12 mx-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ✅ Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-3 right-3 text-white text-2xl sm:text-3xl font-bold z-50"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img
              src={selected.img}
              alt={selected.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
