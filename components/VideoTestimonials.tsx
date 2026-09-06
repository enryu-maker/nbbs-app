'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { videoTestimonials } from '@/lib/video-testimonials';

interface VideoReelCardProps {
  src: string;
  label: string;
  isActive: boolean;
  onPlay: () => void;
  onEnded: () => void;
}

function VideoReelCard({ src, label, isActive, onPlay, onEnded }: VideoReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause and reset time when another video becomes active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      video.pause();
      video.currentTime = 0.5;
    }
  }, [isActive]);

  // Seek to 0.5s once metadata is loaded so browser renders a valid poster frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.currentTime === 0) {
        video.currentTime = 0.5;
      }
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
    }
  }, []);

  const handlePlayClick = () => {
    onPlay();
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          void video.play();
        });
      }
    }
  };

  return (
    <article className={`video-reel-card${isActive ? ' is-playing' : ''}`}>
      <div className="video-reel-media">
        <video ref={videoRef} playsInline preload="metadata" controls={isActive} onEnded={onEnded}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-reel-shade" aria-hidden />

        {!isActive && (
          <button
            type="button"
            className="video-reel-play"
            aria-label={`Play ${label} testimonial`}
            onClick={handlePlayClick}
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
  const [activeId, setActiveId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
        <button
          type="button"
          className="video-reels-nav video-reels-nav--prev"
          aria-label="Previous reels"
          onClick={() => scrollReels('left')}
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <div className="video-reels-track" ref={trackRef}>
          {videoTestimonials.map((item) => (
            <VideoReelCard
              key={item.id}
              src={item.src}
              label={item.label}
              isActive={activeId === item.id}
              onPlay={() => setActiveId(item.id)}
              onEnded={() => setActiveId(null)}
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
