"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="relative z-50">
      {/* Header Container */}
      <div className="bg-[#3c3c3c] text-white rounded-xl mx-4 md:mx-8 mt-4 md:mt-8 px-1 md:px-8 py-4 relative">
        
        {/* Top Right Icons */}
        <div className="absolute right-4 top-2 hidden md:flex gap-6 text-sm items-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/icons/email.png" alt="Email" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[#2f92ff] transition">info@bloopsdesign.com</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/icons/phone.png" alt="Phone" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[#2f92ff] transition">(313) 512-9347</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/icons/chat.png" alt="Chat" className="w-5 h-5 group-hover:rotate-180 transition duration-300" />
            <span className="group-hover:text-[#2f92ff] transition">Live Chat</span>
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
            <Link href="/about" className="hover:text-[#2f92ff] transition">ABOUT US</Link>
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
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[750px] bg-white text-black p-6 rounded-lg shadow-xl grid grid-cols-3 gap-4 z-50">
                  {[
                    { title: "LOGO DESIGN", desc: "Get A Logo That Defines Who You Are", link: "/services/logo-design" },
                    { title: "BRANDING", desc: "Effective Branding That Works", link: "/services/branding" },
                    { title: "WEB DESIGN", desc: "Boost Conversions with Design", link: "/services/web-design" },
                    { title: "E-COMMERCE", desc: "Sell Products Online Easily", link: "/services/ecommerce" },
                    { title: "VIDEO ANIMATION", desc: "Animated Videos That Work", link: "/services/video-animation" },
                    { title: "SOCIAL MEDIA", desc: "Social Media Marketing Done Right", link: "/services/social-media" },
                    { title: "CONTENT WRITING", desc: "Pro Content That Sells", link: "/services/content-writing" },
                    { title: "SEO", desc: "Top Google Rankings", link: "/services/seo" },
                    { title: "NFT DESIGN", desc: "Professional NFT Designs", link: "/services/nft-design" },
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
