import ContactForm from '@/components/sections/ContactForm';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent pb-2">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Ready to start your project? Let's talk.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}