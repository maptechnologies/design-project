"use client";

import React from "react";
import "animate.css";

// ---------------- ABOUT HERO SECTION ----------------
const AboutHero: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* ✅ Hero Banner */}
      <div
        className="relative bg-cover bg-center min-h-216 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b"></div>
 
        {/* Left Side Image */}
        <img
          src="/iamge/image__1_-removebg-preview.png"
          alt="Hero Left"
          className="hidden lg:block absolute left-6 xl:left-16 top-1/2 -translate-y-1/2 w-90 xl:w-120 h-120  shadow-lg z-10 animate__animated animate__fadeInLeft"
        />
 
        {/* Right Side Image */}
        <img
          src="/iamge/image__1_-removebg-preview (1).png"
          alt="Hero Right"
          className="hidden lg:block absolute right-6 xl:right-0 top-1/2 -translate-y-1/2 w-90 xl:w-120 h-120  shadow-lg z-10 animate__animated animate__fadeInRight"
        />
 
        <div className="relative text-center max-w-3xl animate__animated animate__fadeInUp z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            WE ARE MORE THAN JUST  AN AVERAGE BRAND AGENCY
          </h1>
          <p className="mt-6 text-xl text-white ">
            We develop a strong brand identity that connects <br />
            with your audience!
          </p>
          <button className="mt-6 bg-white text-shadow-[#444245] px-6 py-1 rounded-full shadow hover:bg-[#444245] hover:text-white transition font-semibold">
            Read More
          </button>
        </div>
      </div>
  

      {/* ✅ Design Creative + Experience Block */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="relative animate__animated animate__fadeInLeft">
            <img
              src="/iamge/exper-img-1.webp"
              alt="Design Creative"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl px-6 py-4 hidden sm:block">
              <p className="text-gray-800 font-semibold text-lg">
                Design
              </p>
              <p className="text-sky-500 font-bold text-xl">
                Creative.
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate__animated animate__fadeInRight">
            <h5 className="text-sky-500 font-semibold text-lg mb-2">
              Experienced Award-Winning Certified Company
            </h5>
            <h6 className="text-gray-500 uppercase tracking-wide text-sm mb-4">
              Where We Are Today
            </h6>

            <p className="text-gray-600 leading-relaxed mb-4">
              Bloops Design is a huge team of artists, designers,
              developers and managers providing all design services and
              solutions to both large and small scale businesses around
              the globe. We are now leading Design and Marketing company
              in the Canada, with an aim to establish itself as Full
              Stack Design Company in Canada.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Bloops Design was founded in 2010, it then started
              searching for people who had dedicated their lives for
              design industry. There is no doubt that Bloops Design has
              the cream of logo and web design and development talent.
              We also have a huge portfolio of logo, website and
              branding projects.
            </p>

            <button className="px-6 py-2 border-2 border-green-400 text-green-500 font-semibold rounded-full hover:bg-green-400 hover:text-white transition">
              Lets Get Started
            </button>

            <img
              src="/iamge/exper-img-2.webp"
              alt="Experience"
              className="w-full h-auto rounded-xl shadow-lg mt-8"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;