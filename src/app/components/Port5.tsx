"use client";
import React, { useState } from "react";

const works = [
  { id: 1, img: "/iamge/port-img-1.webp", title: "Slashing Pumpkins" },
  { id: 2, img: "/iamge/port-img-2.webp", title: "Robot Design" },
  { id: 3, img: "/iamge/port-img-3.webp", title: "Seoul Bowl" },
  { id: 4, img: "/iamge/port-img-4.webp", title: "Ape Design" },
  { id: 5, img: "/iamge/port-img-5.webp", title: "Space Logo" },
  { id: 6, img: "/iamge/port-img-6.webp", title: "Pixel Art" },
  { id: 7, img: "/iamge/port-img-7.webp", title: "Pixel Art" },
  { id: 8, img: "/iamge/port-img-8.webp", title: "Pixel Art" },
  { id: 9, img: "/iamge/port-img-9.webp", title: "Pixel Art" },
];

export default function PortfolioGrid() {
  const [selected, setSelected] = useState<{ img: string; title: string } | null>(null);

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Create your NFT's</h2>
        <p className="text-black mt-2 max-w-2xl mx-auto">
          NFTs we design for you are as good as the ones you can see here
        </p>
        <p className="text-blue-500">:</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition"
            onClick={() => setSelected(work)}
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal (Large Image View) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white p-4 rounded-xl max-w-3xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-3 text-gray-800 font-semibold">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
