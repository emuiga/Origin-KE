'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  angle?: number;
  className?: string;
};

function GridBackground({ angle = 65, className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        'selection:pointer-events-none absolute size-full overflow-hidden [perspective:200px]',
        className,
      )}
      style={{
        ['--grid-angle' as any]: `${angle}deg`,
      }}
      aria-hidden
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            'animate-grid',
            '[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]',
            '[background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_2px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.7)_2px,transparent_0)]',
            'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_2px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.6)_2px,transparent_0)]',
          )}
        />
      </div>
    </div>
  );
}

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
          
          <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">OUR FEATURED PROJECTS</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you may ask from a Web Agency.
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {[
            { id: 1, title: "Adorned Family Home", image: "/adorned.png", href: "https://adornedafh.com" },
            { id: 2, title: "KIFWA Clearing & Forwarding System", image: "/Screenshot from 2025-07-02 14-38-44.png", href: "https://kifwa.sitytechnologies.co.ke" },
            { id: 3, title: "Bechfam.io Cloud Solutions", image: "/Screenshot from 2025-09-09 07-07-25.png", href: "https://bechfam.io" },
            { id: 4, title: "Open Source", image: "/track.webp", href: "/" },
          ].map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white overflow-hidden h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={project.href} className="flex h-full flex-col" target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <div className="flex items-center justify-center bg-gray-100 h-72 sm:h-80 md:h-[420px] lg:h-[480px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6 text-center min-h-[64px] sm:min-h-[72px] flex items-center justify-center">
                  <h3 className="text-lg sm:text-2xl font-semibold text-black">
                    {project.title}
                  </h3>
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


