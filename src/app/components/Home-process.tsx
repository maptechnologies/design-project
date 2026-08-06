"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const steps = [
    {
      id: "01",
      title: "Design Brief",
      img: "/iamge/process-img-1.webp",
      text: "The process begins with your delivery of what you have in mind for the logo, which is going to go ahead and represent your brand for you. This is where we begin the construction of the logo.",
    },
    {
      id: "02",
      title: "Research & Sketch",
      img: "/iamge/process-img-2.webp",
      text: "Now that we are clear with what ingredients must be included to brew the perfect logo for you, our designers will come up with a concept and make a draft to begin the collaborative design process.",
    },
    {
      id: "03",
      title: "Revision",
      img: "/iamge/process-img-3.webp",
      text: "Once we are satisfied with our Designs, we share it with the client. We are however completely open for constructive feedback and revisions.",
    },
    {
      id: "04",
      title: "Final Delivery",
      img: "/iamge/process-img-4.webp",
      text: "After having the files reviewed by the client and after having the errors removed, we deliver the project and all the necessary format files.",
    },
  ];

  return (
    <section className="py-14 bg-white">
      {/* Header */}
      <div
        className="text-center mb-10 px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold font- text-gray-800">
          Our Work Process
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Do you want to get recognized? We have been providing a broad range of
          business logo design, branding, digital marketing and development
          services.
        </p>
      </div>

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative group overflow-hidden cursor-pointer"
          >
            {/* ✅ Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* ✅ Hover Overlay with Gray Border */}
            <div
              className="absolute inset-0 bg-blue-600/0 group-hover:bg-cyan-500/90
              group-hover:border-[9px] group-hover:border-gray-600 
              transition-all duration-500 flex flex-col items-center justify-center 
              text-center p-4 sm:p-6"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {step.id}
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {step.title}
              </h4>
              <p className="text-white mt-3 text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
