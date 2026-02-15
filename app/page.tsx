import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import ProjectsGallery from '@/components/sections/ProjectsGallery';

export const metadata: Metadata = {
  title: 'CreaDev Design - Professional Web Development in Fairfax, VA',
  description: 'Expert freelance web developer specializing in custom websites, e-commerce solutions, and modern web applications in Fairfax, Virginia.',
  keywords: [
    'web development Fairfax VA',
    'web developer Virginia',
    'custom website design',
    'freelance web developer Fairfax',
    'small business website developer',
    'Shopify developer Virginia'
  ],
  openGraph: {
    title: 'CreaDev Design - Professional Web Development',
    description: 'Expert web development services in Fairfax, Virginia',
    url: 'https://creadevdesign.com',
    siteName: 'CreaDev Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ProjectsGallery />
    </main>
  );
}