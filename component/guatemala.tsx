"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { CalendarDays, Check, Clock3, Coins, Languages, MapPin, Sparkles } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1779112051/d4e911d667da8003bd5d289145979ea6_hdt9el.jpg";

const countryFacts = [
  { icon: MapPin, label: "Capital", value: "Ciudad de Guatemala" },
  { icon: Coins, label: "Moneda", value: "Quetzal guatemalteco (GTQ)" },
  { icon: Languages, label: "Idioma", value: "Español e idiomas mayas" },
  { icon: CalendarDays, label: "Mejor época", value: "De noviembre a abril" },
  { icon: Clock3, label: "Duración", value: "Entre 7 y 10 días" },
];

const experiences = [
  {
    id: 1,
    title: "Antigua Guatemala",
    eyebrow: "Historia y encanto colonial",
    description:
      "Antigua es una de las ciudades más bonitas del país. Sus calles empedradas, arquitectura colonial y vistas a los volcanes la convierten en una parada imprescindible.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1784668669/IMG_21871_kpjeuy.jpg",
    listTitle: "Qué hacer",
    items: [
      "Caminar por el centro histórico.",
      "Visitar el Arco de Santa Catalina.",
      "Subir al Cerro de la Cruz.",
      "Probar café guatemalteco.",
      "Explorar mercados y tiendas artesanales.",
    ],
    recommendation: "Reserva al menos dos o tres noches para disfrutar la ciudad con calma.",
  },
  {
    id: 2,
    title: "Aventura en el Volcán Acatenango",
    eyebrow: "Una experiencia entre volcanes",
    description:
      "Una de las experiencias más famosas de Guatemala es la caminata al Volcán Acatenango. La recompensa es una de las mejores vistas del Volcán de Fuego.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1784668793/Enhance_image_quality_202607211819_oraqoj.jpg",
    listTitle: "Consejos",
    items: [
      "Lleva ropa térmica.",
      "Usa calzado cómodo de montaña.",
      "Contrata una excursión con guía.",
      "Prepárate para temperaturas bajas durante la noche.",
    ],
  },
  {
    id: 3,
    title: "Lago de Atitlán",
    eyebrow: "Naturaleza y cultura maya",
    description: "El Lago de Atitlán es uno de los lugares más impresionantes del país.",
    image:
      "https://res.cloudinary.com/dtmziqubb/image/upload/v1784668955/IMG_27634_rddtmq.jpg",
    listTitle: "Pueblos recomendados",
    items: [
      "San Juan La Laguna: arte y cultura maya.",
      "San Pedro La Laguna: ambiente viajero.",
      "Santiago Atitlán: tradiciones locales.",
      "Panajachel: principal punto de llegada.",
    ],
    activities: [
      "Recorrer el lago en lancha.",
      "Visitar mercados artesanales.",
      "Disfrutar los amaneceres.",
      "Hacer caminatas con vistas panorámicas.",
    ],
  },
];

const usefulTips = [
  "Lleva una mochila cómoda para excursiones.",
  "Reserva alojamiento con anticipación en temporada alta.",
  "Aprende algunas palabras básicas de español si no lo hablas.",
  "Respeta las costumbres y tradiciones locales.",
  "Prueba mercados y comida local para una experiencia más auténtica.",
  "Planifica bien los tiempos de traslado: algunas rutas son más lentas de lo que parecen en el mapa.",
];

function FourPointStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

export default function Guatemala() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada del viaje por Guatemala">
            <div className="min-h-[42vh] w-full bg-cover bg-center sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[62vh]" style={{ backgroundImage: `url("${HERO_IMAGE}")` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/45" />
          </section>

          <section className="relative z-10 mx-auto -mt-16 max-w-4xl px-4 sm:-mt-20 sm:px-6 md:-mt-24 md:px-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f5f9ff] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32">
              <span role="img" aria-label="Bandera de Guatemala">🇬🇹</span>
            </div>
            <div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-9">
              <FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" />
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Mi viaje en 2026</p>
              <h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.9rem, 5vw, 3rem)" }}>
                Viaje a Guatemala
                <span className="block font-normal italic" style={{ color: ACCENT }}>aventura, cultura y naturaleza</span>
              </h1>
              <FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" />
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Viajé a Guatemala este año, 2026, y me sorprendió. Me encontré con un país lleno de contrastes: volcanes activos, antiguas ciudades mayas, pueblos con tradiciones ancestrales, gente muy amable y paisajes que parecen sacados de una postal. Es un destino ideal para viajeros que buscan aventura, cultura y naturaleza.
              </p>

              <div className="mt-7 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-5">
                {countryFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl bg-[#f8f9fa] px-3 py-3.5">
                    <Icon className="mb-2 h-4 w-4" style={{ color: ACCENT }} strokeWidth={1.8} />
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:space-y-8 sm:px-6 sm:py-14 md:px-8 md:py-16">
            {experiences.map((experience) => (
              <section key={experience.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] sm:rounded-3xl">
                <div className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[21/9]" style={{ backgroundImage: `url("${experience.image}")` }} role="img" aria-label={experience.title} />
                <div className="bg-white px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs" style={{ color: ACCENT }}>{experience.eyebrow}</p>
                  <h2 className={`${playfair.className} text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>{experience.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">{experience.description}</p>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{experience.listTitle}</h3>
                    <ul className="mt-3 grid gap-2.5 text-sm text-gray-600 sm:grid-cols-2">
                      {experience.items.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}
                    </ul>
                  </div>

                  {experience.activities && (
                    <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>Actividades</h3>
                      <ul className="mt-3 grid gap-2.5 text-sm text-gray-600 sm:grid-cols-2">
                        {experience.activities.map((activity) => <li key={activity} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{activity}</span></li>)}
                      </ul>
                    </div>
                  )}

                  {experience.recommendation && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#fffaf1] px-4 py-3 text-sm text-gray-600">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                      <p><strong style={{ color: NAVY }}>Recomendación:</strong> {experience.recommendation}</p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </section>

          <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-12 sm:px-6 sm:pb-16 md:grid-cols-2 md:px-8">
            <div className="rounded-2xl bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-7">
              <h2 className={`${playfair.className} text-2xl font-semibold`} style={{ color: NAVY }}>Consejos útiles para tu viaje</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
                {usefulTips.map((tip) => <li key={tip} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{tip}</span></li>)}
              </ul>
            </div>

            <div className="rounded-2xl bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-7">
              <h2 className={`${playfair.className} text-2xl font-semibold`} style={{ color: NAVY }}>Mejor época para visitar Guatemala</h2>
              <div className="mt-5 space-y-5 text-sm text-gray-600">
                <div><h3 className="font-semibold" style={{ color: NAVY }}>Temporada seca <span className="font-normal">(noviembre-abril)</span></h3><ul className="mt-2 space-y-2"><li>Mejor clima para excursiones.</li><li>Ideal para volcanes y visitas culturales.</li></ul></div>
                <div className="border-t border-gray-100 pt-5"><h3 className="font-semibold" style={{ color: NAVY }}>Temporada verde <span className="font-normal">(mayo-octubre)</span></h3><ul className="mt-2 space-y-2"><li>Paisajes más verdes.</li><li>Menos turistas.</li><li>Posibilidad de lluvias.</li></ul></div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8">
            <FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" />
            <p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>Guatemala me recordó que los viajes más inolvidables combinan paisajes extraordinarios con la calidez de su gente.</p>
          </section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
