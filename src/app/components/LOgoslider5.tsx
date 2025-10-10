"use client";

import React from "react";
import { motion } from "framer-motion";

const logoData = [
  {
    title: "SOCIAL MEDIA MARKETING",
    desc: "Who doesn’t use social media these days? If these platforms are such an inherent part of our lives, how can they not be part of business models? Our experts create high-quality content for your social media presence.",
    img: "/iamge/market-serv-img-1 (1).webp",
  },
  {
    title: "PAY-PER-CLICK CAMPAIGNS",
    desc: "PPC brings significant traffic to websites. Our team at Websites Designs Agency is adept in PPC marketing and maximizing ROI for your brand effectively.",
    img: "/iamge/market-serv-img-2 (1).webp",
  },
  {
    title: "REPUTATION MANAGEMENT",
    desc: "Reputation management is about improving your brand’s image online through optimized social and search engagement strategies.",
    img: "/iamge/market-serv-img-3 (1).webp",
  },
];

export default function CenterCards() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl">
        {logoData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#f9f9f9] rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mb-5"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
