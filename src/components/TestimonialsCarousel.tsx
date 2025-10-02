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
    name: 'Grace Wanjiku',
    company: 'KIFWA',
    quote: 'The software has positively impacted our operations.',
    image: '/womann.jpg'
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
  const [isMobile, setIsMobile] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality like Bootstrap carousel
  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // disable auto-advance for reduced motion users

    const interval = setInterval(() => {
      nextTestimonial();
    }, isMobile ? 5000 : 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[20px] leading-[28px] font-medium text-blue-700 mb-4">WHAT OUR CLIENTS SAY</p>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            We serve people all over the world with innovative digital solutions.
            </h2>
      </div>

      <div className="relative">
        <div
          className="bg-white/85 border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {/* Left: Image with overlay icon */}
            <div className="md:w-1/2 w-full relative">
              <Image 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                width={560} 
                height={420} 
                className="object-cover w-full h-full max-h-[360px] md:max-h-[420px]" 
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-2 left-2">
                <Image 
                  src="/quote.png" 
                  alt="quote" 
                  width={56} 
                  height={56} 
                  className="opacity-80"
                  priority={currentIndex === 0}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 w-full flex flex-col justify-center">
              <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center gap-4 relative">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonials[currentIndex].name}</div>
                  <div className="text-slate-600">{testimonials[currentIndex].company}</div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <Image 
                    src="/quote.png" 
                    alt="quote" 
                    width={56} 
                    height={56} 
                    className="opacity-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;