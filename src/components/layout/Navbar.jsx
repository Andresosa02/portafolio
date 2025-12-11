import { useState, useEffect } from "react";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("ES");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">{"<AB/>"}</span>
        </div>

        <ul className="navbar-menu">
          <li>
            <a onClick={() => scrollToSection("inicio")}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre-mi")}>Sobre Mí</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("servicios")}>Servicios</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("portafolio")}>Portafolio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contacto")}>Contacto</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <div className="language-toggle">
            <button
              className={language === "ES" ? "active" : ""}
              onClick={() => setLanguage("ES")}
            >
              ES
            </button>
            <button
              className={language === "EN" ? "active" : ""}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
