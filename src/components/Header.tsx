'use client';

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center font-semibold text-slate-900 text-lg">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Origin Logo" className="h-6 w-auto mr-2" />
              <span>Origin.</span>
            </Link>
          </div>
          
          <div className="items-center hidden lg:flex space-x-8">
            <Link href="/process" className={`transition-colors font-medium ${
              pathname === "/process" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"
            }`}>
              The Process
            </Link>
            <Link href="/portfolio" className={`transition-colors font-medium ${
              pathname === "/portfolio" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"
            }`}>
              Portfolio
            </Link>
            <Link href="/letter" className={`transition-colors font-medium ${
              pathname === "/letter" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"
            }`}>
              Letter
            </Link>
            <Link href="/contact" className={`transition-colors font-medium ${
              pathname === "/contact" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"
            }`}>
              Get a Quote
            </Link>
          </div>

          <button
            className="text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className={`block px-3 py-2 text-base font-medium ${pathname === "/" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}>
                Home
              </Link>
              <Link href="/process" className={`block px-3 py-2 text-base font-medium ${pathname === "/process" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}>
                The Process
              </Link>
              <Link href="/portfolio" className={`block px-3 py-2 text-base font-medium ${pathname === "/portfolio" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}>
                Portfolio
              </Link>
              <Link href="/letter" className={`block px-3 py-2 text-base font-medium ${pathname === "/letter" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}>
                Letter
              </Link>
              <Link href="/contact" className={`block px-3 py-2 text-base font-medium ${pathname === "/contact" ? "text-blue-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-blue-700"}`}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 