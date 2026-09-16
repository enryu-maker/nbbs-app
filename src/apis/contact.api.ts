import { apiClient } from './client.api';
import { CONTACT_US_ENDPOINT } from '@/src/const';
import type { ContactUsPayload, ContactUsResponse } from '@/src/types';

/**
 * Submit the website contact form.
 * POST /api/nbbs/contact-us/
 */
export async function submitContactUs(payload: ContactUsPayload): Promise<ContactUsResponse> {
  return apiClient<ContactUsResponse>(CONTACT_US_ENDPOINT, {
    method: 'POST',
    data: payload,
  });
}
