"use client";
import React from "react";

const packagesData = {
  "Social Marketing": [
    {
      price: "$299",
      title: "NFT LABS LITE",
      features: [
       "Base Character Creation",
"3 Traits/Accessories",
"2 revisions included",
"Sourcefile",
"Fully refundable until revision call",
      ],
    },
    {
      price: "$2400",
      title: "NFT ENTREPRENEUR",
      features: [
         " Base Character",
"30 Traits/Accessories",
"1,000 Variations",
"Collection Generation",
"Metadata",
"Source Files",
"2 Revisions included",
"Fully refundable until revision call",
        
      ],
    },
    {
      price: "$4999",
      title: "NFT MOONSHOT",
      features: [
       "Base Character",
"70 Traits/Accessories",
"10,000 Variations",
"Collection Generation",
"Metadata",
"Source Files",
"3 Revisions included",
"Fully refundable until revision call",
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
