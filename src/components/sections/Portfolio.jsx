import { useState } from "react";
import "../../styles/components/Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const projects = [
    {
      title: "GL Satelital",
      description:
        "Modernización de sistema de monitoreo satelital con frontend en Angular y backend Laravel.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Angular", "Laravel", "PostgreSQL"],
      category: "Web",
    },
    {
      title: "Sistema de Citas Médicas",
      description:
        "Sistema de gestión de pacientes y programación de citas médicas.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Laravel", "Vue.js", "MySQL"],
      category: "Web",
    },
    {
      title: "Sistema SIAGEL",
      description:
        "Sistema integral para la gestión de talleres mecánicos y seguimiento de vehículos.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Laravel", "React", "PostgreSQL"],
      category: "Web",
    },
    {
      title: "App Móvil Delivery",
      description:
        "Aplicación móvil para servicio de delivery con tracking en tiempo real.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React Native", "Node.js", "MongoDB"],
      category: "Móvil",
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico con pasarela de pagos integrada.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Laravel", "Vue.js", "Stripe"],
      category: "Web",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interactivo para visualización de datos y métricas en tiempo real.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "D3.js", "Node.js"],
      category: "Web",
    },
  ];

  const filters = ["Todos", "Web", "Móvil"];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portafolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Mi Portafolio</h2>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid grid grid-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card portfolio-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="btn btn-primary btn-sm">
                    Ver Proyecto
                  </button>
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
    </section>
  );
};

export default Portfolio;
