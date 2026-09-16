import type { MetadataRoute } from 'next';
import { SITE_URL as siteUrl } from '@/src/const/site.const';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
