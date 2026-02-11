import Link from 'next/link';
import MobileMenu from './MobileMenu';
import InteractiveLogo from '@/components/animations/InteractiveLogo';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <InteractiveLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="text-gray-700 hover:text-brand-purple transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}