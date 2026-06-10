import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Diagnostic — NBBS",
  description: "Schedule your free 30-minute business diagnostic session. Honest diagnosis, no pitch.",
};

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans min-h-screen">
      
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12 animate-fade-up">
            <div>
              <h1 className="font-display text-5xl md:text-6xl mb-6">Book a Diagnostic</h1>
              <p className="text-xl text-navy/70 mb-4 font-light">30 minutes. Honest diagnosis. Zero pitch.</p>
              <p className="text-navy/60 leading-relaxed">
                Tell us what&apos;s slowing you down. We&apos;ll respond within 2 business hours with a proposed time to talk.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-navy/10">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-navy/40">WhatsApp us</span>
                <a href="https://wa.me/919999999999" className="block text-navy font-semibold hover:text-gold transition-colors">
                  +91 99999 99999
                </a>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-navy/40">Call us</span>
                <a href="tel:+919999999999" className="block text-navy font-semibold hover:text-gold transition-colors">
                  Mon–Sat &middot; 10am–7pm IST
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
              <span className="text-gold font-mono text-xs mb-3 block tracking-widest uppercase">Social proof</span>
              <p className="text-navy/80 leading-relaxed font-medium">
                Join 50+ Nashik SMBs who started here. No pitch. Just an honest map of where you are and what to fix first.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-[40px] border border-navy/5 shadow-xl animate-fade-up [animation-delay:150ms]">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-navy">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-navy">Company</label>
                    <input 
                      id="company" 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-navy">Phone</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-navy">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-semibold text-navy">Business type</label>
                  <select 
                    id="type"
                    className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="distribution">Distribution</option>
                    <option value="services">Services</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="challenge" className="text-sm font-semibold text-navy">What&apos;s the biggest challenge you&apos;re facing?</label>
                  <textarea 
                    id="challenge" 
                    rows={4}
                    placeholder="E.g. Sales team isn't updating the CRM. Commission disputes every month."
                    className="w-full px-5 py-4 rounded-xl border border-navy/10 bg-paper focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-navy text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all active:scale-[0.99] shadow-lg shadow-navy/10"
                  >
                    Book Your Free 30-Min Diagnostic
                  </button>
                  <p className="text-center text-xs text-navy/40 mt-4 font-medium">
                    We&apos;ll confirm your slot within 2 business hours. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
