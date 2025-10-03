import React from 'react';

const packages = [
  {
    price: "$149",
      title: "Startup Collateral",
      features: [
        "2 Stationery Design Set",
        "FREE Fax Template",
        "Print Ready Formats",
        "UNLIMITED Revisions",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        
      ],
    },
    {
      price: "$299",
      title: "Collateral Classic",
      features: [
        "2 Stationery Design Set",
        "UNLIMITED Revisions",
        "Flyer Design",
        "Brochure Design (Bi-fold/Tri-fold)",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        
      ],
    },
    {
      price: "$499",
      title: "Premium Collateral",
      features: [
        "2 Stationery Design Set",
        "Packaging Design",
        "UNLIMITED Revisions",
        "T-Shirt Design",
        "100% Satisfaction Guarantee",
        "Money Back Guarantee *",
        "Unlimited Revisions",
        
      ],
    },
  {
    price: "$699",
    title: " Unlimited Collateral",
    features: [
      "2 Stationery Design Set",
      "Menu Card Design",
      "T-Shirt Design",
      "1 Banner Design",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ]
  },
  
];

const PackagesTailwind = () => {
  return (
    <div className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl text-black font-bold mb-2">Most Affordable Packages</h2>
      <p className="text-gray-600 text-black mb-10">
        We are well aware of the competition. That is the reason why we have a fair pricing model. <br />
        We ensure quality over quantity on each order.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-gradient-to-b from-sky-400 to-sky-600 text-white rounded-xl w-80 p-6 shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-4xl font-bold mb-2">{pkg.price}</div>
              <div className="text-xl font-medium capitalize mb-4">{pkg.title}</div>
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
