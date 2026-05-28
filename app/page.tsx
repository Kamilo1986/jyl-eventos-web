import { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Catalog from "../components/Catalog/Catalog";
import ContactForm from "@/components/ContactForm/ContactForm";

import styles from "./page.module.css";

export const metadata: Metadata = {

  title:
    "Alquiler de Menaje y Decoración en Bogotá | J&L Eventos Premium",

  description:
    "Alquiler de menaje completo, copas, vajillas y decoración premium para eventos corporativos y eventos sociales en Bogotá. Servicio profesional y montaje especializado.",

  keywords: [
    "alquiler de menaje bogotá",
    "decoración eventos bogotá",
    "menaje para eventos",
    "copas y vajillas bogotá",
  ],

};

export default function Home() {

  const schema = {

    "@context": "https://schema.org",

    "@type": "Organization",

    name: "J&L Eventos Premium",

    url: "https://jyleventos.com.co",

    areaServed: {

      "@type": "City",

      name: "Bogotá",

    },

    description:
      "Empresa especializada en alquiler de menaje y decoración premium para eventos en Bogotá.",

  };

  return (

    <>

      {/* SCHEMA ORGANIZATION */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Hero />

      {/* SEO PRINCIPAL */}

      <section className={styles.seoSection}>

        <div className={styles.seoContainer}>

          <h2 className={styles.seoTitle}>
            Servicio Profesional de Menaje para Eventos en Bogotá
          </h2>

          <p className={styles.seoText}>

            En <strong>J&L Eventos Premium</strong> ofrecemos{" "}

            <Link
              href="/alquiler-menaje-bogota"
              className={styles.seoLink}
            >
              alquiler de menaje en Bogotá
            </Link>

            , incluyendo copas, vajillas, cristalería,
            mesas y decoración elegante para eventos
            corporativos y eventos sociales.

            Explora nuestro{" "}

            <Link
              href="/catalogo"
              className={styles.seoLink}
            >
              catálogo completo de productos
            </Link>{" "}

            y descubre nuestra calidad premium.

          </p>

        </div>

      </section>

      <Services />

      <Catalog />

      <ContactForm type="general" />

      {/* SEGUNDA SECCION SEO */}

      <section className={styles.infoSection}>

        <div className={styles.infoContainer}>

          <h2 className={styles.infoTitle}>
            Servicios Especializados de Alquiler de Menaje y Decoración en Bogotá
          </h2>

          <p className={styles.infoText}>

            En J&L Eventos Premium ofrecemos soluciones completas
            para eventos corporativos y sociales en Bogotá.

            Contamos con alquiler de menaje, vajillas,
            cristalería, copas y decoración elegante
            para celebraciones de alto nivel.

          </p>

          {/* LINKS INTERNOS */}

          <div className={styles.infoLinks}>

            <Link
              href="/alquiler-menaje-bogota"
              className={styles.infoLink}
            >
              ➜ Alquiler de menaje completo para eventos en Bogotá
            </Link>

            <Link
              href="/catalogo"
              className={styles.infoLink}
            >
              ➜ Catálogo de copas, vajillas y cristalería premium
            </Link>

            <Link
              href="/decoracion-eventos-bogota"
              className={styles.infoLink}
            >
              ➜ Decoración profesional de eventos en Bogotá
            </Link>

          </div>

          {/* COBERTURA */}

          <h3 className={styles.infoSubtitle}>
            Cobertura en Bogotá y zonas estratégicas
          </h3>

          <p className={styles.infoText}>

            Atendemos eventos en Chapinero,
            Usaquén, Zona T, Chicó Norte,
            Zona Norte, Salitre, Centro
            y municipios cercanos.

            Somos especialistas en alquiler
            de menaje premium y decoración
            para eventos elegantes en Bogotá.

          </p>

        </div>

      </section>

    </>

  );

}