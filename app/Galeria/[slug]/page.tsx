import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   METADATA DINÁMICA SEO
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const productName = slug.replace("-", " ");

  return {
    title: `Alquiler de ${productName} en Bogotá`,
    description: `Alquiler de ${productName} premium para eventos en Bogotá. Calidad, elegancia y servicio profesional.`,
    openGraph: {
      title: `Alquiler de ${productName} en Bogotá`,
      description: `Descubre nuestro servicio de alquiler de ${productName} para eventos premium en Bogotá.`,
      url: `https://tusitio.com/galeria/${slug}`,
      type: "website",
    },
  };
}

/* =========================
   PÁGINA DINÁMICA
========================= */
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const productName = slug.replace("-", " ");

  const images = Array.from({ length: 3 }, (_, i) =>
    `/images/${slug}/${i + 1}.jpg`
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: `Alquiler de ${productName} premium para eventos en Bogotá.`,
    brand: {
      "@type": "Brand",
      name: "J&L Eventos Premium",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <section
      style={{
        padding: "140px 20px",
        background: "#020617",
        color: "white",
      }}
    >
      {/* SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        {/* BREADCRUMB */}
        <nav
          style={{
            marginBottom: "20px",
            fontSize: "14px",
            color: "#94a3b8",
          }}
        >
          <a
            href="/"
            style={{ color: "#06b6d4", textDecoration: "none" }}
          >
            Inicio
          </a>
          {" / "}
          <a
            href="/catalogo"
            style={{ color: "#06b6d4", textDecoration: "none" }}
          >
            Catálogo
          </a>
          {" / "}
          <span>{productName}</span>
        </nav>

        {/* TITULO */}
        <h1 style={{ marginBottom: "20px", fontSize: "40px" }}>
          Galería de {productName}
        </h1>

        {/* DESCRIPCIÓN */}
        <p style={{ marginBottom: "50px", color: "#9ca3af" }}>
          Colección exclusiva de {productName} para eventos premium en Bogotá.
        </p>

        {/* GALERÍA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                height: "300px",
              }}
            >
              <Image
                src={src}
                alt={`${productName} imagen ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}