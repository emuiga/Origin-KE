'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/process", label: "Our Process" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Get a Quote" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center font-semibold text-slate-900 text-xl">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Origin Logo" className="h-7 sm:h-9 w-auto mr-3" />
              <span className="text-xl sm:text-2xl">Origin.</span>
            </Link>
          </div>

          <div className="items-center hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium text-base ${
                  pathname === link.href
                    ? "text-teal-700 font-bold underline underline-offset-4"
                    : "text-slate-700 hover:text-teal-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === "/" ? "text-teal-700 font-bold underline underline-offset-4" : "text-slate-700 hover:text-teal-700"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    pathname === link.href
                      ? "text-teal-700 font-bold underline underline-offset-4"
                      : "text-slate-700 hover:text-teal-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
