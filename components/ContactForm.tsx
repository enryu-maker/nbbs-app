'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'business', label: 'Business Name', type: 'text', required: true },
  { name: 'city', label: 'City', type: 'text', required: false },
] as const;

const SELECTS = [
  {
    name: 'industry',
    label: 'Industry Sector',
    placeholder: 'Select your sector',
    options: [
      'Agriculture',
      'Manufacturing',
      'Retail',
      'Technology',
      'Healthcare',
      'Education',
      'Finance',
      'Hospitality',
      'Other',
    ],
  },
  {
    name: 'source',
    label: 'How did you know about us?',
    placeholder: 'Select an option',
    options: [
      'Social Media',
      'Website',
      'Friend / Colleague',
      'Email Newsletter',
      'Previous Event',
      'Other',
    ],
  },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // ponytail: no enquiry endpoint on the backend yet, so this opens the visitor's
  // mail client with everything filled in. Swap for a POST once /api/nbbs/enquiries/ exists.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const body = [
      ...[...FIELDS, ...SELECTS].map((f) => `${f.label}: ${data.get(f.name) || '-'}`),
      '',
      `Message:\n${data.get('message') || '-'}`,
    ].join('\n');

    window.location.href = `mailto:connect@nbbs.in?subject=${encodeURIComponent(
      `Website enquiry — ${data.get('name')}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const inputClass =
    'w-full rounded-xl border border-[#141a32]/15 bg-white px-4 py-3 text-[15px] text-[#141a32] outline-none transition-colors placeholder:text-[#141a32]/40 focus:border-[#c0923e]';

  return (
    <div className="mt-14 border-t border-[#141a32]/10 pt-12">
      <h2
        className="mb-2 text-[30px] font-medium leading-none md:text-[38px]"
        style={{ fontFamily: 'Bodoni Moda, serif' }}
      >
        Send us a message
      </h2>

      <p className="mb-8 text-[14px] text-[#141a32]/60">
        Share a few details and we&apos;ll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#141a32]/70">
              {field.label}
              {field.required && <span className="text-[#c0923e]"> *</span>}
            </span>

            <input
              type={field.type}
              name={field.name}
              required={field.required}
              autoComplete="off"
              className={inputClass}
            />
          </label>
        ))}

        {SELECTS.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#141a32]/70">
              {field.label}
              <span className="text-[#c0923e]"> *</span>
            </span>

            <select name={field.name} required defaultValue="" className={inputClass}>
              <option value="" disabled>
                {field.placeholder}
              </option>

              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#141a32]/70">
            Your Message
          </span>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us how we can help you"
            className={`${inputClass} resize-y`}
          />
        </label>

        <div className="flex items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            className="group flex items-center gap-2 rounded-xl bg-[#141a32] px-7 py-4 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c0923e] hover:text-[#141a32]"
          >
            Send Message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {sent && (
            <p className="text-[13px] text-[#141a32]/70" role="status">
              Your email draft is ready — hit send in your mail app.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
