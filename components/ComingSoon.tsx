import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbf9f8] px-6 pt-20 text-center text-[#141a32]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c5a059]">{title}</p>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Coming soon
        </h1>

        <p className="mt-4 max-w-md text-sm text-[#141a32]/70">
          We&apos;re putting this together. Check back shortly.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-xl bg-[#141a32] px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#141a32]/90"
        >
          Back to home
        </Link>
      </main>

      <Footer />
    </>
  );
}
