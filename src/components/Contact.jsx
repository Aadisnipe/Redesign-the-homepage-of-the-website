import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Website enquiry from ${form.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nCompany: ${form.get("company")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:info@clinginfotech.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <>
      <section className="contact section-wrap" id="contact">
        <div className="contact-intro">
          <span className="eyebrow">
            <i /> CONTACT US
          </span>
          <h2>
            Have an idea?
            <br />
            <em>Let’s talk.</em>
          </h2>
          <p>
            Tell us what you’re working on. We’ll help you find the right next
            step.
          </p>
          <a href="mailto:info@clinginfotech.com">
            <Mail size={17} /> info@clinginfotech.com
          </a>
          <a href="tel:+918264469132">
            <Phone size={17} /> +91 8264469132
          </a>
        </div>
        <form className="contact-form" onSubmit={handleContact}>
          <h3>Send us a message</h3>
          <div className="form-grid">
            <label>
              Full Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email *
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" placeholder="Your phone number" />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company name" />
            </label>
            <label className="form-wide">
              Message *
              <textarea
                name="message"
                required
                placeholder="Tell us a little about your project"
                rows="4"
              />
            </label>
          </div>
          <button className="button button-red" type="submit">
            Submit <Send size={15} />
          </button>
          {sent && (
            <p className="form-hint">
              Your email app will open with your message ready to send.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
