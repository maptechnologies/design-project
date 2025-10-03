import React from "react";

// Services Data
const services = [
  {
    id: 1,
    title: "LOGO DESIGN",
    desc: "Get A Logo That Defines Who You Are",
  },
  {
    id: 2,
    title: "BRANDING",
    desc: "Effective And Strategized Branding",
  },
  {
    id: 3,
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Get A Website That Increases Conversion",
  },
  {
    id: 4,
    title: "E-COMMERCE",
    desc: "Sell Your Products In The Best Way Possible",
  },
  {
    id: 5,
    title: "VIDEO ANIMATION",
    desc: "Animation That Delivers Your Message",
  },
  {
    id: 6,
    title: "SOCIAL MEDIA MARKETING",
    desc: "Get Your Brand Noticed Around Various",
  },
  {
    id: 7,
    title: "CONTENT WRITING",
    desc: "Professional Content That Boosts Your Roi",
  },
  {
    id: 8,
    title: "SEO",
    desc: "Get The Top Spot On Search Engine Ranking",
  },
  {
    id: 9,
    title: "NFT DESIGN",
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
            className="border border-teal-400 text-center p-6 rounded-lg transition bg-white 
                       hover:bg-red-500 hover:text-white hover:shadow-lg"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
