import React, { useState } from "react";

const works = [
  { id: 1, img: "/iamge/8 (2).webp", title: "Slashing Pumpkins" },
  { id: 2, img: "/iamge/7.webp", title: "Robot Design" },
  { id: 3, img: "/iamge/8.webp", title: "Seoul Bowl" },
  { id: 4, img: "/iamge/9 (2).webp", title: "Ape Design" },
  { id: 5, img: "/iamge/9.webp", title: "Space Logo" },
  { id: 6, img: "/iamge/10.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/11.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/1.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/2.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/9.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/5.webp", title: "Pixel Art" },
  { id: 6, img: "/iamge/6.webp", title: "Pixel Art" },
 
];

export default function PortfolioGrid() {
  const [selected, setSelected] = useState<{ img: string; title: string } | null>(null);

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">A Glimpse Of Our Recent Work</h2>
        <p className="text-black mt-2 max-w-2xl mx-auto">
          We have years of experience in digital marketing and design. We have spent years in
delivering high quality work for our customers. Have a look at our recent work for our customers


        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition"
            onClick={() => setSelected(work)}
          >
            <img src={work.img} alt={work.title} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      {/* Modal (Large Image View) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative bg-white p-4 rounded-xl max-w-3xl w-[90%]">
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
