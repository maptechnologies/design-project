"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/iamge/marketing-content-serv-img-1.png",
    title: "Boost Brand Awareness",
    desc: "We offer social media marketing services that will elevate your brand profile and improve the overall performance of your business..",
  },
  {
    img: "/iamge/marketing-content-serv-img-2.png",
    title: "Drive Engagement",
    desc: "We make use of social power to your business so it allows you to interact with audiences directly, customers along with stakeholders. We can support you to carry online discussions successfully..",
  },
  {
    img: "/iamge/marketing-content-serv-img-3.png",
    title: "Share Your Experiences",
    desc: "You have great experiences and stories to share with us. Your milestones, business insights & tribulations, great content can be shared with everyone by social platforms..",
  },
  {
    img: "/iamge/marketing-content-serv-img-4.png",
    title: "Get Potential Leads",
    desc: "We can help you the digital content that works for you. We are one of the leading social media marketing agencies offering outstanding norms and creative strategies that allows you recognize prospects and converts them into customers..",
  },
];

const MajorFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Our Social Media  <span className="text-sky-500">Strategy Elevates</span>Your Business
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
