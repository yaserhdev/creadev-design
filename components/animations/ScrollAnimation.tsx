'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right'; // Animation direction
  distance?: number; // How far to move (in pixels)
}

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  distance = 50,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  // Animated position (returns to 0)
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0 };
      case 'left':
      case 'right':
        return { x: 0 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, ...getAnimatePosition() } : { opacity: 0, ...getInitialPosition() }}
      transition={{ 
        delay, 
        duration: 0.6, // Slightly longer for smoother feel
        ease: [0.22, 1, 0.36, 1], // Custom easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}