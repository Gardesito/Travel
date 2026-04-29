"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1777396439/Sin_t%C3%ADtulo-1dasdsadasdas_fgdplv.jpg";

const INTRO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219101/Sin_t%C3%ADtulo-1VX_tgercw.jpg";


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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483396/mejora_la_calidad_de_esta_202604291422_jtmzjz.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483335/mejora_la_calidad_de_esta_202604291421_1_sjpbqx.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483403/mejora_la_calidad_de_esta_202604291423_wc7ewc.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457172/Rectangle_7_cn7a63.png",
    recomendaciones: [
        "Usar calzado cómodo (muchas subidas)",
        "Evitar feriados chinos",
        "Elegir sectores menos turísticos",
        
      ],
    
      mejorEpoca: "rimavera (abril-mayo) y otoño (septiembre-octubre) temperaturas agradables y paisajes espectaculares con flores o follaje otoñal."
},
];

export default function SevenWonders() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollReveal>
        <article className="w-full">
          <section className="relative w-full" aria-label="Portada siete maravillas">
            <div
              className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[58vh] bg-cover bg-center"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </section>

          <section className="relative max-w-3xl mx-auto px-5 sm:px-8 -mt-16 sm:-mt-20 md:-mt-24 z-10">
            <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${INTRO_IMAGE}")` }}
                role="img"
                aria-label="Foto de viajera"
              />
            </div>
            <div className="bg-white rounded-3xl shadow-md px-6 sm:px-8 py-8 mt-5 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Mis ojos frente a las 
                <span className="block text-[#2E73F2]">Maravillas del Mundo </span>
              </h1>
              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
              Vengo de un pueblito tranquilo, donde la vida transcurre despacio y los sueños parecen lejanos. Pero un día, mi corazón aventurero,la curiosidad y el ansia de descubrir me llevaron a un viaje que cambiaría mi manera de ver el mundo: conocer las siete maravillas del mundo moderno ( elegidas en 2007 mediante una votación global organizada por la Fundación New7Wonders)
              Todo comenzó en 2017, cuando visité mi primera maravilla . Ahí entendí que viajar no es solo conocer lugares, sino conectar con la historia, la cultura y momentos que te cambian para siempre
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-10 sm:space-y-12 md:space-y-14">
            {wonders.map((wonder) => (
              <div
                key={wonder.id}
                className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm"
              >
                <div
                  className="w-full aspect-[16/9] sm:aspect-[21/9] bg-cover bg-center"
                  style={{ backgroundImage: `url("${wonder.image}")` }}
                  role="img"
                  aria-label={wonder.title}
                />
                <div className="px-5 sm:px-7 md:px-8 py-6 sm:py-7 md:py-8 bg-white">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#2E73F2] mb-2">
                    Maravilla {wonder.id}
                  </p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {wonder.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {wonder.text}
                  </p>
                  {wonder.recomendaciones && (
  <div className="mt-4">
    <h4 className="font-semibold text-gray-900">Recomendaciones:</h4>
    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
      {wonder.recomendaciones.map((rec, i) => (
        <li key={i}>{rec}</li>
      ))}
    </ul>
  </div>
)}

{wonder.mejorEpoca && (
  <p className="mt-3 text-sm text-gray-700">
    <strong>Mejor época:</strong> {wonder.mejorEpoca}
  </p>
)}
                </div>
              </div>
            ))}
          </section>

          <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 text-center">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
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