import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import TeamDurantHero from './_components/TeamDurantHero';
import AddOnExplorer from './_components/AddOnExplorer';
import PriceCounter from './_components/PriceCounter';

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

const routeAIncluded = [
  'Full handover and audit of the existing site',
  'Content cleanup and refresh across existing pages',
  'Shop setup and configuration with the initial product catalog',
  'Ongoing site management and updates under the monthly retainer',
];

const routeBIncluded = [
  'Full rebuild of all current pages with custom design and animation',
  'Custom-built shop with secure Stripe checkout, integrated directly into the site',
  'Performance, SEO, and accessibility optimization across the entire site',
  'Hosting on Vercel, fully managed under the monthly retainer',
  'Ongoing site management, updates, and content changes',
];

// Comparison data: each limitation, what Route A does about it, what Route B does about it
const comparisonItems = [
  {
    limitation: 'No shop or commerce',
    routeA: 'Adds Squarespace Commerce with built-in checkout',
    routeB: 'Adds custom-built shop on Stripe with no platform fees',
  },
  {
    limitation: 'No camp registration system',
    routeA: 'Requires embedded third-party tools (off-brand mid-flow)',
    routeB: 'Available as a fully branded, on-domain custom system',
  },
  {
    limitation: 'Skills Camp page uses image-based content',
    routeA: 'Replaced with editable text, search-indexable',
    routeB: 'Rebuilt as a real page with optional registration flow',
  },
  {
    limitation: 'Performance ceiling on Squarespace',
    routeA: 'Optimized within Squarespace’s constraints',
    routeB: 'Built for Lighthouse 95+ across the entire site',
  },
  {
    limitation: 'Design and animation limited by platform',
    routeA: 'Worked within Squarespace’s template system',
    routeB: 'Fully custom design with no platform constraints',
  },
  {
    limitation: 'No code ownership — site cannot be migrated',
    routeA: 'Site remains a Squarespace property (continued rental)',
    routeB: 'Full ownership of code, design, and infrastructure',
  },
];

export default function TeamDurantPage() {
  return (
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
                <span className={`${serif.className} italic font-normal text-gray-300`}>
                  stand.
                </span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                <p>
                  Currently teamdurant.com runs on Squarespace and serves its purpose as an
                  informational hub. There is no shop, no built-in registration system, and
                  the site is currently managed by an external developer.
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
          02 — CURRENT SITE ANALYSIS
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
                  02 — Current Site Analysis
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gray-100 leading-[0.95] tracking-tight">
                A look at{' '}
                <span className={`${serif.className} italic font-normal text-gray-300`}>
                  what&apos;s there now.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl leading-relaxed">
                An honest review of the current site — what works, what doesn&apos;t, and what
                a custom build would change.
              </p>
            </ScrollAnimation>

            {/* ─── Subsection: Where the current site succeeds ─── */}
            <ScrollAnimation delay={0.1}>
              <div className="mb-16">
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                  Where the current site succeeds
                </h3>
                <div className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed">
                  <p>
                    The current site is well-designed and brand-consistent. The visual
                    identity carries through every page, navigation is clear, and the content
                    hierarchy makes sense. Imagery is strong, the typography choices work,
                    and the overall structure delivers what a visitor needs from an
                    informational hub.
                  </p>
                  <p className="text-gray-400">
                    These are the foundations to build on, regardless of which route is
                    chosen.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Visual divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

            {/* ─── Subsection: Where the current site has limits ─── */}
            <ScrollAnimation delay={0.15}>
              <div className="mb-16">
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase mb-6">
                  Where the current site has limits
                </h3>
                <div className="space-y-5 text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
                  <p>
                    The current site does what an informational site should do. The
                    limitations show up the moment the program needs it to do anything more.
                  </p>
                </div>

                <ul className="space-y-4">
                  {/* Skills Camp — called out by name */}
                  <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                      The Skills Camp page is image-based
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base">
                      Camp details are currently displayed as flyer screenshots rather than
                      real text. This means the information isn&apos;t indexable by search
                      engines, can&apos;t be updated without uploading new graphics,
                      isn&apos;t accessible to screen readers, and doesn&apos;t connect to any
                      registration flow. For the program&apos;s most revenue-relevant page,
                      this is the most significant gap.
                    </p>
                  </li>

                  <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                      No commerce or shop functionality
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base">
                      There is currently no way to sell merchandise on the site. Any
                      commerce would need to be added from scratch.
                    </p>
                  </li>

                  <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                      No camp registration system
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base">
                      Camp signups currently require off-platform coordination.
                      Squarespace can host third-party registration tools through embeds, but
                      those tools take visitors off the Team Durant site mid-flow and break
                      the branded experience.
                    </p>
                  </li>

                  <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                      Performance ceiling
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base">
                      Squarespace sites with this much imagery typically perform in the
                      mid-70s on Lighthouse — fine for a brochure site, but well below what
                      a custom build can achieve. This affects search rankings and mobile
                      load times in ways that compound over time.
                    </p>
                  </li>

                  <li className="p-6 md:p-7 bg-gray-900/40 border border-white/10 rounded-2xl">
                    <div className="text-sm font-bold text-gray-100 mb-2 tracking-wide">
                      Design and animation limited to what the platform allows
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base">
                      Squarespace operates on templates with a fixed range of customization.
                      Anything beyond what the platform supports out of the box — premium
                      animations, custom interactions, advanced layouts — is either
                      impossible or requires workarounds that don&apos;t feel native.
                    </p>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Visual divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

            {/* ─── Subsection: On platform ownership ─── */}
            <ScrollAnimation delay={0.2}>
              <div className="mb-16">
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase mb-6">
                  On platform ownership
                </h3>
                <h4 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 leading-[1.05] tracking-tight`}>
                  What you actually{' '}
                  <span className={`${serif.className} italic font-normal bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent`}>
                    own.
                  </span>
                </h4>
                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                  <p>
                    This applies to every Squarespace site, not just teamdurant.com — but
                    it&apos;s worth understanding clearly.
                  </p>
                  <p className="text-gray-400">
                    On Squarespace, you don&apos;t own the code. You don&apos;t own the
                    design files. You can&apos;t export the site to another host or hand it
                    off to a different developer to maintain in any meaningful way. What you
                    pay for each month is access — to a template, to Squarespace&apos;s
                    hosting, and to the editor that lets you make changes within the
                    platform&apos;s rules.
                  </p>
                  <p className="text-gray-400">
                    If Squarespace ever changes its pricing, discontinues a feature, or
                    becomes the wrong fit, the site doesn&apos;t come with you. It stays on
                    Squarespace, or it gets rebuilt from scratch elsewhere.
                  </p>
                </div>

                <div className="mt-10 p-8 md:p-10 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl">
                  <div className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-400 uppercase mb-5">
                    What custom ownership means
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    A custom build is the opposite. The code is yours. The design is yours.
                    The site lives on your hosting account (or one CreaDev Design manages on
                    your behalf), and it can be moved, modified, or handed to any
                    competent developer at any time. There&apos;s no platform charging rent
                    on top of the work, and no risk of the site disappearing if a
                    third-party platform&apos;s priorities change.
                  </p>
                  <p className="mt-4 text-gray-400 leading-relaxed text-base md:text-lg">
                    For a program built around a name as significant as Kevin Durant&apos;s,
                    owning the digital infrastructure outright is meaningful in a way it
                    isn&apos;t for most small businesses.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Visual divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

            {/* ─── Subsection: How each route addresses these ─── */}
            <ScrollAnimation delay={0.25}>
              <div>
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                  How each route addresses these
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
                  Each limitation above can be addressed by either route — but in different
                  ways and to different degrees. Side by side:
                </p>

                {/* Comparison table */}
                <div className="space-y-3">
                  {/* Header row (hidden on mobile) */}
                  <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase">
                    <div className="col-span-4">Limitation</div>
                    <div className="col-span-4">Route A — Squarespace</div>
                    <div className="col-span-4">Route B — Custom Build</div>
                  </div>

                  {comparisonItems.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 bg-gray-900/40 border border-white/10 rounded-2xl hover:border-white/20 transition-colors duration-300"
                    >
                      {/* Limitation */}
                      <div className="md:col-span-4">
                        <div className="text-[10px] tracking-[0.3em] font-mono text-gray-600 uppercase mb-2 md:hidden">
                          Limitation
                        </div>
                        <div className="text-gray-100 font-bold text-base leading-snug">
                          {item.limitation}
                        </div>
                      </div>

                      {/* Route A */}
                      <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-4">
                        <div className="text-[10px] tracking-[0.3em] font-mono text-brand-purple uppercase mb-2 md:hidden">
                          Route A
                        </div>
                        <div className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {item.routeA}
                        </div>
                      </div>

                      {/* Route B */}
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
          03 — AT A GLANCE
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
                  03 — At a Glance
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
              {/* Route A Quick Card */}
              <ScrollAnimation delay={0.1}>
                <div className="group relative p-8 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-brand-purple/40 hover:bg-gray-900/70 transition-all duration-500 h-full">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent" />
                  <div className="text-[10px] tracking-[0.35em] font-mono text-gray-500 uppercase mb-5">
                    Route A
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 leading-tight">
                    Squarespace
                  </h3>
                  <div className="mb-2">
                    <span className="text-xs tracking-widest font-mono text-gray-500 uppercase block mb-2">
                      Starting at
                    </span>
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent leading-none">
                      <PriceCounter value={2500} />
                    </div>
                  </div>
                  <div className="text-base text-gray-400 mt-3 mb-8">
                    plus{' '}
                    <span className="text-gray-200 font-semibold">$300/month</span>{' '}
                    management
                  </div>
                  <div className="h-px bg-white/5 mb-6" />
                  <p className="text-gray-400 leading-relaxed">
                    Stay on the existing platform. Add a shop. Manage everything going
                    forward.
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
                    <span className="text-xs tracking-widest font-mono text-gray-500 uppercase block mb-2">
                      Starting at
                    </span>
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent leading-none">
                      <PriceCounter value={10000} />
                    </div>
                  </div>
                  <div className="text-base text-gray-400 mt-3 mb-8">
                    plus{' '}
                    <span className="text-gray-200 font-semibold">$600/month</span>{' '}
                    management
                  </div>
                  <div className="h-px bg-white/5 mb-6" />
                  <p className="text-gray-400 leading-relaxed">
                    Full rebuild on a modern stack. Custom design and development with no
                    platform constraints.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
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
                <span className={`${serif.className} italic font-normal text-gray-300`}>
                  Squarespace.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl leading-relaxed">
                Take over the existing site. Add a shop. Manage everything going forward.
              </p>
            </ScrollAnimation>

            {/* Price box */}
            <ScrollAnimation delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
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
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-6 mb-14">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  The site remains on Squarespace. CreaDev Design takes over as the single
                  point of contact for content updates, design adjustments, troubleshooting,
                  and ongoing management.
                </p>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  A shop is added using Squarespace&apos;s built-in commerce tools, configured
                  with secure checkout, inventory tracking, shipping, and tax handling. Once
                  live, all updates are managed directly by CreaDev Design.
                </p>
              </div>
            </ScrollAnimation>

            {/* What's included */}
            <ScrollAnimation delay={0.3}>
              <div className="mb-14">
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-purple uppercase mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {routeAIncluded.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 p-5 bg-gray-900/30 border border-white/5 rounded-xl hover:border-brand-purple/30 hover:bg-gray-900/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/15 border border-brand-purple/40 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-brand-purple"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500 italic leading-relaxed">
                  Squarespace platform fees (the existing subscription plus the commerce
                  upgrade if not already active) are billed by Squarespace directly and are
                  not included.
                </p>
              </div>
            </ScrollAnimation>

            {/* What to know */}
            <ScrollAnimation delay={0.4}>
              <div className="relative p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-400 uppercase mb-5">
                  What to know
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Squarespace is a capable platform, but it has clear limits. Design
                    flexibility, animation, performance, and the scope of custom functionality
                    are all bounded by what Squarespace supports out of the box. More
                    advanced features — such as a fully branded camp registration system —
                    require embedded third-party tools, which take visitors off the Team
                    Durant site mid-flow.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    For a straightforward shop and a managed informational site, this route
                    is efficient and reliable. For requirements beyond that scope, the
                    platform&apos;s constraints become more significant.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Scope clarifier */}
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
                A complete rebuild on a modern stack. Every element designed and developed
                specifically for Team Durant.
              </p>
            </ScrollAnimation>

            {/* Price box */}
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
                    $600
                    <span className="text-2xl text-gray-500">/mo</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-6 mb-14">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  The starting price covers a full rebuild of the existing eight pages,
                  matching the current structure and content, with a custom-built shop
                  included. The shop runs on Stripe directly — no monthly platform fees, no
                  third-party storefront, with payments processed at Stripe&apos;s standard
                  transaction rate.
                </p>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  CreaDev Design manages the shop in-house. New products are added by sending
                  the details directly.
                </p>
              </div>
            </ScrollAnimation>

            {/* What's included */}
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
                        <svg
                          className="w-3 h-3 text-brand-pink"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Add-ons */}
            <ScrollAnimation delay={0.4}>
              <div className="mb-20">
                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-3">
                  <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-brand-pink uppercase">
                    Optional Add-Ons
                  </h3>
                  <span className="text-xs text-gray-600 italic">
                    priced individually
                  </span>
                </div>
                <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  The following are not included in the starting price. Each is scoped
                  individually during the discovery call based on the requirements selected.
                </p>
                <AddOnExplorer />
              </div>
            </ScrollAnimation>

            {/* What to know */}
            <ScrollAnimation delay={0.5}>
              <div className="relative p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-gray-900/20 border border-white/10 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <h3 className="text-[10px] md:text-xs tracking-[0.3em] font-mono text-gray-400 uppercase mb-5">
                  What to know
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    A custom build means design, performance, and feature scope are
                    determined by the project requirements rather than platform constraints.
                    The site is built as a long-term asset with the technical foundation to
                    scale and adapt as the program&apos;s needs evolve.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    The tradeoff is a larger upfront investment compared to staying on
                    Squarespace. In exchange, recurring platform costs are eliminated: no
                    Squarespace subscription, no Shopify fees, and no third-party tool
                    charges.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Scope clarifier */}
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
                <span className={`${serif.className} italic font-normal text-gray-300`}>
                  talk?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl leading-relaxed">
                Whichever route you&apos;re considering, the next step is a brief call to
                confirm scope and finalize details. Both methods below are direct lines.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* Email */}
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
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>

              {/* Phone */}
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
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
            </div>

            {/* Signature */}
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
  );
}
