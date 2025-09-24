"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "BRANDING",
    desc: "We deliver branding services. Our services are well designed and we fulfill creative marketing needs of our customers in a powerful way engaging more clients.",
  },
  {
    title: "E-COMMERCE",
    desc: "We provide e-commerce services, redesigning and blogs that accelerate your business growth. We help you build a digital brand successfully to improve overall services.",
  },
  {
    title: "SEO",
    desc: "We are an SEO agency that provides the best services to boost search engine ranking. You can get custom SEO services that fit your business needs & generate site traffic for high conversions.",
  },
  {
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Our website design services help you convert visitors into calls, sales and leads. Our modern web design services are designed to grow your business and leave an everlasting impression.",
  },
  {
    title: "SOCIAL MEDIA",
    desc: "We help you increase your visibility with well-crafted social media campaigns for different brands. Our unmatched strategies improve website traffic and engagement.",
  },
  {
    title: "LOGO DESIGN",
    desc: "We give you the chance to work with professional designers for the creation of unique and attractive logos. Discuss your project with us to take your business to new heights.",
  },
  {
    title: "ANIMATED VIDEO",
    desc: "We are a full-service video animation agency specializing in explainer videos that tell great stories and attract audiences, resulting in increased revenue generation.",
  },
];

const AutoSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // large laptop
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablet landscape
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // tablet portrait + phones
    ],
  };

  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="px-2 sm:px-4">
              <div
                className="
                  group
                  bg-white rounded-2xl shadow-md p-6 sm:p-8 
                  text-center h-auto min-h-[250px] flex flex-col justify-center
                  transition-all duration-500 ease-in-out
                  hover:scale-105 hover:shadow-2xl
                  hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
                "
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-3 transition-colors duration-500 group-hover:text-white">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed transition-colors duration-500 group-hover:text-white">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AutoSlider;
