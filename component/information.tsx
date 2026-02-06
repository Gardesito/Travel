"use client";
// components/FeatureSection.tsx
import React from "react";
import ScrollReveal from "@/component/ScrollReveal";

export const FeatureSection: React.FC = () => {
  return (
    <ScrollReveal>
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Columna de texto (features) */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Viví tu viaje ideal
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="flex-none w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                {/* Icono: maleta */}
                <span className="text-xl">🎒</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Organizá tu plan</p>
                <p className="text-gray-600">Convertí tus sueños en un itinerario real.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                {/* Icono: lupa / recomendación */}
                <span className="text-xl">🔍</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Te doy recomendaciones</p>
                <p className="text-gray-600">Viajá como local, no como turista.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-none w-12 h-12 bg-teal-200 rounded-lg flex items-center justify-center">
                {/* Icono: reserva / check */}
                <span className="text-xl">✅</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Te ayudo a reservar</p>
                <p className="text-gray-600">Todo listo para disfrutar desde el primer minuto.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna de imagen */}
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1764895697/VANE_MIRAMAR_102_1_atpftm.jpg"
            alt="Imagen representativa de viaje"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default FeatureSection;
