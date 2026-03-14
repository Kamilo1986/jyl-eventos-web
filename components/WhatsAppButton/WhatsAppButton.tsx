"use client";

import { usePathname } from "next/navigation";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const pathname = usePathname();

  let message =
    "Hola, quiero cotizar alquiler de menaje en Bogotá. ¿Me podrían brindar más información?";

  if (pathname?.includes("corporativos")) {
    message =
      "Hola, quiero cotizar menaje para un evento corporativo en Bogotá. ¿Me podrían brindar más información?";
  }

  if (pathname?.includes("sociales")) {
    message =
      "Hola, quiero cotizar menaje para un evento social en Bogotá. ¿Me podrían brindar más información?";
  }

  if (pathname?.includes("alquiler-menaje-bogota")) {
    message =
      "Hola, quiero cotizar alquiler de menaje completo en Bogotá. ¿Me podrían brindar más información?";
  }

  const url = `https://wa.me/573208836296?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp"
    > 
     <FaWhatsapp size={35} color="white" />
    </a>
  );
}