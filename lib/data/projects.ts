export interface Project {
  id: number;
  slug: string;
  title: string;
  categories: string[];
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
    categories: ['Restaurant'],
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
    categories: ['Video Production', 'E-commerce'],
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
      text: 'We were looking for someone who could launch a website for us; someone with a level of expertise that matched ours. Yaser did an excellent job of crafting a site that was not only unique to our style but also simple to use for our visitors. Not only that, he manages the website in a manner that allows us to focus on our business and not spend time maintaining the site. If he doesn’t know how to do something, he’ll figure it out. Great people skills and just a great web developer to be working with.',
      author: 'Muhammad & Naeem D.',
      position: 'Owners, De La Villa Productions'
    }
  },
  {
    id: 3,
    slug: 'mr-xtractor',
    title: 'Mr. Xtractor Auto Detailing',
    categories: ['Business/Service', 'Auto Detailing'],
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
      text: 'I hired Yaser to build the website for my detailing business, Mr. Xtractor Auto Detailing, and I couldn’t be happier with the results. He took the time to understand my services, branding, and goals. The website is professional, easy to navigate, and helps my business stand out in the Alexandria area. He was responsive, made revisions quickly, and guided me through the process step by step. If you’re a small business or want to revamp your website and are looking for someone reliable and skilled to build your website, Yaser is the guy to go to.',
      author: 'Nery H.',
      position: 'Owner, Mr. Xtractor Auto Detailing'
    }
  },
  {
    id: 4,
    slug: 'creadev-design',
    title: 'CreaDev Design Portfolio',
    categories: ['Business/Service', 'Portfolio'],
    description: 'Modern portfolio website built with Next.js and Tailwind CSS, featuring a custom 3D logo animation, scroll-triggered reveals, and a case study system for showcasing client work.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Resend', 'Vercel'],
    image: '/images/projects/creadev_design.png',
    link: 'https://creadevdesign.com',
    problem: 'We needed a portfolio that did more than list projects — it had to demonstrate the same level of craft we bring to client work. The site needed to balance visual polish with performance, showcase technical depth through detailed case studies, and convert visitors into leads. Most developer portfolios either look generic or sacrifice speed for flash. This one couldn\'t.',
    solution: 'A custom Next.js 16 build with TypeScript, Tailwind CSS 4, and Framer Motion. The homepage features a 3D logo animation using pure CSS transforms and clip-path masking — no libraries, no performance hit. Scroll-triggered animations throughout keep the experience engaging without bloating the bundle. Each project has a dedicated case study page with problem-solution-results breakdowns, tech stack details, and deliverables. Dark theme with a subtle grid background, fully responsive, and optimized for Core Web Vitals.',
    results: 'The site serves as both a portfolio and a proof of concept — every animation, every interaction demonstrates the same attention to detail clients can expect. Lighthouse scores: 96 Performance, 92 Accessibility, 100 Best Practices, 100 SEO. The case study format has streamlined client conversations by answering technical questions upfront. The contact form converts, and the site ranks for local web development searches.',
    challenges: [
      'Creating a 3D logo animation with pure CSS that runs at 60fps across all devices',
      'Implementing Tailwind CSS 4 with Next.js 16 before stable releases',
      'Designing a dark theme with WCAG-compliant contrast ratios',
      'Building a scalable data structure for detailed case studies',
      'Integrating Framer Motion animations without hurting Core Web Vitals'
    ],
    technologies: [
      'Next.js 16 with App Router and server components',
      'React 19 with concurrent features',
      'TypeScript 5 in strict mode',
      'Tailwind CSS 4 with JIT compiler',
      'Framer Motion for scroll-triggered animations',
      'React Hook Form + Zod for form validation',
      'Resend for contact form emails',
      'Vercel for hosting and analytics',
      'Next.js Metadata API for SEO and Open Graph'
    ],
    deliverables: [
      'Fully responsive Next.js portfolio website',
      'Custom 3D logo animation (pure CSS, no libraries)',
      'Four detailed project case study pages',
      'Interactive contact form with validation',
      'About page with founder story and tech stack',
      'Services page with six service offerings',
      'SEO implementation (sitemap, robots.txt, schema.org)',
      'Dark theme with custom grid background',
      'Mobile navigation with animated hamburger menu',
      'Performance optimization (96/92/100/100 Lighthouse)',
      'Vercel deployment with CI/CD from GitHub'
    ]
  }
];