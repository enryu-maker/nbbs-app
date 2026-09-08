import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie & Analytics Policy',
  description: 'How NBBS uses cookies and Google Analytics on this website, and your consent options.',
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Cookie &amp; Analytics Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Effective Date: September 7, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">3.1 What is a cookie?</h2>
              <p>
                Cookies are small text files that are stored on your browser and enable us to
                understand how you use our website. They assist us to remember your preferences
                and enhance your experience.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                3.2 What kind of cookies do we use
              </h2>
              <p className="font-semibold text-[#141a32]">Necessary Cookies:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>These are required for the website to function (e.g., session management, security)</li>
                <li>You can&rsquo;t opt out of these.</li>
              </ul>
              <p className="mt-4 font-semibold text-[#141a32]">Analytics Cookies:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  We use Google Analytics to track how visitors use our website (pages visited,
                  time spent, traffic sources).
                </li>
                <li>This data helps us improve content and customer satisfaction</li>
                <li>No personal information is collected through analytics cookies</li>
                <li>The data from Google Analytics is anonymized.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">3.3 Your Consent</h2>
              <p>Analytics tracking is enabled when you use our website. You may:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Adjust your browser settings for Do Not Track</li>
                <li>
                  Turn off Google Analytics using the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>Clear your browser&rsquo;s cookies at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">3.4 Third-Party Sharing</h2>
              <p>
                Google Analytics data is shared with Google. Check Google&rsquo;s Privacy Policy to
                find information about how they collect and process data.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">3.5 Changes to This Policy</h2>
              <p>
                The analytical tools in use by us may be changing, and this policy will be updated
                accordingly. Material changes will be communicated by email and/or website
                updates.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">Contact</h2>
              <p>
                For questions:{' '}
                <a href="mailto:connect@nbbs.in" className="underline">
                  connect@nbbs.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
