import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import Image from 'next/image';

const projectImages: Record<string, string> = {
  'noosh-grill': '/images/projects/noosh_grill.png',
  'delavilla-productions': '/images/projects/de_la_villa.png',
  'mr-xtractor': '/images/projects/mr_xtractor.png',
  'creadev-design': '/images/projects/creadev_design.png',
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - CreaDev Design Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - CreaDev Design`,
      description: project.description,
      url: `https://creadevdesign.com/work/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              {/* Back Link */}
              <Link 
                href="/work"
                className="inline-flex items-center text-brand-purple hover:text-brand-pink transition-colors mb-6"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">{project.title}</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit Site Button */}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Visit Live Site
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation delay={0.2}>
            <div className="max-w-6xl mx-auto">
              {projectImages[project.slug] ? (
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={projectImages[project.slug]}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-brand-pink via-brand-purple to-brand-pink rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">🚀</span>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview Stats */}
      {project.deliverables && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollAnimation delay={0.1}>
                  <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                      {project.categories.join(' / ')}
                    </div>
                    <div className="text-gray-300">Project Type</div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg">
                    <div className="text-4xl mb-2">⚡</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                      {project.tags.length}
                    </div>
                    <div className="text-gray-300">Technologies Used</div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <div className="text-center p-8 bg-gray-900 rounded-xl border border-white/10 shadow-lg">
                    <div className="text-4xl mb-2">📦</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2">
                      {project.deliverables.length}
                    </div>
                    <div className="text-gray-300">Deliverables</div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Study Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Case Study</h2>
            </ScrollAnimation>
            
            <div className="space-y-12">
              {/* The Challenge */}
              <ScrollAnimation delay={0.1}>
                <div className="p-8 border-l-4 border-brand-pink bg-gray-900 rounded-r-xl">
                  <h3 className="text-2xl font-bold mb-4 text-brand-pink flex items-center">
                    <span className="text-3xl mr-3">💡</span>
                    The Challenge
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
              </ScrollAnimation>

              {/* Key Challenges */}
              {project.challenges && (
                <ScrollAnimation delay={0.2}>
                  <div className="p-8 bg-gray-900 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-gray-100">Key Challenges</h4>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-brand-purple mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              )}

              {/* The Solution */}
              <ScrollAnimation delay={0.3}>
                <div className="p-8 border-l-4 border-brand-purple bg-gray-900 rounded-r-xl">
                  <h3 className="text-2xl font-bold mb-4 text-brand-purple flex items-center">
                    <span className="text-3xl mr-3">🎨</span>
                    The Solution
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </ScrollAnimation>

              {/* Technologies Used */}
              {project.technologies && (
                <ScrollAnimation delay={0.4}>
                  <div className="p-8 bg-gray-900 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-gray-100">Technologies & Approach</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              )}

              {/* The Result */}
              <ScrollAnimation delay={0.5}>
                <div className="p-8 bg-gray-900 border-l-4 border-green-500 rounded-r-xl">
                  <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                    <span className="text-3xl mr-3">🚀</span>
                    The Result
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{project.results}</p>
                </div>
              </ScrollAnimation>

              {/* Deliverables */}
              {project.deliverables && (
                <ScrollAnimation delay={0.6}>
                  <div className="p-8 bg-gray-900 border border-white/10 rounded-xl">
                    <h4 className="text-xl font-bold mb-6 text-gray-100">Project Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                          <svg className="w-5 h-5 text-brand-purple mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <ScrollAnimation delay={0.7}>
                  <div className="p-8 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-xl shadow-xl">
                    <div className="text-6xl mb-4 opacity-50">"</div>
                    <blockquote className="text-xl italic mb-6 leading-relaxed">
                      {project.testimonial.text}
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl mr-4">
                        👤
                      </div>
                      <div>
                        <div className="font-bold">{project.testimonial.author}</div>
                        <div className="text-white/80 text-sm">{project.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can create a custom solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/work"
                  className="px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
                >
                  View More Projects
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}