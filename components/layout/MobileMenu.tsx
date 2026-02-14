'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 -mr-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex items-center justify-center relative">
          {/* Top Line */}
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -8,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-0.5 bg-gray-300 absolute"
          />
          
          {/* Middle Line */}
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="w-full h-0.5 bg-gray-300 absolute"
          />
          
          {/* Bottom Line */}
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 8,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-0.5 bg-gray-300 absolute"
          />
        </div>
      </button>

      {/* Menu Overlay & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300 
              }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-black shadow-2xl z-40 md:hidden"
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Navigation Links */}
                <div className="flex-1 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    const isContact = link.label === 'Contact';

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          duration: 0.3 
                        }}
                      >
                        {isContact ? (
                          <Link
                            href={link.href}
                            className="block px-6 py-4 text-center bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block px-6 py-4 rounded-lg font-medium transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white'
                                : 'text-gray-700 hover:bg-purple-50 hover:text-brand-purple'
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">CreaDev Design</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Based in Fairfax, VA
                  </p>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}