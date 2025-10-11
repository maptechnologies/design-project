"use client";
import React, { useState } from "react";

const categories = [
  "Logo",
  "Web Design",
  "Video Animation",
  "Branding",
  "E-Commerce",
  "Social Marketing",
  "NFT Design",
  "Marketing Collateral",
  "SEO",
];

const packages = [
  {
    price: "$49",
    title: "Basic Logo Package",
    features: [
      "3 Custom Logo Design Concepts",
      "1 Dedicated Designer",
      "4 Revisions",
      "48 to 72 hours TAT",
      "100% Unique Design Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$129",
    title: "StartUp Logo Package",
    features: [
      "5 Custom Logo Design Concepts By 2 Designers",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$199",
    title: "Professional Logo Package",
    features: [
      "Unlimited Logo Design Concepts By 4 Designers",
      "Unlimited Revisions",
      "Stationery Design (Business Card, Letterhead, Envelope)",
      "Free MS Word Letterhead",
      "48 to 72 hours TAT",
      "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee*",
      "Unlimited Revisions",
    ],
  },
];

const PricingSection = () => {
  const [active, setActive] = useState("Logo");

  return (
    <section className="bg-[#f7f9fc] py-14 sm:py-16 md:py-20 flex flex-col items-center px-4 sm:px-6 lg:px-10 xl:px-20">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-[42px] font-bold text-gray-900 mb-3">
        Most Affordable Packages
      </h2>
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
        We are well aware of the competition. That is the reason why we have a fair pricing model.
        <br />
        We ensure quality over quantity on each order.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 w-full max-w-4xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-5 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium border transition-all duration-200 ${
              active === cat
                ? "bg-[#00AEEF] text-white border-[#00AEEF]"
                : "bg-white text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full max-w-7xl">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0072FF] to-[#00C6FF] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group"
          >
            <div className="p-6 sm:p-8 md:p-10 text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">
                {pkg.price}
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
                {pkg.title}
              </h4>

              <ul className="text-xs sm:text-sm md:text-base text-white/90 border-t border-white/30 divide-y divide-white/20 pt-4">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="py-2 flex items-start gap-2 justify-center"
                  >
                    <span>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
                <button className="bg-white text-[#0072FF] font-semibold py-2 px-6 sm:px-8 rounded-full hover:bg-[#f0f0f0] transition text-sm sm:text-base md:text-lg">
                  ORDER NOW
                </button>
                <p className="text-white text-xs sm:text-sm md:text-base">
                  Click Here to{" "}
                  <a href="#" className="underline font-medium">
                    Live Chat
                  </a>
                </p>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
