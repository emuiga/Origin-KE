'use client';

import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Disable animations on mobile
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Reduce motion for mobile */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Optimize images for mobile */
        img {
          image-rendering: optimizeSpeed;
        }
        
        /* Reduce blur effects on mobile */
        .blur-3xl {
          filter: blur(8px) !important;
        }
      `;
      document.head.appendChild(style);

      // Disable hover effects on touch devices
      const disableHover = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.pointerEvents = 'auto';
        });
      };
      
      disableHover();
      
      // Cleanup
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return null;
}


