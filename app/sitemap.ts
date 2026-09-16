import type { MetadataRoute } from 'next';
import { SITE_URL as siteUrl } from '@/src/const/site.const';
import { getBlogPosts, getCarousels, getCaseStudies } from '@/src/apis';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/about', '/services', '/faq', '/carousel', '/blog', '/case-studies'];
  const legalRoutes = ['/privacy', '/disclaimer', '/intellectual-property', '/cookie-policy'];

  const [blogPosts, carousels, caseStudies] = await Promise.all([
    getBlogPosts(),
    getCarousels(),
    getCaseStudies(),
  ]);

  const knowledgeDetailRoutes = [
    ...carousels.map((c) => `/carousel/${c.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...knowledgeDetailRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...legalRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date('2026-09-07'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
