'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import { projects, categories } from '@/lib/data/projects';
import Link from 'next/link';

// Map project slugs to their screenshot paths
const projectImages: Record<string, string> = {
  'noosh-grill': '/images/projects/noosh_grill.png',
  'delavilla-productions': '/images/projects/de_la_villa.png',
  'mr-xtractor': '/images/projects/mr_xtractor.png',
  'creadev-design': '/images/projects/creadev_design.png',
};

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600">
              Real sites, real results
            </p>
          </ScrollAnimation>
        </div>

        {/* Filter Buttons */}
        {/* <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 0.1}>
              <div className="h-full">
                <Link href={`/work/${project.slug}`}>
                  <div className="group cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Project Image */}
                      <div className="aspect-video relative bg-gray-100">
                        {projectImages[project.slug] ? (
                          <Image
                            src={projectImages[project.slug]}
                            alt={`${project.title} - ${project.description}`}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          // Fallback gradient for projects without screenshots
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
                    <div className="mt-4 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-purple transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tags - pinned to bottom */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-brand-purple group-hover:text-white transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-16">
            <Link
              href="/work"
              className="inline-block px-8 py-4 border-2 border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-all hover:shadow-lg"
            >
              View All Projects
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}