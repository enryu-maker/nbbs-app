import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-slate-400 py-12 border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand column */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-white font-semibold text-lg tracking-wider">NBBS</span>
            <p className="text-sm text-slate-400 max-w-sm mt-2">
              Serving the ambitious SMB community in Tier-2 India. Diagnosis before prescription. Results over hype.
            </p>
            <p className="text-sm text-slate-400">
              Nashik, Maharashtra &middot; <a href="mailto:hello@nbbs.in" className="text-slate-400 hover:text-gold transition-colors">hello@nbbs.in</a>
            </p>
          </div>

          {/* Links columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ecosystem#business-opd" className="hover:text-white transition-colors">Business OPD</Link></li>
                <li><Link href="/ecosystem#nbbs-crm" className="hover:text-white transition-colors">NBBS CRM</Link></li>
                <li><Link href="/ecosystem#incentiwise" className="hover:text-white transition-colors">Incentiwise</Link></li>
                <li><Link href="/ecosystem#quotation" className="hover:text-white transition-colors">Quotation</Link></li>
                <li><Link href="/ecosystem#cashflow" className="hover:text-white transition-colors">Cashflow</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/workshops" className="hover:text-white transition-colors">BCW Workshops</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Diagnostic</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>&copy; 2026 NB Business Solutions, Nashik</div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-gold transition-colors">Refunds</Link>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
            <Link href="/intellectual-property" className="hover:text-gold transition-colors">IP</Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
