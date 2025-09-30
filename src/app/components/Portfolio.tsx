"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio: React.FC = () => {
  // ✅ Data for Works
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
    
    

    // ✅ Video Animation (subcategories with 9 each)
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
        img: `/iamge/${sub.toLowerCase().replace(/ /g, "-")}-${i + 1}.jpg`,
        alt: `${sub} ${i + 1}`,
        category: "Video Animation",
        subCategory: sub,
      }))
    ),
  ];

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

  const [selected, setSelected] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  // ✅ Filter Works
  const filteredWorks = works.filter((work) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "Video Animation") {
      return activeSubCategory
        ? work.category === "Video Animation" && work.category === activeSubCategory
        : false;
    }

    return work.category === activeCategory;
  });

  return (
    <div className="w-full py-12 bg-black">
      {/* ✅ Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          A Glimpse Of Our Recent Work
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          We have years of expertise in digital marketing and design. <br />
          High-quality results for our customers.
        </p>

        {/* ✅ Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory(null);
              }}
              className={`px-4 sm:px-4 py-2 text-sm border rounded-full transition 
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent"
                    : "border-gray-400 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Sub Buttons Only for Video Animation */}
        {activeCategory === "Video Animation" && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {videoSubCategories.map((sub, i) => (
              <button
                key={i}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-3 sm:px-4 py-1 text-xs sm:text-sm border rounded-full transition 
                  ${
                    activeSubCategory === sub
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
                      : "border-gray-400 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Works Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work, index) => (
            <div
              key={index}
              onClick={() => setSelected(work)}
              className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
            >
              <img
                src={work.img}
                alt={work.alt}
                className="w-full h-36 sm:h-44 lg:h-52 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))
        ) : (
          <p className="text-white col-span-3 text-center">
            {activeCategory === "Video Animation" && !activeSubCategory
              ? "Please select a sub category"
              : "No works available"}
          </p>
        )}
      </div>

      {/* ✅ Slider with Gradient Background */}
      <div className="w-full mt-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Slider {...sliderSettings}>
            {sliderLogos.map((logo, i) => (
              <div key={i} className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-10 sm:h-12 mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ✅ Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold z-50"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img
              src={selected.img}
              alt={selected.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
