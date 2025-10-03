"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-[#333] text-white px-6 md:px-20 py-4 flex items-center justify-between rounded-xl m-4 md:m-8 relative z-50">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <span className="text-[#2f92ff]">bloops</span>
        <span className="ml-1">design</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-[#2f92ff] transition">HOME</Link>
        <Link href="/about" className="hover:text-[#2f92ff] transition">ABOUT US</Link>
        <Link href="/portfolio" className="hover:text-[#2f92ff] transition">PORTFOLIO</Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="flex items-center gap-1 cursor-pointer">
            SERVICES <span className="text-xs">▼</span>
          </span>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-[750px] bg-white text-black p-6 rounded-lg shadow-xl grid grid-cols-3 gap-4 z-50">
              {[
                {
                  title: "LOGO DESIGN",
                  desc: "Get A Logo That Defines Who You Are",
                  link: "/services/logo-design",
                },
                {
                  title: "BRANDING",
                  desc: "Effective And Strategized Branding",
                  link: "/services/branding",
                },
                {
                  title: "WEB DESIGN & DEVELOPMENT",
                  desc: "Get A Website That Increases Conversion",
                  link: "/services/web-design",
                },
                {
                  title: "E-COMMERCE",
                  desc: "Sell Your Products In The Best Way Possible",
                  link: "/services/ecommerce",
                },
                {
                  title: "VIDEO ANIMATION",
                  desc: "Animation That Delivers Your Message",
                  link: "/services/video-animation",
                },
                {
                  title: "SOCIAL MEDIA MARKETING",
                  desc: "Get Your Brand Noticed Around Various",
                  link: "/services/social-media",
                },
                {
                  title: "CONTENT WRITING",
                  desc: "Professional Content That Boosts Your ROI",
                  link: "/services/content-writing",
                },
                {
                  title: "SEO",
                  desc: "Get The Top Spot On Search Engine Ranking",
                  link: "/services/seo",
                },
                {
                  title: "NFT DESIGN",
                  desc: "Get Your NFTs Designed From Highly Experienced Designers And Developers",
                  link: "/services/nft-design",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="border border-[#ccc] rounded-md p-4 hover:bg-[#2f92ff] hover:text-white transition duration-300 shadow-md"
                >
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/pricing" className="hover:text-[#2f92ff] transition">PRICING</Link>
        <Link href="/packages" className="hover:text-[#2f92ff] transition">COMBO PACKAGES</Link>
        <Link href="/contact" className="hover:text-[#2f92ff] transition">CONTACT US</Link>
      </nav>

      {/* Request A Quote Button */}
      <div className="hidden md:block">
        <Link
          href="/quote"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`px-4 py-2 rounded-full font-bold text-sm border-2 transition ${
            isHovered
              ? "bg-[#2f92ff] text-white border-[#2f92ff]"
              : "bg-black text-[#2f92ff] border-[#2f92ff]"
          }`}
        >
          Request A Quote
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="md:hidden text-white"
      >
        {mobileMenu ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-[#222] flex flex-col items-start gap-4 p-6 md:hidden z-40">
          <Link href="/" onClick={() => setMobileMenu(false)}>HOME</Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>ABOUT US</Link>
          <Link href="/portfolio" onClick={() => setMobileMenu(false)}>PORTFOLIO</Link>

          {/* Services mobile dropdown */}
          <details className="w-full">
            <summary className="cursor-pointer">SERVICES</summary>
            <div className="flex flex-col pl-4 mt-2">
              <Link href="/services/logo-design" onClick={() => setMobileMenu(false)}>Logo Design</Link>
              <Link href="/services/branding" onClick={() => setMobileMenu(false)}>Branding</Link>
              <Link href="/services/web-design" onClick={() => setMobileMenu(false)}>Web Design & Dev</Link>
              <Link href="/services/ecommerce" onClick={() => setMobileMenu(false)}>E-Commerce</Link>
              <Link href="/services/video-animation" onClick={() => setMobileMenu(false)}>Video Animation</Link>
              <Link href="/services/social-media" onClick={() => setMobileMenu(false)}>Social Media Marketing</Link>
              <Link href="/services/content-writing" onClick={() => setMobileMenu(false)}>Content Writing</Link>
              <Link href="/services/seo" onClick={() => setMobileMenu(false)}>SEO</Link>
              <Link href="/services/nft-design" onClick={() => setMobileMenu(false)}>NFT Design</Link>
            </div>
          </details>

          <Link href="/pricing" onClick={() => setMobileMenu(false)}>PRICING</Link>
          <Link href="/packages" onClick={() => setMobileMenu(false)}>COMBO PACKAGES</Link>
          <Link href="/contact" onClick={() => setMobileMenu(false)}>CONTACT US</Link>

          <Link
            href="/quote"
            onClick={() => setMobileMenu(false)}
            className="mt-4 px-4 py-2 rounded-full font-bold text-sm border-2 border-[#2f92ff] bg-white text-[#2f92ff] hover:bg-[#2f92ff] hover:text-white transition"
          >
            Request A Quote
          </Link>
        </div>
      )}
    </header>
  );
}
