import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";
import Navbar from "@/component/nav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Alma viajera",
  description: "Viajes de aventura y descubrimiento",
  icons: {
    icon: "https://res.cloudinary.com/dtmziqubb/image/upload/v1774473466/imagen-avion-que-esta-fondo-azul_oc7v53.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar/>
        {children}
        <a
          href="https://wa.me/+5493512435151"
          aria-label="Abrir conversación de WhatsApp"
          target="_blank"
          rel="noreferrer noopener"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:bottom-8 md:right-8"
          style={{ backgroundColor: "#5D87FF", boxShadow: "0 10px 25px rgba(93, 135, 255, 0.35)" }}
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
