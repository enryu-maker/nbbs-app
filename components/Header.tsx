'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

type NavItem = {
  label: string;
  href?: string;
  // Home-page section id: scrolls when we're on '/', links to the hash otherwise.
  scrollTo?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: 'About Us', scrollTo: 'about' },
  { label: 'Services', scrollTo: 'services' },
  {
    label: 'Knowledge Hub',
    children: [
      { label: 'Carousel', href: '/carousel' },
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', scrollTo: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';

  return (
    <header className="fixed   top-0 z-50 w-full  bg-white border-b border-[#e5e5e5] ">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        {onHome ? (
          <ScrollLink
            smooth={true}
            duration={700}
            offset={-80}
            to="home"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="NBBS Home"
          >
            <Image
              src="/nbbs-logo.webp"
              alt="NBBS Logo"
              width={50}
              height={30}
              className="object-contain"
              priority
            />

            <span className="font-display text-[24px] font-bold tracking-tight text-primary">
              NBBS
            </span>
          </ScrollLink>
        ) : (
          <Link href="/#home" className="flex items-center gap-3 group" aria-label="NBBS Home">
            <Image
              src="/nbbs-logo.webp"
              alt="NBBS Logo"
              width={50}
              height={30}
              className="object-contain"
              priority
            />

            <span className="font-display text-[24px] font-bold tracking-tight text-primary">
              NBBS
            </span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>

                <div className="invisible absolute left-0 top-full w-48 rounded-xl border border-[#e5e5e5] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-[14px] font-medium text-primary transition-colors hover:text-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.scrollTo && onHome ? (
              <ScrollLink
                key={item.label}
                to={item.scrollTo}
                smooth={true}
                duration={700}
                offset={-80}
                className="cursor-pointer text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? `/#${item.scrollTo}`}
                className={`text-[14px] font-medium transition-colors duration-300 hover:text-secondary ${
                  pathname === item.href
                    ? 'text-secondary underline underline-offset-4'
                    : 'text-primary'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="material-symbols-outlined text-[26px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* mobile hamburger */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 py-5 flex flex-col gap-2">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col">
                <span className="px-4 py-3 text-primary font-medium">{item.label}</span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-8 py-2 text-[14px] text-primary/80"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : item.scrollTo && onHome ? (
              <ScrollLink
                key={item.label}
                to={item.scrollTo}
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer px-4 py-3 text-primary"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? `/#${item.scrollTo}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
