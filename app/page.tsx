import { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Catalog from "../components/Catalog/Catalog";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Alquiler de Menaje y Decoración en Bogotá | J&L Eventos Premium",
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
    url: "https://tusitio.com",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero />

      {/* BLOQUE SEO PRINCIPAL */}
      <section
        style={{
          padding: "100px 20px",
          background: "#0f172a",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2 style={{ marginBottom: "20px", fontSize: "32px", textAlign  : "center" }}>
            Servicio Profesional de Menaje para Eventos en Bogotá
          </h2>

          <p style={{ color: "#cbd5e1", lineHeight: "1.8", textAlign  : "center" }}>
            En <strong>J&L Eventos Premium</strong> ofrecemos{" "}
            <Link
              href="/alquiler-menaje-bogota"
              style={{ color: "#06b6d4", textDecoration: "none" }}
            >
              alquiler de menaje en Bogotá
            </Link>
            , incluyendo copas, vajillas, cristalería, mesas y decoración
            elegante para eventos corporativos y eventos sociales.
            Explora nuestro{" "}
            <Link
              href="/catalogo"
              style={{ color: "#06b6d4", textDecoration: "none" }}
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

   <section
  style={{
    padding: "120px 20px",
    background: "linear-gradient(180deg,#0b1326,#020617)",
    color: "white",
  }}
>
  <div style={{ maxWidth: "1000px", margin: "auto" }}>

    <h2 style={{ marginBottom: "25px", fontSize: "30px", textAlign: "center" }}>
      Servicios Especializados de Alquiler de Menaje y Decoración en Bogotá
    </h2>

    <p
      style={{
        color: "#9ca3af",
        lineHeight: "1.8",
        marginBottom: "40px",
        textAlign: "center",
      }}
    >
      En J&L Eventos Premium ofrecemos soluciones completas para eventos
      corporativos y sociales en Bogotá. Contamos con alquiler de menaje,
      vajillas, cristalería, copas y decoración elegante para celebraciones
      de alto nivel.
    </p>

    {/* ENLACES INTERNOS ESTRATÉGICOS */}
    <div
      style={{
        display: "grid",
        gap: "14px",
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <Link
        href="/alquiler-menaje-bogota"
        style={{ color: "#06b6d4", textDecoration: "none", fontWeight: "500" }}
      >
        ➜ Alquiler de menaje completo para eventos en Bogotá
      </Link>

      <Link
        href="/catalogo"
        style={{ color: "#06b6d4", textDecoration: "none", fontWeight: "500" }}
      >
        ➜ Catálogo de copas, vajillas y cristalería premium
      </Link>

      <Link
        href="/decoracion-eventos-bogota"
        style={{ color: "#06b6d4", textDecoration: "none", fontWeight: "500" }}
      >
        ➜ Decoración profesional de eventos en Bogotá
      </Link>
    </div>

    {/* COBERTURA LOCAL SEO */}
    <h3 style={{ marginBottom: "20px", fontSize: "22px", textAlign  : "center" }}>
      Cobertura en Bogotá y zonas estratégicas
    </h3>

    <p style={{ color: "#9ca3af", lineHeight: "1.8", textAlign: "center" }}>
      Atendemos eventos en Chapinero, Usaquén, Zona T, Chicó Norte,
      Zona Norte, Salitre, Centro y municipios cercanos.
      Somos especialistas en alquiler de menaje premium y decoración
      para eventos elegantes en Bogotá.
    </p>

  </div>
</section>
    </>
  );
}