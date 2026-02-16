'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngle?: number; // Maximum tilt angle in degrees
  scale?: number; // Scale on hover (1 = no scale, 1.05 = 5% larger)
  glare?: boolean; // Add subtle glare effect
}

export default function TiltCard({
  children,
  className = '',
  tiltMaxAngle = 15,
  scale = 1.02,
  glare = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spring configuration for smooth, natural tilt
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    // X position controls Y-axis rotation (left/right tilt)
    // Y position controls X-axis rotation (up/down tilt)
    const rotateYValue = ((x - centerX) / centerX) * tiltMaxAngle;
    const rotateXValue = -((y - centerY) / centerY) * tiltMaxAngle;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    // Return to neutral position
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale }}
      className={className}
    >
      {children}
      {glare && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-xl opacity-0 hover:opacity-100 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
      )}
    </motion.div>
  );
}