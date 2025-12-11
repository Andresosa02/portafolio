import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/components/Contact.css";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState(""); // null, 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // ⚠️ REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS
    // O mejor aún, usa variables de entorno: import.meta.env.VITE_EMAILJS_SERVICE_ID
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000); // Limpiar mensaje después de 5s
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <h3>{t("contact.form.title")}</h3>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact.form.email")}</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t("contact.form.subject")}</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Enviando..."
                  : t("contact.form.submit")}
              </button>

              {status === "success" && (
                <p
                  className="success-message"
                  style={{ color: "green", marginTop: "1rem" }}
                >
                  ¡Mensaje enviado con éxito!
                </p>
              )}
              {status === "error" && (
                <p
                  className="error-message"
                  style={{ color: "red", marginTop: "1rem" }}
                >
                  Hubo un error al enviar el mensaje. Por favor intenta
                  nuevamente.
                </p>
              )}
            </form>
          </div>

          <div className="contact-info-wrapper">
            <h3>{t("contact.info.title")}</h3>
            <p>{t("contact.info.description")}</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>{t("contact.info.email")}</h4>
                  <p>andresosajz02@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>{t("contact.info.phone")}</h4>
                  <p>+57 3207539629</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>{t("contact.info.location")}</h4>
                  <p>{t("contact.info.country")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
