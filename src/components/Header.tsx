'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/process", label: "Our Process" },
  {
    label: "Solutions",
    children: [
      { href: "/erp", label: "ERP Systems" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/portfolio", label: "Portfolio" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Get a Quote" },
];

const activeClass = "text-teal-700 font-bold underline underline-offset-4";
const idleClass = "text-slate-700 hover:text-teal-700";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!isDropdownOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setIsDropdownOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isDropdownOpen]);

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
            {navItems.map((item) =>
              "children" in item ? (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 transition-colors font-medium text-base ${
                      item.children.some((child) => isActive(child.href)) ? activeClass : idleClass
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen((open) => !open)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    // pt-3 keeps the hover area continuous between the button and the panel
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                      <div className="min-w-52 bg-white border border-gray-200/70 rounded-xl shadow-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-2.5 text-base font-medium whitespace-nowrap transition-colors ${
                              isActive(child.href)
                                ? "text-teal-700 font-bold bg-teal-50/60"
                                : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-medium text-base ${
                    isActive(item.href) ? activeClass : idleClass
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
                  pathname === "/" ? activeClass : idleClass
                }`}
              >
                Home
              </Link>
              {navItems.map((item) =>
                "children" in item ? (
                  <div key={item.label}>
                    <p className="px-3 pt-3 pb-1 text-xs font-semibold tracking-widest uppercase text-slate-400">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block pl-6 pr-3 py-2 text-base font-medium ${
                          isActive(child.href) ? activeClass : idleClass
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive(item.href) ? activeClass : idleClass
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
