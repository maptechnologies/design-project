"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Order Requirements",
    desc: "Let us know about the content requirements quantity of pages and place your order. Give us detail about what kind of content you'd want us to create in limited time frame.",
  },
  {
    number: "02",
    title: "Expert Writing",
    desc: "Our writing team will develop original and high quality content for you. We will write compelling copy that is conversion focused and optimize it for SEO.",
  },
  {
    number: "03",
    title: "Approval",
    desc: "The last step is reviewing all the content we have created for you. We offer unlimited revisions at no additional cost to ensure that is ideal for you..",
  },
 
];

const AnimationProcess = () => {
  return (
    <section className="bg-white py-16 text-white px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
       How <span className="text-sky-500">it</span>Works
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
