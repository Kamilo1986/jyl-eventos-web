"use client";

import { useState } from "react";
import "./ContactForm.css";

type Props = {
  type?: "general" | "corporativo" | "social" | "decoracion";
};

export default function ContactForm({ type = "general" }: Props) {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  let title = "Solicita Cotización de Menaje en Bogotá";
  let description =
    "Déjanos tus datos y te enviaremos información personalizada sobre alquiler de menaje premium para tu evento en Bogotá.";
  let eventLabel = "Evento";

  if (type === "corporativo") {
    title = "Cotiza Menaje para Evento Corporativo en Bogotá";
    description =
      "Completa el formulario y recibe asesoría especializada para eventos empresariales y corporativos.";
    eventLabel = "Evento Corporativo";
  }

  if (type === "social") {
    title = "Cotiza Menaje para Evento Social en Bogotá";
    description =
      "Solicita información para celebraciones como 15 años, cumpleaños, aniversarios y eventos privados.";
    eventLabel = "Evento Social";
  }

  if (type === "decoracion") {
    title = "Cotiza Decoración para Evento en Bogotá";
    description =
      "Completa el formulario y recibe asesoría especializada para decoración de eventos.";
    eventLabel = "Evento de Decoración";
  }

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    const form = e.target;

    /* ANTI SPAM HONEYPOT */
    if (form.empresa.value !== "") {
      return;
    }

    setLoading(true);

    const formData = new FormData(form);

    try {

const response = await fetch("/api/contact", {
  method: "POST",
  body: formData,
});

const result = await response.json();

if (result.success) {

  /* GOOGLE ADS CONVERSION */
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXX/XXXXXXXX"
    });
  }

  setSuccess(true);
  form.reset();

} else {

  alert("Error enviando la solicitud. Intenta nuevamente.");

}

} catch (error) {

  alert("Error de conexión. Intenta nuevamente.");

}

setLoading(false);

};
  return (
    <section className="contact-section">
      <div className="contact-container">

        <h2>{title}</h2>

        <p className="contact-description">{description}</p>

        {success && (
          <div className="contact-success">
            ✔ Solicitud enviada correctamente. Te contactaremos pronto.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>

          {/* HONEYPOT ANTI SPAM */}
          <input
            type="text"
            name="empresa"
            style={{ display: "none" }}
          />

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Detalles del {eventLabel}</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Fecha, cantidad de invitados y tipo de menaje requerido..."
              required
            />
          </div>

          <button
            type="submit"
            className="contact-button"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Solicitud de Cotización"}
          </button>

        </form>

      </div>
    </section>
  );
}