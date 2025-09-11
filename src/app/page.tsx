'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";



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



  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 overflow-hidden">

      
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

      {/* Hero Section - StoryBrand Approach */}
      <section className="relative px-4 sm:px-8 pt-8 sm:pt-20 pb-8 sm:pb-28 min-h-[80vh] flex flex-col items-center justify-center">
        {/* Soft blurred background shape */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] sm:w-[900px] sm:h-[520px] bg-blue-200/40 rounded-[40%] blur-3xl z-0" style={{filter: 'blur(80px)'}} />
        <div className="max-w-5xl mx-auto w-full text-center relative z-10">
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Clear Value Proposition */}
            <motion.h1 className="font-bold text-slate-900 tracking-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mx-auto max-w-6xl">
              Turn Your Business Into a <span className="font-payout">Sales Machine</span>
            </motion.h1>
            
            {/* Problem Statement */}
            <motion.div 
              className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
                Your customers are searching online, but they're not finding you
              </h2>
              <p className="text-red-700 text-base sm:text-lg leading-relaxed">
                Without a strong digital presence, you're invisible to 90% of your potential customers. 
                They're finding your competitors instead of you.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div 
              className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4">
                We build software that converts visitors into customers
              </h2>
              <p className="text-green-700 text-base sm:text-lg leading-relaxed mb-4">
                Custom websites, mobile apps, and digital systems that make your business irresistible to customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Web Development</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Mobile Apps</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">HR Systems</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">E-commerce</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Get Your Free Quote →
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just results that grow your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">KSh 150,000</div>
                <p className="text-slate-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional Website (5 pages)
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile Responsive Design
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Contact Forms & Analytics
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3 Months Support
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-center block"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Professional Package */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm border-2 border-blue-500 rounded-2xl p-8 shadow-xl relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">KSh 350,000</div>
                <p className="text-slate-600">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Website (10 pages)
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  E-commerce Integration
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile App (iOS/Android)
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Payment Gateway Setup
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  6 Months Support
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-center block"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Custom</div>
                <p className="text-slate-600">Tailored solutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Software Development
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  HR Management Systems
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API Integration & Development
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Infrastructure Setup
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  12 Months Support
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-center block"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 mb-4">
              All packages include free consultation and project planning
            </p>
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Need a custom solution? Let's talk →
            </Link>
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
              How We Turn Your Business Into a <span className="font-payout">Sales Machine</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We don't just build websites and apps. We build systems that convert visitors into customers and grow your revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Convert More Visitors Into Customers",
                subtitle: "Design that sells",
                description: "We create websites and apps that don't just look good—they convert. Every element is designed to guide visitors toward becoming customers.",
                gradient: "from-blue-400 to-blue-500",
                shadowColor: "shadow-blue-400/25"
              },
              {
                title: "Build Fast, Scale Smart",
                subtitle: "Performance that pays",
                description: "Your digital presence loads fast, works everywhere, and grows with your business. No technical debt, just results.",
                gradient: "from-blue-500 to-blue-600", 
                shadowColor: "shadow-blue-500/25"
              },
              {
                title: "Connect Everything Together",
                subtitle: "Systems that work",
                description: "We integrate your website, mobile app, payment systems, and business tools into one seamless experience for you and your customers.",
                gradient: "from-emerald-500 to-teal-500",
                shadowColor: "shadow-emerald-500/25"
              },
              {
                title: "Grow Your Revenue",
                subtitle: "Results that matter",
                description: "From HR systems to e-commerce platforms, we build solutions that directly impact your bottom line and business growth.",
                gradient: "from-orange-500 to-red-500",
                shadowColor: "shadow-orange-500/25"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                <h4 className="text-sm font-medium text-slate-600 mb-3">{service.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Success Story Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              From Invisible to Irresistible
            </h2>
            <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 sm:p-12 shadow-xl">
              <blockquote className="text-lg sm:text-xl text-slate-700 italic mb-6 leading-relaxed">
                "Before Origin, our website was just a business card online. Now it's our best salesperson, working 24/7 to convert visitors into customers. Our online revenue increased by 300% in just 6 months."
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm sm:text-base">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">300%</div>
                  <div className="text-slate-600">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">6 months</div>
                  <div className="text-slate-600">Time to Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-slate-600">Sales Machine</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-block"
              >
                Get Your Success Story Started →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 