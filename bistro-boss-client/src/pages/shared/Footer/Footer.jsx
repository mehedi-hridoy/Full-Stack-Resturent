import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#232b33] text-white py-16 px-6 flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase mb-6">CONTACT US</h3>
          <div className="space-y-3 text-center md:text-left">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#0e1620] text-white py-16 px-6 flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-widest mb-4">Follow US</h3>
          <p className="text-sm text-gray-300 mb-6">Join us on social media</p>
          <div className="flex gap-6">
            <a href="#" aria-label="facebook" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="instagram" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="twitter" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#081018] text-white/90 py-6 flex items-center justify-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Mehedi Hasan Hridoy — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;