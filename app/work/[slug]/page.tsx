import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import type { Metadata } from 'next';

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
    title: `${project.title} - CreaDev Design`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Visit Live Site
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Project Image Placeholder */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="aspect-video bg-gradient-to-br from-brand-pink via-brand-purple to-brand-pink rounded-2xl flex items-center justify-center">
            <span className="text-8xl">🚀</span>
          </div>
        </div>

        {/* Case Study */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Case Study</h2>
          
          <div className="space-y-8">
            {/* Problem */}
            <div className="p-8 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-pink">The Challenge</h3>
              <p className="text-lg text-gray-700">{project.caseStudy.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-8 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-brand-purple">The Solution</h3>
              <p className="text-lg text-gray-700">{project.caseStudy.solution}</p>
            </div>

            {/* Result */}
            <div className="p-8 border border-gray-200 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="text-2xl font-bold mb-4 text-brand-purple">The Result</h3>
              <p className="text-lg text-gray-700">{project.caseStudy.result}</p>
            </div>
          </div>
        </div>

        {/* Back to Work */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <a 
            href="/work"
            className="inline-block px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all"
          >
            ← Back to All Projects
          </a>
        </div>
      </div>
    </main>
  );
}