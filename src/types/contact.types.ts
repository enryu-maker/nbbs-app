export interface ContactUsPayload {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  business_sector: string;
  source_by: string;
  city: string;
  subject: string;
  message: string;
}

export interface ContactUsResponse {
  id?: number;
  detail?: string;
  message?: string;
}
