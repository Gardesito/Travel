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
    title: "Cataratas del Iguazú  (Misiones)",
    text: "Una de las cascadas más impresionantes del mundo. . Más de 270 saltos de agua rodeados de selva tropical. Es un lugar increíble ",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483290/mejora_la_calidad_de_esta_202604291421_tw41bs.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483396/mejora_la_calidad_de_esta_202604291422_jtmzjz.jpg",
    recomendaciones: [
        "Abrigo en capas aunque haya sol.",
        "El  trekking sobre hielo es increíble.",
        "Lleva batería extra: vas a sacar MUCHAS fotos.",
        "Quédate en silencio un rato para escuchar el hielo romperse."
      ],
    
      mejorEpoca: "Diciembre a marzo (verano en Brasil) o septiembre a noviembre (primavera)"},
  {
    id: 3,
    title: "MParque Nacional Talampaya (Perú)",
    text: "Cañones rojos gigantes y paisajes tipo película. Cañones rojizos y paisajes impactantes declarados Patrimonio Mundial.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483545/9_sss3rq.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483335/mejora_la_calidad_de_esta_202604291421_1_sjpbqx.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483590/22685_s0blke.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483403/mejora_la_calidad_de_esta_202604291423_wc7ewc.jpg",
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
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457172/Rectangle_7_cn7a63.png",
    recomendaciones: [
        "Lleva agua extra.",
        "Protector solar obligatorio",
        "Ideal ir en 4x4 o tour guiado ",
        
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
                <span className="block text-[#2E73F2]">7 Maravillas Naturales de Argentina
                </span>
              </h1>
              <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
              Mi País tiene la  mayor diversidad natural del mundo. Desde glaciares eternos hasta selvas subtropicales, pasando por desiertos rojizos y humedales infinitos, ofrece paisajes únicos que sorprenden a viajeros de todo el planeta.
              En 2019, se realizó una votación nacional para elegir las 7 Maravillas Naturales de Argentina,  a continuación  te muestro los lugares más impactantes del país.
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