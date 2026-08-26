"use client";

import React, { useState } from "react";
import Slider from "react-slick";

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      title: "SEO",
      desc: "We are the search engine optimization agency that provides the best SEO services to boost search engine ranking. You can get custom SEO services that fit your unique business needs & generate site traffic for high conversions.",
    },
    {
      title: "E-COMMERCE",
      desc: "We provide e-commerce services, redesigning and blogs that are needed to accelerate your business growth. We help you build a digital brand successfully to improve the overall services.",
    },
    {
      title: "Logo Design",
      desc: "We give you the chance to work with professional designers for the creation of logo designs that are unique and attractive. Discuss logo design for your project with us to take your business to new heights.",
    },
    {
      title: "BRANDING",
      desc: "We deliver branding services. Our services are well designed and we fulfill creative marketing needs of our customers that is the powerful way engaging more clients.",
    },
    {
      title: "Animated Video",
      desc: "We are a full-service video animation agency specializing in explainer videos that tell great stories and attract audiences towards your brand, resulting in increased revenue generation.",
    },
    {
      title: "Social Media",
      desc: "We help you increase your visibility with well-crafted social media campaigns for different brands. We are unmatched in the US at improving website traffic.",
    },
    {
      title: "Web Design & Development",
      desc: "Our website design services help you convert your website to calls, sales, and leads. Our modern web design services are designed to grow your business and leave an everlasting impression.",
    },
  ];

  const PrevArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Previous slide"
        className="services-prev"
      >
        <span>←</span>
      </button>
    );
  };

  const NextArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Next slide"
        className="services-next"
      >
        <span>→</span>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: false,
    adaptiveHeight: false,

    appendDots: (dots: React.ReactNode) => (
      <div className="services-dots">
        <ul>{dots}</ul>
      </div>
    ),

    customPaging: () => (
      <button type="button" aria-label="Slide" />
    ),

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <Slider {...settings}>
          {services.map((service, index) => {
            const isHovered = hoverIndex === index;

            return (
              <div className="service-slide" key={service.title}>
                <div
                  className={`service-card ${
                    isHovered ? "service-card-hover" : ""
                  }`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <style jsx global>{`
        /* =========================================
           SECTION
        ========================================= */

        .services-section {
          position: relative;
          width: 100%;
          padding: 24px 0 75px;
          overflow: hidden;
          background: #ffffff;
        }

        /* =========================================
           MAIN CONTAINER
        ========================================= */

        .services-container {
          position: relative;
          width: 1110px;
          max-width: calc(100% - 160px);
          margin: 0 auto;
        }

        /* =========================================
           SLIDER
        ========================================= */

        .services-container .slick-slider {
          position: relative;
          margin: 0;
        }

        .services-container .slick-list {
          overflow: hidden;
          border: 1px solid #e5e5e5;
        }

        .services-container .slick-track {
          display: flex;
        }

        .services-container .slick-slide {
          height: inherit;
        }

        .services-container .slick-slide > div {
          height: 100%;
        }

        /* =========================================
           CARD
        ========================================= */

        .service-slide {
          height: 415px;
        }

        .service-card {
          position: relative;

          height: 415px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          align-items: center;

          /* TEXT CENTER */
          justify-content: center;

          text-align: center;

          padding: 35px 16px;

          background: #ffffff;

          border-right: 1px solid #e5e5e5;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .service-card h3 {
          margin: 0 0 12px;

          font-family: Arial, Helvetica, sans-serif;

          font-size: 21px;

          line-height: 1.25;

          font-weight: 700;

          color: #111111;

          text-transform: uppercase;

          transition: color 0.3s ease;
        }

        .service-card p {
          max-width: 340px;

          margin: 0;

          font-family: Arial, Helvetica, sans-serif;

          font-size: 15px;

          line-height: 1.6;

          font-weight: 400;

          color: #666666;

          transition: color 0.3s ease;
        }

        /* =========================================
           HOVER
        ========================================= */

        .service-card-hover {
          background: linear-gradient(
            180deg,
            #0089df 0%,
            #10cde3 100%
          );
        }

        .service-card-hover h3,
        .service-card-hover p {
          color: #ffffff;
        }

        /* =========================================
           ARROWS
        ========================================= */

        .services-prev,
        .services-next {
          position: absolute;

          top: 50%;

          z-index: 20;

          width: 50px;
          height: 50px;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 0;

          border: 0;

          background: transparent;

          cursor: pointer;

          transform: translateY(-50%);
        }

        .services-prev {
          left: -95px;
        }

        .services-next {
          right: -95px;
        }

        .services-prev span,
        .services-next span {
          display: block;

          color: #5dd8e8;

          font-family: Arial, Helvetica, sans-serif;

          font-size: 42px;

          font-weight: 300;

          line-height: 1;

          transition: transform 0.2s ease;
        }

        .services-prev:hover span {
          transform: translateX(-4px);
        }

        .services-next:hover span {
          transform: translateX(4px);
        }

        .slick-prev:before,
        .slick-next:before {
          display: none !important;
        }

        /* =========================================
           DOTS
        ========================================= */

        .services-dots {
          position: absolute;

          left: 0;
          bottom: -30px;

          width: 100%;

          padding: 0;

          text-align: center;
        }

        .services-dots ul {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .services-dots li {
          width: 10px !important;
          height: 10px !important;

          margin: 0 !important;
          padding: 0 !important;
        }

        .services-dots li button {
          width: 10px !important;
          height: 10px !important;

          margin: 0;
          padding: 0;

          border: 0;

          border-radius: 50%;

          background: #d4d4d4;

          font-size: 0;

          cursor: pointer;
        }

        .services-dots li button:before {
          display: none !important;
        }

        .services-dots li.slick-active button {
          background: #5dd8e8;
        }

        /* =========================================
           1200px
        ========================================= */

        @media (max-width: 1200px) {
          .services-container {
            width: 1000px;
            max-width: calc(100% - 130px);
          }

          .services-prev {
            left: -65px;
          }

          .services-next {
            right: -65px;
          }
        }

        /* =========================================
           1024px
        ========================================= */

        @media (max-width: 1024px) {
          .services-container {
            max-width: calc(100% - 90px);
          }

          .service-slide,
          .service-card {
            height: 380px;
          }

          .service-card {
            padding: 30px 18px;
          }

          .service-card h3 {
            font-size: 19px;
          }

          .service-card p {
            font-size: 14px;
          }

          .services-prev {
            left: -48px;
          }

          .services-next {
            right: -48px;
          }

          .services-prev span,
          .services-next span {
            font-size: 36px;
          }
        }

        /* =========================================
           900px
        ========================================= */

        @media (max-width: 900px) {
          .services-container {
            max-width: calc(100% - 80px);
          }

          .service-slide,
          .service-card {
            height: 350px;
          }

          .service-card {
            padding: 30px 20px;
          }
        }

        /* =========================================
           600px
        ========================================= */

        @media (max-width: 600px) {
          .services-section {
            padding: 20px 0 70px;
          }

          .services-container {
            width: 100%;
            max-width: calc(100% - 40px);
          }

          .service-slide,
          .service-card {
            height: 350px;
          }

          .service-card {
            padding: 30px 28px;
            border-right: 0;
          }

          .service-card h3 {
            font-size: 20px;
            margin-bottom: 15px;
          }

          .service-card p {
            max-width: 430px;
            font-size: 14px;
            line-height: 1.65;
          }

          .services-prev {
            left: -25px;
          }

          .services-next {
            right: -25px;
          }

          .services-prev span,
          .services-next span {
            font-size: 30px;
          }

          .services-dots {
            bottom: -28px;
          }
        }

        /* =========================================
           480px
        ========================================= */

        @media (max-width: 480px) {
          .services-container {
            max-width: calc(100% - 30px);
          }

          .service-slide,
          .service-card {
            height: 360px;
          }

          .service-card {
            padding: 30px 25px;
          }

          .service-card h3 {
            font-size: 19px;
          }

          .service-card p {
            font-size: 14px;
          }

          .services-prev {
            left: -21px;
          }

          .services-next {
            right: -21px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;