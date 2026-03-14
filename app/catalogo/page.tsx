import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Menaje y Cristalería en Bogotá",
  description:
    "Explora nuestro catálogo completo de menaje, copas, vajillas y decoración premium para eventos en Bogotá.",
};

const products = [
  { slug: "cristaleria-premium", name: "Cristaleria Premium" },
  { slug: "sillas-elegantes", name: "Sillas Elegantes" },
  { slug: "manteleria-premium", name: "Manteleria premium" },
  { slug: "decoracion-exclusiva", name: "Decoracion exclusiva " },
  { slug: "vajilla-elegante", name: "Vajilla Elegante" },
  { slug: "plato-base", name: "Plato Base " },
  { slug: "cubiertos-premium", name: "Cubiertos Premium" },
  { slug: "mesas-para-eventos", name: "Mesas Para Eventos" },
];

export default function CatalogPage() {
  return (
    <section
      style={{
        padding: "140px 20px",
        background: "#020617",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px", textAlign  : "center" }}>
          Catálogo Completo de Menaje en Bogotá
        </h1>

        <p style={{ color: "#9ca3af", marginBottom: "50px" }}>
          Descubre nuestra colección exclusiva de cristalería, vajillas,
          copas y decoración premium para eventos corporativos, bodas y
          celebraciones elegantes en Bogotá.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/Galeria/${product.slug}`}
              style={{
                background: "#0b1326",
                padding: "25px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                Ver galería completa →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}