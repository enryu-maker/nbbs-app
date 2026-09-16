export interface ApiCarouselImage {
  id: number;
  image_url: string;
  caption: string;
  order: number;
  created_at?: string;
  updated_at?: string;
}

export interface ApiCarousel {
  id: number;
  title: string;
  images: ApiCarouselImage[];
  created_at?: string;
  updated_at?: string;
}

export interface CarouselImage {
  id: number;
  url: string;
  caption: string;
  order: number;
}

export interface Carousel {
  id: number;
  slug: string;
  title: string;
  images: CarouselImage[];
  coverImage?: string;
  publishedAt: string;
}
