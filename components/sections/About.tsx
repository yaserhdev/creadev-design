import ScrollAnimation from '@/components/animations/ScrollAnimation';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24hr', label: 'Response Time' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <ScrollAnimation>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl p-1">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">👨‍💻</div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                        Yaser
                      </p>
                      <p className="text-gray-600 mt-2">Founder & Lead Developer</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-pink rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-purple rounded-full opacity-20 blur-2xl"></div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Content */}
            <div>
              <ScrollAnimation delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About CreaDev Design
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Hi, I'm <span className="font-semibold text-brand-purple">Yaser</span>, 
                    the developer behind CreaDev Design. For over 2 years, I've been helping 
                    small businesses and entrepreneurs in Virginia establish their online 
                    presence with custom websites that actually work.
                  </p>
                  <p>
                    No cookie-cutter templates, no bloated code—just clean, fast, professional 
                    websites built specifically for your needs.
                  </p>
                  <p>
                    I combine technical expertise with creative problem-solving to deliver 
                    websites that not only look great but drive real business results.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 space-y-3">
                  {[
                    'Freelance flexibility with agency-level quality',
                    'Based locally in Fairfax, Virginia',
                    'Modern technologies, timeless design',
                    'Transparent pricing, no surprises'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <svg 
                        className="w-6 h-6 text-brand-purple mr-3 mt-1 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Stats Section */}
          <ScrollAnimation delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation delay={0.6}>
            <div className="text-center mt-12">
              <a 
                href="/about"
                className="inline-block px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all hover:shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}