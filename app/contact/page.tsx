import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - CreaDev Design',
  description: 'Get in touch for a free consultation. Fast response within 24 hours.',
  openGraph: {
    title: 'Contact - CreaDev Design',
    description: 'Get in touch for a free consultation',
    url: 'https://creadevdesign.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ready to start your project? Let's talk.
        </p>
        
        <div className="max-w-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Me</h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@creadevdesign.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> Fairfax, Virginia
            </p>
            <p className="text-gray-600">
              <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}