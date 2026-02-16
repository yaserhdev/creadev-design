'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number; // Duration in seconds
  prefix?: string; // e.g., "$", "+"
  suffix?: string; // e.g., "%", "K", "M"
  className?: string;
  decimals?: number; // Number of decimal places
}

export default function CountUp({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(end);
    }
  }, [isInView, hasAnimated, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const value = latest.toFixed(decimals);
      setDisplayValue(value);
    });

    return () => unsubscribe();
  }, [springValue, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}