"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";
import Footer from "./footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1779114247/948_h9udfm.jpg";

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";

const destinations = [
  {
    id: "01",
    country: "BRASIL",
    city: "Recife",
    description:
      "Calles de colores, mar de arrecifes y la calidez del nordeste. Un lugar donde cada atardecer cuenta una historia distinta.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1779112033/e6f613d4370c37b33e714843fab63e1a_mlnstc.jpg",
    href: "/brasil",
  },
  {
    id: "02",
    country: "CANADÁ",
    city: "Banff",
    description:
      "Lagunas turquesas entre picos nevados. Naturaleza en estado puro que te recuerda lo pequeño que somos frente a lo inmenso.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1779112051/d4e911d667da8003bd5d289145979ea6_hdt9el.jpg",
    href: "#",
  },
  {
    id: "03",
    country: "PERÚ",
    city: "Machu Picchu",
    description:
      "Ruinas entre las nubes, silencio sagrado y la huella de una civilización que aún late en cada piedra.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg",
    href: "#",
  },
  {
    id: "04",
    country: "MÉXICO",
    city: "Tulum",
    description:
      "Ruinas mayas frente al Caribe. Historia antigua y aguas cristalinas en un solo horizonte inolvidable.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1779114368/40e54fa57c4e20c2dd0de66360a3b67e_zgatgc.jpg",
    href: "#",
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

function PassportStamp() {
  return (
    <div
      className="hidden lg:flex absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 w-28 h-28 xl:w-32 xl:h-32 items-center justify-center rounded-full border-2 border-dashed border-gray-300/80 text-gray-400/70 rotate-12 select-none pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <path
              id="stampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fill="currentColor"
            fontSize="7"
            letterSpacing="2"
            className="uppercase"
          >
            <textPath href="#stampCircle" startOffset="8%">
              alma viajera • destinos •
            </textPath>
          </text>
        </svg>
        <svg
          className="w-8 h-8 text-gray-400/80"
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

function FlightPath() {
  return (
    <div
      className="relative w-full max-w-md mx-auto h-24 sm:h-28 mb-6 sm:mb-8"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 100"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M20 80 Q 80 20, 160 50 T 300 30"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>
      <div
        className="absolute left-[58%] top-[28%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg]"
        style={{ color: ACCENT }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

type DestinationCardProps = (typeof destinations)[number];

function DestinationCard({
  id,
  country,
  city,
  description,
  image,
  href,
}: DestinationCardProps) {
  const inner = (
    <article className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(26,43,76,0.08)] hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${image}")` }}
          role="img"
          aria-label={`${city}, ${country}`}
        />
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-gray-800 px-3 py-1.5 rounded-full uppercase">
          {country}
        </span>
      </div>

      <div className="relative p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-2" style={{ color: ACCENT }}>
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {id}
          </span>
        </div>

        <h3
          className={`${playfair.className} text-2xl sm:text-3xl font-semibold mb-3`}
          style={{ color: NAVY }}
        >
          {city}
        </h3>

        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed flex-1 pr-12 sm:pr-14">
          {description}
        </p>

        <span
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: ACCENT }}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
        </span>
      </div>
    </article>
  );

  if (href === "#") {
    return inner;
  }

  return (
    <Link
      href={href}
      className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-3xl"
      style={{ outlineColor: ACCENT }}
    >
      {inner}
    </Link>
  );
}

export default function America() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-white`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada América">
            <div
              className="w-full min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] lg:min-h-[58vh] bg-cover bg-center"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
          </section>

          <section className="relative max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14">
            <PassportStamp />

            <div className="text-center relative z-10">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.35em] uppercase text-gray-500 mb-4 sm:mb-5">
                Destinos
              </p>

              <h1
                className={`${playfair.className} font-semibold leading-none mb-4 sm:mb-5`}
                style={{
                  color: NAVY,
                  fontSize: "clamp(2.75rem, 8vw, 5.5rem)",
                  letterSpacing: "0.02em",
                }}
              >
                AMERICA
              </h1>

              <FourPointStar
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-auto mb-5 sm:mb-6"
                style={{ color: NAVY }}
              />

              <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2">
                Lugares que conocí, historias que me cambiaron
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>
                y momentos que se quedaron para siempre.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} {...dest} />
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-28">
            <FlightPath />

            <div className="flex justify-center">
              <Link
                href="/#destinos"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                Ver más destinos
              </Link>
            </div>
          </section>
        </article>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
