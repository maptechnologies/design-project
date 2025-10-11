"use client";

import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      title: "SEO",
      desc: "We are the search engine optimization agency that provides the best SEO services to   boost search engine ranking. You can get custom SEO services that fits your unique   business needs &amp; generate site traffic for high conversions.",
    },
    {
      title: "E-COMMERCE",
      desc: "We provide e-commerce services, redesigning and blogs that are needed to accelerat  your business growth. We help you build a digital brand successfully to improve th  overall services.",
    },
    {
      title: "Logo design",
      desc: "We give you the chance to work with professional designers for the creation of logo  designs that are unique and attractive. Discuss logo design for your project with uo  to take your business to new heights..",
    },
    {
      title: "BRANDING",
      desc: "We deliver branding services. Our services are well designed and we fulfill creative marketing needs of our customers that is the powerful way engaging more clients..",
    },
    {
      title: "Animated Video",
      desc: "Websites Designs Agency is a full service video animation agency specializing inexplainer videos that tells great stories and attracts audience towards your brand results in increased revenue generation..",
    },
    {
      title: "Social Media",
      desc: "We help you increase your visibility with well-crafted social media campaigns for  different brands. We are the social media marketing company that is unmatched in the  US at improving website traffic..",
    },
    {
      title: "Web Design & Development",
      desc: "Our website design services help you convert your website to calls, sales and leads.  Our modern web design services are designed to grow your business and leave an  everlasting impression..",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] mx-auto">
        <Slider {...settings}>
          {services.map((service, index) => {
            const isHovered = hoverIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`
                  cursor-pointer transition-all duration-300
                  mx-4 p-12 rounded- shadow-md
                  flex flex-col justify-center items-center text-center
                  min-h-[380px]
                  ${
                    isHovered
                      ? "bg-gradient-to-b from-blue-600 to-cyan-400 text-white shadow-2xl scale-105"
                      : "bg-white text-gray-700 hover:bg-white shadow"
                  }
                `}
              >
               <h3
  className={`text-[20px] font-bold mb-2 transition-colors duration-300 ${
    isHovered ? "text-gray" : "text-black"
  }`}
>
  {service.title}
</h3>
<p
  className={`text-sm leading-relaxed transition-colors duration-300 ${
    isHovered ? "text-white" : "text-gray-600"
  }`}
>
  {service.desc}
</p>


              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSection;
