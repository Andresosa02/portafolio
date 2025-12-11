import "../../styles/components/Services.css";

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Desarrollo Web",
      description:
        "Creación de aplicaciones web modernas con tecnologías como Laravel, React y Vue.js. Mis soluciones son rápidas, seguras y optimizadas para SEO.",
      tags: ["Laravel", "React", "Vue.js"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Aplicaciones Móviles",
      description:
        "Desarrollo de aplicaciones móviles híbridas y progresivas (PWA) que funcionan en múltiples plataformas.",
      tags: ["Flutter", "React Native", "iOS/Android"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "APIs & Backend",
      description:
        "Construcción de APIs RESTful robustas y escalables con Laravel y Node.js, con enfoque en integración de sistemas y autenticación segura.",
      tags: ["Node.js", "REST API", "GraphQL"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
        </svg>
      ),
      title: "Soluciones con IA",
      description:
        "Implementación de asistentes inteligentes, chatbots y automatización de procesos usando tecnologías como OpenAI y Google Gemini.",
      tags: ["OpenAI", "Python", "LangChain"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Consultoría Técnica",
      description:
        "Asesoramiento experto en arquitectura de software, selección de tecnología y mejores prácticas de desarrollo para proyectos escalables.",
      tags: ["Architecture", "Mentoring", "Agile"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "Cloud & DevOps",
      description:
        "Despliegue de aplicaciones en la nube, configuración de servidores y pipelines CI/CD para asegurar confiabilidad.",
      tags: ["AWS", "Docker", "CI/CD"],
    },
  ];

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <h2 className="section-title">Servicios</h2>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
