export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  problem: string;
  solution: string;
  results: string;
  challenges: string[];
  technologies: string[];
  deliverables: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const categories = [
  'All',
  'E-commerce',
  'Business',
  'Restaurant',
  'Video Production'
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'noosh-grill',
    title: 'Noosh Grill Restaurant',
    category: 'Restaurant',
    description: 'A modern restaurant website with interactive menu system and 3D CSS carousel',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', '3D CSS', 'Responsive Design'],
    image: '/images/projects/noosh_grill.png',
    problem: 'Noosh Grill, a new halal restaurant in Fairfax, VA, needed a modern digital presence to match their elevated take on classic comfort food. The challenge was creating an engaging website that would showcase their unique menu offerings—from NY-style chicken over rice to smash burgers—while making online ordering seamless for their customers. The restaurant had just opened and lacked any online presence, making it difficult for potential customers to discover their location, view the menu, or place orders.',
    solution: 'We built a custom, single-page website with a striking green and red color scheme that reflects Noosh Grill\'s fresh, bold brand identity. The site features an interactive, categorized menu system with detailed item descriptions, a pure CSS 3D carousel showcasing customer reviews, and prominent call-to-action buttons linking to their Toast ordering platform. We integrated responsive design ensuring the menu is easily browsable on mobile devices, implemented a live "Open Now/Closed" status indicator, and included a contact form with Formspree integration for customer inquiries.',
    results: 'The website launched successfully and has become a central hub for customer engagement. The interactive menu system allows customers to explore offerings before visiting, while the prominent ordering CTAs drive online orders through Toast. The 3D review carousel effectively showcases 5-star customer testimonials, building trust with new visitors. The responsive design ensures an optimal experience across all devices, particularly important for on-the-go customers looking to place quick orders. The site\'s clean navigation and fast load times contribute to a professional online presence that matches the quality of their food.',
    challenges: [
      'Creating an intuitive menu navigation system that handles multiple categories (Subs, Bowls, Smashburgers) with varying item structures',
      'Implementing a pure CSS 3D carousel for reviews that works smoothly across devices without JavaScript dependencies',
      'Designing a responsive menu layout that maintains readability and visual hierarchy on mobile devices',
      'Integrating third-party ordering system (Toast) seamlessly while maintaining brand consistency',
      'Optimizing site performance while including custom fonts and high-quality food imagery'
    ],
    technologies: [
      'HTML5 - Semantic markup with proper document structure',
      'Tailwind CSS v4 - Utility-first CSS framework via CDN',
      'Vanilla JavaScript - Menu interactions, carousel auto-rotation, form handling',
      'Custom CSS - Extensive custom styling for 3D transforms and animations',
      'Font Awesome - Icon library for navigation and UI elements',
      'Formspree - Contact form backend integration',
      'Google Fonts - Anonymous Pro and custom Tanker font',
      'CSS 3D Transforms - perspective, rotateY, translateZ for carousel'
    ],
    deliverables: [
      'Fully responsive single-page website',
      'Interactive categorized menu with item modals',
      'Pure CSS 3D review carousel with auto-rotation',
      'Real-time open/closed status indicator',
      'Contact form with email integration',
      'SEO optimization with schema.org markup',
      'Mobile-optimized menu navigation',
      'Integration with Toast ordering platform'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'Noosh Grill',
      position: 'Restaurant Owner'
    }
  },
  {
    id: 2,
    slug: 'delavilla-productions',
    title: 'De La Villa Productions',
    category: 'Video Production',
    description: 'Video production company website with Shopify e-commerce integration',
    tags: ['HTML5', 'Bulma CSS', 'SCSS', 'JavaScript', 'Shopify API', 'Video'],
    image: '/images/projects/de_la_villa.png',
    problem: 'De La Villa Productions, a DMV-based video production company specializing in basketball documentaries, needed a professional website that could showcase their film portfolio while also selling branded merchandise. They had built a strong following through their "Run It Back" documentary series but lacked a centralized platform to display their work and monetize their brand. The challenge was creating a site that balanced their creative storytelling identity with e-commerce functionality, all while maintaining fast load times despite video-heavy content.',
    solution: 'We developed a multi-page website with a bold, cinematic aesthetic featuring a full-screen video background on the homepage. The site integrates Shopify\'s Storefront API for a custom e-commerce experience, allowing them to sell merchandise without redirecting to an external store. We implemented a "limited drop" mode feature that enables timed product releases, creating urgency for exclusive merchandise. The Films gallery showcases their documentary work with embedded video players, while the About page tells their origin story with founder profiles. We used Bulma CSS as the foundation with extensive SCSS customization to achieve their unique visual style.',
    results: 'De La Villa Productions now has a professional digital hub that effectively showcases their video work while driving merchandise sales. The custom Shopify integration provides a seamless shopping experience with a custom cart system, timed product drops, and secure checkout—all within their branded environment. The video-heavy homepage makes an immediate impact, with a mute/unmute toggle that enhances user experience. The site successfully balances storytelling and commerce, with the shop section revealing itself at the perfect moment in the homepage video. The responsive design ensures their content looks great whether viewed on a phone at a basketball game or on a desktop while browsing their film catalog.',
    challenges: [
      'Integrating Shopify Storefront API with custom cart system and checkout flow',
      'Implementing timed "drop" functionality for limited merchandise releases',
      'Optimizing video delivery for fast page loads while maintaining quality',
      'Creating a custom e-commerce UI that matches their brand aesthetic',
      'Building a responsive gallery system for video content with multiple categories',
      'Handling large video files efficiently across different devices and connection speeds'
    ],
    technologies: [
      'HTML5 - Multi-page semantic structure',
      'Bulma CSS - CSS framework with custom configuration',
      'SCSS/Sass - Extensive custom styling and component architecture',
      'Vanilla JavaScript - Navigation, video controls, form handling, shop logic',
      'Shopify Storefront API - GraphQL-based e-commerce integration',
      'Custom Cart Manager - LocalStorage-based cart with version control',
      'Formspree - Contact form backend',
      'Font Awesome - Icons and social media links',
      'Custom Fonts - Helvetica via @font-face'
    ],
    deliverables: [
      'Multi-page responsive website with video background',
      'Custom Shopify Storefront API integration',
      'Timed product drop system with countdown',
      'Custom shopping cart with LocalStorage persistence',
      'Video gallery with category filtering',
      'About page with founder profiles',
      'Contact form with social media integration',
      'Mobile-optimized video delivery',
      'SEO optimization and sitemap'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'De La Villa Productions',
      position: 'Co-Founders'
    }
  },
  {
    id: 3,
    slug: 'mr-xtractor',
    title: 'Mr. Xtractor Auto Detailing',
    category: 'Business',
    description: 'Mobile auto detailing service website with 3D carousel and premium animations',
    tags: ['HTML5', 'Bulma CSS', 'SCSS', 'JavaScript', 'GSAP 3', '3D CSS'],
    image: '/images/projects/mr_xtractor.png',
    problem: 'Mr. Xtractor Auto Detailing, a premium mobile detailing service in Northern Virginia, needed a website that reflected the high-end, meticulous nature of their work. As a mobile-only service without a physical storefront, their website needed to serve as their primary marketing tool and booking platform. The challenge was conveying professionalism and attention to detail through design while making it easy for potential customers to understand services, view pricing, read testimonials, and book appointments. They also needed strong local SEO to appear in searches for auto detailing services in the Alexandria and Northern VA area.',
    solution: 'We created a striking, modern website with a bold red and black color scheme featuring angular geometric shapes that mirror the precision of their detailing work. The site features a custom 3D CSS carousel showcasing customer reviews with touch/swipe support, creating an engaging, premium feel. We implemented smooth scroll animations using both GSAP and custom JavaScript for service cards that fade in as users scroll. The services section uses staggered animations via Intersection Observer to draw attention to each offering. A prominent "Book Now" CTA is strategically placed throughout the site, making it easy for users to initiate bookings. We optimized for local SEO with geo tags, schema.org markup, and location-specific keywords.',
    results: 'The website successfully positions Mr. Xtractor as a premium auto detailing service, with the bold design and smooth animations reflecting their attention to detail. The 3D review carousel effectively showcases their 5-star ratings and customer testimonials, building immediate trust with new visitors. The staggered service card animations create visual interest and guide users through their offerings. The prominent CTAs and clear service descriptions have streamlined the booking process. The site\'s strong local SEO implementation helps them rank well for "auto detailing Alexandria VA" and related searches. The responsive design ensures the site looks polished on all devices, from desktop to mobile.',
    challenges: [
      'Creating a 3D CSS carousel that works smoothly with touch gestures on mobile devices',
      'Implementing GSAP animations while maintaining 60fps performance',
      'Designing a booking flow that guides users without requiring a complex backend',
      'Optimizing for local SEO with proper geo tags and schema markup',
      'Creating visual interest without overwhelming users with animations',
      'Balancing bold design elements with readability and usability',
      'Implementing custom smooth scroll with variable speeds for different elements'
    ],
    technologies: [
      'HTML5 - Semantic single-page structure with extensive SEO markup',
      'Bulma CSS - Custom SCSS configuration with Sass modules',
      'SCSS/Sass - 1400+ lines of custom styling and animations',
      'Vanilla JavaScript - 868 lines for carousel, scroll, and interactions',
      'GSAP 3.13 - Animation library for smooth transitions',
      'CSS 3D Transforms - perspective, rotateY, translateZ for carousel',
      'Intersection Observer API - Service card reveal animations',
      'Custom Smooth Scroll - requestAnimationFrame-based with easing',
      'Font Awesome - Icons and UI elements',
      'Google Fonts - Inter + Poppins typography pairing'
    ],
    deliverables: [
      'Single-page responsive website with premium design',
      '3D CSS carousel with touch/swipe support',
      'Staggered service card animations',
      'Custom smooth scroll with variable speeds',
      'Mobile-optimized navigation',
      'Local SEO optimization with schema.org markup',
      'Gallery section with before/after photos',
      'About section with service area map',
      'Contact section with booking CTA',
      'Performance optimization for fast load times'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'Mr. Xtractor Auto Detailing',
      position: 'Owner'
    }
  }
];