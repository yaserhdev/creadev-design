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
    description: 'Tailored websites built from scratch to match your brand and business goals perfectly. No templates — just clean code and thoughtful design.',
    icon: '💻',
    features: [
      'Fully responsive design',
      'Modern tech stack (React, Next.js)',
      'SEO optimized from day one',
      'Lightning-fast loading speeds',
      'Mobile-first approach',
      'Clean, maintainable code'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with Shopify integration and custom functionality. Start selling online with a professional setup that scales with your business.',
    icon: '🛒',
    features: [
      'Seamless Shopify integration',
      'Secure payment processing',
      'Inventory management',
      'Sales analytics dashboard',
      'Mobile shopping optimization',
      'Easy product management'
    ]
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Beautiful websites that work flawlessly on all devices, from mobile phones to desktop monitors. Your customers can access your site anywhere, anytime.',
    icon: '📱',
    features: [
      'Mobile-first approach',
      'Cross-browser compatible',
      'Touch-friendly interfaces',
      'Retina display ready',
      'Tablet optimized',
      'Performance tested on real devices'
    ]
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing support and updates to keep your website secure, fast, and up-to-date. Focus on your business while we handle the technical details.',
    icon: '🔧',
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Content updates as needed',
      'Bug fixes and troubleshooting',
      'Backup management',
      '24-hour response time'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Speed up your existing website for better user experience and higher search rankings. A fast website keeps visitors engaged and converts better.',
    icon: '⚡',
    features: [
      'Load time optimization',
      'Core Web Vitals improvement',
      'Image optimization',
      'Code splitting and minification',
      'Caching strategies',
      'Mobile speed enhancement'
    ]
  },
  {
    id: 'seo',
    title: 'SEO Implementation',
    description: 'Technical SEO setup to help customers find you on Google and other search engines. Get found by the people searching for your services.',
    icon: '🔍',
    features: [
      'On-page SEO optimization',
      'Schema markup implementation',
      'Automatic sitemap generation',
      'Meta tag optimization',
      'Mobile SEO best practices',
      'Local SEO for Virginia businesses'
    ]
  }
];