"use client";

import React from "react";

const WorkProcess: React.FC = () => {
  const items = [
    {
      img: "/iamge/process-img-2.webp",
      number: "01",
      title: "Design&Brief",
      desc: "The process begins with your delivery of what you have in mind for the logo which is going to go ahead and represent your brand for you. This is where begin the construction of the logo.",
    },
    {
      img: "/iamge/process-img-1.webp",
      number: "02",
      title: "Research&Sketch",
      desc: "Now that we are clear with what ingredients must be included to brew the perfectlogo for you. Our designers will come up with a concept and make a draft tobegin the collaborative design process.",
    },
    {
      img: "/iamge/process-img-3.webp",
      number: "03",
      title: "Revision",
      desc: "Once we are satisfied with our Designs, we share it with the client. We arehowever completely open for constructive feedback and revisions..",
    },
    {
      img: "/iamge/process-img-4.webp",
      number: "04",
      title: "Final Delivery",
      desc: "After having the files reviewed by the client and after having the error removed, we deliver the project and all the necessary format files.",
    },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-black font-bold">Our Work Process</h2>
        <p className="text-gray-700 text-2px mt-2">
          Do you want to get recognized? We have been providing a broad range of business logo <br />
          design, branding, digital marketing and development services..
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay + Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#01bda7]/95 to-white/90 
                            text-black flex flex-col items-center justify-center text-center px-4 
                            opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-5xl font-extrabold mb-2">{item.number}</h2>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
