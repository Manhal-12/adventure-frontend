import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-3">MyBookStore</h3>
            <p className="text-sm">Quality books, great prices. Follow us for updates and offers.</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-red-800"><FaFacebookF /></a>
              <a href="#" className="text-red-800"><FaTwitter /></a>
              <a href="#" className="text-red-800"><FaInstagram /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">Phone: +252-617-900-033 || +252-613-762-893</p>
            <p className="text-sm">Email: adventureshop@gmail.com</p>
            <a href="https://wa.me/252617900033" className="inline-flex items-center gap-2 mt-3 text-sm bg-green-600 text-white px-3 py-2 rounded-full">Chat on WhatsApp</a>
            <a href="https://wa.me/252613762893" className="inline-flex items-center gap-2 mt-3 text-sm bg-green-600 text-white px-3 py-2 rounded-full">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-sm text-center text-gray-500">© {new Date().getFullYear()} MyBookStore. All rights reserved.</div>
      </div>
    </footer>
  );
}
