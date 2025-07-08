'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Custom Cursor Component
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Text offset for contextual labels
  const textOffsetY = useMotionValue(-40);
  const textOffsetYSpring = useSpring(textOffsetY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorType = target.getAttribute('data-cursor');
      const cursorTextData = target.getAttribute('data-cursor-text');
      
      if (cursorType) setCursorState(cursorType);
      if (cursorTextData) setCursorText(cursorTextData);
    };

    const handleMouseLeave = () => {
      setCursorState('default');
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add event listeners to elements with cursor data attributes
    const cursorElements = document.querySelectorAll('[data-cursor]');
    cursorElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursorElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const getCursorVariants = () => {
    switch (cursorState) {
      case 'hover':
        return {
          scale: 2,
          backgroundColor: 'rgba(59, 130, 246, 0.6)',
          border: '2px solid rgba(59, 130, 246, 0.8)',
        };
      case 'text':
        return {
          scale: 0.5,
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
        };
      case 'magic':
        return {
          scale: 2.5,
          backgroundColor: 'rgba(147, 197, 253, 0.4)',
          border: '2px solid rgba(147, 197, 253, 0.8)',
        };
      case 'paint':
        return {
          scale: 2,
          backgroundColor: 'rgba(168, 85, 247, 0.4)',
          border: '2px solid rgba(168, 85, 247, 0.8)',
        };
      default:
        return {
          scale: 1,
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          border: '2px solid rgba(59, 130, 246, 0.9)',
        };
    }
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={getCursorVariants()}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />

      {/* Contextual Text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-sm font-medium bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full"
          style={{
            x: cursorXSpring,
            y: textOffsetYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

// Magnetic Card Component
const MagneticCard = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change navbar style when scrolled past the hero section (roughly 80vh)
      setIsScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation with extra top padding on mobile */}
      <div className="pt-3 sm:pt-0">
        <Header isScrolled={isScrolled} />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 pt-8 sm:pt-20 pb-8 sm:pb-28 min-h-[70vh] flex flex-col items-center justify-center">
        {/* Soft blurred background shape */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] sm:w-[900px] sm:h-[520px] bg-blue-200/40 rounded-[40%] blur-3xl z-0" style={{filter: 'blur(80px)'}} />
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <motion.div 
            className="space-y-3 sm:space-y-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* <motion.h1 className="font-extrabold text-slate-900 tracking-tight text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mx-auto max-w-5xl">
              Origin.
            </motion.h1> */}
            <motion.h2 className="font-bold text-slate-900 tracking-tight text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mx-auto max-w-5xl mt-2 mb-2 sm:mb-4">
              Shaping The Future of Brands Through <span className="font-payout">Craft</span> and <span className="font-payout ">Curiosity</span>.
            </motion.h2>
            <motion.p 
              className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-2 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Origin. is a digital agency that understands and crafts digital journeys that speak for our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="genesis" className={`px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-b from-transparent via-blue-50/30 to-blue-100/50 ${
        isScrolled ? 'mt-12 sm:mt-16' : ''
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 sm:mb-4">
              We're not just good at this.                 We're <span className="font-payout">O</span>rigin-al.

            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
At the nexus of human insight and intelligent systems, our team champions originality even in this age of automation.            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "With Great Power Comes Great Design.",
                subtitle: "Three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for. M. Glaser",
                description: "Origin. delivers consistent, accessible, and scalable visuals across every product layer.",
                gradient: "from-blue-400 to-blue-500",
                shadowColor: "shadow-blue-400/25"
              },
              {
                title: "Speed is the Standard.",
                subtitle: "I will be the first man to run under two hours, this is crucial. E. Kipchoge",
                description: "We are amateur runners so we understand performance. We deploy high quality systems with speed and scale cleanly.",
                gradient: "from-blue-500 to-blue-600", 
                shadowColor: "shadow-blue-500/25"
              },
              {
                title: "The Art of API.",
                subtitle: "We know Postman so you don't have to. S. Muiga",
                description: "We align complex systems into one unified experience – clean handoffs.",
                gradient: "from-emerald-500 to-teal-500",
                shadowColor: "shadow-emerald-500/25"
              },
              {
                title: "Our Cards. Your Move.",
                subtitle: "Design Backed by Thinking",
                description: "We understand meaning and memory. We create brand systems that communicate clearly, scale elegantly, and leave a mark.",
                gradient: "from-orange-500 to-red-500",
                shadowColor: "shadow-orange-500/25"
                

              }
            ].map((service, index) => (
              <MagneticCard
                key={index}
                className={`group relative p-4 sm:p-6 bg-white/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl ${service.shadowColor} hover:scale-105 transition-all duration-500`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}></div>
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg mb-4 shadow-lg flex items-center justify-center`}>
                  {index === 0 && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <img src="/mcqueen.png" alt="Speed" className="w-8 h-8 object-cover rounded" />
                  )}
                  {index === 2 && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                <h4 className="text-sm font-medium text-slate-600 mb-3">{service.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </MagneticCard>
            ))}
          </div>

          
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 