'use client'
import React from 'react';
import Awards from '../components/Home-awards';
import ContactForm from '../components/Home-form';
import AnimatedContact from '../components/Home-contact';
import Footer from '../components/Home-footer';
import PricingSection from '../components/Home-package';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* ---------- HERO SECTION START ---------- */}
      <section
        className="relative w-full h-[900px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')", // ✅ Make sure your image is in public/image/
        }}
      >
        {/* Overlay (optional dark layer) */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* Center Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl mt-[-30px] font-bold leading-tight">
           MOST AFFORDABLE <br />
PACKAGES FOR ALL <br />
OUR CUSTOMERS <br />
          </h1>
          <p className="text-white text-lg mt-4 max-w-xl mx-auto">
           
          </p>
        </div>
      </section>
      {/* ---------- HERO SECTION END ---------- */}

      {/* Other sections */}
      <PricingSection />
      <Awards />
      <ContactForm />
      <AnimatedContact />
     
    </>
  );
};

export default HeroSection;
