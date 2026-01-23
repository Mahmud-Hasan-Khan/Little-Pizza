"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the slides data
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80', // Make sure these paths are correct
    title: 'Taste the Authentic Italian Pizza',
    subtitle: 'The freshest ingredients delivered right to your door.',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_640.jpg',
    title: 'Fast & Fresh Delivery',
    subtitle: 'Order now and enjoy hot pizza in minutes.',
  },
  {
    image: 'https://images.pexels.com/photos/5695589/pexels-photo-5695589.jpeg',
    title: 'Your Family\'s Favorite Pizzeria',
    subtitle: 'Great deals and classic recipes for everyone.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect for auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      // Advance the slide index, wrapping back to 0
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds (5000ms)

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
                      ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* optimized Image with next/image */}
          <div
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover transition-transform duration-5000 ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              sizes="100vw"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>

          {/* Text Content - Ensure high Z-index to sit above images/overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <div
              className={`transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl max-w-4xl tracking-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/menu"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Order Now
                </Link>

                <Link
                  href="/deals"
                  className="relative px-8 py-3 text-white font-bold rounded-full text-lg shadow-xl overflow-hidden active:scale-95 transition-all duration-300"
                >
                  {/* ১. মেইন গ্লাস ব্যাকগ্রাউন্ড */}
                  <span className="absolute inset-0 bg-white/10 border border-white/30 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]"></span>

                  {/* ২. হালকা ডার্ক লেয়ার */}
                  <span className="absolute inset-0 bg-black/5 -z-10 rounded-full"></span>

                  {/* ৩. বাটনের লেখা */}
                  <span className="relative z-10">View Deals</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}