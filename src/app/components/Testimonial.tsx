"use client";

import { h6 } from "framer-motion/client";
import React from "react";
import Slider from "react-slick";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kandra West-Pettigrew",
      review:
        "Experience was very engaging, prompt replies, affordable pricing with unlimited edits. Process took a bit longer than expected, but the last few edits after initial appwas met with cooperation. Would recommend for sure! Thank you Karen/Alex and dteam!",
      rating: 5,
    },
    {
      name: "Top Quality Motors",
      review:
        "“Excellent job creating our logo and website. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend to others. Special thanks toVeronica and team for her artwork on this project.”c.",
      rating: 5,
    },
    {
      name: "Sean J Harrison",
      review:
        "“It was a great experience working with Websites Design Agency. Their team developed thewebsite for our brand on very short notice. The refresh rate of our website is wayfaster than before. Overall the whole website performance is great now. Thanks”.",
      rating: 4,
    },
    {
      name: "Vic Owens",
      review:
        "“Excellent job creating our logo for sports major league. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend Websites Design Agency to others. Special thanks to Karen for her artwork on this project.”.",
      rating: 4,
    },
    {
      name: "Peggy Northcott",
      review:
      "“They were very prompt to reply. They listened to what I needed and had reasonably priced packages to choose from. They had a quick turn around time and we’re professional to deal with. The line connection they used was very broken and caused multiple dropped calls which remote communication through email than I would have preferred.”.",
      rating: 4,
    },
    {
      name: "Esther",
      review:
        "“Very compelling and looked for a solution to work within my budget, Kevin spent a lot otime explaining how everything worked in detail and was very fair and reasonable witpricing.”.",
      rating: 4,
    },
    {
      name: "Braden Thompson",
      review:
        "“Amazing to work with, fast responses and very high quality work!”.",
      rating: 4,
    },
    {
      name: "Tammy rubin",
      review:
        "“Kevin was very patient, good at explaining the work to be done and how. well done Kevin.",
      rating: 4,
    },
    {
      name: "Cristina Frasca",
      review:
        "“Very helpful, amazing service very happy”.",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }} // ✅ apni image ka path do
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="text-gray-200 mt-2">Our Happy Clients</p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-10 max-w-3xl mx-auto">
                {/* Name */}
                <h3 className="text-xl font-semibold text-center">{t.name}</h3>

                {/* Stars */}
                <div className="flex justify-center mt-2 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-center leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
