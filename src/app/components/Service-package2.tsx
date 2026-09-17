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
    title: "Unlimited Collateral",
    features: [
      "2 Stationery Design Set",
      "Menu Card Design",
      "T-Shirt Design",
      "1 Banner Design",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
];

const ChatIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 5.94 2 10.5c0 2.6 1.44 4.92 3.7 6.45L5 22l4.53-2.42c.79.15 1.61.23 2.47.23 5.52 0 10-3.94 10-8.31C22 5.94 17.52 2 12 2z" />
  </svg>
);

const PackagesTailwind = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 text-center bg-gray-100">
      <style>{`
        .feature-list-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .feature-list-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.15);
          border-radius: 9999px;
        }
        .feature-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.6);
          border-radius: 9999px;
        }
        .feature-list-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.85);
        }
        .feature-list-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.6) rgba(255,255,255,0.15);
        }
        .group:hover .feature-list-scroll::-webkit-scrollbar-track {
          background: rgba(2,132,199,0.1);
        }
        .group:hover .feature-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(2,132,199,0.5);
        }
      `}</style>

      <h2 className="text-2xl sm:text-3xl text-black font-bold mb-2">
        Most Affordable Packages
      </h2>

      <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl mx-auto">
        We are well aware of the competition. That is the reason why we have a fair pricing model. <br className="hidden sm:block" />
        We ensure quality over quantity on each order.
      </p>

      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-b from-sky-500 to-cyan-400 hover:bg-none hover:bg-white text-white hover:text-sky-700 rounded-md w-full sm:w-80 md:w-80 lg:w-80 p-5 sm:p-6 shadow-lg hover:shadow-2xl flex flex-col justify-between border-2 border-transparent hover:border-sky-400 transition-all duration-300 ease-in-out"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold mb-3 text-white group-hover:text-sky-600 transition-colors duration-300">
                {pkg.price}
              </div>

              <hr className="border-white border-opacity-40 group-hover:border-sky-300 mb-4 transition-colors duration-300" />

              <div className="text-base sm:text-lg font-semibold mb-4 text-white group-hover:text-sky-700 transition-colors duration-300">
                {pkg.title}
              </div>

              <hr className="border-white border-opacity-40 group-hover:border-sky-300 mb-4 transition-colors duration-300" />

              <ul className="feature-list-scroll text-left space-y-2.5 pr-2 text-sm max-h-64 overflow-y-auto">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-white group-hover:text-sky-600 mr-2 mt-0.5 font-bold transition-colors duration-300">
                      ✓
                    </span>

                    <span className="text-white group-hover:text-gray-700 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button className="border-2 border-white group-hover:border-sky-500 rounded-full text-white group-hover:text-sky-600 font-bold py-2.5 px-6 sm:px-7 hover:bg-white hover:text-sky-600 transition whitespace-nowrap text-sm sm:text-base">
                ORDER NOW
              </button>

              <div className="text-right leading-tight text-white group-hover:text-sky-700 transition-colors duration-300">
                <div className="flex items-center justify-end gap-1 text-xs opacity-90">
                  Click here to <ChatIcon />
                </div>

                <div className="font-bold text-sm sm:text-base">
                  Live Chat
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-white border-2 border-cyan-400 text-gray-800 font-medium py-3 px-8 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-colors duration-300 shadow-sm">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default PackagesTailwind;