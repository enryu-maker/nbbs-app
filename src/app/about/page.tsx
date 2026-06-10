import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — NBBS",
  description: "Learn about our mission to serve the ambitious SMB community in Tier-2 India.",
};

import Link from "next/link";

const VALUES = [
  {
    title: "Transparency",
    desc: "Pricing, process, and trade-offs are on the table from day one."
  },
  {
    title: "Pragmatism",
    desc: "We ship what works, not what wins design awards."
  },
  {
    title: "Real Results",
    desc: "Every product has a metric attached. We track it with you."
  },
  {
    title: "Founder Mindset",
    desc: "We think like owners because we are owners."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 text-center animate-fade-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-7xl mb-6">About</h1>
          <p className="text-2xl font-light text-navy/70 mb-10">Built by SMB operators, for SMB operators.</p>
          <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We&apos;ve sat in your chair. We&apos;ve stared at the spreadsheet at 11pm. We&apos;ve fought the same commission disputes and missed the same cashflow alerts. NBBS is the company we wished existed when we were running our own.
          </p>
        </div>
      </section>

      {/* Global Trust Metrics */}
      <section className="py-12 px-6 border-y border-navy/10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-navy/10">
          <div className="flex flex-col">
            <span className="text-4xl font-display text-navy mb-2">50+</span>
            <span className="text-xs uppercase tracking-widest text-navy/50 font-bold">SMBs trust NBBS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-display text-navy mb-2">₹3Cr+</span>
            <span className="text-xs uppercase tracking-widest text-navy/50 font-bold">Consulting delivered</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-display text-navy mb-2">94%</span>
            <span className="text-xs uppercase tracking-widest text-navy/50 font-bold">Client retention</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-display text-navy mb-2">6 mo.</span>
            <span className="text-xs uppercase tracking-widest text-navy/50 font-bold">To sustainable growth</span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl mb-6 text-gold">Our Philosophy</h2>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                Diagnosis before prescription. Software that fits your business, not the other way around. Slow when it matters, fast when it doesn&apos;t.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                  <h3 className="font-display text-xl mb-3">{v.title}</h3>
                  <p className="text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Customers */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl mb-16 text-center">Anchor customers</h2>
          
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-white p-10 lg:p-16 rounded-[40px] border border-navy/5 shadow-xl grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-display text-3xl mb-2">Shree Sales Corporation</h3>
                <p className="text-gold font-mono text-sm tracking-widest uppercase mb-8">Sanjay Dighe, Founder</p>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-1">Challenge</span>
                    <p className="text-navy/80">Manual commission tracking caused constant disputes and eroded field-team trust.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-1">Solution</span>
                    <p className="text-navy/80">Business OPD diagnostic + Incentiwise rollout across 3 territories.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-navy/10">
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">30%</span>
                    <span className="text-xs text-navy/60 font-medium">Fewer commission disputes</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">40%</span>
                    <span className="text-xs text-navy/60 font-medium">Revenue growth in 12 months</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">100%</span>
                    <span className="text-xs text-navy/60 font-medium">Field rep adoption</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy/5 p-10 rounded-3xl relative">
                <span className="absolute -top-4 -left-4 text-8xl font-display text-navy/10 leading-none">&ldquo;</span>
                <p className="font-display text-2xl leading-relaxed text-navy relative z-10 italic">
                  NBBS didn&apos;t just sell us a tool. They fixed how we think about our sales team first.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-10 lg:p-16 rounded-[40px] border border-navy/5 shadow-xl grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-navy/5 p-10 rounded-3xl relative order-2 lg:order-1">
                <span className="absolute -top-4 -left-4 text-8xl font-display text-navy/10 leading-none">&ldquo;</span>
                <p className="font-display text-2xl leading-relaxed text-navy relative z-10 italic">
                  We look like a multinational firm now, even though we operate from a tier-2 city.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="font-display text-3xl mb-2">Wintrade Decor</h3>
                <p className="text-gold font-mono text-sm tracking-widest uppercase mb-8">Sumit Gandhi, Director</p>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-1">Challenge</span>
                    <p className="text-navy/80">Inconsistent quotes were causing pricing leaks and slow close cycles.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-1">Solution</span>
                    <p className="text-navy/80">Standardized templates and approval workflows via Quotation.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-navy/10">
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">50%</span>
                    <span className="text-xs text-navy/60 font-medium">Faster quote turnaround</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">18%</span>
                    <span className="text-xs text-navy/60 font-medium">Higher average ticket</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display text-navy mb-1">2x</span>
                    <span className="text-xs text-navy/60 font-medium">Conversion on pitches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 mb-16">
        <div className="max-w-4xl mx-auto bg-navy text-white rounded-[40px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Want a result like these?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Start with a free 30-minute diagnostic. We&apos;ll tell you honestly whether NBBS is the right fit for your business.
            </p>
            <Link href="/contact" className="inline-block bg-white text-navy px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 shadow-lg shadow-white/10">
              Book your diagnostic
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
