'use client';

import { motion } from 'framer-motion';

interface CharacterAnimationProps {
  text: string;
  className?: string;
}

export default function CharacterAnimation({ text, className = '' }: CharacterAnimationProps) {
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