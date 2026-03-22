import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Decoración de Eventos en Bogotá | Decoración Premium Corporativa y Social",
  description:
    "Servicio profesional de decoración de eventos en Bogotá. Diseño y montaje elegante para eventos corporativos, bodas, 15 años y celebraciones sociales.",
  keywords: [
    "decoración de eventos en bogotá",
    "decoración eventos corporativos bogotá",
    "decoración eventos sociales bogotá",
    "decoración para bodas bogotá",
    "decoradores de eventos bogotá",
  ],
};

export default function DecoracionLanding() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Decoración de Eventos en Bogotá",
    provider: {
      "@type": "Organization",
      name: "J&L Eventos Premium",
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    serviceType: "Decoración profesional para eventos",
    description:
      "Diseño y montaje de decoración premium para eventos corporativos y sociales en Bogotá.",
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src="/images/backgrounds/decoracion-bg.jpg"
          alt="Decoración de eventos premium en Bogotá"
          fill
          quality={60}
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />

          <h1>Decoración de Eventos Premium en Bogotá</h1>

          <p>
            En J&L Eventos Premium ofrecemos servicios de decoración de eventos
            en Bogotá con diseño elegante, montaje profesional y atención
            personalizada. Transformamos espacios en experiencias memorables
            para eventos corporativos y celebraciones sociales.
          </p>

          <a href="#formulario-decoracion" className={styles.cta}>
            Cotizar decoración de evento en Bogotá
          </a>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className={styles.content}>
        <div className={styles.container}>
          <h2>Decoración para Eventos Corporativos</h2>
          <p>
            Diseñamos ambientes elegantes para lanzamientos de marca,
            conferencias, cenas empresariales, convenciones y eventos ejecutivos.
            Creamos espacios alineados con la identidad de tu empresa.
          </p>

          <h2>Decoración para Eventos Sociales</h2>
          <p>
            Ofrecemos decoración sofisticada para bodas, 15 años,
            cumpleaños, aniversarios y celebraciones privadas.
            Creamos escenarios elegantes con flores, iluminación,
            centros de mesa y diseño personalizado.
          </p>

          <h2>¿Por qué elegir nuestro servicio de decoración?</h2>
          <ul>
            <li>✔ Diseño personalizado</li>
            <li>✔ Montaje profesional y puntual</li>
            <li>✔ Decoración premium de alta calidad</li>
            <li>✔ Asesoría especializada</li>
            <li>✔ Cobertura en toda Bogotá</li>
          </ul>

          <h2>Decoradores de eventos en Bogotá</h2>
          <p>
            Atendemos eventos en Chapinero, Usaquén, Zona T,
            Chicó Norte, Salitre  y toda Bogotá.
            Somos especialistas en decoración elegante y profesional.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <div id="formulario-decoracion">
        <ContactForm type="decoracion" />
      </div>
    </>
  );
}