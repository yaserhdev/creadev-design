import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About - CreaDev Design',
  description: 'Learn about CreaDev Design and our approach to professional web development in Fairfax, Virginia.',
  openGraph: {
    title: 'About - CreaDev Design',
    description: 'Learn about our approach to professional web development',
    url: 'https://creadevdesign.com/about',
  },
};

// Technologies organized by category
const technologies = {
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'SCSS', 'HTML5', 'JavaScript', 'TypeScript'],
  'Animation': ['GSAP', 'Framer Motion', 'CSS Animations', '3D Transforms'],
  'Backend': ['Node.js', 'API Integration', 'Shopify API', 'GraphQL'],
  'Tools': ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code'],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-1 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                About CreaDev Design
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Professional web development built on quality, transparency, and results
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Professional Headshot */}
                  <Image
                    src="/images/headshot.jpg"
                    alt="Yaser - CreaDev Design Owner"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -z-10 blur-xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full -z-10 blur-xl"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-100">Hi, I'm Yaser</h2>
                  <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                    <p>
                      I'm the developer behind CreaDev Design, and for over 2 years, I've been helping small businesses and entrepreneurs across Virginia establish their online presence with custom websites that actually work.
                    </p>
                    <p>
                      What started as a passion for building things on the web has evolved into a full-service freelance business. I've worked with restaurants, video production companies, mobile service providers, and more—each with unique needs and goals.
                    </p>
                    <p>
                      My approach is simple: no cookie-cutter templates, no bloated code, no hidden fees. Just clean, fast, professional websites built specifically for your business, with clear communication every step of the way.
                    </p>
                    <p>
                      Based in Fairfax, Virginia, I work with clients throughout the DMV area and beyond, bringing technical expertise and creative solutions to every project.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-100">By the Numbers</h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg hover:bg-gray-800 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    3+
                  </div>
                  <div className="text-gray-300 font-medium">Years Experience</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg hover:bg-gray-800 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    4
                  </div>
                  <div className="text-gray-300 font-medium">Projects Delivered</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg hover:bg-gray-800 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-300 font-medium">Client Satisfaction</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg hover:bg-gray-800 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                    3
                  </div>
                  <div className="text-gray-300 font-medium">Industries Served</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-100">My Approach</h2>
              <p className="text-xl text-gray-300 text-center mb-12">What makes CreaDev Design different</p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Quality Over Quantity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I focus on delivering exceptional work for each client rather than juggling dozens of projects. Your website gets my full attention and expertise.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Clear Communication</h3>
                  <p className="text-gray-300 leading-relaxed">
                    No technical jargon unless you want it. I explain everything in plain English and keep you updated throughout the entire development process.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Performance First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every website I build is optimized for speed, accessibility, and SEO from day one. Fast load times and smooth animations are standard, not extras.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Custom Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    No templates, no shortcuts. Every project is built from scratch to match your brand, goals, and unique requirements.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Transparent Pricing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Straightforward hourly rate with no hidden fees. You'll know exactly what you're paying for before we start.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <div className="p-8 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-purple hover:bg-gray-800 transition-all">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">Long-term Partnership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm here for ongoing support and updates, not just the initial launch. Your success is my success.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-100">Technologies I Use</h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                Modern, proven tools for building fast, reliable websites
              </p>
            </ScrollAnimation>

            <div className="space-y-8">
              {Object.entries(technologies).map(([category, techs], categoryIndex) => (
                <ScrollAnimation key={category} delay={categoryIndex * 0.1}>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-purple">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-2 bg-gray-900 text-gray-200 rounded-lg border border-white/10 hover:bg-gray-800 hover:border-brand-purple transition-all font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0.5}>
              <div className="mt-12 p-8 bg-gray-900 rounded-xl border border-white/10">
                <p className="text-center text-gray-300 leading-relaxed">
                  <strong className="text-brand-purple">Specialties:</strong> Tailwind CSS for rapid, responsive design • GSAP for buttery-smooth animations • Next.js for performance • Shopify API integration for e-commerce
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to elevate your online presence? Let's discuss your project and create something exceptional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/work"
                  className="px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
                >
                  View My Work
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}