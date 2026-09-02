"use client";
import React, { useState } from "react";
import { BadgeCheck, MessageSquare } from "lucide-react";
import Awards from "../components/Home-awards";
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";

type PackageData = {
  price: string;
  title: string;
  features: Record<string, string[]>;
};

const packagesData: Record<string, PackageData> = {
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
        "Free Trifold Brochure Design",
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

const tabOrder = [
  "Basic Combo",
  "Startup Combo",
  "Professional Combo",
  "Corporate Combo",
  "Elite Combo",
];

const PricingCombo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activePkg = packagesData[tabOrder[activeTab]];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[900px] bg-cover bg-center flex justify-center"
        style={{
          backgroundImage: "url('/iamge/design1.jpg')", // ✅ Make sure folder is /image not /iamge
        }}
      >
        {/* ✅ Centered Image on top of background image */}
        <img
          src="/iamge/design1.webp" // ✅ Replace with your overlay image name
          alt="Center Overlay"
          className="absolute inset-0 m-auto z-10 max-w-[60%] max-h-[80%] w-auto h-auto mb-35 object-contain"
        />

        {/* Content */}
        <div className="relative z-20 text-center backdrop rounded-xl shadow-lg px-2 py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-72 font-semibold text-white">
            <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent tracking-wide leading-[1.2]">
             MOST AFFORDABLE

             <br />
             PACKAGES FOR ALL
              <br />
              OUR CUSTOMERS
            </span>
          </h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#eeeeee] py-14 sm:py-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b2b2b] mb-4">
            Most Affordable Packages
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We are well aware of the competition. That is the reason why we have
            a fair pricing model. We ensure quality over quantity on each order.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabOrder.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`px-5 sm:px-8 font-poppins py-3 rounded-full text-sm font-semibold border transition-colors duration-200 cursor-pointer ${
                activeTab === i
                  ? "bg-[#29abe2] border-[#29abe2] text-white"
                  : "bg-white border-gray-300 text-[#333] hover:border-[#29abe2]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package Card */}
        <div className="max-w-6xl mx-auto shadow-sm">
          {/* Dark header bar */}
          <div className="bg-[#1c1c1c] py-6 px-6 text-center">
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide uppercase">
              {activePkg.title}
            </h3>
          </div>

          {/* White content area */}
          <div className="bg-white px-6 sm:px-8 py-10 flex flex-wrap gap-10">
            {Object.entries(activePkg.features).map(([category, items]) => (
              <div key={category} className="flex-1 min-w-[220px]">
                <h4 className="text-lg font-bold text-[#2b2b2b] mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 mt-0.5 text-[#e2461f] shrink-0" />
                      <span className="text-[#1a3b73] text-sm font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Price + Live Chat + CTA */}
            <div className="w-full md:w-56 shrink-0 flex flex-col items-start">
              <div className="text-[#29abe2] text-4xl sm:text-5xl font-extrabold mb-6">
                {activePkg.price}
              </div>

              <div className="flex items-start gap-2 mb-6">
                <div>
                  <p className="text-[#2b2b2b] font-bold text-sm leading-tight">
                    Click Here To
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#2b2b2b] font-extrabold text-xl leading-tight">
                      Live Chat
                    </p>
                    <MessageSquare className="w-5 h-5 text-[#2b2b2b]" />
                  </div>
                </div>
              </div>

              <a
                href="/quote"
                className="px-6 py-2.5 rounded-full bg-[#4ec3e0] text-white text-sm font-semibold hover:bg-[#29abe2] transition-colors duration-200 text-center"
              >
                Request A Quote
              </a>
            </div>
          </div>
        </div>

        {/* View All Packages */}
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="px-8 py-2.5 rounded-full border-2 border-[#4ec3c1] text-[#2b2b2b] text-sm font-semibold hover:bg-[#4ec3c1] hover:text-white transition-colors duration-200"
          >
            View All Packages
          </a>
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