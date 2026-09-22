"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

// Components
import Brand2 from "../components/Service-text2";
import AnimatedSection from "../components/Service-text3";



export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", {
      name,
      phone,
      email,
    });

    setIsFormOpen(true);
  };

  return (
    <>
  <div className="flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden py-20 sm:py-20 md:py-16 lg:py-14">
            {/* Background image */}
            <Image
              src="/iamge/design1.jpg"
              alt=""
              fill
              priority
              className="-z-10 object-cover"
            />
  
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 -z-10 bg-black/15" />
  
            <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 mt-14 px-4 sm:px-6 sm:mt-18 md:mt-18 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8 lg:gap-1">
              {/* Left: copy + form */}
              <div className="flex w-full flex-col items-center text-center text-white sm:items-start sm:text-left md:w-[64%]">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm md:text-base">
                OFFERING ECOMMERCE SERVICES YOU
                </p>
  
                <h1 className="mt-2 text-3xl font-bold leading-tight font-sans-serif sm:text-4xl md:text-5xl lg:text-5xl">
                 need to start 
                  <br />
                selling online in minutes
                </h1>
  
                <p className="mt-4 max-w-md text-sm font-sans-serif text-white/90 sm:mt-5 sm:text-md md:text-base">
                  We provide e-commerce services, redesigning and blogs that are needed to accelerate your business growth. We help you build a digital brand successfully to improve the overall services.
                </p>
  
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex w-full max-w-md flex-col items-center gap-4 sm:mt-8 sm:items-start"
                >
                  <div className="flex w-full flex-col overflow-hidden rounded-md bg-white shadow-sm sm:flex-row">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-[#312d2f] px-4 py-3 text-sm text-gray-700 outline-none sm:w-1/3 sm:border-b-0 sm:border-r"
                    />
  
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-b border-[#312d2f] px-4 py-3 text-sm text-gray-700 outline-none sm:w-1/3 sm:border-b-0 sm:border-r"
                    />
  
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 text-sm text-gray-700 outline-none sm:w-1/3"
                    />
                  </div>
  
                  <div className="flex w-full flex-row flex-wrap justify-center gap-3 sm:justify-start">
                    <button
                      type="submit"
                      className="rounded-full bg-[#312d2f] px-6 py-2 text-xs font-bold font-serif text-white transition hover:bg-white hover:text-[#59adbe] border-2 sm:px-8 sm:py-1 sm:text-sm"
                    >
                      Submit Now
                    </button>
  
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full bg-[#312d2f] px-4 py-2 text-xs font-bold font-serif text-white transition hover:bg-white hover:text-[#59adbe] border-2 sm:text-sm"
                    >
                      <MessageCircle size={16} />
                      Live Chat
                    </button>
                  </div>
                </form>
              </div>
  
              {/* Right: logo bubble collage image */}
              <div className="flex w-full items-center justify-center md:w-[46%] md:justify-end">
                <Image
                  src="/iamge/43463464.webp"
                  alt="Logo design examples"
                  width={620}
                  height={545}
                  priority
                  className="hero-floating-image h-auto w-full max-w-[220px] object-contain xs:max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>
            </div>
  
            {/* Floating animation */}
            <style jsx>{`
              .hero-floating-image {
                animation: heroFloat 4s ease-in-out infinite;
                will-change: transform;
              }
  
              @keyframes heroFloat {
                0%,
                100% {
                  transform: translateY(0px);
                }
  
                50% {
                  transform: translateY(-12px);
                }
              }
            `}</style>
          </section>
        </div>

      {/* 🔽 Additional Sections */}
      <AnimatedSection/>
    </>
  );
}