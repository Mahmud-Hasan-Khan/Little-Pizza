// // "use client";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// // import useCartStore from "../../store/cart";
// // import useAuthStore from "../../store/auth";
// // import { useRouter } from "next/navigation";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const cart = useCartStore((state) => state.cart);
// //   const { isLoggedIn, user, logout } = useAuthStore();
// //   const router = useRouter();

// //   const handleLogout = () => {
// //     logout();
// //     setIsOpen(false);
// //     router.push("/");
// //   };

// //   return (
// //     <nav className="bg-dark shadow-lg sticky top-0 z-50">
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between items-center py-4">
// //           <div className="flex items-center">
// //             <Link href="/" className="flex items-center">
// //               <img
// //                 src="/img/Little Pizza Logo.webp"
// //                 alt="Little Pizza Logo"
// //                 className="h-10 w-auto"
// //               />
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex items-center space-x-8">
// //             <Link
// //               href="/"
// //               className="text-gray-300 hover:text-primary font-semibold"
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               href="/menu"
// //               className="text-gray-300 hover:text-primary font-semibold"
// //             >
// //               Menu
// //             </Link>
// //             <Link
// //               href="/about"
// //               className="text-gray-300 hover:text-primary font-semibold"
// //             >
// //               About Us
// //             </Link>
// //             <Link
// //               href="/contact"
// //               className="text-gray-300 hover:text-primary font-semibold"
// //             >
// //               Contact
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex items-center space-x-4">
// //             <Link
// //               href="/cart"
// //               className="relative text-gray-300 hover:text-primary"
// //             >
// //               <FaShoppingCart className="h-6 w-6" />
// //               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 {cart.length}
// //               </span>
// //             </Link>
// //             {isLoggedIn ? (
// //               <>
// //                 <Link href="/profile" className="text-gray-300 hover:text-primary font-semibold flex items-center">
// //                   <FaUserCircle className="h-6 w-6 mr-2" /> {user.name}
// //                 </Link>
// //                 <button onClick={handleLogout} className="text-gray-300 hover:text-primary font-semibold">Logout</button>
// //               </>
// //             ) : (
// //               <Link href="/login" className="text-gray-300 hover:text-primary">
// //                 <FaUserCircle className="h-6 w-6" />
// //               </Link>
// //             )}
// //           </div>

// //           <div className="md:hidden flex items-center">
// //              <Link
// //               href="/cart"
// //               className="relative text-gray-300 hover:text-primary mr-4"
// //             >
// //               <FaShoppingCart className="h-6 w-6" />
// //               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 {cart.length}
// //               </span>
// //             </Link>
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="text-white focus:outline-none"
// //             >
// //               <svg
// //                 className="h-6 w-6"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M4 6h16M4 12h16m-7 6h7"
// //                 ></path>
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-dark`}>
// //         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //           <Link
// //             href="/"
// //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
// //           >
// //             Home
// //           </Link>
// //           <Link
// //             href="/menu"
// //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
// //           >
// //             Menu
// //           </Link>
// //           <Link
// //             href="/about"
// //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
// //           >
// //             About Us
// //           </Link>
// //           <Link
// //             href="/contact"
// //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
// //           >
// //             Contact
// //           </Link>
// //         </div>
// //         <div className="border-t border-gray-700 px-5 py-3">
// //            {isLoggedIn ? (
// //               <div className="flex flex-col space-y-3">
// //                 <Link
// //                   href="/profile"
// //                   className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
// //                 >
// //                    <FaUserCircle className="h-6 w-6 mr-2" />
// //                   {user.name}'s Profile
// //                 </Link>
// //                  <button onClick={handleLogout} className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
// //               </div>
// //             ) : (
// //               <Link
// //                 href="/login"
// //                 className="flex items-center justify-center w-full bg-primary text-white rounded-md py-2 text-base font-medium"
// //               >
// //                 Login / Register
// //               </Link>
// //             )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react"; // 1. Import useEffect
// import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import useCartStore from "../../store/cart";
// import useAuthStore from "../../store/auth";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   // 2. State to track if the user has scrolled down
//   const [scrolled, setScrolled] = useState(false);
  
//   const cart = useCartStore((state) => state.cart);
//   const { isLoggedIn, user, logout } = useAuthStore();
//   const router = useRouter();

//   const handleLogout = () => {
//     logout();
//     setIsOpen(false);
//     router.push("/");
//   };

//   // 3. Effect to handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if scroll position is greater than a threshold (e.g., 50px)
//       const isScrolled = window.scrollY > 50; 
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     // Attach the event listener
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]); // Re-run effect only when 'scrolled' state changes

//   // 4. Conditional Tailwind Classes
//   // Initial state: transparent background, possibly text-white/text-gray-100 for visibility over image.
//   // Scrolled state: bg-dark (your original color), shadow-lg.
//   const navbarClasses = scrolled
//     ? "bg-dark shadow-lg transition-colors duration-300" // Scrolled state
//     : "bg-transparent transition-colors duration-300"; // Initial state (assumes hero image is behind it)

//   // You might also need to adjust text color for the initial transparent state if the image is dark.
//   const linkClasses = scrolled
//     ? "text-gray-300 hover:text-primary font-semibold"
//     : "text-white hover:text-primary font-semibold"; // Change text color for transparent background

//   return (
//     // Apply conditional classes here, and ensure it's sticky
//     <nav className={`${navbarClasses} sticky top-0 z-50`}> 
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* ... Logo Section (no change) ... */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <img
//                 src="/img/Little Pizza Logo.webp"
//                 alt="Little Pizza Logo"
//                 className="h-10 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Nav Links - Apply conditional text classes */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className={linkClasses}>Home</Link>
//             <Link href="/menu" className={linkClasses}>Menu</Link>
//             <Link href="/about" className={linkClasses}>About Us</Link>
//             <Link href="/contact" className={linkClasses}>Contact</Link>
//           </div>

//           {/* Cart/User Icons - Apply conditional text classes */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               href="/cart"
//               // Ensure icon color changes for visibility
//               className={scrolled ? "relative text-gray-300 hover:text-primary" : "relative text-white hover:text-primary"}
//             >
//               <FaShoppingCart className="h-6 w-6" />
//               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {cart.length}
//               </span>
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <Link href="/profile" className={`${linkClasses} flex items-center`}>
//                   <FaUserCircle className="h-6 w-6 mr-2" /> {user.name}
//                 </Link>
//                 <button onClick={handleLogout} className={linkClasses}>Logout</button>
//               </>
//             ) : (
//               <Link href="/login" className={scrolled ? "text-gray-300 hover:text-primary" : "text-white hover:text-primary"}>
//                 <FaUserCircle className="h-6 w-6" />
//               </Link>
//             )}
//           </div>

//           {/* Mobile Toggle/Cart - Apply conditional text classes */}
//           <div className="md:hidden flex items-center">
//              <Link
//               href="/cart"
//               // Ensure icon color changes for visibility
//               className={scrolled ? "relative text-gray-300 hover:text-primary mr-4" : "relative text-white hover:text-primary mr-4"}
//             >
//               <FaShoppingCart className="h-6 w-6" />
//               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {cart.length}
//               </span>
//             </Link>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={scrolled ? "text-white focus:outline-none" : "text-white focus:outline-none"}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav - This should always be 'bg-dark' for a consistent dropdown experience */}
//       <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-dark`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {/* Note: Mobile links use fixed dark background, so text colors can be fixed */}
//           <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
//           <Link href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Menu</Link>
//           <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About Us</Link>
//           <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</Link>
//         </div>
//         <div className="border-t border-gray-700 px-5 py-3">
//             {isLoggedIn ? (
//               <div className="flex flex-col space-y-3">
//                 <Link href="/profile" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
//                    <FaUserCircle className="h-6 w-6 mr-2" />
//                   {user.name}'s Profile
//                 </Link>
//                   <button onClick={handleLogout} className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
//               </div>
//             ) : (
//               <Link href="/login" className="flex items-center justify-center w-full bg-primary text-white rounded-md py-2 text-base font-medium">
//                 Login / Register
//               </Link>
//             )}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import useCartStore from "../../store/cart";
import useAuthStore from "../../store/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const cart = useCartStore((state) => state.cart);
  const { isLoggedIn, user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push("/");
  };


  // 1. Navbar Background & Shadow
  const navbarClasses = "bg-black/50 shadow-none transition-colors duration-300";

  // 2. Link Text Color
  const linkClasses = "text-white hover:text-primary font-semibold";
    
  // 3. Icon Color (Cart/User)
  const iconClasses = "text-red-500 hover:text-primary";

  // 4. Mobile Toggle Icon Color
  const mobileToggleIconClasses = "text-red-500 focus:outline-none";


  return (
    <nav className={`${navbarClasses} fixed w-full top-0 z-50`}> 
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/img/Little Pizza Logo.webp"
                alt="Little Pizza Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClasses}>Home</Link>
            <Link href="/menu" className={linkClasses}>Menu</Link>
            <Link href="/about" className={linkClasses}>About Us</Link>
            <Link href="/contact" className={linkClasses}>Contact</Link>
          </div>

          {/* Cart/User Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className={`relative ${iconClasses}`} 
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/profile" className={`${linkClasses} flex items-center`}>
                  <FaUserCircle className="h-6 w-6 mr-2" /> {user.name}
                </Link>
                <button onClick={handleLogout} className={linkClasses}>Logout</button>
              </>
            ) : (
              <Link href="/login" className={iconClasses}> 
                <FaUserCircle className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile Toggle/Cart */}
          <div className="md:hidden flex items-center">
            <Link
              href="/cart"
              className={`relative ${iconClasses} mr-4`}
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={mobileToggleIconClasses} // Apply conditional color to the hamburger icon
            >
              <HiOutlineBars3 className="h-6 w-6" />
              {/* <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Always use a solid background (e.g., bg-dark) for menu readability */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
          <Link href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Menu</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About Us</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</Link>
        </div>
        <div className="border-t border-gray-700 px-5 py-3">
            {isLoggedIn ? (
              <div className="flex flex-col space-y-3">
                <Link href="/profile" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                  <FaUserCircle className="h-6 w-6 mr-2" />
                  {user.name}'s Profile
                </Link>
                <button onClick={handleLogout} className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="flex items-center justify-center w-full bg-primary text-white rounded-md py-2 text-base font-medium">
                Login / Register
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
}