"use client";
import React from "react";

const packagesData = {
  "Social Marketing": [
    {
      price: "$1800",
      title: "Bronze Package (Monthly)",
      features: [
       "1 Social Media Platform (Facebook)",
       "Social media account setup",
       "Complete Account Management",
       "8 Custom Designed Social Media Posts per month",
       "Custom Editorial calendar (Review before publishing)",
       "Goal focused Facebook Ad campaigns",
       "1000 Likes on Facebook page",
       "End of term report-KPI Comparison & more",
      ],
    },
    {
      price: "$2500",
      title: "Silver Social (Monthly)",
      features: [
        "2 Social Media Platforms (Facebook/ Instagram)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "12 Custom Designed Social Media Posts per month",
        "Goal focused Facebook and Instagram Ad campaigns",
        "Call to action Integration",
        "1200 likes on Facebook page",
        "250 followers on Instagram",
        "Monthly Analytic Report-KPI Comparison & more",
        
      ],
    },
    {
      price: "$3500",
      title: "Gold Social  (Monthly)",
      features: [
        "3 Social Media Platforms (Facebook / Instagram / Twitter)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "Competitor Analysis – Local and Nationwide",
        "16 Custom Designed Social Media Posts per month",
        "Community management – All Community Based Social Networks",
        "1 GIF post per Month",
        "Custom Editorial Calendar (Review before publishing)",
        "Goal focused Facebook and Instagram Ad campaigns",
        "Engagement Tracking Setup",
        "Call to action Integration",
        "3000 Likes on Facebook page",
        "500 Followers on Instagram",
        "Bi-monthly Analytic Report - KPI Comparison & more",
        "Dedicated Account Manager",
      ],
    },
    {
      price: "$5400",
      title: "Combo Social  (Monthly)",
      features: [
        "4 Social Media Platforms (Facebook / Instagram / Twitter / LinkedIn)",
        "Social media accounts setup",
        "Complete Accounts Management",
        "Initial Brand Analysis",
        "Consumer Persona Analysis",
        "Competitor Analysis – Local and Nationwide",
        "18 Custom Designed Social Media Posts per month",
        "Community management – All Community Based Social Networks",
        "Brand Listing - 20",
        "2 GIF posts per month",
        "Custom Editorial Calendar (Review before publishing)",
        "Goal focused Facebook and Instagram Ad campaign",
        "Engagement Tracking Setup",
        "Call to action Integration",
        "Facebook Shop Creation",
        "4000 Likes on Facebook page",
        "800 Followers on Instagram",
        "Weekly Analytic Report - KPI Comparison & more",
        "Dedicated Account Manager",
      ],
    },
  ],
};

const PackagesTailwind = () => {
  const socialPackages = packagesData["Social Marketing"]; // ✅ Correct key used

  return (
    <div className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl text-black font-bold mb-2">
        Most Affordable Packages
      </h2>
      <p className="text-gray-600 mb-10">
        We are well aware of the competition. That is the reason why we have a
        fair pricing model. <br />
        We ensure quality over quantity on each order.
      </p>

      {/* ✅ Packages Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {socialPackages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-sky-400 to-sky-600 text-white rounded-xl w-80 p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl font-bold mb-2">{pkg.price}</div>
              <div className="text-xl font-medium capitalize mb-4">
                {pkg.title}
              </div>
              <hr className="border-white border-opacity-30 mb-4" />
              <ul className="text-left space-y-2 max-h-56 overflow-y-auto pr-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-white mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full bg-white text-sky-600 font-bold py-2 rounded hover:bg-sky-100 transition">
                ORDER NOW
              </button>
              <button className="w-full bg-white text-sky-600 font-bold py-2 rounded hover:bg-sky-100 transition text-sm">
                Click here for <b>Live Chat</b>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesTailwind;
