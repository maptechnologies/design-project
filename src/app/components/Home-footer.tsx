"use client";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="bg-gray-900 bg-cover bg-center text-gray-300 py-12"
        style={{ backgroundImage: "url('/iamge/design015.webp')" }}
      >
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
            <h3 className="text-xl font-bold text-white mb-4">Partner's</h3>
            <div className="flex flex-wrap gap-4">
              <img src="/iamge/design208.jpeg" alt="MasterCard" className="h-8" />
              <img src="/iamge/design207.jpeg" alt="Visa" className="h-8" />
              <img src="/iamge/design206.png" alt="PayPal" className="h-8" />
              <img src="/iamge/design205.png" alt="Wise" className="h-8" />
              <img src="/iamge/design209.png" alt="SSL Secure" className="h-8" />
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
      </footer>

      {/* Bottom Bar */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>
            Copyright &copy; Bloops Design. All Rights Reserved{" "}
            {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-2">
            <a href="/privacy.php" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms.php" className="hover:text-white transition">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;