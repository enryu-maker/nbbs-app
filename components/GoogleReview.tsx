'use client';

import { videoTestimonials } from '@/lib/video-testimonials';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

    if (!ctx) {
      return null;
    }

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
  const thumbTimeRef = useRef(THUMB_SEEK_SECONDS);

  const [poster, setPoster] = useState<string | null>(null);
  const [thumbReady, setThumbReady] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isActive) {
      video.muted = false;
      video.currentTime = 0;

      void video.play().catch(() => {});

      return;
    }

    video.muted = true;
    video.pause();

    if (video.readyState >= 1) {
      video.currentTime = thumbTimeRef.current;
    }
  }, [isActive]);

  const showPoster = !isActive && !!poster;

  return (
    <article
      ref={cardRef}
      className={`video-reel-card${isActive ? ' is-playing' : ''}${
        thumbReady || poster ? ' has-thumb' : ''
      }`}
    >
      <div className="video-reel-media">
        {showPoster && <img src={poster} alt="" className="video-reel-poster" aria-hidden="true" />}

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

        <div className="video-reel-shade" aria-hidden="true" />

        {!isActive && (
          <button
            type="button"
            className="video-reel-play"
            aria-label={`Play ${label} testimonial`}
            onClick={onPlay}
          >
            <span className="video-reel-play-ring" aria-hidden="true" />

            <span className="video-reel-play-btn">
              <Play size={22} strokeWidth={2} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function VideoTestimonials() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  const realCount: number = videoTestimonials.length;

  /*
   * We render 5 copies:
   *
   * COPY 0
   * COPY 1
   * COPY 2  <-- starting position
   * COPY 3
   * COPY 4
   *
   * This gives us enough duplicate cards on both sides
   * to create a seamless infinite carousel.
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

  const middleStart = realCount * 2;

  const currentIndexRef = useRef<number>(middleStart);

  const isMovingRef = useRef<boolean>(false);

  function getCards(): HTMLElement[] {
    const track = trackRef.current;

    if (!track) {
      return [];
    }

    return Array.from(track.querySelectorAll<HTMLElement>('.video-reel-card'));
  }

  function getCenteredScrollPosition(card: HTMLElement): number | null {
    const track = trackRef.current;

    if (!track) {
      return null;
    }

    const trackRect = track.getBoundingClientRect();

    const cardRect = card.getBoundingClientRect();

    return (
      track.scrollLeft + (cardRect.left - trackRect.left) - (track.clientWidth - cardRect.width) / 2
    );
  }

  function moveToIndex(index: number, behavior: ScrollBehavior = 'smooth') {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = getCards();
    const card = cards[index];

    if (!card) {
      return;
    }

    const scrollLeft = getCenteredScrollPosition(card);

    if (scrollLeft === null) {
      return;
    }

    track.scrollTo({
      left: scrollLeft,
      behavior,
    });

    currentIndexRef.current = index;
  }

  function normalizeLoop(index: number) {
    if (realCount <= 0) {
      return;
    }

    let normalizedIndex = index;

    /*
     * Keep the user visually inside COPY 2.
     *
     * If we move into COPY 3 or COPY 1,
     * silently reposition to the equivalent
     * card inside COPY 2.
     */

    if (index >= realCount * 3) {
      normalizedIndex = middleStart + (index % realCount);
    } else if (index < realCount) {
      normalizedIndex = middleStart + (index % realCount);

      if (normalizedIndex >= realCount * 3) {
        normalizedIndex -= realCount;
      }
    }

    if (normalizedIndex !== index) {
      moveToIndex(normalizedIndex, 'auto');
    }
  }

  function scrollReels(direction: 'left' | 'right') {
    if (realCount <= 1) {
      return;
    }

    if (isMovingRef.current) {
      return;
    }

    const current = currentIndexRef.current;

    const next = direction === 'right' ? current + 1 : current - 1;

    const cards = getCards();

    if (!cards[next]) {
      return;
    }

    isMovingRef.current = true;

    /*
     * IMPORTANT:
     * We ALWAYS animate to the physically adjacent card.
     *
     * So:
     *
     * Last video -> duplicate of first video
     *
     * looks like a normal next-card movement.
     *
     * There is no direct jump from last -> first.
     */

    moveToIndex(next, 'smooth');

    window.setTimeout(() => {
      normalizeLoop(next);

      /*
       * Small delay so the browser finishes the
       * silent normalization before another click.
       */
      window.setTimeout(() => {
        isMovingRef.current = false;
      }, 50);
    }, 650);
  }

  /*
   * Start from COPY 2.
   *
   * NOTE: This hook (and the resize hook below) must run
   * on every render, so they live BEFORE the early-return
   * for the empty state. Hooks can never be called
   * conditionally or after a return statement.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      moveToIndex(middleStart, 'auto');
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [middleStart]);

  /*
   * Re-center current card after resize.
   */
  useEffect(() => {
    const handleResize = () => {
      if (isMovingRef.current) {
        return;
      }

      moveToIndex(currentIndexRef.current, 'auto');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
   * Empty state
   *
   * IMPORTANT:
   * This must come AFTER all hook calls above.
   * It's safe here because no hooks are declared
   * below this line.
   */
  if (realCount === 0) {
    return null;
  }

  return (
    <section id="video-testimonials" className="video-testi-bg">
      <div className="video-testi-glow" aria-hidden="true" />

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
        <button
          type="button"
          className="video-reels-nav video-reels-nav--prev"
          aria-label="Previous reels"
          onClick={() => scrollReels('left')}
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

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
