"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { ArrowRight, Heart } from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";
import { ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const BG_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1764895697/VANE_MIRAMAR_102_1_atpftm.jpg";

function FourPointStar({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

function FlightPathDecor() {
  return (
    <div
      className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 w-32 h-20 pointer-events-none opacity-70"
      aria-hidden
    >
      <svg className="w-full h-full" viewBox="0 0 120 80" fill="none">
        <path
          d="M10 60 Q 40 15, 70 40 T 110 25"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
      <div className="absolute right-0 top-2 rotate-[-18deg]" style={{ color: ACCENT }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-px leading-[0] pointer-events-none">
      <svg
        className="w-full h-12 sm:h-16 md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,48 C240,80 480,16 720,48 C960,80 1200,24 1440,52 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

const footerColumns = [
  {
    title: "Mis redes",
    type: "social" as const,
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/alma.viajera/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@alma.viajera",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        ),
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/5493512435151",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Explorar",
    type: "links" as const,
    items: [
      { label: "Inicio", href: "/" },
      { label: "Blog de viajes", href: "/blog1" },
      { label: "Destinos", href: "/#destinos" },
      { label: "Experiencias", href: "/#sobremi" },
    ],
  },
  {
    title: "Servicios",
    type: "links" as const,
    items: [
      { label: "Planificación personalizada", href: "/#contact" },
      { label: "Consultorías", href: "/#contact" },
      { label: "Recomendaciones de alojamiento", href: "/#contact" },
      { label: "Itinerarios", href: "/#contact" },
    ],
  },
  {
    title: "Recursos",
    type: "links" as const,
    items: [
      { label: "Consejos viajeros", href: "/blog1" },
      { label: "FAQs", href: "/#faq" },
      { label: "Guías descargables", href: "/blog1" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:contacto@almaviajera.com?subject=Newsletter&body=${encodeURIComponent(email)}`;
  };

  return (
    <ScrollReveal>
      <footer id="contact" className={`${playfair.variable} relative w-full`}>
        {/* Sección oscura con imagen */}
        <div className="relative overflow-hidden pb-12 sm:pb-16 md:pb-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${BG_IMAGE}")` }}
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28 md:pb-32">
            {/* CTA newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
              <div>
                <h2
                  className={`${playfair.className} text-white leading-tight font-semibold`}
                  style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
                >
                  Todo comienza con un{" "}
                  <span className="italic font-normal" style={{ color: ACCENT }}>
                    sueño
                  </span>{" "}
                  y un{" "}
                  <span className="italic font-normal" style={{ color: ACCENT }}>
                    pasaje
                  </span>
                  .
                </h2>
                <div className="mt-5 flex items-start gap-2">
                  <FourPointStar className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: ACCENT }} />
                  <p className="text-white/85 text-sm sm:text-base">
                    Planifiquemos juntos tu próxima aventura.
                  </p>
                </div>
              </div>

              <div className="w-full lg:max-w-md lg:ml-auto">
                <p
                  className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase mb-4 flex items-center gap-2 text-white/90"
                >
                  <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                  Todo comienza con un mensaje
                </p>

                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe tu correo..."
                    className="w-full rounded-full bg-white pl-5 sm:pl-6 pr-16 sm:pr-[4.5rem] py-4 sm:py-[1.125rem] text-sm sm:text-base text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D87FF] focus:ring-offset-2 shadow-lg"
                    required
                    aria-label="Correo electrónico"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: ACCENT }}
                    aria-label="Enviar correo"
                  >
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </form>

                <p className="mt-4 text-white/75 text-xs sm:text-sm leading-relaxed flex items-start gap-1.5">
                  Recibí consejos, destinos y novedades para que viajes mejor.
                  <Heart className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} fill={ACCENT} />
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-10 sm:pt-12 md:pt-14 relative">
              <FlightPathDecor />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
                {footerColumns.map((col) => (
                  <div
                    key={col.title}
                    className={col.type === "social" ? "col-span-2 md:col-span-1" : ""}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-5 uppercase tracking-wide">
                      {col.title}
                    </h3>

                    {col.type === "social" ? (
                      <div className="flex gap-3">
                        {col.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/70 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                            aria-label={item.label}
                          >
                            {"icon" in item && item.icon}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2 sm:space-y-2.5">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <WaveDivider />
        </div>

        {/* Barra inferior ondulada blanca */}
        <div className="relative bg-white pt-2 pb-8 sm:pb-10">
          <div
            className="absolute left-0 top-8 bottom-0 w-24 sm:w-32 opacity-30 pointer-events-none"
            aria-hidden
          >
            <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
              <path
                d="M0 60 Q 25 20, 50 60 T 100 60"
                stroke={ACCENT}
                strokeWidth="1"
                opacity="0.4"
              />
              <path
                d="M0 80 Q 30 40, 60 80"
                stroke={ACCENT}
                strokeWidth="0.75"
                opacity="0.25"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <FourPointStar className="w-3 h-3 mx-auto mb-3" style={{ color: ACCENT }} />
            <p className="text-gray-500 text-xs sm:text-sm">
              © {year} Elias Solis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
