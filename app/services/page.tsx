import type { Metadata } from 'next';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { services } from '@/lib/data/services';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development Services - CreaDev Design',
  description: 'Professional web development services in Fairfax, VA. Custom websites, e-commerce solutions, responsive design, maintenance, performance optimization, and SEO implementation.',
  keywords: [
    'web development services Fairfax VA',
    'custom website development Virginia',
    'e-commerce solutions',
    'website maintenance',
    'SEO services Fairfax',
    'responsive web design'
  ],
  openGraph: {
    title: 'Web Development Services - CreaDev Design',
    description: 'Comprehensive web development solutions tailored to your business needs',
    url: 'https://creadevdesign.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive web development solutions tailored to your business needs
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From custom websites to e-commerce platforms, we provide end-to-end 
                web development services that help your business succeed online.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} delay={index * 0.1}>
                <div className="group p-8 border border-white/10 rounded-xl hover:shadow-2xl hover:border-brand-purple hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-brand-purple transition-colors">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
                Why Choose CreaDev Design?
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Tailored Solutions</h3>
                  <p className="text-gray-300">
                    No cookie-cutter templates. Every project is custom-built to match 
                    your unique brand and business goals.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Performance First</h3>
                  <p className="text-gray-300">
                    Fast-loading websites optimized for Core Web Vitals and top search 
                    engine rankings.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Mobile-First Design</h3>
                  <p className="text-gray-300">
                    Beautiful, responsive websites that work flawlessly on all devices 
                    from mobile to desktop.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Local & Reliable</h3>
                  <p className="text-gray-300">
                    Based in Fairfax, Virginia with 24-hour response time and ongoing 
                    support for your peace of mind.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
                Our Process
              </h2>
            </ScrollAnimation>

            <div className="space-y-8">
              <ScrollAnimation delay={0.1}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-100">Discovery & Planning</h3>
                    <p className="text-gray-300">
                      We start by understanding your business, goals, and target audience. 
                      Then we create a detailed project plan and timeline.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-100">Design & Development</h3>
                    <p className="text-gray-300">
                      Our team designs and builds your website using modern technologies 
                      and best practices, with regular check-ins for your feedback.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-100">Testing & Refinement</h3>
                    <p className="text-gray-300">
                      Rigorous testing across devices and browsers ensures everything works 
                      perfectly before launch.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-100">Launch & Support</h3>
                    <p className="text-gray-300">
                      We handle the technical launch details and provide ongoing support 
                      to keep your site running smoothly.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-pink to-brand-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help your business succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-brand-purple rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  href="/work"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}