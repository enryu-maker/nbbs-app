import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselCard from '@/components/knowledge/CarouselCard';
import { getCarousels } from '@/src/apis';
import { SITE_URL } from '@/src/const/site.const';

export const metadata: Metadata = {
  title: 'Carousels',
  description:
    'Visual carousels and banner stories from NB Business Solutions — browse image slideshows from the Knowledge Hub.',
  alternates: { canonical: '/carousel' },
  openGraph: {
    title: 'Carousels | NB Business Solutions',
    description:
      'Visual carousels and banner stories from NB Business Solutions — browse image slideshows from the Knowledge Hub.',
    url: '/carousel',
    images: ['/opengraph-image'],
  },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Carousels',
  url: `${SITE_URL}/carousel`,
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: SITE_URL },
};

export const dynamic = 'force-dynamic';

export default async function CarouselPage() {
  const carousels = await getCarousels();

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
            Carousels
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#141a32]/70">
            Image slideshows and visual stories from NBBS — open any carousel to flip through the
            full set.
          </p>

          {carousels.length > 0 ? (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {carousels.map((carousel) => (
                <CarouselCard key={carousel.id} carousel={carousel} />
              ))}
            </div>
          ) : (
            <p className="mt-14 text-[15px] text-[#141a32]/60">No carousels published yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
