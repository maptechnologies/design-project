"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Components
import Brand2 from "../components/Service-text2";
import LOgoslider2 from "../components/Service-brand";
import StatsSection from "../components/HomeHitting";
import Package2 from "../components/Service-package2";
import Port2 from "../components/Service-bar2";
import WorkProcess from "../components/Home-process";
import Testimonials from "../components/Home-testimonial";
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import CTASection from "../components/Footer2";
import Footer from "../components/Home-footer";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-300 to-white text-black py-28 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between">

        {/* 🌌 Moving Background Light */}
        <motion.div
          className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[140px]"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ✨ Floating Light on Right */}
        <motion.div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-400/30 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          className="relative z-10 max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="uppercase text-sm font-semibold tracking-[4px] text-white/90 mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✦ Creative Digital Studio
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Website Design & <br />
            <span className="text-sky-300">Development Experts</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our website design services help you convert your website into calls,
            sales, and leads. Our modern web design services are built to grow your
            business and leave a lasting impression.
          </motion.p>

          {/* 💬 Form Inputs */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
            />
          </motion.div>

          {/* 🚀 Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255,255,255,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-semibold tracking-wide"
            >
              Submit Now
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/20 border border-white/40 text-white rounded-full font-semibold tracking-wide"
            >
               Live Chat
            </motion.button>
          </motion.div>

          {/* 🌟 Popup Button Centered Below Text */}
          <div className="mt-10 flex justify-center">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ffffff33",
                boxShadow: "0 0 20px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg backdrop-blur-lg"
            >
              Get a Free Quote
            </motion.button>
          </div>
        </motion.div>

        {/* 🪩 RIGHT IMAGE ANIMATION */}
        <motion.div
          className="relative z-10 w-[480px] h-[480px] mt-16 lg:mt-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 120 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <motion.img
            src="/iamge/web-design-banner-img.webp"
            alt="Website Design"
            className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
            whileHover={{
              scale: 1.08,
              rotate: 3,
              filter: "brightness(1.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* 🧊 POPUP FORM */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center text-green mb-4 text-indigo-700">
            get your coupon & avail 70% discount
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border-black text-black rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                className="px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button
                type="submit"
                className="mt-3 bg-indigo-600 text- py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* 🔽 Additional Sections (restored) */}
      <Brand2 />
      <LOgoslider2 />
      <StatsSection />
      <Package2 />
      <Port2 />
      <WorkProcess />
      <CTASection />
      <Testimonials />
      <ContactForm />
      <AnimatedContact />
      <Footer />
    </>
  );
}
