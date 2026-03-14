import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

export const metadata = {
  title: "J&L Eventos Premium",
  description: "Alquiler de menaje y decoración premium en Bogotá",
  verification: {
    google: "_YJU5u8S2-YVRwowyMM6SrozDGgcJ191_IEy20o-vE4"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>

        <Navbar />

        <main style={{ marginTop: "90px" }}>
          {children}
        </main>
       
        
        <Footer />

        <WhatsAppButton />

      </body>
    </html>
  );
}