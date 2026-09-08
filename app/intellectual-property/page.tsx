import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Intellectual Property Policy',
  description:
    'How NBBS intellectual property, frameworks, and materials may and may not be used by clients.',
  alternates: { canonical: '/intellectual-property' },
  openGraph: {
    title: 'Intellectual Property Policy | NB Business Solutions',
    description:
      'How NBBS intellectual property, frameworks, and materials may and may not be used by clients.',
    url: '/intellectual-property',
    type: 'website',
  },
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Intellectual Property Policy',
  description:
    'How NBBS intellectual property, frameworks, and materials may and may not be used by clients.',
  url: 'https://nbbs.in/intellectual-property',
  datePublished: '2026-09-07',
  dateModified: '2026-09-07',
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: 'https://nbbs.in' },
  publisher: { '@type': 'Organization', name: 'NB Business Solutions', url: 'https://nbbs.in' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nbbs.in' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Intellectual Property',
        item: 'https://nbbs.in/intellectual-property',
      },
    ],
  },
};

export default function IntellectualPropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Intellectual Property (IP)
          </h1>
          <p className="mt-2 text-sm text-slate-500">Effective Date: September 7, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              At NBBS, we create our own business frameworks, tools, processes, reports, training
              materials, and other resources to help businesses make better decisions and take
              meaningful action.
            </p>
            <p>
              We want you to use what we provide to improve your business, while also respecting the
              work and intellectual property that goes into creating it.
            </p>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.1 What Belongs to NBBS
              </h2>
              <p>
                Unless specifically agreed otherwise in writing, the frameworks, methodologies,
                processes, tools, templates, reports, training materials, presentations, content,
                designs, systems, and other original materials created or developed by NB Business
                Solutions (NBBS) remain the intellectual property of NBBS.
              </p>
              <p className="mt-3">This includes:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Business and diagnostic frameworks</li>
                <li>Consulting methodologies and processes</li>
                <li>Reports, templates, worksheets, and action plans</li>
                <li>Training and workshop materials</li>
                <li>Proprietary tools, systems, and resources</li>
                <li>Website content, graphics, designs, videos, and other original content</li>
                <li>NBBS&rsquo;s name, logo, trademarks, and brand assets</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.2 How You Can Use Our Materials
              </h2>
              <p>
                When we provide materials specifically for your business, you are welcome to use
                them for your own internal business purposes.
              </p>
              <p className="mt-3">
                You may share relevant materials with your employees, directors, partners, or
                professional advisors when needed to implement the recommendations or work within
                your business.
              </p>
              <p className="mt-3">
                The intention is simple: use what we create to build and improve your business.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">2.3 What You Cannot Do</h2>
              <p>
                Our materials are created for your use, but they cannot be copied or commercially
                reused as someone else&rsquo;s work.
              </p>
              <p className="mt-3">Without our prior written permission, you may not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Copy or reproduce our proprietary frameworks, reports, tools, or materials for
                  commercial use
                </li>
                <li>Resell, distribute, license, or commercially exploit our materials</li>
                <li>Repackage our frameworks or methodologies and present them as your own</li>
                <li>
                  Use our materials to provide competing consulting, training, or commercial
                  services
                </li>
                <li>Publish or distribute our proprietary content publicly</li>
                <li>Remove ownership, copyright, or trademark notices</li>
                <li>
                  Use the NBBS name, logo, or branding in a way that suggests an endorsement,
                  partnership, or affiliation that does not exist
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.4 Your Content &amp; Information
              </h2>
              <p>Your business remains yours.</p>
              <p className="mt-3">
                Any information, documents, data, branding, intellectual property, or other
                materials that you provide to NBBS remain your property.
              </p>
              <p className="mt-3">
                You give NBBS permission to use such information only as reasonably required to
                provide the agreed services.
              </p>
              <p className="mt-3">
                Similarly, using our recommendations or learning from our consulting does not mean
                that you are prohibited from using your own business knowledge, experience, skills,
                or general learnings in running your business.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">2.5 Website Content</h2>
              <p>
                The content available on the NBBS website, including written content, graphics,
                designs, videos, documents, illustrations, and other original material, belongs to
                NBBS or its respective owners.
              </p>
              <p className="mt-3">
                You may view and use the website for its intended purpose, but please do not copy,
                reproduce, republish, or commercially use our content without our permission.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.6 Third-Party Materials
              </h2>
              <p>
                Some software, platforms, images, technologies, trademarks, or other materials used
                by NBBS may belong to third parties.
              </p>
              <p className="mt-3">
                Those materials remain subject to the intellectual property rights and terms of
                their respective owners.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.7 Recording and Reproduction
              </h2>
              <p>
                Our consultations, workshops, training sessions, presentations, demonstrations, and
                other engagements may contain proprietary information, frameworks, and materials.
              </p>
              <p className="mt-3">
                Unless we have given you permission in writing, please do not record, reproduce,
                publish, or distribute these sessions or materials, whether through audio, video,
                photographs, screenshots or any other method.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.8 If Our Intellectual Property Is Misused
              </h2>
              <p>We would always prefer to resolve an issue directly and professionally.</p>
              <p className="mt-3">
                If our intellectual property is used without permission, NBBS may request that the
                unauthorised use be stopped or the material be removed.
              </p>
              <p className="mt-3">
                Where necessary, we may also suspend access to our services or take appropriate
                legal action available to us under applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.9 Ownership Remains With NBBS
              </h2>
              <p>
                Paying for an NBBS service gives you the right to use the deliverables provided to
                you for the agreed purpose. It does not transfer ownership of NBBS&rsquo;s
                underlying frameworks, methodologies, systems, tools, or intellectual property.
              </p>
              <p className="mt-3">
                Unless a separate written agreement says otherwise, the intellectual property
                created by NBBS remains with NBBS.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                2.10 Breach of Intellectual Property Rights
              </h2>
              <p>If these terms are violated, we may:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Ask to have the unauthorized use removed immediately.</li>
                <li>Suspend or deny future services.</li>
                <li>Take necessary legal action to protect our intellectual property.</li>
              </ul>
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
