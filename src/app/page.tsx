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
    <div className="min-h-screen bg-surface overflow-hidden relative">
      <HomePatterns />

      <Header />

      {/* Hero Section - StoryBrand Approach */}
      <section className="relative px-2 sm:px-3 md:px-4 pt-12 sm:pt-24 pb-12 sm:pb-32 min-h-[100vh] flex flex-col md:flex-row md:items-center">
        {/* Desktop background image with proper loading */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero-guy.jpg"
            alt="Hero background"
            fill
            className="object-cover object-[50%_20%]"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Overlay for readability - only on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062a26]/90 via-black/10 to-transparent hidden md:block" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[120px] hidden md:block" />
        {/* Mobile image */}
        <div className="md:hidden w-full h-64 overflow-hidden rounded-2xl mb-8 relative">
          <Image
            src="/hero-guy.jpg"
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
            <p className="text-teal-400 md:text-teal-300 font-bold tracking-widest text-sm sm:text-base uppercase">
              Nairobi-based digital agency
            </p>
            <h1 className="font-bold text-black md:text-white tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1.05] md:drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              Technology That <span className="text-teal-400">Works</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 md:text-gray-100 max-w-2xl leading-7">
              We build fast, clear and dependable digital products, including websites, apps and internal tools, crafted to convert and scale with your team.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-200 text-lg"
              >
                Book a call →
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all duration-200 text-lg"
              >
                See our work
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 md:text-gray-300 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                15+ businesses helped
              </span>
              <Link
                href="/case-studies/e4c"
                className="flex items-center gap-1.5 text-yellow-700 md:text-yellow-300 font-semibold hover:underline transition-colors"
              >
                🏆 Winner @ The E4C AI Pilot Competition
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="px-2 sm:px-3 md:px-4 py-1 sm:py-28 bg-surface">
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
                src="/why-choose.jpg"
                alt="Origin team member at work"
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
            <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We set a new standard for business experience
            </h2>
            <div className="mt-8 space-y-8 max-w-2xl">
              <div>
                <div className="font-semibold text-slate-900 text-[20px] leading-[28px]">Proven Across Industries</div>
                <p className="text-slate-700 text-[20px] leading-[28px] font-medium">
                  We have shipped platforms for organisations in different sectors and are building our own products. We understand what works.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="font-semibold text-slate-900 text-[20px] leading-[28px]">Built Around Your Needs</div>
                <p className="text-slate-700 text-[20px] leading-[28px] font-medium">
                  Your context drives our approach. We design and develop to your constraints and objectives, producing solutions that fit like a glove.
                </p>
              </div>
              <div className="pt-2 flex justify-center sm:justify-start">
                <Link href="/contact" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all duration-200">
                  Get A Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="relative px-4 sm:px-8 py-8 sm:py-16 bg-surface overflow-hidden min-h-[70vh]">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[20px] leading-[28px] font-medium text-teal-700 mb-4">OUR CLIENTS</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by businesses across industries.
            </h2>
          </motion.div>

          <ClientsCarousel />
        </div>
      </section>

      <FeaturedProjects />

      {/* Recognition Section */}
      <section className="relative px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-br from-brand-dark to-brand-dark-2 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(119,203,185,0.18),_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
          >
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-widest uppercase bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-full mb-6">
                🏆 Winner @ The E4C AI Pilot Competition
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Recognised globally for responsible AI innovation
              </h2>
              <p className="text-teal-100/70 text-lg leading-relaxed mb-8 max-w-xl">
                Out of 33 teams across all tracks, Origin won Best Overall at the 2026 Engineering for Change AI Pilot Competition. We built E4CInsights - an AI pipeline that turns 15 years of vetted sustainable development knowledge into fully cited, decision-grade policy briefs, with a human in the loop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/case-studies/e4c"
                  className="bg-teal-400 text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:shadow-xl hover:bg-teal-300 transition-all duration-200 text-center"
                >
                  Read the case study →
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all duration-200 text-center"
                >
                  Partner with us
                </Link>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-center gap-3">
              <Image
                src="/badge.png"
                alt="Winner badge"
                width={160}
                height={160}
                className="object-contain"
              />
              <p className="text-white font-semibold text-sm tracking-wide text-center">Best Overall winner</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-surface overflow-hidden">
        <div className="relative z-10 text-[20px] leading-[28px] font-medium">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-surface overflow-hidden">
      <div className="relative w-full text-center">
        <h2 className="w-full text-4xl sm:text-6xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
          Serving The World, Based In
        </h2>
        <p className="mt-4 w-full text-4xl sm:text-6xl lg:text-7xl font-extrabold text-teal-600 tracking-tight">
          GMT+3
        </p>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          We operate from Nairobi, Kenya, delivering to clients worldwide.
        </p>
      </div>
    </section>
      {/* Footer */}
      <Footer />
    </div>
  );
} 