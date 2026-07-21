"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { CalendarDays, Check, MapPin, Sparkles, Utensils } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=2000&q=90";

type Destination = {
  id: number;
  city: string;
  eyebrow: string;
  description: string;
  image: string;
  placesTitle: string;
  places: string[];
  experience?: string;
  food?: string[];
  recommendations?: string[];
};

const destinations: Destination[] = [
  {
    id: 1,
    city: "Roma",
    eyebrow: "Historia en cada esquina",
    description:
      "Roma merece varios días porque combina monumentos antiguos, iglesias, plazas y barrios con mucha vida.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1800&q=85",
    placesTitle: "Qué visitar",
    places: [
      "Coliseo y Foro Romano.",
      "Ciudad del Vaticano.",
      "Fontana di Trevi.",
      "Piazza Navona y el Panteón.",
      "Plaza Venecia.",
    ],
    recommendations: [
      "Usar calzado cómodo: Roma se disfruta caminando.",
      "Probar una pasta tradicional, una pizza romana y un buen gelato.",
      "Dedicar al menos 3 o 4 días para conocer la ciudad sin apuro.",
    ],
  },
  {
    id: 2,
    city: "Florencia",
    eyebrow: "El corazón del Renacimiento",
    description:
      "Florencia es una ciudad perfecta para los amantes del arte, la arquitectura y la historia.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1784670282/Enhance_image_quality_202607211844_xf6lgw.jpg",
    placesTitle: "Qué visitar",
    places: [
      "Duomo de Florencia.",
      "Galería Uffizi.",
      "Galería de la Academia.",
      "Ponte Vecchio.",
    ],
    recommendations: [
      "Reservar entradas para los museos con anticipación.",
      "Subir a algún mirador para disfrutar la vista de la ciudad.",
      "Probar platos típicos de la Toscana, como la bistecca alla fiorentina.",
    ],
  },
  {
    id: 3,
    city: "Milán",
    eyebrow: "Moda, diseño y elegancia italiana",
    description:
      "Milán muestra una cara más moderna de Italia, combinando historia, compras y una gran oferta gastronómica.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1784669658/IMG_4718_ubwhmd.jpg",
    placesTitle: "Qué visitar",
    places: [
      "Duomo de Milán.",
      "Galería Vittorio Emanuele II.",
      "Castillo Sforzesco.",
      "Barrio de Brera.",
      "Cementerio Monumental.",
    ],
    recommendations: [
      "Subir a la terraza del Duomo para disfrutar una vista diferente.",
      "Reservar tiempo para conocer la zona de Navigli, especialmente al atardecer.",
      "Combinar la visita con compras o diseño italiano.",
    ],
  },
];

function FourPointStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

export default function Italia() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada del viaje por Italia">
            <div
              className="min-h-[38vh] w-full bg-cover bg-center sm:min-h-[45vh] md:min-h-[52vh] lg:min-h-[58vh]"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </section>

          <section className="relative z-10 mx-auto -mt-14 max-w-3xl px-4 sm:-mt-16 sm:px-6 md:-mt-20 md:px-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#fff7e8] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32">
              <span role="img" aria-label="Bandera de Italia">🇮🇹</span>
            </div>

            <div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-8">
              <FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" />
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                Mi recorrido por Europa
              </p>
              <h1
                className={`${playfair.className} font-semibold leading-tight`}
                style={{ color: NAVY, fontSize: "clamp(1.9rem, 5vw, 3rem)" }}
              >
                Italia
                <span className="block font-normal italic" style={{ color: ACCENT }}>
                  un viaje para recordar
                </span>
              </h1>
              <FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" />
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Mi viaje por Italia fue una experiencia inolvidable. Durante el recorrido visité algunas de las ciudades más emblemáticas del país: Roma, Florencia y Milán. Quedé enamorada de cada ciudad. Fue un viaje lleno de paisajes, historia, arte y momentos especiales que siempre recordaré. Aquí te dejo los lugares que visité y a los que volvería mil veces.

              </p>
              <div className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-sm text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                <p>Comencé visitando Roma, continué por Florencia y terminé en Milán.</p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:space-y-8 sm:px-6 sm:py-14 md:px-8 md:py-16">
            {destinations.map((destination) => (
              <section
                key={destination.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] sm:rounded-3xl"
              >
                <div
                  className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[21/9]"
                  style={{ backgroundImage: `url("${destination.image}")` }}
                  role="img"
                  aria-label={`Vista de ${destination.city}`}
                />
                <div className="relative bg-white px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs" style={{ color: ACCENT }}>
                    {destination.eyebrow}
                  </p>
                  <h2 className={`${playfair.className} text-2xl font-semibold leading-tight sm:text-3xl`} style={{ color: NAVY }}>
                    {destination.city}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                    {destination.description}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>
                      {destination.placesTitle}
                    </h3>
                    <ul className="mt-3 grid gap-2.5 text-sm text-gray-600 sm:grid-cols-2">
                      {destination.places.map((place) => (
                        <li key={place} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={2} />
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {destination.experience && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8f9fa] px-4 py-3 text-sm text-gray-600">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={1.8} />
                      <p><strong style={{ color: NAVY }}>Experiencia recomendada:</strong> {destination.experience}</p>
                    </div>
                  )}

                  {destination.recommendations && (
                    <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={1.8} />
                        <h3 className="font-semibold" style={{ color: NAVY }}>Recomendaciones</h3>
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {destination.recommendations.map((recommendation) => (
                          <li key={recommendation} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={2} />
                            <span>{recommendation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {destination.food && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#fffaf1] px-4 py-4 text-sm text-gray-600">
                      <Utensils className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} strokeWidth={1.8} />
                      <div>
                        <h3 className="font-semibold" style={{ color: NAVY }}>Comida típica</h3>
                        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                          {destination.food.map((dish) => <li key={dish}>{dish}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </section>

          <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
            <div className="rounded-2xl border border-[#5D87FF]/15 bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-8 sm:py-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5D87FF]/10">
                  <CalendarDays className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                    Consejos para organizar el viaje
                  </p>
                  <h2 className={`${playfair.className} text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>
                    Mejor época para viajar
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                  <span><strong style={{ color: NAVY }}>Primavera y otoño:</strong> suelen ser ideales por el clima agradable y la menor cantidad de turistas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                  <span><strong style={{ color: NAVY }}>Verano:</strong> tiene mucha energía, pero también más calor y mayor demanda.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8">
            <FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" />
            <p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>
              Italia se disfruta sin correr. Más allá de los monumentos famosos, lo mejor del viaje está en caminar sus calles, sentarse en una plaza, probar sabores locales y dejarse sorprender por cada ciudad.
            </p>
          </section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
