"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "In Depth Audits",
    desc: "We mainly focus on the issues that can be restrict the stie from ranking on the top for your key terms. The issues can happen like problems with the site's code or the main stage like lack of content optimization and usability issues..",
  },
  {
    number: "02",
    title: "Link Risk Analysis",
    desc: "There are a lot of websites have been penalized because of keyword manipulation, link buildiing etc. We make sure this doesnt happen to your website by carrying out a complete audit of backlink profile and the overall website..",
  },
  {
    number: "03",
    title: "Competitive Audit",
    desc: "We made use of advanced techniques including lanuague processing, machine learning and language ontology to let your content stand out among the audience along with performing well in the search criteria..",
  },
  {
    number: "04",
    title: "Approval & Delivery",
    desc: "We develop a strategy along with the challenges that we can find in our audits. The strategy will be presented for your consideration and approal. After the approval of everything, you will get started!.",
  },
];

export default function AnimationProcess() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        <span className="text-sky-500">Process</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
       
      </p>

      {/* ✅ Scrollable Section */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-gray-100 py-4 justify-center px-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 w-[280px] sm:w-[320px] flex-shrink-0"
          >
            <div className="text-5xl font-extrabold text-sky-500 mb-3">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
