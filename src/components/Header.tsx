'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav 
      className={`z-50 transition-all duration-500 ${
        isScrolled 
          ? 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl py-2 px-4 rounded-full' 
          : 'relative max-w-xs w-full mx-auto px-2 py-2 text-sm sm:pl-24 sm:pr-8 sm:py-6 sm:max-w-3xl'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        opacity: isScrolled ? [0.8, 1] : 1
      }}
      transition={{ 
        y: { duration: 0.8 },
        opacity: { duration: 0.3 }
      }}
    >
      <div className={`flex items-center ${isScrolled ? 'justify-between space-x-2 sm:space-x-6' : 'justify-center space-x-2 sm:space-x-8 max-w-7xl mx-auto'}`}>
        <motion.div 
          className={`flex items-center font-semibold text-slate-900 ${isScrolled ? 'text-base sm:text-lg' : 'text-base sm:text-xl'} mr-2 sm:mr-6`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Origin Logo" className="h-5 w-auto" />
            <span>Origin.</span>
          </Link>
        </motion.div>
        
        <motion.div 
          className={`items-center hidden lg:flex ${isScrolled ? 'space-x-1 sm:space-x-3' : 'space-x-1 sm:space-x-3'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/process" className={`transition-all duration-300 font-medium ${
            isScrolled ? 'text-sm' : 'text-base'
          } ${pathname === "/process" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}
            data-cursor="hover"
          >The Process</Link>
          <Link href="/portfolio" className={`transition-all duration-300 font-medium ${
            isScrolled ? 'text-sm' : 'text-base'
          } ${pathname === "/portfolio" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}
            data-cursor="hover"
          >Portfolio</Link>
          <a href="/letter" className={`text-slate-700 hover:text-blue-700 transition-all duration-300 font-medium ${
            isScrolled ? 'text-sm' : 'text-base'
          } ${pathname === "/letter" ? "text-blue-700 font-bold underline underline-offset-4" : ""}`}
            data-cursor="hover">Letter</a>
          <a href="/contact" className={`transition-all duration-300 font-medium ${
            isScrolled ? 'text-sm' : 'text-base'
          } ${pathname === "/contact" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}
            data-cursor="hover">Link Up</a>

        </motion.div>

        <button
          className={`text-slate-700 ml-auto lg:hidden ${isScrolled ? 'hidden' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isScrolled && (
        <motion.div
          className="lg:hidden mt-4 p-4 rounded-xl border bg-white/60 backdrop-blur-xl border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-3">
            <Link href="/" className={`transition-colors text-base font-medium ${pathname === "/" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`} data-cursor="hover" >Home</Link>
            <Link href="/process" className={`transition-colors text-base font-medium ${pathname === "/process" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`} data-cursor="hover" >The Process</Link>
            <Link href="/portfolio" className={`transition-colors text-base font-medium ${pathname === "/portfolio" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`} data-cursor="hover">Portfolio</Link>
            <Link href="/letter" className={`transition-colors text-base font-medium ${pathname === "/letter" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`} data-cursor="hover">Letter</Link>
            <Link href="/contact" className={`transition-colors text-base font-medium ${pathname === "/contact" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`} data-cursor="hover">Link Up</Link>

          </div>
        </motion.div>
      )}
     </motion.nav>
  );
} 