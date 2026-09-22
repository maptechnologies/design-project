// CTASection.jsx

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CTASection = () => {
  return (
    <div
      className="py-20 px-6 md:px-16 flex  mt-12 flex-col md:flex-row items-center justify-between text-white"
      style={{
        background:
          "linear-gradient(90deg, #f6a8c0 0%, #f7b98f 25%, #f0cf9a 45%, #b9d3a3 70%, #8fb7b0 85%, #7d94b0 100%)",
      }}
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl md:text-4xl text-white font-bold leading-tight">
          Are You Ready To <br className="md:hidden" />
          Place Your Order?
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Phone Info */}
        <div className="flex items-center text-white space-x-3">
          <FaPhoneAlt className="text-2xl text-white" />
          <div>
            <p className="text-xs tracking-wide text-white/80 uppercase">Call us at</p>
            <p className="font-semibold text-white">+1 (647) 699-1240</p>
          </div>
        </div>

        {/* Live Chat Button */}
        <button className="bg-white text-black font-semibold text-sm py-3 px-7 rounded-full shadow hover:shadow-lg transition whitespace-nowrap">
          START LIVE CHAT
        </button>
      </div>
    </div>
  );
};

export default CTASection;