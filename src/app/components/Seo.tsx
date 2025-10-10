"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Our SEO Strategy Timeline",
    desc: "Our SEO strategy is of no use if it doesnt align with your marketing objectives which is why discuss and setup your SEO objectives with you..",
  },
  {
    number: "2",
    title: "Proper SEO Analysis",
    desc: "Analyzing your website is the next big step which will be taken by us, to list down all major changes before starting the work..",
  },
  {
    number: "3",
    title: "Targeted Keyword Research",
    desc: "Our experts look for the most suitable keywords that are in accordance with the target market ensuring the SEO strategy is supporting your objective.",
  },
  {
    number: "4",
    title: "On Page Optimization",
    desc: "After the keyword research, our on page SEO experts take care of the SEO requirements along with the keyword integration prcoess..",
  },
  {
    number: "5",
    title: "Link Building",
    desc: "Developing your website's authority is the next big step that we can take which can be assisted further by our SEO experts..",
  },
  {
    number: "6",
    title: "Tracking & Reporting",
    desc: "We help you stay in the process with the step by step consultation along with the complete insights by helping you analyze the efforts.",
  },
];

export default function SEOTimeline() {
  return (
    <section className="bg-gradient-to-b from-sky-600 to-sky-400 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our <span className="text-yellow-300">SEO Strategy</span> Timeline
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/40 h-full rounded"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="bg-white text-gray-800 rounded-2xl p-6 md:w-[45%] shadow-lg hover:shadow-2xl transition-all">
                <h3 className="text-xl font-bold mb-2 text-sky-600">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Number Circle */}
              <div className="flex items-center justify-center w-14 h-14 bg-yellow-400 text-gray-900 text-xl font-bold rounded-full shadow-lg z-10 md:mx-4 my-6 md:my-0">
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
