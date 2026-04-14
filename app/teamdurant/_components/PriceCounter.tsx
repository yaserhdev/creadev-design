'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface PriceCounterProps {
  value: number;
  className?: string;
  duration?: number;
}

/**
 * Animated price counter that formats with thousands separators.
 * Counts up from 0 to the target value when scrolled into view.
 */
export default function PriceCounter({
  value,
  className = '',
  duration = 2,
}: PriceCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px',
    amount: 0.3,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
    duration: duration * 1000,
  });

  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(value);
    }
  }, [isInView, hasAnimated, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest).toLocaleString('en-US'));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      ${displayValue}
    </motion.span>
  );
}
