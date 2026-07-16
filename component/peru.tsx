"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { CalendarDays, Check, Clock3, MapPin, Sparkles, Utensils } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg";

type Stop = {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  description?: string;
  image: string;
  activities: string[];
  food?: string[];
  extraTitle?: string;
  extraText?: string;
  secondPlace?: { title: string; activities: string[] };
  arrival?: string;
  recommendations?: string[];
};

const stops: Stop[] = [
  {
    id: 1,
    title: "Lima",
    subtitle: "La puerta de entrada al Perú",
    time: "2 a 3 días",
    image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1800&q=85",
    activities: [
      "Recorrer el Centro Histórico y la Plaza Mayor.",
      "Visitar la Catedral de Lima y el Convento de San Francisco.",
      "Pasear por Miraflores y disfrutar del Malecón con vistas al océano Pacífico.",
      "Descubrir Barranco, el barrio más bohemio y artístico de la ciudad.",
      "Probar la gastronomía peruana en restaurantes frente al mar.",
    ],
    food: ["Ceviche", "Lomo saltado", "Causa limeña", "Ají de gallina", "Suspiro a la limeña", "Pisco Sour"],
  },
  {
    id: 2,
    title: "Arequipa",
    subtitle: "La Ciudad Blanca",
    time: "2 días",
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1800&q=85",
    activities: [
      "Visitar la Plaza de Armas.",
      "Recorrer el Monasterio de Santa Catalina.",
      "Admirar la arquitectura de sillar, piedra volcánica blanca característica de la ciudad.",
      "Disfrutar de la gastronomía arequipeña.",
      "Si dispones de más tiempo, visitar el Cañón del Colca.",
    ],
    food: ["Rocoto relleno", "Adobo arequipeño", "Chupe de camarones", "Queso helado"],
  },
  {
    id: 3,
    title: "Lago Titicaca",
    subtitle: "Puno y sus comunidades ancestrales",
    time: "2 días",
    image: "https://images.unsplash.com/photo-1545330785-15356daae141?auto=format&fit=crop&w=1800&q=85",
    activities: [
      "Navegar por el Lago Titicaca.",
      "Visitar las Islas Flotantes de los Uros.",
      "Conocer la Isla Taquile o la Isla Amantaní.",
      "Participar en actividades de turismo comunitario.",
    ],
    extraTitle: "Turismo vivencial",
    extraText: "Una de las experiencias más enriquecedoras es alojarse con una familia local. Compartir sus comidas, conocer sus costumbres y participar en sus actividades permite descubrir la cultura andina desde una perspectiva auténtica.",
  },
  {
    id: 4,
    title: "Valle Sagrado de los Incas",
    subtitle: "Pisac y Ollantaytambo",
    time: "2 días",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1800&q=85",
    activities: [
      "Recorrer el sitio arqueológico de Pisac.",
      "Visitar el mercado artesanal.",
      "Disfrutar de las vistas panorámicas del valle.",
    ],
    extraTitle: "Pisac",
    secondPlace: {
      title: "Ollantaytambo",
      activities: [
        "Explorar la fortaleza inca.",
        "Caminar por sus calles empedradas.",
        "Fotografiar uno de los pueblos mejor conservados del Perú.",
      ],
    },
  },
  {
    id: 5,
    title: "Cusco",
    subtitle: "El corazón histórico de los Andes",
    time: "2 a 3 días",
    image: "https://images.unsplash.com/photo-1567597243073-2d274aabecec?auto=format&fit=crop&w=1800&q=85",
    activities: [
      "Recorrer la Plaza de Armas.",
      "Visitar el Mercado de San Pedro.",
      "Pasear por el barrio de San Blas.",
      "Conocer los sitios arqueológicos cercanos.",
    ],
    extraTitle: "Adaptación a la altura",
    extraText: "Cusco se encuentra a 3.399 metros sobre el nivel del mar. Es recomendable descansar durante las primeras horas, evitar comidas muy pesadas y mantenerse bien hidratado.",
  },
  {
    id: 6,
    title: "Machu Picchu",
    subtitle: "Una maravilla del mundo moderno",
    time: "1 día",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg",
    activities: [
      "Recorrer la ciudadela inca.",
      "Disfrutar de los principales miradores.",
      "Conocer la historia y la ingeniería del sitio.",
    ],
    extraTitle: "Cómo llegar",
    arrival: "La mayoría de los viajeros llega en tren desde Ollantaytambo hasta Aguas Calientes y luego continúa en autobús hacia la entrada de Machu Picchu.",
    recommendations: [
      "Compra las entradas con varios meses de anticipación, especialmente en temporada alta.",
      "Llega temprano para disfrutar del sitio con menos visitantes.",
      "Lleva agua, protector solar, sombrero y repelente de insectos.",
      "Respeta las normas de conservación del sitio arqueológico.",
    ],
  },
];

const practicalTips = [
  "Lleva siempre efectivo en soles peruanos para compras en mercados y pequeños comercios.",
  "Contrata un seguro de viaje que cubra asistencia médica y cancelaciones.",
  "Reserva con anticipación los vuelos internos, el tren y las entradas a Machu Picchu, especialmente si viajas entre junio y agosto.",
  "Usa protector solar y mantente hidratado, ya que la radiación solar en los Andes es intensa.",
  "Empaca ropa por capas: pasarás por costa, montaña y zonas de gran altitud con temperaturas muy diferentes.",
  "Respeta las costumbres locales y apoya el turismo responsable comprando productos de artesanos de la región.",
];

function FourPointStar({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" /></svg>;
}

export default function Peru() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada de la guía de viaje por Perú">
            <div className="min-h-[42vh] w-full bg-cover bg-center sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[62vh]" style={{ backgroundImage: `url("${HERO_IMAGE}")` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
          </section>

          <section className="relative z-10 mx-auto -mt-16 max-w-4xl px-4 sm:-mt-20 sm:px-6 md:-mt-24 md:px-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#fff7f7] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32"><span role="img" aria-label="Bandera de Perú">🇵🇪</span></div>
            <div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-9">
              <FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" />
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Mi recorrido por Sudamérica</p>
              <h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.8rem, 4.8vw, 2.9rem)" }}>
                Guía de viaje por Perú
                <span className="block font-normal italic" style={{ color: ACCENT }}>de Lima a Machu Picchu</span>
              </h1>
              <FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" />
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">Perú es uno de los destinos más completos de Sudamérica. En un solo viaje podrás disfrutar de ciudades coloniales, paisajes andinos, comunidades ancestrales, una gastronomía de fama mundial y una de las maravillas del mundo moderno. Esta guía reúne mi experiencia, junto con recomendaciones y consejos para ayudarte a planificar tu aventura.</p>
              <div className="mx-auto mt-5 flex max-w-3xl items-start justify-center gap-2 text-sm text-gray-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p>Lima · Arequipa · Lago Titicaca · Valle Sagrado · Cusco · Machu Picchu</p></div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:space-y-8 sm:px-6 sm:py-14 md:px-8 md:py-16">
            {stops.map((stop) => (
              <section key={stop.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] sm:rounded-3xl">
                <div className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[21/9]" style={{ backgroundImage: `url("${stop.image}")` }} role="img" aria-label={stop.title} />
                <div className="bg-white px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs" style={{ color: ACCENT }}>Parada {stop.id}</p>
                  <div className="mt-1 flex flex-wrap items-end justify-between gap-3"><div><h2 className={`${playfair.className} text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>{stop.title}</h2><p className={`${playfair.className} mt-1 italic text-gray-500`}>{stop.subtitle}</p></div><div className="flex items-center gap-2 rounded-full bg-[#f8f9fa] px-3 py-1.5 text-xs text-gray-600"><Clock3 className="h-3.5 w-3.5" style={{ color: ACCENT }} />{stop.time}</div></div>
                  {stop.description && <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">{stop.description}</p>}

                  <div className="mt-6 border-t border-gray-100 pt-5"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{stop.extraTitle === "Pisac" ? "Pisac · Qué hacer" : "Qué hacer"}</h3><ul className="mt-3 grid gap-2.5 text-sm text-gray-600 sm:grid-cols-2">{stop.activities.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></div>

                  {stop.food && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#fffaf1] px-4 py-4 text-sm text-gray-600"><Utensils className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><div><h3 className="font-semibold" style={{ color: NAVY }}>Platos que no puedes dejar de probar</h3><ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">{stop.food.map((dish) => <li key={dish}>{dish}</li>)}</ul></div></div>}

                  {stop.secondPlace && <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{stop.secondPlace.title} · Qué hacer</h3><ul className="mt-3 grid gap-2.5 text-sm text-gray-600 sm:grid-cols-2">{stop.secondPlace.activities.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></div>}

                  {(stop.extraText || stop.arrival) && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8f9fa] px-4 py-4 text-sm leading-relaxed text-gray-600"><Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p><strong style={{ color: NAVY }}>{stop.extraTitle}:</strong> {stop.extraText ?? stop.arrival}</p></div>}

                  {stop.recommendations && <div className="mt-5"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>Recomendaciones</h3><ul className="mt-3 space-y-2.5 text-sm text-gray-600">{stop.recommendations.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul></div>}
                </div>
              </section>
            ))}
          </section>

          <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-12 sm:px-6 sm:pb-16 md:grid-cols-2 md:px-8">
            <div className="rounded-2xl bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-7"><div className="flex items-center gap-3"><CalendarDays className="h-5 w-5" style={{ color: ACCENT }} /><h2 className={`${playfair.className} text-2xl font-semibold`} style={{ color: NAVY }}>Mejor época para recorrer Perú</h2></div><p className="mt-5 text-sm leading-relaxed text-gray-600">La temporada seca, entre mayo y septiembre, suele ofrecer las mejores condiciones para visitar Cusco, el Valle Sagrado, Machu Picchu y el Lago Titicaca. Lima puede visitarse durante todo el año, aunque el verano, de diciembre a abril, es ideal para disfrutar de la costa y sus actividades al aire libre.</p></div>
            <div className="rounded-2xl bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-7"><h2 className={`${playfair.className} text-2xl font-semibold`} style={{ color: NAVY }}>Consejos prácticos</h2><ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">{practicalTips.map((tip) => <li key={tip} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{tip}</span></li>)}</ul></div>
          </section>

          <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8"><FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" /><p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>Con una buena planificación, este recorrido te permitirá descubrir la diversidad cultural, histórica y natural del Perú, viviendo experiencias que difícilmente olvidarás.</p></section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
