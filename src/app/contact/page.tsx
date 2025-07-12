'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 flex flex-col relative overflow-hidden">
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
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-200/40 rounded-[40%] blur-3xl"
          style={{filter: 'blur(80px)'}}
        />
      </div>
      <div className="pt-3 sm:pt-0">
        <Header />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-16">
        {/* Floating Origin logo */}
        <div className="mb-12 flex flex-col items-center animate-float">
          <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm shadow-2xl flex items-center justify-center animate-glow border border-white/20">
            <img src="/logo.png" alt="Origin Logo" className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 text-center tracking-tight mb-4 drop-shadow-lg">Let's Make Something Incredible</h1>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl">Reach out and let's create together.</p>
        <div className="flex flex-col items-center space-y-10 w-full">
          <a href="https://wa.me/254768519115" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-4 text-slate-700 hover:text-slate-900 transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm group-hover:bg-blue-500/20 transition-all shadow-lg">
              <Phone size={28} strokeWidth={2} className="text-slate-700" />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              +254 768 519 115
            </span>
          </a>
          <a href="mailto:info@origin.co.ke?subject=Hello, Origin" className="group flex items-center justify-center space-x-4 text-slate-700 hover:text-slate-900 transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm group-hover:bg-blue-500/20 transition-all shadow-lg">
              <Mail size={28} strokeWidth={2} className="text-slate-700" />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              info@origin.co.ke
            </span>
          </a>
          <a href="https://maps.google.com/?q=Westlands,Nairobi,Kenya" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-4 text-slate-700 hover:text-slate-900 transition-all text-2xl font-semibold">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm group-hover:bg-blue-500/20 transition-all shadow-lg">
              <MapPin size={28} strokeWidth={2} className="text-slate-700" />
            </span>
            <span className="relative after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:w-full after:absolute after:bottom-0 after:left-0">
              Nairobi, Kenya
            </span>
          </a>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px 10px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 80px 20px rgba(59, 130, 246, 0.4); }
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