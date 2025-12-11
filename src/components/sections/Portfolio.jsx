import { useState } from "react";
import "../../styles/components/Portfolio.css";
import { useLanguage } from "../../context/LanguageContext";
import boost4u from "../../assets/boost4u.png";

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: t("portfolio.projects.0.title"),
      description: t("portfolio.projects.0.description"),
      image: boost4u,
      tags: ["React", "Node.js", "Supabase"],
      category: "Web",
    },
  ];

  const filters = ["all"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">{t("portfolio.title")}</h2>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" ? t("portfolio.filters.all") : filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid grid grid-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card portfolio-card">
              <div
                className="project-image"
                onClick={() => openModal(project.image)}
                style={{ cursor: "pointer" }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span style={{ color: "white", fontSize: "1.5rem" }}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Proyecto ampliado" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
