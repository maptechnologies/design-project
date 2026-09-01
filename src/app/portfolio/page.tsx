"use client";

import React from "react";
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";
import Portfolio from "../components/Home-work";
import StatsSection from "../components/Home-2package";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative w-full h-[900px] bg-cover bg-center flex  justify-center"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')", // ✅ Make sure folder is /image not /iamge
        }}
      >
        {/* ✅ Centered Image on top of background image */}
        <img
          src="/iamge/design1.webp" // ✅ Replace with your overlay image name
          alt="Center Overlay"
          className="absolute inset-0 m-auto z-10 max-w-[90%] max-h-[80%] w-auto h-auto object-contain"
        />

        {/* Content */}
        <div className="relative z-20 text-center backdrop rounded-xl shadow-lg px-2 py-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-extrabold text-white">
            <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
              CREATING BRAND
              <br />
              FOCUSED CREATIVE
              <br />
              SOLUTIONS
            </span>
          </h1>
        </div>
      </section>

      <div>
        <Portfolio />
        <StatsSection />
        <ContactForm />
        <AnimatedContact />
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;