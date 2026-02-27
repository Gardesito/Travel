"use client";

import Link from "next/link";
import ScrollReveal from "@/component/ScrollReveal";

// Cambiá esta URL para usar otra imagen de fondo
const BACKGROUND_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219832/descarga_rum2t2.svg";

export default function Blog() {
  const posts = [
    {
      id: 1,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219101/Sin_t%C3%ADtulo-1VX_tgercw.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    },
    {
      id: 2,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219093/vaneeee5_fkceqw.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    },
    {
      id: 3,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1772219267/Sin_t%C3%ADtulo-2ffff_jpw9jj.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    },
    {
      id: 4,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    },
    {
      id: 5,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1769712429/Firefly_Gemini_Flash_12_j4pb7h.png",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    },
    {
      id: 6,
      titulo: "Humahuaca",
      ubicacion: "Jujuy",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1765214628/2a284007-8467-40ed-9071-61cb020fc812_m6eyup.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/blog1"
    }
  ];

  return (
    <ScrollReveal>
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 overflow-hidden">
        {/* Imagen de fondo - cambiá BACKGROUND_IMAGE arriba para usar otra */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${BACKGROUND_IMAGE}")` }}
        />
        <div className="absolute inset-0 bg-[#01326B]/75" />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Título y subtítulo */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Conoce mi Blog
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Sumate a viajes grupales cuidadosamente planificados, con salidas acompañadas, itinerarios equilibrados y todo organizado para que solo te dediques a disfrutar.
            </p>
          </div>

          {/* Grid de tarjetas - mismo estilo que destinos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={post.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Imagen aspect 4:3 como destinos */}
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url("${post.imagen}")` }}
                />
                {/* Contenido - misma estructura que destinos */}
                <div className="p-5 md:p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#2E73F2" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">{post.ubicacion}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {post.titulo}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                    {post.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Botón Ver todos */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/blog1"
              className="inline-block px-10 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#2C64C6" }}
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
