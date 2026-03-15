"use client";

import "./Hero.css";

export default function Hero() {

  const message =
    "Hola, quiero cotizar alquiler de menaje premium para eventos en Bogotá. ¿Podrían enviarme catálogo y precios?";

  const url = `https://wa.me/573208836296?text=${encodeURIComponent(message)}`;

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          Servicio profesional para eventos corporativos y sociales
        </span>

        <h1>
          Alquiler de Menaje y Decoración para Eventos en Bogotá
          <br />
          <span>Servicio Premium con Montaje Profesional</span>
        </h1>

        <p>
          Especialistas en alquiler de menaje, vajillas, cristalería,
          mesas, sillas y decoración elegante para eventos corporativos
          y eventos sociales en Bogotá. Calidad premium, puntualidad
          y asesoría personalizada.
        </p>

        {/* BOTONES */}

        <div className="hero-buttons">

          {/* CTA PRINCIPAL */}

          <a
            href="/alquiler-menaje-bogota#formulario-general"
            aria-label="Ir al formulario para cotizar alquiler de menaje en Bogotá"
            title="Cotizar alquiler de menaje premium en Bogotá"
            className="btn-gradient"
          >
            Cotizar alquiler de menaje en Bogotá
          </a>

          {/* WHATSAPP */}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Cotizar por WhatsApp
          </a>

        </div>

        {/* ESTADISTICAS */}

        <div className="hero-stats">
          <div>
            <h3>300+</h3>
            <span>Eventos realizados en Bogotá</span>
          </div>

          <div>
            <h3>800+</h3>
            <span>Productos premium disponibles</span>
          </div>

          <div>
            <h3>99%</h3>
            <span>Clientes satisfechos</span>
          </div>
        </div>

      </div>
    </section>
  );
}