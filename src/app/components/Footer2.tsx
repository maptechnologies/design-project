// CTASection.jsx

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 via--200 to-gray-200 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-white">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl md:text-4xl text-black font-bold leading-tight">
          Are You Ready To <br className="md:hidden" />
          Place Your Order?
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Phone Info */}
        <div className="flex items-center text-black space-x-3">
          <FaPhoneAlt className="text-2xl" />
          <div>
            <p className="text-sm  text-black uppercase">Call us at</p>
            <p className="font-medium text-black">+1 (647) 699-1240</p>
          </div>
        </div>

        {/* Live Chat Button */}
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition">
          START LIVE CHAT
        </button>
      </div>
    </div>
  );
};

export default CTASection;
