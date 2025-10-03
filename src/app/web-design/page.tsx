'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";

// Components
import Brand from "../components/Brand";
import LOgoslider2 from "../components/LOgoslider2";
import StatsSection from "../components/Hitting";
import Package2 from "../components/Package2";
import Port2 from "../components/Port2";
import WorkProcess from "../components/Process";
import Testimonials from "../components/Testimonial";
import ContactForm from "../components/Form";
import AnimatedContact from "../components/Contact";
import Footer from "../components/Footer";
import CTASection from "../components/Footer2";
import Brand2 from "../components/Brand2";

export default function HeroSection() {
  useEffect(() => {
    // Optional effects
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 via-white to-gray-500 text-black py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden">

        {/* Left Content */}
        <div className="max-w-xl z-10 text-center lg:text-left">
          <p className="uppercase text-sm font-semibold tracking-wide text-white-700 mb-2">
            Offering Engaging
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Website Design & Development<br />
          </h1>
          <p className="text-black mt-4 text-lg leading-relaxed">
            Our website design services help you convert your website to calls, sales and leads. Our modern web design services are designed to grow your business and leave an everlasting impression.
          </p>

          {/* Form */}
          <div className="mt-8 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg border border-black-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto"
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

        {/* Right Side Image with New Animation */}
        <div className="relative w-[300px] h-[300px] mt-16 lg:mt-0 flex items-center justify-center">
          <motion.img
            src="/iamge/web-design-banner-img.webp" // ✅ Make sure path is correct
            alt="Web Design"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>

      {/* Additional Sections */}
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
