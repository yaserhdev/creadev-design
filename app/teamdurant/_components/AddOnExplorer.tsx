'use client';

import { motion } from 'framer-motion';

interface AddOn {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

const addOns: AddOn[] = [
  {
    id: 'registration',
    number: '01',
    title: 'Camp Registration System',
    shortDesc: 'Online registration with payments and waivers.',
    longDesc:
      'A registration form built directly into the site, with secure payments, digital waivers, capacity limits per session, automated confirmation emails, and a simple dashboard to view signups as they come in.',
  },
  {
    id: 'rosters',
    number: '02',
    title: 'Player Rosters',
    shortDesc: 'Individual profile pages for each player.',
    longDesc:
      'Each player gets their own page on the site with their information and stats. These pages show up individually in Google search results, giving each athlete direct online visibility.',
  },
  {
    id: 'alumni',
    number: '03',
    title: 'Alumni Database',
    shortDesc: 'College commitments and outcomes.',
    longDesc:
      'A searchable, filterable database documenting where Team Durant alumni continued their playing careers. Visitors can sort by year, gender, or school.',
  },
  {
    id: 'blog',
    number: '04',
    title: 'News & Blog',
    shortDesc: 'Updates, announcements, and articles.',
    longDesc:
      'A news section built to show up in Google search results and display properly when shared on social media. Suitable for announcements, recaps, and building long-term visibility online.',
  },
  {
    id: 'portal',
    number: '05',
    title: 'Member Portal',
    shortDesc: 'Private area for players and parents.',
    longDesc:
      'A password-protected section for current players and families: practice schedules, announcements, document uploads, and private photo galleries.',
  },
  {
    id: 'custom',
    number: '06',
    title: 'Beyond This List',
    shortDesc: 'Additional features can be scoped on request.',
    longDesc:
      'Going custom removes platform limitations, so most features not listed here can still be built. Additional requirements can be discussed during the discovery call.',
  },
];

export default function AddOnExplorer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {addOns.map((addon, index) => (
        <motion.div
          key={addon.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6 }}
          className="group relative p-6 md:p-7 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-colors duration-500 hover:border-brand-pink/40"
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.12)_0%,_transparent_60%)]"
            aria-hidden="true"
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/0 to-transparent group-hover:via-brand-pink/60 transition-colors duration-500" />

          <div className="relative">
            {/* Number */}
            <div className="text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase mb-4 group-hover:text-brand-pink transition-colors duration-300">
              {addon.number}
            </div>

            {/* Title */}
            <h4 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 leading-tight">
              {addon.title}
            </h4>

            {/* Short description */}
            <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">
              {addon.shortDesc}
            </p>

            {/* Long description */}
            <p className="text-sm text-gray-500 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              {addon.longDesc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
