'use client';

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardStack from "../../components/CardStack";



export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledServices, setShuffledServices] = useState<string[]>([]);
  const [shuffledServicesRow1, setShuffledServicesRow1] = useState<string[]>([]);
  const [shuffledServicesRow2, setShuffledServicesRow2] = useState<string[]>([]);
  const [shuffledServicesRow3, setShuffledServicesRow3] = useState<string[]>([]);
  const [shuffledServicesRow4, setShuffledServicesRow4] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [countedStats, setCountedStats] = useState({ customers: 0, agents: 0, hours: 0, projects: 0 });
  const { scrollYProgress } = useScroll();

  // Services list - easy to add/remove items
  const services = [
    
    "POS Systems",
    "Logo Design",
    "HR Systems",
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
    setShuffledServicesRow1(shuffleArray(services));
    setShuffledServicesRow2(shuffleArray(services));
    setShuffledServicesRow3(shuffleArray(services));
    setShuffledServicesRow4(shuffleArray(services));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation effect
  useEffect(() => {
    const targetStats = { customers: 150, agents: 12, hours: 24, projects: 75 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCountedStats({
        customers: Math.floor(targetStats.customers * progress),
        agents: Math.floor(targetStats.agents * progress),
        hours: Math.floor(targetStats.hours * progress),
        projects: Math.floor(targetStats.projects * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
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
      title: "Adorned Family Home",
      description: "Personalized care for the elderly",
      image: "/adorned.png",
      year: "2024",
      category: "Development",
      tags: ["Web Development", "Healthcare", "UI/UX Design"]
    },
    {
      id: 2,
      title: "KIFWA Clearing & Forwarding System",
      description: "Comprehensive logistics management system for Kenya International Freights and Warehousing Association",
      image: "/Screenshot from 2025-07-02 14-38-44.png",
      year: "2024",
      category: "Development",
      tags: ["Logistics", "Web Development", "Database Design", "Custom Software"]
    },
    {
      id: 3,
      title: "Bechfam.io Cloud Solutions",
      description: "Enterprise cloud management platform for Bechfam.io cloud solutions company",
      image: "/Screenshot from 2025-09-09 07-07-25.png",
      year: "2024",
      category: "Development",
      tags: ["Cloud Solutions", "Enterprise Software", "API Development", "Scalable Architecture"]
    },
    {
      id: 4,
      title: "Brand Identity Package",
      description: "Complete branding solution for startup",
      image: "/web1.jpg",
      year: "2024",
      category: "Branding",
      tags: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution",
      image: "/web2.jpg",
      year: "2024",
      category: "Development",
      tags: ["Mobile App", "Fintech", "Security"]
    },
    {
      id: 6,
      title: "Digital Marketing Campaign",
      description: "Multi-channel marketing strategy",
      image: "/mock1.png",
      year: "2024",
      category: "Consulting",
      tags: ["Digital Marketing", "SEO", "Social Media"]
    }
  ];

  const categories = ['All', 'Development', 'Branding', 'Consulting'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 overflow-hidden">

      
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
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our Portfolios
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Discover our successful projects across web development, mobile apps, branding, and digital solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/80 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                      Read More
                    </button>
                    <Link href="/contact" className="flex-1">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 group-hover:shadow-lg">
                        Get a Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600">Try selecting a different category to see more projects.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1000 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified World Map */}
            <path d="M50 200 L150 180 L200 200 L250 180 L300 200 L350 180 L400 200 L450 180 L500 200 L550 180 L600 200 L650 180 L700 200 L750 180 L800 200 L850 180 L900 200 L950 180" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M100 250 L200 230 L300 250 L400 230 L500 250 L600 230 L700 250 L800 230 L900 250" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M150 300 L250 280 L350 300 L450 280 L550 300 L650 280 L750 300 L850 280" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            
            {/* Continents */}
            <circle cx="200" cy="200" r="30" fill="#3b82f6" opacity="0.3"/>
            <circle cx="400" cy="180" r="25" fill="#3b82f6" opacity="0.3"/>
            <circle cx="600" cy="220" r="35" fill="#3b82f6" opacity="0.3"/>
            <circle cx="300" cy="300" r="20" fill="#3b82f6" opacity="0.3"/>
            <circle cx="500" cy="280" r="28" fill="#3b82f6" opacity="0.3"/>
            <circle cx="700" cy="250" r="22" fill="#3b82f6" opacity="0.3"/>
            
            {/* Kenya marker */}
            <circle cx="500" cy="280" r="8" fill="#ef4444" opacity="0.8"/>
            <text x="500" y="320" textAnchor="middle" className="text-xs fill-red-500 font-semibold">Kenya</text>
          </svg>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from real projects that drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: countedStats.customers, label: "Satisfied Customers", suffix: "+" },
              { number: countedStats.agents, label: "Professional Agents", suffix: "" },
              { number: countedStats.hours, label: "Hours Support", suffix: "/7" },
              { number: countedStats.projects, label: "Project Finished", suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Divider lines */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-px h-16 bg-gradient-to-b from-transparent via-blue-200 to-transparent transform -translate-y-1/2"></div>
                )}
                
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
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
                  x: [0, -100 * shuffledServicesRow1.length]
                }}
                transition={{ 
                  duration: 1 * shuffledServicesRow1.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServicesRow1.length > 0 && shuffledServicesRow1.map((service, index) => (
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
                  x: [-100 * shuffledServicesRow2.length, 0]
                }}
                transition={{ 
                  duration: 3 * shuffledServicesRow2.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServicesRow2.length > 0 && shuffledServicesRow2.map((service, index) => (
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
                  x: [0, -100 * shuffledServicesRow3.length]
                }}
                transition={{ 
                  duration: 4 * shuffledServicesRow3.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServicesRow3.length > 0 && shuffledServicesRow3.map((service, index) => (
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
                  x: [-100 * shuffledServicesRow4.length, 0]
                }}
                transition={{ 
                  duration: 2 * shuffledServicesRow4.length,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {shuffledServicesRow4.length > 0 && shuffledServicesRow4.map((service, index) => (
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