"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  MapPin,
  ArrowRight,
  Compass,
  Landmark,
  Globe,
  Mountain,
} from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";
const NUMBER_COLOR = "#A5B8F5";

const destinos = [
  {
    id: 1,
    numero: "01",
    nombre: "Las maravillas de Córdoba",
    ubicacion: "ARGENTINA",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705561/632506d5-a02d-4c99-8f1b-05cce4e054ba.png",
    descripcion:
      "Sierras, ríos y pueblos con alma. Un recorrido por los rincones que más me enamoraron del corazón de Argentina.",
    link: "/maravillascordoba",
    icon: Landmark,
  },
  {
    id: 2,
    numero: "02",
    nombre: "Las Maravillas del Mundo",
    ubicacion: "MUNDO",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1769712429/Firefly_Gemini_Flash_12_j4pb7h.png",
    descripcion:
      "Siete lugares que marcaron mi vida y me enseñaron que viajar es mucho más que conocer paisajes.",
    link: "/7maravillas",
    icon: Globe,
  },
  {
    id: 3,
    numero: "03",
    nombre: "Las Maravillas de Argentina",
    ubicacion: "ARGENTINA",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1778253258/Combination_of_Argentina_places_202605081214_z0lrye.jpg",
    descripcion:
      "Desde el norte hasta la Patagonia: historias, paisajes y momentos que quiero seguir compartiendo.",
    link: "/maravillasargentina",
    icon: Mountain,
  },
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

function CompassRose() {
  return (
    <div
      className="hidden md:block absolute left-4 lg:left-8 top-8 w-14 h-14 lg:w-16 lg:h-16 text-gray-200 pointer-events-none"
      aria-hidden
    >
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
        <path d="M60 8 L63 55 L60 60 L57 55 Z" fill="currentColor" opacity="0.45" />
        <path d="M60 112 L57 65 L60 60 L63 65 Z" fill="currentColor" opacity="0.45" />
        <path d="M8 60 L55 57 L60 60 L55 63 Z" fill="currentColor" opacity="0.45" />
        <path d="M112 60 L65 63 L60 60 L65 57 Z" fill="currentColor" opacity="0.45" />
      </svg>
    </div>
  );
}

function PassportStamp() {
  return (
    <div
      className="hidden sm:flex absolute right-4 lg:right-10 top-8 lg:top-10 w-24 h-24 lg:w-28 lg:h-28 items-center justify-center rounded-full border-2 border-dashed border-gray-300/70 text-gray-400/60 rotate-12 pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="destinosStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6" letterSpacing="1.5" className="uppercase">
            <textPath href="#destinosStampCircle" startOffset="6%">
              viajes que dejan huella •
            </textPath>
          </text>
        </svg>
        <svg
          className="w-6 h-6 text-gray-400/70"
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

function FlightPathDecor({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`relative pointer-events-none select-none ${className ?? ""}`}
      aria-hidden
    >
      <svg
        className={`w-full h-full ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 280 48"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 35 Q 70 8, 140 22 T 280 18"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
      <div
        className={`absolute ${flip ? "left-[8%] top-[40%]" : "right-[6%] top-[15%]"} -rotate-[18deg]`}
        style={{ color: NAVY }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

type Destino = (typeof destinos)[number];

function DestinoCard({
  numero,
  nombre,
  ubicacion,
  imagen,
  descripcion,
  link,
  icon: Icon,
}: Destino) {
  return (
    <Link
      href={link}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-2xl sm:rounded-3xl"
      style={{ outlineColor: ACCENT }}
    >
      <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_28px_rgba(26,43,76,0.08)] hover:shadow-[0_10px_36px_rgba(26,43,76,0.12)] transition-shadow duration-300 flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${imagen}")` }}
            role="img"
            aria-label={nombre}
          />
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 flex items-center justify-center shadow-sm"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
          </span>
        </div>

        <div className="relative flex flex-1 p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
          <div className="flex flex-col items-center flex-shrink-0">
            <span
              className={`${playfair.className} text-3xl sm:text-4xl font-semibold leading-none`}
              style={{ color: NUMBER_COLOR }}
            >
              {numero}
            </span>
          </div>

          <div
            className="w-px self-stretch bg-gray-200 flex-shrink-0"
            aria-hidden
          />

          <div className="flex flex-col flex-1 min-w-0 pr-10 sm:pr-12">
            <div
              className="flex items-center gap-1 mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold tracking-[0.12em]"
              style={{ color: ACCENT }}
            >
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              {ubicacion}
            </div>

            <h3
              className={`${playfair.className} text-lg sm:text-xl font-semibold mb-2 leading-snug`}
              style={{ color: NAVY }}
            >
              {nombre}
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">
              {descripcion}
            </p>
          </div>

          <span
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: ACCENT }}
          >
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function Destinos() {
  return (
    <ScrollReveal>
      <section
        id="destinos"
        className={`${playfair.variable} relative w-full overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24`}
        style={{ backgroundColor: "#f8f9fa" }}
        aria-labelledby="destinos-heading"
      >
        <CompassRose />
        <PassportStamp />
        <FlightPathDecor className="hidden md:block absolute left-0 right-0 top-4 h-10 opacity-60 px-8" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <header className="text-center mb-10 sm:mb-12 md:mb-14">
            <p
              className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase mb-3 sm:mb-4"
              style={{ color: ACCENT }}
            >
              Mi top
            </p>

            <h2
              id="destinos-heading"
              className={`${playfair.className} font-semibold uppercase tracking-[0.04em] mb-4 sm:mb-5`}
              style={{
                color: NAVY,
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
              }}
            >
              Maravillas
            </h2>

            <FourPointStar
              className="w-3 h-3 mx-auto mb-4 sm:mb-5"
              style={{ color: ACCENT }}
            />

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
              Lugares que me robaron el corazón y se convirtieron en historias
              que quiero seguir contando.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {destinos.map((destino) => (
              <DestinoCard key={destino.id} {...destino} />
            ))}
          </div>

          <div className="relative mt-12 sm:mt-14 md:mt-16">
            <FlightPathDecor
              flip
              className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-2 w-64 md:w-80 h-12 opacity-70"
            />

            <div className="flex justify-center relative z-10 pt-2">
         {/*      <Link
                href="/blog1"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full border-2 border-dashed font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#f8f9fa]"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                Ver más destinos
              </Link> */}
            </div>
          </div>
        </div>

        <FlightPathDecor className="hidden md:block absolute left-0 right-0 bottom-6 h-8 opacity-40 px-12" />
      </section>
    </ScrollReveal>
  );
}
