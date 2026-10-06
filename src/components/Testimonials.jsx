import { assetUrl } from "../utils/assetUrl.js";
import { testimonials } from "../data/homepage.js";

export default function Testimonials() {
  return (
    <>
      <section className="testimonials section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <i /> TESTIMONIALS
            </span>
            <h2>
              Your voice,
              <br />
              <em>our pride.</em>
            </h2>
          </div>
          <p>
            Hear from the people who have trusted us with their ideas, their
            businesses and what comes next.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, quote, photo, role], i) => (
            <article className="testimonial" key={name}>
              <div className="quote-mark">“</div>
              <p>{quote}</p>
              <div className="testimonial-person">
                <img src={assetUrl(photo, 128)} alt="" />
                <div>
                  <strong>{name}</strong>
                  {role && <span>{role}</span>}
                </div>
                <span className="testimonial-no">0{i + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
