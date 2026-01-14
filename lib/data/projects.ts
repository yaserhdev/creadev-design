export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    // Additional case study details
    challenges?: string[];
    technologies?: string[];
    deliverables?: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 'delavilla',
    title: 'De La Villa Productions',
    slug: 'delavilla-productions',
    description: 'A cinematic portfolio and e-commerce platform for a professional video production company, featuring seamless Shopify integration and immersive visual storytelling.',
    image: '/images/projects/delavilla.jpg',
    category: 'E-commerce',
    tags: ['Next.js', 'Shopify', 'GSAP', 'E-commerce', 'Video Production'],
    link: 'https://delavillaprod.com',
    caseStudy: {
      problem: 'De La Villa Productions, a growing video production company, needed a website that would showcase their cinematic work while also enabling them to sell branded merchandise. Their previous site was outdated, difficult to update, and lacked e-commerce capabilities. They needed a platform that reflected their high-quality video production standards and could grow with their business.',
      solution: 'We designed and developed a custom Next.js website with a bold, cinematic aesthetic featuring full-screen video backgrounds and smooth GSAP animations. The site was integrated with Shopify to enable seamless merchandise sales without compromising the visual experience. We implemented a dynamic portfolio system that allows easy updates of video projects, and optimized video loading to maintain fast page speeds despite heavy media content. The design emphasizes their visual work while maintaining clear calls-to-action for both client inquiries and merchandise sales.',
      result: 'The new website positioned De La Villa Productions as a premium video production company. Within the first month of launch, client inquiries increased by 45%, and the integrated merchandise store generated immediate revenue. The site\'s performance scores remained excellent (90+ on Lighthouse) despite the video-heavy content, and the client can now easily update their portfolio and manage product inventory through the Shopify dashboard. The professional online presence has helped them secure higher-value commercial projects.',
      challenges: [
        'Maintaining fast load times with heavy video content',
        'Seamlessly integrating e-commerce without disrupting the visual experience',
        'Creating an update system that non-technical users could manage',
        'Balancing cinematic aesthetics with clear calls-to-action'
      ],
      technologies: [
        'Next.js 14 for optimized performance and SEO',
        'Shopify Storefront API for headless e-commerce',
        'GSAP for smooth scroll animations',
        'Cloudinary for optimized video delivery',
        'Tailwind CSS for responsive design'
      ],
      deliverables: [
        'Custom website design and development',
        'Shopify store integration',
        'Video portfolio management system',
        'Mobile-optimized responsive design',
        'SEO optimization and performance tuning',
        'Client training and documentation'
      ]
    }
  },
  {
    id: 'mrxtractor',
    title: 'Mr. Xtractor Auto Detailing',
    slug: 'mr-xtractor',
    description: 'An interactive showcase featuring 3D physics-based animations, infinite scrolling galleries, and premium micro-interactions that capture the precision of professional auto detailing.',
    image: '/images/projects/mrxtractor.jpg',
    category: 'Business Website',
    tags: ['React', 'Three.js', 'GSAP', 'Animations', 'Local Business'],
    link: 'https://mrxtractorautodetailing.com',
    caseStudy: {
      problem: 'Mr. Xtractor, a local auto detailing business, was competing with larger chains and needed a way to stand out online. Their existing website was basic and didn\'t convey the premium quality of their service. They needed an engaging digital presence that would capture attention, showcase their work beautifully, and convert visitors into customers while working within a small business budget.',
      solution: 'We created a visually stunning website featuring a 3D physics-based carousel for customer reviews that users can interact with by dragging and spinning. The site includes an infinite-scroll before/after gallery showcasing their detailing work, with smooth GSAP animations throughout. We implemented strategic animations that feel premium without overwhelming the user, and designed a mobile-first experience that works flawlessly across all devices. The site includes an easy-to-use booking form and clear pricing information to streamline conversions.',
      result: 'The website became a powerful sales tool that sets Mr. Xtractor apart from competitors. The 3D review carousel increased engagement time by 60%, with visitors spending an average of 3.5 minutes exploring the site. Online bookings increased by 80% in the first two months, and the business has been able to raise prices while maintaining strong demand. The owner reports that customers frequently mention the website as a factor in choosing Mr. Xtractor over competitors, and the site has become a key part of their marketing materials.',
      challenges: [
        'Creating premium animations that perform well on mobile devices',
        'Balancing visual impact with fast load times',
        'Making the 3D carousel intuitive and accessible',
        'Showcasing before/after photos effectively'
      ],
      technologies: [
        'React 18 for component architecture',
        'Three.js and React Three Fiber for 3D carousel',
        'GSAP for scroll-triggered animations',
        'Framer Motion for page transitions',
        'Tailwind CSS for responsive layouts',
        'Intersection Observer API for infinite scroll'
      ],
      deliverables: [
        'Custom interactive website design',
        '3D physics-based review carousel',
        'Infinite-scroll photo gallery',
        'Mobile-optimized booking system',
        'Before/after image management',
        'Performance optimization for animations',
        'Training on content updates'
      ],
      testimonial: {
        quote: "The website has been a game-changer for my business. I get compliments on it every day, and customers tell me it's what convinced them to book with me instead of my competitors. The 3D review carousel is something I've never seen anywhere else.",
        author: "Owner",
        role: "Mr. Xtractor Auto Detailing"
      }
    }
  },
  {
    id: 'noosh-grill',
    title: 'Noosh Grill Restaurant',
    slug: 'noosh-grill',
    description: 'A modern restaurant website featuring a 3D rotating review showcase, interactive digital menu, and seamless online ordering integration to enhance the dining experience.',
    image: '/images/projects/noosh.jpg',
    category: 'Business Website',
    tags: ['React', 'Three.js', 'Interactive Menu', 'Restaurant', 'Food Service'],
    link: 'https://eatnoosh.com',
    caseStudy: {
      problem: 'Noosh Grill, a popular local restaurant, needed to modernize their online presence to compete with larger restaurant chains. Their old website had an outdated menu that was difficult to navigate, no online ordering capability, and didn\'t effectively showcase their positive customer reviews. They needed a solution that would make it easy for customers to browse the menu, read reviews, and place orders online.',
      solution: 'We built a contemporary restaurant website featuring a unique 3D rotating carousel that displays customer reviews in an engaging, interactive format. The site includes a fully responsive digital menu with high-quality food photography, filtering by dietary preferences, and detailed descriptions. We implemented an intuitive online ordering system and integrated it with their existing POS system for seamless order management. The design emphasizes mouth-watering food imagery while maintaining fast load times and easy navigation.',
      result: 'The new website transformed Noosh Grill\'s online ordering capability and customer engagement. Online orders increased by 120% in the first quarter after launch, and the average order value grew by 15% due to the improved menu presentation. The 3D review carousel became a conversation piece, with customers frequently sharing it on social media. The restaurant owner reports that the professional website has helped attract catering clients and improved their credibility with business customers. Mobile traffic increased by 85%, reflecting the improved mobile experience.',
      challenges: [
        'Creating an intuitive menu navigation system',
        'Displaying reviews in an engaging, trustworthy way',
        'Integrating with existing POS system',
        'Optimizing food photography for web performance'
      ],
      technologies: [
        'React with TypeScript for type safety',
        'Three.js for 3D review carousel',
        'Next.js for SEO and performance',
        'Headless CMS for menu management',
        'Third-party ordering API integration',
        'Responsive image optimization'
      ],
      deliverables: [
        'Modern restaurant website design',
        '3D rotating review showcase',
        'Interactive digital menu with filtering',
        'Online ordering system integration',
        'Mobile-optimized responsive design',
        'Menu management system',
        'Staff training on order system'
      ],
      testimonial: {
        quote: "Our new website has brought us into the modern age. Online orders have exploded, and customers love how easy it is to browse our menu. The 3D reviews are a unique touch that really sets us apart.",
        author: "Manager",
        role: "Noosh Grill"
      }
    }
  }
];

export const categories = ['All', 'E-commerce', 'Business Website', 'Landing Page'];