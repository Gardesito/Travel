
"use client";

import Link from "next/link"; 
import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";

const BLUE_TITLE = "#2E73F2";

/** Cuerpo: líneas más largas y lectura cómoda */
const bodyText =
  "text-base sm:text-[17px] text-gray-900 leading-[1.75]";

/** Ancho único para bloques de texto (más largo que antes) */
const proseWrap = "max-w-4xl mx-auto w-full px-5 sm:px-8 lg:px-10";

const galleryImages = [
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1774457172/Rectangle_7_cn7a63.png",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219097/vane1_z1dzbz.jpg",
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1772218777/Sin_t%C3%ADtulo-1y_egz5i1.png",
];

export default function Blog1() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollReveal>
        <article className="w-full pb-16 md:pb-24">
          {/* 1. Banner a ancho completo, debajo del nav fijo (sin padding superior) */}
          <section className="relative w-full" aria-label="Imagen principal">
            {/* Degradado suave arriba para que el nav transparente lea mejor sobre la foto */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 md:h-36 bg-gradient-to-b from-black/35 to-transparent"
              aria-hidden
            />
            <div
              className="relative z-0 w-full min-h-[42vh] sm:min-h-[48vh] md:min-h-[52vh] lg:min-h-[56vh] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dtmziqubb/image/upload/v1774457180/Sin_t%C3%ADtuaaaaalo-1_l4btvj.jpg")',
              }}
              role="img"
              aria-label="Cascada"
            />
          </section>

          {/* 2. Título + subtítulo: mismo ancho que el resto del texto */}
          <header
            className={`${proseWrap} text-center pt-14 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 border-b border-gray-100`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-5 md:mb-6">
              De la posta{" "}
              <span style={{ color: BLUE_TITLE }}>al mundo</span>
            </h1>
            <p className="text-base sm:text-[17px] text-gray-500 leading-[1.75] max-w-3xl mx-auto">
              Sumate a viajes grupales cuidadosamente planificados, con salidas acompañadas, itinerarios equilibrados y todo organizado para que solo te dediques a disfrutar.
            </p>
          </header>

          {/* Bloque de contenido: secciones ordenadas con espaciado largo */}
          <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
            {/* 3. Introducción */}
            <section className={proseWrap} aria-labelledby="blog-intro">
              <h2 id="blog-intro" className="sr-only">
                Introducción
              </h2>
              <p className={`${bodyText} text-left`}>
                Soy Vanesa Cordoba y vengo de un pueblito de la localidad de La Posta. Crecí entre calles de tierra, rutinas simples y sueños grandes. Desde chica miraba los aviones pasar y me quedaba imaginando cómo sería estar ahí arriba, viajando, descubriendo, sintiendo que el mundo era más grande que mi realidad.
              </p>
            </section>

            {/* 4. Imagen intermedia a ancho completo */}
            <section className="w-full" aria-label="Segunda imagen">
              <div
                className="w-full aspect-[16/9] sm:aspect-[21/9] min-h-[220px] sm:min-h-[280px] md:min-h-[340px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/dtmziqubb/image/upload/v1764895697/VANE_MIRAMAR_102_1_atpftm.jpg")',
                }}
                role="img"
                aria-label="Vanesa"
              />
            </section>

            {/* 5. Dos párrafos */}
            <section className={proseWrap} aria-labelledby="blog-historia">
              <h2 id="blog-historia" className="sr-only">
                Historia
              </h2>
              <div className="space-y-8 md:space-y-10 text-left">
                <p className={bodyText}>
                  Desde ese pequeño rincón imaginaba cómo sería estar ahí arriba, viajar lejos, sentir que la vida podía ser más grande que mis miedos y más amplia que mis posibilidades.
                </p>
                <p className={bodyText}>
                  Vengo de una familia muy humilde, donde soñar no siempre parecía permitido, pero aun así lo hice. Soñé fuerte. Soñé siempre. Y un día, aquello que parecía imposible se volvió realidad: viajé. Crucé fronteras, subí a ese avión que tantas veces miré desde abajo y sentí que estaba honrando a la niña que nunca dejó de creer.
                </p>
              </div>
            </section>

            {/* 6. Imagen + texto */}
            <section
              className="max-w-5xl mx-auto w-full px-5 sm:px-8 lg:px-10"
              aria-labelledby="blog-viajes"
            >
              <h2 id="blog-viajes" className="sr-only">
                Viajes y maravillas
              </h2>
              <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-14 items-start">
                <div className="w-full md:w-[40%] lg:w-[38%] shrink-0">
                  <div
                    className="w-full aspect-[3/4] bg-cover bg-center rounded-3xl md:rounded-[2rem] shadow-md"
                    style={{
                      backgroundImage:
                        'url("https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg")',
                    }}
                    role="img"
                    aria-label="Viaje"
                  />
                </div>
                <div className="w-full md:flex-1 space-y-8 md:space-y-10 text-left">
                  <p className={bodyText}>
                    Con el tiempo, la vida me regaló algo que jamás pensé posible: conocer las 7 maravillas del mundo moderno. Cada una fue un abrazo al destino, una prueba de que no importa de dónde vengamos, sino la fuerza con la que caminamos hacia lo que deseamos.
                  </p>
                  <p className={bodyText}>
                    Hoy viajo no solo para conocer lugares, sino para honrar mis raíces, para demostrarme que los sueños sí se cumplen, aunque tarden, aunque duelan, aunque parezcan demasiado grandes para quien los imagina.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Cierre */}
            <section
              className={`${proseWrap} pb-4 md:pb-8 border-b border-gray-100`}
              aria-labelledby="blog-cierre"
            >
              <h2 id="blog-cierre" className="sr-only">
                Cierre
              </h2>
              <div className="space-y-8 md:space-y-10 text-left">
                <p className={bodyText}>
                  Este espacio, Alma Viajera, nace de esa historia. De las ganas de inspirar, de contar mis caminos, de mostrar que no importa de dónde vengamos, sino hacia dónde nos animamos a ir.
                </p>
                <p className={`${bodyText} font-semibold`}>
                  Bienvenidos a mi viaje. Yo soy Vanesa, la chica de La Posta que un día miró el cielo... y decidió volar.
                </p>
              </div>
            </section>
          </div>

          {/* 8. Galería */}
          <section className="w-full mt-12 md:mt-16" aria-label="Galería de imágenes">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] min-h-[140px] sm:min-h-[180px] overflow-hidden bg-gray-200"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                    style={{ backgroundImage: `url("${src}")` }}
                  />
                </div>
              ))}
            </div>
          </section>
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
