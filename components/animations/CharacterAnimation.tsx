'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CharacterAnimationProps {
  text: string;
  className?: string;
}

export default function CharacterAnimation({ text, className = '' }: CharacterAnimationProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices to avoid animation issues
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, use simpler fade-in animation instead of character-by-character
  if (isMobile) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    );
  }

  // Desktop: Use character-by-character animation
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const totalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex;
            return (
              <motion.span
                key={`${char}-${wordIndex}-${charIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: totalIndex * 0.03,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}