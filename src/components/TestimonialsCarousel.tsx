'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Becher Kinyanjui',
    company: 'Bechfam Cloud Company',
    quote: 'The service provided by Origin was top-notch. Grateful for the excellent support.',
    image: '/becher.jpg'
  },
  {
    name: 'Vivian Wacera',
    company: 'Business Owner, Nakuru',
    quote: 'What I liked most about Origin is how you kept things simple but effective. Our systems are running smoothly now, and our clients have noticed the difference.',
    image: '/woman.jpg'
  },
  {
    name: 'Wangari Njoroge',
    company: 'Nairobi',
    quote: 'Working with Origin felt like partnering with people who get the hustle here in Kenya. They delivered on time and even went the extra mile to train our team.',
    image: '/womann.jpg'
  },
  {
    name: 'Author',
    company: 'Nairobi',
    quote: 'Great Listeners. I got exactly what I needed.',
    image: '/womann.jpg'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">WHAT OUR CLIENTS SAY</p>
        <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Don&apos;t take our word for it.
        </h2>
      </div>

      <div className="relative bg-white/85 border border-slate-200 rounded-xl p-8 sm:p-10 lg:p-12 shadow overflow-hidden">
        {/* Decorative quote mark */}
        <Image
          src="/quote.png"
          alt=""
          width={96}
          height={96}
          className="absolute top-6 right-6 opacity-10 pointer-events-none select-none"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Fixed-height quote area prevents layout shift between slides */}
        <div className="min-h-[120px] flex items-start mb-8">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover"
              sizes="40px"
              loading="lazy"
            />
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
            <div className="text-slate-500 text-sm">{t.company}</div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
