"use client";

import Image from "next/image";
import Link from "next/link";
import "./Services.css";

const services = [
  {
    title: "Menaje de Lujo en Bogotá",
    description:
      "Alquiler de vajillas de porcelana fina, platos base y servicio completo para eventos corporativos y sociales de alto nivel.",
    image: "/images/services/menaje-lujo.jpg",
    link: "/alquiler-menaje-bogota",
  },
  {
    title: "Cristalería Exclusiva",
    description:
      "Copas de cristal tallado, vasos de diseño y cristalería premium para celebraciones elegantes en Bogotá.",
    image: "/images/services/cristaleria-exclusiva.jpg",
    link: "/catalogo",
  },
  {
    title: "Decoración Sofisticada",
    description:
      "Decoración contemporánea y elegante para eventos corporativos, bodas y celebraciones sociales.",
    image: "/images/services/decoracion-sofisticada.jpg",
    link: "/decoracion-eventos-bogota",
  },
  {
    title: "Textiles Premium",
    description:
      "Mantelería, servilletas y textiles de alta calidad con acabados refinados para eventos exclusivos.",
    image: "/images/services/textiles-premium.jpg",
    link: "/catalogo",
  },
  {
    title: "Asesoría Personalizada",
    description:
      "Consultoría especializada para diseñar la ambientación perfecta según el tipo de evento y presupuesto.",
    image: "/images/services/asesoria-personalizada.jpg",
    link: "https://wa.me/573208836296?text=Hola,%20quiero%20información%20sobre%20entrega%20y%20montaje%20para%20un%20evento",
  },
  {
    title: "Entrega y Montaje Profesional",
    description:
      "Servicio puntual de entrega, montaje y desmontaje con equipo experto en eventos en Bogotá.",
    image: "/images/services/entrega-express.jpg",
    link: "https://wa.me/573208836296?text=Hola,%20quiero%20información%20sobre%20entrega%20y%20montaje%20para%20un%20evento",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services-container">

        <span className="services-badge">SERVICIOS PREMIUM EN BOGOTÁ</span>

        <h2>Alquiler de Menaje y Decoración para Eventos</h2>

        <p className="services-subtitle">
          Soluciones completas para eventos corporativos y sociales en Bogotá
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="service-card"
              aria-label={service.title}
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}