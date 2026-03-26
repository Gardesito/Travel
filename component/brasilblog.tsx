"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";

/** Banner principal (dejalo tal cual o cambiá solo esta URL) */
const BANNER_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457180/Sin_t%C3%ADtuaaaaalo-1_l4btvj.jpg";

const ACCENT_BLUE = "#2E73F2";

const bodyText =
  "text-base sm:text-[17px] text-gray-900 leading-[1.75]";

const proseWrap = "max-w-4xl mx-auto w-full px-5 sm:px-8 lg:px-10";

/** Misma fila de 4 imágenes verticales que en la referencia (reemplazá URLs si querés) */
const GALLERY_ROW_IMAGES = [
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457172/Rectangle_7_cn7a63.png",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219097/vane1_z1dzbz.jpg",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772218777/Sin_t%C3%ADtulo-1y_egz5i1.png",
];

function GalleryRow() {
  return (
    <div
      className="relative left-1/2 my-8 w-screen max-w-[100vw] -translate-x-1/2 md:my-10"
      aria-label="Galería de imágenes"
    >
      <div className="grid w-full grid-cols-2 gap-0 sm:grid-cols-4">
        {GALLERY_ROW_IMAGES.map((src, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] min-h-[120px] overflow-hidden bg-gray-200 sm:min-h-[160px] md:min-h-[200px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
              style={{ backgroundImage: `url("${src}")` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "gallery" }
  | { type: "queHacer"; items: string[] }
  | { type: "recomendacion"; items: string[] }
  | { type: "tipViajero"; items: string[] };

type SectionDef = {
  id: string;
  place: string;
  tagline: string;
  blocks: Block[];
};

const sections: SectionDef[] = [
  {
    id: "rio",
    place: "Río de Janeiro en Año Nuevo",
    tagline: "Energía pura",
    blocks: [
      {
        type: "p",
        text: "Pasar Año Nuevo en Copacabana fue una experiencia inolvidable. Millones de personas vestidas de blanco celebrando frente al mar, fuegos artificiales sobre el océano y una energía colectiva impresionante.Es una mezcla de celebración y ritual. No importa de dónde vengas, esa noche todos celebran juntos.",
      },
      { type: "gallery" },
      {
        type: "queHacer",
        items: [
          "Vestirse de blanco (tradición brasileña)",
          "Llegar temprano a la playa",
          "Tener cuidado con pertenencias",
          "Cristo Redentor: una de las 7 maravillas del mundo moderno. Las vistas desde allí son espectaculares.",
          "Pan de Azúcar: subir en teleférico al atardecer es una experiencia mágica.",
          "Ipanema y Copacabana: perfectas para caminar, relajarse y sentir el estilo carioca.",
          "Escadaria Selarón: color, arte y cultura en cada escalón.",
          "Biblioteca Jardin Botanico",
        ],
      },
    ],
  },
  {
    id: "ilha",
    place: "Ilha Grande",
    tagline: "Naturaleza en estado puro",
    blocks: [
      {
        type: "p",
        text: "Sin autos, sin estrés. Ilha Grande es el paraíso para desconectar.",
      },
      {
        type: "tipViajero",
        items: [
          "Playa Lopes Mendes (de las más lindas de Brasil)",
          "Senderos por la selva",
          "Paseos en barco por aguas turquesas",
        ],
      },
    ],
  },
  {
    id: "floripa",
    place: "Florianópolis",
    tagline: "La isla de los deseos",
    blocks: [
      { type: "gallery" },
      {
        type: "p",
        text: "Conocida como la Isla Mágica, Florianópolis reúne más de 40 playas, dunas, lagunas y una mezcla perfecta entre naturaleza y vida urbana. Sur, pesca artesanal y atardeceres largos te esperan en el sur de Brasil.",
      },
      {
        type: "queHacer",
        items: [
          "Elegir playa según el plan: surf en Joaquina, calma en Campeche, paseos en Ribeirão da Ilha.",
          "Subir al Morro das Aranhas o hacer senderos con vista al mar.",
          "Recorrer el centro histórico y los mercados con mariscos frescos.",
        ],
      },
      {
        type: "recomendacion",
        items: [
          "Alquilar auto o usar transporte local para saltar de una playa a otra sin perder tiempo.",
          "Reservar con anticipación en temporada alta (verano austral).",
        ],
      },
    ],
  },
  {
    id: "iguazu",
    place: "Iguazú",
    tagline: "Cataratas de ensueño",
    blocks: [
      {
        type: "p",
        text: "Más de 275 saltos de agua en la frontera entre Brasil y Argentina. El rugido de la Garganta del Diablo, el vapor en la cara y la selva misionera alrededor hacen de este lugar uno de los más impresionantes del continente.",
      },
      {
        type: "queHacer",
        items: [
          "Recorrer los circuitos inferior y superior del lado brasileño (y, si podés, cruzar un día a Argentina).",
          "Macuco Safari o paseos en lancha según la temporada y las normas del parque.",
          "Visitar el Parque de las Aves para ver guacamayos y otras especies de cerca.",
        ],
      },
      {
        type: "recomendacion",
        items: [
          "Llevar impermeable o poncho: vas a mojarte sí o sí cerca de las cataratas.",
          "Calzado cómodo con buen agarre; las pasarelas pueden resbalarse.",
        ],
      },
    ],
  },
  {
    id: "sao-luis",
    place: "São Luís",
    tagline: "Historia y Cultura",
    blocks: [
      { type: "gallery" },
      {
        type: "p",
        text: "Capital del Maranhão, São Luís guarda un centro histórico Patrimonio de la Humanidad: calles de adoquines, fachadas de azulejos portugueses y una atmósfera colonial que invita a caminar sin mapa.",
      },
      {
        type: "queHacer",
        items: [
          "Recorrer el centro histórico y los museos que cuentan la historia afroindígena de la región.",
          "Subir a los miradores y ver cómo el mar rodea la ciudad.",
          "Salir de excursión a playas y pueblos cercanos (Alcântara, Raposa, etc.).",
        ],
      },
      {
        type: "recomendacion",
        items: [
          "Probar el arroz de cuxá y otros platos típicos maranhenses.",
          "Combinar São Luís con ruta hacia los Lençóis Maranhenses si tenés varios días.",
        ],
      },
    ],
  },
  {
    id: "lencois",
    place: "Lençóis Maranhenses",
    tagline: "Un paraíso de otro planeta",
    blocks: [
      { type: "gallery" },
      {
        type: "p",
        text: "Un desierto de dunas blancas salpicado de lagunas de agua dulce: Lençóis parece de otro planeta. En la temporada de lluvias, el contraste entre el azul turquesa y el blanco cegador es simplemente hipnótico.",
      },
      {
        type: "queHacer",
        items: [
          "Tours en 4x4 desde Barreirinhas, Atins o Santo Amaro según tu base.",
          "Subir a un mirador de dunas para el atardecer.",
          "Bañarte en las lagoas más conocidas (Lagoa Azul, Lagoa Bonita, según época del año).",
        ],
      },
      {
        type: "recomendacion",
        items: [
          "Consultá la mejor época para ver las lagoas llenas (suele ser de junio a septiembre, según lluvias).",
          "Protector solar, sombrero y mucha agua: el sol en las dunas pega fuerte.",
        ],
      },
    ],
  },
];

export default function BrasilBlog() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollReveal>
        <article className="w-full pb-16 md:pb-24">
          {/* Banner principal — sin cambios de estructura */}
          <section className="relative w-full" aria-label="Brasil">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 md:h-36 bg-gradient-to-b from-black/40 to-transparent"
              aria-hidden
            />
            <div
              className="relative z-0 flex min-h-[42vh] w-full items-center justify-center bg-cover bg-center px-4 sm:min-h-[48vh] md:min-h-[52vh] lg:min-h-[56vh]"
              style={{ backgroundImage: `url("${BANNER_IMAGE}")` }}
            >
              <h1 className="text-center text-4xl font-bold uppercase tracking-wider text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
                BRASIL
              </h1>
            </div>
          </section>

          {/* Intro */}
          <header
            className={`${proseWrap} border-b border-gray-100 pt-12 pb-10 text-center md:pt-16 md:pb-14 lg:pt-20 lg:pb-16`}
          >
            <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Brasil playas {" "}
              <span style={{ color: ACCENT_BLUE }}>paradisíacas</span>
            </h2>
            <p className={`${bodyText} mx-auto max-w-3xl text-gray-900`}>
            Brasil fue uno de esos destinos que lo tiene todo: playas de agua cristalina, ciudades vibrantes, naturaleza salvaje y celebraciones inolvidables, es un país que tiene lugares increíbles y que siempre te invita a volver para seguir conociendo. Mi primer viaje a este país fue en el 2018 y desde entonces he recorrido varios otros destinos. 
            </p>
          </header>

          {/* Secciones con bloques ordenados (texto / galería / listas) */}
          <div className="flex flex-col gap-14 pt-12 md:gap-20 md:pt-16 lg:gap-24 lg:pt-20">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className={proseWrap}
                aria-labelledby={`heading-${s.id}`}
              >
                <h3
                  id={`heading-${s.id}`}
                  className="mb-6 text-left text-xl font-bold text-gray-900 sm:text-2xl md:text-[1.65rem]"
                >
                  {s.place}
                  <span style={{ color: ACCENT_BLUE }}> - {s.tagline}</span>
                </h3>

                {s.blocks.map((block, idx) => {
                  if (block.type === "p") {
                    return (
                      <p key={idx} className={`${bodyText} mb-6 text-left last:mb-0`}>
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "gallery") {
                    return <GalleryRow key={idx} />;
                  }
                  if (block.type === "queHacer") {
                    return (
                      <div key={idx} className="mb-8">
                        <p className={`${bodyText} mb-3 font-semibold text-gray-900`}>
                          Qué hacer:
                        </p>
                        <ul className="list-disc space-y-3 pl-5 sm:pl-6 md:pl-7">
                          {block.items.map((item, i) => (
                            <li key={i} className={bodyText}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (block.type === "recomendacion") {
                    return (
                      <div key={idx} className="mb-8">
                        <p className={`${bodyText} mb-3 flex items-center gap-2 font-semibold text-gray-900`}>
                          <svg
                            className="h-4 w-4 shrink-0"
                            style={{ color: ACCENT_BLUE }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Recomendación:
                        </p>
                        <ul className="list-disc space-y-3 pl-5 sm:pl-6 md:pl-7">
                          {block.items.map((item, i) => (
                            <li key={i} className={bodyText}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (block.type === "tipViajero") {
                    return (
                      <div key={idx} className="mb-8">
                        <p className={`${bodyText} mb-3 font-semibold text-gray-900`}>
                          Tip viajero:
                        </p>
                        <ul className="list-disc space-y-3 pl-5 sm:pl-6 md:pl-7">
                          {block.items.map((item, i) => (
                            <li key={i} className={bodyText}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </section>
            ))}
          </div>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
