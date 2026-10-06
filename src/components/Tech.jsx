import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils/assetUrl.js";

const videos = [
  {
    number: "01 / MOTION",
    title: "Cling Logo animation",
    category: "3D ANIMATION",
    src: "/videos/cling-logo-animation.mp4",
    poster: "/assests/videoThumbnail1.png",
    description: "Cling logo 3D animation",
  },
  {
    number: "02 / STORYTELLING",
    title: "Advertisement video",
    category: "3D ANIMATION",
    src: "/videos/advertisement.mp4",
    poster: "/assests/videoThumbnail2.png",
    description: "Cling Info Tech advertisement video",
  },
  {
    number: "03 / COMPUTER VISION",
    title: "AI Surveillance model",
    category: "AI",
    src: "/videos/surveillance-model.mp4",
    poster: "/assests/AIThumbnail.png",
    description: "AI surveillance model demonstration",
  },
];

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const hideTimerRef = useRef(null);
  const hoverRevealEnabledRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);

  useEffect(() => () => window.clearTimeout(hideTimerRef.current), []);

  const showButtonForFourSeconds = () => {
    window.clearTimeout(hideTimerRef.current);
    hoverRevealEnabledRef.current = false;
    setButtonHidden(false);
    hideTimerRef.current = window.setTimeout(() => {
      hoverRevealEnabledRef.current = true;
      setButtonHidden(true);
    }, 3600);
  };

  const keepButtonVisible = () => {
    window.clearTimeout(hideTimerRef.current);
    hoverRevealEnabledRef.current = false;
    setButtonHidden(false);
  };

  const revealButtonOnHover = () => {
    if (hoverRevealEnabledRef.current) setButtonHidden(false);
  };

  const hideButtonOnLeave = () => {
    if (isPlaying && hoverRevealEnabledRef.current) setButtonHidden(true);
  };

  const togglePlayback = () => {
    const player = videoRef.current;
    if (!player) return;

    if (player.paused) {
      player.play().catch(() => {
        setIsPlaying(false);
        keepButtonVisible();
      });
    } else {
      player.pause();
    }
  };

  return (
    <article className="tech-card">
      <div
        className="tech-image"
        onMouseEnter={revealButtonOnHover}
        onMouseMove={revealButtonOnHover}
        onMouseLeave={hideButtonOnLeave}
      >
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          poster={assetUrl(video.poster, 1080)}
          aria-label={video.description}
          onPlay={() => {
            setIsPlaying(true);
            showButtonForFourSeconds();
          }}
          onPause={() => {
            setIsPlaying(false);
            keepButtonVisible();
          }}
          onEnded={() => {
            setIsPlaying(false);
            keepButtonVisible();
          }}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <button
          className={`play video-toggle${isPlaying ? " is-playing" : ""}${buttonHidden ? " is-hidden" : ""}`}
          type="button"
          onClick={togglePlayback}
          aria-label={`${isPlaying ? "Pause" : "Play"} ${video.title}`}
        >
          {isPlaying ? (
            <Pause fill="currentColor" size={18} />
          ) : (
            <Play fill="currentColor" size={18} />
          )}
        </button>
        <span className="tech-tag">{video.category}</span>
      </div>
      <div className="tech-info">
        <div>
          <span>{video.number}</span>
          <h3>{video.title}</h3>
          {video.details && <p>{video.details}</p>}
        </div>
        <ArrowUpRight aria-hidden="true" />
      </div>
    </article>
  );
}

export default function Tech() {
  return (
    <section className="tech section-wrap" id="solutions">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <i /> EXPLORING WHAT’S POSSIBLE
          </span>
          <h2>
            Current tech
            <br />
            <em>focus.</em>
          </h2>
        </div>
        <p>
          We keep exploring creative tools and emerging technology to find
          practical new ways to tell stories and solve problems.
        </p>
      </div>
      <div className="tech-grid">
        {videos.map((video) => (
          <VideoCard video={video} key={video.src} />
        ))}
      </div>
    </section>
  );
}
