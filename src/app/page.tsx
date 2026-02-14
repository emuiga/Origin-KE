'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HomePatterns } from "../components/DecorativePatterns";
import dynamic from "next/dynamic";
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


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <HomePatterns />

      <Header />

      {/* Hero Section - StoryBrand Approach */}
      <section className="relative px-2 sm:px-3 md:px-4 pt-12 sm:pt-24 pb-12 sm:pb-32 min-h-[100vh] flex flex-col md:flex-row md:items-center">
        {/* Desktop background image with proper loading */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/bg.webp"
            alt="Hero background"
            fill
            className="object-cover object-[50%_40%]"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
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
            quality={90}
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

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 md:text-gray-300 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                15+ projects delivered
              </span>
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
            <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">WHY CHOOSE US</p>
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
              <div className="pt-2 flex justify-center sm:justify-start">
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Get A Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="relative px-4 sm:px-8 py-8 sm:py-16 bg-white overflow-hidden min-h-[70vh]">
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

      

      {/* Success Story Section */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-white overflow-hidden">
        <div className="relative z-10 text-[20px] leading-[28px] font-medium">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-white overflow-hidden">
      <div className="relative w-full text-center">
        <h2 className="w-full text-4xl sm:text-6xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
          Serving The World, Based In
        </h2>
        <p className="mt-4 w-full text-4xl sm:text-6xl lg:text-7xl font-extrabold text-blue-600 tracking-tight">
          GMT+3
        </p>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          We operate from Nairobi, Kenya — delivering to clients worldwide.
        </p>
      </div>
    </section>
      {/* Footer */}
      <Footer />
    </div>
  );
} 