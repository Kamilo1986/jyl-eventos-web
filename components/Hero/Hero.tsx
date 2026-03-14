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

        {/* H1 OPTIMIZADO SEO */}
        <h1>
          Alquiler de Menaje y Decoración para Eventos en Bogotá
          <br />
          <span>Servicio Premium con Montaje Profesional</span>
        </h1>

        {/* TEXTO CON INTENCIÓN DE COMPRA */}
        <p>
          Especialistas en alquiler de menaje, vajillas, cristalería,
          mesas, sillas y decoración elegante para eventos corporativos
          y eventos sociales en Bogotá. Calidad premium, puntualidad
          y asesoría personalizada.
        </p>
<div className="hero-buttons">

  <a
    href="alquiler-menaje-bogota#formulario-general"
    aria-label="Ir al formulario para cotizar alquiler de menaje en Bogotá"
    title="Cotizar alquiler de menaje premium en Bogotá"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      padding: "18px 40px",
      borderRadius: "40px",
      background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
      color: "white",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: "18px",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="22"
      height="22"
      fill="white"
    >
    </svg>

    Cotizar alquiler de menaje en Bogotá
  </a>

</div>
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