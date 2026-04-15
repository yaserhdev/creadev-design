import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import TeamDurantHero from './_components/TeamDurantHero';
import AddOnExplorer from './_components/AddOnExplorer';
import PriceCounter from './_components/PriceCounter';
import PasswordGate from './_components/PasswordGate';

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'A Proposal for Team Durant — CreaDev Design',
  description:
    'Two routes forward for teamdurant.com. Prepared exclusively for Team Durant by CreaDev Design.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'A Proposal for Team Durant',
    description: 'Two routes forward. Prepared exclusively for Team Durant.',
    type: 'website',
  },
};

const shopOnlyIncluded = [
  'Shop page added to the existing site with your initial product catalog',
  'Secure checkout, inventory tracking, shipping, and tax handling configured',
  'Ongoing shop and site management under the monthly retainer',
];

const fullPackageIncluded = [
  'Everything in Shop Addition, plus:',
  'Full handover and audit of the existing site',
  'Content cleanup and refresh across all existing pages',
];

const routeBIncluded = [
  'Full rebuild of all current pages with custom design and animation',
  'Custom-built shop with secure payment processing, built directly into the site',
  'Optimized for speed, search visibility, and accessibility across the entire site',
  'Hosting fully managed under the monthly retainer',
  'Ongoing site management, updates, and content changes',
];

const comparisonItems = [
  {
    limitation: 'Skills Camp page lacks actionable details',
    routeA: 'Content updated to include full camp details; registration requires outside tools',
    routeB: 'Rebuilt as a complete page with optional integrated registration',
  },
  {
    limitation: 'No shop or commerce',
    routeA: 'Adds Squarespace Commerce with built-in checkout',
    routeB: 'Adds custom-built shop with secure payments and no platform fees',
  },
  {
    limitation: 'No camp registration system',
    routeA: 'Requires outside tools that take visitors away from the Team Durant site',
    routeB: 'Available as a fully branded system built directly into the site',
  },
  {
    limitation: 'Platform constrains speed and design',
    routeA: 'Optimized within Squarespace\u2019s constraints',
    routeB: 'Built for high performance with fully custom design',
  },
  {
    limitation: 'Alumni data is flat and unsearchable',
    routeA: 'Content reformatted within Squarespace\u2019s tools',
    routeB: 'Available as a searchable, filterable database (add-on)',
  },
  {
    limitation: 'No code ownership \u2014 site cannot be migrated',
    routeA: 'Site remains a Squarespace property (continued rental)',
    routeB: 'Full ownership of code, design, and infrastructure',
  },
];

export default function TeamDurantPage() {
  return (
    <PasswordGate>
      <main className="text-foreground overflow-hidden">
        <TeamDurantHero />

        {/* ─────────────────────────────────────────────────────────
            01 — CONTEXT
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 lg:py-40 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                    01 — Context
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-gray-100 leading-[1.05] tracking-tight">
                  Where things{' '}
                  <span className={`${serif.className} italic font-normal text-gray-400`}>
                    stand.
                  </span>
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                  <p>
                    Currently teamdurant.com runs on Squarespace and serves its purpose as
                    an informational hub. There is no shop and no built-in registration
                    system.
                  </p>
                  <p>
                    The objective is straightforward: add a place to sell merchandise on the
                    site. There are two viable ways to accomplish this.
                  </p>
                  <p className="text-gray-300">
                    Below is a breakdown of each route, what it includes, and what it costs.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            02 — AT A GLANCE
            ───────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] max-w-[120vw] bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)]" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-pink uppercase whitespace-nowrap">
                    02 — At a Glance
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-pink/40 to-transparent" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 leading-[1.05] tracking-tight">
                  <span className="text-gray-100">Two routes.</span>{' '}
                  <span className={`${serif.className} italic font-normal bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent`}>
                    Two prices.
                  </span>
                </h2>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Route A Quick Card — Two Tiers */}
                <ScrollAnimation delay={0.1}>
                  <div className="group relative p-8 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-brand-purple/40 hover:bg-gray-900/70 transition-all duration-500 h-full">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent" />
                    <div className="text-[10px] tracking-[0.35em] font-mono text-gray-500 uppercase mb-5">
                      Route A
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 leading-tight">
                      Squarespace
                    </h3>

                    {/* Shop Addition — primary price */}
                    <div className="mb-6">
                      <span className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase block mb-1">
                        Shop Addition
                      </span>
                      <span className="text-xs tracking-widest font-mono text-gray-500 uppercase block mb-2">
                        Starting at
                      </span>
                      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent leading-none">
                        <PriceCounter value={1500} />
                      </div>
                    </div>

                    {/* Full Package — secondary price */}
                    <div className="mb-6 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                      <span className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase block mb-1">
                        Full Package — site audit, cleanup &amp; shop
                      </span>
                      <span className="text-xs tracking-widest font-mono text-gray-500 uppercase block mb-2">
                        Starting at
                      </span>
                      <div className="text-3xl md:text-4xl font-bold text-gray-100 leading-none">
                        $2,500
                      </div>
                    </div>

                    <div className="text-base text-gray-400 mb-6">
                      Both options include{' '}
                      <span className="text-gray-200 font-semibold">$300/month</span>{' '}
                      management
                    </div>

                    <div className="h-px bg-white/5 mb-6" />
                    <p className="text-gray-400 leading-relaxed text-sm">
                      Stay on the existing platform. Add a shop on its own, or include a
                      full site audit and content refresh for a more comprehensive handover.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Route B Quick Card */}
                <ScrollAnimation delay={0.2}>
                  <div className="group relative p-8 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-brand-pink/40 hover:bg-gray-900/70 transition-all duration-500 h-full">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-pink/60 to-transparent" />
                    <div className="text-[10px] tracking-[0.35em] font-mono text-gray-500 uppercase mb-5">
                      Route B
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 leading-tight">
                      Custom Build
                    </h3>
                    <div className="mb-2">
                      <span className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase block mb-1">
                        Full Custom Rebuild
                      </span>
                      <span className="text-xs tracking-widest font-mono text-gray-500 uppercase block mb-2">
                        Starting at
                      </span>
                      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent leading-none">
                        <PriceCounter value={10000} />
                      </div>
                    </div>
                    <div className="text-base text-gray-400 mt-3 mb-8">
                      plus{' '}
                      <span className="text-gray-200 font-semibold">$500/month</span>{' '}
                      management
                    </div>
                    <div className="h-px bg-white/5 mb-6" />
                    <p className="text-gray-400 leading-relaxed">
                      Full custom rebuild. Every page designed and built from scratch with
                      no platform constraints.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            03 — CURRENT SITE ANALYSIS
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 lg:py-40 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-0 w-[700px] h-[700px] max-w-[80vw] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.05)_0%,_transparent_60%)]" />
            <div className="absolute bottom-[10%] right-0 w-[700px] h-[700px] max-w-[80vw] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.05)_0%,_transparent_60%)]" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                    03 — Current Site Analysis
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gray-100 leading-[0.95] tracking-tight">
                  A look at{' '}
                  <span className={`${serif.className} italic font-normal text-gray-400`}>
                    what&apos;s there now.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl leading-relaxed">
                  An honest review of the current site — what works, where the gaps are,
                  and how each route addresses them.
                </p>
              </ScrollAnimation>

              {/* ─── Where the current site succeeds ─── */}
              <ScrollAnimation delay={0.1}>
                <div className="mb-16">
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                    Where the current site succeeds
                  </h3>
                  <div className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed">
                    <p>
                      The current site is well-designed and brand-consistent. The visual
                      identity carries through every page, navigation is clear, and the
                      content hierarchy makes sense. The video backgrounds are effective, the marquee text reinforces the
                      brand, and the overall structure delivers what a visitor needs from an
                      informational hub.
                    </p>
                    <p className="text-gray-400">
                      These are the foundations to build on, regardless of which route is
                      chosen.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

              {/* ─── Where the current site has gaps ─── */}
              <ScrollAnimation delay={0.15}>
                <div className="mb-16">
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase mb-6">
                    Where the current site has gaps
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
                    The site works as an informational hub. The gaps appear the moment the
                    program needs it to do anything beyond that.
                  </p>

                  <ul className="space-y-4">
                    <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                        Skills Camp page has no actionable details
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        The page provides a high-level overview of what the camp is, but
                        contains none of the specific information a parent would need to
                        take action — no dates, no pricing, no location, no age groups, no
                        schedule, and no way to register or pay. For the program&apos;s most
                        revenue-relevant page, the gap between &ldquo;this camp
                        exists&rdquo; and &ldquo;here&apos;s how to sign up&rdquo; is
                        significant.
                      </p>
                    </li>

                    <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                        No commerce or shop functionality
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        There is currently no way to sell merchandise on the site. The
                        header includes a cart icon that links to an empty page — commerce
                        would need to be added from scratch.
                      </p>
                    </li>

                    <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                        No camp registration system
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        Camp signups currently require off-platform coordination.
                        Squarespace can host outside registration tools, but those tools
                        take visitors away from the Team Durant site during the signup
                        process and break the branded experience.
                      </p>
                    </li>

                    <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                        Platform constrains speed and design flexibility
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        Squarespace sets a ceiling on how fast the site can load and how
                        far the design can be customized. Page speed, image optimization,
                        and visual presentation are all bounded by what the platform handles
                        internally. Custom animations, advanced layouts, and interactions
                        beyond the platform&apos;s defaults are either unavailable or
                        require workarounds.
                      </p>
                    </li>

                    <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                        Alumni data is flat and unsearchable
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        The alumni page contains strong content — multiple graduating
                        classes with college destinations for both boys and girls. But it
                        exists as plain text with no structure. Visitors can&apos;t filter by
                        year, gender, or school, and there are no individual profiles or
                        links. As a recruiting tool, this page has significant untapped
                        potential.
                      </p>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

              {/* ─── On platform ownership ─── */}
              <ScrollAnimation delay={0.2}>
                <div className="mb-16">
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase mb-6">
                    On platform ownership
                  </h3>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 leading-[1.05] tracking-tight">
                    What you actually{' '}
                    <span className={`${serif.className} italic font-normal bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent`}>
                      own.
                    </span>
                  </h4>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                    <p className="text-gray-300">
                      This applies to every Squarespace site, not just teamdurant.com — but
                      it&apos;s worth understanding clearly.
                    </p>
                    <p className="text-gray-400">
                      On Squarespace, the code and design files belong to the platform, not
                      to you. The site can&apos;t be exported to another host or moved off
                      Squarespace in any meaningful way. What you pay for each month is
                      access — to a template, to Squarespace&apos;s hosting, and to the
                      editor that lets you make changes within the platform&apos;s rules.
                    </p>
                    <p className="text-gray-400">
                      If Squarespace ever changes its pricing, discontinues a feature, or
                      becomes the wrong fit, the site doesn&apos;t come with you. It stays
                      on Squarespace, or it gets rebuilt from scratch elsewhere.
                    </p>
                  </div>

                  <div className="mt-10 p-8 md:p-10 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl">
                    <div className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-500 uppercase mb-5">
                      What custom ownership means
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      A custom build is the opposite. The code is yours. The design is
                      yours. The site can be moved, modified, or transitioned to any
                      qualified developer at any time. There&apos;s no platform charging
                      rent on top of the work, and no risk of the site disappearing if a
                      third-party platform&apos;s priorities change.
                    </p>
                    <p className="mt-4 text-gray-400 leading-relaxed text-base md:text-lg">
                      For a program built around a name as significant as Kevin
                      Durant&apos;s, owning the digital infrastructure outright is
                      meaningful in a way it isn&apos;t for most organizations.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

              {/* ─── How each route addresses these ─── */}
              <ScrollAnimation delay={0.25}>
                <div>
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                    How each route addresses these
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
                    Each gap above can be addressed by either route — but in different ways
                    and to different degrees.
                  </p>

                  <div className="space-y-3">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase">
                      <div className="col-span-4">Gap</div>
                      <div className="col-span-4">Route A — Squarespace</div>
                      <div className="col-span-4">Route B — Custom Build</div>
                    </div>

                    {comparisonItems.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 bg-gray-900/40 border border-white/10 rounded-2xl hover:border-white/20 transition-colors duration-300"
                      >
                        <div className="md:col-span-4">
                          <div className="text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase mb-2 md:hidden">
                            Gap
                          </div>
                          <div className="text-gray-100 font-bold text-base leading-snug">
                            {item.limitation}
                          </div>
                        </div>

                        <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-4">
                          <div className="text-[10px] tracking-[0.3em] font-mono text-brand-purple uppercase mb-2 md:hidden">
                            Route A
                          </div>
                          <div className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {item.routeA}
                          </div>
                        </div>

                        <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-4">
                          <div className="text-[10px] tracking-[0.3em] font-mono text-brand-pink uppercase mb-2 md:hidden">
                            Route B
                          </div>
                          <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {item.routeB}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            04 — ROUTE A DEEP DIVE
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 lg:py-40 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                    04 — Route A
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gray-100 leading-[0.95] tracking-tight">
                  Stay on{' '}
                  <span className={`${serif.className} italic font-normal text-gray-400`}>
                    Squarespace.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl leading-relaxed">
                  Two options within Squarespace: add a shop on its own, or pair it with a
                  full site audit and content refresh.
                </p>
              </ScrollAnimation>

              {/* ─── Tier 1: Shop Addition ─── */}
              <ScrollAnimation delay={0.1}>
                <div className="mb-10">
                  <div className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                    Shop Addition
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                        Setup
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Starting at</div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-100 leading-none">
                        $1,500
                      </div>
                    </div>
                    <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                        Monthly
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Management</div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-100 leading-none">
                        $300
                        <span className="text-2xl text-gray-500">/mo</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                    A shop is added to the existing site using Squarespace&apos;s built-in
                    commerce tools. Products are configured with secure checkout, inventory
                    tracking, shipping, and tax handling. The rest of the site stays as-is.
                  </p>

                  <ul className="space-y-3">
                    {shopOnlyIncluded.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-5 bg-gray-900/30 border border-white/5 rounded-xl hover:border-brand-purple/30 hover:bg-gray-900/50 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/15 border border-brand-purple/40 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

              {/* ─── Tier 2: Full Package ─── */}
              <ScrollAnimation delay={0.2}>
                <div className="mb-14">
                  <div className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                    Full Package
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                        Setup
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Starting at</div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-100 leading-none">
                        $2,500
                      </div>
                    </div>
                    <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                        Monthly
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Management</div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-100 leading-none">
                        $300
                        <span className="text-2xl text-gray-500">/mo</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                    Everything in the Shop Addition, plus CreaDev Design takes over the full
                    site — conducting an audit, cleaning up and refreshing content across all
                    existing pages, and managing everything going forward.
                  </p>

                  <ul className="space-y-3">
                    {fullPackageIncluded.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-5 bg-gray-900/30 border border-white/5 rounded-xl hover:border-brand-purple/30 hover:bg-gray-900/50 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/15 border border-brand-purple/40 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Shared disclaimer */}
              <ScrollAnimation delay={0.3}>
                <p className="mb-14 text-sm text-gray-500 italic leading-relaxed">
                  Squarespace platform fees (the existing subscription plus any commerce
                  or scheduling upgrades required) are billed by Squarespace directly and
                  are not included in either option above.
                </p>
              </ScrollAnimation>

              {/* What to know */}
              <ScrollAnimation delay={0.4}>
                <div className="relative p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-500 uppercase mb-5">
                    What to know
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      Squarespace is a capable platform, but it has clear limits. Design
                      flexibility, speed, and the scope of custom features are all bounded
                      by what Squarespace supports out of the box. More advanced features —
                      such as a fully branded camp registration system — require outside
                      tools that take visitors away from the Team Durant site.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      For a straightforward shop and a managed informational site, this
                      route is efficient and reliable. For requirements beyond that scope,
                      the platform&apos;s constraints become more significant.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <p className="mt-8 text-xs md:text-sm text-gray-500 italic text-center max-w-2xl mx-auto leading-relaxed">
                  Monthly retainer covers standard management, content updates, and ongoing
                  site maintenance. Significant new feature additions or major redesigns are
                  scoped separately.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            05 — ROUTE B DEEP DIVE
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 lg:py-40 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[10%] right-0 w-[700px] h-[700px] max-w-[80vw] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.06)_0%,_transparent_60%)]" />
            <div className="absolute bottom-[10%] left-0 w-[700px] h-[700px] max-w-[80vw] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.06)_0%,_transparent_60%)]" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-pink uppercase whitespace-nowrap">
                    05 — Route B
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-pink/40 to-transparent" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
                  <span className="text-gray-100">Build it</span>
                  <br />
                  <span className={`${serif.className} italic font-normal bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent pb-2`}>
                    from scratch.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl leading-relaxed">
                  A complete rebuild. Every page designed and built specifically for Team
                  Durant, with no platform constraints.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                  <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                      Build
                    </div>
                    <div className="text-xs text-gray-500 mb-2">Starting at</div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent leading-none">
                      $10,000
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-[10px] tracking-[0.3em] font-mono text-gray-500 uppercase mb-3">
                      Monthly
                    </div>
                    <div className="text-xs text-gray-500 mb-2">Management</div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-100 leading-none">
                    $500
                      <span className="text-2xl text-gray-500">/mo</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="space-y-6 mb-14">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    The starting price covers a full rebuild of the existing eight pages,
                    matching the current structure and content, with a custom-built shop
                    included. The shop has secure payment processing built directly into the
                    site — no monthly platform fees, no third-party storefront, with
                    standard payment processing fees only.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    CreaDev Design manages the shop in-house. New products are added by
                    sending the details directly.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="mb-20">
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase mb-6">
                    What&apos;s Included at the Starting Price
                  </h3>
                  <ul className="space-y-3">
                    {routeBIncluded.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-5 bg-gray-900/30 border border-white/5 rounded-xl hover:border-brand-pink/30 hover:bg-gray-900/50 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-pink/15 border border-brand-pink/40 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="mb-20">
                  <div className="flex items-baseline justify-between mb-2 flex-wrap gap-3">
                    <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase">
                      Optional Add-Ons
                    </h3>
                    <span className="text-xs text-gray-600 italic">priced individually</span>
                  </div>
                  <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
                    The following are not included in the starting price. Each is scoped
                    individually during the discovery call based on the requirements
                    selected.
                  </p>
                  <AddOnExplorer />
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <div className="relative p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-500 uppercase mb-5">
                    What to know
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      A custom build means the design, speed, and features are shaped by
                      what the program needs rather than what the platform allows. The site
                      is built as a long-term asset with the foundation to grow and adapt as
                      the program&apos;s needs evolve.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      The tradeoff is a larger upfront investment compared to staying on
                      Squarespace. In exchange, recurring platform costs are eliminated — no
                      Squarespace subscription and no third-party platform fees.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <p className="mt-8 text-xs md:text-sm text-gray-500 italic text-center max-w-2xl mx-auto leading-relaxed">
                  Monthly retainer covers standard management, content updates, and ongoing
                  site maintenance. Significant new feature additions or major redesigns are
                  scoped separately.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            06 — SUMMARY
            ───────────────────────────────────────────────────────── */}
        <section className="py-32 md:py-40 lg:py-48 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] max-w-[120vw] bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.08)_0%,_rgba(139,92,246,0.08)_40%,_transparent_70%)]" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto text-center">
              <ScrollAnimation>
                <div className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-gray-500 uppercase mb-10">
                  06 — Summary
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.15}>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-100 mb-10 tracking-tight">
                  Both routes deliver the same fundamental outcome: a working shop and a
                  managed site.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.25] tracking-tight">
                  <span className="text-gray-400">
                    The differences come down to{' '}
                  </span>
                  <span className={`${serif.className} italic font-normal bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent`}>
                    scope, ceiling, and long-term direction.
                  </span>
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <div className="mt-16 flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Either way, CreaDev Design handles the build and ongoing management
                    end-to-end.
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            07 — CONTACT
            ───────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 lg:py-40 relative border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                    07 — Next Step
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-gray-100 leading-[0.95] tracking-tight">
                  Ready to{' '}
                  <span className={`${serif.className} italic font-normal text-gray-400`}>
                    talk?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl leading-relaxed">
                  Whichever route you&apos;re considering, the next step is a brief call to
                  confirm scope and finalize details. Both methods below are direct lines.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <ScrollAnimation delay={0.1}>
                  <a
                    href="mailto:yaser@creadevdesign.com?subject=Team%20Durant%20%E2%80%94%20Proposal%20Follow-Up"
                    className="group relative block p-8 md:p-10 bg-gray-900/40 border border-white/10 rounded-3xl hover:border-brand-purple/50 hover:bg-gray-900/60 transition-all duration-500 overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-purple/0 to-transparent group-hover:via-brand-purple/60 transition-colors duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.1)_0%,_transparent_60%)]" />
                    <div className="relative">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-brand-purple uppercase mb-5">
                        Email
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 group-hover:text-brand-purple transition-colors duration-300 break-all leading-tight">
                        yaser@creadevdesign.com
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 group-hover:text-brand-purple transition-colors duration-300">
                        <span className="tracking-wide">Send a message</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <a
                    href="tel:+17038326365"
                    className="group relative block p-8 md:p-10 bg-gray-900/40 border border-white/10 rounded-3xl hover:border-brand-pink/50 hover:bg-gray-900/60 transition-all duration-500 overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-pink/0 to-transparent group-hover:via-brand-pink/60 transition-colors duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.1)_0%,_transparent_60%)]" />
                    <div className="relative">
                      <div className="text-[10px] tracking-[0.3em] font-mono text-brand-pink uppercase mb-5">
                        Direct Cell
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 group-hover:text-brand-pink transition-colors duration-300 leading-tight">
                        (703) 832-6365
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 group-hover:text-brand-pink transition-colors duration-300">
                        <span className="tracking-wide">Call or text</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </ScrollAnimation>
              </div>

              <ScrollAnimation delay={0.4}>
                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-purple/50" />
                    <p className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase">
                      CreaDev Design
                    </p>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-pink/50" />
                  </div>
                  <p className={`${serif.className} italic text-xl md:text-2xl text-gray-400 mb-3`}>
                    Custom-built websites for businesses that refuse to blend in.
                  </p>
                  <p className="text-sm text-gray-600 tracking-wide">
                    Based in Fairfax, Virginia
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
    </PasswordGate>
  );
}
