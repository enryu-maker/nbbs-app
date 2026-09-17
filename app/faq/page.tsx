import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqs } from '@/src/const/faq.const';
import { SITE_URL } from '@/src/const/site.const';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers about the Business OPD™, the Business Clarity Workshop, pricing and how NBBS works with MSME founders in Nashik.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | NB Business Solutions',
    description:
      'Answers about the Business OPD™, the Business Clarity Workshop, pricing and how NBBS works with MSME founders in Nashik.',
    url: '/faq',
    images: ['/opengraph-image'],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <main className="min-h-screen bg-[#fbf9f8] pt-20 text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c0923e]">
            Frequently Asked Questions
          </p>

          <h1
            className="mt-4 text-[38px] font-medium leading-none md:text-[48px]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            Questions founders ask us
          </h1>
          <div className="mt-12 divide-y divide-[#141a32]/10 border-t border-[#141a32]/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h2 className="text-[17px] font-semibold leading-7 sm:text-[19px]">
                    {faq.question}
                  </h2>

                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[#c0923e] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#141a32]/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#141a32]/10 bg-white p-8">
            <h2 className="text-[20px] font-semibold">Still have a question?</h2>

            <p className="mt-2 text-[15px] leading-7 text-[#141a32]/70">
              Call +91 9145789151, email connect@nbbs.in, or send us the details and we&apos;ll get
              back to you.
            </p>

            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-xl bg-[#141a32] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c0923e] hover:text-[#141a32]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
