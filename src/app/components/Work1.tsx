"use client";
import React from "react";

// Use public folder image or online image URL
const workImage = "/iamge/how-we-img.webp";

const steps = [
  {
    number: "01",
    title: "Be In Control",
    text: "You choose whether to mint your NFTs on Blockparty, Ethereum, Solana, and others.",
  },
  {
    number: "02",
    title: "Decide your Drop",
    text: "Choo whether to create unique NFTs, Multiples Editions, Sales, Auctions and collection drops.",
  },
  {
    number: "03",
    title: "Expert Artists",
    text: "Bring your own idea to life and put experienced artists to create your NFTs that go viral..",
  },
  {
    number: "04",
    title: "Select Whats Trending",
    text: "You can choose to see trends that are not tailored for you by selecting a specific trend.",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        How We Work
      </h2>

      {/* Center Image */}
      <div className="relative w-[340px] h-[220px] z-10 mb-16 shadow-2xl rounded-lg overflow-hidden">
        <img
          src={workImage}
          alt="work process"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Cards */}
      <FloatingCard
        position="top-[10%] left-[10%]"
        delay="animate-float-slow"
        data={steps[0]}
      />
      <FloatingCard
        position="top-[10%] right-[10%]"
        delay="animate-float-slow-delay"
        data={steps[1]}
      />
      <FloatingCard
        position="bottom-[10%] left-[10%]"
        delay="animate-float-slow-delay"
        data={steps[2]}
      />
      <FloatingCard
        position="bottom-[10%] right-[10%]"
        delay="animate-float-slow"
        data={steps[3]}
      />
    </div>
  );
};

// ✅ Type-safe FloatingCard (no design change)
interface FloatingCardProps {
  position: string;
  delay: string;
  data: {
    number: string;
    title: string;
    text: string;
  };
}

const FloatingCard: React.FC<FloatingCardProps> = ({ position, delay, data }) => {
  return (
    <div className={`absolute ${position} ${delay}`}>
      <div className="w-72 backdrop-blur-md bg-white/70 border border-white/40 rounded-xl shadow-xl p-5 transition-all duration-500 hover:scale-105 hover:bg-sky-100 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-sky-600 mb-2">
          <span className="text-gray-400 font-bold text-2xl mr-2">
            {data.number}
          </span>
          {data.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">{data.text}</p>
      </div>
    </div>
  );
};

export default HowWeWork;
