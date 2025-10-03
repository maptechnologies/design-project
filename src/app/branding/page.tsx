'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    // Optional effects
  }, []);

  return (
    <div className="relative bg-black via-yellow-100 to-green-300 py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden">

      {/* Left Content */}
      <div className="max-w-xl z-10 text-center lg:text-left">
        <p className="uppercase text-sm font-semibold tracking-wide text-white-700 mb-2">
         GARNER THE ATTENTION AND CUSTOMERS
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white-900 leading-tight">
          That You Want With Our Branding Solutions<br /> 
        </h1>
        <p className="text-white mt-4 text-lg leading-relaxed">
         We deliver high quality branding services. Our services are well designed and we fulfill creative marketing needs of our customers that is the powerful way engaging more clients.
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition">
            Submit Now
          </button>
          <button className="px-6 py-3 bg-white/30 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:bg-white transition flex items-center gap-2">
            💬 Live Chat
          </button>
        </div>
      </div>

      {/* Right Animated Phone in Circle */}
      <div className="relative w-[300px] h-[300px] mt-16 lg:mt-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src="/iamge/branding-mockup.webp" // ✅ Make sure this image exists
            alt="Animated Phone"
            className="w-40 h-auto object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Circle Border */}
        <div className="absolute inset-0 border-4 border-dashed border-white-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
