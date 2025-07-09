'use client';

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardStack from "../../components/CardStack";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isInteractive, setIsInteractive] = useState(false);
  
  const variants = {
    default: { 
      height: 32, 
      width: 32,
      backgroundColor: "rgba(55, 255, 255, 0.2)",
      border: "1px solid rgba(23, 255, 255, 0.5)",
      x: -16, 
      y: -16, 
      opacity: 1
    },
    hidden: {
      opacity: 0
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

    // Hide custom cursor on interactive elements
    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, input, textarea, select, [role="button"], [tabindex]')
      ) {
        setIsInteractive(true);
        document.body.style.cursor = '';
      } else {
        setIsInteractive(false);
        document.body.style.cursor = 'none';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handlePointerOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none flex items-center justify-center backdrop-blur-sm"
      animate={isInteractive ? "hidden" : cursorVariant}
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

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledServices, setShuffledServices] = useState<string[]>([]);
  const { scrollYProgress } = useScroll();

  // Services list - easy to add/remove items
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Brand Identity",
    "Digital Marketing",
    "E-commerce",
    "API Development",
    "Cloud Solutions",
    "Consulting",
    "Maintenance",
    "Content Strategy",
    "Social Media Management",
    "SEO Optimization",
    "Email Marketing",
    "Analytics & Reporting",
    "Copywriting",
    "Graphic Design",
    "Impossible, Possible"
  ];

  useEffect(() => {
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    setShuffledServices(shuffleArray(services));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const words = [
    "baking",
    "engineering",
    "software",
    "ministry",
    "farming",
    "design",
    "writing",
    "music",
    "cooking",
    "robotics",
    "photography",
    "videography",
    "marketing",
    "startups",
    "fashion",
    "gaming",
    "tech",
    "education",
    "wellness",
    "finance",
    "art",
    "cinema",
    "drones",
    "sports",
    "storytelling",
    "crafts",
    "podcasting",
    "comedy"
  ];
  

  const projects = [
    {
      id: 1,
      title: "Adorned",
      description: "Personalized care for the elderly",
      image: "/adorned.png",
      year: "2024"
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
      <div className="pt-3 sm:pt-0">
        <Header isScrolled={isScrolled} />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 pt-16 sm:pt-24 pb-10 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-payout">"</span>This doesn't look like a portfolio.<span className="font-payout">"</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mt-6 sm:mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            That's because it isn't.
          </motion.p>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            It's a space we carved for the curious.
          </motion.p>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            These aren't just projects. They're our blueprints, risks, side quests, second drafts, and first principles.
          </motion.p>
          
          <motion.div
            className="mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 py-3 px-6 bg-black text-white rounded-full font-bold hover:bg-slate-800 transition-colors duration-300 group"
              data-cursor="hover"
              data-cursor-text="Enter the Layer"
            >
              <span className="ml-2">Enter the Layer</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="relative px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              We have served up to 10 clients both individually and together
            </h2>
          </motion.div>

          {/* Project Carousel */}
          <div className="relative h-auto sm:h-[70vh] flex flex-col sm:flex-row items-center">
            {/* Project Image - Top on mobile, Left on desktop */}
            <div className="w-full sm:w-1/2 h-64 sm:h-full relative overflow-hidden mb-6 sm:mb-0">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={projects[currentProjectIndex].image} 
                  alt={projects[currentProjectIndex].title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Gradient fade to background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-100/80"></div>
              </motion.div>
            </div>

            {/* Project Text - Below on mobile, Right on desktop */}
            <div className="w-full sm:w-1/2 h-auto sm:h-full flex items-center justify-center px-2 sm:px-12">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
                  {projects[currentProjectIndex].title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                  {projects[currentProjectIndex].description}
                </p>
                {projects.length > 1 && (
                  <button
                    onClick={nextProject}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                )}
              </motion.div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProjectIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                data-cursor="hover"
              />
            ))}
          </div>
        </div>
        
      </section>

      {/* Services Carousel Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
              At our core, we are builders
            </h2>
            <p className="text-lg text-slate-600">
              <span className="font-payout">our focus</span>
            </p>
          </motion.div>

          {/* Services Carousel - Multiple Rows */}
          <div className="relative mb-12">
            {/* Row 1 */}
            <div className="overflow-hidden mb-4">
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ 
                  x: [0, -100 * shuffledServices.length]
                }}
                transition={{ 
                  duration: 25 * shuffledServices.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServices.length > 0 && shuffledServices.map((service, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgb(59 130 246)",
                      color: "rgb(59 130 246)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-6 py-3 bg-transparent text-slate-700 rounded-full font-medium border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden mb-4">
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ 
                  x: [-100 * shuffledServices.length, 0]
                }}
                transition={{ 
                  duration: 30 * shuffledServices.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServices.length > 0 && shuffledServices.map((service, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgb(59 130 246)",
                      color: "rgb(59 130 246)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-6 py-3 bg-transparent text-slate-700 rounded-full font-medium border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className="overflow-hidden mb-4">
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ 
                  x: [0, -100 * shuffledServices.length]
                }}
                transition={{ 
                  duration: 35 * shuffledServices.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServices.length > 0 && shuffledServices.map((service, index) => (
                  <motion.div
                    key={`row3-${index}`}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgb(59 130 246)",
                      color: "rgb(59 130 246)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-6 py-3 bg-transparent text-slate-700 rounded-full font-medium border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Row 4 */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ 
                  x: [-100 * shuffledServices.length, 0]
                }}
                transition={{ 
                  duration: 40 * shuffledServices.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServices.length > 0 && shuffledServices.map((service, index) => (
                  <motion.div
                    key={`row4-${index}`}
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgb(59 130 246)",
                      color: "rgb(59 130 246)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-6 py-3 bg-transparent text-slate-700 rounded-full font-medium border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Descriptive Text Below Carousel */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your story needs an Origin, we handle every aspect of your digital journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-8 py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 text-center">
              <motion.div 
                className="h-auto mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-3xl sm:text-4xl font-semibold text-slate-900">
                  You're into
                </span>
                <div className="relative w-full sm:w-56 h-12 sm:h-14 flex items-center justify-center sm:justify-start overflow-hidden mt-2 sm:mt-0">
                  <motion.span
                    key={currentWordIndex}
                    className="text-3xl sm:text-4xl font-semibold text-slate-900 static w-full text-center sm:absolute sm:left-0 sm:w-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {words[currentWordIndex]}?
                  </motion.span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link href="/contact">
                  <span className="inline-block py-3 sm:py-4 px-8 sm:px-10 bg-black text-white rounded-full font-bold hover:bg-slate-800 transition-colors duration-300 text-lg" data-cursor="hover" data-cursor-text="Let's Ship It">
                    Let's Ship It Already
                  </span>
                </Link>
              </motion.div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full max-w-xs md:max-w-[380px]">
                <CardStack />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 