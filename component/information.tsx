"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  Luggage,
  Compass,
  CircleCheck,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";

const MAIN_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219267/Sin_t%C3%ADtulo-2ffff_jpw9jj.jpg";

const features = [
  {
    title: "Organizá tu plan",
    description: "Convertí tus sueños en un itinerario real.",
    icon: Luggage,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
  },
  {
    title: "Te doy recomendaciones",
    description: "Viajá como local, no como turista.",
    icon: Compass,
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
  },
  {
    title: "Te ayudo a reservar",
    description: "Todo listo para disfrutar desde el primer minuto.",
    icon: CircleCheck,
    iconBg: "#CCFBF1",
    iconColor: "#0D9488",
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

function FlightPathTop() {
  return (
    <div
      className="absolute top-6 sm:top-8 left-0 right-0 h-12 pointer-events-none opacity-60"
      aria-hidden
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 48"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 35 Q 200 8, 400 25 T 800 18"
          stroke="#D1D5DB"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>
      <div
        className="absolute left-[42%] sm:left-[45%] top-1 -rotate-[12deg]"
        style={{ color: ACCENT }}
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  );
}

function PassportStamp({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`hidden sm:flex absolute w-20 h-20 lg:w-24 lg:h-24 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-300/80 pointer-events-none ${flip ? "-scale-x-100" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="infoStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6.5" letterSpacing="1.5" className="uppercase">
            <textPath href="#infoStampCircle" startOffset="5%">
              alma viajera • historias •
            </textPath>
          </text>
        </svg>
        <svg
          className="w-6 h-6 text-gray-300"
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

function TitleDivider() {
  return (
    <div className="flex items-center gap-3 my-5 sm:my-6" aria-hidden>
      <div className="flex-1 h-px bg-gray-200" />
      <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function PolaroidNote() {
  return (
    <div
      className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-right-8 z-20 w-40 sm:w-44 lg:w-48 rotate-[6deg] shadow-lg"
      aria-hidden
    >
      <div className="relative bg-white p-4 sm:p-5 pt-6">
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 rounded-sm opacity-90"
          style={{ backgroundColor: ACCENT }}
        />
        <p
          className={`${playfair.className} text-sm sm:text-base italic leading-snug text-center`}
          style={{ color: ACCENT }}
        >
          Los mejores viajes no se planean, se viven.
        </p>
        <span className="block text-center mt-2 text-rose-400 text-base">♥</span>
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <ScrollReveal>
      <section
        className={`${playfair.variable} relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24`}
        aria-labelledby="information-heading"
      >
        <FlightPathTop />
        <PassportStamp className="left-2 lg:left-6 top-20 opacity-70" />
        <PassportStamp className="right-2 lg:right-6 bottom-12 opacity-50" flip />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12 xl:gap-16">
            {/* Contenido */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <p
                className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-4 flex items-center gap-2"
                style={{ color: ACCENT }}
              >
                <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                Viajá a tu manera
              </p>

              <h2
                id="information-heading"
                className={`${playfair.className} font-semibold leading-tight`}
                style={{
                  color: NAVY,
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                }}
              >
                Viví tu viaje{" "}
                <span className="italic font-normal" style={{ color: ACCENT }}>
                  ideal
                </span>
              </h2>

              <TitleDivider />

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                Cada viaje es único. Por eso te acompaño para que disfrutes sin
                preocuparte por nada.
              </p>

              <ul className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: feature.iconBg,
                          color: feature.iconColor,
                        }}
                      >
                        <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
                      </span>
                      <div className="pt-0.5">
                        <p
                          className="font-semibold text-sm sm:text-base mb-0.5"
                          style={{ color: NAVY }}
                        >
                          {feature.title}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  <Globe className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                  Planificá tu viaje
                </Link>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
                <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-[0_12px_48px_rgba(26,43,76,0.12)] aspect-[4/5] sm:aspect-[3/4] max-h-[520px] lg:max-h-[580px]">
                  <img
                    src={MAIN_IMAGE}
                    alt="Viajera en mirador con vista a la ciudad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <PolaroidNote />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default FeatureSection;
