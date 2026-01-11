import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work - CreaDev Design',
  description: 'View our portfolio of custom websites, e-commerce solutions, and web applications.',
  openGraph: {
    title: 'Our Work - CreaDev Design',
    description: 'View our portfolio of custom websites and web applications',
    url: 'https://creadevdesign.com/work',
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Our Work</h1>
        <p className="text-xl text-gray-600 mb-12">
          Recent projects and case studies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: De La Villa Productions */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple h-48"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">De La Villa Productions</h2>
              <p className="text-gray-600 mb-4">
                Video production portfolio with Shopify integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Shopify</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">GSAP</span>
              </div>
            </div>
          </div>

          {/* Project 2: Mr. Xtractor */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-brand-purple to-brand-pink h-48"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Mr. Xtractor Auto Detailing</h2>
              <p className="text-gray-600 mb-4">
                Interactive portfolio with 3D carousels and animations
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Three.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">GSAP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}