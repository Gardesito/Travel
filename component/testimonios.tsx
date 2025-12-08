// components/Testimonials.tsx
import React from "react";

type Testimonial = {
  id: number;
  author: string;
  text: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Mariana R.",
    text: "Jamás pensé que viajar podía ser tan simple. Me armó un itinerario perfecto, con actividades que realmente disfruté. Me sentí acompañada desde el primer día. ¡Lo volvería a elegir sin dudas!",
    date: "Agosto 28, 2025",
  },
  {
    id: 2,
    author: "Julián M.",
    text: "Gracias a sus recomendaciones descubrimos lugares increíbles que no estaban en ningún blog. Además nos ayudó con todas las reservas, así que solo nos dedicamos a disfrutar.",
    date: "Abril 15, 2024",
  },
  {
    id: 3,
    author: "Lucía S.",
    text: "Jamás pensé que viajar podía ser tan simple. Me armó un itinerario perfecto, con actividades que realmente disfruté. Me sentí acompañada desde el primer día. ¡Lo volvería a elegir sin dudas!",
    date: "Junio 10, 2025",
  },
  // ... podés agregar más testimonios aquí
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ id, author, text, date }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between h-full"
            >
              <div>
                <p className="text-xl leading-relaxed text-gray-800 mb-4">“{text}”</p>
                <p className="font-semibold text-gray-900">— {author}</p>
              </div>
              <p className="text-sm text-gray-500 mt-6">{date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
