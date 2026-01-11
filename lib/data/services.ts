export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'custom-websites',
    title: 'Custom Website Development',
    description: 'Tailored websites built from scratch to match your brand and business goals perfectly.',
    icon: '💻',
    features: [
      'Responsive design',
      'Modern tech stack',
      'SEO optimized',
      'Fast loading'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with Shopify integration and custom functionality.',
    icon: '🛒',
    features: [
      'Shopify integration',
      'Payment processing',
      'Inventory management',
      'Analytics dashboard'
    ]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Beautiful websites that work flawlessly on all devices, from mobile to desktop.',
    icon: '📱',
    features: [
      'Mobile-first approach',
      'Cross-browser compatible',
      'Touch-friendly',
      'Retina-ready'
    ]
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing support and updates to keep your website secure, fast, and up-to-date.',
    icon: '🔧',
    features: [
      'Security updates',
      'Performance monitoring',
      'Content updates',
      'Bug fixes'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Speed up your existing website for better user experience and search rankings.',
    icon: '⚡',
    features: [
      'Load time optimization',
      'Core Web Vitals',
      'Image optimization',
      'Code splitting'
    ]
  },
  {
    id: 'seo',
    title: 'SEO Implementation',
    description: 'Technical SEO setup to help customers find you on Google and other search engines.',
    icon: '🔍',
    features: [
      'On-page SEO',
      'Schema markup',
      'Sitemap generation',
      'Meta optimization'
    ]
  }
];