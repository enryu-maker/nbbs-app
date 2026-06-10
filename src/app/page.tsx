import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero-diagnostic.jpg";
import caseChart from "@/assets/case-study-chart.jpg";

const ECOSYSTEM = [
  {
    phase: "01 / DIAGNOSIS",
    name: "Business OPD",
    desc: "A deep-dive diagnostic to identify leakage and bottleneck points in your current operations.",
  },
  {
    phase: "02 / EDUCATION",
    name: "BCW Workshops",
    desc: "Peer-led framework training designed specifically for the Indian SMB context.",
  },
  {
    phase: "03 / OPERATIONS",
    name: "NBBS CRM",
    desc: "Custom-fitted sales tracking that your team will actually use, not ignore.",
  },
  {
    phase: "03 / OPERATIONS",
    name: "Incentiwise",
    desc: "Transparent commission tracking that ends disputes and aligns your sales team.",
  },
  {
    phase: "04 / OPTIMIZATION",
    name: "Quotation",
    desc: "Professional proposals in minutes. Standardize pricing and close faster.",
  },
  {
    phase: "04 / OPTIMIZATION",
    name: "Cashflow",
    desc: "Predictive liquidity tracking so you never miss a payment or opportunity.",
  },
];

const FUNNEL = [
  { n: "01", t: "Diagnostic", d: "Identify your unique operational challenges in a 30-min session." },
  { n: "02", t: "Workshops", d: "Learn proven frameworks alongside your peer business owners." },
  { n: "03", t: "Implementation", d: "Deploy software tools like CRM and Cashflow to automate rigor." },
  { n: "04", t: "Scale", d: "Manage by exception using real-time dashboard analytics." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono mb-6 uppercase tracking-widest">
              <span>Founded by Operators</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] mb-8 text-balance">
              From <span className="text-gold italic">Diagnosis</span> to Solution Implementation.
            </h1>
            <p className="text-xl text-navy/70 max-w-[54ch] mb-10 leading-relaxed">
              Integrated business solutions for Nashik&apos;s SMB leaders. Consulting when you need a
              guide. Software built for your sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-navy/20 transition-all active:scale-95 flex items-center gap-3"
              >
                Book Free Diagnostic
                <span className="text-gold font-mono" aria-hidden>→</span>
              </Link>
              <Link
                href="/workshops"
                className="bg-white border border-navy/10 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy/5 transition-all"
              >
                Explore Workshops
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <Image
              src={heroImg}
              alt="From a tangled cluster of decisions to a structured growth pipeline"
              width={800}
              height={1000}
              priority
              className="w-full aspect-4/5 object-cover bg-white rounded-2xl shadow-2xl border border-navy/5 animate-fade-up [animation-delay:200ms]"
            />
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="border-y border-navy/10 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:divide-x divide-navy/10">
            {[
              ["50+", "SMBs in Nashik"],
              ["32%", "Avg. 6-Mo Growth"],
              ["₹1.2Cr+", "Client Savings"],
              ["6-Mo", "ROI Timeline"],
            ].map(([k, v]) => (
              <div key={v} className="flex flex-col items-center md:items-start md:px-6 text-center md:text-left">
                <span className="text-3xl font-display text-navy mb-1">{k}</span>
                <span className="text-sm text-navy/50 font-medium uppercase tracking-wider">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-32 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl mb-6">The NBBS Ecosystem</h2>
              <p className="text-white/50 text-lg leading-relaxed">
                We don&apos;t sell tools. We build the operating system for your growth, moving from
                clarity to execution.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm font-mono text-white/50 shrink-0">
              <span>(01) DIAGNOSIS</span>
              <span className="h-px w-8 bg-white/20" />
              <span>(04) SCALE</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {ECOSYSTEM.map((p) => (
              <div key={p.name} className="bg-navy p-10 hover:bg-navy/50 transition-colors group">
                <span className="text-gold font-mono text-xs mb-8 block tracking-tight">{p.phase}</span>
                <h3 className="text-2xl font-display mb-4">{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{p.desc}</p>
                <Link
                  href="/ecosystem"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-gold transition-colors"
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + Featured Case Study */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="font-display text-4xl">Results, Not Promises.</h2>

              <div className="space-y-10">
                <div className="border-l-4 border-gold pl-8">
                  <p className="text-2xl font-display leading-tight mb-6">
                    &quot;The transition from manual tracking to Incentiwise cleared all disputes with
                    our field agents. Our transparency is our competitive edge now.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-navy/5 grid place-items-center font-display text-navy/40">SD</div>
                    <div>
                      <p className="font-semibold">Sanjay Dighe</p>
                      <p className="text-sm text-navy/50 uppercase tracking-wider">
                        Founder, Shree Sales Corporation
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-block bg-sage/10 text-sage px-4 py-2 rounded-lg text-sm font-bold">
                    30% REDUCTION IN COMMISSION DISPUTES
                  </div>
                </div>

                <div className="border-l-4 border-gold pl-8">
                  <p className="text-2xl font-display leading-tight mb-6">
                    &quot;The Quotation system moved us from WhatsApp chaos to professional standards.
                    We close deals twice as fast.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-navy/5 grid place-items-center font-display text-navy/40">SG</div>
                    <div>
                      <p className="font-semibold">Sumit Gandhi</p>
                      <p className="text-sm text-navy/50 uppercase tracking-wider">
                        Director, Wintrade Decor
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-block bg-sage/10 text-sage px-4 py-2 rounded-lg text-sm font-bold">
                    50% FASTER QUOTE TURNAROUND
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 lg:p-12 border border-navy/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 pointer-events-none">
                <span className="text-[120px] font-display text-navy/5 leading-none select-none italic">
                  &ldquo;
                </span>
              </div>
              <h3 className="text-xs font-mono text-gold mb-12 tracking-widest">
                FEATURED CASE STUDY
              </h3>
              <Image
                src={caseChart}
                alt="Growth chart showing 40% increase over 12 months"
                width={800}
                height={540}
                className="w-full aspect-video object-cover bg-navy/5 rounded-xl mb-10"
              />
              <p className="text-2xl font-display mb-6">
                How Shree Sales Scaled 40% in 12 Months
              </p>
              <p className="text-navy/60 leading-relaxed mb-8">
                Through a combination of the Business OPD diagnostic and Incentiwise automation,
                Shree Sales removed the operational drag that was limiting their field force
                capacity.
              </p>
              <Link href="/about" className="text-navy font-bold flex items-center gap-2 group">
                Read Full Case Study
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section className="bg-navy/5 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl mb-6">The Path to Performance</h2>
            <p className="text-navy/50 max-w-xl mx-auto">
              Four stages from where you are to where you need to be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FUNNEL.map((s) => (
              <div
                key={s.n}
                className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-all group"
              >
                <span className="size-10 rounded-full bg-navy text-white flex items-center justify-center font-mono text-sm mb-8">
                  {s.n}
                </span>
                <h3 className="font-display text-xl mb-4 group-hover:text-gold transition-colors">
                  {s.t}
                </h3>
                <p className="text-sm text-navy/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto border border-navy/10 rounded-[40px] p-10 sm:p-12 lg:p-24 bg-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl mb-8">
                The Next Clarity Workshop is Loading.
              </h2>
              <p className="text-xl text-navy/60 mb-8">
                Nashik · July 18, 2026
                <span className="text-navy font-semibold text-2xl block mt-2">
                  Solving the Sales Tracking Chaos
                </span>
              </p>
              <div className="flex items-center gap-3 mb-10">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full border-2 border-white bg-navy/10" />
                  <div className="size-10 rounded-full border-2 border-white bg-navy/20" />
                  <div className="size-10 rounded-full border-2 border-white bg-navy/30" />
                </div>
                <span className="text-xs font-mono text-rust font-bold uppercase tracking-widest">
                  Only 4 spots left
                </span>
              </div>
              <Link
                href="/workshops"
                className="inline-block bg-navy text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95"
              >
                Register for Next Workshop
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-paper border border-navy/5">
              <p className="font-mono text-[10px] text-navy/40 mb-2 uppercase tracking-widest">
                Diagnostic Path
              </p>
              <h3 className="font-display text-2xl mb-3">Can&apos;t wait for the workshop?</h3>
              <p className="text-navy/60 text-base mb-8 leading-relaxed">
                Get a 1:1 business health checkup this week. No sales pitch. Just an honest map
                of your current state.
              </p>
              <Link
                href="/contact"
                className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-all inline-block"
              >
                Book a Private Diagnostic Session →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
