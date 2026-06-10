import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem — NBBS",
  description: "Explore our integrated software solutions built for operators, by operators.",
};

import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "business-opd",
    phase: "01 / DIAGNOSIS",
    name: "Business OPD",
    tagline: "Diagnose before you prescribe.",
    problem: "Most SMB owners can feel something is off — but don't know where to start. Wrong diagnosis leads to expensive consulting and software that never sticks.",
    gets: ["Structured 30-min discovery call", "Operations leakage assessment", "Custom prescription roadmap", "Zero sales pressure"],
    forWho: "Owners who want clarity before committing to a solution.",
    proof: "50+ diagnostics delivered across Nashik"
  },
  {
    id: "bcw",
    phase: "02 / EDUCATION",
    name: "BCW Workshops",
    tagline: "Business Clarity Workshops for peer learning.",
    problem: "Books and YouTube don't get you to action. Generic MBAs don't speak to a Nashik manufacturing reality. You need frameworks that fit.",
    gets: ["Monthly small-cohort sessions", "Live case studies from local SMBs", "Implementation worksheets", "Peer accountability circle"],
    forWho: "Owners and leadership teams of 5–50 person businesses.",
    proof: "85% would recommend · 40% become clients"
  },
  {
    id: "nbbs-crm",
    phase: "03 / OPERATIONS",
    name: "NBBS CRM",
    tagline: "A CRM your team will actually use.",
    problem: "Enterprise CRMs are built for VPs of Sales, not for an Indian SMB founder who is also chief firefighter. So nobody updates it.",
    gets: ["Mobile-first for field teams", "WhatsApp + call log integration", "Hindi/Marathi labels", "Owner-grade dashboards"],
    forWho: "Sales-intensive teams of 5 to 50 reps.",
    proof: "Used daily by 30+ Nashik sales teams"
  },
  {
    id: "incentiwise",
    phase: "03 / OPERATIONS",
    name: "Incentiwise",
    tagline: "Commission tracking without the disputes.",
    problem: "Sales teams buried in spreadsheets. No visibility. Constant disputes over who earned what. Trust erodes.",
    gets: ["Any commission structure", "Live earnings dashboard for reps", "Audit trail for owners", "Payouts in one click"],
    forWho: "Field sales, distribution, and channel-led businesses.",
    proof: "30% reduction in commission disputes"
  },
  {
    id: "quotation",
    phase: "04 / OPTIMIZATION",
    name: "Quotation",
    tagline: "Professional proposals in minutes.",
    problem: "Your team is sending Word documents and PDFs that all look different. Pricing is inconsistent. Closing is slow.",
    gets: ["Branded proposal templates", "Approval workflows", "Standardized pricing logic", "Track opens & decisions"],
    forWho: "Project-based businesses: construction, decor, manufacturing.",
    proof: "50% faster quote turnaround"
  },
  {
    id: "cashflow",
    phase: "04 / OPTIMIZATION",
    name: "Cashflow",
    tagline: "Predict the gap before it happens.",
    problem: "You only learn about a cash crunch when the GST due date arrives. By then, options are expensive.",
    gets: ["13-week rolling forecast", "Bank + invoice integration", "What-if scenario planner", "Alerts for runway threats"],
    forWho: "Owners scaling past ₹1Cr revenue who need predictable liquidity.",
    proof: "Average 11 days earlier visibility on cash risk"
  }
];

export default function EcosystemPage() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl mb-6">The Ecosystem</h1>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-8 max-w-2xl mx-auto">
            Six products. One connected journey.
          </p>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
            From the first diagnostic conversation to a fully instrumented business, every NBBS product is built to extend the next. Start small. Compound.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {PRODUCTS.map(p => (
              <a 
                key={p.id} 
                href={`#${p.id}`} 
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <div className="max-w-7xl mx-auto py-24 px-6 space-y-32">
        {PRODUCTS.map((p, idx) => (
          <section key={p.id} id={p.id} className="scroll-mt-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-gold font-mono text-xs mb-4 block tracking-widest uppercase">
                  {p.phase}
                </span>
                <h2 className="font-display text-4xl mb-4">{p.name}</h2>
                <h3 className="text-xl text-navy/70 font-medium mb-10">{p.tagline}</h3>
                
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                    <h4 className="font-bold mb-3 uppercase text-sm tracking-wider text-navy/50">The Problem</h4>
                    <p className="text-navy/80 leading-relaxed">{p.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-navy/50">What you get</h4>
                    <ul className="space-y-3">
                      {p.gets.map((get, i) => (
                        <li key={i} className="flex items-start gap-3 text-navy/80">
                          <span className="text-gold mt-0.5">→</span>
                          {get}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy/5 p-10 rounded-3xl border border-navy/5">
                <div className="aspect-video bg-white rounded-xl shadow-md border border-navy/10 mb-10 flex items-center justify-center p-8">
                  {/* Mockup Placeholder */}
                  <div className="text-center space-y-4">
                    <div className="size-16 rounded-2xl bg-navy/10 mx-auto grid place-items-center">
                      <span className="text-2xl font-display text-navy/40">{p.name.charAt(0)}</span>
                    </div>
                    <p className="font-mono text-sm text-navy/40">{p.name} &middot; Preview</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold mb-2 uppercase text-sm tracking-wider text-navy/50">Who it&apos;s for</h4>
                    <p className="text-navy/80">{p.forWho}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 uppercase text-sm tracking-wider text-navy/50">Proof</h4>
                    <p className="text-gold font-medium">{p.proof}</p>
                  </div>
                  
                  <div className="pt-6 flex flex-wrap gap-4 border-t border-navy/10">
                    <Link href="/contact" className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all active:scale-95 text-center">
                      Book a demo
                    </Link>
                    {idx % 2 === 0 && (
                       <Link href="/workshops" className="bg-white border border-navy/10 px-6 py-3 rounded-lg font-semibold hover:bg-navy/5 transition-all text-center">
                         Join next workshop
                       </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
