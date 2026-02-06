'use client';

import { useState } from 'react';
import ScrollReveal from "@/component/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      pregunta: "¿Ofrecés asesoría personalizada para planear viajes?",
      respuesta: "Sí. Puedo ayudarte a elegir destinos, armar itinerarios según tu tiempo y presupuesto, recomendar alojamientos y darte tips prácticos. Escribime desde la sección de contacto para coordinar."
    },
    {
      id: 2,
      pregunta: "¿Los relatos del blog son experiencias reales?",
      respuesta: "Absolutamente. Todos los relatos y experiencias que comparto en el blog son vivencias reales de mis viajes. Me comprometo a compartir solo contenido auténtico y honesto sobre los destinos que visito."
    },
    {
      id: 3,
      pregunta: "¿Con cuánta anticipación debería contactarte si quiero planear un viaje?",
      respuesta: "Te recomiendo contactarme con al menos 2-3 meses de anticipación para viajes internacionales y 1 mes para destinos nacionales. Esto me permite preparar un itinerario detallado y ayudarte con las mejores opciones de alojamiento y actividades."
    },
    {
      id: 4,
      pregunta: "¿Podés recomendar alojamientos, actividades o transporte en distintos destinos?",
      respuesta: "Sí, puedo recomendarte alojamientos que he visitado o conozco por referencias, actividades que valen la pena según tus intereses, y opciones de transporte. Todo basado en mi experiencia personal y la de otros viajeros."
    },
    {
      id: 5,
      pregunta: "¿Publicas contenido de marca o colaboraciones?",
      respuesta: "Sí, trabajo con marcas y destinos que realmente creo que aportan valor a mi audiencia. Siempre mantengo la transparencia y solo recomiendo lugares y servicios que he probado personalmente o que confío genuinamente."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollReveal>
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Imagen izquierda */}
          <div className="w-full order-2 lg:order-1">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1765215093/Firefly_llzjd3.png"
                alt="Destino de viaje"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FAQ derecha */}
          <div className="w-full order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.id}
                  open={openIndex === index}
                  className="group"
                >
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFAQ(index);
                    }}
                    className={`list-none cursor-pointer p-5 md:p-6 rounded-xl transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base md:text-lg font-semibold pr-4 flex-1">
                        {faq.pregunta}
                      </h3>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        <svg
                          className={`w-5 h-5 ${
                            openIndex === index ? 'text-white' : 'text-black'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  
                  {openIndex === index && (
                    <div className="mt-2 p-5 md:p-6 bg-gray-50 rounded-xl">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {faq.respuesta}
                      </p>
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
}