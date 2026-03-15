"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "./galeria.css";

type ImageType = {
  src: string;
};

type Props = {
  images: ImageType[];
  productName: string;
};

export default function Gallery({ images, productName }: Props) {

  const [index, setIndex] = useState(-1);

  return (

    <section className="galeria-section">

      <div className="galeria-container">

        {/* Breadcrumb */}

        <nav className="galeria-breadcrumb">

          <Link href="/">Inicio</Link>

          <span>/</span>

          <Link href="/catalogo">Catálogo</Link>

          <span>/</span>

          <span className="actual">{productName}</span>

        </nav>


        {/* Title */}

        <h1 className="galeria-title">

          Galería de {productName}

        </h1>


        {/* Description */}

        <p className="galeria-description">

          Colección exclusiva de {productName} para eventos premium en Bogotá.

        </p>


        {/* Back button */}

        <div className="volver-catalogo">

          <Link href="/catalogo">

            ← volver al catálogo

          </Link>

        </div>


        {/* Gallery */}

        <div className="galeria-grid">

          {images.map((img, i) => (

            <div
              key={i}
              className="galeria-card"
              onClick={() => setIndex(i)}
            >

              <Image
                src={img.src}
                alt={`${productName} imagen ${i + 1}`}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="galeria-img"
                priority={i === 0}
              />

            </div>

          ))}

        </div>


        {/* Lightbox */}

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          index={index}
          plugins={[Zoom]}
        />

      </div>

    </section>

  );
}