"use client";

import React from "react";
import { Phone } from "lucide-react";

const AnimatedContact: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 animate-gradient-x">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-4">
          <p className="uppercase text-xs sm:text-sm opacity-80">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug">
            Let’s write your <br /> story, together.
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4">
          <p className="text-xs sm:text-sm md:text-base max-w-md text-center md:text-left">
            We do not tell you our own story. We write it together. Partnering
            with us means a seat at the table where your voice will be heard.
          </p>

          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-white-800 rounded-full font-semibold shadow-md hover:opacity-88 transition">
            Contact Us
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <p className="font-bold text-sm sm:text-base">(313) 512-9347</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedContact;
