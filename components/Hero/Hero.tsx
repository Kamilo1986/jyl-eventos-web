"use client";

import styles from "./Hero.module.css";
import { useEffect, useState, useRef } from "react";

export default function Hero() {

  const message =
    "Hola, quiero cotizar alquiler de menaje premium para eventos en Bogotá. ¿Podrían enviarme catálogo y precios?";

  const url = `https://wa.me/573208836296?text=${encodeURIComponent(message)}`;

  const [events, setEvents] = useState(0);
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);

  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const animateCounter = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      duration = 1500
    ) => {

      let start = 0;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {

        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }

      }, 16);

    };

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            animateCounter(setEvents, 300);
            animateCounter(setProducts, 800);
            animateCounter(setClients, 99);

            observer.disconnect();

          }

        });

      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

  }, []);

  return (

    <section id="inicio" className={styles.hero}>

      <div className={styles["hero-content"]} ref={heroRef}>

        <span className={styles["hero-badge"]}>
          Servicio profesional para eventos corporativos y sociales
        </span>

        <h1>
          Alquiler de Menaje y Decoración para Eventos en Bogotá
          <br />
          <span>Servicio Premium con Montaje Profesional</span>
        </h1>

        <p>
          Especialistas en alquiler de menaje, vajillas, cristalería,
          mesas, sillas y decoración elegante para eventos corporativos
          y eventos sociales en Bogotá. Calidad premium, puntualidad
          y asesoría personalizada.
        </p>

        <div className={styles["hero-buttons"]}>

          <a
            href="/alquiler-menaje-bogota#formulario-general"
            className={styles["btn-gradient"]}
          >
            Cotizar alquiler de menaje en Bogotá
          </a>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-outline"]}
          >
            Cotizar por WhatsApp
          </a>

        </div>

        <div className={styles["hero-stats"]}>

          <div>
            <p className={styles["hero-number"]}>{events}+</p>
            <span>Eventos realizados en Bogotá</span>
          </div>

          <div>
            <p className={styles["hero-number"]}>{products}+</p>
            <span>Productos premium disponibles</span>
          </div>

          <div>
            <p className={styles["hero-number"]}>{clients}%</p>
            <span>Clientes satisfechos</span>
          </div>

        </div>

      </div>

    </section>

  );
}