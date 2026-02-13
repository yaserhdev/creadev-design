import CharacterAnimation from '@/components/animations/CharacterAnimation';
import Logo3D from '@/components/animations/Logo3DMorph';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Rotating Logo */}
          <div className="mb-8 flex justify-center">
            <Logo3D />
          </div>
          
          {/* Animated Heading - Scales down properly, wraps if needed */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
            <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
              <CharacterAnimation 
                text="Professional Web Development"
              />
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Custom websites that convert visitors into customers — built with modern technology and designed to grow with your business
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your online presence with a website that works as hard as you do. Based in Fairfax, Virginia, we specialize in creating fast, beautiful, and effective websites for small businesses and entrepreneurs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
            
            <Link 
              href="/work"
              className="px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all hover:shadow-lg"
            >
              View Our Work
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg 
              className="w-12 h-12 mx-auto text-brand-purple" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}