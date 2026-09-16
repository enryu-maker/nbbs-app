import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselViewer from '@/components/knowledge/CarouselViewer';
import { getCarousel } from '@/src/apis';
import { SITE_URL } from '@/src/const/site.const';

type Props = { params: Promise<{ slug: string }> };

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const carousel = await getCarousel(slug);
  if (!carousel) return { title: 'Carousel' };

  const metaDescription =
    carousel.description || `${carousel.title} — visual carousel from NB Business Solutions`;

  return {
    title: carousel.title,
    description: metaDescription,
    alternates: { canonical: `/carousel/${carousel.slug}` },
    openGraph: {
      title: `${carousel.title} | NB Business Solutions`,
      description: metaDescription,
      url: `/carousel/${carousel.slug}`,
      images: carousel.coverImage ? [carousel.coverImage] : ['/opengraph-image'],
    },
  };
}

export default async function CarouselDetailPage({ params }: Props) {
  const { slug } = await params;
  const carousel = await getCarousel(slug);
  if (!carousel) notFound();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: carousel.title,
    description: carousel.description || undefined,
    url: `${SITE_URL}/carousel/${carousel.slug}`,
    datePublished: carousel.publishedAt,
    image: carousel.images.map((img) => img.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] pt-20 text-[#141a32]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <Link
            href="/carousel"
            className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32]/50 transition hover:text-[#c0923e]"
          >
            ← All carousels
          </Link>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c0923e]">
                Carousel
              </p>
              <h1
                className="mt-4 text-[32px] font-medium leading-tight sm:text-[44px]"
                style={{ fontFamily: 'Bodoni Moda, serif' }}
              >
                {carousel.title}
              </h1>
              {carousel.description ? (
                <p className="mt-6 text-[15px] leading-7 text-[#141a32]/70 sm:text-[16px]">
                  {carousel.description}
                </p>
              ) : null}
            </div>

            <div className="flex justify-center lg:justify-end">
              <CarouselViewer carousel={carousel} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
