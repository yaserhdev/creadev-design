import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - CreaDev Design',
  description: 'Learn about CreaDev Design and our approach to professional web development in Fairfax, Virginia.',
  openGraph: {
    title: 'About - CreaDev Design',
    description: 'Learn about our approach to professional web development',
    url: 'https://creadevdesign.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">About CreaDev Design</h1>
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Hi, I'm Yaser, the developer behind CreaDev Design. For over 2 years, 
            I've been helping small businesses and entrepreneurs in Virginia establish 
            their online presence with custom websites that actually work.
          </p>
          <p className="text-lg mb-6">
            No cookie-cutter templates, no bloated code—just clean, fast, professional 
            websites built specifically for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">2+ Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Fairfax, VA</h3>
              <p className="text-gray-600">Based Locally</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}