"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="absolute top-6 left-0 w-full z-[9999]">
      {/* Header Container */}
      <div className="relative mx-auto mt-8 w-[94%] sm:w-[90%] md:w-[88%] lg:w-[80%] xl:w-[70%] 2xl:w-[58%] max-w-[1800px] rounded-xl bg-[#4c4c4c]/95 backdrop-blur-md px-4 sm:px-5 md:px-3 lg:px-5 py-5 md:py-6 text-white shadow-2xl">

        {/* Top Right Icons */}
        <div className="absolute right-4 -top-9 font-family: var(--font-serif) hidden lg:flex gap-4 xl:gap-6 text-sm xl:text-md items-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src="/iamge/head-email-img.webp"
              alt="Email"
              className="w-5 h-5 group-hover:rotate-180 transition duration-300"
            />
            <span className="group-hover:text-[black] transition">
              info@bloopsdesign.com
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src="/iamge/head-phone-img.webp"
              alt="Phone"
              className="w-5 h-5 group-hover:rotate-180 transition duration-300"
            />
            <span className="group-hover:text-[black] transition">
              (313) 512-9347
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src="/iamge/chat-img-1.webp"
              alt="Chat"
              className="w-5 h-5 group-hover:rotate-180 transition duration-300"
            />
            <span className="group-hover:text-[black] transition">
              Live Chat
            </span>
          </div>
        </div>

        {/* Logo + Nav + Mobile Button */}
        <div className="flex justify-between items-center gap-4">

          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/iamge/logof_new.png"
              alt="Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3 text-xs xl:text-sm font-medium whitespace-nowrap">

            <Link
              href="/"
              className="hover:text-[#2f92ff] transition"
            >
              HOME
            </Link>

            <Link
              href="/aboute"
              className="hover:text-[#2f92ff] transition"
            >
              ABOUT US
            </Link>

            <Link
              href="/portfolio"
              className="hover:text-[#2f92ff] transition"
            >
              PORTFOLIO
            </Link>

            {/* SERVICES Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                SERVICES <span className="text-xs">▼</span>
              </span>

              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[min(1050px,calc(100vw-32px))] bg-white rounded-xl shadow-2xl p-4 sm:p-5 lg:p-6 z-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

                    {[
                      {
                        title: "LOGO DESIGN",
                        desc: "Get A Logo That Defines Who You Are",
                        icon: "/iamge/publisher1 (24).webp",
                        link: "/services/logo-design",
                      },
                      {
                        title: "BRANDING",
                        desc: "Effective And Strategized Branding",
                        icon: "/iamge/publisher1 (25).webp",
                        link: "/services/branding",
                      },
                      {
                        title: "WEB DESIGN & DEVELOPMENT",
                        desc: "Get A Website That Increases Conversion",
                        icon: "/iamge/publisher1 (26).webp",
                        link: "/services/web-design",
                      },
                      {
                        title: "E-COMMERCE",
                        desc: "Sell Your Products In The Best Way Possible",
                        icon: "/iamge/publisher1 (27).webp",
                        link: "/services/ecommerce",
                      },
                      {
                        title: "VIDEO ANIMATION",
                        desc: "Animation That Delivers Your Message",
                        icon: "/iamge/publisher1 (28).webp",
                        link: "/services/video-animation",
                      },
                      {
                        title: "SOCIAL MEDIA",
                        desc: "Get Your Brand Noticed Around Various",
                        icon: "/iamge/publisher1 (29).webp",
                        link: "/services/social-media",
                      },
                      {
                        title: "CONTENT WRITING",
                        desc: "Professional Content That Boosts Your ROI",
                        icon: "/iamge/publisher1 (30).webp",
                        link: "/services/content-writing",
                      },
                      {
                        title: "SEO",
                        desc: "Get The Top Spot On Search Engine Ranking",
                        icon: "/iamge/publisher1 (31).webp",
                        link: "/services/seo",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="group border border-sky-300 rounded-lg min-h-[160px] sm:h-[170px] font-family: var(--font-serif) flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#0084e0] hover:to-[#00d8f2] hover:shadow-xl"
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 mb-3 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />

                        <h4 className="font-bold text-[16px] sm:text-[18px] mb-2 text-black">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-black">
                          {item.desc}
                        </p>
                      </Link>
                    ))}

                    {/* NFT DESIGN */}
                    <div className="sm:col-span-2 lg:col-span-4 flex justify-center">
                      <Link
                        href="/services/nft-design"
                        className="group border border-sky-300 rounded-lg min-h-[160px] sm:h-[170px] w-full sm:w-[250px] flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#1696ea] hover:to-[#20d6f5] hover:shadow-xl"
                      >
                        <img
                          src="/iamge/publisher1 (31).webp"
                          alt="NFT DESIGN"
                          className="w-10 h-10 mb-3 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />

                        <h4 className="font-bold text-[16px] sm:text-[18px] mb-2 text-black">
                          NFT DESIGN
                        </h4>

                        <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-black">
                          Get Your NFTs Designed From Highly Experienced
                          Designers And Developers
                        </p>
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="hover:text-[#2f92ff] transition"
            >
              PRICING
            </Link>

            <Link
              href="/combopackage"
              className="hover:text-[#2f92ff] transition"
            >
              COMBO PACKAGES
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#2f92ff] transition"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Request A Quote Button */}
          <Link
            href="/quote"
            className="hidden lg:flex shrink-0 items-center justify-center whitespace-nowrap px-4 xl:px-6 py-2 rounded-full font-bold text-xs xl:text-base border-2 border-[#2eb1c5] text-[#17a2b8] hover:bg-[#17a2b8] hover:text-white transition-all duration-300"
          >
            Request A Quote
          </Link>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden shrink-0 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden mt-6 pt-5 border-t border-white/20 flex flex-col gap-5 text-base sm:text-lg">

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              HOME
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              ABOUT US
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              PORTFOLIO
            </Link>

            {/* Mobile Services */}
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span>SERVICES</span>
                <span className="text-xs transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <div className="mt-4 pl-4 flex flex-col gap-3 text-sm sm:text-base text-white/90">
                <Link href="/services/logo-design">
                  Logo Design
                </Link>

                <Link href="/services/branding">
                  Branding
                </Link>

                <Link href="/services/web-design">
                  Web Design
                </Link>

                <Link href="/services/ecommerce">
                  E-Commerce
                </Link>

                <Link href="/services/video-animation">
                  Video Animation
                </Link>

                <Link href="/services/social-media">
                  Social Media
                </Link>

                <Link href="/services/content-writing">
                  Content Writing
                </Link>

                <Link href="/services/seo">
                  SEO
                </Link>

                <Link href="/services/nft-design">
                  NFT Design
                </Link>
              </div>
            </details>

            <Link
              href="/pricing"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              PRICING
            </Link>

            <Link
              href="/combopackage"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              COMBO PACKAGES
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="hover:text-[#2f92ff] transition"
            >
              CONTACT US
            </Link>

            <Link
              href="/quote"
              onClick={() => setMobileMenu(false)}
              className="mt-1 w-fit px-5 py-2 border-2 border-[#60d3eb] rounded-full text-[#60d3eb] hover:bg-[#60d3eb] hover:text-white transition"
            >
              Request A Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
