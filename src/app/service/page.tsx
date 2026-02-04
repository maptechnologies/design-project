import React from "react";

// Services Data
const services = [
  {
    id: 1,
    title: "Logo-Design",
    desc: "Get A Logo That Defines Who You Are",
  },
  {
    id: 2,
    title: "Branding",
    desc: "Effective And Strategized Branding",
  },
  {
    id: 3,
    title: "Web-Dseign-Development",
    desc: "Get A Website That Increases Conversion",
  },
  {
    id: 4,
    title: "E-commerce",
    desc: "Sell Your Products In The Best Way Possible",
  },
  {
    id: 5,
    title: "Video-Animation",
    desc: "Animation That Delivers Your Message",
  },
  {
    id: 6,
    title: "Social-Media-Marketing",
    desc: "Get Your Brand Noticed Around Various",
  },
  {
    id: 7,
    title: "Contant-Writing",
    desc: "Professional Content That Boosts Your Roi",
  },
  {
    id: 8,
    title: "Seo",
    desc: "Get The Top Spot On Search Engine Ranking",
  },
  {
    id: 9,
    title: "NFT-Design",
    desc: "Get Your NFTs Designed From Highly Experienced Designers And Developers",
  },
];

export default function ServicesGrid() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 text-black lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="group border border-blue-400 text-center p-6 rounded-lg transition-all duration-300 bg-white 
                       hover:bg-blue-500 hover:text-white hover:shadow-xl"
          >
            <div className="text-4xl mb-4">🎯</div>

            <h3 className="font-bold text-lg">{s.title}</h3>

            {/* description hidden by default, show on hover */}
            <p className="mt-2 text-sm opacity-0 max-h-0 overflow-hidden 
                          group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
