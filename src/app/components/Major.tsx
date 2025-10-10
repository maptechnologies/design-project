"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/iamge/features-img-1 (1).webp",
    title: "Unique Characters",
    desc: "We create unique characters that define your business and connect your audience.",
  },
  {
    img: "/iamge/features-img-2.webp",
    title: "Flawless Animations",
    desc: "Our skilled animators design videos with perfection, adding a creative touch to every scene.",
  },
  {
    img: "/iamge/features-img-3.webp",
    title: "Proven Results",
    desc: "Our video production process ensures great results with the creation of every video.",
  },
  {
    img: "/iamge/features-img-4.webp",
    title: "Reasonable Prices",
    desc: "We offer competitive pricing while maintaining the highest quality in every project.",
  },
];

const MajorFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Major <span className="text-sky-500">Features</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We bring creativity, precision, and value together to ensure every animation speaks success.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="mx-auto mb-5 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-white shadow-inner">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MajorFeatures;
