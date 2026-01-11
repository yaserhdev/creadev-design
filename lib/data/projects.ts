export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: 'delavilla',
    title: 'De La Villa Productions',
    slug: 'delavilla-productions',
    description: 'Video production portfolio with Shopify integration and cinematic design',
    image: '/images/projects/delavilla.jpg', // We'll add placeholder
    category: 'E-commerce',
    tags: ['Next.js', 'Shopify', 'GSAP', 'E-commerce'],
    link: 'https://delavillaproductions.com',
    caseStudy: {
      problem: 'Video production company needed modern portfolio site with e-commerce capabilities',
      solution: 'Cinematic design with video backgrounds, Shopify integration for merchandise sales',
      result: 'Professional showcase driving client inquiries and merchandise revenue'
    }
  },
  {
    id: 'mrxtractor',
    title: 'Mr. Xtractor Auto Detailing',
    slug: 'mr-xtractor',
    description: 'Interactive portfolio with 3D carousels and physics-based animations',
    image: '/images/projects/mrxtractor.jpg', // We'll add placeholder
    category: 'Business Website',
    tags: ['React', 'Three.js', 'GSAP', 'Animations'],
    link: 'https://mrxtractor.com',
    caseStudy: {
      problem: 'Local auto detailing business needed engaging online presence',
      solution: '3D physics-based review carousel, infinite gallery with GSAP animations',
      result: 'Memorable user experience that converts visitors into customers'
    }
  },
  {
    id: 'noosh-grill',
    title: 'Noosh Grill Restaurant',
    slug: 'noosh-grill',
    description: 'Restaurant website with 3D rotating review carousel and interactive menu',
    image: '/images/projects/noosh.jpg', // We'll add placeholder
    category: 'Business Website',
    tags: ['React', 'Three.js', 'Interactive Menu'],
    caseStudy: {
      problem: 'Restaurant needed modern website to showcase menu and customer reviews',
      solution: '3D rotating review carousel and interactive digital menu system',
      result: 'Enhanced customer engagement and increased online orders'
    }
  }
];

export const categories = ['All', 'E-commerce', 'Business Website', 'Landing Page'];