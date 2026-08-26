"use client";

import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "happy customers" },
    { number: "180+", label: "experienced designers" },
    { number: "10+", label: "years in the industry" },
    { number: "400+", label: "website designed" },
    { number: "600+", label: "logo designed" },
  ];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Heading - Center */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            Hitting <br className="sm:hidden" /> New Records
          </h2>
        </div>

        {/* Stats - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 sm:mt-2 capitalize">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Button - Center */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <button className="px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider shadow-lg hover:shadow-2xl">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;