'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardStack from "../../components/CardStack";



export default function Portfolio() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledServices, setShuffledServices] = useState<string[]>([]);
  const [shuffledServicesRow1, setShuffledServicesRow1] = useState<string[]>([]);
  const [shuffledServicesRow2, setShuffledServicesRow2] = useState<string[]>([]);
  const [shuffledServicesRow3, setShuffledServicesRow3] = useState<string[]>([]);
  const [shuffledServicesRow4, setShuffledServicesRow4] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [countedStats, setCountedStats] = useState({ customers: 0, agents: 0, hours: 0, projects: 0 });

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
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden py-12 sm:py-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/dream.webp')",
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/80 to-slate-900/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-400/30">
              <span className="text-sm font-medium text-white-200">OUR SERVICES</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              What We Do
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              From market research to web development, we provide comprehensive digital solutions that drive your business forward.
            </p>
            
            <div className="pt-4">
              <Link href="/contact">
                <span className="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors duration-300">
                  Start Your Project
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">THE FUNDAMENTALS</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive digital solutions tailored to your business needs and goals.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Market Research",
                description: "Data-driven insights to understand your market, competitors, and customer needs for informed business decisions.",
                image: "/market.webp"
              },
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
                image: "/webdev.webp"
              },
              {
                title: "Branding",
                description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems.",
                image: "/brand.webp"
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications that engage users and drive business growth.",
                image: "/app.webp"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design solutions that create intuitive and engaging digital experiences for your customers.",
                image: "/uiux.webp"
              },
              {
                title: "Digital Marketing",
                description: "Strategic digital marketing campaigns that increase brand awareness and drive qualified leads to your business.",
                image: "/socials.webp"
              },
              {
                title: "AI Solutions",
                description: "Artificial intelligence implementations including chatbots, automation, and machine learning models to streamline operations.",
                image: "/AI.webp"
              },
              {
                title: "Data Analytics",
                description: "Advanced data analysis and visualization tools to extract meaningful insights from your business data.",
                image: "/data.webp"
              },
              {
                title: "System Integration",
                description: "Seamless integration of various software systems and platforms to create unified business workflows.",
                image: "/sys.webp"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center bg-gray-100 h-48 sm:h-56">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 leading-7 flex-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>    

      {/* Statistics Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">OUR IMPACT</p>
            <h2 className="text-2xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real results from real projects that drive business growth
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: countedStats.customers, label: "Satisfied Customers", suffix: "+" },
              { number: countedStats.agents, label: "Professional Agents", suffix: "" },
              { number: countedStats.hours, label: "Hours Support", suffix: "/7" },
              { number: countedStats.projects, label: "Project Finished", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center relative"
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
              At our core, we are builders
            </h2>
            <p className="text-lg text-slate-600">
              <span className="font-payout">our focus</span>
            </p>
          </div>

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
      <section className="px-4 sm:px-8 py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 text-center">
              <div className="h-auto mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
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
              </div>
              <div>
                <Link href="/contact">
                  <span className="inline-block py-3 sm:py-4 px-8 sm:px-10 bg-black text-white rounded-full font-bold hover:bg-slate-800 transition-colors duration-300 text-lg">
                    Let's Ship It Already
                  </span>
                </Link>
              </div>
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