"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



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
            From initial concept to final deployment, we follow a proven methodology that ensures your project succeeds. 
            Every step is transparent, every decision is collaborative, and every outcome is designed to exceed your expectations.
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
                subtitle: "Discovery & Requirements",
                deliverables: ["Project brief", "Technical requirements", "User personas"],
                description: "We actively listen to understand your vision, goals, and challenges. Through detailed discovery sessions, we map out your business needs and technical requirements.",
              },
              {
                number: "02",
                title: "Strategy & Synergy",
                subtitle: "Planning & Architecture",
                deliverables: ["Project roadmap", "Technical architecture", "Timeline & milestones"],
                description: "Your thinking meets ours. Together, we craft a comprehensive roadmap that balances ambition with achievability, including detailed technical architecture and project timeline.",
              },
              {
                number: "03",
                title: "Design & Define",
                subtitle: "UI/UX & Prototyping",
                deliverables: ["Wireframes", "UI designs", "Interactive prototypes"],
                description: "Form follows function, and both need to impress. We create intuitive, engaging interfaces with detailed wireframes, visual designs, and interactive prototypes for your approval.",
              },
              {
                number: "04",
                title: "Build & Breathe",
                subtitle: "Development & Integration",
                deliverables: ["Core functionality", "Database setup", "API integration"],
                description: "Our developers write clean, efficient, and future-proof code. We build systems that scale with your success, implementing core features and integrating all necessary components.",
              },
              {
                number: "05",
                title: "Test & Triumph",
                subtitle: "Quality Assurance",
                deliverables: ["Bug reports", "Performance optimization", "Security audit"],
                description: "We thoroughly test every feature, optimize performance, and ensure security. Our quality assurance process guarantees your product works flawlessly across all devices and scenarios.",
              },
              {
                number: "06",
                title: "Launch & Learn",
                subtitle: "Deployment & Support",
                deliverables: ["Live deployment", "Training materials", "Ongoing support"],
                description: "We orchestrate smooth launches and provide comprehensive training. Post-launch, we offer ongoing support, monitoring, and iterative improvements to ensure continued success.",
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
                  <h4 className="text-base sm:text-lg text-blue-600 font-medium mb-2">{step.subtitle}</h4>
                  
                  {/* Deliverables */}
                  <div className="mb-3">
                    <div className="mb-3">
                      <p className="text-xs font-medium text-slate-500 mb-1">What You Get:</p>
                      <div className="flex flex-wrap gap-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                </div>
                
                {/* Circle marker on timeline - positioned differently on mobile vs desktop */}
                <div className={`absolute top-4 ${
                  index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                } lg:transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg z-20`}></div>
                
                {/* Connecting Arrow - only show if not the last step */}
                {index < 5 && (
                  <div className={`absolute ${
                    index % 2 === 0 ? 'left-0 lg:left-1/2 lg:right-auto' : 'left-0 lg:left-1/2'
                  } lg:transform lg:-translate-x-1/2 top-8 sm:top-10 lg:top-12 w-0 h-0 z-10`}>
                    <div className="relative">
                      {/* Arrow line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-blue-500 to-blue-300"></div>
                      {/* Arrow head */}
                      <div className="absolute top-16 sm:top-20 lg:top-24 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-500"></div>
                    </div>
                  </div>
                )}
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
            Ready to Bring Your Vision to Life?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every successful project starts with a conversation. Let's discuss your goals, explore possibilities, and create something extraordinary together.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/contact">
              <span className="inline-block py-3 sm:py-4 px-6 sm:px-8 bg-blue-600 text-white rounded-lg font-semibold text-lg transition-colors duration-300">
                Get Your Free Consultation
              </span>
            </Link>
            <div className="text-sm text-slate-500">
              <span className="font-medium">✓</span> No obligation • <span className="font-medium">✓</span> 30-minute call • <span className="font-medium">✓</span> Custom proposal
            </div>
          </motion.div>
          
          <motion.div
            className="mt-8 pt-6 border-t border-slate-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-sm text-slate-500">
              Join <span className="font-semibold text-blue-600">150+</span> satisfied clients who chose Origin for their digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 