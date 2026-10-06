import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { clients, countries } from "../data/homepage.js";
import { assetUrl } from "../utils/assetUrl.js";

export default function Reach() {
  const [carouselPaused, setCarouselPaused] = useState(false);
  const clientRails = useRef([]);
  const moveClients = (direction) => {
    clientRails.current.forEach((rail, index) => {
      if (!rail) return;
      const step =
        (rail.querySelector(".marquee-logo")?.getBoundingClientRect().width ||
          145) + 10;
      const logos = rail.querySelectorAll(".marquee-logo");
      const loopWidth =
        logos[clients.length]?.getBoundingClientRect().left -
          logos[0]?.getBoundingClientRect().left || rail.scrollWidth / 2;
      const movement = step * direction * 2 * (index === 0 ? 1 : -1);
      const wrapped =
        (((rail.scrollLeft + movement) % loopWidth) + loopWidth) % loopWidth;
      rail.scrollTo({ left: wrapped, behavior: "smooth" });
    });
  };
  useEffect(() => {
    if (carouselPaused) return;
    const stopAnimations = clientRails.current.map((rail, index) => {
      if (!rail) return null;
      const logos = rail.querySelectorAll(".marquee-logo");
      const loopWidth =
        logos[clients.length]?.getBoundingClientRect().left -
          logos[0]?.getBoundingClientRect().left || rail.scrollWidth / 2;
      const reverse = index === 1;
      if (reverse && rail.scrollLeft === 0) rail.scrollLeft = loopWidth;
      let previousTime = 0;
      let frame = 0;
      const animate = (time) => {
        if (previousTime) {
          const elapsed = Math.min(time - previousTime, 50);
          rail.scrollLeft += elapsed * 0.055 * (reverse ? -1 : 1);
          if (!reverse && rail.scrollLeft >= loopWidth)
            rail.scrollLeft -= loopWidth;
          if (reverse && rail.scrollLeft <= 0) rail.scrollLeft += loopWidth;
        }
        previousTime = time;
        frame = window.requestAnimationFrame(animate);
      };
      frame = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(frame);
    });
    return () => stopAnimations.forEach((stop) => stop && stop());
  }, [carouselPaused]);
  return (
    <>
      <section className="reach section-wrap" id="clients">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <i /> WORKING AROUND THE WORLD
            </span>
            <h2>
              Local insight.
              <br />
              <em>Global reach.</em>
            </h2>
          </div>
          <p>
            Expanding our global footprint across diverse markets and cultures,
            and building relationships with clients who have ideas worth
            bringing to life.
          </p>
        </div>
        <div className="country-band">
          <div className="country-band-head">
            <div className="card-heading">
              <Globe2 />
              <h3>Countries we’ve worked with</h3>
            </div>
            <span>{countries.length}+ COUNTRIES</span>
          </div>
          <div className="country-list">
            {countries.map(([code, name], index) => (
              <span
                className="country"
                key={name}
                style={{ "--flag-index": index }}
              >
                <img
                  src={`https://flagcdn.com/w80/${code}.png`}
                  alt=""
                  loading="lazy"
                />
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>
        <div
          className="all-clients"
          id="client-list"
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
          onFocusCapture={() => setCarouselPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setCarouselPaused(false);
          }}
        >
          <div className="all-clients-head">
            <div>
              <span className="eyebrow">
                <i /> OUR DIVERSE CLIENTELE
              </span>
              <h3>Good company to build with.</h3>
            </div>
            <div className="carousel-controls">
              <span>{clients.length}+ CLIENTS</span>
              <button
                type="button"
                aria-label="Previous client logos"
                onClick={() => moveClients(-1)}
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next client logos"
                onClick={() => moveClients(1)}
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
          <div className="logo-marquees">
            {[
              "Client logos carousel",
              "Client logos carousel, reverse direction",
            ].map((label, railIndex) => (
              <div
                className={`logo-marquee${railIndex === 1 ? " reverse" : ""}`}
                ref={(element) => {
                  clientRails.current[railIndex] = element;
                }}
                role="region"
                tabIndex="0"
                aria-label={label}
                key={label}
                onTouchStart={() => setCarouselPaused(true)}
                onTouchEnd={() => setCarouselPaused(false)}
              >
                <div className="logo-marquee-row">
                  {[...clients, ...clients].map(([name, logo], index) => (
                    <span
                      className="marquee-logo"
                      key={`${name}-${index}`}
                      title={index < clients.length ? name : undefined}
                      aria-hidden={index >= clients.length}
                    >
                      <img
                        src={assetUrl(logo, 256)}
                        alt={index < clients.length ? name : ""}
                        loading="eager"
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
