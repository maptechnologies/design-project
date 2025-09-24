'use client';

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
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-3xl font-bold leading-snug">
            Hitting <br /> New Records
          </h2>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 text-center flex-1">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-extrabold">{stat.number}</h3>
              <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 md:mt-0">
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition font-medium">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
