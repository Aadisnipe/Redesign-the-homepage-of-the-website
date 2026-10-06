export default function Journey() {
  return (
    <>
      <section className="journey section-wrap" id="resources">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <i /> HOW WE GOT HERE
            </span>
            <h2>
              A journey as
              <br />
              <em>dynamic as us.</em>
            </h2>
          </div>
          <p>
            Each year brought a new opportunity to learn, grow and deliver
            greater value to the people we work with.
          </p>
        </div>
        <div className="timeline">
          {[
            [
              "2019",
              "A foundation to build on",
              "A year of foundational growth and learning. We focused on building a strong foundation and establishing our identity.",
            ],
            [
              "2020",
              "Growing our presence",
              "We diversified our services and remained committed to quality and customer satisfaction.",
            ],
            [
              "2021",
              "New momentum",
              "We expanded our client base and embraced new technologies and methodologies.",
            ],
            [
              "2022",
              "A milestone year",
              "We grew into a mature organization, taking on ambitious projects and delivering greater value.",
            ],
          ].map(([year, title, copy]) => (
            <article className="timeline-item" key={year}>
              <span className="timeline-dot" />
              <span className="timeline-year">{year}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
