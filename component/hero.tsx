"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import ScrollReveal from "@/component/ScrollReveal";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

function FourPointStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

function PassportStamp() {
  return (
    <div
      className="hidden sm:block absolute left-4 md:left-8 lg:left-12 bottom-20 md:bottom-24 z-10 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-white/50 text-white/50 -rotate-12 pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path id="heroStamp" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
          <text fill="currentColor" fontSize="6" letterSpacing="1.5" className="uppercase">
            <textPath href="#heroStamp" startOffset="5%">alma viajera • historias •</textPath>
          </text>
        </svg>
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function FlightPath() {
  return (
    <div className="hidden sm:block absolute left-4 md:left-16 bottom-8 md:bottom-12 z-10 w-40 md:w-56 h-12 pointer-events-none opacity-80" aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 200 48" fill="none" preserveAspectRatio="none">
        <path d="M0 35 Q 60 8, 120 25 T 200 15" stroke={ACCENT} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.7" />
      </svg>
      <div className="absolute left-[55%] top-0 rotate-[-15deg]" style={{ color: ACCENT }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function QuoteCard() {
  return (
    <div
      className="hidden md:block absolute right-6 lg:right-12 bottom-16 lg:bottom-20 z-10 max-w-[220px] lg:max-w-[260px] bg-white/85 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/60"
      aria-hidden
    >
      <FourPointStar className="w-3 h-3 mb-2" style={{ color: ACCENT }} />
      <p className="text-sm leading-relaxed font-medium" style={{ color: NAVY }}>
        Viajar es coleccionar momentos, no cosas.
      </p>
      <span className="block mt-2 text-rose-400 text-sm">♥</span>
    </div>
  );
}

export default function Hero() {
  return (
    <main className={`${playfair.variable} min-h-screen`}>
      <ScrollReveal>
        <section className="relative w-full overflow-hidden min-h-[560px] min-h-screen pt-[72px] lg:pt-[120px]">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dtmziqubb/video/upload/v1784750800/banner_video_inicio_1_weebhp.webm"
                type="video/webm"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/95 via-[#f8f9fa]/55 to-[#f8f9fa]/15 sm:via-[#f8f9fa]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/40 via-transparent to-transparent" />
          </div>

          <PassportStamp />
          <FlightPath />
          <QuoteCard />

          <div className="relative z-10 flex min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-120px)] items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-16 md:pb-20">
            <div className="max-w-xl lg:max-w-2xl">
              <p
                className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-4 sm:mb-5 flex items-center gap-2 flex-wrap"
                style={{ color: NAVY }}
              >
                <FourPointStar className="w-2.5 h-2.5 flex-shrink-0" style={{ color: ACCENT }} />
                Nuevas rutas
                <span className="opacity-50">•</span>
                Nuevas historias
              </p>

              <h1
                className={`${playfair.className} font-semibold leading-[1.15] mb-5 sm:mb-6`}
                style={{
                  color: NAVY,
                  fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
                }}
              >
                Explorá destinos, viví experiencias, guardá{" "}
                <span className="italic font-normal" style={{ color: ACCENT }}>
                  recuerdos.
                </span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-7 sm:mb-8"
                style={{ color: `${NAVY}CC` }}
              >
                Hola, soy Vanesa. Desde un pequeño pueblo al mundo, convertí mi pasión por
                viajar en una forma de inspirar y acompañar a otros a vivir experiencias que
                dejan huella.
              </p>

              <Link
                href="https://www.instagram.com/vane_almaviajera/"
                className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 backdrop-blur-sm"
                style={{
                  borderColor: ACCENT,
                  color: ACCENT,
                  backgroundColor: "rgba(93, 135, 255, 0.12)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: ACCENT, backgroundColor: "rgba(93, 135, 255, 0.15)" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                Contacto
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
