"use client";

import React from "react";
import "animate.css";
import { div } from "framer-motion/client";
import StatsSection from "../components/Home-2package";
import WorkProcess from "../components/Home-process";
import Awards from "../components/Home-awards";
import DigitalAgencySection from "../components/Home-digital";
import Testimonials from "../components/Home-testimonial";
import ContactSection from "../components/Home-form";
import CtaBanner from "../components/Home-contact";

// ---------------- ABOUT HERO SECTION ----------------
const AboutHero: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* ✅ Hero Banner */}
      <div
        className="relative bg-cover bg-center min-h-[70vh] md:min-h-216 flex items-center justify-center overflow-hidden px-4 sm:px-6"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b"></div>

        {/* Left Side Image — anchored to the bottom, like a standing cutout */}
        {/* <img
          src="/iamge/image__1_-removebg-preview.png"
          alt="Hero Left"
          className="hidden md:block absolute left-2 lg:left-8 xl:left-16 bottom-0 w-40 sm:w-52 lg:w-72 xl:w-96 h-[85%] object-contain object-bottom z-10 animate__animated animate__fadeInLeft"
        /> */}

        {/* Right Side Image — anchored to the bottom, like a standing cutout */}
        {/* <img
          src="/iamge/image__1_-removebg-preview (1).png"
          alt="Hero Right"
          className="hidden md:block absolute right-2 lg:right-8 xl:right-0 bottom-0 w-40 sm:w-52 lg:w-72 xl:w-96 h-[85%] object-contain object-bottom z-10 animate__animated animate__fadeInRight"
        /> */}

        <div className="relative text-center max-w-3xl animate__animated animate__fadeInUp z-20 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            WE ARE MORE THAN JUST AN AVERAGE BRAND AGENCY
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-white">
            We develop a strong brand identity that connects{" "}
            <br className="hidden sm:block" />
            with your audience!
          </p>
          <button className="mt-6 bg-white text-[#444245] px-6 py-2 rounded-full shadow hover:bg-[#444245] hover:text-white transition font-semibold">
            Read More
          </button>
        </div>
      </div>

      {/* ✅ Experience Section — collage / copy / photo */}
      <section className="relative bg-white py-14 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        {/* fixed-style vertical "Design" tab on the far left, like the live site */}
        {/* <span
          className="hidden lg:flex absolute left-0 top-0 h-full items-center bg-neutral-900/90 px-3 text-2xl font-semibold tracking-wide text-white/70"
          style={{ writingMode: "vertical-rl" }}
        >
          Design
        </span> */}
            
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr_1fr] gap-10 md:gap-12 items-center">
          {/* Left — portfolio collage */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm animate__animated animate__fadeInLeft">
            <img
              src="/iamge/design1.webp"
              alt="Bloops Design portfolio collage"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Middle — copy */}
          <div className="animate__animated animate__fadeInUp max-w-xl mx-auto text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
              Experienced
              <br className="hidden sm:block" /> Award-Winning
              <br className="hidden sm:block" /> Certified Company
            </h2>

            <p className="mt-6 text-xl font-bold text-teal-300">
              Where We Are Today
            </p>

            <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
              Bloops Design is a huge team of artists, designers, developers
              and managers providing all design services and solutions to
              both large and small scale businesses around the globe. We are
              now leading Design and Marketing company in the Canada, with an
              aim to establish itself as Full Stack Design Company in
              Canada.
              <br />
              <br />
              Bloops Design was founded in 2010, it then started searching
              for people who had dedicated their lives for design industry.
              There is no doubt that Bloops Design has the cream of logo and
              web design and development talent. We also have a huge
              portfolio of logo, website and branding.
            </p>

            <button className="mt-8 px-8 py-2 border-2 border-teal-400 text-neutral-800 font-semibold rounded-full hover:bg-[#0089e1] hover:text-white transition">
              Lets Get Started
            </button>
          </div>

          {/* Right — duotone team photo */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm overflow-hidden rounded-md animate__animated animate__fadeInRight">
            <img
              src="/iamge/design1 (1).webp"
              alt="Bloops Design team collaborating"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Our Core Values Section */}
      <CoreValues />
      <div>
      <StatsSection/>
      <WorkProcess/>
      <Awards/>
      <DigitalAgencySection/>
      <Testimonials/>
      <ContactSection/>
      <CtaBanner/>

    </div>

    </div>
  );
};

// ---------------- CORE VALUES SECTION ----------------
const coreValues = [
  {
    image: "/iamge/design1 (2).webp",
    label: "",
    text: "Bloops Design drives digital sales and illustrates relatable moments of your brand by communicating your brand's voice through stimulating content. We redefined your brand identity with superior visuals like graphic design, web solutions, imagery, and video production.",
  },
  {
    image: "/iamge/design1 (3).webp",
    label: "",
    text: "We bind the influence of forward-thinking and trendsetting in the digital space to craft high-quality, vibrant and bespoke brand experiences that empower our clients with a potent, competitive edge.",
  },
  {
    image: "/iamge/design1 (5).webp",
    label: "",
    text: "Our team is committed to fundamentals of ethics, we are equally stringent in upholding aesthetic values. From the classics to the kitsch, we respect artistic creation, not expressions of moral ambiguity. In no time you'll find out how we work less like a hired agency and more like your very own creative team.",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fff3f4] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
          Our Core Values
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto">
          We believe in the power of curating creative ideas that drive,
          impact and change minds.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {coreValues.map((item) => (
          <div
            key={item.text.slice(0, 12)}
            className="flex flex-col items-center text-center animate__animated animate__fadeInUp"
          >
            {/* single image, fixed height, no card background */}
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.label || "Core value"}
                className="w-full h-56 sm:h-60 object-cover object-center"
              />
              {item.label && (
                <p className="py-4 text-lg text-neutral-800">{item.label}</p>
              )}
            </div>
            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-neutral-500 max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default AboutHero;