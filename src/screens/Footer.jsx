import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="flex flex-col items-center justify-center gap-6 text-sm w-full text-center">
        
        {/* Top: Brand + Address */}
        <div className="flex flex-wrap justify-center gap-2 text-white text-sm">
          <span className="text-teal-400 font-semibold">Melula</span>
          <span>11 Dannevirkegade, København, 1763, Denmark</span>
          <span>hello@melula.com</span>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex gap-6 text-xl">
          <FaInstagram className="hover:text-teal-300 transition-colors" />
          <FaFacebookF className="hover:text-teal-300 transition-colors" />
          <FaPinterestP className="hover:text-teal-300 transition-colors" />
        </div>

        {/* Bottom: Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 font-semibold text-xs">
          <span className="hover:underline cursor-pointer">CONTACT & WHOLESALE</span>
          <span className="hover:underline cursor-pointer">TERMS AND CONDITIONS</span>
          <span className="hover:underline cursor-pointer">SHIPPING & RETURNS</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
