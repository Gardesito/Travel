"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { CalendarDays, Check } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783704816/bbff2d7d-5919-488a-b683-fe2fc6e737d4.png";

const INTRO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705561/632506d5-a02d-4c99-8f1b-05cce4e054ba.png";


const wonders = [
  {
    id: 1,
    title: "Laguna de Mar Chiquita",
    text: "La Laguna de Mar Chiquita, también conocida como Ansenuza, es uno de los humedales salinos más grandes de Sudamérica. Su inmensidad crea un ecosistema único donde miles de flamencos encuentran refugio.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783704898/6c84e0bd-a3cf-48d4-aac6-c601377605e9.png",
    recomendaciones: [
        "Avistaje de aves (especialmente flamencos rosados).",
        "Turismo de bienestar gracias a sus aguas salinas.",
        "Fotografía de paisajes infinitos.",
       ],
    
      mejorEpoca: " Noviembre a marzo (clima más fresco y seco, menos calor y menos lluvias)"},
  {
    id: 2,
    title: "Cerro Champaquí ",
    text: "El Cerro Champaquí es el punto más alto de la provincia, con 2790 metros sobre el nivel del mar. Se encuentra en las Sierras Grandes y es un clásico del trekking cordobés.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705013/11e2469c-cf95-4608-9585-f91226e976f1.png",
    recomendaciones: [
        "Senderismo de montaña.",
        "Camping en altura.",
        "Turismo aventura con vistas panorámicas únicas.",
      ],
    
      mejorEpoca: "Diciembre a marzo (verano en Brasil) o septiembre a noviembre (primavera)"},
  {
    id: 3,
    title: "Parque Nacional Quebrada del Condorito ",
    text: "El Parque Nacional Quebrada del Condorito protege uno de los paisajes más imponentes de las sierras: una profunda quebrada de aproximadamente 800 metros donde sobrevuelan cóndores andinos.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705059/89b7c166-d189-4440-b60e-fa5e0d4eaeed.png",
    recomendaciones: [
        "Caminatas por senderos señalizados.",
        "Observación del cóndor andino en su hábitat natural.",
        "Fotografía de paisajes de altura.",
    
      ],
    
      mejorEpoca: "Mayo a septiembre (temporada seca)"},
  {
    id: 4,
    title: "Cueva de los Pajaritos",
    text: "Cerca de Tanti se encuentra la Cueva de los Pajaritos, un pequeño pero encantador refugio natural donde habita el “pájaro güer” o chirrío.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705116/9d2983d4-344e-4cb8-94fe-b0cda0c1f979.png",
    recomendaciones: [
        "Caminatas cortas en familia.",
        "Observación de aves.",
        "Conexión con la fauna local.",
       
      ],
    
      mejorEpoca: "Marzo a mayo y septiembre a noviembre (Clima templado, sin calor extremo)"},
  {
    id: 5,
    title: "Cerro Colorado",
    text: "La Reserva Natural y Cultural Cerro Colorado combina naturaleza e historia. Sus formaciones rocosas de tonos rojizos enmarcan uno de los sitios arqueológicos más importantes de la provincia.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705161/108d1942-7c86-48ef-8f55-89eae0ca27a2.png",
    recomendaciones: [
        "Pinturas rupestres de pueblos comechingones y sanavirones.",
        "Senderos interpretativos.",
        "Paisajes de gran valor cultural y natural.",
        
      ],
    
      mejorEpoca: "Noviembre a febrero (Clima fresco y seco, evitando el calor extremo y la humedad del verano)"},
  {
    id: 6,
    title: " Cuevas de Ongamira ",
    text: "Las Cuevas de Ongamira, cerca de Capilla del Monte, forman un valle rodeado de paredes de arenisca rojiza con gran valor geológico.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705240/f333543c-f30f-4ff0-9d41-486c61525329.png",
    recomendaciones: [
        "Exploración paisajística.",
        "Turismo histórico y geológico.",
        "Conexión con la naturaleza serrana.",
      
      ],
    
      mejorEpoca: "Abril-junio y septiembre-octubre (temperaturas agradables y menos turistas que en julio-agosto)"},
  {
    id: 7,
    title: " Cerro Uritorco ",
    text: "El Cerro Uritorco, con 1979 metros de altura, es el pico más alto de las Sierras Chicas. Es uno de los destinos más conocidos de Córdoba por su mezcla de trekking, paisajes y misticismo.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705292/5fda5ec1-e2f4-41a5-9c35-729ad53b5d84.png",
    recomendaciones: [
        "Ascensos exigentes pero accesibles.",
        "Vistas panorámicas de Punilla.",
        "Turismo espiritual y de aventura.",
        
      ],
    
      mejorEpoca: "rimavera (abril-mayo) y otoño (septiembre-octubre) temperaturas agradables y paisajes espectaculares con flores o follaje otoñal."
},
];

function FourPointStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

export default function SevenWonders() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada siete maravillas">
            <div
              className="w-full min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] lg:min-h-[58vh] bg-cover bg-center"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
            <div className="absolute inset-0 bg-black/25" />
          </section>

          <section className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 -mt-14 sm:-mt-16 md:-mt-20 z-10">
            <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${INTRO_IMAGE}")` }}
                role="img"
                aria-label="Foto de viajera"
              />
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(26,43,76,0.1)] px-5 sm:px-8 py-7 sm:py-8 mt-4 sm:mt-5 text-center">
              <FourPointStar className="w-2.5 h-2.5 mx-auto mb-3 text-[#5D87FF]" />
              <h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}>
              Mis ojos frente a las 
                <span className="block italic font-normal" style={{ color: ACCENT }}>Siete Maravillas de Córdoba</span>
              </h1>
              <FourPointStar className="w-3 h-3 mx-auto my-4 text-[#5D87FF]" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Las siete Maravillas naturales de Córdoba fueron elegidas por voto popular en 2008 ,esta provincia que se encuentra en el centro del país nos sorprende con naturaleza, historia y paisajes únicos que hacen de Córdoba un lugar mágico.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 space-y-6 sm:space-y-8">
            {wonders.map((wonder) => (
              <div
                key={wonder.id}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] transition-shadow duration-300"
              >
                <div
                  className="w-full aspect-[16/9] sm:aspect-[21/9] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url("${wonder.image}")` }}
                  role="img"
                  aria-label={wonder.title}
                />
                <div className="relative px-5 sm:px-7 md:px-8 py-6 sm:py-7 md:py-8 bg-white">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: ACCENT }}>
                    Maravilla {wonder.id}
                  </p>
                  <h2 className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-semibold leading-tight`} style={{ color: NAVY }}>
                    {wonder.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {wonder.text}
                  </p>
                  {wonder.recomendaciones && (
  <div className="mt-6 pt-5 border-t border-gray-100">
    <h4 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: NAVY }}>Recomendaciones:</h4>
    <ul className="text-sm text-gray-600 mt-3 space-y-2.5">
      {wonder.recomendaciones.map((rec, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} strokeWidth={2} />
          <span>{rec}</span>
        </li>
      ))}
    </ul>
  </div>
)}

{wonder.mejorEpoca && (
  <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8f9fa] px-4 py-3 text-sm text-gray-600">
    <CalendarDays className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} strokeWidth={1.8} />
    <p><strong style={{ color: NAVY }}>Mejor época:</strong> {wonder.mejorEpoca}</p>
  </div>
)}
                </div>
              </div>
            ))}
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-14 sm:pb-20 text-center">
            <FourPointStar className="w-4 h-4 mx-auto mb-5 text-[#5D87FF]" />
            <p className={`${playfair.className} text-base sm:text-lg text-gray-600 leading-relaxed italic`}>
              Este recorrido me recuerda siempre que los suenos se construyen paso a paso.
              Viajar cambia la mirada, abre la mente y deja recuerdos para toda la vida.
            </p>
          </section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
