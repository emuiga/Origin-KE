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
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mt-2">
              Serving the world based in gemt.
            </p>
          </div>

          {/* Center Column - Quote */}
          <div className="flex flex-col items-center md:items-center text-center">
            <blockquote className="text-slate-400 text-sm italic leading-relaxed max-w-xs">
              "The best way to predict the future is to invent it."
            </blockquote>
            <cite className="text-slate-500 text-xs mt-2">— Alan Kay</cite>
          </div>

          {/* Newsletter - Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
              Stay Updated
            </h3>
            <a 
              href="https://origintech.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10] rounded"
            >
              <span>Read our newsletter</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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