import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops — NBBS",
  description: "Join our business clarity workshops in Nashik. Peer learning for growing SMBs.",
};

import Link from "next/link";

const SESSIONS = [
  {
    date: "Jul 18, 2026",
    title: "Solving the Sales Tracking Chaos",
    info: "Half day · 9am–1pm · Nashik",
    spots: 4
  },
  {
    date: "Aug 22, 2026",
    title: "Cashflow Forecasting for the Festive Cycle",
    info: "Half day · 9am–1pm · Nashik",
    spots: 9
  },
  {
    date: "Sep 19, 2026",
    title: "Commissions that Don't Cause Conflict",
    info: "Full day · 9am–5pm · Nashik",
    spots: 12
  }
];

const FAQS = [
  { q: "What topics do you cover?", a: "We cover sales tracking, commission structuring, operational bottlenecks, cashflow forecasting, and incentive alignment. All tailored for the SMB context." },
  { q: "Who should attend?", a: "Owners and leadership teams of 5–50 person businesses who are tired of theory and want actionable frameworks." },
  { q: "What's the cost?", a: "Our workshops are priced to be accessible for growing SMBs. Contact us for specific pricing for our upcoming cohorts." },
  { q: "Can I attend remotely?", a: "Currently, our workshops are in-person only in Nashik to foster deep peer connections." },
  { q: "How do I apply what I learn?", a: "You'll leave every workshop with an implementation worksheet and a peer accountability circle." }
];

export default function WorkshopsPage() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans">
      
      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl mb-6">Business Clarity Workshops</h1>
          <p className="text-xl md:text-2xl font-light text-navy/70 mb-8">Learn with peers. Grow together.</p>
          <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Monthly half-day and full-day workshops in Nashik. Designed for SMB owners who are done with theory and want frameworks they can apply on Monday morning.
          </p>
          
          <div className="inline-flex flex-col items-center gap-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-navy/40">Upcoming sessions</span>
            <span className="bg-gold/10 text-gold px-4 py-1.5 rounded-full text-sm font-semibold border border-gold/20">
              3 confirmed dates
            </span>
          </div>
        </div>
      </section>

      {/* Sessions List */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-4">
          {SESSIONS.map((s, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
              <div className="flex flex-col md:flex-row gap-6 md:items-center w-full">
                <div className="bg-navy/5 text-navy px-4 py-2 rounded-lg font-mono text-sm font-semibold shrink-0 text-center">
                  {s.date}
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-navy/60 text-sm">{s.info}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-6 shrink-0 border-t border-navy/5 pt-4 md:pt-0 md:border-none">
                <span className="text-xs font-mono text-rust font-bold uppercase tracking-widest whitespace-nowrap">
                  {s.spots} spots left
                </span>
                <Link href="/contact" className="bg-navy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* From the room testimonial */}
      <section className="py-24 px-6 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-16">
            15 attendees. 85% would recommend. 40% became paying clients.
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-16 max-w-3xl mx-auto">
            We keep cohorts small on purpose. You walk in as a stranger and leave with a peer circle of Nashik business owners who text you back.
          </p>
          
          <div className="max-w-3xl mx-auto relative">
            <span className="absolute -top-10 -left-6 text-[100px] font-display text-white/10 leading-none select-none">
              &ldquo;
            </span>
            <p className="font-display text-2xl md:text-3xl leading-tight mb-8 relative z-10 text-left">
              I left with a one-page sales process I implemented the next week. My team&apos;s follow-up rate doubled in 30 days.
            </p>
            <div className="flex items-center gap-4 text-left">
               <div className="size-12 rounded-full bg-white/10 grid place-items-center font-display text-white/60">AP</div>
               <div>
                 <p className="font-semibold text-lg">Anjali Pawar</p>
                 <p className="text-sm text-white/50 uppercase tracking-wider font-mono">Founder, Pawar Engineering</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-24 px-6 bg-navy/5">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 border border-navy/5 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-display text-3xl mb-4 relative z-10">Can&apos;t make these dates?</h2>
          <p className="text-navy/60 mb-10 max-w-md mx-auto relative z-10">
            Join the waitlist and we&apos;ll notify you of the next workshop in your topic of interest.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="you@company.com" 
              className="flex-1 px-5 py-4 rounded-xl border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button type="submit" className="bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95">
              Join waitlist
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-center mb-12">Common questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-navy/70 mt-4 leading-relaxed pr-8 animate-fade-up [animation-duration:300ms]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
