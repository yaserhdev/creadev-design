import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { projects, categories } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Our Work - CreaDev Design Portfolio',
  description: 'Explore our portfolio of custom websites, e-commerce solutions, and digital experiences built for businesses across Virginia.',
  openGraph: {
    title: 'Our Work - CreaDev Design Portfolio',
    description: 'Explore our portfolio of custom websites, e-commerce solutions, and digital experiences.',
    url: 'https://creadevdesign.com/work',
  },
};

// Map project slugs to their screenshot paths
const projectImages: Record<string, string> = {
  'noosh-grill': '/images/projects/noosh_grill.png',
  'delavilla-productions': '/images/projects/de_la_villa.png',
  'mr-xtractor': '/images/projects/mr_xtractor.png',
  'creadev-design': '/images/projects/creadev_design.png',
};

// Get unique technologies across all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.tags))
).sort();

export default function WorkPage() {
  // Featured project (first one or most recent)
  const featuredProject = projects[0];
  
  // Portfolio stats
  const totalProjects = projects.length;
  const totalTechnologies = allTechnologies.length;
  const industriesServed = Array.from(new Set(projects.map(p => p.category))).length;

  return (
    <main className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                Our Work
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Custom websites and digital experiences that drive results for businesses across Virginia
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="p-4 bg-gray-900 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                    {totalProjects}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Projects</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                    {industriesServed}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Industries</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                    {totalTechnologies}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Technologies</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-100">Featured Project</h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-brand-purple transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative aspect-video md:aspect-auto">
                    {projectImages[featuredProject.slug] ? (
                      <Image
                        src={projectImages[featuredProject.slug]}
                        alt={`${featuredProject.title} - Featured Project`}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-pink via-brand-purple to-brand-pink opacity-80 flex items-center justify-center">
                        <span className="text-8xl">🚀</span>
                      </div>
                    )}
                  </div>

                  {/* Featured Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full text-sm font-semibold mb-4 w-fit">
                      Featured
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 mb-6">
                      {featuredProject.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-white/20">
                        {featuredProject.category}
                      </span>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-200 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.tags.slice(0, 5).map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {featuredProject.tags.length > 5 && (
                          <span className="px-3 py-1 text-gray-400 text-sm">
                            +{featuredProject.tags.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-4">
                      <Link 
                        href={`/work/${featuredProject.slug}`}
                        className="px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:scale-105"
                      >
                        View Case Study
                      </Link>
                      {featuredProject.link && (
                        <a 
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
                        >
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">All Projects</h2>
              <p className="text-gray-300 text-center mb-12">Explore our complete portfolio</p>
            </ScrollAnimation>

            {/* Projects Grid - 2 columns for more detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[...projects].sort((a, b) => a.title.localeCompare(b.title)).map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 0.1}>
                  <div className="h-full">
                    <Link href={`/work/${project.slug}`}>
                      <div className="group cursor-pointer h-full flex flex-col bg-gray-900 border border-white/10 rounded-xl hover:shadow-2xl hover:border-brand-purple hover:bg-gray-800 transition-all duration-300">
                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-t-xl">
                          <div className="aspect-video relative bg-gray-800">
                            {projectImages[project.slug] ? (
                              <Image
                                src={projectImages[project.slug]}
                                alt={`${project.title} - ${project.description}`}
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-brand-pink via-brand-purple to-brand-pink opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-6xl">🚀</span>
                              </div>
                            )}
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-sm mb-2">View Case Study →</p>
                            </div>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex-grow flex flex-col">
                          {/* Category Badge */}
                          <div className="mb-3">
                            <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-sm rounded-full font-medium border border-brand-purple/30">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-100 group-hover:text-brand-purple transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4 flex-grow text-lg leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-200 mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-white/10 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* View Case Study Link */}
                          <div className="mt-auto pt-4 border-t border-white/10">
                            <span className="text-brand-purple font-semibold group-hover:text-brand-pink transition-colors inline-flex items-center">
                              View Full Case Study
                              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your vision to life? Let's discuss your project and create a custom solution that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
                >
                  View Services
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}