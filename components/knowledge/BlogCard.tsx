import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/src/types';

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const href = `/blog/${post.slug}`;

  if (featured) {
    return (
      <Link
        href={href}
        className="group block overflow-hidden rounded-3xl border border-[#141a32]/10 bg-white transition-shadow hover:shadow-lg"
      >
        {post.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#141a32]/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          </div>
        )}
        <div className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="text-[#c0923e]">{post.category}</span>
            {post.publishedAt && (
              <>
                <span className="text-[#141a32]/25">·</span>
                <span className="text-[#141a32]/45">{formatDate(post.publishedAt)}</span>
              </>
            )}
            <span className="text-[#141a32]/25">·</span>
            <span className="text-[#141a32]/45">{post.readingMinutes} min read</span>
          </div>
          <h2
            className="mt-5 text-[28px] font-medium leading-tight transition-colors group-hover:text-[#c0923e] sm:text-[36px]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            {post.title}
          </h2>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32]">
            Read article <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#141a32]/10 bg-white transition-shadow hover:shadow-lg"
    >
      {post.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141a32]/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-end bg-linear-to-br from-[#141a32] to-[#2a3358] p-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e9c176]">
            {post.category}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {post.image && (
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c0923e]">
            {post.category}
          </span>
        )}
        <h2
          className={`text-[20px] font-medium leading-snug transition-colors group-hover:text-[#c0923e] ${
            post.image ? 'mt-3' : 'mt-0'
          }`}
          style={{ fontFamily: 'Bodoni Moda, serif' }}
        >
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-[14px] leading-6 text-[#141a32]/65">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-[12px] text-[#141a32]/45">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingMinutes} min</span>
        </div>
      </div>
    </Link>
  );
}
