'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Brand from "../components/Service-text1";
import LOgoslider2 from "../components/Service-brand";
import StatsSection from "../components/HomeHitting";
import Package2 from "../components/Service-package2";
import CTASection from "../components/Footer2";
import Port2 from "../components/Service-bar2";
import WorkProcess from "../components/Home-process";
import ContactForm from "../components/Home-form";
import Testimonials from "../components/Home-testimonial";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";

export default function HeroSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Optional effects
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // TODO: apni submit logic yahan likhein (API call, etc.)
    console.log({ name, phone, email });
  };

  return (
    <>
      <div className="  flex-col lg:flex-row items-center justify-between overflow-hidden">
        <section className="relative flex min-h-screen w-full items-center overflow-hidden py-16 sm:py-20 md:py-14">
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

          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-2 mt-18 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-1 lg:px-8">
            {/* Left: copy + form */}
            <div className="flex w-full flex-col items-center text-center text-white sm:items-start sm:text-left md:w-[64%]">
              <p className="text-sm font-3xl uppercase tracking-wide text-white/90 md:text-base">
              GARNER THE ATTENTION AND CUSTOMERS
              </p>

              <h1 className=" text-2xl font-bold leading-tight font-sans-serif sm:text-5xl lg:text-5xl">
               That You Want With
                <br />
               Our Branding <br/>Solutions
              </h1>

              <p className="mt-5 max-w-md text-md font-sans-serif  text-white/90 md:text-base">
                We deliver high quality branding services. Our services are well designed and we fulfill creative marketing needs of our customers that is the powerful way engaging more clients.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex w-full max-w-md flex-col items-center gap-4 sm:items-start"
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

                <div className="flex w-full flex-row  justify-center gap-3 sm:justify-start">
                  <button
                    type="submit"
                    className="rounded-full bg-[#312d2f] px-8 py-1 text-sm font-bold font-serif text-white hover:text-[#00a8e7] transition border-2 hover:bg-white"
                  >
                    Submit Now
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full bg-[#312d2f] px-4 py-2 text-sm font-semibold text-white transition border-2 hover:bg-neutral-800"
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
                src="/iamge/mobile-00.webp"
                alt="Logo design examples"
                width={620}
                height={545}
                priority
                className="hero-floating-image h-auto w-full max-w-[280px] object-contain sm:max-w-sm md:max-w-md lg:max-w-lg"
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

      <Brand />
      <LOgoslider2 />
      <StatsSection />
      <Package2 />
      <Port2 />
      <WorkProcess />
      {/* <Footer2/> */}
      <CTASection />
      <Testimonials />
      <ContactForm />
      <AnimatedContact />
      <Footer />
    </>
  );
}