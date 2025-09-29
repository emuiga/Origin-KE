'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const clients = [
  { 
    label: "Dreamers",
    description: "People with personal ideas looking to bring them to life digitally.",
    image: "/dream.webp"
  },
  { 
    label: "Builders",
    description: "Startup founders experimenting and scaling new ventures.",
    image: "/individual2.jpg"
  },
  { 
    label: "Challengers",
    description: "SMEs aiming to compete by adopting smarter tools.",
    image: "/change.webp"
  },
  { 
    label: "Leaders",
    description: "Enterprises requiring security, scalability, and innovation.",
    image: "/lead.webp"
  },
  { 
    label: "Change-Makers",
    description: "NGOs, education, and civic groups leveraging tech for social impact.",
    image: "/ent.webp"
  }
];

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  // Duplicate slides for seamless looping
  const slides = [...clients, clients[0]]; // append first slide at the end

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle boundary jump: when we move to the duplicated last slide, jump back to 0 without animation
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      const timeout = setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(0);
        // Re-enable transition on next tick
        requestAnimationFrame(() => {
          setDisableTransition(false);
        });
      }, 820); // slightly longer than transition duration for smoothness
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, slides.length]);

  const handleDotClick = (index: number) => {
    setDisableTransition(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={disableTransition ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
      >
        {slides.map((client, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 px-2"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <img
                  src={client.image}
                  alt={client.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]">
                    {client.label}
                  </span>
                  {client.description && (
                    <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg max-w-3xl">
                      {client.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === (currentIndex % clients.length) ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;