"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Components
import Brand2 from "../components/Service-text2";
import LOgoslider2 from "../components/Service-brand";
// import L0goslider3 from "../components/L0goslider3";
import Brand3 from "../components/Service-text3";
import StatsSection from "../components/Home-2package";
import Packeges3 from "../components/Service-packeges3";
import CTASection from "../components/Footer2";
import Port3 from "../components/Service-bar3";
import Testimonials from "../components/Home-testimonial";
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";
import Video from "../components/Home-video";
import Brand4 from "../components/Service-text4";
import LOgoslider4 from "../components/Service-vedeo-animation";
import Packeages4 from "../components/Service-packeages4";
import Crad3 from "../components/Service-animation-process";
import MajorFeatures from "../components/Service-animation-card";

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
            ✦Offering Engaging
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Animated Video
For <br />
            <span className="text-sky-300">Your Brand</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Websites Designs Agency is a full service video animation agency specializing in explainer videos that tells great stories and attracts audience towards your brand results in increased revenue generation.
          </motion.p>

          {/* Form Inputs */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-sky-400 w-full md:w-auto"
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
            src="/iamge/anim-banner-img-1.webp"
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

      {/* 🌈 PREMIUM RIGHT-SIDE POPUP */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white/10 border border-white/30 backdrop-blur-xl shadow-2xl rounded-3xl flex flex-col lg:flex-row overflow-hidden w-[90%] max-w-5xl"
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-sky-300 transition"
            >
              ✕
            </button>

            {/* 📝 LEFT SIDE FORM */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Get Your 70% Discount Coupon 🎁
              </h2>
              <p className="text-white/80 mb-6">
                Fill out this quick form and our team will contact you within minutes.  
                Let’s kickstart your dream project together!
              </p>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-sky-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-sky-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-sky-400 outline-none"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-sky-400 outline-none"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,150,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="mt-2 bg-gradient-to-r from-sky-500 to-indigo-600 py-3 rounded-full font-semibold text-white tracking-wide"
                >
                  Submit Now 🚀
                </motion.button>
              </form>
            </div>

            {/* 🌌 RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-indigo-700 to-sky-500 items-center justify-center overflow-hidden"
            >
              {/* Floating Lights */}
              <motion.div
                className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-[120px]"
                animate={{
                  x: [0, 50, -30, 0],
                  y: [0, 40, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src="/iamge/anim-banner-img-1.webp"
                alt="Popup Visual"
                className="relative z-10 w-[90%] h-auto object-contain drop-shadow-2xl rounded-2xl"
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  filter: "brightness(1.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* 🔽 Additional Sections */}
      <Brand4 />
      <LOgoslider4 />
      <MajorFeatures/>
      <StatsSection/>
      {/* <Packeages4/> */}
      {/* <Port3/> */}
       <Video/>
       <Crad3/>
      <CTASection/>
       
      <Testimonials/>
      <ContactForm/>
      <AnimatedContact/>
      <Footer/>
    </>
  );
}
