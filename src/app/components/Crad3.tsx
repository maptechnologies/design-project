"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We get information regarding your message, aim, strategy and brand.",
  },
  {
    number: "02",
    title: "Script",
    desc: "We take your message and boil it down to a story that can easily capture attention of audience.",
  },
  {
    number: "03",
    title: "Design",
    desc: "We create a language that is visually understandable and can give life to your vision.",
  },
  {
    number: "04",
    title: "Storyboard",
    desc: "We select and match suitable voice to picture so that they work together.",
  },
  {
    number: "05",
    title: "Animation",
    desc: "We bring the characters and other visuals to life with animation and movement.",
  },
  {
    number: "06",
    title: "Final Design",
    desc: "At the final stage, we add sound effects and music to help the image land. Your video is ready to deliver!",
  },
];

const AnimationProcess = () => {
  return (
    <section className="bg-white py-16 text-white px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Our <span className="text-sky-500">Video Animation</span> Process
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our process has no limitations and keeps you hooked at every single step.
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
