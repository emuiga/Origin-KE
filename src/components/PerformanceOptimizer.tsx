'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/dream.webp',
        '/bg.webp',
        '/girl.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize animations for reduced motion
    const optimizeAnimations = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }
    };

    // Intersection Observer for lazy loading
    const setupIntersectionObserver = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Initialize optimizations
    preloadCriticalImages();
    optimizeAnimations();
    setupIntersectionObserver();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
}
