'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instrument_Serif } from 'next/font/google';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const PASSCODE = 'MOVEASONE';

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    try {
      if (sessionStorage.getItem('td-proposal-auth') === 'true') {
        setIsUnlocked(true);
      }
    } catch {
      // sessionStorage unavailable, require entry every time
    }
  }, []);

  // Auto-focus input on mount
  useEffect(() => {
    if (!isUnlocked && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  const handleSubmit = () => {
    if (code.trim().toUpperCase() === PASSCODE) {
      setError(false);
      setIsExiting(true);
      try {
        sessionStorage.setItem('td-proposal-auth', 'true');
      } catch {
        // Silent fail
      }
      // Delay unlock to let exit animation play
      setTimeout(() => setIsUnlocked(true), 1200);
    } else {
      setError(true);
      setCode('');
      inputRef.current?.focus();
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          key="gate"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Background atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Central glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0.6 : 0.3 }}
              transition={{ duration: isExiting ? 0.8 : 3, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[150vw] max-h-[150vh] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_rgba(236,72,153,0.06)_40%,_transparent_70%)]"
            />
            {/* Secondary glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              transition={{ duration: 4, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.2)_0%,_transparent_60%)]"
            />
          </div>

          {/* Vertical accent lines */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-8 lg:left-16 top-[25%] bottom-[25%] w-px bg-gradient-to-b from-transparent via-brand-purple/40 to-transparent origin-center hidden md:block"
          />
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute right-8 lg:right-16 top-[25%] bottom-[25%] w-px bg-gradient-to-b from-transparent via-brand-pink/40 to-transparent origin-center hidden md:block"
          />

          {/* Horizontal accent lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute top-[30%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent origin-center hidden md:block"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute bottom-[30%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent origin-center hidden md:block"
          />

          {/* Content */}
          <motion.div
            animate={isExiting ? { opacity: 0, y: -30 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center px-6 w-full max-w-lg"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-px w-6 md:w-12 bg-gradient-to-r from-transparent to-brand-purple/60" />
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] font-mono text-brand-purple/80 uppercase whitespace-nowrap">
                CreaDev Design
              </span>
              <div className="h-px w-6 md:w-12 bg-gradient-to-l from-transparent to-brand-pink/60" />
            </motion.div>

            {/* Lock icon — minimal, geometric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#gate-lock-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50"
              >
                <defs>
                  <linearGradient id="gate-lock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className={`${serif.className} italic text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-3 text-center`}
            >
              This proposal is private.
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-sm text-gray-500 mb-12 text-center tracking-wide"
            >
              Enter the access code to continue.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 origin-center"
            />

            {/* Input field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="w-full max-w-xs mb-4"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="ACCESS CODE"
                  autoComplete="off"
                  spellCheck={false}
                  className={`w-full bg-transparent text-center text-lg md:text-xl tracking-[0.3em] font-mono py-4 border-b-2 outline-none transition-all duration-500 placeholder:text-gray-700 placeholder:tracking-[0.3em] placeholder:text-sm ${
                    error
                      ? 'border-red-500/60 text-red-400'
                      : 'border-white/10 text-gray-100 focus:border-brand-purple/60'
                  }`}
                />
                {/* Animated underline glow on focus */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-500 group-focus-within:w-full" />
              </div>
            </motion.div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400/70 text-xs tracking-widest font-mono uppercase mb-4"
                >
                  Invalid code
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-4"
            >
              <button
                onClick={handleSubmit}
                className="group relative px-10 py-3 text-xs tracking-[0.3em] font-mono uppercase text-gray-400 hover:text-gray-100 transition-colors duration-500 overflow-hidden"
              >
                {/* Button border — gradient */}
                <span className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-brand-purple/40 transition-colors duration-500" />
                {/* Hover glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)] rounded-lg" />
                <span className="relative">Enter</span>
              </button>
            </motion.div>

            {/* Bottom accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="mt-16 flex items-center gap-3"
            >
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-[8px] md:text-[9px] tracking-[0.4em] font-mono text-gray-700 uppercase">
                Prepared for Team Durant
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-white/10" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
