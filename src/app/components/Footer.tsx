"use client";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a fully in-house digital agency focusing on branding,
            marketing, web design and development with clients ranging from
            start-ups to enterprises.
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Partner’s</h3>
          <div className="flex flex-wrap gap-4">
            <img src="/iamge/certification.png" alt="MasterCard" className="h-8" />
            <img src="/iamge/cards.png" alt="Visa" className="h-8" />
            <img src="/iamge/par1.jpeg" alt="PayPal" className="h-8" />
            <img src="/iamge/par2.jpeg" alt="Wise" className="h-8" />
            <img src="/iamge/bark-verified-large-1.png" alt="SSL Secure" className="h-8" />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" /> info@bloopsdesign.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" /> (313) 512-9347
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> 
              200 Kensington Rd Apt 64, Taylors, SC 29687
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bloops Design. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
