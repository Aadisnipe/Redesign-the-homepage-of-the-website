import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <img
                src={assetUrl("/assests/icons/logo.png", 128)}
                alt="Cling Info Tech"
              />
            </a>
            <p>Cling Info Tech Works Private Limited</p>
            <div className="social">
              <a
                href="https://instagram.com/clinginfotechworks/"
                aria-label="Instagram"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/company/cling-multi-solutions-pvt-ltd/"
                aria-label="LinkedIn"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8264469132"
                aria-label="WhatsApp"
              >
                WhatsApp <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#solutions">3D Videos</a>
            <a href="#solutions">AI/ML</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#clients">Portfolio</a>
            <a href="#about">Achievements</a>
            <a href="#leadership">Team</a>
            <a href="https://clinginfotech.com/career">Career</a>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            {[
              "App Development",
              "Website Designing",
              "Web Design",
              "Digital Marketing",
              "Social Media Marketing",
              "IT Team for Entrepreneurship",
              "Career Counselling",
              "ERPs",
            ].map((s) => (
              <a href="#services" key={s}>
                {s}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <a href="tel:+918264469132">+91 8264469132</a>
            <a href="mailto:info@clinginfotech.com">info@clinginfotech.com</a>
            <span>Head Office · Noida</span>
            <span>
              Wave Galleria, Wave City
              <br />
              NH-24, Uttar Pradesh — 201015
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            Copyright © {new Date().getFullYear()} Cling Infotech. All rights
            reserved.
          </span>
          <div>
            <a href="https://clinginfotech.com/privacy">Privacy Policy</a>
            <a href="https://clinginfotech.com/refund-policy">
              Cancellation & Refund Policy
            </a>
            <a href="https://clinginfotech.com/terms-and-condition">
              Terms and Conditions
            </a>
          </div>
          <a className="back-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
