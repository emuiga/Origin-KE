'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("../components/Globe"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
});
const TestimonialsCarousel = dynamic(() => import("../components/TestimonialsCarousel"), { 
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
});
const ClientsCarousel = dynamic(() => import("../components/ClientsCarousel"), { 
  ssr: false,
  loading: () => <div className="h-24 bg-gray-100 animate-pulse rounded-lg" />
});
const FeaturedProjects = dynamic(() => import("../components/FeaturedProjects"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});
const GlobalPresence = dynamic(() => import("../components/GlobalPresence"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});



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
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">

      

      <Header />

      {/* Hero Section - StoryBrand Approach */}
      <section className="relative px-2 sm:px-3 md:px-4 pt-12 sm:pt-24 pb-12 sm:pb-32 min-h-[100vh] flex flex-col md:flex-row md:items-center md:bg-[url('/bg.webp')] md:bg-no-repeat md:bg-cover md:bg-[position:50%_40%]">
        {/* Overlay for readability - only on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40 hidden md:block" />
        {/* Mobile image */}
        <div className="md:hidden w-full h-64 overflow-hidden rounded-2xl mb-8 relative">
          <Image
            src="/bg.webp"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="max-w-6xl mx-auto w-full relative z-10 md:flex-1">
          <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
            {/* Clear Value Proposition */}
            <h1 className="font-bold text-black md:text-white tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Technology That Works
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 md:text-gray-200 max-w-2xl leading-7">
              We build fast, clear and dependable digital products, including websites, apps and internal tools, crafted to convert and scale with your team.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link 
                href="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Book a call →
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-gray-300 md:border-white/30 text-gray-900 md:text-white hover:border-gray-400 md:hover:border-white/60 hover:text-gray-900 md:hover:text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="px-2 sm:px-3 md:px-4 py-1 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Feature Image with stats overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 relative h-[300px] sm:h-[400px] lg:h-[640px]">
              <Image
                src="/girl.webp"
                alt="Happy client using our solutions"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stats card removed */}
          </motion.div>

          {/* Right: Copy like the shared reference */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">PARTNER WITH US</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We set a new standard for business experience
            </h2>
            <div className="mt-8 space-y-8 max-w-2xl">
              <div>
                <div className="font-semibold text-slate-900 text-[20px] leading-[28px]">We've Mastered the Craft</div>
                <p className="text-slate-700 text-[20px] leading-[28px] font-medium">
                Our cross-functional team collaborate seamlessly to launch solutions that work in your business environment.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="font-semibold text-slate-900 text-[20px] leading-[28px]">Built Around Your Needs</div>
                <p className="text-slate-700 text-[20px] leading-[28px] font-medium">
                  Your context drives our approach. We design and develop to your constraints and objectives, producing solutions that fit like a glove.
                </p>
              </div>
              <div className="pt-2">
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Get A Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white overflow-hidden min-h-[70vh]">
        {/* Globe background - visible, large, top half, full width */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <Globe
            fluid
            opacity={0.4}
            positionClassName="absolute bottom-0 left-1/2 -translate-x-1/2"
            className="w-[200%] h-[200%]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">OUR CLIENTS</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by businesses across industries.
            </h2>
          </motion.div>

          <ClientsCarousel />
        </div>
      </section>

      <FeaturedProjects />

      {/* Pricing Section - removed */}
      {false && (
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
            <p className="text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-7">
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
                <p className="text-lg font-medium text-slate-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional Website (5 pages)
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile Responsive Design
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Contact Forms & Analytics
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
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
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">KSh 350,000</div>
                <p className="text-lg font-medium text-slate-600">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Website (10 pages)
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  E-commerce Integration
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile App (iOS/Android)
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Payment Gateway Setup
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
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
                <p className="text-lg font-medium text-slate-600">Tailored solutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Software Development
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  HR Management Systems
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API Integration & Development
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Infrastructure Setup
                </li>
                <li className="flex items-center text-lg font-medium text-slate-700">
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
            <p className="text-lg font-medium text-slate-600 mb-4 leading-7">
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
      )}

      

      {/* Success Story Section */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-white overflow-hidden">
        {/* Globe as subtle background */}
        <Globe size={900} opacity={0.4} className="-z-10" />
        <div className="relative z-10 text-[20px] leading-[28px] font-medium">
          <TestimonialsCarousel />
        </div>
      </section>

      <GlobalPresence />

      {/* Footer */}
      <Footer />
    </div>
  );
} 