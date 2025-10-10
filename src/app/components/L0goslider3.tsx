"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logoData = [
  {
    title: "Reach New Customers",
    desc: "Reach New Customerse-Commerce selling can take on many different formats and each channel has its own unique audience that can be reached by sellers. e-Commerce sites can help you reach many international shoppers and social sites can reach new demographics.",
    img: "/iamge/web-content-serv-img-1.png",
  },
  {
    title: "Content Marketing Strategy",
    desc: "An online presence allows you to provide much needed information about your products and services to customers. e-Commerce provides more information regarding your business and how to use your products. Email marketing can be linked with brand's story..",
    img: "/iamge/web-content-serv-img-2.png",
  },
  {
    title: "Serve Niche Markets",
    desc: "e-Commerce makes serving niche markets even easier. Serving a niche market is easier to distribute products online and open your business to a greater depth of consumers. They have complete purchases and e-Commerce makes it easier to hit that buy button.",
    img: "/iamge/web-content-serv-img-3.png",
  },
  {
    title: "Acquire New Customers with Search Engine Visibility",
    desc: "Online retail is driven by traffic from search engines and it is common for customers to follow certain link in search engine results and land on e-Commerce website. The additional source of traffic can become the major source for some e-Commerce businesses..",
    img: "/iamge/web-content-serv-img-4.png",
  },
]

export default function LogoTypesSlider() {
  return (
    <div className="py-14 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center"></h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {logoData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#f9f9f9] p-6 rounded-xl shadow hover:shadow-lg transition h-full text-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-black">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
