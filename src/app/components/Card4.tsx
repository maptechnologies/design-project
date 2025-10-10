"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Virtual Marketing",
    desc: "With our custom virutal marketing services, your business can easily reach out to the target audience based on your preferred demographics..",
  },
  {
    number: "02",
    title: "Facebook Account Management",
    desc: "Facebook has a huge customer based and is one of the reliable platforms to promote your brand all over the world. Our soltions can help you manage the entire process in a flawless manner..",
  },
  {
    number: "03",
    title: "Twitter Account Management",
    desc: "Twitter has a pool of intellectual audience that can be attracted only with the suitable strategy. Manage your Twitter account and wich rich content is the only way to make yourself successful and we can help you with that..",
  },
  {
    number: "04",
    title: "Linkedin Account Management",
    desc: "From Pinterest, Linkedin to other social media accounts, our social media experts and writers take hold of all social media platforms to leave an ever lasting impact on your business..",
  },
  {
    number: "05",
    title: "Youtube Channel Management",
    desc: "Visual content is of significant importance and it allows to communicate with your clients in present and future scenario. Youtube channel gets the most crowd and we build content plan that is entertaining, engaging and enticing..",
  },
  {
    number: "06",
    title: "Instagram Campaign Management",
    desc: "Our instagram campaign management service is ideal for all kinds of business. We can make your instagram go live and make sure to offer an account that gets more presence and credibility.",
  },
];

const AnimationProcess = () => {
  return (
    <section className="bg-white py-16 text-white px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Social  <span className="text-sky-500">Media</span>Management 
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
       
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 border border-gray-100 text-black rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl font-extrabold text-white-200 mb-3">{step.number}</div>
            <h3 className="text-xl font-bold text--500 mb-2">{step.title}</h3>
            <p className="text-white-600 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimationProcess;
