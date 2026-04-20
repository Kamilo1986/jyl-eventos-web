import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* MARCA */}
        <div className="footer-column">
          <h3>J&L Eventos Premium</h3>
          <p>
            Especialistas en alquiler de menaje y decoración
            para eventos en Bogotá  corporativos y sociales..
          </p>
        </div>

        {/* SERVICIOS */}
        <div className="footer-column">
          <h4>Servicios</h4>
          <ul>
            <li><Link href="/alquiler-menaje-bogota">Alquiler de Menaje</Link></li>
            <li><Link href="/menaje-eventos-corporativos-bogota">Eventos Corporativos</Link></li>
            <li><Link href="/menaje-eventos-sociales-bogota">Eventos Sociales</Link></li>
            <li><Link href="/decoracion-eventos-bogota">Decoración de Eventos</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Direccion: Carrera 57b # 75-19 Bogotá, Colombia</p>
          <p>Telefono: +57 320 883 6296</p>
          <p>Email: jylcateringeventos@gmail.com</p>

          {/* REDES */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/share/1Hh9FGg8eH/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook J&L Eventos Premium"
            >
              <Image src="/images/icons/facebook.jpg" alt="Facebook J&L Eventos Premium" width={34} height={34} />
            </a>

            <a
              href="https://www.instagram.com/jyl.eventos?igsh=eWFwaWFmZHY1ZGZz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram J&L Eventos Premium"
            >
              <Image src="/images/icons/instagram.jpg" alt="Instagram J&L Eventos Premium" width={34} height={34} />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok J&L Eventos Premium"
            >
              <Image src="/images/icons/tiktok.jpg" alt="TikTok J&L Eventos Premium" width={34} height={34} />
            </a>

            <a
              href="https://wa.me/573208836296"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp J&L Eventos Premium"
            >
              <Image src="/images/icons/whatsapp.jpg" alt="WhatsApp J&L Eventos Premium" width={34} height={34} />
            </a>

            <a
              href="mailto:jylcateringeventos@gmail.com"
              aria-label="Enviar correo a J&L Eventos Premium"
            >
              <Image src="/images/icons/email.jpg" alt="Email J&L Eventos Premium" width={34} height={34} />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} J&L Eventos Premium | 
        Alquiler de menaje y decoración en Bogotá.
      </div>
    </footer>
  );
}