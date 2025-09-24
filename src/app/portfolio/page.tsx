"use client";
import React from "react";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/Form";
import AnimatedContact from "../components/Contact";
import Footer from "../components/Footer";
import StatsSection from "../components/Hitting";

const HeroSection: React.FC = () => {
  return (
    <><section
          className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center"
          style={{
              backgroundImage: "url('/iamge/istockphoto-1591225732-612x612.webp')", // ✅ Correct path
          }}
      >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10 text-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg px-6 py-6 max-w-3xl w-full">
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      Design That Inspires
                  </span>
              </h1>

              {/* Subheading */}
              <p className="mt-3 text-white text-sm sm:text-base md:text-lg">
                  We create bold, modern & immersive digital experiences that{" "}
                  <span className="text-pink-400 font-semibold">connect</span> with your audience.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-md hover:scale-105 transition">
                      🚀 Get Started
                  </button>
                  <button className="px-6 py-2 rounded-full bg-white/90 text-black text-sm sm:text-base font-semibold shadow-md hover:bg-white transition hover:scale-105">
                      🎨 View Portfolio
                  </button>
              </div>
          </div>
      </section><div>
              {/* portfolio */}
              <Portfolio />

              {/* StatsSection */}
              <StatsSection/>

              {/* ContactForm */}
              <ContactForm/>

              {/* AnimatedContact */}
              <AnimatedContact/>

              {/* Footer */}
              <Footer/>
          </div></>
  );
};



export default HeroSection;
