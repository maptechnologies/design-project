'use client';

import React, { useEffect, useState } from "react";

interface StatProps {
  target: number;
  label: string;
  suffix?: string; // jaise "+" ya "%"
}

const Counter: React.FC<StatProps> = ({ target, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 sec animation
    const increment = Math.ceil(target / (duration / 30));

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="text-center">
      <h3 className="text-3xl font-extrabold">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-300 mt-1">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
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
          <Counter target={500} label="happy customers" />
          <Counter target={180} label="experienced designers" />
          <Counter target={10} label="years in the industry" />
          <Counter target={400} label="website designed" />
          <Counter target={600} label="logo designed" />
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
