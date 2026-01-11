'use client';

import { motion } from 'framer-motion';

interface CharacterAnimationProps {
  text: string;
  className?: string;
}

export default function CharacterAnimation({ text, className = '' }: CharacterAnimationProps) {
  const characters = text.split('');
  
  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // Custom easing curve
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}