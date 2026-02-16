import CharacterAnimation from '@/components/animations/CharacterAnimation';
import Logo3D from '@/components/animations/Logo3DMorph';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Rotating Logo - NOW CONSTRAINED */}
          <div className="mb-8 flex justify-center w-full max-w-full overflow-hidden">
            <Logo3D />
          </div>
          
          {/* Animated Heading - FIXED FOR MOBILE VISIBILITY */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
            {/* Simplified for mobile - no character animation issues */}
            <span className="inline-block bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
              <CharacterAnimation 
                text="We Build Websites People Actually Talk About"
              />
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Not another forgettable template. Real design, real code, real results — crafted for businesses ready to stand out.
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium websites without the agency price tag.
          </p>
          
          {/* CTA Buttons - BOTH NOW MAGNETIC */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton 
              href="/contact"
              strength={0.3}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">Let's Talk</span>
            </MagneticButton>
            
            <MagneticButton 
              href="/projects"
              strength={0.25}
              className="px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all hover:shadow-lg"
            >
              View Our Projects
            </MagneticButton>
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