'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InteractiveLogo() {
  return (
    <Link href="/" className="block">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
        }}
        whileTap={{ 
          scale: 0.95,
          rotate: -2,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
      >
        <svg 
          width="210" 
          height="45" 
          viewBox="0 0 280 60"
          className="cursor-pointer"
        >
          <defs>
            <linearGradient id="header-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ec4899' }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
            </linearGradient>
            <linearGradient id="header-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
              <stop offset="100%" style={{ stopColor: '#ec4899' }} />
            </linearGradient>
            <linearGradient id="header-underline" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ec4899' }} />
              <stop offset="100%" style={{ stopColor: '#a855f7' }} />
            </linearGradient>
          </defs>
          
          {/* Left C mark */}
          <g transform="translate(67.2, 12.2)">
            <path 
              d="M20 0 C9 0 0 9 0 20 C0 31 9 40 20 40 L27 40 L27 29 L20 29 C15 29 11 25 11 20 C11 15 15 11 20 11 L27 11 L27 0 Z" 
              fill="url(#header-grad-1)"
            />
          </g>
          
          {/* Right D mark */}
          <g transform="translate(182.8, 12.2)">
            <path 
              d="M7 0 C18 0 27 9 27 20 C27 31 18 40 7 40 L0 40 L0 29 L7 29 C12 29 16 25 16 20 C16 15 12 11 7 11 L0 11 L0 0 Z" 
              fill="url(#header-grad-2)"
            />
          </g>
          
          {/* CREADEV text */}
          <text 
            x="138" 
            y="32" 
            textAnchor="middle" 
            fontFamily="'Outfit', sans-serif" 
            fontWeight="700" 
            fill="#171717"
            className="dark:fill-white"
          >
            <tspan fontSize="18" dy="-6.9">C</tspan>
            <tspan fontSize="14" dy="-2.7">REA</tspan>
            <tspan fontSize="18" dy="2.7">D</tspan>
            <tspan fontSize="14" dy="-2.7">EV</tspan>
          </text>
          
          {/* Underline */}
          <rect 
            x="102.3" 
            y="30.5" 
            width="71.5" 
            height="4" 
            rx="2" 
            fill="url(#header-underline)"
          />
          
          {/* DESIGN text */}
          <text 
            x="140.6" 
            y="52" 
            textAnchor="middle" 
            fontFamily="'Outfit', sans-serif" 
            fontSize="14" 
            fontWeight="400" 
            fill="#888888"
            letterSpacing="4.5"
          >
            DESIGN
          </text>
        </svg>
      </motion.div>
    </Link>
  );
}