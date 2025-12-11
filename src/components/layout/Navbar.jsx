import { useState, useEffect } from "react";
import "../../styles/components/Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
      const offset = 10; // Ajuste para el navbar fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">{"<AJ>"}</span>
        </div>

        <ul className="navbar-menu">
          <li>
            <a onClick={() => scrollToSection("inicio")}>
              {t("navbar.items.home")}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre-mi")}>
              {t("navbar.items.about")}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("servicios")}>
              {t("navbar.items.services")}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("portafolio")}>
              {t("navbar.items.portfolio")}
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contacto")}>
              {t("navbar.items.contact")}
            </a>
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
