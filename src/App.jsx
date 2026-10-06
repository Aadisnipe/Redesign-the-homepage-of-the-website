import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Reach from "./components/Reach.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Services from "./components/Services.jsx";
import Tech from "./components/Tech.jsx";
import Leadership from "./components/Leadership.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Offices from "./components/Offices.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Reach />
        <About />
        <Journey />
        <Services />
        <Tech />
        <Leadership />
        <Testimonials />
        <Contact />
        <Offices />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href="https://api.whatsapp.com/send?phone=8264469132"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.2 11.6a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-3.9a8.2 8.2 0 1 1 15-4.5Z" />
          <path d="M8.4 8.1c-.3.3-.7.9-.6 1.6.1.9.6 2.1 1.7 3.3 1.1 1.2 2.4 2 3.5 2.3.7.2 1.4-.1 1.8-.5l.5-.7c.1-.2 0-.4-.2-.5l-1.6-.8c-.2-.1-.4 0-.5.1l-.6.7c-.2.2-.4.2-.6.1-.6-.3-1.2-.7-1.7-1.3-.5-.5-.9-1.1-1.1-1.6-.1-.2 0-.4.1-.6l.5-.5c.1-.2.2-.3.1-.5l-.7-1.6c-.1-.2-.3-.3-.5-.2Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </>
  );
}
