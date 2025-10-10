"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logoData = [
  {
    title: "Improve your Rankings",
    desc: "Hiring a content writing service is the ability to maike sure that your website gets overall rankings. By adding the valuable content on consisten basis, you should be able to attract both search engines and visitors. .",
    img: "/iamge/content-slider-img-1.webp",
  },
  {
    title: "Keyword Integration",
    desc: "Hiring a reliable content writing service provider allows to get a content written with keyword integration that can place your website at the top of search engines. Brands should invest in high quality content to get recognized by search engines. ",
    img: "/iamge/content-slider-img-2.webp",
  },
  {
    title: "Get Content from Experts",
    desc: " We help you get the content from experts to get the things written by those who have extensive experience. We ensure that you get your content on time, to get you the highest content possible..",
    img: "/iamge/market-serv-img-3 (1).webp",
  },
  {
    title: "Attractive Website for the Targeted Audiences",
    desc: " Driving more traffic to the website can lead to successful online business. We write website  content that keeps the visitors hooked on our website. Content writing services can help in  making website more convincing to the reader..",
    img: "/iamge/content-slider-img-1.webp",
  },
];

export default function CenterCardsSlider() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {logoData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#f9f9f9] rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center justify-center text-center h-[380px]"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
