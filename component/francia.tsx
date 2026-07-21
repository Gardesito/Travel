"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { Check, MapPin, Sparkles } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1784669566/IMG_4714.JPG1_cdmu5g.jpg";

const places = [
  {
    id: 1,
    icon: "🗼",
    title: "Torre Eiffel",
    text: "El símbolo más famoso de París es una parada obligatoria. Recomiendo verla tanto de día como de noche, cuando sus luces brillan y crean una postal inolvidable. Para una experiencia especial de cumpleaños, un paseo por sus alrededores al atardecer es una excelente opción.",
  },
  {
    id: 2,
    icon: "🏛️",
    title: "Museo del Louvre",
    text: "Aunque se necesitan varios días para recorrerlo completo, vale la pena visitarlo y admirar algunas de sus obras más famosas, como la Mona Lisa. Además, la pirámide de cristal del museo es uno de los lugares más fotografiados de la ciudad.",
  },
  {
    id: 3,
    icon: "🌳",
    title: "Jardines de Luxemburgo y paseos por la ciudad",
    text: "París se disfruta caminando. Los jardines, las avenidas elegantes y los barrios históricos son perfectos para perderse y descubrir rincones únicos.",
  },
  {
    id: 4,
    icon: "⛪",
    title: "Catedral de Notre-Dame y la zona del Sena",
    text: "Un paseo junto al río Sena permite disfrutar de una de las vistas más bonitas de París. La zona tiene mucho encanto, especialmente al atardecer.",
  },
  {
    id: 5,
    icon: "🛍️",
    title: "Campos Elíseos y Arco del Triunfo",
    text: "Una caminata por esta avenida clásica permite conocer otro lado de París, con tiendas, arquitectura impresionante y uno de los monumentos más emblemáticos de Francia.",
  },
];

const recommendations = [
  "Caminar todo lo posible: muchas de las mejores experiencias aparecen al recorrer sus calles.",
  "Probar la gastronomía local: croissants, quesos, crepes y un buen café en una terraza parisina son parte del viaje.",
  "Reservar con anticipación las entradas a museos y atracciones populares.",
  "Visitar algunos lugares temprano para evitar grandes multitudes.",
  "Dejar tiempo para simplemente disfrutar la ciudad: sentarse en un café, mirar la vida pasar y vivir el momento.",
];

function FourPointStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

export default function Francia() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada del viaje por París">
            <div
              className="min-h-[42vh] w-full bg-cover bg-center sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[62vh]"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/45" />
          </section>

          <section className="relative z-10 mx-auto -mt-16 max-w-3xl px-4 sm:-mt-20 sm:px-6 md:-mt-24 md:px-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f5f7ff] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32">
              <span role="img" aria-label="Bandera de Francia">🇫🇷</span>
            </div>
            <div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-9">
              <FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" />
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                Mi cumpleaños en Francia
              </p>
              <h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
                París
                <span className="block font-normal italic" style={{ color: ACCENT }}>
                  magia, historia y momentos inolvidables
                </span>
              </h1>
              <FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" />
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                París siempre estuvo en mi lista de lugares soñados, y fui a celebrar mi cumpleaños en una de las ciudades más románticas y encantadoras del mundo. Cada rincón de la capital francesa tiene algo especial: calles con historia, cafés con encanto, monumentos increíbles y una atmósfera que invita a disfrutar sin apuro.
              </p>
              <div className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-sm text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                <p>París, Francia</p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
            <div className="mb-7 text-center sm:mb-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs" style={{ color: ACCENT }}>Mi recorrido</p>
              <h2 className={`${playfair.className} mt-2 text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>
                Lugares imperdibles para visitar en París
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {places.map((place) => (
                <section key={place.id} className="rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(26,43,76,0.11)] sm:rounded-3xl sm:px-7 sm:py-7 md:px-8">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5D87FF]/10 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                      <span role="img" aria-hidden>{place.icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Imperdible {place.id}</p>
                      <h3 className={`${playfair.className} mt-1 text-xl font-semibold sm:text-2xl`} style={{ color: NAVY }}>{place.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{place.text}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
            <div className="rounded-2xl border border-[#5D87FF]/15 bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-8 sm:py-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5D87FF]/10">
                  <Sparkles className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
                <h2 className={`${playfair.className} text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>
                  Recomendaciones para disfrutar París
                </h2>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {recommendations.map((recommendation) => (
                  <li key={recommendation} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={2} />
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8">
            <FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" />
            <p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>
              La ciudad tiene una forma única de hacer que cada visitante se sienta dentro de una película, y sin duda es un destino al que siempre dan ganas de volver.
            </p>
          </section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
