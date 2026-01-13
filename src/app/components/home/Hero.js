// export default function Hero() {
//   return (
//     <div
//       className="relative h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Authentic Pizza, Delivered to Your Door.
//         </h1>
//         <p className="mt-4 text-lg">
//           Experience the taste of tradition, made with love.
//         </p>
//         <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition duration-300">
//           Order Online
//         </button>
//       </div>
//     </div>
//   );
// }

// components/home/Hero.js

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    // The Hero needs to take up space (e.g., 90% of viewport height)
    // The `pt-[64px]` you had on the menu component might need adjustment
    // depending on the actual height of your navbar.
    <section className="relative w-full overflow-hidden h-[90vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
                      ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text Content - Ensure high Z-index to sit above images/overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg mt-10">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              {slide.subtitle}
            </p>
            <Link
              href="/menu"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full text-lg shadow-xl hover:bg-primary-dark transition duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}