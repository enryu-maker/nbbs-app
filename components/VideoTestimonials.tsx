'use client';

import { videoTestimonials } from '@/lib/video-testimonials';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const THUMB_SEEK_SECONDS = 1.5;

function capturePoster(video: HTMLVideoElement): string | null {
  if (!video.videoWidth || !video.videoHeight) {
    return null;
  }

  try {
    const canvas = document.createElement('canvas');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');

    if (!ctx) return null;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/jpeg', 0.75);
  } catch {
    return null;
  }
}

interface VideoReelCardProps {
  src: string;
  label: string;
  isActive: boolean;
  onPlay: () => void;
  onEnded: () => void;
}

function VideoReelCard({ src, label, isActive, onPlay, onEnded }: VideoReelCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const thumbTimeRef = useRef<number>(THUMB_SEEK_SECONDS);

  const [poster, setPoster] = useState<string | null>(null);

  const [thumbReady, setThumbReady] = useState<boolean>(false);

  /*
   * Create video thumbnail
   */
  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;

    if (!card || !video || poster) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        const prepareThumbnail = () => {
          const target = Math.min(
            THUMB_SEEK_SECONDS,
            Math.max(0.5, (video.duration || THUMB_SEEK_SECONDS) * 0.12),
          );

          thumbTimeRef.current = target;

          const onSeeked = () => {
            const dataUrl = capturePoster(video);

            if (dataUrl) {
              setPoster(dataUrl);
            }

            setThumbReady(true);

            video.pause();

            video.removeEventListener('seeked', onSeeked);
          };

          video.addEventListener('seeked', onSeeked);

          video.currentTime = target;
        };

        if (video.readyState >= 1) {
          prepareThumbnail();
        } else {
          video.preload = 'auto';

          video.addEventListener('loadedmetadata', prepareThumbnail, { once: true });

          video.load();
        }

        observer.disconnect();
      },
      {
        rootMargin: '120px',
      },
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [poster]);

  /*
   * Play / pause video
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      video.muted = false;
      video.currentTime = 0;

      void video.play().catch(() => {});

      return;
    }

    video.muted = true;
    video.pause();
    video.currentTime = thumbTimeRef.current;
  }, [isActive]);

  const showPoster = !isActive && Boolean(poster);

  return (
    <article
      ref={cardRef}
      className={`video-reel-card${isActive ? ' is-playing' : ''}${
        thumbReady || poster ? ' has-thumb' : ''
      }`}
    >
      <div className="video-reel-media">
        {showPoster && <img src={poster} alt="" className="video-reel-poster" aria-hidden />}

        <video
          ref={videoRef}
          src={src}
          playsInline
          muted
          preload="none"
          controls={isActive}
          className={showPoster ? 'video-reel-video--hidden' : undefined}
          onEnded={onEnded}
        />

        <div className="video-reel-shade" aria-hidden />

        {!isActive && (
          <button
            type="button"
            className="video-reel-play"
            aria-label={`Play ${label} testimonial`}
            onClick={onPlay}
          >
            <span className="video-reel-play-ring" aria-hidden />

            <span className="video-reel-play-btn">
              <Play size={22} strokeWidth={2} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </article>
  );
}

export function VideoTestimonials() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  const realCount = videoTestimonials.length;

  /*
   * We render 5 copies.
   *
   * This gives enough cards on both sides
   * so the carousel can continuously move.
   *
   * Example:
   *
   * 1 2 3 4 5 6
   * 1 2 3 4 5 6
   * 1 2 3 4 5 6
   * 1 2 3 4 5 6
   * 1 2 3 4 5 6
   */
  const loopItems =
    realCount > 0
      ? Array.from({ length: 5 }, (_, copyIndex) =>
          videoTestimonials.map((item, itemIndex) => ({
            ...item,
            renderKey: `${copyIndex}-${item.id}-${itemIndex}`,
          })),
        ).flat()
      : [];

  /*
   * Start from the center copy.
   *
   * Copy #2 starts at:
   *
   * realCount * 2
   */
  const middleStart = realCount * 2;

  const currentIndexRef = useRef<number>(middleStart);

  const isAnimatingRef = useRef<boolean>(false);

  /*
   * Get all cards
   */
  const getCards = useCallback((): HTMLElement[] => {
    const track = trackRef.current;

    if (!track) return [];

    return Array.from(track.querySelectorAll<HTMLElement>('.video-reel-card'));
  }, []);

  /*
   * Calculate exact centered position
   */
  const getCardScrollLeft = useCallback(
    (index: number): number | null => {
      const track = trackRef.current;

      if (!track) return null;

      const cards = getCards();
      const card = cards[index];

      if (!card) return null;

      const trackRect = track.getBoundingClientRect();

      const cardRect = card.getBoundingClientRect();

      return (
        track.scrollLeft +
        (cardRect.left - trackRect.left) -
        (track.clientWidth - cardRect.width) / 2
      );
    },
    [getCards],
  );

  /*
   * Move to a particular card
   */
  const moveToCard = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const track = trackRef.current;

      if (!track) return;

      const scrollLeft = getCardScrollLeft(index);

      if (scrollLeft === null) {
        return;
      }

      track.scrollTo({
        left: scrollLeft,
        behavior,
      });

      currentIndexRef.current = index;
    },
    [getCardScrollLeft],
  );

  /*
   * Infinite carousel navigation
   */
  const scrollReels = useCallback(
    (direction: 'left' | 'right') => {
      if (realCount <= 1) {
        return;
      }

      /*
       * Prevent a second click from interrupting
       * the current slide animation.
       */
      if (isAnimatingRef.current) {
        return;
      }

      const current = currentIndexRef.current;

      const next = direction === 'right' ? current + 1 : current - 1;

      const cards = getCards();

      if (!cards[next]) {
        return;
      }

      isAnimatingRef.current = true;

      /*
       * IMPORTANT:
       *
       * We FIRST visually move to the next
       * physical card.
       *
       * So:
       *
       * 6 → 1
       *
       * actually slides to the next "1"
       * that is physically sitting after 6.
       */
      moveToCard(next, 'smooth');

      /*
       * Wait until the visual slide is complete.
       */
      window.setTimeout(() => {
        const currentAfterMove = currentIndexRef.current;

        /*
         * If we are too far toward the right,
         * silently move back to the equivalent
         * card in the center copy.
         *
         * This happens AFTER the visible animation.
         */
        if (currentAfterMove >= realCount * 3) {
          const normalizedIndex = middleStart + (currentAfterMove % realCount);

          moveToCard(normalizedIndex, 'auto');

          currentIndexRef.current = normalizedIndex;
        }

        /*
         * Same logic toward the left.
         */
        if (currentAfterMove < realCount) {
          const normalizedIndex =
            middleStart + (((currentAfterMove % realCount) + realCount) % realCount);

          moveToCard(normalizedIndex, 'auto');

          currentIndexRef.current = normalizedIndex;
        }

        /*
         * Unlock navigation.
         */
        window.setTimeout(() => {
          isAnimatingRef.current = false;
        }, 30);
      }, 500);
    },
    [realCount, getCards, moveToCard, middleStart],
  );

  /*
   * Initial position.
   *
   * Start at the first video of the
   * CENTER copy.
   */
  useEffect(() => {
    if (realCount <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      moveToCard(middleStart, 'auto');
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [realCount, middleStart, moveToCard]);

  /*
   * Keep current card centered on resize.
   */
  useEffect(() => {
    const handleResize = () => {
      if (isAnimatingRef.current) {
        return;
      }

      moveToCard(currentIndexRef.current, 'auto');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [moveToCard]);

  /*
   * If there are no videos, don't render
   * the carousel.
   */
  if (realCount === 0) {
    return null;
  }

  return (
    <section id="video-testimonials" className="video-testi-bg">
      <div className="video-testi-glow" aria-hidden />

      <div className="container">
        <div className="video-testi-head">
          <span className="eyebrow">Video Testimonials</span>

          <h2>
            Hear it from <span className="grey">founders.</span>
          </h2>

          <p>Real stories from founders who attended the workshop and walked away with clarity.</p>
        </div>
      </div>

      <div className="video-reels-shell">
        {/* PREVIOUS */}
        <button
          type="button"
          className="video-reels-nav video-reels-nav--prev"
          aria-label="Previous reels"
          onClick={() => scrollReels('left')}
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* INFINITE TRACK */}
        <div ref={trackRef} className="video-reels-track">
          {loopItems.map((item) => (
            <VideoReelCard
              key={item.renderKey}
              src={item.src}
              label={item.label}
              isActive={activeKey === item.renderKey}
              onPlay={() => setActiveKey(item.renderKey)}
              onEnded={() => setActiveKey(null)}
            />
          ))}
        </div>

        {/* NEXT */}
        <button
          type="button"
          className="video-reels-nav video-reels-nav--next"
          aria-label="Next reels"
          onClick={() => scrollReels('right')}
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
