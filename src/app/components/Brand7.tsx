"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const AnimatedSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const text = "DESIGN";
  const letters = text.split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (letters.length + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "80vh",
        background: "#fff",
        flexWrap: "wrap",
      }}
    >
      {/* ✅ Left Vertical Animation */}
      <div
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "6vw",
          fontWeight: "bold",
          color: "#333",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: "block",
              opacity: i < index ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ✅ Right Section Center Aligned */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#444245",
            lineHeight: 1.2,
          }}
        >
        Improve Organic Traffic And   <br />
          <span style={{ color: "#3092ff" }}>Boost Engagement Rate </span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            color: "#555",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
         When chalking out all the important means of marketing and branding a business, marketing it through popular search engines is an important mean. It plays a pivotal role in expanding word to prospective customers and audience. Our profound search engine presence advocates brand authenticity, increases brand engagement and drives sales up by multifold. Our SEO experts make sure your brand reaches goals across the globe.
        </p>

        {/* ✅ Centered Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ffffff33",
            boxShadow: "0 0 20px rgba(48,146,255,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="px-10 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg backdrop-blur-lg transition-all"
        >
          Get a Free Quote
        </motion.button>
      </div>

      {/* ✅ Animated Form Popup */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-600 text-2xl hover:text-black"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                get your coupon & avail 70% discount
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-black text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-1">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSection;
