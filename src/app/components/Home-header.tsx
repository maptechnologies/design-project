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
      <div className="relative mx-auto mt-8 w-[96%] max-w-[1800px] rounded-xl bg-[#3c3c3c]/95 backdrop-blur-md px-6 md:px-10 py-4 text-white shadow-2xl">
        
        {/* Top Right Icons */}
        <div className="absolute right-4 -top-9 hidden md:flex gap-6 text-md items-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/iamge/head-email-img.webp" alt="Email" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[black] transition">info@bloopsdesign.com</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/iamge/head-phone-img.webp" alt="Phone" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[black] transition">(313) 512-9347</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/iamge/chat-img-1.webp" alt="Chat" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[black] transition">Live Chat</span>
          </div>
        </div>

        {/* Logo + Nav + Mobile Button */}
        <div className="flex justify-between items-center flex-wrap gap-6">
          
          {/* Logo */}
          <div>
            <img src="/iamge/logof_new.png" alt="Logo" className="h-11" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-[#2f92ff] transition">HOME</Link>
            <Link href="/aboute" className="hover:text-[#2f92ff] transition">ABOUT US</Link>
            <Link href="/portfolio" className="hover:text-[#2f92ff] transition">PORTFOLIO</Link>

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
  <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[1050px] bg-white rounded-xl shadow-2xl p-6 z-50">
    <div className="grid grid-cols-4 gap-4">

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
          className="group border border-sky-300 rounded-lg h-[170px] flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#0084e0] hover:to-[#00d8f2] hover:shadow-xl"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-10 h-10 mb-3 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />

          <h4 className="font-bold text-[18px] mb-2 text-black">
            {item.title}
          </h4>

          <p className="text-sm leading-6 text-black">
            {item.desc}
          </p>
        </Link>
      ))}

      <div className="col-span-4 flex justify-center">
        <Link
          href="/services/nft-design"
          className="group border border-sky-300 rounded-lg h-[170px] w-[250px] flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#1696ea] hover:to-[#20d6f5] hover:shadow-xl"
        >
          <img
            src="/iamge/publisher1 (31).webp"
            alt="NFT DESIGN"
            className="w-10 h-10 mb-3 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />

          <h4 className="font-bold text-[18px] mb-2 text-black">
            NFT DESIGN
          </h4>

          <p className="text-sm leading-6 text-black">
            Get Your NFTs Designed From Highly Experienced Designers And Developers
          </p>
        </Link>
      </div>

    </div>
  </div>
)}
            </div>

            <Link href="/pricing" className="hover:text-[#2f92ff] transition">PRICING</Link>
            <Link href="/combopackage" className="hover:text-[#2f92ff] transition">COMBO PACKAGES</Link>
            <Link href="/contact" className="hover:text-[#2f92ff] transition">CONTACT US</Link>
          </nav>

          {/* Request A Quote Button */}
          <Link
            href="/quote"
            className="hidden md:block px-4 py-2 rounded-full font-bold text-sm border-2 border-[#2f92ff] text-[#2f92ff] hover:bg-[#2f92ff] hover:text-white transition"
          >
            Request A Quote
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white">
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-10 flex flex-col gap-2 text-lg">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/portfolio">PORTFOLIO</Link>
            <details>
              <summary>SERVICES</summary>
              <div className="pl-4 flex flex-col gap-1">
                <Link href="/services/logo-design">Logo Design</Link>
                <Link href="/services/branding">Branding</Link>
                <Link href="/services/web-design">Web Design</Link>
                <Link href="/services/ecommerce">E-Commerce</Link>
                <Link href="/services/video-animation">Video Animation</Link>
                <Link href="/services/social-media">Social Media</Link>
                <Link href="/services/content-writing">Content Writing</Link>
                <Link href="/services/seo">SEO</Link>
                <Link href="/services/nft-design">NFT Design</Link>
              </div>
            </details>
            <Link href="/pricing">PRICING</Link>
            <Link href="/combopackage">COMBO PACKAGES</Link>
            <Link href="/contact">CONTACT US</Link>
            <Link href="/quote" className="mt-2 px-4 py-2 border-2 border-[#2f92ff] rounded-full text-[#2f92ff] hover:bg-[#2f92ff] hover:text-white transition">
              Request A Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}