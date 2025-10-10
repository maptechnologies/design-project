"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/iamge/seo-content-serv-img-1.png",
    title: "Technical Seo",
    desc: "We have full-time technical SEOs who are experienced with data analysis background, web development and programming. We are expert at enterprise-level technical SEO as well..",
  },
  {
    img: "/iamge/seo-content-serv-img-2.png",
    title: "Content",
    desc: "We also take care of content writing needs and the arrangement of words on your website. Content plays the majro role in SEO. We take an effective approach in the development of effective strategy..",
  },
  {
    img: "/iamge/seo-content-serv-img-3.png",
    title: "Local SEO",
    desc: "SEO is required to reach customers in specific geographic locations. We emphasize on providing strong signals to Google that focuses on the aimportance to your geographical area..",
  },
  {
    img: "/iamge/seo-content-serv-img-4.png",
    title: "Link Building",
    desc: "We mainly focus on developing long term and high quality strategies that revolve around compelling content, authentic and equitable relationships that ensure consistent traffic from domains in the authority..",
  },
];

const MajorFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
         <span className="text-sky-500"></span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        
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
