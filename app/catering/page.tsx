import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Servicio de Catering en Bogotá | Estaciones de Café, Refrigerios y Bebidas",
  description:
    "Servicio profesional de catering en Bogotá. Estaciones de café, refrigerios, jugos artesanales y catering para eventos corporativos y sociales.",
};

export default function CateringLanding() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servicio de Catering en Bogotá",
    provider: {
      "@type": "Organization",
      name: "J&L Eventos Premium",
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    serviceType: "Catering para eventos",
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>

        <Image
  src="/images/backgrounds/catering-bg.webp"
  alt="Catering en Bogotá"
  fill
  priority
  quality={75}
  sizes="100vw"
  style={{ objectFit: "cover" }}
/>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />

          <h1>Catering para Eventos en Bogotá</h1>

          <p>
            Estaciones de café, refrigerios, bebidas y menús completos
            para eventos corporativos y sociales.
          </p>

          <a href="#formulario-catering" className={styles.cta}>
            Cotizar servicio
          </a>

        </div>

      </section>

      {/* VISUAL */}
      <section className={styles.visualSection}>

        <div className={styles.visualContainer}>

         <div className={styles.visualImages}>
  <Image
    src="/images/catering/1.2.jpg"
    alt="Estación de café para eventos"
    width={300}
    height={200}
    quality={60}
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 300px"
  />

  <Image
    src="/images/catering/2.1.jpg"
    alt="Refrigerios empresariales en Bogotá"
    width={300}
    height={200}
    quality={60}
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 300px"
  />

  <Image
    src="/images/catering/3.1.jpg"
    alt="Bebidas y catering para eventos"
    width={300}
    height={200}
    quality={60}
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 300px"
  />
</div>

          <div className={styles.visualText}>
            <h2>Experiencias gastronómicas</h2>
            <p>
              Catering con presentación premium y productos de alta calidad.
            </p>
          </div>

        </div>

      </section>

      {/* CONTENIDO */}
      <section className={styles.content}>

        <div className={styles.contentContainer}>

          <h2>Estaciones de Café</h2>
<p>
Ofrecemos estaciones de café diseñadas para eventos corporativos y sociales,
adaptándonos a diferentes volúmenes de servicio sin comprometer la calidad.
Brindamos soluciones ágiles, elegantes y acordes a cada presupuesto.
</p>

<h2>Refrigerios</h2>
<p>
Contamos con una amplia variedad de refrigerios, desde opciones prácticas
hasta propuestas más elaboradas, adaptadas a la dinámica de cada evento.
Garantizamos rapidez en la entrega, excelente presentación y calidad constante.
</p>

<h2>Bebidas y Jugos</h2>
<p>
Ofrecemos servicio de bebidas y jugos naturales, con opciones de consumo continuo
o estaciones ilimitadas según el tipo de evento. Nos ajustamos a la cantidad de invitados,
manteniendo siempre una experiencia fluida y bien presentada.
</p>
          <h2>Catering Completo</h2>
          <p>Menús emplatados y buffet para eventos masivos.</p>

          <ul>
            <li>✔ Productos frescos</li>
            <li>✔ Presentación elegante</li>
            <li>✔ Servicio profesional</li>
            <li>✔ Cobertura en Bogotá</li>
          </ul>

        </div>

      </section>

      {/* FORMULARIO */}
      <div id="formulario-catering">
        <ContactForm type="catering" />
      </div>
    </>
  );
}