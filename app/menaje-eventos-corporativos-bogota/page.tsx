import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Menaje para Eventos Corporativos en Bogotá | Alquiler Empresarial Premium",
  description:
    "Alquiler de menaje premium para eventos corporativos en Bogotá. vajillas, cristalería y montaje profesional para lanzamientos de marca, conferencias y eventos empresariales.",
  keywords: [
    "menaje eventos corporativos bogotá",
    "alquiler menaje corporativo bogotá",
    "copas eventos empresariales bogotá",
    "vajilla eventos corporativos",
    "menaje empresarial bogotá",
  ],
};

export default function CorporativoLanding() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Menaje para Eventos Corporativos en Bogotá",
    provider: {
      "@type": "Organization",
      name: "J&L Eventos Premium",
    },
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
    serviceType: "Alquiler de menaje corporativo",
    description:
      "Servicio profesional de alquiler de menaje premium para eventos empresariales en Bogotá.",
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src="/images/backgrounds/corporativo-bgg.jpg"
          alt="Alquiler de menaje para eventos corporativos en Bogotá"
          fill
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
          

          <h1>
            Alquiler de Menaje para Eventos Corporativos en Bogotá
          </h1>

          <p>
            Ofrecemos menaje premium para eventos empresariales en Bogotá:
            copas, vajillas, cristalería, mesas y decoración elegante.
            Servicio profesional con montaje puntual y asesoría especializada
            para empresas.
          </p>

          <a href="#formulario-corporativo" className={styles.cta}>
            Cotizar alquiler de menaje en Bogotá
          </a>
        </div>
      </section>
      {/* 🔥 SECCIÓN VISUAL CORPORATIVA */}
<section className={styles.visualSection}>
  <div className={styles.visualContainer}>

    <div className={styles.visualImages}>

      <Image
        src="/images/backgrounds/corporativo-bgg.jpg"
        alt="Evento corporativo elegante en Bogotá"
        width={500}
        height={350}
        quality={60}
      />

      <Image
        src="/images/backgrounds/decoracion-bg.jpg"
        alt="Decoración para eventos empresariales"
        width={500}
        height={350}
        quality={60}
      />

      <Image
        src="/images/backgrounds/menajee-bg.jpg"
        alt="Menaje premium para eventos corporativos"
        width={500}
        height={350}
        quality={60}
      />

    </div>

    <div className={styles.visualText}>
      <h2>Eventos Corporativos con Impacto Profesional</h2>
      <p>
        Creamos experiencias empresariales elegantes con menaje premium,
        cuidando cada detalle para proyectar una imagen profesional y de alto nivel.
      </p>
    </div>

  </div>
</section>

      {/* CONTENIDO */}
      <section className={styles.content}>
        <div className={styles.container}>
          <h2>Servicio Profesional para Empresas</h2>

          <ul>
            <li>✔ Imagen elegante para tu marca</li>
            <li>✔ Montaje profesional y puntual</li>
            <li>✔ Menaje premium de alta calidad</li>
            <li>✔ Atención personalizada para empresas</li>
            <li>✔ Cobertura en toda Bogotá</li>
          </ul>

          <h2>Eventos Corporativos que Atendemos</h2>

          <p>
            Atendemos lanzamientos de producto, convenciones,
            conferencias, reuniones ejecutivas, cenas empresariales,
            celebraciones institucionales y eventos corporativos en Bogotá.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <div id="formulario-corporativo">
        <ContactForm type="corporativo" />
      </div>
    </>
  );
}