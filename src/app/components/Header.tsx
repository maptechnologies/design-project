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
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="flex items-center gap-1 cursor-pointer">
            SERVICES <span className="text-xs">▼</span>
          </span>

          {dropdownOpen && (
            <div className="absolute top-full left-0 bg-[#444] rounded-lg shadow-lg mt-2 min-w-[180px] overflow-hidden">
              <Link href="/services/web-development" className="block px-5 py-2 hover:bg-[#2f92ff] transition">Web Development</Link>
              <Link href="/services/app-development" className="block px-5 py-2 hover:bg-[#2f92ff] transition">App Development</Link>
              <Link href="/services/seo" className="block px-5 py-2 hover:bg-[#2f92ff] transition">SEO</Link>
              <Link href="/services/design" className="block px-5 py-2 hover:bg-[#2f92ff] transition">Design</Link>
            </div>
          )}
        </div>

        <Link href="/pricing" className="hover:text-[#2f92ff] transition">PRICING</Link>
        <Link href="/packages" className="hover:text-[#2f92ff] transition">COMBOPACKAGES</Link>
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
              <Link href="/services/web-development" onClick={() => setMobileMenu(false)}>Web Development</Link>
              <Link href="/services/app-development" onClick={() => setMobileMenu(false)}>App Development</Link>
              <Link href="/services/seo" onClick={() => setMobileMenu(false)}>SEO</Link>
              <Link href="/services/design" onClick={() => setMobileMenu(false)}>Design</Link>
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
