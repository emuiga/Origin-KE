"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Custom Cursor Component (copied from main page)
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const variants = {
    default: { 
      height: 32, 
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      x: -16, 
      y: -16 
    },
    text: { 
      height: 60, 
      width: 60, 
      backgroundColor: "rgba(25, 55, 255, 0.1)",
      border: "1px solid rgba(25, 55, 255, 0.3)",
      x: -30, 
      y: -30 
    },
    hover: { 
      height: 80, 
      width: 80,
      backgroundColor: "rgba(25, 55, 255, 0.2)",
      border: "1px solid rgba(25, 55, 255, 0.5)",
      x: -40, 
      y: -40
    },
    magic: {
      height: 70,
      width: 70,
      backgroundColor: "rgba(255, 215, 0, 0.15)",
      border: "1px solid rgba(255, 215, 0, 0.4)",
      x: -35,
      y: -35
    },
    paint: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(138, 43, 226, 0.2)",
      border: "1px solid rgba(138, 43, 226, 0.5)",
      x: -30,
      y: -30
    }
  };

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorType = target.dataset.cursor;
      const cursorTextValue = target.dataset.cursorText || "";
      
      if (cursorType) {
        setCursorVariant(cursorType);
        setCursorText(cursorTextValue);
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener('mousemove', moveCursor);
    
    document.querySelectorAll('[data-cursor]').forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      
      document.querySelectorAll('[data-cursor]').forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none flex items-center justify-center backdrop-blur-sm"
      animate={cursorVariant}
      variants={variants}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <span className="text-xs font-medium whitespace-nowrap">{cursorText}</span>
    </motion.div>
  );
};

export default function Process() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-300/10 rounded-full blur-3xl"
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
          className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
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

      {/* Navigation */}
      <Header isScrolled={isScrolled} />

      {/* Header Section */}
      <section className="relative px-4 sm:px-8 pt-16 sm:pt-24 pb-10 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Process is Our <span className="relative inline-block">
              Promise
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500" 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mt-6 sm:mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We don't hide our modus operandi.
The raw sketches, the logic, the tradeoffs, the tension between{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0"
                animate={{ opacity: [1, 0, 0, 1] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                possible
              </motion.span>
              <motion.span
                className="absolute inset-0"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                perfect
              </motion.span>
              <span className="invisible">possible</span>
            </span>
            {" "}and{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                possible
              </motion.span>
              <motion.span
                className="absolute inset-0"
                animate={{ opacity: [1, 0, 0, 1] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                perfect
              </motion.span>
              <span className="invisible">possible</span>
            </span>
            .
The fingerprints of a team that builds from <span className="font-hey-august">Origin</span>.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 sm:px-8 py-16 sm:py-24" id="processSteps">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line - positioned differently on mobile vs desktop */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200"></div>
            
            {/* Process Steps */}
            {[
              {
                number: "01",
                title: "Listen & Learn",
                subtitle: "Conscius Contextus",
                description: "We actively listen- to you and to each other. Our first step is to absorb your vision, goals, and challenges. Think of it as brand therapy with a technical degree.",
              },
              {
                number: "02",
                title: "Strategy & Synergy",
                subtitle: "Logos et Praxis",
                description: "Your thinking meets ours. Together, we craft a roadmap that balances ambition with achievability. We are not afraid to say no.",
              },
              {
                number: "03",
                title: "Design & Define",
                subtitle: "Pulchritudo Splendor Veritatis",
                description: "Form follows function, and both need to impress. The team creates intuitive, engaging interfaces that you will fall in love with at first sight.",
              },
              {
                number: "04",
                title: "Build & Breathe",
                subtitle: "Ex nihilo nihil fit",
                description: "We're not know-it-alls, we're learn-it-alls. Our developers don't just write code; they compose it. Clean, efficient, and future-proof. We build systems that scale with your success.",
              },
              {
                number: "05",
                title: "Test & Triumph",
                subtitle: "Veritas Numquam Perit",
                description: "We poke, prod, and push your product to its limits so users never have to experience anything but perfection.",
              },
              {
                number: "06",
                title: "Launch & Learn",
                subtitle: "Egressus Cum Proposito",
                description: "The big red button moment. We orchestrate smooth launches followed by data-driven iterations and develop customer expertise of their product. Your product's journey is just beginning.",
              },
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={`relative mb-16 sm:mb-24 md:mb-32 pl-10 sm:pl-12 ${
                  index % 2 === 0 ? 'lg:pr-32 lg:text-right lg:pl-0' : 'lg:pl-32 lg:ml-auto lg:text-left'
                } ${index === 5 ? 'mb-0 sm:mb-0' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ zIndex: 10 }}
              >
                <div className={`lg:max-w-lg ${index % 2 === 0 ? 'lg:ml-auto' : ''} bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm border border-white/30 group`}>
                  <div className={`flex items-center mb-3 sm:mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                    <div className="text-4xl sm:text-5xl font-light text-slate-200">{step.number}</div>
                    <div className={`h-[1px] bg-slate-200 flex-grow ${index % 2 === 0 ? 'lg:mr-4' : 'ml-4'}`}></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 mb-1 sm:mb-2">{step.title}</h3>
                  <div className="relative h-6 sm:h-8 mb-2 sm:mb-3">
                    <h4 className="text-base sm:text-lg text-blue-600 italic absolute top-0 left-0 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-4">{step.subtitle}</h4>
                    <span className="text-base sm:text-lg text-blue-600 absolute top-0 left-0 transition-all duration-300 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      {index === 0 ? "Context-consciousness" : 
                       index === 1 ? "Thought and Action" : 
                       index === 2 ? "Beauty is the Splendor of Truth" : 
                       index === 3 ? "Nothing Comes From Nothing" : 
                       index === 4 ? "Truth Never Dies" : 
                       "Setting Forth With Purpose"}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                </div>
                
                {/* Circle marker on timeline - positioned differently on mobile vs desktop */}
                <div className={`absolute top-4 ${
                  index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                } lg:transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg z-20`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-8 py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to <span className="relative inline-block">
              <span className="font-hey-august">Transform</span><span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"></span>
            </span> Your Big Idea?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/contact">
              <span className="inline-block py-2.5 sm:py-3 px-5 sm:px-6 bg-black text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300" data-cursor="hover" data-cursor-text="Let's Talk">
                Start the Conversation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 