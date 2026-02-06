"use client";

import Link from "next/link";
import ScrollReveal from "@/component/ScrollReveal";

export default function SobreMi() {
  return (
    <ScrollReveal>
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-stretch">
            
            {/* Columna izquierda - Imagen */}
            <div className="w-full lg:w-1/2">
              <div 
                className="w-full min-h-[320px] md:min-h-[400px] lg:min-h-[500px] rounded-2xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: 'url("https://res.cloudinary.com/dtmziqubb/image/upload/v1764895697/VANE_MIRAMAR_102_1_atpftm.jpg")'
                }}
              />
            </div>

            {/* Columna derecha - Tarjeta de texto */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] md:min-h-0">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8">
                    !Hola!
                  </h2>
                  <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                      Soy Vanesa Córdoba, nacida en un pequeño pueblo llamado La Posta. Crecí con sueños grandes, mirando aviones y preguntándome qué había más allá de mi realidad.
                    </p>
                    <p>
                      Con el tiempo, esos sueños me llevaron a viajar, cruzar fronteras y descubrir que no importa de dónde venimos, sino hasta dónde nos animamos a llegar. Alma Viajera nace de ese camino y de las ganas de inspirar a otros a creer, soñar y animarse a volar.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/blog1"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
