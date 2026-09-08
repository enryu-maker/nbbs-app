'use client';
import { footerData } from '@/src/const';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Already on the home page: smooth-scroll up to the hero instead of
    // relying on Next.js's default (instant) hash jump. On any other page,
    // let the Link navigate there normally so it lands at the top.
    if (pathname === '/') {
      e.preventDefault();

      const homeSection = document.getElementById('home');
      const headerOffset = 80;
      const targetTop = homeSection
        ? homeSection.getBoundingClientRect().top + window.scrollY - headerOffset
        : 0;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-[#141a32] bg-[#141a32]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/#home"
              onClick={handleLogoClick}
              className="group flex w-fit cursor-pointer items-center gap-3"
              aria-label="NBBS Home"
            >
              <Image
                src="/nbbs-logo.webp"
                alt="NBBS Logo"
                width={50}
                height={30}
                className="object-contain brightness-0 invert"
                priority
              />
              <span className="font-display text-[24px] font-bold tracking-tight text-white">
                NBBS
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
              NBBS is a strategy and business solutions partner for ambitious MSMEs, helping them
              move from business diagnosis to practical execution with clarity, systems, and
              measurable results.
            </p>

            <p className="mt-6 text-xs text-slate-400">Nashik, Maharashtra · connect@nbbs.in</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {/* Solutions */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                  Solutions
                </h3>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/#service-01"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Business Clarity Workshop
                  </Link>

                  <Link
                    href="/#service-02"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    The Business OPD™
                  </Link>

                  <Link
                    href="/#service-03"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Incentiwise
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                  Company
                </h3>

                <div className="flex flex-col gap-4">
                  <Link
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    About Us
                  </Link>

                  <Link
                    href="#vision"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('vision')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Our Vision
                  </Link>

                  <Link
                    href="#mission"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('mission')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Our Mission
                  </Link>

                  <Link
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Services
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Contact
                </h3>

                <a
                  href={`https://www.google.com/maps/place/NB+Business+Solutions/@20.00577,73.768974,3a,75y,89.18h,90t/data=!3m7!1e1!3m5!1sfTWCNlzWH7mpZaUUCa-u8A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DfTWCNlzWH7mpZaUUCa-u8A%26yaw%3D89.17774!7i16384!8i8192!4m10!1m2!2m1!1snbbs+solution!3m6!1s0x3bddebece0e0085b:0x723bcd9f9798b5c3!8m2!3d20.0057655!4d73.7690401!15sCg1uYmJzIHNvbHV0aW9uWg8iDW5iYnMgc29sdXRpb26SAR5idXNpbmVzc19tYW5hZ2VtZW50X2NvbnN1bHRhbnTgAQA!16s%2Fg%2F11wpm7fbps?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D=${encodeURIComponent(
                    footerData.contact.location,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {footerData.contact.location}
                </a>

                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {footerData.contact.phone}
                </a>

                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {footerData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 NB Business Solutions, Nashik.</span>

            <div className="flex flex-wrap gap-3">
              <Link href="/disclaimer" className="transition-colors hover:text-white">
                Disclaimer
              </Link>

              <Link href="/intellectual-property" className="transition-colors hover:text-white">
                IP
              </Link>

              <Link href="/cookie-policy" className="transition-colors hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
