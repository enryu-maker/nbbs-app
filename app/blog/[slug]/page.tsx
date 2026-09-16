import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/knowledge/BlogCard';
import { getBlogPost, getBlogPosts } from '@/src/apis';
import { SITE_URL } from '@/src/const/site.const';

type Props = { params: Promise<{ slug: string }> };

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Blog' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | NB Business Solutions`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: post.image ? [post.image] : ['/opengraph-image'],
    },
  };
}

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const all = await getBlogPosts();
  const related = all.filter((p) => p.id !== post.id).slice(0, 3);

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.image ? { image: post.image } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] pt-20 text-[#141a32]">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <Link
            href="/blog"
            className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32]/50 transition hover:text-[#c0923e]"
          >
            ← All posts
          </Link>

          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c0923e]">
            {post.category}
          </p>
          <h1
            className="mt-4 text-[34px] font-medium leading-tight sm:text-[44px]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-[#141a32]/50">
            <span>{post.author}</span>
            {post.publishedAt && (
              <>
                <span>·</span>
                <span>{formatDate(post.publishedAt)}</span>
              </>
            )}
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          {post.image && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-[#141a32]/10 bg-[#141a32]/5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}

          {post.htmlBody ? (
            <div
              className="blog-content mt-12 text-[16px] leading-8 text-[#141a32]/80 [&_a]:text-[#c0923e] [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:text-[#141a32] [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-[18px] [&_h3]:font-semibold [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: post.htmlBody }}
            />
          ) : (
            <div className="mt-12 space-y-6 text-[16px] leading-8 text-[#141a32]/80">
              {post.body.map((paragraph, i) => (
                <p key={`${post.id}-${i}`}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="mt-14 rounded-2xl border border-[#141a32]/10 bg-white p-8 text-center">
            <p className="text-[22px] font-medium" style={{ fontFamily: 'Bodoni Moda, serif' }}>
              Want this applied to your business?
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-block rounded-xl bg-[#141a32] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#141a32]/90"
            >
              Book Diagnostic
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-[#141a32]/10 bg-white/50 py-16">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
              <h2 className="text-[24px] font-medium" style={{ fontFamily: 'Bodoni Moda, serif' }}>
                Related reading
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
