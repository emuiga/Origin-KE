'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardStack from "../../components/CardStack";
import { PortfolioPatterns } from "../../components/DecorativePatterns";

export default function Portfolio() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [countedStats, setCountedStats] = useState({ customers: 0, agents: 0, hours: 0, projects: 0 });


  // Counter animation effect - optimized
  useEffect(() => {
    const targetStats = { customers: 15, agents: 12, hours: 24, projects: 15 };
    const duration = 1500; // Reduced duration
    const steps = 30; // Reduced steps for better performance
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
    }, 3000); // Increased interval for better performance

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
    <div className="min-h-screen bg-surface overflow-hidden relative">
      <PortfolioPatterns />
      <Header />

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-8 pt-16 sm:pt-24 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">WHAT WE BUILD</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Tell us what&apos;s broken. We&apos;ll know how to fix it.
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
                description: "Connecting your software systems and platforms so your business runs as one, without the manual workarounds.",
                image: "/sys.webp"
              },
              {
                title: "Business Systems (Odoo, ERP, POS)",
                description: "Odoo customisations, ERP implementations, and point-of-sale systems that bring inventory, sales, and operations into one place.",
                image: "/sys.webp"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="relative bg-gray-100 h-48 sm:h-56">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
      <section className="px-4 sm:px-8 py-16 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">OUR IMPACT</p>
            <h2 className="text-2xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Numbers that mean something.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: countedStats.customers, label: "Satisfied Clients", suffix: "+" },
              { number: countedStats.agents, label: "Engineers and Collaborators", suffix: "+" },
              { number: countedStats.hours, label: "Hour Availability", suffix: "/7" },
              { number: countedStats.projects, label: "Projects Delivered", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center relative"
              >
                <div className="text-4xl sm:text-5xl font-bold text-teal-600 mb-3">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">
              At our core, we are builders
            </h2>
          </div>
          
          <section className="px-4 sm:px-8 py-10 sm:py-12 bg-white">
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
                  <span className="inline-block py-3 sm:py-4 px-8 sm:px-10 bg-teal-600 text-white rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-lg">
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
          {/* Descriptive Text Below Carousel */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whatever your business needs, we have built it before or we know how to build it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 