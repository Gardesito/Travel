"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";

const posts = [
  {
    id: 1,
    titulo: "América",
    ubicacion: "Continente",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219101/Sin_t%C3%ADtulo-1VX_tgercw.jpg",
    descripcion:
      "Lugares que conocí, historias que me cambiaron y momentos que se quedaron para siempre en este continente.",
    link: "/america",
  },
  {
    id: 2,
    titulo: "Europa",
    ubicacion: "Continente",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219093/vaneeee5_fkceqw.jpg",
    descripcion:
      "Calles con historia, culturas que se entrelazan y atardeceres que parecen sacados de un cuento.",
    link: "/europa",
  },
  {
    id: 3,
    titulo: "Asia",
    ubicacion: "Continente",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219267/Sin_t%C3%ADtulo-2ffff_jpw9jj.jpg",
    descripcion:
      "Templos antiguos, mercados llenos de vida y una energía que te invita a mirar el mundo de otra forma.",
    link: "/asia",
  },
  {
    id: 4,
    titulo: "Córdoba",
    ubicacion: "Argentina",
    imagen:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg",
    descripcion:
      "Sierras, ríos y pueblos con alma. Un pedacito de Argentina que siempre llevo en el corazón.",
    link: "/blog1",
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
      className="hidden md:flex absolute left-2 lg:left-8 top-8 lg:top-12 w-24 h-24 lg:w-28 lg:h-28 items-center justify-center rounded-full border-2 border-dashed border-gray-300/80 text-gray-400/60 -rotate-12 select-none pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="blogStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="7" letterSpacing="2" className="uppercase">
            <textPath href="#blogStampCircle" startOffset="8%">
              alma viajera • blog •
            </textPath>
          </text>
        </svg>
        <svg
          className="w-7 h-7 text-gray-400/70"
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
    <div className={`relative pointer-events-none select-none ${className ?? ""}`} aria-hidden>
      <svg
        className={`w-full h-full ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 200 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M10 60 Q 60 10, 120 40 T 190 20"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
      <div
        className={`absolute ${flip ? "left-[15%] top-[55%]" : "right-[12%] top-[20%]"} -rotate-[20deg]`}
        style={{ color: ACCENT }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function CompassRose() {
  return (
    <div
      className="hidden md:block absolute right-0 bottom-0 w-40 h-40 lg:w-52 lg:h-52 text-gray-200/80 pointer-events-none translate-x-1/4 translate-y-1/4"
      aria-hidden
    >
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.5" />
        <path d="M60 8 L63 55 L60 60 L57 55 Z" fill="currentColor" opacity="0.4" />
        <path d="M60 112 L57 65 L60 60 L63 65 Z" fill="currentColor" opacity="0.4" />
        <path d="M8 60 L55 57 L60 60 L55 63 Z" fill="currentColor" opacity="0.4" />
        <path d="M112 60 L65 63 L60 60 L65 57 Z" fill="currentColor" opacity="0.4" />
        <path d="M22 22 L52 52 M98 22 L68 52 M22 98 L52 68 M98 98 L68 68" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

type Post = (typeof posts)[number];

function BlogCard({ titulo, ubicacion, imagen, descripcion, link }: Post) {
  return (
    <Link
      href={link}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-2xl sm:rounded-3xl"
      style={{ outlineColor: ACCENT }}
    >
      <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(26,43,76,0.07)] hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] transition-shadow duration-300 flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${imagen}")` }}
            role="img"
            aria-label={titulo}
          />
        </div>

        <div className="relative bg-[#f3f4f6] p-5 sm:p-6 flex flex-col flex-1 min-h-[160px]">
          <div
            className="flex items-center gap-1.5 mb-2 text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase"
            style={{ color: ACCENT }}
          >
            <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
            {ubicacion}
          </div>

          <h3
            className={`${playfair.className} text-xl sm:text-2xl font-semibold mb-2 sm:mb-3`}
            style={{ color: NAVY }}
          >
            {titulo}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed flex-1 pr-12 line-clamp-3">
            {descripcion}
          </p>

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

export default function Blog() {
  return (
    <ScrollReveal>
      <section
        className={`${playfair.variable} relative w-full overflow-hidden py-14 sm:py-16 md:py-24`}
        style={{ backgroundColor: "#f8f9fa" }}
        aria-labelledby="blog-heading"
      >
        <PassportStamp />
        <FlightPathDecor className="hidden md:block absolute right-4 lg:right-16 top-16 w-36 lg:w-48 h-16 opacity-80" />
        <CompassRose />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Encabezado */}
          <header className="text-center mb-10 sm:mb-12 md:mb-16 relative">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.35em] uppercase text-gray-500 mb-4">
              Mi blog
            </p>

            <h2
              id="blog-heading"
              className={`${playfair.className} font-semibold leading-tight mb-4`}
              style={{
                color: NAVY,
                fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
              }}
            >
              Conoce mi{" "}
              <span className="italic font-normal" style={{ color: ACCENT }}>
                Blog
              </span>
            </h2>

            <FourPointStar
              className="w-3 h-3 mx-auto mb-5"
              style={{ color: ACCENT }}
            />

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
              Sumate a viajes grupales cuidadosamente planificados, con salidas
              acompañadas, itinerarios equilibrados y todo organizado para que
              solo te dediques a disfrutar.
            </p>
          </header>

          {/* 4 tarjetas — 1 col móvil, 2x2 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-12 sm:mt-16 md:mt-20">
            <FlightPathDecor
              flip
              className="hidden sm:block absolute left-0 bottom-8 w-32 md:w-40 h-14 opacity-70"
            />

            <div className="flex justify-center relative z-10 pt-4">
              <Link
                href="/blog1"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#f8f9fa]"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                Ver todos los posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
