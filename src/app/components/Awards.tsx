"use client";

import React from "react";

const Awards: React.FC = () => {
  const awards = [
    { img: "/iamge/award-img-1.webp", alt: "Santa Casa" },
    { img: "/iamge/award-img-2.webp", alt: "Quantano Community" },
    { img: "/iamge/award-img-3.webp", alt: "Asia Young Designer" },
    { img: "/iamge/award-img-4.webp", alt: "German Design Award" },
    { img: "/iamge/award-img-5.webp", alt: "International Award" },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-10">
        Awards & Recognitions
      </h2>

      {/* Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={award.img}
              alt={award.alt}
              className="h-16 sm:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
