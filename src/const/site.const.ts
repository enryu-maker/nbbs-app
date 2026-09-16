// Single source of truth for the canonical host. The apex domain 308-redirects
// to www, so canonicals, the sitemap and robots.txt must all name www.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nbbs.in').replace(
  /\/$/,
  '',
);

export const SITE_NAME = 'NB Business Solutions';
