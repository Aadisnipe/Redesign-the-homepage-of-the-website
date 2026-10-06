import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "../data/homepage.js";
import { serviceIllustrations } from "./ServiceIllustrations.jsx";

export default function Services() {
  return (
    <section className="services section-wrap" id="services">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <i /> OUR SERVICES
          </span>
          <h2>
            Technology for
            <br />
            <em>your next step.</em>
          </h2>
        </div>
        <p>
          From a single service to a complete digital solution, our team can
          help you build, connect and grow.
        </p>
      </div>

      <div className="service-list">
        {services.map(({ title, text }) => {
          const Illustration = serviceIllustrations[title];
          return (
            <article className="service-item" key={title}>
              <span className="service-item-icon" aria-hidden="true">
                <Illustration />
              </span>
              <div className="service-item-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href="#contact" aria-label={`Ask us about ${title}`}>
                <ArrowUpRight size={17} />
              </a>
            </article>
          );
        })}
      </div>

      <div className="service-foot">
        <span>Have another challenge in mind?</span>
        <a href="#contact">
          Talk to our team <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
