"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/iamge/marketing-content-serv-img-1.png",
    title: "Website Content Writing",
    desc: "When we talk about websites, the design that your website has is important as the content that your website houses. Our expert team of writers, has the ability to produce the best quality content for whatever services that you are providing. We produce exceptional content that is free from plagiarism and makes good use of keywords that are paying well in the related field..",
  },
  {
    img: "/iamge/content-serv-img-2.png",
    title: "Creative Content Writing",
    desc: "Our team for creative copywriting is well adept with the techniques to use storytelling to make web content more interesting that can otherwise sound monotonous. Creativity is about adding your own touch to the ubiquitous. The content that our team prepares for your gives a voice to your business..",
  },
  {
    img: "/iamge/content-serv-img-3.png",
    title: "Blog Writing",
    desc: "Blogging is the latest method of spreading news. It is one of the most powerful methods to make some information viral or the talk of the town. It is considered as a high value method of marketing and gaining popularity to your online as well as offline outlets. Our expert creative writers are pros at blog writing..",
  },
  {
    img: "/iamge/content-serv-img-4.png",
    title: "Article Writing",
    desc: "If you get below par sub quality content for your brand, you would be giving your customers the wrong impression about your business having content that just fails to make the impression. You need to take the opportunity your client is giving you as he reads your content and come up with stuff that glues them to their spot..",
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
