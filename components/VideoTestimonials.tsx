'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { videoTestimonials } from '@/lib/video-testimonials';

// Media fragment: the browser paints this frame as the thumbnail itself,
// fetching only metadata + that frame (no canvas capture, no full preload).
const THUMB_FRAGMENT = '#t=1.5';

// The list is rendered 3x; scroll position is kept inside the middle copy so
// the track feels endless in both directions.
const COPIES = 3;

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
  const [nearViewport, setNearViewport] = useState(false);

  // Not eager: fetch metadata/thumbnail only once the card is about to scroll in.
  useEffect(() => {
    const card = cardRef.current;
    if (!card || nearViewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [nearViewport]);

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
  }, [isActive]);

  return (
    <article
      ref={cardRef}
      className={`video-reel-card${isActive ? ' is-playing' : ''}${nearViewport ? ' has-thumb' : ''}`}
    >
      <div className="video-reel-media">
        <video
          ref={videoRef}
          src={nearViewport ? `${src}${THUMB_FRAGMENT}` : undefined}
          playsInline
          muted
          preload={nearViewport ? 'metadata' : 'none'}
          controls={isActive}
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

// Width of one full copy of the list, gaps included.
function copyWidth(track: HTMLDivElement) {
  const first = track.children[0] as HTMLElement | undefined;
  const nextCopy = track.children[videoTestimonials.length] as HTMLElement | undefined;
  return first && nextCopy ? nextCopy.offsetLeft - first.offsetLeft : 0;
}

export function VideoTestimonials() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Start in the middle copy.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = copyWidth(track);
  }, []);

  // Once scrolling settles, jump back into the middle copy. Skipped while a
  // video plays, since the jump would swap the playing card for a paused clone.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timer: ReturnType<typeof setTimeout>;
    const recenter = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (activeKey) return;
        const width = copyWidth(track);
        if (!width) return;
        if (track.scrollLeft < width * 0.5) track.scrollLeft += width;
        else if (track.scrollLeft > width * 1.5) track.scrollLeft -= width;
      }, 150);
    };

    track.addEventListener('scroll', recenter, { passive: true });
    return () => {
      clearTimeout(timer);
      track.removeEventListener('scroll', recenter);
    };
  }, [activeKey]);

  function scrollReels(direction: 'left' | 'right') {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(320, track.clientWidth * 0.7);
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }

  return (
    <section id="video-testimonials" className="video-testi-bg pt-4 pb-12 md:pb-16">
      <div className="video-testi-glow" aria-hidden />
      <div className="container">
        <div className="video-testi-head">
          <span className="eyebrow">Video Testimonials</span>
          <h2>
            Hear it from <span className="grey">entrepreneurs.</span>
          </h2>
          <p>
            Real stories from entrepreneurs who attended the workshop and walked away with clarity.
          </p>
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

        <div className="video-reels-track" ref={trackRef}>
          {Array.from({ length: COPIES }, (_, copy) =>
            videoTestimonials.map((item) => {
              const key = `${item.id}-${copy}`;
              return (
                <VideoReelCard
                  key={key}
                  src={item.src}
                  label={item.label}
                  isActive={activeKey === key}
                  onPlay={() => setActiveKey(key)}
                  onEnded={() => setActiveKey(null)}
                />
              );
            }),
          )}
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
