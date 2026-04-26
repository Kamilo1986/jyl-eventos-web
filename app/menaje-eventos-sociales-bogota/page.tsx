import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Menaje para Eventos Sociales en Bogotá | Alquiler Premium para Celebraciones",
  description:
    "Alquiler de menaje y decoración premium para eventos sociales en Bogotá. vajillas y montaje elegante para 15 años, cumpleaños, aniversarios y celebraciones privadas.",
  keywords: [
    "menaje eventos sociales bogotá",
    "alquiler menaje social bogotá",
    "vajilla para 15 años bogotá",
    "copas para cumpleaños bogotá",
    "decoración eventos sociales bogotá",
  ],
};

export default function SocialesLanding() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Menaje para Eventos Sociales en Bogotá",
    provider: {
      "@type": "Organization",
      name: "J&L Eventos Premium",
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    serviceType: "Alquiler de menaje para eventos sociales",
    description:
      "Servicio profesional de alquiler de menaje y decoración premium para celebraciones sociales en Bogotá.",
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src="/images/backgrounds/social-bg.webp"
          alt="Alquiler de menaje y decoración para eventos sociales en Bogotá"
          fill
          priority
          sizes="100vw"
          quality={60}
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />

          <h1>
            Alquiler de Menaje y Decoración para Eventos Sociales en Bogotá
          </h1>

          <p>
            Ofrecemos alquiler de copas, vajillas, cristalería y decoración
            premium para eventos sociales en Bogotá como 15 años,
            cumpleaños, aniversarios, grados y celebraciones privadas.
            Creamos ambientes elegantes con montaje profesional
            y asesoría personalizada.
          </p>

          <a href="#formulario-social" className={styles.cta}>
            Cotizar alquiler de menaje en Bogotá
          </a>
        </div>
      </section>

      {/* 🔥 SECCIÓN VISUAL PREMIUM */}
      <section className={styles.visualSection}>
        <div className={styles.visualContainer}>

          <div className={styles.visualImages}>

            <Image
              src="/images/disponible2/1.jpg"
              alt="Decoración elegante para eventos sociales en Bogotá"
              width={400}
              height={300}
              quality={60}
            />

            <Image
              src="/images/disponible2/2.jpg"
              alt="Montaje de mesa premium para celebraciones"
              width={400}
              height={300}
              quality={60}
            />

            <Image
              src="/images/disponible2/3.jpg"
              alt="Menaje sofisticado para eventos sociales"
              width={400}
              height={300}
              quality={60}
            />

          </div>

          <div className={styles.visualText}>
            <h2>Celebraciones con Estilo y Elegancia</h2>
            <p>
              Creamos experiencias únicas con decoración y menaje premium
              para eventos sociales en Bogotá que dejan una impresión inolvidable.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className={styles.content}>
        <div className={styles.container}>
          <h2>Decoración Elegante para Celebraciones Especiales</h2>

          <ul>
            <li>✔ Vajilla fina y cristalería premium</li>
            <li>✔ Montaje elegante y personalizado</li>
            <li>✔ Decoración sofisticada</li>
            <li>✔ Atención puntual y profesional</li>
            <li>✔ Cobertura en toda Bogotá</li>
          </ul>

          <h2>Eventos Sociales que Atendemos en Bogotá</h2>

          <p>
            Atendemos celebraciones como 15 años, cumpleaños,
            aniversarios, grados, fiestas privadas y todo tipo
            de eventos sociales en Bogotá con un estilo premium
            y decoración exclusiva.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <div id="formulario-social">
        <ContactForm type="social" />
      </div>
    </>
  );
}