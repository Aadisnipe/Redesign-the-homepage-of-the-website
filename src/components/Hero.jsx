import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-title">
          <span className="eyebrow">
            <i /> CLING INFO TECH · DIGITAL SOLUTIONS
          </span>
          <h1>
            MAKING YOUR <span>IDEAS</span>
            <br />
            HAPPEN!
          </h1>
        </div>
        <div className="hero-band">
          <div className="hero-copy">
            <p>
              We are an end-to-end IT solutions company providing website
              development, mobile application development, digital marketing,
              custom web portals, IT teams for your next idea, and ERP
              development for all your business needs.
            </p>
            <a className="button button-white" href="#services">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-photo">
            <img
              src={assetUrl("/assests/icons/aboutc.jpeg", 1080)}
              alt="Cling Info Tech team collaborating around a laptop"
            />
          </div>
        </div>
      </section>
    </>
  );
}
