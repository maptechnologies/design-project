"use client";
import React, { useState } from "react";

const workData: Record<string, { img: string; title: string }[]> = {
  "2D Animation": [
    { img: "/iamge/1 (1).webp", title: "" },
    { img: "/iamge/2 (1).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
    { img: "/iamge/5 (3).webp", title: "" },
    { img: "/iamge/6 (3).webp", title: "" },
    { img: "/iamge/7.webp", title: "" },
    { img: "/iamge/8 (3).webp", title: "" },
  ],
  "3D Animation": [
    { img: "/iamge/1 (2).webp", title: "" },
    { img: "/iamge/2 (2).webp", title: "" },
    { img: "/iamge/3 (4).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
  ],
  Whiteboard: [
    { img: "/iamge/1 (5).webp", title: "" },
    { img: "/iamge/2 (5).webp", title: "" },
    { img: "/iamge/4 (5).webp", title: "" },
    { img: "/iamge/3 (5).webp", title: "" },
  ],
  "Motion Graphics": [
    { img: "/iamge/2 (1).webp", title: "" },
    { img: "/iamge/3 (6).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
    { img: "/iamge/1 (6).webp", title: "" },
  ],
  Typography: [
    { img: "/iamge/1 (1).webp", title: "" },
    { img: "/iamge/2 (7).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
  ],
  "Logo Animation": [
    { img: "/iamge/4.webp", title: "" },
    { img: "/iamge/2 (1).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/5.webp", title: "" },
    { img: "/iamge/6 (7).webp", title: "" },
  ],
  "Screen cast": [
    { img: "/iamge/1 (1).webp", title: "" },
    { img: "/iamge/2 (1).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
  ],
  Illustration: [
    { img: "/iamge/1 (2).webp", title: "" },
    { img: "/iamge/2 (2).webp", title: "" },
    { img: "/iamge/3 (2).webp", title: "" },
    { img: "/iamge/4 (1).webp", title: "" },
    { img: "/iamge/6 (1).webp", title: "" },
    { img: "/iamge/6.webp", title: "" },
    { img: "/iamge/7 (1).webp", title: "" },
  ],
  "Product Animation": [
    { img: "/iamge/1 (1).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
    { img: "/iamge/5.webp", title: "" },
    { img: "/iamge/7 (6).webp", title: "" },
    { img: "/iamge/6 (8).webp", title: "" },
    { img: "/iamge/8 (6).webp", title: "" },
  ],
  "Animation Music video": [
    { img: "/iamge/5.webp", title: "" },
    { img: "/iamge/1 (1).webp", title: "" },
    { img: "/iamge/2 (1).webp", title: "" },
    { img: "/iamge/3 (1).webp", title: "" },
    { img: "/iamge/4.webp", title: "" },
    { img: "/iamge/8.webp", title: "" },
    { img: "/iamge/7.webp", title: "" },
  ],
};

const categories = Object.keys(workData);

const WorkGallery: React.FC = () => {
  const [active, setActive] = useState(categories[0]);
  const [selectedCard, setSelectedCard] = useState<{ img: string; title: string } | null>(null);

  return (
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-3xl text-black font-bold mb-3">A Glimpse Of Our Recent Work</h2>
      <p className="text-black mb-10  max-w-2xl mx-auto">
        We have years of experience in digital marketing and design. We have spent years delivering
        high-quality work for our customers. Have a look at our recent work.
      </p>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-6 justify-center px-4 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`pb-2 font-medium border-b-2 transition-all ${
              active === cat
                ? "text-sky-600 border-sky-500"
                : "text-gray-600 border-transparent hover:text-sky-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16 mt-6">
        {workData[active].map((item, i) => (
          <div
            key={i}
            onClick={() => setSelectedCard(item)}
            className="relative overflow-hidden rounded-2xl shadow-lg group hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title || `Work ${i + 1}`}
              className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image View */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white p-4 rounded-2xl shadow-xl max-w-3xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={selectedCard.img}
              alt={selectedCard.title || "Selected work"}
              className="w-full h-[450px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{selectedCard.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
