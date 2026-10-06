import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";
import { leaders } from "../data/homepage.js";

export default function Leadership() {
  return (
    <>
      <section className="leadership section-wrap" id="leadership">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <i /> THE PEOPLE BEHIND THE WORK
            </span>
            <h2>
              Meet our
              <br />
              <em>leadership team.</em>
            </h2>
          </div>
          <p>
            A hands-on leadership team bringing experience, curiosity and care
            to every collaboration.
          </p>
        </div>
        <div className="leader-grid">
          {leaders.map(([name, role, photo]) => (
            <article className="leader-card" key={name}>
              <div className="leader-photo">
                <img src={assetUrl(photo, 640)} alt={name} />
              </div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
