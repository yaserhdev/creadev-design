import type { Metadata } from 'next';

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
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-4">
          CreaDev Design
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional Web Development in Fairfax, VA
        </p>
        <div className="flex gap-4">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </a>
          <a 
            href="/work" 
            className="px-6 py-3 border border-brand-purple text-brand-purple rounded-lg font-semibold hover:bg-brand-purple hover:text-white transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </main>
  );
}