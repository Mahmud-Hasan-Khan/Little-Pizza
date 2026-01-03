"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="bg-[#47fc2b] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Desktop Nav and Logo */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Logo */}
            <a href="/">
              <img
                src="img/Little Pizza Logo.webp" // Update this path to your actual logo image file
                alt="Little Pizza Logo"
                className=" h-8 md:h-10 w-auto" // Adjust sizing as needed
              />
            </a>
            {/* Desktop Links */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Menu</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
              <div className="relative">
                <button onClick={() => setIsMoreOpen(!isMoreOpen)} className="text-gray-600 hover:text-gray-800 flex items-center">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gallery</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gift Cards</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact & Hours</a>
                  </div>
                )}
              </div>
            </div>
            {/* Desktop Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">Order Online</button>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Header (Logo + Buttons) */}
          <div className="md:hidden flex justify-between items-center w-full">
            {/* Logo for Mobile */}
            <a href="/">
              <img
                src="img/Little Pizza Logo.webp"
                alt="Little Pizza Logo"
                className=" h-8 w-auto" // Adjust sizing as needed, removed md:h-10 as this is mobile only
              />
            </a>
            {/* Mobile Menu Button, Order, Search, Cart */}
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">Order Now</button>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Menu</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">About Us</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Gallery</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Gift Cards</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Contact & Hours</a>
        <div className="px-4 py-2">
          <button className="bg-black text-white w-full px-4 py-2 rounded-full font-semibold">Order Online</button>
        </div>
      </div>
    </nav>
  );
}
