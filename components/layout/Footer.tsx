import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-black mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold block mb-4">
              <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                CreaDev Design
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Professional web development services in Fairfax, Virginia. 
              Custom websites, e-commerce solutions, and modern web applications.
            </p>
            <p className="text-sm text-gray-500">
              Based in Fairfax, VA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-purple transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Custom Website Development</li>
              <li>E-commerce Solutions</li>
              <li>Responsive Design</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} CreaDev Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}