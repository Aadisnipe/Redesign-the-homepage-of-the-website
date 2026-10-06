import { Sparkles } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";
import VisionIcon from "./Vision.jsx";
import mission from "../assets/missionh.png";
export default function About() {
  return (
    <>
      <section className="about section-wrap" id="about">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <i /> WHO WE ARE
            </span>
            <h2>
              Innovation at
              <br />
              <em>its best.</em>
            </h2>
          </div>
          <div className="about-lead">
            <p>
              We are a company with multifarious IT services—ERPs, websites, app
              development, support, innovations, projects and ideas. Innovation
              at its best is what we believe in.
            </p>
            <p>
              We understand our customers and the industries they work in. Our
              diverse team is passionate about helping people and businesses
              grow, and creating consistent digital experiences across desktop,
              tablet and smartphone.
            </p>
          </div>
        </div>
        <div className="purpose-grid">
          <article>
            <VisionIcon size={80} />
            <h3>Growth that lasts.</h3>
            <p>
              At Cling, our goal is to provide high-quality web design, development, and marketing solutions that help clients grow profitably online. We focus on quality, customer service, technology, innovation, and commitment to build lasting client satisfaction and business growth.
            </p>
          </article>
          <article>
            <img src={mission} alt="Mission" width={80} />
            <h3>Ready for what’s next.</h3>
            <p>
              We stay ahead in the rapidly evolving digital world by investing in our people, improving our processes, and adopting the latest technologies. Our focus is on delivering excellent services while adapting quickly to market trends and customer needs, making us a trusted partner for businesses seeking to stay ahead of the competition.
            </p>
          </article>
          {/* <div className="purpose-art">
            <img
              src={assetUrl("/assests/Dot.png", 640)}
              alt="Cling brand dotted motif"
            />
            <div>
              <Sparkles />
              <span>
                Ideas grow
                <br />
                when we build
                <br />
                together.
              </span>
            </div>
            <img
              src={assetUrl("/assests/KiteBottom.png", 640)}
              alt="Cling brand kite motif"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
