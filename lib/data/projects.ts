export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
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
    description: 'Custom single-page site for a Fairfax halal restaurant with an interactive 3-column menu, 3D review carousel, and real-time open/closed indicator.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'CSS 3D Transforms', 'Formspree'],
    image: '/images/projects/noosh_grill.png',
    link: 'https://eatnoosh.com',
    problem: 'Noosh Grill, a new halal restaurant in Fairfax, needed a digital presence that matched their elevated take on classic comfort food. With no existing website, potential customers had no way to discover the menu, check hours, or place orders online. The site needed to showcase their unique offerings—from NY-style chicken over rice to smash burgers—while driving traffic to their Toast ordering platform.',
    solution: 'A custom single-page website built around the restaurant\'s bold green-and-red brand identity. The centerpiece is an interactive 3-column menu with clickable items and detailed descriptions. A pure CSS 3D carousel showcases 10 customer reviews with auto-rotation and manual controls. A real-time open/closed status indicator updates based on business hours, and prominent CTAs throughout drive online orders via Toast.',
    results: 'The site launched successfully and serves as the restaurant\'s primary marketing hub. The interactive menu lets customers explore offerings before visiting, the review carousel builds trust with new visitors, and the responsive design ensures a smooth experience on phones—where most customers place orders. The clean codebase and strong local SEO help Noosh rank for searches like "halal food Fairfax VA."',
    challenges: [
      'Creating an intuitive menu navigation system for 20+ items',
      'Building a performant 3D carousel without JavaScript frameworks',
      'Implementing real-time business hours logic with holiday handling',
      'Optimizing food photography for fast mobile load times'
    ],
    technologies: [
      'HTML5 with semantic markup and Restaurant schema.org',
      'Tailwind CSS 4 via CDN for utility-first styling',
      'Vanilla JavaScript for carousel, modals, and status indicator',
      'CSS 3D Transforms (perspective, rotateY, translateZ)',
      'Formspree for contact form backend',
      'Font Awesome for icons',
      'Google Fonts (Anonymous Pro) + custom Tanker font'
    ],
    deliverables: [
      'Responsive single-page website (mobile-first)',
      'Fixed navigation with mobile hamburger drawer',
      'Interactive 3-column menu with item modals',
      'Pure CSS 3D review carousel (10 reviews, auto-rotation)',
      'Real-time open/closed status indicator',
      'Contact form with Formspree integration',
      'Toast ordering integration throughout',
      'SEO implementation (schema.org, meta tags, sitemap)'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'Owner',
      position: 'Noosh Grill'
    }
  },
  {
    id: 2,
    slug: 'delavilla-productions',
    title: 'De La Villa Productions',
    category: 'Video Production',
    description: 'Multi-page site for a DMV sports media company featuring cinematic video backgrounds, tabbed YouTube gallery, and full Shopify e-commerce integration with cart, variants, and limited-drop countdown system.',
    tags: ['HTML5', 'Bulma CSS', 'SCSS', 'JavaScript', 'Shopify Storefront API', 'Formspree'],
    image: '/images/projects/de_la_villa.png',
    link: 'https://delavillaproductions.com',
    problem: 'De La Villa Productions—a sports media company covering DMV basketball—needed a website that matched the energy of their documentary content. They required a video-forward homepage, an organized gallery for their growing library of series, and a fully functional shop for merchandise drops with time-limited availability.',
    solution: 'A five-page site built on Bulma CSS with custom SCSS. The homepage features an auto-scaling cinematic video background with a timed CTA reveal. A tabbed gallery organizes content across four documentary series (Mixtape Tour, Mini Docs, City Is Mine, Run It Back). The shop integrates directly with Shopify\'s Storefront API—complete with cart management, variant selection (color/size), stock warnings, and a configurable limited-drop countdown system.',
    results: 'A cohesive brand experience that transitions visitors from cinematic storytelling to merchandise conversion. The shop\'s limited-drop system creates urgency for merch releases, while the tabbed gallery makes their expanding content library easily navigable. The hands-free management bundle keeps the site and Shopify store in sync with minimal client effort.',
    challenges: [
      'Implementing auto-scaling video that works across all devices',
      'Building a full e-commerce flow with Shopify Storefront API (GraphQL)',
      'Creating a cart system with localStorage persistence and stock validation',
      'Designing a limited-drop countdown that toggles shop availability'
    ],
    technologies: [
      'HTML5 with semantic markup',
      'Bulma CSS 1.0.4 via npm with Sass compilation',
      'SCSS for custom theming',
      'Vanilla JavaScript (ES6+ modules)',
      'Shopify Storefront API (GraphQL)',
      'Formspree for contact form submissions',
      'Font Awesome 6.4',
      'Netlify hosting with caching headers'
    ],
    deliverables: [
      '5 responsive pages (Home, About, Gallery, Shop, Contact)',
      'Cinematic video background with mobile optimization',
      'Tabbed video gallery with 4 categories',
      'Full Shopify e-commerce integration (cart, checkout, variants)',
      'Color and size variant selectors with stock awareness',
      'Limited-drop countdown system (configurable)',
      'Out-of-stock overlay automation',
      'FormSpree contact form with success modal',
      'Social media integration (Instagram, X, YouTube, TikTok)',
      'Automatic inventory refresh system'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'Muhammad Darab',
      position: 'Co-Founder, De La Villa Productions'
    }
  },
  {
    id: 3,
    slug: 'mr-xtractor',
    title: 'Mr. Xtractor Auto Detailing',
    category: 'Business',
    description: 'Custom single-page site for a Northern VA mobile detailing business featuring dual 3D carousels, stacked before/after gallery, and OrbisX scheduling integration.',
    tags: ['HTML5', 'Bulma CSS', 'SCSS', 'JavaScript', 'GSAP 3.x', 'OrbisX'],
    image: '/images/projects/mr_xtractor.png',
    link: 'https://mrxtractorautodetailing.com',
    problem: 'Mr. Xtractor Auto Detailing needed a professional web presence to establish credibility in the competitive Northern Virginia mobile detailing market. As a mobile service, they needed to clearly communicate service areas and pricing tiers while making booking frictionless. The site also needed to showcase their work quality through compelling before/after imagery.',
    solution: 'A bold single-page website built around their red-and-black brand identity. Two custom 3D CSS carousels—one rotating customer reviews, another showcasing before/after image pairs in a unique stacked layout. Six detailed service packages with clear pricing breakdowns. An embedded OrbisX booking system eliminates friction, while a floating call button (visible during business hours only) provides instant contact.',
    results: 'The site serves as both a booking hub and credibility builder. The review carousel surfaces social proof immediately, the gallery demonstrates work quality across vehicle types, and integrated scheduling converts visitors directly into appointments. The responsive mobile-first design matches how most customers discover and book detailing services.',
    challenges: [
      'Building two distinct 3D carousels with different interaction patterns',
      'Creating a stacked before/after image display that works on all screen sizes',
      'Implementing time-based UI elements (call button visibility)',
      'Optimizing 28 high-resolution images for fast gallery performance'
    ],
    technologies: [
      'HTML5 with semantic markup and AutoRepair schema.org',
      'Bulma CSS 1.0.4 via npm with custom Sass compilation',
      'SCSS for custom theming and advanced styling (900+ lines)',
      'Vanilla JavaScript for carousels, gallery, scroll effects',
      'GSAP 3.13.0 for scroll-triggered animations',
      'CSS 3D Transforms (perspective, rotateY, translateZ)',
      'OrbisX booking platform integration (iframe embed)',
      'Font Awesome 6.5.1 + Google Fonts (Inter, Poppins)'
    ],
    deliverables: [
      'Responsive single-page website (mobile-first)',
      'Fixed navigation with mobile hamburger drawer',
      'Hero section with responsive background scaling',
      '3D CSS review carousel (6 reviews, auto-rotation, controls)',
      'Before/after gallery carousel (14 stacked image pairs)',
      'Fullscreen image viewer with keyboard navigation',
      '6 detailed service cards with scroll-triggered animations',
      'OrbisX booking integration',
      'Floating call button with time-based visibility (6AM-9PM)',
      'SEO implementation (schema.org, sitemap, robots.txt, meta tags)'
    ],
    testimonial: {
      text: '[Client testimonial to be added]',
      author: 'Nery Hernandez',
      position: 'Owner, Mr. Xtractor Auto Detailing'
    }
  },
  {
    id: 4,
    slug: 'creadev-design',
    title: 'CreaDev Design Portfolio',
    category: 'Business',
    description: 'Modern portfolio website showcasing web development services with Next.js, Tailwind CSS, and premium animations',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'GSAP'],
    image: '/images/projects/creadev_design.png',
    link: 'https://creadevdesign.com',
    problem: 'CreaDev Design needed a professional portfolio website that would showcase web development expertise while demonstrating technical capabilities through the site itself. The challenge was creating a site that balanced visual appeal with performance, featured smooth animations without sacrificing load times, and effectively communicated services to potential clients. The site needed to serve as both a portfolio piece and a functional business tool, converting visitors into leads while standing out in a competitive market.',
    solution: 'We built a modern, performance-optimized portfolio using Next.js 16 with TypeScript for type safety and developer experience. The site features a custom 3D logo animation on the homepage using pure CSS transforms and clip-path masking, Framer Motion for scroll-triggered animations throughout, and a fully responsive design with Tailwind CSS 4. We implemented a dark theme with a subtle grid background pattern, created detailed case study pages for each project with comprehensive problem-solution-result breakdowns, and integrated Vercel Analytics for performance tracking. The architecture uses Next.js App Router with server-side rendering for optimal SEO.',
    results: 'The portfolio successfully positions CreaDev Design as a premium web development service with technical depth. The 3D logo animation creates an immediate impression of sophistication, while the smooth scroll animations keep visitors engaged as they explore services and projects. The detailed case studies demonstrate problem-solving ability and technical expertise, building trust with potential clients. The site achieves Lighthouse scores of 95+ across all metrics, with sub-2-second load times. The responsive design ensures a flawless experience across all devices. The clear service descriptions and project showcases have streamlined the client onboarding process.',
    challenges: [
      'Creating complex CSS animations (3D logo morph) that perform smoothly at 60fps across all devices',
      'Implementing Tailwind CSS 4 (beta) with Next.js 16 before official stable releases',
      'Designing a dark theme with sufficient contrast for accessibility while maintaining visual appeal',
      'Building a scalable project data structure that supports detailed case studies',
      'Optimizing Next.js Image components for fast loading while maintaining quality',
      'Integrating Framer Motion animations without impacting Core Web Vitals scores'
    ],
    technologies: [
      'Next.js 16.1.1 - React framework with App Router and server components',
      'React 19 - Latest React with concurrent features',
      'TypeScript 5 - Type-safe development with strict mode',
      'Tailwind CSS 4 - Utility-first CSS with JIT compiler',
      'Framer Motion 12 - Production-ready animation library',
      'React Hook Form - Performant form validation',
      'Zod - TypeScript-first schema validation',
      'Vercel Analytics - Real-time performance monitoring',
      'Resend - Email API for contact form',
      'Next.js Metadata API - SEO optimization with Open Graph'
    ],
    deliverables: [
      'Fully responsive Next.js portfolio website',
      'Custom 3D logo animation with clip-path masking',
      'Four detailed project case study pages',
      'Interactive contact form with validation',
      'About page with founder story and tech stack',
      'Services page with six service offerings',
      'SEO optimization with sitemap and robots.txt',
      'Structured data (schema.org) for local business',
      'Dark theme with custom grid background',
      'Mobile-optimized navigation with animated menu',
      'Performance optimization (95+ Lighthouse scores)',
      'Vercel deployment with automatic CI/CD'
    ]
  }
];