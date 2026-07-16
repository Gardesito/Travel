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
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705752/25f984c3-9d7f-41c6-b98e-78a8e82afb0c.png";

const INTRO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1765214628/2a284007-8467-40ed-9071-61cb020fc812_m6eyup.jpg";


const wonders = [
  {
    id: 1,
    title: "Cataratas del Iguazú  (Misiones)",
    text: "Una de las cascadas más impresionantes del mundo. . Más de 270 saltos de agua rodeados de selva tropical. Es un lugar increíble ",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705752/25f984c3-9d7f-41c6-b98e-78a8e82afb0c.png",
    recomendaciones: [
        "Lleva piloto o ropa impermeable. ",
        "Ve temprano para evitar calor y más gente.",
        "Contratar guía para entender la historia.",
        "Ojo con los coatíes: no les des comida.",
       ],
    
      mejorEpoca: " Noviembre a marzo (clima más fresco y seco, menos calor y menos lluvias)"},
  {
    id: 2,
    title: " Glaciar Perito Moreno (Santa Cruz)",
    text: "Un gigante de hielo famoso por sus impresionantes desprendimientos que te deja impactada.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783706093/0468ff5d-9e98-44f7-a0f0-a2d4292af4b0.png",
    recomendaciones: [
        "Abrigo en capas aunque haya sol.",
        "El  trekking sobre hielo es increíble.",
        "Lleva batería extra: vas a sacar MUCHAS fotos.",
        "Quédate en silencio un rato para escuchar el hielo romperse."
      ],
    
      mejorEpoca: "Diciembre a marzo (verano en Brasil) o septiembre a noviembre (primavera)"},
  {
    id: 3,
    title: "Parque Nacional Talampaya ",
    text: "Cañones rojos gigantes y paisajes tipo película. Cañones rojizos y paisajes impactantes declarados Patrimonio Mundial.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1784240149/Remove_person_in_middle_202607161915_py86la.jpg",
    recomendaciones: [
        "Sombrero y mucho agua.",
        "Las excursiones guiadas son la mejor forma de recorrerlo.",
        "Al atardecer los colores se ven espectaculares.",
        "Ideal para fotos panorámicas.",
    
      ],
    
      mejorEpoca: "Mayo a septiembre (temporada seca)"},
  {
    id: 4,
    title: "Salinas Grandes (Jujuy)",
    text: "Un inmenso desierto blanco perfecto para fotos espectaculares.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705883/2ce5034f-7d2c-4fca-8812-4c247c8825c0.png",
    recomendaciones: [
        "Lentes de sol obligatorios.",
        "Fotos creativas con perspectiva.",
        "Mejor ir en días secos.",
       
      ],
    
      mejorEpoca: "Marzo a mayo y septiembre a noviembre (Clima templado, sin calor extremo)"},
  {
    id: 5,
    title: "Bañado La Estrella (Formosa)",
    text: "Es uno de los humedales más sorprendentes de Argentina y uno de los más grandes del país.Es un paisaje cambiante, donde el agua, los pastizales y la fauna crean un escenario único en cada estación.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783705903/d9d5d902-d5df-46e0-b049-4c75de24a798.png",
    recomendaciones: [
        "Hacer excursiones en canoa o bote para recorrerlo.",
        "Quédate en silencio un rato para escuchar.",
        "Llevar repelente, agua y protección solar.",
        "Ir con guía local para conocer los mejores puntos.",
        
      ],
    
      mejorEpoca: "entre abril y octubre (cuando hay más agua y fauna visible) "},
  {
    id: 6,
    title: "Lago Nahuel Huapi (Bariloche)",
    text: "El Lago Nahuel Huapi es uno de los paisajes más icónicos de la Patagonia. Es famoso por sus aguas azul profundo, montañas nevadas y bosques infinitos ",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1784239993/Enhance_image_quality_2K_202607161912_y5tn7a.jpg",
    recomendaciones: [
        "Senderismo en verano /  esquí en invierno .",
        "Clima cambiante: vestite en capas.",
        "Hacé navegación por el lago Nahuel Huapi.",
      
      ],
    
      mejorEpoca: "Abril-junio y septiembre-octubre (temperaturas agradables y menos turistas que en julio-agosto)"},
  {
    id: 7,
    title: "Campo de Piedra Pómez (Catamarca)",
    text: "Es lugar impresionante un desierto blanco surrealista de roca volcánica erosionada.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1784239849/IMG_20210402_122243_gf6jyy.jpg",
    recomendaciones: [
        "Lleva agua extra.",
        "Protector solar obligatorio",
        "Ideal ir en 4x4 o tour guiado ",
        
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
                <span className="block italic font-normal" style={{ color: ACCENT }}>7 Maravillas Naturales de Argentina
                </span>
              </h1>
              <FourPointStar className="w-3 h-3 mx-auto my-4 text-[#5D87FF]" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mi País tiene la  mayor diversidad natural del mundo. Desde glaciares eternos hasta selvas subtropicales, pasando por desiertos rojizos y humedales infinitos, ofrece paisajes únicos que sorprenden a viajeros de todo el planeta.
              En 2019, se realizó una votación nacional para elegir las 7 Maravillas Naturales de Argentina,  a continuación  te muestro los lugares más impactantes del país.
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
