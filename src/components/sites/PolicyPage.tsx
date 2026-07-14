import Link from "next/link";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  note?: string;
};

const POLICY_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund", label: "Refunds" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/intellectual-property", label: "IP" },
  { href: "/cookies", label: "Cookies" },
];

type PolicyPageProps = {
  title: string;
  description: string;
  effectiveDate?: string;
  sections: PolicySection[];
};

export function PolicyPage({
  title,
  description,
  effectiveDate = "June 7, 2026",
  sections,
}: PolicyPageProps) {
  return (
    <div className="flex flex-col flex-1 bg-paper text-navy font-sans">
      <section className="pt-24 pb-12 px-6 animate-fade-up">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-4">
            Website Policies
          </p>
          <h1 className="font-display text-4xl md:text-6xl mb-4">{title}</h1>
          <p className="text-navy/60 text-lg leading-relaxed mb-3">{description}</p>
          <p className="text-sm text-navy/40">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <nav className="px-6 pb-10 border-b border-navy/10">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-x-5 gap-y-2">
          {POLICY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy/50 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl md:text-3xl mb-5">
                {section.title}
              </h2>

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-navy/70 leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-gold">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="text-navy/70 leading-relaxed pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-navy/10 bg-white">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-navy/10 bg-navy/[0.03]">
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            className="px-5 py-3.5 font-semibold text-navy"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-navy/5 last:border-0"
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-5 py-3.5 text-navy/70"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.subsections?.map((sub, i) => (
                <div key={i} className="mt-8">
                  <h3 className="font-display text-xl mb-3 text-navy">
                    {sub.title}
                  </h3>
                  {sub.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className="text-navy/70 leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                  {sub.bullets && sub.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2.5 list-disc pl-5 marker:text-gold">
                      {sub.bullets.map((item, j) => (
                        <li
                          key={j}
                          className="text-navy/70 leading-relaxed pl-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.note && (
                <p className="mt-5 text-sm text-navy/50 leading-relaxed border-l-2 border-gold pl-4">
                  {section.note}
                </p>
              )}
            </section>
          ))}

          <div className="pt-8 border-t border-navy/10">
            <p className="text-sm text-navy/40 leading-relaxed">
              Questions about this policy?{" "}
              <a
                href="mailto:contact.nbbs@gmail.com"
                className="text-gold hover:underline"
              >
                contact.nbbs@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
