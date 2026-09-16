import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/knowledge/CaseStudyCard';
import { caseStudies } from '@/src/const/case-studies.const';
import { SITE_URL } from '@/src/const/site.const';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real MSME outcomes from NBBS engagements — commission clarity, quotation systems, cashflow rhythm, and CRM adoption.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | NB Business Solutions',
    description:
      'Real MSME outcomes from NBBS engagements — commission clarity, quotation systems, cashflow rhythm, and CRM adoption.',
    url: '/case-studies',
    images: ['/opengraph-image'],
  },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies',
  url: `${SITE_URL}/case-studies`,
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: SITE_URL },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] pt-20 text-[#141a32]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c0923e]">
            Knowledge Hub
          </p>
          <h1
            className="mt-4 text-[38px] font-medium leading-none md:text-[48px]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            Case Studies
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#141a32]/70">
            Results from operators who chose diagnosis before prescription — and shipped the
            operating changes that followed.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[#141a32] px-8 py-10 text-center text-white sm:px-12">
            <p
              className="text-[24px] font-medium sm:text-[28px]"
              style={{ fontFamily: 'Bodoni Moda, serif' }}
            >
              Want a result like these?
            </p>
            <p className="mx-auto mt-3 max-w-lg text-[14px] leading-6 text-white/60">
              Start with a free diagnostic. We will tell you honestly whether NBBS is the right fit.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-xl bg-[#e9c176] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32] transition hover:bg-[#ffdea5]"
            >
              Book Diagnostic
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
