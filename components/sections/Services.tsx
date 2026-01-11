import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { services } from '@/lib/data/services';

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 0.1}>
              <div className="group p-8 border border-gray-200 rounded-xl hover:shadow-2xl hover:border-brand-purple transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-16">
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}