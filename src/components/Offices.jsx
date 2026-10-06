import { MapPin } from "lucide-react";
import { offices } from "../data/homepage.js";

export default function Offices() {
  return (
    <>
      <section className="offices section-wrap">
        <div className="offices-head">
          <div>
            <span className="eyebrow">
              <i /> FIND US
            </span>
            <h2>Our offices.</h2>
          </div>
          <span>
            <MapPin size={16} /> India · Guinea
          </span>
        </div>
        <div className="office-grid">
          {offices.map(([title, address]) => (
            <article key={title}>
              <MapPin />
              <h3>{title}</h3>
              <p>{address}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
