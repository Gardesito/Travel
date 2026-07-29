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
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1777396439/Sin_t%C3%ADtulo-1dasdsadasdas_fgdplv.jpg";

const INTRO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1785253415/Sin_t%C3%ADtulo-1-Recuperadocccccccc_fqvkdx.jpg";


const wonders = [
  {
    id: 1,
    title: "Chichén Itzá (México)",
    text: "Fue la primera maravilla que visité, sentí que el tiempo se detenía. Al caminar frente a la majestuosa pirámide de Kukulkán, mis ojos se inundaron de lágrimas , de asombro y humildad, como si estuviera frente a  los antiguos mayas. Cada piedra parecía latir con historias de rituales, sabiduría y devoción, y por un instante, me sentí conectada con algo mucho más grande , con la fuerza de generaciones que dejaron su huella para que hoy pudiéramos maravillarnos",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483290/mejora_la_calidad_de_esta_202604291421_tw41bs.jpg",
    recomendaciones: [
        "Ir temprano para evitar calor y multitudes",
        "Llevar agua y protector solar",
        "Contratar guía para entender la historia",
       ],
    
      mejorEpoca: " Noviembre a marzo (clima más fresco y seco, menos calor y menos lluvias)"},
  {
    id: 2,
    title: "Cristo Redentor (Brasil)",
    text: "En 2018, llegó la segunda: Ver esa majestuosa estatua sobre el cerro Corcovado y contemplar toda la ciudad desde las alturas fue una experiencia que realmente te deja sin palabras. La combinación de paisaje, arquitectura y emoción hace que sea un lugar inolvidable para cualquier viajero",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1785260657/Sin_t%C3%ADtulo-163_zrvyeg.jpg",
    recomendaciones: [
        "Ir en días despejados",
        "Comprar entrada anticipada",
        "Llevar ropa cómoda y lluvia ligera",
        "Llevar agua y protector solar"
      ],
    
      mejorEpoca: "Diciembre a marzo (verano en Brasil) o septiembre a noviembre (primavera)"},
  {
    id: 3,
    title: "Machu Picchu (Perú)",
    text: "Fue la tercera maravilla en visitar en el 2018 que me robó el aliento. Me emocioné y sentí una mezcla de admiración y paz profunda, como si hubiera llegado a un lugar donde el tiempo y el espacio se detienen.  Al caminar entre sus senderos, escuchando el susurro del viento y el canto lejano de los cóndores, sentí que estaba tocando la historia viva de los incas, y que su sabiduría y conexión con la naturaleza todavía flotaba en el aire, envolviéndome y llenando mi corazón de asombro.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg",
    recomendaciones: [
        "Reservar con meses de anticipación",
        "Aclimatarse en Cusco para evitar mal de altura",
        "Hidratarse constantemente",
    
      ],
    
      mejorEpoca: "Mayo a septiembre (temporada seca)"},
  {
    id: 4,
    title: "Petra (Jordania)",
    text: "Mi cuarta maravilla también la visite en el 2018 ,  fue un encuentro con la magia. Un tesoro talado en la roca por los nabateos. Sentí  mucho asombro y no lo podía creer lo que mis ojos veían. Cada detalle de las fachadas me hablaba de ingenio, misterio y belleza imposible de olvidar.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1785343899/Sin_t%C3%ADtulo-1cj_ejsvij.jpg",
    recomendaciones: [
        "Llevar efectivo",
        "Ir temprano o al atardecer",
        "Considerar visita nocturna",
       
      ],
    
      mejorEpoca: "Marzo a mayo y septiembre a noviembre (Clima templado, sin calor extremo)"},
  {
    id: 5,
    title: "Taj Mahal (India)",
    text: "Mi quinta maravilla la visite en el 2022 que me dejó sin aliento. Su mármol blanco reflejaba la luz como un suspiro eterno. Lloré y me emocioné; sentí internamente que estaba frente a la expresión más pura del amor humano, un sentimiento tan poderoso que podía trascender el tiempo y permanecer inmortal en piedra. Cada detalle, cada curva, cada reflejo en el agua parecía susurrarme la historia de devoción y pérdida que lo inspiró, y por un instante comprendí que la belleza verdadera no solo se ve, sino que se siente en lo más profundo del corazón.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483590/22685_s0blke.jpg",
    recomendaciones: [
        "Ir al amanecer",
        "Evitar temporada de calor extremo",
        "Respetar normas de ingreso",
        
      ],
    
      mejorEpoca: "Noviembre a febrero (Clima fresco y seco, evitando el calor extremo y la humedad del verano)"},
  {
    id: 6,
    title: "Coliseo Romano (Italia)",
    text: "Visite mi sexta maravilla en 2023 ,testigo de historias de gladiadores y multitudes, me envolvió en su historia. Caminar por sus arcos y pasadizos me hizo sentir parte de un relato épico, un puente entre mi presente y la Roma antigua. Fue asombro estar allí.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1785346332/Sin_t%C3%ADtulo-1vsasdasda_brxzjl.jpg",
    recomendaciones: [
        "Comprar entradas online",
        "Evitar horarios pico",
        "Hacer visita guiada para mayor contexto",
      
      ],
    
      mejorEpoca: "Abril-junio y septiembre-octubre (temperaturas agradables y menos turistas que en julio-agosto)"},
  {
    id: 7,
    title: "Gran Muralla China (China)",
    text: "Mi última maravilla 2024 , no lo podía creer , desde lo alto de sus sinuosos caminos de piedra, comprendí por qué dicen que es visible desde el cielo. Cada ladrillo parecía susurrar historias de guerreros y emperadores, y el viento traía consigo ecos de siglos pasados. Sentí que caminaba por un hilo que une tiempo y esfuerzo humano, y la inmensidad me dejó sin aliento",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1784671110/Sin_t%C3%ADtulo-1ccc1123123_ynzayz.jpg",
    recomendaciones: [
        "Usar calzado cómodo (muchas subidas)",
        "Evitar feriados chinos",
        "Elegir sectores menos turísticos",
        
      ],
    
      mejorEpoca: "Primavera (abril-mayo) y otoño (septiembre-octubre) temperaturas agradables y paisajes espectaculares con flores o follaje otoñal."
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
                <span className="block italic font-normal" style={{ color: ACCENT }}>Maravillas del Mundo </span>
              </h1>
              <FourPointStar className="w-3 h-3 mx-auto my-4 text-[#5D87FF]" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Vengo de un pueblito tranquilo, donde la vida transcurre despacio y los sueños parecen lejanos. Pero un día, mi corazón aventurero,la curiosidad y el ansia de descubrir me llevaron a un viaje que cambiaría mi manera de ver el mundo: conocer las siete maravillas del mundo moderno ( elegidas en 2007 mediante una votación global organizada por la Fundación New7Wonders)
              Todo comenzó en 2017, cuando visité mi primera maravilla . Ahí entendí que viajar no es solo conocer lugares, sino conectar con la historia, la cultura y momentos que te cambian para siempre
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
