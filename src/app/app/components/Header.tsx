"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">bloopsdesign</h1>
      <nav className="space-x-6">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/pricing">PRICING</Link>
        <Link href="/combo packages">COMBO PACKAGES</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
