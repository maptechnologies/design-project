"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logoData = [
  {
    title: "Logo Designs",
    desc: "Logo designs are seen as somewhat of a not so important thing by some of the newbies, but for our experienced brand managers, we know the importance it holds. with our years on experience in the industry and dozens of satisfied customers we draft the perfect logo for you in no more than 50 minutes.",
    img: "/iamge/branding-content-serv-img-1.png",
  },
  {
    title: "Infographic Designs",
    desc: "Conveying complex ideas and factual information becomes quite difficult sometimes, especially if lengthy. an easy way out of such laborious and complicated piles of information is an infographic. we work together with clients to sum up complicated information and numbers in one colorful and interesting infographic..",
    img: "/iamge/branding-content-serv-img-2.png",
  },
  {
    title: "Brochure Designs",
    desc: "Brochures are harbingers of important information of products and brands and hence hold pivotal importance in the branding of any product. they have the potential of making or breaking a brand. hence, our designers who are adept in branding too, know how to design the brochures perfectly..",
    img: "/iamge/branding-content-serv-img-3.png",
  },
  {
    title: "Stationery Design",
    desc: "Our stationery design package offers a comprehensive stationery set design that includes paper, office supplies, letterheads, writing equipment, business cards, cases, and other similar items. the purpose of this stationery package is to paint up the whole collection of items in the same brand image..",
    img: "/iamge/branding-content-serv-img-4.png",
  },
  {
    title: "Online Promotional Design",
    desc: "When we say we own our clients and their work, we really mean it. We make sure we promote your business in the most noticeable way. With our online reputation management services, we make sure of the fact that whether it is your branding or social media posts that we are designing for, your brand soul is reflected in it with amazing designs..",
    img: "/iamge/branding-content-serv-img-3.png",
},
{
    title: "Trade Show Design",
    desc: "Our custom designs are always crafted keeping in mind the ambition of making them memorable and impactful. The same scheme is applied when it comes to trade designs as well, as we craft impressions that last a lifetime through designs that are inspiring and appealing, our designs bring engagement and customers to your products from your desired audience wherever you are in the world..",
    img: "/iamge/branding-content-serv-img-4.png",
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
