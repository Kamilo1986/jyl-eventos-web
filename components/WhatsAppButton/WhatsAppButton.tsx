"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {

  const pathname = usePathname();

  const message = useMemo(() => {

    if (pathname?.includes("corporativos")) {
      return "Hola, quiero cotizar menaje para un evento corporativo en Bogotá.";
    }

    if (pathname?.includes("sociales")) {
      return "Hola, quiero cotizar menaje para un evento social en Bogotá.";
    }

    if (pathname?.includes("alquiler-menaje-bogota")) {
      return "Hola, quiero cotizar alquiler de menaje completo en Bogotá.";
    }

    return "Hola, quiero cotizar alquiler de menaje en Bogotá.";

  }, [pathname]);

  const url = `https://wa.me/573208836296?text=${encodeURIComponent(message)}`;

  return (

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-wrapper"
      aria-label="Cotizar por WhatsApp"
      title="Cotiza por WhatsApp"
    >

      {/* TEXTO DESPLEGABLE */}

      <span className="whatsapp-text">
        Cotiza por WhatsApp
      </span>

      {/* BOTÓN */}

      <div className="whatsapp">

        {/* LOGO WHATSAPP OFICIAL */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
        >
          <path
            fill="white"
            d="M16.04 3C9.39 3 4 8.39 4 15.04c0 2.65.86 5.1 2.33 7.1L5 29l7.05-1.84a12 12 0 0 0 3.99.69c6.65 0 12.04-5.39 12.04-12.04S22.69 3 16.04 3zm6.88 17.3c-.29.81-1.69 1.5-2.33 1.6-.6.09-1.34.13-2.16-.14-.49-.16-1.12-.37-1.94-.73-3.42-1.48-5.65-5.14-5.82-5.38-.17-.24-1.39-1.85-1.39-3.53 0-1.68.88-2.5 1.19-2.84.31-.34.67-.42.89-.42.22 0 .44 0 .63.01.2.01.46-.08.72.54.27.65.93 2.24 1.01 2.41.08.17.14.37.02.6-.12.24-.18.37-.35.57-.17.2-.36.44-.51.59-.17.17-.35.35-.15.69.2.34.89 1.47 1.92 2.38 1.32 1.18 2.43 1.55 2.77 1.72.34.17.54.15.74-.09.2-.24.86-1 .99-1.34.14-.34.28-.28.48-.17.2.1 1.26.6 1.48.71.22.11.37.17.42.27.05.1.05.58-.24 1.39z"
          />
        </svg>

      </div>

    </a>
  );
}