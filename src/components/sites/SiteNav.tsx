"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? "text-navy" : "";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-navy/5 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-display text-2xl tracking-tight font-bold text-navy">
                        NBBS
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-7 text-sm font-medium text-navy/60">
                    <Link href="/ecosystem" className={`hover:text-navy transition-colors ${isActive('/ecosystem')}`}>
                        Ecosystem
                    </Link>
                    <Link href="/workshops" className={`hover:text-navy transition-colors ${isActive('/workshops')}`}>
                        Workshops
                    </Link>
                    <Link href="/about" className={`hover:text-navy transition-colors ${isActive('/about')}`}>
                        About
                    </Link>
                    <Link href="/contact" className={`hover:text-navy transition-colors ${isActive('/contact')}`}>
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="text-sm font-semibold bg-navy text-paper px-4 md:px-5 py-2.5 rounded-full shadow-lg shadow-navy/10 hover:bg-navy/90 transition-all active:scale-95"
                    >
                        Book Diagnostic
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 -mr-2 text-navy"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-navy/10 shadow-xl py-4 px-6 flex flex-col gap-4 text-base font-medium">
                    <Link href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/ecosystem') || 'text-navy/70'}`}>Ecosystem</Link>
                    <Link href="/workshops" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/workshops') || 'text-navy/70'}`}>Workshops</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/about') || 'text-navy/70'}`}>About</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/contact') || 'text-navy/70'}`}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
