"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Facebook, Link, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, Twitter, X } from "lucide-react";
import Header from "../components/Header";



// ---------------- HERO WITH CARDS ----------------
const HeroWithCards: React.FC = () => {
  const cards = [
    { title: "", text: ".", img: "/iamge/exper-img-2.webp", position: "top" },
    { title: "", text: ".", img: "/iamge/exper-img-1.webp", position: "center" },
    {
      title: "Experienced Award-Winning Certified Company Where We Are Today",
      text: "Bloops Design was founded in 2010. Today, we have a huge portfolio of logo, website and branding projects.",
      position: "bottom",
      button: true,
    },
  ];

  const coreValues = [
    {
      title: "Service",
      description:
        "Bloops Design drives digital sales and illustrates relatable moments of your brand by communicating your brand’s voice.",
      image: "/iamge/service-img-3 (1).webp",
    },
    {
      title: "Quality",
      description:
        "We craft high-quality, vibrant, and bespoke brand experiences with innovation.",
      image: "/iamge/service-img-2 (1).webp",
    },
    {
      title: "Team Work",
      description:
        "We work like your very own creative team — not just another hired agency.",
      image: "/iamge/service-img-1.webp",
    },
  ];

  const stats = [
    { number: "500+", label: "happy customers" },
    { number: "180+", label: "experienced designers" },
    { number: "10+", label: "years in the industry" },
    { number: "400+", label: "website designed" },
    { number: "600+", label: "logo designed" },
  ];

  return (
    <div className="flex flex-col">
      {/* ✅ Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[200vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/iamge/istockphoto-2161298305-612x612.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/60 to-green-300/60"></div>

        <div className="relative text-center max-w-3xl animate__animated animate__fadeInUp z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            WE ARE MORE THAN JUST <br /> AN AVERAGE BRAND AGENCY
          </h1>
          <p className="mt-4 text-lg text-black font-bold">
            We develop a strong brand identity that connects <br />
            with your audience!
          </p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-200 hover:text-black transition font-semibold">
            Read More
          </button>
        </div>
      </div>

      {/* ✅ Cards */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid text-black md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden text-black transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-80 object-cover"
                />
              )}
              <div
                className={`absolute text-white p-4 w-full ${
                  card.position === "top"
                    ? "top-4 text-center"
                    : card.position === "center"
                    ? "top-1/2 transform -translate-y-1/2 text-center"
                    : "bottom-4 text-center"
                }`}
              >
                <h3 className="text-xl  text-black font-bold drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-sm mt-2 text-black drop-shadow-md">{card.text}</p>
                {card.button && (
                  <button className="mt-4 px-6 py-2 border-2 border-green-400 text-green-500 font-semibold rounded-full hover:bg-green-400 hover:text-white transition">
                    Lets Get Started
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Core Values */}
      <section className="bg-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full shadow-md">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Stats */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold">Hitting New Records</h2>
          <div className="flex flex-wrap justify-center gap-10 text-center flex-1">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-extrabold">{stat.number}</h3>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      {/* <Header/> */}

      {/* ✅ Work Process */}
      <WorkProcess />

      {/* ✅ Awards */}
      <Awards />

      {/* ✅ Features */}
      <Features />

      

      {/* ✅ Testimonials */}
      <Testimonials />

      {/* ContactForm */}
      <ContactForm/>

        {/* AnimatedContact */}
        <AnimatedContact/>

        {/* Footer */}
         <Footer/>
    </div>
  );
};

// ---------------- WORK PROCESS ----------------
const WorkProcess: React.FC = () => {
  const items = [
    {
      img: "/iamge/process-img-2.webp",
      number: "01",
      title: "Design & Brief",
      desc: "The process begins with your delivery of what you have in mind for the logo which is going to go ahead and represent your brand for you. This is where begin the construction of the logo..",
    },
    {
      img: "/iamge/process-img-1.webp",
      number: "02",
      title: "Research & Sketch",
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
      desc: "After having the files reviewed by the client and after having the error removed, we deliver the project and all the necessary format files..",
    },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-4xl text-black text-center font-bold text-center mb-6">
        Our Work Process
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01bda7]/90 to-white/90 flex flex-col items-center justify-center text-black opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-5xl font-extrabold mb-2">{item.number}</h2>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------- AWARDS ----------------
const Awards: React.FC = () => {
  const awards = [
    { img: "/iamge/award-img-1.webp", alt: "Santa Casa" },
    { img: "/iamge/award-img-2.webp", alt: "Quantano" },
    { img: "/iamge/award-img-3.webp", alt: "Asia Young Designer" },
    { img: "/iamge/award-img-4.webp", alt: "German Design" },
    { img: "/iamge/award-img-5.webp", alt: "International" },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Awards & Recognitions
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4">
        {awards.map((award, i) => (
          <div
            key={i}
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <img
              src={award.img}
              alt={award.alt}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------- FEATURES ----------------
const Features: React.FC = () => {
  const features = [
    { title: "Creativity", desc: "Creativity is the key in the industry and we have established this fact loud and clear since the very first day amongst our teams of designers and developers. We work with no limitations on creativity and innovation.." },
    { title: "Free Logo Multiple File Formats", desc: "When you get a logo design it’s not just an image that you need, you might need different formats if you intend to use the logo for different purposes.." },
    { title: "Unlimited Revisions", desc: "We keep striving unless you are 100 percent sure and satisfied with the product that you receive. You don’t love what you see? Let’s give it a redo." },
    { title: "Multiple Designers Assigned", desc: "We have skilled designers who are experts in creating work that surpasses our customer’s expectations. We ensure that our designers deliver high quality work without any limitations on innovation and creativity.." },
    { title: "Industry Specific Designers", desc:"The management team has built up experience over years of services with the most creative designers with high quality services." },
    { title: "Logo Delivery within 50 Minutes", desc: "When it comes to designing skills supremacy, our team’s expertise knows no bounds. Each aspect of designing is kept intact as well as making sure that none of the quality aspects are affected." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <h2 className="text-2xl sm:text-3xl md:text-4xl  text-center text-gray-700 font-semibold leading-snug">
            A{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
              DIGITAL AGENCY
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold">
              SPECIALIZED
            </span>{" "}
            IN <br />
            DIGITAL CREATION & BRAND STRATEGY
          </h2>


        <Slider {...settings}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="px-2 sm:px-3 md:px-4"
            >
              <div className="p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-500 ease-in-out h-full min-h-[250px] flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:scale-105">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



// ---------------- TESTIMONIALS ----------------
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kandra West-Pettigrew",
      review:
        "Experience was very engaging, prompt replies, affordable pricing with unlimited edits. Process took a bit longer than expected, but the last few edits after initial appwas met with cooperation. Would recommend for sure! Thank you Karen/Alex and dteam!.",
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
      name: "Vic owens",
      review:
        "“Excellent job creating our logo for sports major league. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend Websites Design Agency to others. Special thanks to Karen for her artwork on this project.”.",
      rating: 4,
    },
    {
      name: "Peggy Northcott",
      review:
        "“They were very prompt to reply. They listened to what I needed and had reasonably priced packages to choose from. They had a quick turn around time and we’re professional to deal with. The line connection they used was very broken and caused multiple dropped calls which remote communication through email than I would have preferred.”..",
      rating: 4,
    },
    {
      name: "Esther",
      review:
        "“Very compelling and looked for a solution to work within my budget, Kevin spent a lot otime explaining how everything worked in detail and was very fair and reasonable witpricing.”",
      rating: 4,
    },
    {
      name: "Berdan Thompson",
      review:
        "“Amazing to work with, fast responses and very high quality work!”.",
      rating: 4,
    },
    {
      name: "Tummy rubine",
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
    <section className="relative w-full py-20 bg-black-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="text--500 mt-2">Our Happy Clients</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-10 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-center">{t.name}</h3>
                <div className="flex justify-center mt-2 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
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
// ----------ContactForm---------------
const ContactForm: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-2">
            Our friendly call center representatives are always available round
            the clock for any guidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let’s Talk.
            </h3>

            <div className="flex items-start space-x-4">
              <Phone className="text-cyan-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-xs uppercase text-gray-500">Call Us At</p>
                <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  (313) 512-9347
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              We are available on live chat! Just ping us and we will take care
              of it all.
            </p>

            <div className="flex items-start space-x-4">
              <MessageCircle className="text-cyan-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-xs uppercase text-gray-500">Let’s Chat Now</p>
                <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Live Chat
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone *"
                className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <textarea
              placeholder="Requirement *"
              rows={4}
              className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-cyan-500 text-black font-semibold shadow-sm hover:bg-cyan-50 transition"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
// ------------AnimatedContact---------
const AnimatedContact: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 animate-gradient-x">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-4">
          <p className="uppercase text-xs sm:text-sm opacity-80">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-white-500 to-purple-600 bg-clip-text text-transparent leading-snug">
            Let’s write your <br /> story, together.
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4">
          <p className="text-xs sm:text-sm md:text-base max-w-md text-center md:text-left">
            We do not tell you our own story. We write it together. Partnering
            with us means a seat at the table where your voice will be heard.
          </p>

          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-semibold shadow-md hover:opacity-88 transition">
            Contact Us
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <p className="font-bold text-sm sm:text-base">(313) 512-9347</p>
          </div>
        </div>
      </div>
    </section>
  );
};
//-------------Footer-----
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a fully in-house digital agency focusing on branding,
            marketing, web design and development with clients ranging from
            start-ups to enterprises.
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Partner’s</h3>
          <div className="flex flex-wrap gap-4">
            <img src="/iamge/certification.png" alt="MasterCard" className="h-8" />
            <img src="/iamge/cards.png" alt="Visa" className="h-8" />
            <img src="/iamge/par1.jpeg" alt="PayPal" className="h-8" />
            <img src="/iamge/par2.jpeg" alt="Wise" className="h-8" />
            <img src="/iamge/bark-verified-large-1.png" alt="SSL Secure" className="h-8" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" /> info@bloopsdesign.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" /> (313) 512-9347
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> 
              200 Kensington Rd Apt 64, Taylors, SC 29687
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bloops Design. All Rights Reserved.
      </div>
    </footer>
  );
};


export default HeroWithCards;

