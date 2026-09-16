import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCaseStudies, getCaseStudy } from '@/src/apis';
import { SITE_URL } from '@/src/const/site.const';

type Props = { params: Promise<{ slug: string }> };

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return { title: 'Case Study' };

  return {
    title: `${study.company} Case Study`,
    description: study.challenge,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.company} | Case Study | NB Business Solutions`,
      description: study.challenge,
      url: `/case-studies/${study.slug}`,
      images: ['/opengraph-image'],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.company} Case Study`,
    description: study.challenge,
    datePublished: study.publishedAt,
    url: `${SITE_URL}/case-studies/${study.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] pt-20 text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <Link
            href="/case-studies"
            className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32]/50 transition hover:text-[#c0923e]"
          >
            ← All case studies
          </Link>

          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c0923e]">
            {study.industry}
          </p>
          <h1
            className="mt-4 text-[34px] font-medium leading-tight sm:text-[44px]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            {study.company}
          </h1>
          <p className="mt-3 text-[13px] uppercase tracking-wider text-[#141a32]/45">
            {study.founder}
          </p>

          {study.results.length > 0 && (
            <div className="mt-12 grid grid-cols-2 gap-4 border-y border-[#141a32]/10 py-8 sm:grid-cols-3">
              {study.results.map((r) => (
                <div key={`${r.value}-${r.label}`} className="text-center">
                  <p
                    className="text-[28px] font-medium sm:text-[32px]"
                    style={{ fontFamily: 'Bodoni Moda, serif' }}
                  >
                    {r.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-[#141a32]/50 sm:text-[12px]">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 space-y-10 text-[15px] leading-7 text-[#141a32]/75">
            <section>
              <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c0923e]">
                Challenge
              </h2>
              {study.challengeHtml ? (
                <div
                  className="space-y-4 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: study.challengeHtml }}
                />
              ) : (
                <p>{study.challenge}</p>
              )}
            </section>
            <section>
              <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c0923e]">
                Solution
              </h2>
              {study.solutionHtml ? (
                <div
                  className="space-y-4 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: study.solutionHtml }}
                />
              ) : (
                <p>{study.solution}</p>
              )}
            </section>
            <section>
              <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#c0923e]">
                Approach
              </h2>
              {study.approachHtml ? (
                <div
                  className="space-y-4 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: study.approachHtml }}
                />
              ) : (
                <p>{study.approach}</p>
              )}
            </section>
          </div>

          {study.quote && (
            <blockquote className="relative mt-12 rounded-2xl bg-[#141a32] p-8 text-white sm:p-10">
            <p
              className="text-[22px] font-medium leading-snug sm:text-[26px]"
              style={{ fontFamily: 'Bodoni Moda, serif' }}
            >
              &ldquo;{study.quote}&rdquo;
            </p>
            <footer className="mt-6 text-[12px] uppercase tracking-wider text-white/50">
              {study.founder}
            </footer>
            </blockquote>
          )}

          <div className="mt-14 text-center">
            <Link
              href="/#contact"
              className="inline-block rounded-xl bg-[#141a32] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#141a32]/90"
            >
              Book Your Diagnostic
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
