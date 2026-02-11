import ContactForm from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ready to start your project? Let's talk.
        </p>
        
        <ContactForm />
      </div>
    </main>
  );
}