import styles from "./Hero.module.css";

export default function Hero() {

  const whatsappUrl =
    "https://wa.me/573208836296?text=Hola,%20quiero%20cotizar%20alquiler%20de%20menaje%20premium%20para%20eventos%20en%20Bogotá.%20¿Podrían%20enviarme%20catálogo%20y%20precios?";

  return (

    <section
      id="inicio"
      className={styles.hero}
      aria-labelledby="hero-title"
    >

      <div className={styles["hero-content"]}>

        {/* BADGE */}

        <span className={styles["hero-badge"]}>
          Servicio profesional para eventos corporativos y sociales
        </span>

        {/* TITULO PRINCIPAL SEO */}

        <h1 id="hero-title">

          Alquiler de Menaje y Decoración para Eventos en Bogotá

          <br />

          <span>
            Servicio Premium con Montaje Profesional
          </span>

        </h1>

        {/* DESCRIPCIÓN */}

        <p>

          Especialistas en alquiler de menaje, vajillas,
          cristalería, mesas, sillas y decoración elegante
          para eventos corporativos y eventos sociales
          en Bogotá.

          Calidad premium, puntualidad
          y asesoría personalizada.

        </p>

        {/* BOTONES */}

        <div className={styles["hero-buttons"]}>

          <a
            href="/alquiler-menaje-bogota#formulario-general"
            className={styles["btn-gradient"]}
            aria-label="Cotizar alquiler de menaje en Bogotá"
          >
            Cotizar alquiler de menaje en Bogotá
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-outline"]}
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </a>

        </div>

        {/* STATS */}

        <div
          className={styles["hero-stats"]}
          aria-label="Estadísticas de la empresa"
        >

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