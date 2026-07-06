"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ScrollReveal from "@/component/ScrollReveal";
import { NAVY, ACCENT, ACCENT_SOFT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const BEACH_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80";
const MOUNTAIN_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80";

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

function TitleDivider() {
  return (
    <div className="flex items-center gap-3 my-5 sm:my-6 max-w-md" aria-hidden>
      <div className="flex-1 h-px bg-gray-200" />
      <div
        className="w-2 h-2 rotate-45 border border-gray-300"
        style={{ backgroundColor: "#f8f9fa" }}
      />
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function BranchDecor() {
  return (
    <div
      className="hidden md:block absolute -right-2 top-0 w-24 lg:w-28 text-[#9BA3DA]/50 pointer-events-none"
      aria-hidden
    >
      <svg viewBox="0 0 80 100" fill="none" className="w-full h-auto">
        <path
          d="M40 95 Q20 70 25 45 Q30 20 40 5 Q50 25 55 50 Q60 75 40 95"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M40 40 Q15 35 10 20" stroke="currentColor" strokeWidth="1" />
        <path d="M42 50 Q65 45 72 30" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="12" cy="18" rx="6" ry="4" fill="currentColor" opacity="0.5" />
        <ellipse cx="70" cy="28" rx="5" ry="3.5" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}

function PassportStamp() {
  return (
    <div
      className="hidden sm:flex absolute left-0 bottom-8 lg:bottom-12 w-20 h-20 lg:w-24 lg:h-24 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-300/80 -rotate-12 pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="introStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6" letterSpacing="1.5" className="uppercase">
            <textPath href="#introStampCircle" startOffset="5%">
              alma viajera • historias •
            </textPath>
          </text>
        </svg>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="absolute left-1/4 right-0 bottom-16 sm:bottom-20 h-16 pointer-events-none opacity-60 z-0"
      aria-hidden
    >
      <svg className="w-full h-full" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none">
        <path
          d="M0 45 Q 80 10, 160 35 T 300 20"
          stroke={ACCENT_SOFT}
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
      </svg>
      <div className="absolute right-[15%] top-1 rotate-[-12deg]" style={{ color: ACCENT }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function VisualCollage() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none min-h-[340px] sm:min-h-[400px] lg:min-h-[440px]">
      <BranchDecor />
      <PassportStamp />
      <FlightPath />

      {/* Polaroid playa (atrás) */}
      <div className="absolute left-4 sm:left-8 top-4 sm:top-6 z-10 w-[48%] sm:w-[46%] max-w-[200px] -rotate-6 shadow-xl">
        <div className="bg-white p-2 sm:p-2.5 pb-8 sm:pb-10">
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 block w-12 h-3 rounded-sm opacity-90"
            style={{ backgroundColor: `${ACCENT}55` }}
            aria-hidden
          />
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src={BEACH_IMAGE}
              alt="Atardecer en la playa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Polaroid montaña (adelante) */}
      <div className="absolute right-4 sm:right-6 bottom-16 sm:bottom-20 z-20 w-[52%] sm:w-[50%] max-w-[220px] rotate-[5deg] shadow-xl">
        <div className="bg-white p-2 sm:p-2.5 pb-8 sm:pb-10">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={MOUNTAIN_IMAGE}
              alt="Paisaje de montaña y lago"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Nota con clip */}
      <div
        className="absolute right-2 sm:right-4 bottom-0 z-30 w-36 sm:w-40 rotate-[3deg] shadow-md"
        aria-hidden
      >
        <div className="relative bg-white p-3 sm:p-4 pt-6">
          <svg
            className="absolute -top-3 right-3 w-6 h-8 text-amber-500/90"
            viewBox="0 0 24 32"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 4 C8 4 6 14 8 22 C9 26 11 28 12 30 M16 4 C16 4 18 14 16 22 C15 26 13 28 12 30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="block text-center mb-1" style={{ color: ACCENT }}>
            ♥
          </span>
          <p className={`${playfair.className} text-[11px] sm:text-xs text-center leading-snug text-gray-600`}>
            Cada viaje es un{" "}
            <span className="italic" style={{ color: ACCENT }}>
              recuerdo
            </span>{" "}
            para toda la vida.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Intro = () => {
  return (
    <ScrollReveal>
      <section
        className={`${playfair.variable} w-full py-14 sm:py-16 md:py-20 lg:py-24`}
        style={{ backgroundColor: "#f8f9fa" }}
        aria-labelledby="intro-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Texto */}
            <div className="w-full lg:w-1/2 order-1">
              <p
                className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
                style={{ color: ACCENT }}
              >
                <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                Tu próxima aventura te espera
              </p>

              <h2
                id="intro-heading"
                className={`${playfair.className} font-semibold leading-[1.2]`}
                style={{
                  color: NAVY,
                  fontSize: "clamp(1.65rem, 4.2vw, 2.75rem)",
                }}
              >
                Animáte a dar el{" "}
                <span className="italic font-normal" style={{ color: ACCENT }}>
                  primer paso
                </span>
                <br />
                y descubrí el{" "}
                <span className="italic font-normal" style={{ color: ACCENT }}>
                  mundo
                </span>
                <br />
                <span
                  className="block mt-2 text-xl sm:text-2xl md:text-[1.65rem] italic font-normal"
                  style={{ color: ACCENT_SOFT }}
                >
                  que te está esperando.
                </span>
              </h2>

              <TitleDivider />

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                Viajar te transforma: conocés nuevos lugares, nuevas personas y te
                convertís en una nueva versión de vos.
              </p>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="https://www.instagram.com/vane_almaviajera/"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: ACCENT, backgroundColor: "rgba(93, 135, 255, 0.1)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  Empezá tu viaje
                </Link>
              </div>
            </div>

            {/* Collage */}
            <div className="w-full lg:w-1/2 order-2">
              <VisualCollage />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Intro;
