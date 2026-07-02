"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Globe, Camera, Heart } from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";
const BUTTON_BLUE = "#6B86E3";

const MAIN_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783019857/mejora_la_calidad_202607021617_yc4rdl.jpg";

const highlights = [
  { icon: Globe, label: "Explorar el mundo" },
  { icon: Camera, label: "Vivir historias" },
  { icon: Heart, label: "Inspirar a otros" },
];

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

function PassportStamp() {
  return (
    <div
      className="hidden sm:flex absolute left-2 sm:left-4 top-4 sm:top-6 z-20 w-20 h-20 sm:w-24 sm:h-24 items-center justify-center rounded-full border-2 border-dashed border-white/80 text-white/70 -rotate-12 pointer-events-none shadow-sm"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="sobremiStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6" letterSpacing="1.5" className="uppercase">
            <textPath href="#sobremiStampCircle" startOffset="5%">
              alma viajera • historias •
            </textPath>
          </text>
        </svg>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
    </div>
  );
}

function PolaroidNote() {
  return (
    <div
      className="absolute -bottom-3 left-2 sm:left-4 z-20 w-36 sm:w-40 rotate-[-6deg] shadow-lg"
      aria-hidden
    >
      <div className="relative bg-white p-3 sm:p-4 pt-5">
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1"
          aria-hidden
        >
          <span className="block w-8 h-3 bg-amber-200/90 rounded-sm rotate-[-4deg]" />
          <span className="block w-8 h-3 bg-amber-100/90 rounded-sm rotate-[3deg]" />
        </div>
        <p
          className={`${playfair.className} text-xs sm:text-sm italic leading-snug text-gray-700 text-center`}
        >
          Cada viaje comienza con un sueño.
        </p>
        <span className="block text-center mt-1.5 text-rose-400 text-sm">♥</span>
      </div>
    </div>
  );
}

function FlightPathCorner() {
  return (
    <div
      className="absolute -bottom-1 -right-1 sm:right-2 z-10 w-28 sm:w-36 h-10 pointer-events-none"
      aria-hidden
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 120 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 40 5, 80 20 T 120 12"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
      <div
        className="absolute right-0 top-0 -rotate-[20deg]"
        style={{ color: NAVY }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function ImageColumn() {
  return (
    <div className="relative w-full">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(26,43,76,0.12)] aspect-[4/5] sm:aspect-[3/4] max-h-[560px] lg:max-h-none">
        <img
          src={MAIN_IMAGE}
          alt="Vanesa Córdoba compartiendo un mate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        <PassportStamp />
        <PolaroidNote />
        <FlightPathCorner />
      </div>
    </div>
  );
}

export default function SobreMi() {
  return (
    <ScrollReveal>
      <section
        id="sobremi"
        className={`${playfair.variable} w-full py-14 sm:py-16 md:py-20 lg:py-24`}
        style={{ backgroundColor: "#f8f9fa" }}
        aria-labelledby="sobremi-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-stretch">
            <div className="w-full lg:w-[48%] order-1">
              <ImageColumn />
            </div>

            <div className="w-full lg:w-[52%] order-2 flex items-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(26,43,76,0.08)] p-6 sm:p-8 md:p-10 w-full">
                <p
                  className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
                  style={{ color: ACCENT }}
                >
                  <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                  Conoce mi historia
                </p>

                <h2
                  id="sobremi-heading"
                  className={`${playfair.className} font-semibold mb-3`}
                  style={{
                    color: NAVY,
                    fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                  }}
                >
                  ¡Hola!
                </h2>

                <FourPointStar
                  className="w-3 h-3 mb-5 sm:mb-6"
                  style={{ color: ACCENT }}
                />

                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-600">
                  <p>
                    Soy Vanesa Córdoba, nacida en un pequeño pueblo llamado La
                    Posta. Crecí con sueños grandes, mirando aviones y
                    preguntándome qué había más allá de mi realidad.
                  </p>
                  <p>
                    Con el tiempo, esos sueños me llevaron a viajar, cruzar
                    fronteras y descubrir que no importa de dónde venimos, sino
                    hasta dónde nos animamos a llegar.{" "}
                    <strong className="font-semibold" style={{ color: NAVY }}>
                      Alma Viajera
                    </strong>{" "}
                    nace de ese camino y de las ganas de inspirar a otros a
                    creer, soñar y{" "}
                    <span style={{ color: ACCENT }}>animarse a volar</span>.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`flex flex-col items-center text-center px-1 sm:px-2 ${
                          index > 0 ? "border-l border-gray-200" : ""
                        }`}
                      >
                        <Icon
                          className="w-6 h-6 sm:w-7 sm:h-7 mb-2"
                          style={{ color: BUTTON_BLUE }}
                          strokeWidth={1.75}
                        />
                        <span
                          className="text-[10px] sm:text-xs font-medium leading-tight"
                          style={{ color: BUTTON_BLUE }}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 sm:mt-10">
                  <Link
                    href="/blog1"
                    className="flex w-full items-center justify-center gap-3 py-3.5 sm:py-4 rounded-full text-white font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 hover:opacity-95 hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: BUTTON_BLUE }}
                  >
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    Ver más sobre mí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
