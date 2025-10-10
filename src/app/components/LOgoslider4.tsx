"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logoData = [
  {
    title: "2D CHARACTER ANIMATION",
    desc: "Our expertise in the area has honed us to know well what exactly it takes to make abusiness a well-established organization. A good business is developed by customers andincreased product demand. our clients have testified to increased interest in theirproducts once they started using our 2d animated videos for their business.",
    img: "/iamge/anim-slider-img-1 (1).webp",
  },
  {
    title: "2D GRAPHICS ANIMATION",
    desc: "Our animators are adept in bringing simple everyday 2d products and your brand to life.Thus an animated character whether used as a mascot or just for the purpose of making itmore intriguing can be a major piece of attention for the audience. With the use ofradiant colors, interesting characters and dynamic animations, you get the perfect animated graphics..",
    img: "/iamge/anim-slider-img-2 (1).webp",
  },
  {
    title: "EXPLAINER VIDEO ANIMATION",
    desc: "We hire only the best, training them further to be even better. Hence our talented designers and animators are able to craft customized explainer videos for you based on your target market and prospective buyer. Our tastefully crafted videos not only carry the message across but also make sure to convince the spectators of the video. Our videos are concise and comprehensive.",
    img: "/iamge/anim-slider-img-3 (1).webp",
  },
  {
    title: "WHITEBOARD ANIMATION",
    desc: "Whiteboard animations are very common with formal videos. especially such where businessmen are trying to explain their ideas or reports in presentations or explanatory videos. Our animators are experts at whiteboard animations as it needs certain amount of practice to get one adapt with the complexities of whiteboard animations. Fortunately the designers and animators at Websites Designs Agency with their hundreds of projects have the required experience to satisfy your needs..",
    img: "/iamge/anim-slider-img-1 (1).webp",
  },
  {
    title: "INTERACTIVE 3D ANIMATION",
    desc: "Amongst the many projects and videos that we have delivered that make us proud are our highly technical and challenging 3d animations. Many of our projects demand 3 dimensional video animations that require mastery and expertise of a different cadre. Whether its 3d logo animations, 3d video animations or 3d characters, our designers won’t hesitate a second..",
    img: "/iamge/anim-slider-img-2 (1).webp",
  },
  {
    title: "TYPOGRAPHY ANIMATION",
    desc: "Simple text can be boring. you’d want your business to be anything but boring I tell you.Typography animated videos are an intriguing way of communicating text and informationin numbers. For people who are looking forward to delivering heavy messages throughtext, our topography animation services are just what you are look.",
    img: "/iamge/anim-slider-img-3 (1).webp",
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
