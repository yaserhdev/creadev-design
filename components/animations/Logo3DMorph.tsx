'use client';

import { useState, useEffect } from 'react';

export default function Logo3DMorph() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <style jsx>{`
        @keyframes slideC {
          from { transform: translate(110px, 12.2px); }
          to { transform: translate(67.2px, 12.2px); }
        }

        @keyframes slideD {
          from { transform: translate(143px, 12.2px); }
          to { transform: translate(182.8px, 12.2px); }
        }

        @keyframes expandFromCenter {
          from { 
            x: 140px;
            width: 0px;
          }
          to { 
            x: 67px;
            width: 146px;
          }
        }

        .bracket-c {
          animation: slideC 1.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.3s;
          transform: translate(110px, 12.2px);
        }

        .bracket-d {
          animation: slideD 1.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.3s;
          transform: translate(143px, 12.2px);
        }

        .text-reveal-rect {
          animation: expandFromCenter 4.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Logo Container - Made bigger (600px from 420px) */}
      <div className="relative w-[600px] h-[130px] flex items-center justify-center">
        <svg 
          width="600" 
          height="130" 
          viewBox="0 0 280 60"
          className="drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="morph-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ec4899' }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
            </linearGradient>
            <linearGradient id="morph-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
              <stop offset="100%" style={{ stopColor: '#ec4899' }} />
            </linearGradient>
            <linearGradient id="morph-underline" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ec4899' }} />
              <stop offset="100%" style={{ stopColor: '#a855f7' }} />
            </linearGradient>
            
            {/* Horizontal reveal mask - expands from center */}
            <clipPath id="text-reveal">
              <rect 
                className="text-reveal-rect"
                x="140" 
                y="0" 
                width="0" 
                height="60"
              />
            </clipPath>
          </defs>

          {/* Left C bracket */}
          <g className="bracket-c">
            <path 
              d="M20 0 C9 0 0 9 0 20 C0 31 9 40 20 40 L27 40 L27 29 L20 29 C15 29 11 25 11 20 C11 15 15 11 20 11 L27 11 L27 0 Z" 
              fill="url(#morph-grad-1)"
            />
          </g>

          {/* Right D bracket */}
          <g className="bracket-d">
            <path 
              d="M7 0 C18 0 27 9 27 20 C27 31 18 40 7 40 L0 40 L0 29 L7 29 C12 29 16 25 16 20 C16 15 12 11 7 11 L0 11 L0 0 Z" 
              fill="url(#morph-grad-2)"
            />
          </g>

          {/* Center text - reveals from center outward with clip mask */}
          <g clipPath="url(#text-reveal)">
            {/* CREADEV text */}
            <text 
              x="138" 
              y="32" 
              textAnchor="middle" 
              fontFamily="'Outfit', sans-serif" 
              fontWeight="700" 
              fill="#171717"
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
              fill="url(#morph-underline)"
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
          </g>
        </svg>
      </div>
    </div>
  );
}