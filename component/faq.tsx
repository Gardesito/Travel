"use client";

import { useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  MessageCircle,
  BookOpen,
  Calendar,
  MapPin,
  Heart,
  ChevronDown,
  Compass,
} from "lucide-react";
import ScrollReveal from "@/component/ScrollReveal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const NAVY = "#1A2B4C";
const ACCENT = "#5D87FF";
const ICON_BG = "#E8EEFF";

const MAIN_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215093/Firefly_llzjd3.png";

const polaroids = [
  {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    alt: "Torre Eiffel",
    rotate: "-rotate-6",
  },
  {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
    alt: "Big Ben",
    rotate: "rotate-3",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80",
    alt: "Coliseo Romano",
    rotate: "-rotate-3",
  },
  {
    src: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5c?w=400&q=80",
    alt: "Templo en Tailandia",
    rotate: "rotate-6",
  },
];

const faqs = [
  {
    id: 1,
    pregunta: "¿Ofrecés asesoría personalizada para planear viajes?",
    respuesta:
      "Sí. Puedo ayudarte a elegir destinos, armar itinerarios según tu tiempo y presupuesto, recomendar alojamientos y darte tips prácticos. Escribime desde la sección de contacto para coordinar.",
    icon: MessageCircle,
  },
  {
    id: 2,
    pregunta: "¿Los relatos del blog son experiencias reales?",
    respuesta:
      "Absolutamente. Todos los relatos y experiencias que comparto en el blog son vivencias reales de mis viajes. Me comprometo a compartir solo contenido auténtico y honesto sobre los destinos que visito.",
    icon: BookOpen,
  },
  {
    id: 3,
    pregunta:
      "¿Con cuánta anticipación debería contactarte si quiero planear un viaje?",
    respuesta:
      "Te recomiendo contactarme con al menos 2-3 meses de anticipación para viajes internacionales y 1 mes para destinos nacionales. Así puedo preparar un itinerario detallado y ayudarte con las mejores opciones.",
    icon: Calendar,
  },
  {
    id: 4,
    pregunta:
      "¿Podés recomendar alojamientos, actividades o transporte en distintos destinos?",
    respuesta:
      "Sí, puedo recomendarte alojamientos que visité o conozco por referencias, actividades según tus intereses y opciones de transporte. Todo basado en mi experiencia personal y la de otros viajeros.",
    icon: MapPin,
  },
  {
    id: 5,
    pregunta: "¿Publicas contenido de marca o colaboraciones?",
    respuesta:
      "Sí, trabajo con marcas y destinos que realmente aportan valor a mi audiencia. Siempre mantengo la transparencia y solo recomiendo lugares y servicios que probé personalmente o en los que confío genuinamente.",
    icon: Heart,
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
      className="hidden sm:flex absolute -left-2 sm:left-0 top-0 z-20 w-20 h-20 sm:w-24 sm:h-24 items-center justify-center rounded-full border-2 border-dashed border-gray-300/80 text-gray-400/60 -rotate-12 pointer-events-none"
      aria-hidden
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <path
              id="faqStampCircle"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="currentColor" fontSize="6.5" letterSpacing="1.5" className="uppercase">
            <textPath href="#faqStampCircle" startOffset="5%">
              alma viajera • historias •
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

function CompassRose() {
  return (
    <div
      className="hidden lg:block absolute right-4 xl:right-8 top-4 w-14 h-14 text-gray-300/90 pointer-events-none"
      aria-hidden
    >
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
        <path d="M60 8 L63 55 L60 60 L57 55 Z" fill="currentColor" opacity="0.5" />
        <path d="M60 112 L57 65 L60 60 L63 65 Z" fill="currentColor" opacity="0.5" />
        <path d="M8 60 L55 57 L60 60 L55 63 Z" fill="currentColor" opacity="0.5" />
        <path d="M112 60 L65 63 L60 60 L65 57 Z" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}

function VisualCollage() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
      <PassportStamp />

      {/* Nota tipo polaroid */}
      <div
        className="hidden md:block absolute -left-4 lg:-left-8 top-[38%] z-20 w-36 lg:w-40 bg-white p-4 shadow-md rotate-[-8deg] rounded-sm border border-gray-100"
        aria-hidden
      >
        <p
          className={`${playfair.className} text-sm italic leading-snug text-gray-700`}
        >
          Acompañamiento real para viajes inolvidables.
        </p>
        <span className="block mt-2 text-rose-400 text-lg" aria-hidden>
          ♥
        </span>
      </div>

      {/* Imagen principal */}
      <div className="relative z-10 mx-auto w-[85%] sm:w-[78%] lg:w-[88%] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(26,43,76,0.12)]">
        <img
          src={MAIN_IMAGE}
          alt="Viajera con pasaporte y maleta"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Polaroids */}
      <div className="relative z-20 -mt-10 sm:-mt-14 px-2 sm:px-4 flex justify-center gap-2 sm:gap-3">
        {polaroids.map((photo) => (
          <div
            key={photo.alt}
            className={`${photo.rotate} flex-shrink-0 w-[18%] sm:w-[22%] max-w-[88px] bg-white p-1 sm:p-1.5 pb-4 sm:pb-5 shadow-lg`}
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Ruta de vuelo */}
      <div className="relative mt-6 h-10 w-full max-w-md mx-auto opacity-70" aria-hidden>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 320 40"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 Q 80 5, 160 20 T 320 15"
            stroke="#D1D5DB"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>
        <div
          className="absolute left-[45%] top-0"
          style={{ color: ACCENT }}
        >
          <svg className="w-4 h-4 rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  pregunta,
  respuesta,
  icon: Icon,
  isOpen,
  onToggle,
}: {
  pregunta: string;
  respuesta: string;
  icon: typeof MessageCircle;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-[0_2px_16px_rgba(26,43,76,0.06)] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-gray-50/80"
        aria-expanded={isOpen}
      >
        <span
          className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: ICON_BG, color: NAVY }}
        >
          <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
        </span>

        <span
          className="flex-1 text-sm sm:text-base font-medium leading-snug pr-2"
          style={{ color: NAVY }}
        >
          {pregunta}
        </span>

        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: NAVY }}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 sm:pl-[4.25rem] text-sm sm:text-[15px] text-gray-500 leading-relaxed">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ScrollReveal>
      <section
        className={`${playfair.variable} relative w-full overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24`}
        style={{ backgroundColor: "#f9f9f9" }}
        aria-labelledby="faq-heading"
      >
        <CompassRose />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Collage — primero en móvil */}
            <div className="order-1 lg:order-1">
              <VisualCollage />
            </div>

            {/* FAQ */}
            <div className="order-2 lg:order-2">
              <header className="mb-6 sm:mb-8">
                <p
                  className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
                  style={{ color: ACCENT }}
                >
                  <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                  Preguntas frecuentes
                </p>

                <h2
                  id="faq-heading"
                  className={`${playfair.className} font-semibold leading-tight mb-3`}
                  style={{
                    color: NAVY,
                    fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                  }}
                >
                  Preguntas Frecuentes
                </h2>

                <FourPointStar
                  className="w-3 h-3 mb-6"
                  style={{ color: ACCENT }}
                />
              </header>

              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={faq.id}
                    pregunta={faq.pregunta}
                    respuesta={faq.respuesta}
                    icon={faq.icon}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>

              <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#f9f9f9]"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  <Compass className="w-4 h-4" strokeWidth={2} />
                  Ver más preguntas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
