export interface ApiCarouselImage {
  id: number;
  image_url: string;
  caption: string;
  order: number;
  created_at?: string;
  updated_at?: string;
}

/** Raw ERP `/api/carousels/` payload (list may include first_image/total_images). */
export interface ApiCarousel {
  id: number;
  title: string;
  description?: string | null;
  images?: ApiCarouselImage[];
  first_image?: ApiCarouselImage | null;
  total_images?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CarouselImage {
  id: number;
  url: string;
  caption: string;
  order: number;
}

/** UI model used by CarouselCard, CarouselViewer, listing + detail pages. */
export interface Carousel {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: CarouselImage[];
  coverImage?: string;
  publishedAt: string;
}
