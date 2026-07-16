"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Compass } from "lucide-react";
import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783020229/Mejora_calidad_no_cambies_persona_202607021623_plksqy.jpg";

const AVATAR_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783021394/VANE_LA_POSTA_50_noyjkc.jpg";

const MID_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783021133/VANE_LA_POSTA_172_rrzk51.jpg";

const SIDE_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1783022137/VANE_LA_POSTA_79_p7o9kc.jpg";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783020725/VANE_LA_POSTA_269_d3c9ym.jpg",
    alt: "Viaje por Córdoba",
  },
  {
    src: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783539017/a4db2d21-ed5d-420e-a3b7-05b6f728a355.png",
    alt: "Paisaje de montaña",
  },
  {
    src: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783021000/VANE_LA_POSTA_111_xrqbor.jpg",
    alt: "Vanesa viajando",
  },
  {
    src: "https://res.cloudinary.com/dtmziqubb/image/upload/v1783021129/VANE_LA_POSTA_123_upob6l.jpg",
    alt: "Recuerdo de viaje",
  },
];

const bodyText =
  "text-sm sm:text-base text-gray-600 leading-relaxed";

function FourPointStar({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
    </svg>
  );
}

function ArticleImage({
  src,
  alt,
  aspect = "aspect-[16/9] sm:aspect-[21/9]",
  rounded = "rounded-t-2xl sm:rounded-t-3xl",
}: {
  src: string;
  alt: string;
  aspect?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${aspect} ${rounded}`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function ContentCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Blog1() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}>
      <ScrollReveal>
        <article className="w-full">
          {/* Hero */}
          <section className="relative w-full" aria-label="Portada del blog">
            <div
              className="w-full min-h-[38vh] sm:min-h-[45vh] md:min-h-[52vh] lg:min-h-[58vh] bg-cover bg-center"
              style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            />
            <div className="absolute inset-0 bg-black/25" />
          </section>

          {/* Intro card */}
          <section className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 -mt-14 sm:-mt-16 md:-mt-20 z-10">
            <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={AVATAR_IMAGE}
                alt="Vanesa Córdoba"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_40px_rgba(26,43,76,0.1)] px-5 sm:px-8 py-7 sm:py-8 mt-4 sm:mt-5 text-center">
              <p
                className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2"
                style={{ color: ACCENT }}
              >
                <FourPointStar className="w-2.5 h-2.5" style={{ color: ACCENT }} />
                Mi historia
              </p>
              <h1
                className={`${playfair.className} font-semibold leading-tight`}
                style={{
                  color: NAVY,
                  fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                }}
              >
                De la posta{" "}
                <span className="italic font-normal" style={{ color: ACCENT }}>
                  al mundo
                </span>
              </h1>
              <FourPointStar
                className="w-3 h-3 mx-auto my-4"
                style={{ color: ACCENT }}
              />
              <p className={`${bodyText} max-w-2xl mx-auto`}>
                Soy Vanesa Cordoba y vengo de un pueblito de la localidad de La
                Posta. Crecí entre calles de tierra, rutinas simples y sueños
                grandes. Desde chica miraba los aviones pasar y me quedaba
                imaginando cómo sería estar ahí arriba, viajando, descubriendo,
                sintiendo que el mundo era más grande que mi realidad.
              </p>
            </div>
          </section>

          {/* Contenido principal */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 space-y-6 sm:space-y-8">
            {/* Imagen ancha */}
            <ContentCard>
              <ArticleImage src={MID_IMAGE} alt="Vanesa en su viaje" />
              <div className="px-5 sm:px-7 md:px-8 py-6 sm:py-7 space-y-5 sm:space-y-6">
                <p className={bodyText}>
                  Desde ese pequeño rincón imaginaba cómo sería estar ahí arriba,
                  viajar lejos, sentir que la vida podía ser más grande que mis
                  miedos y más amplia que mis posibilidades.
                </p>
                <p className={bodyText}>
                  Vengo de una familia muy humilde, donde soñar no siempre
                  parecía permitido, pero aun así lo hice. Soñé fuerte. Soñé
                  siempre. Y un día, aquello que parecía imposible se volvió
                  realidad: viajé. Crucé fronteras, subí a ese avión que tantas
                  veces miré desde abajo y sentí que estaba honrando a la niña
                  que nunca dejó de creer.
                </p>
              </div>
            </ContentCard>

            {/* Imagen + texto */}
            <ContentCard>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[42%] lg:w-[40%] flex-shrink-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[220px] md:min-h-[320px] overflow-hidden md:rounded-l-3xl">
                    <img
                      src={SIDE_IMAGE}
                      alt="Recuerdo de viaje"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 px-5 sm:px-7 md:px-8 py-6 sm:py-7 md:py-8 space-y-5 sm:space-y-6 flex flex-col justify-center">
                  <p
                    className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    Las 7 maravillas
                  </p>
                  <h2
                    className={`${playfair.className} text-xl sm:text-2xl font-semibold leading-snug`}
                    style={{ color: NAVY }}
                  >
                    Un abrazo al destino
                  </h2>
                  <p className={bodyText}>
                    Con el tiempo, la vida me regaló algo que jamás pensé posible:
                    conocer las 7 maravillas del mundo moderno. Cada una fue un
                    abrazo al destino, una prueba de que no importa de dónde
                    vengamos, sino la fuerza con la que caminamos hacia lo que
                    deseamos.
                  </p>
                  <p className={bodyText}>
                    Hoy viajo no solo para conocer lugares, sino para honrar mis
                    raíces, para demostrarme que los sueños sí se cumplen,
                    aunque tarden, aunque duelan, aunque parezcan demasiado
                    grandes para quien los imagina.
                  </p>
                </div>
              </div>
            </ContentCard>

            {/* Cierre */}
            <ContentCard>
              <div className="px-5 sm:px-7 md:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
                <p className={bodyText}>
                  Este espacio, Alma Viajera, nace de esa historia. De las ganas
                  de inspirar, de contar mis caminos, de mostrar que no importa
                  de dónde vengamos, sino hacia dónde nos animamos a ir.
                </p>
                <p className={`${bodyText} font-semibold`} style={{ color: NAVY }}>
                  Bienvenidos a mi viaje. Yo soy Vanesa, la chica de La Posta
                  que un día miró el cielo... y decidió volar.
                </p>
              </div>
            </ContentCard>
          </section>

          {/* Galería */}
          {/* <section
            className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20"
            aria-label="Galería de imágenes"
          >
            <div className="text-center mb-8 sm:mb-10">
              <p
                className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ color: ACCENT }}
              >
                Galería
              </p>
              <h2
                className={`${playfair.className} text-xl sm:text-2xl font-semibold`}
                style={{ color: NAVY }}
              >
                Momentos que guardo
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {galleryImages.map((photo) => (
                <div
                  key={photo.src}
                  className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10 sm:mt-12">
              <Link
                href="/#destinos"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full border-2 font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#5D87FF]/5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#f8f9fa]"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Compass className="w-4 h-4" strokeWidth={2} />
                Ver más destinos
              </Link>
            </div>
          </section> */}
        </article>
      </ScrollReveal>
      <Footer />
    </div>
  );
}
