import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <a href="#home" className="brand" aria-label="Cling Info Tech home">
        <img
          src={assetUrl("/assests/icons/logo.png", 128)}
          alt="Cling Info Tech"
        />
      </a>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#solutions" onClick={closeMenu}>
          Solutions
        </a>
        <a href="#resources" onClick={closeMenu}>
          Resources
        </a>
        <a href="#clients" onClick={closeMenu}>
          Clients
        </a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Contact us <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
