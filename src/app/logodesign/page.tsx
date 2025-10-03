'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/page";
import StatsSection from "../components/Hitting";
import Logotypesslider from "../components/Logotypesslider";
import Packages1 from "../components/Packages1";
import PackagesTailwind from "../components/Packages1";
import Card1 from "../components/Portone";
import Portone from "../components/Portone";
import Work from "../components/Work";
import Testimonials from "../components/Testimonial";
import ContactForm from "../components/Form";
import AnimatedContact from "../components/Contact";
import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonial";

export default function HeroSection() {
  useEffect(() => {
    // Optional animation JS agar chaho toh
  }, []);

  return (
    <><div className="relative bg-blue from-green via-yellow-100 to-green-300 py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden">

          {/* Left Content */}
          <div className="max-w-xl z-10">
              <p className="uppercase text-sm font-semibold tracking-wide text-white-700 mb-2">
                  Offering Engaging
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-smokewhite-900 leading-tight">
                  Logo Design <br /> For Your Brand
              </h1>
              <p className="text-white-700 mt-4 text-lg leading-relaxed">
                  Work with professional designers to create unique and attractive logos
                  that elevate your brand identity. Let us help you take your business
                  to new heights with custom logo design.
              </p>

              {/* Form */}
              <div className="mt-8 flex flex-col md:flex-row gap-3">
                  <input
                      type="text"
                      placeholder="Name"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto" />
                  <input
                      type="text"
                      placeholder="Phone Number"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto" />
                  <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 w-full md:w-auto" />
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-800 transition">
                      Submit Now
                  </button>
                  <button className="px-6 py-3 bg-white/30 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:bg- transition flex items-center gap-2">
                      💬 Live Chat
                  </button>
              </div>
          </div>

          {/* Right Logo Circle Animation */}
          <div className="relative w-[350px] h-[350px] mt-12 lg:mt-0">
              <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 rounded-full flex items-center justify-center"
              >
                  {/* Circle Logos */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <img src="/iamge/istockphoto-2168229224-612x612.jpg" alt="logo1" className="w-25 h-25 rounded-full shadow-lg" />
                  </div>
                  <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                      <img src="/iamge/port-img-1.webp" alt="logo2" className="w-25 h-25 rounded-full shadow-lg" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <img src="/iamge/process-img-1.webp" alt="logo3" className="w-25 h-25 rounded-full shadow-lg" />
                  </div>
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <img src="/iamge/istockphoto-1487069717-612x612.jpg" alt="logo4" className="w-25 h-25 rounded-full shadow-lg" />
                  </div>
              </motion.div>

              {/* Center Main Logo */}
              <div className="absolute inset-0 flex items-center  justify-center">
                  <img src="/iamge/logo-banner-img.webp" alt="main logo" className="w-32 h-32 bg- rounded-full shadow-xl" />
              </div>
          </div>

      </div><div>
        <AnimatedSection/>
    <Logotypesslider/>
        <StatsSection/>
        <PackagesTailwind/>
        <Portone/>
        <Work/>
        <ContactForm/>
        <AnimatedContact/>
        <Footer/>
          </div></>
  );
}
