export interface ApiBlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  is_active?: boolean;
  image_url?: string | null;
  image?: string | null;
  cover_image?: string | null;
  blog_image?: string | null;
  thumbnail?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  /** Plain-text paragraphs (sample/fallback posts). */
  body: string[];
  /** HTML description from the API, when present. */
  htmlBody?: string;
  category: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  image?: string;
  isActive: boolean;
  featured?: boolean;
}
