"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "./galeria.css";

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  {
    ssr: false,
  }
);

const plugins = [Zoom];

type ImageType = {
  src: string;
};

type Props = {
  images: ImageType[];
  productName: string;
};

export default function Gallery({
  images,
  productName,
}: Props) {

  const [index, setIndex] = useState(-1);

  return (

    <section className="galeria-section">

      <div className="galeria-container">

        <nav className="galeria-breadcrumb">

          <Link href="/">Inicio</Link>

          <span>/</span>

          <Link href="/catalogo">
            Catálogo
          </Link>

          <span>/</span>

          <span className="actual">
            {productName}
          </span>

        </nav>

        <h1 className="galeria-title">
          Galería de {productName}
        </h1>

        <p className="galeria-description">
          Colección exclusiva de {productName}
          para eventos premium en Bogotá.
        </p>

        <div className="volver-catalogo">

          <Link href="/catalogo">
            ← volver al catálogo
          </Link>

        </div>

        <div className="galeria-grid">

          {images.map((img, i) => (

            <button
              key={i}
              className="galeria-card"
              onClick={() => setIndex(i)}
              aria-label={`Abrir imagen ${i + 1}`}
            >

              <Image
                src={img.src}
                alt={`${productName} para eventos en Bogotá - J&L Eventos Premium`}
                width={700}
                height={700}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="galeria-img"
                quality={45}
                loading="lazy"
              />

            </button>

          ))}

        </div>

        {index >= 0 && (

          <Lightbox
            open={true}
            close={() => setIndex(-1)}
            slides={images.map(img => ({
              src: img.src
            }))}
            index={index}
            plugins={plugins}
          />

        )}

      </div>

    </section>

  );

}