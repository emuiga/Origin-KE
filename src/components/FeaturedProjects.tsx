'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "KIFWA",
    subtitle: "Clearing & Forwarding",
    tag: "Client",
    tagColor: "bg-slate-100 text-slate-700",
    problem: "Kenya's largest freight and warehousing association had no unified system for custom bond tracking, documentation, or member operations.",
    built: "A full logistics platform connecting agents, insurance companies, and member management in one place.",
    accentColor: "bg-blue-600",
    logoBg: "bg-slate-50",
    logo: "/kifwa-logo.png",
    href: "https://kifwa-agents.sitytechnologies.co.ke/login",
  },
  {
    id: 2,
    title: "Bechfam.io",
    subtitle: "Cloud Solutions",
    tag: "Client",
    tagColor: "bg-slate-100 text-slate-700",
    problem: "Bechfam needed infrastructure their team could manage without a specialist on call.",
    built: "A professional platform built for institutional credibility.",
    accentColor: "bg-teal-600",
    logoBg: "bg-slate-50",
    logo: "/bechfamlogo.png",
    href: "https://bechfam.io",
  },
  {
    id: 3,
    title: "Nyandarua County Assembly",
    subtitle: "Government & Public Sector",
    tag: "Client",
    tagColor: "bg-slate-100 text-slate-700",
    problem: "The county assembly needed an internal tool to manage organisation resources.",
    built: "A purpose-built internal tool that brought their operations into one organised system.",
    accentColor: "bg-red-700",
    logoBg: "bg-slate-50",
    logo: "/government-of-kenya.webp",
    href: "#",
  },
  {
    id: 4,
    title: "Kayasend",
    subtitle: "Money Transfers",
    tag: "Our Product",
    tagColor: "bg-blue-600 text-white",
    problem: "Sending money across borders takes too long and costs too much.",
    built: "Kayasend is our own fast, direct money transfer product built for the Kenyan market.",
    accentColor: "bg-blue-500",
    logoBg: "bg-white",
    logo: "/kayasend.png",
    href: "https://kayasend.com",
  },
];

export default function FeaturedProjects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative px-4 sm:px-8 py-16 sm:py-24 bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">
            FEATURED WORK
          </p>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Work that speaks for itself.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const isOpen = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Accent bar */}
                <div className={`h-1 w-full ${project.accentColor}`} />

                {/* Logo area */}
                <div className={`${project.logoBg} flex items-center justify-center h-44 px-10 border-b border-slate-100`}>
                  <div className="relative w-full h-24">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 80vw, 40vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Always-visible: tag, subtitle, title, toggle */}
                <div className="p-6 sm:p-8 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{project.subtitle}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => toggle(project.id)}
                      aria-expanded={isOpen}
                      className="ml-4 shrink-0 flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {isOpen ? "Less" : "More"}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expandable detail */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-slate-100 space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Problem</p>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">What we built</p>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                              {project.built}
                            </p>
                          </div>
                          {project.href !== "#" && (
                            <Link
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block pt-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit site →
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
