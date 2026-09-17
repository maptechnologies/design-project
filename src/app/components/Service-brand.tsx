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
    image: "/iamge/logo-003.png",
    alt: "Abstract Mark icon",
    title: "Logo Designs",
    description:
      "Logo designs are seen as somewhat of a not so important thing by some of the newbies, but for our experienced brand managers, we know the importance it holds. with our years on experience in the industry and dozens of satisfied customers we draft the perfect logo for you in no more than 50 minutes.",
  },
  {
    image: "/iamge/logo-2980.png",
    alt: "Letter Based Logos icon",
    title: "Infographic Designs",
    description:
      "Conveying complex ideas and factual information becomes quite difficult sometimes, especially if lengthy. an easy way out of such laborious and complicated piles of information is an infographic. we work together with clients to sum up complicated information and numbers in one colorful and interesting infographic.",
  },
  {
    image: "/iamge/logo-90888.png",
    alt: "Emblem Logos icon",
    title: "Brochure Designs",
    description:
      "Brochures are harbingers of important information of products and brands and hence hold pivotal importance in the branding of any product. they have the potential of making or breaking a brand. hence, our designers who are adept in branding too, know how to design the brochures perfectly.",
  },
  {
    image: "/iamge/logo-39748.png",
    alt: "Wordmark Mark icon",
    title: "Stationery Design",
    description:
      "Our stationery design package offers a comprehensive stationery set design that includes paper, office supplies, letterheads, writing equipment, business cards, cases, and other similar items. the purpose of this stationery package is to paint up the whole collection of items in the same brand image.",
  },
  {
    image: "/iamge/logo-90888.png",
    alt: "Wordmark Mark icon",
    title: "Online Promotional Design",
    description:
      "When we say we own our clients and their work, we really mean it. We make sure we promote your business in the most noticeable way. With our online reputation management services, we make sure of the fact that whether it is your branding or social media posts that we are designing for, your brand soul is reflected in it with amazing designs.",
  },
  {
    image: "/iamge/logo-39748.png",
    alt: "Wordmark Mark icon",
    title: "Trade Show Design",
    description:
      "Our custom designs are always crafted keeping in mind the ambition of making them memorable and impactful. The same scheme is applied when it comes to trade designs as well, as we craft impressions that last a lifetime through designs that are inspiring and appealing, our designs bring engagement and customers to your products from your desired audience wherever you are in the world.",
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
        <img src={card.image} alt={card.alt} className="w-full h-full object-cover rounded-full" draggable={false} />
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
        className="flex overflow-x-auto select-none"
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