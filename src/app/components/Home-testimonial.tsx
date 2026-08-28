"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Previous testimonial"
    className="absolute left-0 top-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900 -translate-x-2 sm:-translate-x-14"
  >
    <ArrowLeft size={18} />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Next testimonial"
    className="absolute right-0 top-1/2 z-10 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900 translate-x-2 sm:translate-x-14"
  >
    <ArrowRight size={18} />
  </button>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kandra West-Pettigrew",
      review:
        "Experience was very engaging, prompt replies, affordable pricing with unlimited edits. Process took a bit longer than expected, but the last few edits after initial approval was met with cooperation. Would recommend for sure! Thank you Karen/Alex and design team!",
      rating: 5,
    },
    {
      name: "Top Quality Motors",
      review:
        "Excellent job creating our logo and website. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend to others. Special thanks to Veronica and team for her artwork on this project.",
      rating: 5,
    },
    {
      name: "Sean J Harrison",
      review:
        "It was a great experience working with Websites Design Agency. Their team developed the website for our brand on very short notice. The refresh rate of our website is way faster than before. Overall the whole website performance is great now. Thanks",
      rating: 4,
    },
    {
      name: "Vic Owens",
      review:
        "Excellent job creating our logo for sports major league. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend Websites Design Agency to others. Special thanks to Karen for her artwork on this project.",
      rating: 4,
    },
    {
      name: "Peggy Northcott",
      review:
        "They were very prompt to reply. They listened to what I needed and had reasonably priced packages to choose from. They had a quick turn around time and were professional to deal with.",
      rating: 4,
    },
    {
      name: "Esther",
      review:
        "Very compelling and looked for a solution to work within my budget, Kevin spent a lot of time explaining how everything worked in detail and was very fair and reasonable with pricing.",
      rating: 4,
    },
    {
      name: "Braden Thompson",
      review: "Amazing to work with, fast responses and very high quality work!",
      rating: 4,
    },
    {
      name: "Tammy rubin",
      review:
        "Kevin was very patient, good at explaining the work to be done and how. Well done Kevin!",
      rating: 4,
    },
    {
      name: "Cristina Frasca",
      review: "Very helpful, amazing service very happy",
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-[-40px]",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="relative w-full py-20 sm:py-28 md:py-30 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/iamge/design197.webp')" }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Testimonials</h2>
          <p className="text-gray-200 mt-2">Our Happy Clients</p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-2 sm:px-6">
                <div className="bg-white text-gray-800 shadow-lg p-6 sm:p-10 md:p-14 max-w-3xl mx-auto">
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-center">
                    {t.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex justify-center mt-2 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed italic">
                    {t.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Dot styling (scoped, no external CSS file needed) */}
      <style jsx global>{`
        .slick-dots {
          display: flex !important;
          justify-content: center;
          gap: 8px;
          position: relative;
          margin-top: 24px;
        }
        .slick-dots li {
          margin: 0;
        }
        .slick-dots li button {
          width: 8px;
          height: 8px;
          padding: 0;
        }
        .slick-dots li button:before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          background-color: #22d3ee;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;