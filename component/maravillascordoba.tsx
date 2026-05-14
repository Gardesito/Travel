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
    title: "Laguna de Mar Chiquita (Ansenuza)",
    text: "La Laguna de Mar Chiquita, también conocida como Ansenuza, es uno de los humedales salinos más grandes de Sudamérica. Su inmensidad crea un ecosistema único donde miles de flamencos encuentran refugio.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483290/mejora_la_calidad_de_esta_202604291421_tw41bs.jpg",
    recomendaciones: [
        "Avistaje de aves (especialmente flamencos rosados).",
        "Turismo de bienestar gracias a sus aguas salinas.",
        "Fotografía de paisajes infinitos.",
       ],
    
      mejorEpoca: " Noviembre a marzo (clima más fresco y seco, menos calor y menos lluvias)"},
  {
    id: 2,
    title: "Cerro Champaquí (Brasil)",
    text: "El Cerro Champaquí es el punto más alto de la provincia, con 2790 metros sobre el nivel del mar. Se encuentra en las Sierras Grandes y es un clásico del trekking cordobés.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483396/mejora_la_calidad_de_esta_202604291422_jtmzjz.jpg",
    recomendaciones: [
        "Senderismo de montaña.",
        "Camping en altura.",
        "Turismo aventura con vistas panorámicas únicas.",
      ],
    
      mejorEpoca: "Diciembre a marzo (verano en Brasil) o septiembre a noviembre (primavera)"},
  {
    id: 3,
    title: "Parque Nacional Quebrada del Condorito (Perú)",
    text: "El Parque Nacional Quebrada del Condorito protege uno de los paisajes más imponentes de las sierras: una profunda quebrada de aproximadamente 800 metros donde sobrevuelan cóndores andinos.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg",
    recomendaciones: [
        "Caminatas por senderos señalizados.",
        "Observación del cóndor andino en su hábitat natural.",
        "Fotografía de paisajes de altura.",
    
      ],
    
      mejorEpoca: "Mayo a septiembre (temporada seca)"},
  {
    id: 4,
    title: "Cueva de los Pajaritos(Jordania)",
    text: "Cerca de Tanti se encuentra la Cueva de los Pajaritos, un pequeño pero encantador refugio natural donde habita el “pájaro güer” o chirrío.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483335/mejora_la_calidad_de_esta_202604291421_1_sjpbqx.jpg",
    recomendaciones: [
        "Caminatas cortas en familia.",
        "Observación de aves.",
        "Conexión con la fauna local.",
       
      ],
    
      mejorEpoca: "Marzo a mayo y septiembre a noviembre (Clima templado, sin calor extremo)"},
  {
    id: 5,
    title: "Cerro Colorado (India)",
    text: "La Reserva Natural y Cultural Cerro Colorado combina naturaleza e historia. Sus formaciones rocosas de tonos rojizos enmarcan uno de los sitios arqueológicos más importantes de la provincia.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483590/22685_s0blke.jpg",
    recomendaciones: [
        "Pinturas rupestres de pueblos comechingones y sanavirones.",
        "Senderos interpretativos.",
        "Paisajes de gran valor cultural y natural.",
        
      ],
    
      mejorEpoca: "Noviembre a febrero (Clima fresco y seco, evitando el calor extremo y la humedad del verano)"},
  {
    id: 6,
    title: " Cuevas de Ongamira (Italia)",
    text: "Las Cuevas de Ongamira, cerca de Capilla del Monte, forman un valle rodeado de paredes de arenisca rojiza con gran valor geológico.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483403/mejora_la_calidad_de_esta_202604291423_wc7ewc.jpg",
    recomendaciones: [
        "Exploración paisajística.",
        "Turismo histórico y geológico.",
        "Conexión con la naturaleza serrana.",
      
      ],
    
      mejorEpoca: "Abril-junio y septiembre-octubre (temperaturas agradables y menos turistas que en julio-agosto)"},
  {
    id: 7,
    title: " Cerro Uritorco (China)",
    text: "El Cerro Uritorco, con 1979 metros de altura, es el pico más alto de las Sierras Chicas. Es uno de los destinos más conocidos de Córdoba por su mezcla de trekking, paisajes y misticismo.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457172/Rectangle_7_cn7a63.png",
    recomendaciones: [
        "Ascensos exigentes pero accesibles.",
        "Vistas panorámicas de Punilla.",
        "Turismo espiritual y de aventura.",
        
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
                <span className="block text-[#2E73F2]">Siete Maravillas de Córdoba</span>
              </h1>
              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
              Las siete Maravillas naturales de Córdoba fueron elegidas por voto popular en 2008 ,esta provincia que se encuentra en el centro del país nos sorprende con naturaleza, historia y paisajes únicos que hacen de Córdoba un lugar mágico.
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