"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { videoTestimonials } from "@/lib/video-testimonials";

const THUMB_SEEK_SECONDS = 1.5;

function capturePoster(video: HTMLVideoElement): string | null {
  if (!video.videoWidth || !video.videoHeight) return null;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.75);
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

function VideoReelCard({
  src,
  label,
  isActive,
  onPlay,
  onEnded,
}: VideoReelCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbTimeRef = useRef(THUMB_SEEK_SECONDS);
  const [poster, setPoster] = useState<string | null>(null);
  const [thumbReady, setThumbReady] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video || poster) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const prepareThumbnail = () => {
          const target = Math.min(
            THUMB_SEEK_SECONDS,
            Math.max(0.5, (video.duration || THUMB_SEEK_SECONDS) * 0.12),
          );
          thumbTimeRef.current = target;

          const onSeeked = () => {
            const dataUrl = capturePoster(video);
            if (dataUrl) setPoster(dataUrl);
            setThumbReady(true);
            video.pause();
            video.removeEventListener("seeked", onSeeked);
          };

          video.addEventListener("seeked", onSeeked);
          video.currentTime = target;
        };

        if (video.readyState >= 1) {
          prepareThumbnail();
        } else {
          video.preload = "auto";
          video.addEventListener("loadedmetadata", prepareThumbnail, {
            once: true,
          });
          video.load();
        }

        observer.disconnect();
      },
      { rootMargin: "120px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [poster]);

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

  const showPoster = !isActive && poster;

  return (
    <article
      ref={cardRef}
      className={`video-reel-card${isActive ? " is-playing" : ""}${thumbReady || poster ? " has-thumb" : ""}`}
    >
      <div className="video-reel-media">
        {showPoster && (
          <img src={poster} alt="" className="video-reel-poster" aria-hidden />
        )}
        <video
          ref={videoRef}
          src={src}
          playsInline
          muted
          preload="none"
          controls={isActive}
          className={showPoster ? "video-reel-video--hidden" : undefined}
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
  const [activeId, setActiveId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollReels(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(320, track.clientWidth * 0.7);
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
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
          <p>
            Real stories from founders who attended the workshop and walked away
            with clarity.
          </p>
        </div>
      </div>

      <div className="video-reels-shell">
        <button
          type="button"
          className="video-reels-nav video-reels-nav--prev"
          aria-label="Previous reels"
          onClick={() => scrollReels("left")}
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
          onClick={() => scrollReels("right")}
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
