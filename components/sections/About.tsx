import ScrollAnimation from '@/components/animations/ScrollAnimation';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '0', label: 'Templates Used' },
    { number: '24hr', label: 'Response Time' },
    { number: '5⋆', label: 'Client Rated' },
  ];

  const whyChooseUs = [
    {
      title: 'Freelance Flexibility, Agency-Level Quality',
      description: "Get the personal attention and direct communication of working with a freelancer, combined with the professional standards and reliability you'd expect from an established agency."
    },
    {
      title: 'Based Locally in Fairfax, Virginia',
      description: 'Being local means better communication, faster response times, and a deep understanding of the Northern Virginia business landscape. Need to meet in person? No problem.'
    },
    {
      title: 'Modern Technologies, Timeless Design',
      description: "We build with modern, proven technologies — ensuring your site is fast, secure, and won't look dated in 5 years. The tech choices match your project — whether that's a streamlined single-page site or a full-scale web application."
    },
    {
      title: 'Transparent Pricing, No Surprises',
      description: 'Clear project scopes, detailed estimates, and regular communication mean you always know what you\'re paying for. No hidden fees, no scope creep, no surprises.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <ScrollAnimation>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl p-1">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <Image
                      src="/images/headshot.jpg"
                      alt="Yaser - Founder & Lead Developer at CreaDev Design"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
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
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
                  About CreaDev Design
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold text-brand-purple">Yaser</span> established CreaDev Design in 2025 after years of hands-on experience. Based in Fairfax, Virginia, CreaDev Design has launched several websites to date — from restaurants and video production companies to service businesses across Northern Virginia.
                  </p>
                  <p>
                    Every site is built from scratch. <strong>No templates. No shortcuts.</strong> Just clean code and designs that actually serve the business.
                  </p>
                  <p>
                    With a focus on modern technologies and timeless design, every project is treated as a partnership — because your success is the whole point.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16">
            <ScrollAnimation delay={0.3}>
              <h3 className="text-3xl font-bold mb-8 text-center">
                Why Choose CreaDev Design?
              </h3>
            </ScrollAnimation>

            {/* Grid with equal height cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <ScrollAnimation key={index} delay={0.1 * (index + 4)} className="h-full">
                  <div className="p-6 bg-gray-900 border border-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="flex items-start mb-3">
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
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 ml-9 flex-grow">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Stats Section - Responsive sizing */}
          <ScrollAnimation delay={0.4}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-16 pt-16 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 lg:p-6 rounded-xl bg-gray-900 border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
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