// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { HiOutlineBars3, HiXMark } from "react-icons/hi2"; // Added X icon
// import useCartStore from "../../store/cart";
// import useAuthStore from "../../store/auth";
// import { useRouter } from "next/navigation";

// // Centralized Navbar Link Configuration
// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Menu", path: "/menu" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   const cart = useCartStore((state) => state.cart);
//   const { isLoggedIn, user, logout } = useAuthStore();
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setIsOpen(false);
//     router.push("/");
//   };

//   const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 bg-black/40 ${isScrolled ? "py-2 shadow-lg" : "py-4"
//     }`;

//   const linkClasses = "text-white hover:text-red-500 font-semibold transition-colors";

//   if (!mounted) return <nav className={navbarClasses}></nav>;

//   return (
//     <nav className={navbarClasses}>
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 lg:px-8">

//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <img src="/img/Little Pizza Logo.webp" alt="Logo" className="h-10 w-auto" />
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.path} className={linkClasses}>
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
//           <Link href="/cart" className="relative text-red-500 hover:scale-110 transition-transform">
//             <FaShoppingCart className="h-6 w-6" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-4.5 w-4.5 flex items-center justify-center animate-bounce">
//                 {cart.length}
//               </span>
//             )}
//           </Link>

//           <div className="hidden md:block">
//             {isLoggedIn ? (
//               <div className="flex items-center space-x-4">
//                 <Link href="/profile" className="text-white flex items-center gap-2">
//                   <FaUserCircle className="h-6 w-6" /> {user?.name}
//                 </Link>
//                 <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded text-white text-sm">Logout</button>
//               </div>
//             ) : (
//               <Link href="/login" className="text-red-500"><FaUserCircle className="h-6 w-6" /></Link>
//             )}
//           </div>

//           {/* Mobile Toggle */}
//           <button className="md:hidden text-red-500" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <HiXMark className="h-8 w-8" /> : <HiOutlineBars3 className="h-8 w-8" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ${isOpen ? "top-full opacity-100" : "top-125 opacity-0"}`}>
//         <div className="flex flex-col p-6 space-y-4">
//           {navLinks.map((link) => (
//             <Link key={link.name}
//               href={link.path}
//               onClick={() => setIsOpen(false)}
//               className="text-xl text-white">
//               {link.name}
//             </Link>
//           ))}
//           <hr className="border-t border-gray-700" />
//           {isLoggedIn ? (
//             <>
//               <Link href="/profile" onClick={() => setIsOpen(false)} className="text-xl text-white flex items-center gap-2">  
//                 <FaUserCircle className="h-6 w-6" /> Profile
//               </Link>
//               <button onClick={handleLogout} className="text-xl text-white bg-red-600 px-3 py-1 rounded mt-2">Logout</button>
//             </>
//           ) : (
//             <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl text-white">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import useCartStore from "../../store/cart";
import useAuthStore from "../../store/auth";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const cart = useCartStore((state) => state.cart);
  const { isLoggedIn, user, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push("/");
  };

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? "py-2 shadow-lg bg-black/50 backdrop-blur-md" : "py-4 bg-black/40"
  }`;

  if (!mounted) return <nav className={navbarClasses}></nav>;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/img/Little Pizza Logo.webp" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`relative pb-1 font-semibold transition-all duration-300 group ${
                pathname === link.path ? "text-red-500" : "text-white hover:text-red-500"
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ease-out 
                ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}>
              </span>
            </Link>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          
          {/* Cart Icon - Changed to White with Red Hover */}
          <Link 
            href="/cart" 
            className={`relative transition-all duration-300 hover:scale-110 ${
              pathname === "/cart" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            <FaShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Login / Profile Icon - Changed to White with Red Hover */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    pathname === "/profile" ? "text-red-500" : "text-white hover:text-red-500"
                  }`}
                >
                  <FaUserCircle className="h-6 w-6" /> 
                  <span className="font-medium">{user?.name}</span>
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-600 px-3 py-1 rounded text-white text-sm hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className={`transition-all duration-300 hover:scale-110 block ${
                  pathname === "/login" ? "text-red-500" : "text-white hover:text-red-500"
                }`}
              >
                <FaUserCircle className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white hover:text-red-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiXMark className="h-8 w-8" /> : <HiOutlineBars3 className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ${
        isOpen ? "top-full opacity-100" : "top-125 opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`text-xl font-medium transition-colors ${
                pathname === link.path ? "text-red-500" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-800" />
          {!isLoggedIn && (
             <Link 
             href="/login" 
             onClick={() => setIsOpen(false)}
             className={`text-xl font-medium ${pathname === "/login" ? "text-red-500" : "text-white"}`}
           >
             Login / Register
           </Link>
          )}
        </div>
      </div>
    </nav>
  );
}