import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Consulting Disclaimer & Limitation of Liability',
  description:
    'Disclaimer covering the nature of NBBS consulting services, limitation of liability, and client responsibilities.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbf9f8] text-[#141a32]">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Consulting Disclaimer &amp; Limitation of Liability
          </h1>
          <p className="mt-2 text-sm text-slate-500">Effective Date: September 7, 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              This disclaimer applies to the consulting, advisory, strategic, educational,
              implementation support, and other business services provided by NB Business
              Solutions (&ldquo;NBBS&rdquo;).
            </p>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.1 Nature of Our Services
              </h2>
              <p>
                NBBS offers business consulting and advisory services to assist business owners
                and management teams in gaining clarity, identifying opportunities, solving
                business problems and making more informed decisions.
              </p>
              <p className="mt-3">
                Our recommendations, strategies, frameworks, reports, action plans, workshops,
                tools and other resources are for business guidance and decision support purposes.
              </p>
              <p className="mt-3">
                The nature and scope of services may vary depending on the engagement or service
                chosen by the client.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.2 No Guarantee of Results
              </h2>
              <p>
                NBBS aims to provide practical, relevant, and actionable recommendations based on
                the information and circumstances available to us.
              </p>
              <p className="mt-3">
                However, NBBS does not guarantee any specific business or financial outcome. This
                includes, but is not limited to, increases in revenue, profitability, sales,
                leads, customers, funding, business growth, operational efficiency, cost savings,
                or achievement of business targets.
              </p>
              <p className="mt-3">
                Business outcomes depend on several factors, including implementation, management
                decisions, available resources, employee performance, market conditions, customer
                behaviour, competition, economic conditions, and other factors beyond NBBS&rsquo;s
                control.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.3 Information Provided by the Client
              </h2>
              <p>
                Our analysis and recommendations may be based on information, data, documents,
                statements, and business context provided by the client.
              </p>
              <p className="mt-3">
                The client is responsible for ensuring that the information provided to NBBS is
                accurate, complete, current, and not misleading.
              </p>
              <p className="mt-3">
                NBBS shall not be responsible for recommendations or outcomes materially affected
                by inaccurate, incomplete, outdated, or withheld information.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.4 Professional Advice</h2>
              <p>
                Unless expressly stated otherwise, NBBS&rsquo;s services are not a substitute for
                legal, tax, accounting, audit, investment, financial, insurance, or other
                regulated professional advice.
              </p>
              <p className="mt-3">
                Where a business matter requires specialised professional advice, clients should
                consult an appropriately qualified professional before making or implementing a
                decision.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.5 Client Responsibility</h2>
              <p>
                The client remains responsible for evaluating, approving, implementing, modifying,
                or rejecting any recommendation provided by NBBS.
              </p>
              <p className="mt-3">
                All business decisions and actions taken by the client are made at the
                client&rsquo;s own discretion and responsibility.
              </p>
              <p className="mt-3">
                NBBS does not control the client&rsquo;s business operations, management
                decisions, employees, finances, customers, vendors, or implementation of
                recommendations.
              </p>
              <p className="mt-3">
                Accordingly, NBBS shall not be responsible for the consequences of decisions taken
                or not taken by the client.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.6 Third-Party Products and Services
              </h2>
              <p>
                Where NBBS recommends, refers to, or integrates third-party products, platforms,
                software, service providers, or other external solutions, NBBS does not guarantee
                their availability, performance, accuracy, security, suitability, or continued
                operation.
              </p>
              <p className="mt-3">
                The client&rsquo;s use of any third-party product or service is subject to the
                applicable third party&rsquo;s own terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.7 Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, NB Business Solutions (NBBS)
                shall not be liable for any indirect, incidental, special, consequential, or other
                losses arising from or relating to the use of, reliance upon, or inability to use
                NBBS&rsquo;s services, recommendations, reports, tools, or resources.
              </p>
              <p className="mt-3">
                This may include loss of profits, revenue, business opportunities, anticipated
                savings, goodwill, reputation, customers, contracts, or data.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, the total liability of NBBS
                arising from a specific paid engagement shall not exceed the actual amount paid by
                the client to NBBS for that engagement.
              </p>
              <p className="mt-3">
                Nothing in this disclaimer shall exclude or limit liability to the extent that
                such exclusion or limitation is not permitted under applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">1.8 No Partnership or Agency</h2>
              <p>
                Unless expressly agreed otherwise in writing, engaging NBBS does not create a
                partnership, joint venture, employment, agency, fiduciary, or similar relationship
                between NBBS and the client.
              </p>
              <p className="mt-3">
                The client remains responsible for its own business, operations, personnel,
                finances, and decisions.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.9 Changes in Business Conditions
              </h2>
              <p>
                All business decisions, actions, and outcomes you make and execute or endure as an
                outcome of our recommendations are your responsibility. Any advice or strategies
                are at your discretion.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.10 Acceptance of Disclaimer
              </h2>
              <p>By engaging with NBBS or using its services, resources, tools, or recommendations, you acknowledge that:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>NBBS provides business guidance and advisory support;</li>
                <li>Recommendations are based on information and circumstances available at the time;</li>
                <li>business decisions and implementation remain the client&rsquo;s responsibility; and</li>
                <li>NBBS does not guarantee any specific business, financial, or commercial outcome.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-[#141a32]">
                1.11 Changes to This Disclaimer
              </h2>
              <p>
                We may update this disclaimer from time to time to reflect changes in our services
                or legal requirements. The latest version will always be available on our website.
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
