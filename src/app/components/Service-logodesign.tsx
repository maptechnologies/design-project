import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

// Replace the "image" values below with your own icon/image paths.
const cards: CardData[] = [
  {
    image: "/iamge/design1 (18).png",
    alt: "Abstract Mark icon",
    title: "Abstract Mark",
    description:
      "Abstract logos are a popular type of logo design for small businesses to large brands. abstract logos if done well are often simple in nature, making them perfect for clean and memorable logos.",
  },
  {
    image: "/iamge/design1 (19).png",
    alt: "Letter Based Logos icon",
    title: "Letter Based Logos",
    description:
      "Our templates for emblem logos are adequately professional as well as graphically illustrative. with our years on experience in the industry, we can draft the perfect logo for you in no more than 50 minutes.",
  },
  {
    image: "/iamge/design1 (20).png",
    alt: "Emblem Logos icon",
    title: "Emblem Logos",
    description:
      "This logo range relies on typography rather than much iconography to get the message across. these logos make use of letters to be creative. graphical techniques are used to illustrate the letters in a better way.",
  },
  {
    image: "/iamge/design1 (21).png",
    alt: "Wordmark Mark icon",
    title: "Wordmark Mark",
    description:
      "Wordmark logo designs use bold typography to directly get the message across using the corporation or brand name. this type of logo designing requires good understanding of fonts and custom formatting for text.",
  },
];

function Card({
  card,
  isActive,
  onEnter,
  onLeave,
  extraClass = "",
  showBorder = false,
}: {
  card: CardData;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  extraClass?: string;
  showBorder?: boolean;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={[
        "relative px-6 sm:px-7 h-110 md:px-8 py-8 justify-center sm:py-9 md:py-10 cursor-pointer",
        "transition-colors duration-300 overflow-hidden",
        showBorder ? "border-r border-gray-200 last:border-r-0" : "",
        extraClass,
      ].join(" ")}
      style={{
        background: isActive
          ? "linear-gradient(180deg, #0077E4 0%, #00C2F0 100%)"
          : "#f7f7f8",
      }}
    >
      <div
        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-5 sm:mb-6 overflow-hidden transition-colors duration-300"
        style={{ background: isActive ? "rgba(255,255,255,0.15)" : "transparent" }}
      >
        <img src={card.image} alt={card.alt} className="w-full h-full object-cover rounded-full" />
      </div>

      <h3
        className="text-base sm:text-lg font-semibold mb-2.5 sm:mb-3 transition-colors duration-300"
        style={{ color: isActive ? "#ffffff" : "#1a1a1a" }}
      >
        {card.title}
      </h3>

      <p
        className="text-sm leading-relaxed transition-colors duration-300"
        style={{ color: isActive ? "rgba(255,255,255,0.92)" : "#6b7280" }}
      >
        {card.description}
      </p>
    </div>
  );
}

export default function LogoTypesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [slide, setSlide] = useState(0);

  const goPrev = () => setSlide((s) => (s === 0 ? cards.length - 1 : s - 1));
  const goNext = () => setSlide((s) => (s === cards.length - 1 ? 0 : s + 1));

  return (
    <div className="w-full bg-white">
      {/* ---------- Mobile / tablet: slider ---------- */}
      <div className="lg:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={card.title} className="w-full flex-shrink-0">
                <Card
                  card={card}
                  isActive={activeIndex === index}
                  onEnter={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-[#0077E4] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-[#0077E4] transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: slide === index ? "22px" : "8px",
                background:
                  slide === index
                    ? "linear-gradient(90deg, #0077E4 0%, #00C2F0 100%)"
                    : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>

      {/* ---------- Desktop: static grid ---------- */}
      <div className="hidden lg:grid lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            isActive={activeIndex === index}
            onEnter={() => setActiveIndex(index)}
            onLeave={() => setActiveIndex(null)}
            showBorder
          />
        ))}
      </div>
    </div>
  );
}