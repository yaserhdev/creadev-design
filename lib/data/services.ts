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
    description: 'Your website, built from scratch. No templates, no compromises — just clean code designed around your brand and goals.',
    icon: '💻',
    features: [
      'Fully responsive design',
      'Modern tech stacks',
      'SEO optimized from day one',
      'Lightning-fast loading speeds',
      'Mobile-first approach',
      'Clean, maintainable code'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Ready to sell online? We build custom storefronts tailored to how your business actually operates — from standalone shops to full POS integration.',
    icon: '🛒',
    features: [
      'Custom or platform-based (Shopify, WooCommerce, etc.)',
      'Secure payment processing',
      'Inventory & order management',
      'In-store POS integration available',
      'Mobile optimized checkout',
      'Built to scale with your business'
    ]
  },
  {
    id: 'website-redesigns',
    title: 'Website Redesigns',
    description: "Already have a site that's not cutting it? We'll rebuild it from the ground up — faster, sharper, and designed to actually convert.",
    icon: '✨',
    features: [
      'Modern design refresh',
      'Improved site structure',
      'Content migration included',
      'SEO preserved during transition',
      'Performance upgrades built-in',
      'Same URL, new everything'
    ]
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Launch it and forget it? Not quite. We keep your site secure, updated, and running smoothly so you can focus on your business.',
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
    description: "Slow sites lose customers. We'll tune up your existing website for faster load times, better rankings, and happier visitors.",
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
    description: 'Get found on Google. Technical SEO setup that helps the right customers discover your business — including local Virginia searches.',
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