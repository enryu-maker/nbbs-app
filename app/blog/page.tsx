import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/knowledge/BlogCard';
import { getBlogPosts } from '@/src/apis';
import { SITE_URL } from '@/src/const/site.const';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Essays and operating notes for MSME founders — growth ceilings, sales ops, cashflow habits, and diagnosis-first thinking.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | NB Business Solutions',
    description:
      'Essays and operating notes for MSME founders — growth ceilings, sales ops, cashflow habits, and diagnosis-first thinking.',
    url: '/blog',
    images: ['/opengraph-image'],
  },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'NBBS Blog',
  url: `${SITE_URL}/blog`,
  publisher: { '@type': 'Organization', name: 'NB Business Solutions', url: SITE_URL },
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : [];
  const categories = [...new Set(posts.map((p) => p.category))];

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
            Blog
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#141a32]/70">
            Operating notes for founders who want clarity before tools — and results over hype.
          </p>

          {categories.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-[#141a32]/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#141a32]/60"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {featured ? (
            <>
              <div className="mt-12">
                <BlogCard post={featured} featured />
              </div>
              {rest.length > 0 && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="mt-12 text-[15px] text-[#141a32]/60">No blog posts published yet.</p>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
