import React, { useState, useRef } from "react";

interface CardData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

// Replace the "image" values below with your own icon/image paths.
const cards: CardData[] = [
  {
    image: "/iamge/design97867789.png",
    alt: "Abstract Mark icon",
    title: "UI/UX Website",
    description:
      "The target of a website is always to make the user gather info or to place an order or whatever the purpose of website is. We take pride in the way we are making things better for our clients out there through our web designing services with supreme quality, efficient navigation, aesthetic designs, interactive visuals and user centric approach.",
  },
  {
    image: "/iamge/design1 (175865867).png",
    alt: "Letter Based Logos icon",
    title: "B2B And B2C Portals",
    description:
      "One of our favorite service that we enjoy working on are online portals that are used by the users to look for information and to perform certain tasks. We help you bring different business procedures together at one point and connect them, which allows you to handle things more efficiently and have a lookout for whatever’s happening in your company.",
  },
  {
    image: "/iamge/design1 (9879676).png",
    alt: "Emblem Logos icon",
    title: "E-Commerce Website",
    description:
      "One of the foremost fronts of business these days are websites and online platforms to perform sales and product displays. This is why we often recommend our customers with products to sell, to go for our e-commerce site services. Our well-designed e-Commerce sites help you achieve your sales targets in no time.",
  },
  {
    image: "/iamge/design1 (9787).png",
    alt: "Wordmark Mark icon",
    title: "Blog Website",
    description:
      "Want an outlet for you to share your ideas and thoughts with the world out there and watch those ideas make a ripple in the ocean of the world? A blog site serves you just the purpose. Our experts in blog designing are adept in what makes the perfect blog website and give you a platform that makes sure your voice is heard and appreciated.",
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
        "relative px-6 sm:px-7 h-[480px] sm:h-[460px] md:h-[500px] md:px-13 py-8 justify-center sm:py-9 md:py-10 cursor-pointer",
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
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 sm:mb-5 overflow-hidden transition-colors duration-300"
        style={{
          background: isActive
            ? "rgba(255,255,255,0.15)"
            : "linear-gradient(135deg, #0077E4 0%, #00C2F0 100%)",
        }}
      >
        <img src={card.image} alt={card.alt} className="w-full h-full object-cover rounded-full" draggable={false} />
      </div>

      <h3
        className="text-base sm:text-lg font-semibold mb-2 sm:mb-2.5 transition-colors duration-300"
        style={{ color: isActive ? "#ffffff" : "#1a1a1a" }}
      >
        {card.title}
      </h3>

      <p
        className="text-[15px] transition-colors duration-300"
        style={{ color: isActive ? "rgba(255,255,255,0.92)" : "#6b7280", lineHeight: "1.6" }}
      >
        {card.description}
      </p>
    </div>
  );
}

export default function LogoTypesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const stopDragging = () => {
    const el = scrollRef.current;
    isDragging.current = false;
    if (el) el.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    el.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <div className="w-full bg-white">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto select-none w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab" }}
      >
        {cards.map((card, index) => (
          <div
            key={card.title + index}
            className="flex-shrink-0 w-[85%] sm:w-1/2 lg:w-1/4"
          >
            <Card
              card={card}
              isActive={activeIndex === index}
              onEnter={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
              showBorder
            />
          </div>
        ))}
      </div>
    </div>
  );
}