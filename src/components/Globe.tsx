'use client';

import { useRef, useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';
import createGlobe from 'cobe';

type GlobeProps = {
  size?: number;
  opacity?: number;
  className?: string;
  positionClassName?: string; // allows overriding default absolute centering
  fluid?: boolean; // if true, let parent control width/height via CSS
};

const Globe = ({ size = 700, opacity = 1, className = "", positionClassName, fluid = false }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pointerInteracting, setPointerInteracting] = useState<number | null>(null);
  const [pointerInteractionMovement, setPointerInteractionMovement] = useState(0);
  const phiRef = useRef(0);

  const r = useSpring(0, {
    mass: 1,
    stiffness: 280,
    damping: 40,
  });

  useEffect(() => {
    createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 2000,
      height: 2000,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.4, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current + r.get();
      },
    });
    canvasRef.current!.style.opacity = '1';
  }, [pointerInteracting, r]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setPointerInteracting(e.clientX - pointerInteractionMovement);
    canvasRef.current!.style.cursor = 'grabbing';
  };

  const handlePointerUp = () => {
    setPointerInteracting(null);
    canvasRef.current!.style.cursor = 'grab';
  };

  const handlePointerOut = () => {
    setPointerInteracting(null);
    canvasRef.current!.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (pointerInteracting !== null) {
      const delta = e.clientX - pointerInteracting;
      setPointerInteractionMovement(delta);
      r.set(delta / 200);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (pointerInteracting !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting;
      setPointerInteractionMovement(delta);
      r.set(delta / 100);
    }
  };

  return (
    <div
      className={`${positionClassName ?? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} pointer-events-none ${className}`}
      style={fluid ? { opacity } : { width: `${size}px`, height: `${size}px`, opacity }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        width="2000"
        height="2000"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
};

export default Globe;