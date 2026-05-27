import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

import type { Metadata } from "next";
import Script from "next/script";



export const metadata: Metadata = {
  title: {
    default: "J&L Eventos Premium | Alquiler de Menaje en Bogotá",
    template: "%s | J&L Eventos Premium",
  },

  description:
    "Alquiler de menaje y decoración premium en Bogotá para eventos corporativos y sociales. Servicio profesional con montaje incluido.",

  metadataBase: new URL("https://jyleventos.com.co"),

  verification: {
    google: "_YJU5u8S2-YVRwowyMM6SrozDGgcJ191_IEy20o-vE4",
  },

  openGraph: {
    title: "J&L Eventos Premium",

    description:
      "Alquiler de menaje premium en Bogotá para eventos corporativos y sociales.",

    url: "https://jyleventos.com.co",

    siteName: "J&L Eventos Premium",

    locale: "es_CO",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="es" suppressHydrationWarning>

      <body>

        <Navbar />

        <main className="mainContent">
          {children}
        </main>

        <Footer />

        {/* BOTON WHATSAPP */}
        <WhatsAppButton />

        {/* GOOGLE ADS */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18121558360"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'AW-18121558360');
          `}
        </Script>

      </body>

    </html>

  );

}