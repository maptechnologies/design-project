"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logoData = [
  {
    title: "Abstract Mark",
    desc: "Abstract logos are a popular type of logo design for small businesses to large brands. Abstract logos if done well are often simple in nature, making them perfect for clean and memorable logos.",
    img: "/iamge/logo-serv-img-1.png",
  },
  {
    title: "Letter Based Logos",
    desc: "Our templates for emblem logos are adequately professional as well as graphically illustrative. With our years on experience in the industry, we can draft the perfect logo for you in no more than 50 minutes.",
    img: "/iamge/logo-serv-img-2.png",
  },
  {
    title: "Emblem Logos",
    desc: "This logo range relies on typography rather than much iconography to get the message across. These logos make use of letters to be creative.",
    img: "/iamge/logo-serv-img-3.png",
  },
  {
    title: "Wordmark Mark",
    desc: "Wordmark logo designs use bold typography to directly get the message across using the corporation or brand name. This type of logo designing requires good understanding of fonts and custom formatting.",
    img: "/iamge/logo-serv-img-4.png",
  },
  {
    title: "Wordmark Mark",
    desc: "Wordmark logo designs use bold typography to directly get the message across using the corporation or brand name. This type of logo designing requires good understanding of fonts and custom formatting.",
    img: "/iamge/logo-serv-img-5.png",
  },
];

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
