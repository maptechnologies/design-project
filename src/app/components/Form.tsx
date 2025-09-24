"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-2">
            Our friendly call center representatives are always available round
            the clock for any guidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let’s Talk.
            </h3>

            <div className="flex items-start space-x-4">
              <Phone className="text-cyan-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-xs uppercase text-gray-500">Call Us At</p>
                <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  (313) 512-9347
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              We are available on live chat! Just ping us and we will take care
              of it all.
            </p>

            <div className="flex items-start space-x-4">
              <MessageCircle className="text-cyan-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-xs uppercase text-gray-500">Let’s Chat Now</p>
                <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Live Chat
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone *"
                className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <textarea
              placeholder="Requirement *"
              rows={4}
              className="w-full rounded-md p-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-cyan-500 text-black font-semibold shadow-sm hover:bg-cyan-50 transition"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
