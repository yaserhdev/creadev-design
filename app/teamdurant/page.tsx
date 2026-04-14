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
                  The objective is twofold: add a place to sell merchandise, and consolidate
                  ongoing site management under a single point of contact. There are two
                  viable ways to accomplish this.
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
          03 — ROUTE A DEEP DIVE
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                  03 — Route A
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
          04 — ROUTE B DEEP DIVE
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
                  04 — Route B
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
          05 — SUMMARY
          ───────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-40 lg:py-48 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] max-w-[120vw] bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.08)_0%,_rgba(139,92,246,0.08)_40%,_transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollAnimation>
              <div className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-gray-500 uppercase mb-10">
                05 — Summary
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
          06 — CONTACT
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 lg:py-40 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] md:text-xs tracking-[0.35em] font-mono text-brand-purple uppercase whitespace-nowrap">
                  06 — Next Step
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
