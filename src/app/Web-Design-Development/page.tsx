"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

// Components
import Brand2 from "../components/Service-text2";
import LOgoslider2 from "../components/Service-brand";
// import StatsSection from "../components/HomeHitting";
import Package2 from "../components/Service-package2";
import Port2 from "../components/Service-bar2";
import WorkProcess from "../components/Home-process";
import Testimonials from "../components/Home-testimonial";
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import CTASection from "../components/Footer2";
import Footer from "../components/Home-footer";
import StatsSection from "../components/Home-2package";
import AnimationProcess from "../components/Service-animation-process";
import LogoTypesGrid from "../components/dev-card-slider";
import PackagesTailwind from "../components/Service-package2";
import PortfolioGrid from "../components/Service-bar3";
import LogoDesign from "../components/Service-bar3";

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
  <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden py-16 sm:py-20 md:py-16 lg:py-14">
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

    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
      
      {/* Left: copy + form */}
      <div className="flex w-full flex-col items-center text-center text-white sm:items-start sm:text-left lg:w-[52%]">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm md:text-base">
          Offering Engaging
        </p>

        <h1 className="mt-2 text-3xl font-bold leading-tight font-sans-serif sm:text-4xl md:text-5xl lg:text-5xl">
          Website Design
          <br />
          & Development
        </h1>

        <p className="mt-4 max-w-md text-sm font-sans-serif text-white/90 sm:mt-5 sm:text-base md:text-base">
          Our website design services help you convert your website to calls, sales and leads. Our modern web design services are designed to grow your business and leave an everlasting impression.
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
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 rounded-full bg-[#312d2f] px-4 py-2 text-xs font-bold font-serif text-white transition hover:bg-white hover:text-[#59adbe] border-2 sm:text-sm"
            >
              <MessageCircle size={16} />
              Live Chat
            </button>
          </div>
        </form>
      </div>

      {/* Right: Bigger Image */}
      <div className="flex w-full items-center justify-center lg:w-[48%] lg:justify-end">
        <Image
          src="/iamge/dev-90900.webp"
          alt="Logo design examples"
          width={750}
          height={650}
          priority
          className="hero-floating-image h-auto w-500 max-w-[300px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[650px] object-contain"
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
      <Brand2 />
     <LogoTypesGrid/>
     <StatsSection/>
      <PackagesTailwind/>
      <LogoDesign/>
      <CTASection />
      <Testimonials />
      <ContactForm />
      <AnimatedContact />
      
      
    </>
  );
}