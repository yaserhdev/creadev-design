'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How strong the magnetic effect is (0-1)
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  href,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  
  // Motion values for smooth magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configuration for smooth, natural movement
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic effect with strength multiplier
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    // Smoothly return to center
    x.set(0);
    y.set(0);
  };

  // Shared props for both button and anchor
  const sharedProps = {
    ref: ref as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
  };

  // If href provided, render as link
  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        style={{ x: xSpring, y: ySpring }}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      {...sharedProps}
      type={type}
      onClick={onClick}
      style={{ x: xSpring, y: ySpring }}
    >
      {children}
    </motion.button>
  );
}