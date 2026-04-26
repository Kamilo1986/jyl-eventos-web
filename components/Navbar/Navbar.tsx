"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* OPTIMIZACIÓN SCROLL */
  useEffect(() => {

    let ticking = false;

    const handleScroll = () => {

      if (!ticking) {

        window.requestAnimationFrame(() => {

          setScrolled(window.scrollY > 50);
          ticking = false;

        });

        ticking = true;

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* BLOQUEAR SCROLL */
  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "auto";

  }, [menuOpen]);

  return (

    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >

      <div className={`container ${styles.navbarContainer}`}>

        {/* LOGO */}
        <Link
          href="/"
          className={styles.logo}
          aria-label="Inicio - J&L Eventos Premium"
        >
          <Image
  src="/logojyl29.png"
  alt="J&L Eventos Premium"
  width={120}
  height={120}
  priority
/>
        </Link>

        {/* MENU */}
        <nav
          className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
          aria-label="Menú principal"
        >

          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>

          <Link href="/alquiler-menaje-bogota" onClick={() => setMenuOpen(false)}>
            Menaje
          </Link>

          <Link href="/menaje-eventos-corporativos-bogota" onClick={() => setMenuOpen(false)}>
            Corporativos
          </Link>

          <Link href="/menaje-eventos-sociales-bogota" onClick={() => setMenuOpen(false)}>
            Sociales
          </Link>

          <Link href="/decoracion-eventos-bogota" onClick={() => setMenuOpen(false)}>
            Decoración
          </Link>

          {/* 🔥 NUEVO */}
          <Link href="/catering" onClick={() => setMenuOpen(false)}>
            Catering
          </Link>

          <Link href="/catalogo" onClick={() => setMenuOpen(false)}>
            Catálogo
          </Link>

          {/* CTA MOVIL */}
          <a
            href="/alquiler-menaje-bogota#formulario-general"
            className={`${styles.btnCotizar} ${styles.mobileBtn}`}
            onClick={() => setMenuOpen(false)}
          >
            Cotiza Ahora
          </a>

        </nav>

        {/* CTA DESKTOP */}
        <a
          href="/alquiler-menaje-bogota#formulario-general"
          className={`${styles.btnCotizar} ${styles.desktopBtn}`}
        >
          Cotiza Ahora
        </a>

        {/* HAMBURGUESA */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}