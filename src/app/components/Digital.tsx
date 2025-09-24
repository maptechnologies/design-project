"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features: React.FC = () => {
  const features = [
    {
      title: "Creativity",
      desc: "Creativity is the key in the industry and we have established this fact loud and clear since the very first day amongst our teams of designers and developers. We work with no limitations on creativity and innovation.",
    },
    {
      title: "Free Logo Multiple File Formats",
      desc: "When you get a logo design it’s not just an image that you need, you might need different formats if you intend to use the logo for different purposes.",
    },
    {
      title: "Unlimited Revisions",
      desc: "We keep striving unless you are 100 percent sure and satisfied with the product that you receive. You don’t love what you see? Let’s give it a redo.",
    },
    {
      title: "Multiple Designers Assigned",
      desc: "We have skilled designers who are experts in creating work that surpasses our customer’s expectations. We ensure that our designers deliver high quality work without any limitations on innovation and creativity.",
    },
    {
      title: "Industry Specific Designers",
      desc: "The management team has built up experience over years of services with the most creative designers with high quality services.",
    },
    {
      title: "Logo Delivery within 50 Minutes",
      desc: "When it comes to designing skills supremacy, our team’s expertise knows no bounds. Each aspect of designing is kept intact as well as making sure that none of the quality aspects are affected.",
    },
  ];

  // ✅ Responsive Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // large laptop
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablet
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // phones
    ],
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 Heading Upar */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold leading-snug">
            A{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
              DIGITAL AGENCY
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold">
              SPECIALIZED
            </span>{" "}
            IN <br />
            DIGITAL CREATION & BRAND STRATEGY
          </h2>
        </motion.div>

        {/* ✅ Slider */}
        <Slider {...settings}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="px-2 sm:px-3 md:px-4"
            >
              <div
                className="
                  p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl 
                  transition-transform duration-500 ease-in-out
                  h-full min-h-[250px] flex flex-col justify-center
                  bg-gradient-to-br from-cyan-500 to-blue-600 text-white
                  hover:scale-105
                "
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Features;
