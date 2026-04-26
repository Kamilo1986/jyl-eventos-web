import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Catálogo de Menaje y Cristalería en Bogotá",
  description:
    "Explora nuestro catálogo completo de menaje, copas, vajillas y decoración premium para eventos en Bogotá.",
};

const products = [
  { slug: "cristaleria-premium", name: "Cristaleria Premium" },
  { slug: "sillas-elegantes", name: "Sillas Elegantes" },
  { slug: "manteleria-premium", name: "Manteleria premium" },
  { slug: "decoracion-exclusiva", name: "Decoracion exclusiva" },
  { slug: "vajilla-importada", name: "Vajilla Elegante" },
  { slug: "platos-base", name: "Plato Base" },
  { slug: "cubiertos-elegantes", name: "Cubiertos Premium" },
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
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Catálogo Completo de Menaje en Bogotá
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Descubre nuestra colección exclusiva de cristalería, vajillas,
          menaje y decoración premium para eventos corporativos, bodas y
          celebraciones elegantes en Bogotá.
        </p>

        {/* BOTÓN VOLVER */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "10px",
              background: "#0b1326",
              color: "#06b6d4",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* GRID */}
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
              className={styles.catalogCard}
              style={{
                background: "#0b1326",
                borderRadius: "16px",
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
                display: "block",
              }}
            >
              {/* IMAGEN */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "160px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`/images/${product.slug}/1.jpg`}
                  alt={product.name}
                  fill
                  quality={75}
                  sizes="(max-width:768px) 100vw, 400px"
                  className={styles.catalogImg}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* TEXTO */}
              <div style={{ padding: "20px" }}>
                <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>

                <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                  Ver galería completa →
                </p>
              </div>
            </Link>
          ))}
        </div>
     <div
  style={{
    textAlign: "center",
    marginTop: "70px",
  }}
>
  <p
    style={{
      fontSize: "16px",
      color: "#cbd5f5",
      marginBottom: "20px",
    }}
  >
    Habla con uno de nuestros asesores y descubre todo nuestro catálogo de menaje premium con presupúestos.
  </p>

  <a
    href="https://wa.me/573208836296?text=Hola,%20quiero%20ver%20catalogo%20completo"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: "14px 32px",
      background: "#25D366",
      color: "#fff",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      display: "inline-block",
      boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
      transition: "all 0.2s ease",
    }}
  >
    Contactar asesor ver catalogo completo
  </a>
</div>
      </div>
    </section>
  );
}