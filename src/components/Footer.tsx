'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0e0e10] to-[#111] text-white overflow-hidden">
      {/* Animated glowing blob */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full filter blur-[80px] opacity-30"
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Branding - Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-3">
              <img src="/logo.png" alt="Origin Logo" className="h-8 w-auto mr-3" />
              <span className="text-xl font-semibold">Origin.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We build experiences that connect with people.
            </p>
          </div>

          {/* Center Column - Quote */}
          <div className="flex flex-col items-center md:items-center text-center">
            <blockquote className="text-slate-400 text-sm italic leading-relaxed max-w-xs">
              "The best way to predict the future is to invent it."
            </blockquote>
            <cite className="text-slate-500 text-xs mt-2">— Alan Kay</cite>
          </div>

          {/* Social Links - Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/origin-hq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
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
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
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
                className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded p-2"
                aria-label="Instagram"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/20 my-6 sm:my-8" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Origin. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded"
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