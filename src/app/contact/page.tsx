"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import ContactSection from "../components/Home-form";

export default function ContactHero() {
  return (
    <section
      className="relative w-full h-[900] overflow-hidden py-16 sm:py-20 lg:py-80 px-6 sm:px-10 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/iamge/design1.jpg')", // ✅ Make sure folder is /image not /iamge
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-white/90 text-sm sm:text-base tracking-widest uppercase mb-3">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            Get In Touch With
            <br />
            The Reliable Digital
            <br />
            Marketing Agency
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/quote"
              className="px-6 py-3 rounded-full bg-white text-[#17a2b8] font-semibold text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              Request a Quote
            </a>

            <a
              href="#live-chat"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1c1c] text-white font-semibold text-sm hover:bg-black transition-colors duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/iamge/design1.webp"
            alt="Customer support illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
      
    </section>
    
  );
}
