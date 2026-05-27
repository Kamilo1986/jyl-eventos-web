"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {

    e.preventDefault();

    const whatsappUrl =
      "https://wa.me/573208836296?text=Hola%2C%20quiero%20cotizar%20alquiler%20de%20menaje%20en%20Bogotá.";

    if (
      typeof window !== "undefined" &&
      (window as any).gtag
    ) {

      (window as any).gtag(
        "event",
        "conversion",
        {
          send_to:
            "AW-18121558360/zUuDCIGr4qwCENiShMFD",

          event_callback: () => {

            window.open(
              whatsappUrl,
              "_blank"
            );

          },
        }
      );

      setTimeout(() => {

        window.open(
          whatsappUrl,
          "_blank"
        );

      }, 1200);

    } else {

      window.open(
        whatsappUrl,
        "_blank"
      );

    }

  };

  return (

    <a
      href="https://wa.me/573208836296"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp J&L Eventos Premium"
      title="Cotizar por WhatsApp"
      className={styles.whatsappWrapper}
      onClick={handleClick}
    >

      <span className={styles.whatsappText}>
        Cotiza por WhatsApp
      </span>

      <div className={styles.whatsapp}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
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