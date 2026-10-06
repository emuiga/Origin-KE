'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/process', label: 'Our Process' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { href: '/contact', label: 'Web Development' },
    { href: '/contact', label: 'App Development' },
    { href: '/erp', label: 'Business Systems (Odoo, ERP, POS)' },
    { href: '/contact', label: 'Internal Tools' },
    { href: '/contact', label: 'AI & Automation' },
    { href: '/contact', label: 'UI/UX Design' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0e0e10] to-[#111] text-white overflow-hidden">
      {/* Animated glowing blob */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/30 to-purple-500/30 rounded-full filter blur-[80px] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Branding */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center mb-3">
              <img src="/logo.png" alt="Origin Logo" className="h-8 w-auto mr-3" />
              <span className="text-xl font-semibold">Origin.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              We blend culture and technology to build digital experiences that connect with people.
            </p>
            <blockquote className="text-slate-500 text-xs italic leading-relaxed max-w-xs">
              &ldquo;The best way to predict the future is to invent it.&rdquo;
            </blockquote>
            <cite className="text-slate-600 text-xs mt-1">— Alan Kay</cite>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="mailto:hello@origin.co.ke" className="text-slate-400 hover:text-white text-sm transition-colors">
                  hello@origin.co.ke
                </a>
              </li>
              <li className="text-slate-400 text-sm">Nairobi, Kenya · GMT+3</li>
            </ul>
            <a
              href="https://origintech.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors mb-6"
            >
              Subscribe for Updates
            </a>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/origin-hq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/origin_hq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/origin_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
                aria-label="Instagram"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCsR5gGzzKJcn6S6r1s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
                aria-label="Follow us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/20 my-6 sm:my-8" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Origin. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
} 