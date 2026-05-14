"use client";

import Link from "next/link";
import ScrollReveal from "@/component/ScrollReveal";

export default function Destinos() {
  const destinos = [
    {
      id: 1,
      nombre: " Las maravillas de Cordoba",
      ubicacion: "Cordoba",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1772218752/Sin_t%C3%ADtuloXV-1_oi4om5.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/maravillascordoba",
    },
    {
      id: 2,
      nombre: "Las Maravillas del Mundo",
      ubicacion: "Mundo",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1769712429/Firefly_Gemini_Flash_12_j4pb7h.png",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/7maravillas",
    },
    {
      id: 3,
      nombre: "Las Maravillas de Argentina",
      ubicacion: "Argentina",
      imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1778253258/Combination_of_Argentina_places_202605081214_z0lrye.jpg",
      descripcion: "Vivi lo mejor de las fiestas, y el mejor carnaval en jujuy y en ningun otro lugar para poder despejarte y volver a nacer.",
      link: "/maravillasargentina",
    },
  ];

  return (
    <ScrollReveal>
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Título - "Mi top" negro, "Destinos" azul */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Mi top <span style={{ color: "#2E73F2" }}>Maravillas</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Sumate a viajes grupales cuidadosamente planificados, con salidas acompañadas, itinerarios equilibrados y todo organizado para que solo te dediques a disfrutar.
            </p>
          </div>

          {/* Grid de 3 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {destinos.map((destino) => (
              <div
                key={destino.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Imagen: clic navega a la página del destino */}
                <Link
                  href={destino.link}
                  className="block w-full aspect-[4/3] bg-cover bg-center rounded-t-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E73F2]"
                  style={{ backgroundImage: `url("${destino.imagen}")` }}
                  aria-label={`Ver ${destino.nombre}`}
                />
                {/* Contenido */}
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
                    <span className="text-sm font-medium text-gray-800">{destino.ubicacion}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {destino.nombre}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                    {destino.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Ver todos */}
          {/* <div className="text-center mt-12 md:mt-16">
            <Link
              href="/blog1"
              className="inline-block px-10 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#2C64C6" }}
            >
              Ver todos
            </Link>
          </div> */}
        </div>
      </section>
    </ScrollReveal>
  );
}
