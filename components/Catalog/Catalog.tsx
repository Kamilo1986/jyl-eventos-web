"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Catalog.css";

const products = [
  { id: "cristaleria-premium", name: "Cristalería Premium", image: "/images/catalog/cristaleriaa.jpg" },
  { id: "cubiertos-elegantes", name: "Cubiertos Elegantes", image: "/images/catalog/cubiertoss.jpg" },
  { id: "vajilla-importada", name: "Vajilla importada", image: "/images/catalog/vajilla.jpg" },
  { id: "platos-base", name: "Platos Base", image: "/images/catalog/platos-base.jpg" },
  { id: "mesas-para-eventos", name: "Mesas para Eventos", image: "/images/catalog/mesass.jpg" },
  { id: "sillas-elegantes", name: "Sillas Elegantes", image: "/images/catalog/sillas.jpg" },
  { id: "manteleria-premium", name: "Mantelería Premium", image: "/images/catalog/manteleria.jpg" },
  { id: "decoracion-exclusiva", name: "Decoración Exclusiva", image: "/images/catalog/decoracion.jpg" },
];

export default function Catalog() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        el.scrollLeft += 1;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    }, 10); // velocidad (más bajo = más rápido)

    return () => clearInterval(interval);
  }, [isPaused]);

  // duplicamos para efecto infinito real
  const infiniteProducts = [...products, ...products];

  return (
    <section id="catalogo" className="catalog">
      <div className="catalog-container">

        <span className="catalog-badge">CATÁLOGO COMPLETO</span>

        <h2>Alquiler de Menaje y Decoración en Bogotá</h2>
        <p>Colección exclusiva de productos premium para eventos corporativos y sociales</p>

        <div
          className="carousel"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {infiniteProducts.map((product, index) => (
            <Link
              key={index}
              href={`/Galeria/${product.id}`}
              className="catalog-card"
              aria-label={`Ver ${product.name}`}
            >
              <div className="image-wrapper">
                <Image
                  src={product.image}
                  alt={`Alquiler de ${product.name} en Bogotá`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3>{product.name}</h3>
              <span className="catalog-btn">Ver detalle</span>
            </Link>
          ))}
        </div>

        <div className="catalog-more">
          <Link href="/catalogo" className="btn-more">
            Explorar más artículos
          </Link>
        </div>

      </div>
    </section>
  );
}