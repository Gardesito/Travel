"use client";

import { useState, useCallback } from "react";
import { Playfair_Display } from "next/font/google";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Heart,
} from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const LAVENDER = "#8B7FD4";
const LAVENDER_LIGHT = "#EDE9FE";
const BG = "#f7f5fc";

type Testimonial = {
  id: number;
  author: string;
  text: string;
  date: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Mariana R.",
    text: "Jamás pensé que viajar podía ser tan simple. Me armó un itinerario perfecto, con actividades que realmente disfruté. Me sentí acompañada desde el primer día.",
    date: "Agosto 28, 2025",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 2,
    author: "Julián M.",
    text: "Gracias a sus recomendaciones descubrimos lugares increíbles que no estaban en ningún blog. Además nos ayudó con todas las reservas.",
    date: "Abril 15, 2024",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    author: "Lucía S.",
    text: "Viajamos en familia y todo salió impecable. Desde los alojamientos hasta las actividades, cada detalle estuvo pensado para que disfrutáramos al máximo.",
    date: "Junio 10, 2025",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    author: "Carolina P.",
    text: "Su calidez y conocimiento hicieron la diferencia. Me animó a animarme a un viaje que postergaba hace años y fue una de las mejores decisiones de mi vida.",
    date: "Marzo 3, 2025",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    author: "Diego A.",
    text: "Recomendaciones auténticas, sin vueltas. Sentí que viajaba con alguien que realmente conoce los destinos y se preocupa por cada viajero.",
    date: "Enero 20, 2025",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
  },
];

const polaroids = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
    alt: "Lago de montaña",
    rotate: "-rotate-6",
    z: "z-10",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf45a3da?w=300&q=80",
    alt: "Costa mediterránea",
    rotate: "rotate-4",
    z: "z-20",
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
      className="hidden md:flex absolute right-8 lg:right-16 top-0 w-24 h-24 items-center justify-center rounded-full border-2 border-dashed border-[#c4b8e8]/60 text-[#c4b8e8] rotate-12 pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="testStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6" letterSpacing="1.5" className="uppercase">
            <textPath href="#testStampCircle" startOffset="5%">
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

function PolaroidDecor() {
  return (
    <div
      className="hidden lg:block absolute right-4 xl:right-12 top-2 w-44 h-36 pointer-events-none"
      aria-hidden
    >
      <div
        className={`absolute left-0 top-4 w-24 bg-white p-1.5 pb-5 shadow-md ${polaroids[0].rotate} ${polaroids[0].z}`}
      >
        <div
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 rounded-sm"
          style={{ backgroundColor: LAVENDER }}
        />
        <img
          src={polaroids[0].src}
          alt={polaroids[0].alt}
          className="w-full aspect-square object-cover"
        />
      </div>
      <div
        className={`absolute right-0 top-0 w-28 bg-white p-1.5 pb-6 shadow-lg ${polaroids[1].rotate} ${polaroids[1].z}`}
      >
        <img
          src={polaroids[1].src}
          alt={polaroids[1].alt}
          className="w-full aspect-[4/5] object-cover"
        />
      </div>
    </div>
  );
}

function FlightPathDecor() {
  return (
    <div
      className="hidden sm:block absolute left-4 lg:left-8 bottom-32 lg:bottom-36 w-40 lg:w-52 h-20 pointer-events-none opacity-70"
      aria-hidden
    >
      <svg viewBox="0 0 200 80" fill="none" className="w-full h-full">
        <path
          d="M10 60 Q 50 10, 90 45 Q 130 80, 170 25"
          stroke={LAVENDER}
          strokeWidth="1.5"
          strokeDasharray="5 5"
          opacity="0.5"
        />
      </svg>
      <div
        className="absolute left-[55%] top-[20%] -rotate-[25deg]"
        style={{ color: LAVENDER }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"
          style={{ color: LAVENDER }}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) {
  return (
    <article
      className={`relative bg-white rounded-2xl p-5 sm:p-6 flex flex-col h-full transition-all duration-300 ${
        isActive
          ? "shadow-[0_12px_40px_rgba(139,127,212,0.2)] scale-[1.02] z-10 lg:-mt-3"
          : "shadow-[0_4px_20px_rgba(26,43,76,0.06)] opacity-90 scale-[0.98]"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <div
          className={`flex items-center justify-center rounded-lg transition-all ${
            isActive
              ? "w-11 h-11 -mt-8 sm:-mt-9 shadow-md"
              : "w-9 h-9"
          }`}
          style={{ backgroundColor: isActive ? LAVENDER : LAVENDER_LIGHT }}
        >
          <Quote
            className={`text-white ${isActive ? "w-5 h-5" : "w-4 h-4"}`}
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
        <img
          src={testimonial.avatar}
          alt=""
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
        />
      </div>

      <StarRating />

      <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed flex-1 mb-4">
        {testimonial.text}
      </p>

      <div>
        <p className="font-semibold text-sm" style={{ color: NAVY }}>
          — {testimonial.author}
        </p>
        <p className="text-xs mt-1 text-gray-400">{testimonial.date}</p>
      </div>
    </article>
  );
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getVisibleIndices(active: number, total: number, count: number) {
  const half = Math.floor(count / 2);
  return Array.from({ length: count }, (_, i) => wrapIndex(active - half + i, total));
}

export function Testimonials() {
  const [active, setActive] = useState(2);
  const total = testimonials.length;

  const goPrev = useCallback(() => {
    setActive((i) => wrapIndex(i - 1, total));
  }, [total]);

  const goNext = useCallback(() => {
    setActive((i) => wrapIndex(i + 1, total));
  }, [total]);

  const visibleDesktop = getVisibleIndices(active, total, 3);
  const visibleTablet = getVisibleIndices(active, total, 2);

  return (
    <ScrollReveal>
      <section
        className={`${playfair.variable} relative w-full overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24`}
        style={{ backgroundColor: BG }}
        aria-labelledby="testimonios-heading"
      >
        <PassportStamp />
        <PolaroidDecor />
        <FlightPathDecor />

        {/* Estrellas decorativas */}
        <FourPointStar
          className="hidden md:block absolute left-[12%] top-24 w-3 h-3 opacity-40"
          style={{ color: LAVENDER }}
        />
        <FourPointStar
          className="hidden md:block absolute right-[28%] top-40 w-2 h-2 opacity-30"
          style={{ color: LAVENDER }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Encabezado */}
          <header className="max-w-xl mb-10 sm:mb-12 lg:mb-14 relative">
            <p
              className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
              style={{ color: LAVENDER }}
            >
              <FourPointStar className="w-2.5 h-2.5" style={{ color: LAVENDER }} />
              Lo que dicen viajeros
            </p>

            <h2
              id="testimonios-heading"
              className={`${playfair.className} font-semibold mb-3 sm:mb-4`}
              style={{
                color: NAVY,
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              Testimonios
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#6b7a94] max-w-md">
              Historias reales de personas que confiaron en mis recomendaciones y
              vivieron experiencias inolvidables.
            </p>
          </header>

          {/* Carrusel */}
          <div className="relative">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#e0d9f5] shadow-md flex items-center justify-center transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 -translate-x-1/2 sm:translate-x-0 sm:-left-5"
              style={{ outlineColor: LAVENDER }}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: LAVENDER }} />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#e0d9f5] shadow-md flex items-center justify-center transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 translate-x-1/2 sm:translate-x-0 sm:-right-5"
              style={{ outlineColor: LAVENDER }}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" style={{ color: LAVENDER }} />
            </button>

            {/* Móvil: 1 tarjeta */}
            <div className="lg:hidden px-6 sm:px-8 pt-4 pb-2">
              <TestimonialCard
                testimonial={testimonials[active]}
                isActive
              />
            </div>

            {/* Tablet: 2 tarjetas */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 px-8 pt-4 pb-2 items-stretch">
              {visibleTablet.map((idx) => (
                <TestimonialCard
                  key={testimonials[idx].id}
                  testimonial={testimonials[idx]}
                  isActive={idx === active}
                />
              ))}
            </div>

            {/* Desktop: 3 tarjetas */}
            <div className="hidden lg:grid grid-cols-3 gap-5 xl:gap-6 px-10 pt-6 pb-4 items-end">
              {visibleDesktop.map((idx) => (
                <TestimonialCard
                  key={testimonials[idx].id}
                  testimonial={testimonials[idx]}
                  isActive={idx === active}
                />
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    backgroundColor: i === active ? LAVENDER : LAVENDER_LIGHT,
                  }}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          {/* Cierre */}
          <footer className="text-center mt-12 sm:mt-14 md:mt-16">
            <Heart
              className="w-5 h-5 mx-auto mb-3"
              style={{ color: LAVENDER }}
              fill={LAVENDER}
              strokeWidth={0}
            />
            <p
              className={`${playfair.className} text-2xl sm:text-3xl italic mb-2`}
              style={{ color: LAVENDER }}
            >
              Gracias por confiar en mí
            </p>
            <p className="text-xs sm:text-sm text-[#6b7a94]">
              Tu próxima aventura puede ser la siguiente historia.
            </p>
          </footer>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Testimonials;
