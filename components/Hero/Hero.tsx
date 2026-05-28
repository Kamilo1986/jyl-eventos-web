import styles from "./Hero.module.css";

export default function Hero() {

  const message =
    "Hola, quiero cotizar alquiler de menaje premium para eventos en Bogotá. ¿Podrían enviarme catálogo y precios?";

  const url = `https://wa.me/573208836296?text=${encodeURIComponent(message)}`;

  return (

    <section
      id="inicio"
      className={styles.hero}
    >

      <div className={styles["hero-content"]}>

        <span className={styles["hero-badge"]}>
          Servicio profesional para eventos corporativos y sociales
        </span>

        <h1>
          Alquiler de Menaje y Decoración para Eventos en Bogotá
          <br />
          <span>
            Servicio Premium con Montaje Profesional
          </span>
        </h1>

        <p>
          Especialistas en alquiler de menaje, vajillas,
          cristalería, mesas, sillas y decoración elegante
          para eventos corporativos y eventos sociales
          en Bogotá. Calidad premium, puntualidad
          y asesoría personalizada.
        </p>

        <div className={styles["hero-buttons"]}>

          <a
            href="/alquiler-menaje-bogota#formulario-general"
            className={styles["btn-gradient"]}
            aria-label="Cotizar alquiler de menaje en Bogotá"
          >
            Cotizar alquiler de menaje en Bogotá
          </a>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-outline"]}
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </a>

        </div>

        <div className={styles["hero-stats"]}>

          <div>
            <p className={styles["hero-number"]}>
              300+
            </p>

            <span>
              Eventos realizados en Bogotá
            </span>
          </div>

          <div>
            <p className={styles["hero-number"]}>
              800+
            </p>

            <span>
              Productos premium disponibles
            </span>
          </div>

          <div>
            <p className={styles["hero-number"]}>
              99%
            </p>

            <span>
              Clientes satisfechos
            </span>
          </div>

        </div>

      </div>

    </section>

  );

}