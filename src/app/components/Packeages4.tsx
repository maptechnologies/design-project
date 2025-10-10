"use client";
import React from "react";

const packagesData = {
  "Video Animation": [
    {
      price: "$999",
      title: "Starter Video",
      features: [
        "30 Second Video",
        "Professional Script",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "Unlimited Revisions",
        "4 Weeks Delivery",
      ],
    },
    {
      price: "$2198",
      title: "Classic Video",
      features: [
        "60 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "5 Weeks Delivery",
      ],
    },
    {
      price: "$2489",
      title: "Premium Video",
      features: [
        "120 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
      ],
    },
    {
      price: "$4598",
      title: "Unlimited Video",
      features: [
        "120 Second Video",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
      ],
    },
  ],
};

const PackagesTailwind = () => {
  const videoPackages = packagesData["Video Animation"]; // ✅ Correctly accessing the array

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

      {/* Packages Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {videoPackages.map((pkg, idx) => (
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
