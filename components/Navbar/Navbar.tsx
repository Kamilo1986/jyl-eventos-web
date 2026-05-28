"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  /* BLOQUEAR SCROLL SOLO EN MENU MOBILE */

  useEffect(() => {

    if (menuOpen) {

      document.documentElement.style.overflow = "hidden";

    } else {

      document.documentElement.style.overflow = "";

    }

    return () => {

      document.documentElement.style.overflow = "";

    };

  }, [menuOpen]);

  return (

    <header
      className={styles.navbar}
      role="banner"
    >

      <div className={styles.navbarContainer}>

        {/* LOGO */}

        <Link
          href="/"
          className={styles.logo}
          aria-label="Ir al inicio"
        >

          <Image
            src="/logojyl29.png"
            alt="J&L Eventos Premium"
            width={120}
            height={120}
          />

        </Link>

        {/* MENU */}

        <nav
          className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
          aria-label="Menú principal"
        >

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>

          <Link
            href="/alquiler-menaje-bogota"
            onClick={() => setMenuOpen(false)}
          >
            Menaje
          </Link>

          <Link
            href="/menaje-eventos-corporativos-bogota"
            onClick={() => setMenuOpen(false)}
          >
            Corporativos
          </Link>

          <Link
            href="/menaje-eventos-sociales-bogota"
            onClick={() => setMenuOpen(false)}
          >
            Sociales
          </Link>

          <Link
            href="/decoracion-eventos-bogota"
            onClick={() => setMenuOpen(false)}
          >
            Decoración
          </Link>

          <Link
            href="/catering"
            onClick={() => setMenuOpen(false)}
          >
            Catering
          </Link>

          <Link
            href="/catalogo"
            onClick={() => setMenuOpen(false)}
          >
            Catálogo
          </Link>

          {/* CTA MOBILE */}

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

        {/* BOTON HAMBURGUESA */}

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>

  );

}