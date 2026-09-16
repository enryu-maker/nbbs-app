'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { isApiError, submitContactUs } from '@/src/apis';
import type { ContactUsPayload } from '@/src/types';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'business_name', label: 'Business Name', type: 'text', required: true },
  { name: 'city', label: 'City', type: 'text', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
] as const;

const SELECTS = [
  {
    name: 'business_sector',
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
    name: 'source_by',
    label: 'How did you know about us?',
    placeholder: 'Select an option',
    options: [
      'Google Search',
      'Social Media',
      'Website',
      'Friend / Colleague',
      'Email Newsletter',
      'Previous Event',
      'Other',
    ],
  },
] as const;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload: ContactUsPayload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      business_name: String(data.get('business_name') || '').trim(),
      business_sector: String(data.get('business_sector') || '').trim(),
      source_by: String(data.get('source_by') || '').trim(),
      city: String(data.get('city') || '').trim(),
      subject: String(data.get('subject') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };

    try {
      await submitContactUs(payload);
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        isApiError(error)
          ? error.message
          : 'Something went wrong. Please try again or email connect@nbbs.in.',
      );
    }
  };

  const inputClass =
    'w-full rounded-xl border border-[#141a32]/15 bg-white px-4 py-3 text-[15px] text-[#141a32] outline-none transition-colors placeholder:text-[#141a32]/40 focus:border-[#c0923e] disabled:opacity-60';

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
              disabled={status === 'submitting'}
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

            <select
              name={field.name}
              required
              defaultValue=""
              disabled={status === 'submitting'}
              className={inputClass}
            >
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
            <span className="text-[#c0923e]"> *</span>
          </span>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us how we can help you"
            disabled={status === 'submitting'}
            className={`${inputClass} resize-y`}
          />
        </label>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group flex items-center gap-2 rounded-xl bg-[#141a32] px-7 py-4 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c0923e] hover:text-[#141a32] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {status === 'success' && (
            <p className="text-[13px] text-[#1B4D3E]" role="status">
              Thanks — your message was sent. We&apos;ll get back to you shortly.
            </p>
          )}

          {status === 'error' && (
            <p className="text-[13px] text-[#a33b2b]" role="alert">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
