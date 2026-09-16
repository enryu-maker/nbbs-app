import type { Metadata } from 'next';
import { SITE_URL } from '@/src/const/site.const';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How NB Business Solutions collects, stores, uses, shares, and protects your personal and business information.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | NB Business Solutions',
    description:
      'How NB Business Solutions collects, stores, uses, shares, and protects your personal and business information.',
    url: '/privacy',
    type: 'website',
    images: ['/opengraph-image'],
  },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description:
    'How NB Business Solutions collects, stores, uses, shares, and protects your personal and business information.',
  url: `${SITE_URL}/privacy`,
  datePublished: '2026-08-04',
  dateModified: '2026-08-04',
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'NB Business Solutions', url: SITE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy` },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Effective Date: August 4, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              This Privacy Policy describes how NB Business Solutions (NBBS) collects, stores, uses,
              shares, and protects your personal and business information when you engage with NBBS,
              use our services, visit our websites, communicate with us, or use our products and
              platforms.
            </p>
            <p>
              NBBS is committed to protecting your information, keeping it confidential, and
              processing it with due care in accordance with the Digital Personal Data Protection
              Act, 2023 (India) and applicable privacy best practices.
            </p>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.1 Who We Are</h2>
              <p>
                NB Business Solutions (NBBS) is a business consulting and strategic management firm
                that works with MSMEs to help them move from chaos to clarity.
              </p>
              <p className="mt-3">
                NBBS provides business consulting, strategic support, business diagnosis,
                implementation support, technology-enabled business solutions, and other related
                services.
              </p>
              <p className="mt-3">
                We collect and process information that you voluntarily provide to us so that we can
                provide our services, manage our business relationship with you, improve our
                services, and meet applicable legal and regulatory requirements.
              </p>
              <p className="mt-3">
                This Privacy Policy outlines the information we collect, the reasons for collecting
                it, how we use and protect it, who we may share it with, how long we retain it, and
                the choices and rights available to you.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.2 What Data We Collect</h2>
              <p>
                Depending on how you interact with NBBS and the services you use, we may collect the
                following information.
              </p>

              <p className="mt-4 font-semibold text-[#141a32]">Personal Information</p>
              <p className="mt-2">This may include:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Mobile number</li>
                <li>Company or business name</li>
                <li>City</li>
                <li>Other business information voluntarily provided by you</li>
              </ul>

              <p className="mt-4 font-semibold text-[#141a32]">Booking &amp; Calendar Information</p>
              <p className="mt-2">
                For services that involve appointments or consultations, we may collect:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Date and time of booking</li>
                <li>Appointment status</li>
                <li>Rescheduling information</li>
                <li>Related scheduling information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.3 Why We Collect It</h2>
              <p>
                When you contact NB Business Solutions (NBBS) through our website, we may collect
                details such as your name, email address, mobile number, company or business name,
                city, and any other business information you choose to share.
              </p>
              <p className="mt-3">We collect this information to:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Respond to your enquiry or request.</li>
                <li>Understand your business and requirements.</li>
                <li>
                  Share relevant information about our services, consultations, workshops, or other
                  offerings you&rsquo;re interested in.
                </li>
                <li>Maintain records of enquiries and communications.</li>
                <li>Improve our services and website experience.</li>
              </ul>
              <p className="mt-3">
                We only ask for information that helps us understand and respond to your enquiry. Any
                additional business information you provide is voluntary and is used to better
                understand your needs and communicate with you appropriately.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.4 Who We Share It With</h2>

              <p className="font-semibold text-[#141a32]">Our Team</p>
              <p className="mt-2">
                Authorized NBBS employees may access relevant information where required to provide
                consulting, support, customer service, platform maintenance, administration, or other
                services.
              </p>

              <p className="mt-4 font-semibold text-[#141a32]">Trusted Service Providers</p>
              <p className="mt-2">We may use trusted providers that support:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Website hosting</li>
                <li>Cloud storage</li>
                <li>CRM and business software</li>
                <li>Payment processing</li>
                <li>Email communication</li>
                <li>WhatsApp communication</li>
                <li>Analytics</li>
                <li>Platform infrastructure</li>
                <li>Security and other technology services</li>
              </ul>
              <p className="mt-3">
                Your information is shared only where necessary for the relevant service or business
                purpose.
              </p>

              <p className="mt-4 font-semibold text-[#141a32]">Legal Authorities</p>
              <p className="mt-2">
                We may disclose information where required by applicable law, legal process, court
                order, regulatory requirement, or where necessary to protect our legal rights.
              </p>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.5 Your Rights Under Indian Privacy Law
              </h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023 (India), you have the right to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Ask for the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>
                  Request deletion of your personal information, where applicable and subject to
                  legal requirements.
                </li>
                <li>
                  Withdraw your consent for communications or processing based on consent.
                </li>
                <li>
                  Contact us regarding questions or concerns about your personal information.
                </li>
              </ul>
              <p className="mt-3">
                If you have a request regarding your information, you can contact us at{' '}
                <a href="mailto:connect@nbbs.in" className="underline">
                  connect@nbbs.in
                </a>
              </p>
              <p className="mt-3">
                We will review your request and aim to respond within 7 working days, in accordance
                with applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.6 Cookies &amp; Analytics</h2>
              <p>
                Our website may use cookies and analytics tools (such as Google Analytics) to
                understand how you use our site. This helps us improve user experience. You consent
                to this tracking when you visit our website. You can opt out via your browser
                settings or analytics opt-out tools.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.7 Changes to This Privacy Policy
              </h2>
              <p>
                NBBS may update this Privacy Policy from time to time to reflect changes in our
                services, technology, business practices, or applicable legal and regulatory
                requirements.
              </p>
              <p className="mt-3">
                Any updated version will be published on the relevant NBBS website or platform with a
                revised effective date.
              </p>
              <p className="mt-3">
                We encourage you to review this Privacy Policy periodically to remain informed about
                how we collect, use, and protect information.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.8 Contact Us</h2>
              <p>
                If you have questions, concerns, requests, or complaints regarding this Privacy
                Policy or the handling of your information, please contact us.
              </p>
              <p className="mt-3">
                NB Business Solutions (NBBS)
                <br />
                Email:{' '}
                <a href="mailto:connect@nbbs.in" className="underline">
                  connect@nbbs.in
                </a>
              </p>
              <p className="mt-3">
                We will review privacy-related requests in accordance with applicable law and our
                internal procedures and respond within 7 working days.
              </p>
            </section>

            <p className="pt-4 text-sm text-slate-500">
              NB Business Solutions (NBBS)
              <br />
              Strategy | Execution | Growth
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
