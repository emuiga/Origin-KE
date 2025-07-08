'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#84a98c] flex flex-col relative overflow-hidden">
      {/* Animated SVG background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(20)">
            <stop offset="0%" stopColor="#b7e4c7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#84a98c" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="400" rx="700" ry="350" fill="url(#bg1)" />
        <ellipse cx="300" cy="700" rx="300" ry="120" fill="#cad2c5" opacity="0.18" />
        <ellipse cx="1200" cy="200" rx="200" ry="80" fill="#52796f" opacity="0.12" />
        <path d="M0 700 Q 400 600 800 700 T 1440 700" stroke="#354f52" strokeWidth="2" fill="none" opacity="0.08" />
      </svg>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-16">
        {/* Floating Origin logo */}
        <div className="mb-12 flex flex-col items-center animate-float">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/80 to-[#84a98c] shadow-2xl flex items-center justify-center animate-glow">
            <img src="/logo.png" alt="Origin Logo" className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center tracking-tight mb-4 drop-shadow-lg">Let's Make Something Incredible</h1>
        <p className="text-xl text-white/80 text-center mb-16 max-w-2xl">Reach out and let's create together.</p>
        <div className="flex flex-col items-center space-y-10 w-full">
          <a href="tel:+254768519115" className="group flex items-center justify-center space-x-4 text-white/90 hover:text-white transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-[#b7e4c7]/60 transition-all">
              <Phone size={28} strokeWidth={2} />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-[#b7e4c7] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              +254 768 519 115
            </span>
          </a>
          <a href="mailto:info@origin.co.ke" className="group flex items-center justify-center space-x-4 text-white/90 hover:text-white transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-[#b7e4c7]/60 transition-all">
              <Mail size={28} strokeWidth={2} />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-[#b7e4c7] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              info@origin.co.ke
            </span>
          </a>
          <a href="https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8A" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-4 text-white/90 hover:text-white transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 group-hover:bg-[#b7e4c7]/60 transition-all">
              <MapPin size={28} strokeWidth={2} />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-[#b7e4c7] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              Nairobi, Kenya
            </span>
          </a>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px 10px #b7e4c744; }
          50% { box-shadow: 0 0 80px 20px #b7e4c766; }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 