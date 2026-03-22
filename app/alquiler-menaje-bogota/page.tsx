import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Alquiler de Menaje en Bogotá | Menaje y Decoración para Eventos Corporativos y Sociales",
  description:
    "Alquiler de menaje premium en Bogotá: vajillas, cristalería y decoración elegante para eventos corporativos y eventos sociales. Servicio profesional y montaje especializado.",
  keywords: [
    "alquiler de menaje en bogotá",
    "menaje para eventos bogotá",
    "decoración para eventos bogotá",
    "menaje eventos corporativos bogotá",
    "menaje eventos sociales bogotá",
    "alquiler de copas y vajillas bogotá",
  ],
};

export default function MenajeLanding() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Alquiler de Menaje en Bogotá",
    provider: {
      "@type": "Organization",
      name: "J&L Eventos Premium",
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    serviceType: "Alquiler de menaje para eventos",
    description:
      "Servicio profesional de alquiler de menaje completo, cristalería, vajillas y decoración premium para eventos corporativos y sociales en Bogotá.",
  };

  return (
    <>
      {/* HERO */}

      <section className={styles.hero}>

        <Image
          src="/images/backgrounds/menajee-bg.jpg"
          alt="Alquiler de menaje premium en Bogotá para eventos corporativos y sociales"
          fill
          priority
          sizes="100vw"
          quality={60}
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContent}>

          {/* SEO Schema */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />

          <h1>
            Alquiler de Menaje Premium en Bogotá para Eventos Corporativos y
            Sociales
          </h1>

          <p>
            En J&L Eventos Premium ofrecemos alquiler de menaje completo en
            Bogotá: vajillas, cristalería, mesas, sillas y decoración elegante.
            Garantizamos montaje profesional, puntualidad y asesoría
            personalizada para todo tipo de eventos corporativos y celebraciones
            sociales.
          </p>

          <a
            href="#formulario-general"
            className={styles.cta}
            aria-label="Ir al formulario para cotizar alquiler de menaje en Bogotá"
          >
            Cotizar alquiler de menaje en Bogotá
          </a>

        </div>

      </section>


      {/* CONTENIDO */}

      <section className={styles.content}>

        <div className={styles.container}>

          <h2>Menaje para Eventos Corporativos en Bogotá</h2>

          <p>
            Equipamos lanzamientos de marca, conferencias, reuniones
            empresariales, eventos ejecutivos y activaciones corporativas con
            menaje premium y decoración profesional en toda Bogotá.
          </p>

          <h2>Menaje para Eventos Sociales en Bogotá</h2>

          <p>
            Creamos experiencias elegantes para cumpleaños, 15 años,
            aniversarios, grados y celebraciones privadas con vajilla
            sofisticada y decoración de alta calidad.
          </p>

          <h2>¿Por qué elegir nuestro servicio de alquiler de menaje?</h2>

          <ul>
            <li>Más de 300 eventos realizados en Bogotá</li>
            <li>Menaje premium y decoración elegante</li>
            <li>Entrega puntual y montaje profesional</li>
            <li>Cobertura en toda Bogotá y alrededores</li>
            <li>Asesoría personalizada para cada evento</li>
          </ul>

          <h2>Cobertura de alquiler de menaje en Bogotá</h2>

          <p>
            Atendemos eventos en Chapinero, Usaquén, Zona T, Chicó Norte,
            Salitre, Suba, Centro y municipios cercanos. Somos especialistas en
            alquiler de menaje para eventos en Bogotá.
          </p>

        </div>

      </section>


      {/* FORMULARIO */}

      <section id="formulario-general">
        <ContactForm type="general" />
      </section>

    </>
  );
}