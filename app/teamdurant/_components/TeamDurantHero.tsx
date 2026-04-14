'use client';

import { motion } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function TeamDurantHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] max-w-[120vw] max-h-[120vh] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.18)_0%,_rgba(236,72,153,0.08)_30%,_transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.12)_0%,_transparent_60%)]" />
      </div>

      {/* Vertical accent lines */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute left-6 lg:left-12 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-brand-purple/50 to-transparent origin-center hidden md:block"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute right-6 lg:right-12 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-brand-pink/50 to-transparent origin-center hidden md:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10 md:mb-14"
          >
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-brand-purple/70" />
            <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
              CreaDev Design — Proposal
            </span>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-brand-pink/70" />
          </motion.div>

          {/* Editorial line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`${serif.className} italic text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-2 md:mb-4`}
          >
            Prepared exclusively for
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.85] tracking-tight mb-10 md:mb-14"
          >
            <span className="block bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Team Durant
            </span>
          </motion.h1>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-40 md:w-56 mx-auto bg-gradient-to-r from-transparent via-brand-purple to-transparent mb-10 origin-center"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 font-light tracking-tight"
          >
            Two routes forward.
          </motion.p>

          {/* Brief intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.1 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            A breakdown of where teamdurant.com can go from here, what each path delivers, and what it costs.
          </motion.p>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-brand-purple/80 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
