import type { MetadataRoute } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://nbbs.in').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/contacts'];
  const legalRoutes = ['/disclaimer', '/intellectual-property', '/cookie-policy'];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...legalRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date('2026-09-07'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
