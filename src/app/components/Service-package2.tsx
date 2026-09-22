import React, { useRef } from 'react';

const packages = [
  {
    price: "$299",
    title: "Basic Website Package",
    features: [
      "1 Page Website Design",
      "HTML Based",
      "1 Banner Design",
      "Contact/Query Form",
      "3 Revisions",
      "Complete W3C Certified HTML",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$549",
    title: "Startup Website Package",
    features: [
      "3 Page Website Design",
      "HTML Based",
      "Hover Effects",
      "2 Banner Designs",
      "Sliding Banner",
      "2 Stock Photos (You can provide us more)",
      "Contact/Query Form",
      "3 Professional Email ID's",
      "6 Revisions",
      "Complete W3C Certified HTML",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$799",
    title: "Professional Website",
    features: [
      "Up to 5 Pages Website Design",
      "3 Stock Photos (You can provide us more)",
      "3 Banner Designs",
      "Sliding Banner",
      "Hover Effects",
      "Content Management System (WordPress)",
      "5 Professional Email ID's",
      "Search Engine Submission",
      "Unlimited Revisions",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$1499",
    title: "Elite Website",
    features: [
      "Unique 5 Pages Website Design",
      "Custom, Interactive, Dynamic & High End Web Design",
      "Custom WordPress Development",
      "5 Stock Images",
      "5 Banner Designs",
      "Sliding Banners",
      "Unlimited Revisions",
      "Special Hoover Effects",
      "Content Management System (WordPress)",
      "Mobile Responsive",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (If Required)",
      "5 Professional Email ID's",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$1999",
    title: "Identity Website Package",
    features: [
      "10 Unique Pages Website Design",
      "Custom, Interactive, Dynamic & High End Design",
      "Customize WordPress (or) PHP Development",
      "Interactive Sliding Banners",
      "10 Stock Images",
      "10 Banner Designs",
      "Special Hoover Effects",
      "Unlimited Revisions",
      "Content Management System (WordPress or Custom)",
      "Mobile Responsive",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "10 Professional Email ID's",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Complete W3C Certified HTML",
      "Industry specified Team of Award Winning Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
  {
    price: "$3499",
    title: "Corporate Website",
    features: [
      "15 to 20 Unique Pages Website Design",
      "Custom Made, Interactive, Dynamic & High End Design",
      "Customized WordPress & PHP Development",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
      "Unlimited Revisions",
      "Special Hoover Effects",
      "Content Management System",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "Multi Lingual (Optional)",
      "Custom Dynamic Forms (Optional)",
      "Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Mobile Responsive",
      "Up to 15 Professional Email ID's",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Complete W3C Certified HTML",
      "Industry specified Team of Award Winning Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "Money Back Guarantee *",
      "Unlimited Revisions",
    ],
  },
];

const ChatIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 5.94 2 10.5c0 2.6 1.44 4.92 3.7 6.45L5 22l4.53-2.42c.79.15 1.61.23 2.47.23 5.52 0 10-3.94 10-8.31C22 5.94 17.52 2 12 2z" />
  </svg>
);

const PackagesTailwind = () => {
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

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 text-center bg-gray-100">
      <style>{`
        .pkg-slider::-webkit-scrollbar { display: none; }
        .pkg-slider { -ms-overflow-style: none; scrollbar-width: none; }

        .feature-list-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .feature-list-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.15);
          border-radius: 9999px;
        }
        .feature-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.6);
          border-radius: 9999px;
        }
        .feature-list-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.85);
        }
        .feature-list-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.6) rgba(255,255,255,0.15);
        }
        .group:hover .feature-list-scroll::-webkit-scrollbar-track {
          background: rgba(2,132,199,0.1);
        }
        .group:hover .feature-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(2,132,199,0.5);
        }
      `}</style>

      <h2 className="text-2xl sm:text-3xl text-black font-bold mb-2">
        Most Affordable Packages
      </h2>

      <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl mx-auto">
        We are well aware of the competition. That is the reason why we have a fair pricing model. <br className="hidden sm:block" />
        We ensure quality over quantity on each order.
      </p>

      <div className="relative mx-auto sm:max-w-[904px] md:max-w-[1000px]">
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          aria-label="Previous packages"
          className="hidden md:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-sky-600 hover:bg-sky-50 transition"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={handleMouseMove}
          className="pkg-slider flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory select-none px-1 py-2 items-stretch"
          style={{ cursor: "grab" }}
        >
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              data-card
              className="group snap-start flex-shrink-0 bg-gradient-to-b from-sky-500 to-cyan-400 hover:bg-none hover:bg-white text-white hover:text-sky-700 rounded-md w-[85%] sm:w-72 md:w-80 p-5 sm:p-6 shadow-lg hover:shadow-2xl flex flex-col justify-between border-2 border-transparent hover:border-sky-400 transition-all duration-300 ease-in-out"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold mb-3 text-white group-hover:text-sky-600 transition-colors duration-300">
                  {pkg.price}
                </div>

                <hr className="border-white border-opacity-40 group-hover:border-sky-300 mb-4 transition-colors duration-300" />

                <div className="text-base sm:text-lg font-semibold mb-4 text-white group-hover:text-sky-700 transition-colors duration-300">
                  {pkg.title}
                </div>

                <hr className="border-white border-opacity-40 group-hover:border-sky-300 mb-4 transition-colors duration-300" />

                <ul className="feature-list-scroll text-left space-y-2.5 pr-2 text-sm max-h-64 overflow-y-auto">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-white group-hover:text-sky-600 mr-2 mt-0.5 font-bold transition-colors duration-300">
                        ✓
                      </span>

                      <span className="text-white group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <button className="border-2 border-white group-hover:border-sky-500 rounded-full text-white group-hover:text-sky-600 font-bold py-2.5 px-6 sm:px-7 hover:bg-white hover:text-sky-600 transition whitespace-nowrap text-sm sm:text-base">
                  ORDER NOW
                </button>

                <div className="text-right leading-tight text-white group-hover:text-sky-700 transition-colors duration-300">
                  <div className="flex items-center justify-end gap-1 text-xs opacity-90">
                    Click here to <ChatIcon />
                  </div>

                  <div className="font-bold text-sm sm:text-base">
                    Live Chat
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard("right")}
          aria-label="Next packages"
          className="hidden md:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg text-sky-600 hover:bg-sky-50 transition"
        >
          ›
        </button>
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-white border-2 border-cyan-400 text-gray-800 font-medium py-3 px-8 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-colors duration-300 shadow-sm">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default PackagesTailwind;