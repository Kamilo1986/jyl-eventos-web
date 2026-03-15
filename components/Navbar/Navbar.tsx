"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

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


  /* BLOQUEAR SCROLL CUANDO MENU MÓVIL ESTÁ ABIERTO */

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

  }, [menuOpen]);


  return (

    <header
      id="navbar"
      className={scrolled ? "scrolled" : ""}
      role="banner"
    >

      <div className="container navbar-container">

        {/* LOGO */}

        <Link
          href="/"
          className="logo"
          aria-label="Inicio - J&L Eventos Premium"
        >
          <Image
            src="/logojyl29.png"
            alt="J&L Eventos Premium - Alquiler de menaje y decoración para eventos en Bogotá"
            width={116}
            height={60}
            priority
          />
        </Link>


        {/* MENU */}

        <nav
          className={`menu ${menuOpen ? "active" : ""}`}
          aria-label="Menú principal"
        >

          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>

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
            href="/catalogo"
            onClick={() => setMenuOpen(false)}
          >
            Catálogo
          </Link>

          {/* CTA MOVIL */}

          <a
            href="/alquiler-menaje-bogota#formulario-general"
            className="btn-cotizar mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Cotiza Ahora
          </a>

        </nav>


        {/* CTA DESKTOP */}

        <a
          href="/alquiler-menaje-bogota#formulario-general"
          className="btn-cotizar desktop-btn"
        >
          Cotiza Ahora
        </a>


        {/* HAMBURGUESA */}

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          aria-controls="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}