"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Awards from "../components/Awards";
import ContactForm from "../components/Form";
import AnimatedContact from "../components/Contact";
import Footer from "../components/Footer";
import Herosection from "../components/portfolio/Herosection";


const categories = [
  "Basic Combo",
  "Startup Combo",
  "Professional Combo",
  "Corporate Combo",
  "Elite Combo",
];

const packagesData: Record<string, any> = {
  "Corporate Combo": {
    price: "$4999",
    title: "CORPORATE COMBO",
    features: {
      "Logo Design": [
        "Unlimited Logo Design Idea(s)",
        "8 Dedicated Designers",
        "Icon Design",
        "All final file formats",
      ],
      "Stationary Design": [
        "2 Free Custom Stationary Designs",
        "MS Word Letterhead",
        "Invoice Design",
        "FREE Tri fold Brochure Design",
      ],
      "Social Media Page Design": [
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Google+ Page Design",
        "Pinterest Page Design",
      ],
      "Website Design": [
        "Unlimited Pages Website",
        "Conceptual and Dynamic Website",
        "Word Press OR CUSTOM PHP",
        "Content Management System (CMS)",
        "Easy Product Search",
        "Product Reviews",
        "Unlimited Products",
        "Unlimited Categories",
        "Promotional Product Showcase",
        "Full Shopping Cart Integration",
        "Payment Module Integration",
        "Sales & Inventory Management",
        "Custom Forms",
        "Lead Capturing Forms (Optional)",
        "Newsfeed Integration",
        "Search Engine Submission",
        "15 Stock images",
        "jQuery Sliders",
        "Free Google Friendly Sitemap",
        "Complete W3C Certified HTML",
      ],
      "Value Added Services": [
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
  },
  "Basic Combo": {
    price: "$1275",
    title: "BASIC COMBO",
    features: {
      "Logo Design": [
        "5 Custom Logo Design Concepts",
        "By 2 Designers",
        "Icon Design",
        "All Final File Formats",
      ],
      "Stationery Design": [
        "Business Card, Letterhead, Envelope, Fax Template",
        "MS Word Letterhead",
      ],
      "Website Design": [
        "5 Page Website",
        "Mobile Responsive",
        "Team of Expert Designers & Developers",
        "8 Stock images",
        "5 Banner Designs",
        "jQuery Sliders",
        "Free Google Friendly Sitemap",
        "Facebook Page Design",
        "Complete W3C Certified HTML",
        "Complete Deployment",
      ],
      "Value Added Services": [
        "Logo Design Final Files (.PNG, .JPG, .PDF)",
        "Website Design Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Unlimited Revisions",
        "Complete Deployment",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
  },
  "Startup Combo": {
    price: "$1988",
    title: "STARTUP COMBO",
    features: {
      "Logo Design": [
        "Unlimited Logo Design Concepts",
        "Unlimited Revisions",
        "Icon Design",
      ],
      "Stationary Design": [
        "Business Card, Letterhead, Envelope",
        "MS Word Letterhead",
      ],
      "Website Design": [
        "UNLIMITED Pages Website",
        "Content Management System (CMS)",
        "Mobile Responsive",
        "5 Stock Photos + 3 Banner Designs",
        "Any 3 Social Media Platforms",
        "Complete W3C Certified HTML",
        "Complete Deployment",
      ],
      "Value Added Services": [
        "Value Added Services",
        "100% Ownership Rights",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        "Complete Deployment",
      ],
    },
  },
  "Professional Combo": {
    price: "$2599",
    title: "PROFESSIONAL COMBO",
    features: {
      "Logo Design": [
        "Unlimited Logo Concepts",
        "8 Dedicated Designers",
        "Icon Design",
        "Unlimited Revisions",
        "All file formats",
      ],
      "Print Materials": [
        "2 Free Custom Stationary Designs",
        "MS Word Letterhead",
        "Free Trifold Brochure Design"
      ],
      "Social Media Page Design": [
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Google+ Page Design",
      ],
      "Value Added Services": [
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "Satisfaction",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
      "Website Design": [
        "Unlimited Pages Design",
        "Conceptual and Dynamic Liquid Website",
        "Mobile Responsive",
        "Online Reservation/Appointment Tool (Optional)",
        "Custom Forms",
        "Lead Capturing Forms (Optional)",
        "Newsfeed Integration",
        "Social Media Integration",
        "Search Engine Submission",
        "15 Stock images",
        "8 Unique Banner Designs",
        "jQuery Sliders",
        "Free Google Friendly Sitemap",
        "Complete W3C Certified HTML",
      ],
    },
  },
  "Elite Combo": {
    price: "$7499",
    title: "ELITE COMBO",
    features: {
      "website Design": [
        "Complete Custom Design & Development",
        "Any One: Dating Portal, Job Portal, Professional Network, Social Network, Medical Portal, Restaurant Portal, News Portal, Enterprise Portal",
        "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
        "JQuery Slider",
        "Unlimited Banner Designs",
        "Special Hoover Effects",
        "20 Stock Images",
        "Client/User Dashboard Area",
        "Custom Coding",
        "Custom PHP Development",
        "Content Management System (Custom)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
      ],
      "Core Features": [
        "User Signup Area",
        "User Login Area",
        "User Dashboard Area",
        "Complete Database Creation",
        "Signup Automated Email Authentication",
        "Web Traffic Analytics Integration",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "3rd Party API Integrations",
        "Search Bar for Easy Search",
        "Live Feeds of Social Networks integration (Optional)",
        "Search Engine Submission",
        "Module-wise Architecture",
        "Extensive Admin Panel",
        "Award Winning Team of Expert Designers and Developers",
        "Complete Deployment",
      ],
      "logo Design": [
        "Unlimited Logo Design Idea(s)",
        "8 Dedicated Designers",
        "Icon Design",
        "All final file formats",
      ],
      "Stationary Design": [
        "2 Free Custom Stationary Designs",
        "MS Word Letterhead",
        "Invoice Design",
        "FREE Tri fold Brochure Design",
      ],
      "Value Added Services": [
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
      ],
    },
  },
};

const PricingCombo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Corporate Combo");
  const pkg = packagesData[activeCategory];

  return (
    <>
    <section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/iamge/istockphoto-1591225732-612x612.webp')", // ✅ Make sure spelling `image` is correct in public folder
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg px-6 py-6 max-w-3xl w-full">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-white to-white bg-clip-text text-transparent">
             MOST AFFORDABLE
PACKAGES FOR ALL
OUR CUSTOMERS
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-white text-base sm:text-lg md:text-xl">
            {/* We create bold, modern & immersive digital experiences that{" "} */}
            {/* <span className="text-pink-400 font-semibold">connect</span> with */}
            {/* your audience. */}
          </p>

          {/* Buttons */}
         {/* <div className="mt-5 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-semibold shadow-md hover:scale-105 transition">
              🚀 Get Started
            </button>
            <button className="px-6 py-2 rounded-full bg-white/90 text-black text-base font-semibold shadow-md hover:bg-white transition hover:scale-105">
              🎨 View Portfolio
            </button>
          </div>*/}
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Most Affordable Packages
          </h2>
          <p className="text-gray-600 mt-2">
            We are well aware of the competition. That is the reason why we have a
            fair pricing model. We ensure quality over quantity on each order.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-900 text-white text-center py-3 font-bold text-lg">
            {pkg.title}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-6">
            {Object.entries(pkg.features).map(([section, items]) => (
              <div key={section}>
                <h4 className="font-semibold text-gray-900 mb-2">{section}</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {Array.isArray(items) &&
                    items.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1" size={16} />
                        <span>{f}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-blue-600">{pkg.price}</div>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                ORDER NOW
              </a>
              <a href="#" className="mt-2 text-sm underline text-blue-600">
                Click here to Live Chat
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50 transition">
            View All Packages
          </button>
        </div>
      </section>
      <Awards />
      <ContactForm />
      <AnimatedContact />
      <Footer />
    </>
  );
};

export default PricingCombo;
