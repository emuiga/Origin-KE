'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Bechfam.io",
    subtitle: "Cloud Solutions",
    description:
      "When Bechfam.io needed enterprise-grade cloud infrastructure paired with an intuitive management interface, we rose to the occasion — delivering a scalable platform that makes complex cloud operations feel effortless.",
    tags: ["Strategy", "Development", "Cloud", "UX"],
    image: "/Screenshot from 2025-09-09 07-07-25.png",
    href: "https://bechfam.io",
  },
  {
    id: 2,
    title: "KIFWA",
    subtitle: "Clearing & Forwarding System",
    description:
      "When Kenya's largest freight and warehousing association needed a system to unify cargo tracking, documentation, and member operations, we built a comprehensive logistics platform that keeps the industry moving.",
    tags: ["Strategy", "Logistics", "Custom Software", "Database"],
    image: "/Screenshot from 2025-07-02 14-38-44.png",
    href: "https://kifwa-agents.sitytechnologies.co.ke/login",
  },
];

export default function FeaturedProjects() {
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
            OUR FEATURED PROJECTS
          </p>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you may ask from a Web Agency.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full rounded-2xl border border-slate-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  {/* Screenshot area */}
                  <div className="bg-gray-100 relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Content area */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-lg sm:text-xl font-medium text-blue-600">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <p className="text-sm font-medium text-slate-400 tracking-wide">
                      {project.tags.join(" — ")}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
