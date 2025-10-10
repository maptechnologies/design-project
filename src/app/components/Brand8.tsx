"use client";
import React from "react";
import { motion } from "framer-motion";

const artworks = [
  {
    title: "Game Development",
    img: "/iamge/how-can1.webp",
  },
  {
    title: "Animation",
    img: "/iamge/how-can2.webp",
  },
  {
    title: "3D Modeling",
    img: "/iamge/how-can3.webp",
  },
  {
    title: "Environment Modeling",
    img: "/iamge/how-can4.webp",
  },
  {
    title: "Avatar",
    img: "/iamge/how-can5.webp",
  },
];

export default function NFTArtworks() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          What Artwork Is Sold On{" "}
          <span className="text-teal-500">NFT Marketplaces?</span>
        </h2>
        <p className="text-black mb-12">
          Literally Everything! Be it 3D animation, photos, videos, sports
          footage, GIFs and 3D models. Below are the services we offer
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {artworks.map((art, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: 0, scale: 1.05 }}
              initial={{
                rotate: i === 0 ? -15 : i === 1 ? -8 : i === 3 ? 8 : i === 4 ? 15 : 0,
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer w-44 md:w-52 transform hover:z-20 border-4 border-gray-800"
            >
              <img
                src={art.img}
                alt={art.title}
                className="rounded-md w-full h-56 object-cover"
              />
              <h3 className="mt-3 font-semibold text-gray-800">{art.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-black mb-8">
          <p>
            Want to earn millions? The NFT artwork <b>Everydays: The 5000 First Days</b> 
            sold for a record-breaking $69M. Similarly, you can too! Get your 3D Modelling NFT artwork 
            created by us and start selling your 3D art at the NFT marketplace.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-semibold">
            Let’s Get Started!
          </button>
          <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition font-semibold">
            Live Chat
          </button>
        </div>
      </div>
    </section>
  );
}
