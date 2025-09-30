"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/Form";
import AnimatedContact from "../components/Contact";
import Footer from "../components/Footer";

const ContactSection: React.FC = () => {
  return (
    <><section className="relative w-full bg--to-r from-gray-100 to-green-100 py-30 px-8 flex flex-col md:flex-row items-center justifycontant-center overflow-hidden">

          {/* Left Side Text */}
          <div className="md:w-1/2 space-y-4">
              <p className="text-white text-bold uppercase tracking-wide">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white-800 leading-snug">
                  Get In Touch With <br />
                  The Reliable Digital <br />
                  Marketing Agency
              </h2>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                  <button className="px-5 py-3 rounded-full bg-white border text-teal-600 shadow hover:bg-teal-600 hover:text-white transition">
                      Request a Quote
                  </button>
                  <button className="px-5 py-3 rounded-full bg-black text-white shadow hover:bg-gray-800 transition">
                      Live Chat
                  </button>
              </div>
          </div>

          {/* Right Side Image with Animation */}
          <motion.div
              className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                  duration: 1,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse"
              }}
          >
              <img
                  src="/iamge/contact-banner-img.webp" // 👈 yahan apni image ka path lagao
                  alt="Contact Illustration"
                  className="max-w-md w-full" />
          </motion.div>
      </section><div>
        <ContactForm/>
        <AnimatedContact/>
        <Footer/>
        </div></>
  );
};

export default ContactSection;
