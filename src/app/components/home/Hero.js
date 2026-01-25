"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (!slides.length) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide._id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-5000 ease-out ${index === currentSlide && isMounted ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
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
                  <span className="absolute inset-0 bg-white/10 border border-white/30 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]"></span>

                  <span className="absolute inset-0 bg-black/5 -z-10 rounded-full"></span>

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