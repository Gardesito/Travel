"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { CalendarDays, Car, Check, MapPin, Sparkles } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair" });

const HERO_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1779112033/e6f613d4370c37b33e714843fab63e1a_mlnstc.jpg";

type Destination = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  sections: { title: string; items: string[] }[];
  tip?: string[];
  season?: string[];
  transport?: string[];
  note?: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    title: "Río de Janeiro en Año Nuevo",
    subtitle: "Energía pura",
    description: "Pasar Año Nuevo en Copacabana fue una experiencia inolvidable. Millones de personas vestidas de blanco celebrando frente al mar, fuegos artificiales sobre el océano y una energía colectiva impresionante. Es una mezcla de celebración y ritual. No importa de dónde vengas, esa noche todos celebran juntos.",
    image: "https://res.cloudinary.com/dtmziqubb/image/upload/v1777483396/mejora_la_calidad_de_esta_202604291422_jtmzjz.jpg",
    tip: ["Vestirse de blanco, siguiendo la tradición brasileña.", "Llegar temprano a la playa.", "Tener cuidado con las pertenencias."],
    sections: [{ title: "Imperdibles en Río", items: [
      "Cristo Redentor: una de las siete maravillas del mundo moderno, con vistas espectaculares.",
      "Pan de Azúcar: subir en teleférico al atardecer es una experiencia mágica.",
      "Ipanema y Copacabana: perfectas para caminar, relajarse y sentir el estilo carioca.",
      "Escadaria Selarón: color, arte y cultura en cada escalón.",
      "Biblioteca Nacional.", "Jardín Botánico.",
    ] }],
  },
  {
    id: 2,
    title: "Ilha Grande",
    subtitle: "Naturaleza en estado puro",
    description: "Sin autos y sin estrés, Ilha Grande es el paraíso para desconectar.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1800&q=85",
    sections: [{ title: "Lo mejor", items: ["Playa Lopes Mendes, una de las más lindas de Brasil.", "Senderos por la selva.", "Paseos en barco por aguas turquesas."] }],
  },
  {
    id: 3,
    title: "Florianópolis",
    subtitle: "La isla mágica del sur",
    description: "Florianópolis, conocida como Floripa, es una mezcla perfecta entre naturaleza y calidad de vida. Tiene más de 40 playas, cada una con su personalidad.",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1800&q=85",
    season: ["Verano (diciembre a marzo): ideal para disfrutar las playas, aunque puede haber más turistas.", "Otoño y primavera: clima agradable y menos gente, perfectos para senderismo y explorar la isla.", "Invierno (junio a agosto): más frío y lluvioso, pero disfrutable si buscas tranquilidad."],
    sections: [{ title: "Playas que no te puedes perder", items: [
      "Ilha do Campeche, mi favorita: agua cristalina, arena blanca y naturaleza preservada.",
      "Praia da Joaquina: ideal para surf y dunas.",
      "Lagoinha do Leste: más salvaje, accesible solo caminando o en barco.",
      "Praia Mole y Campeche: jóvenes, animadas y con hermosas vistas.",
    ] }, { title: "Vida nocturna", items: ["En verano hay desde bares relajados frente a la laguna hasta fiestas exclusivas en la playa."] }],
    note: "Si tengo que elegir un lugar especial, es Ilha do Campeche: fue amor a primera vista. Floripa también tiene pueblos con encanto como Santo Antônio de Lisboa, perfecto para ver el atardecer y probar mariscos frescos.",
    transport: ["Uber y taxis funcionan bien en la isla.", "Alquilar un auto es recomendable para explorar varias playas.", "Algunas playas remotas requieren caminar o tomar un barco."],
  },
  {
    id: 4,
    title: "Maceió",
    subtitle: "El Caribe brasileño",
    description: "El color del agua es simplemente impresionante: tonos turquesa, piscinas naturales y mar tranquilo que parece una postal del Caribe.",
    image: "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?auto=format&fit=crop&w=1800&q=85",
    season: ["De septiembre a marzo suele haber más sol.", "Conviene evitar los meses más lluviosos, de abril a julio, aunque el clima es cálido todo el año.", "Para disfrutar las piscinas naturales, revisa la tabla de mareas y elige la marea baja."],
    sections: [{ title: "Playas que enamoran", items: [
      "Ponta Verde: perfecta para caminar al atardecer y disfrutar del mar calmo.",
      "Pajuçara: famosa por sus piscinas naturales, accesibles en jangada.",
      "Praia do Francês: una de las más bonitas y populares de la región.",
      "Maragogi: excursión imperdible entre aguas cristalinas y arrecifes.",
      "Praia do Gunga: mar azul, acantilados rojizos y un paisaje rodeado de palmeras.",
    ] }],
    transport: ["Uber funciona bien.", "Para excursiones lejanas conviene contratar tours o alquilar un auto."],
  },
  {
    id: 5,
    title: "São Luís",
    subtitle: "Historia y cultura",
    description: "Una ciudad colonial con fuerte influencia portuguesa. El centro histórico está lleno de casas coloridas con azulejos y es una parada clave antes de ir a Lençóis Maranhenses.",
    image: "https://images.unsplash.com/photo-1596395819057-e37f55a8516b?auto=format&fit=crop&w=1800&q=85",
    season: ["De septiembre a febrero: clima cálido y seco.", "Evita las lluvias intensas de marzo a julio, que pueden dificultar los paseos."],
    sections: [{ title: "Qué visitar", items: [
      "Centro histórico: Patrimonio de la Humanidad, con casas coloniales y azulejos portugueses.",
      "Teatro Arthur Azevedo: un pequeño teatro histórico con visitas guiadas.",
      "Museo Histórico e Artístico do Maranhão: ideal para entender la cultura local.",
      "Feira da Praia Grande: mercado al aire libre con artesanías y comidas típicas.",
      "Playas urbanas extensas: buenas para caminar, correr o ver el atardecer.",
    ] }],
    transport: ["El centro histórico se recorre bien caminando.", "Para barrios alejados y mercados, usa Uber o taxis locales.", "Para continuar hacia Lençóis Maranhenses, conviene contratar un tour desde São Luís."],
  },
  {
    id: 6,
    title: "Lençóis Maranhenses",
    subtitle: "Un paisaje de otro planeta",
    description: "Los Lençóis Maranhenses son uno de los paisajes más impresionantes de Brasil: dunas blancas infinitas intercaladas con lagunas cristalinas de agua dulce. Parece un desierto, pero en temporada de lluvias se llena de vida y color. Caminar entre sus dunas es una experiencia difícil de olvidar.",
    image: "https://images.unsplash.com/photo-1625488053875-51c3c6410f83?auto=format&fit=crop&w=1800&q=85",
    season: ["Junio a septiembre: las lagunas están llenas, los colores son más intensos y el clima es seco.", "Evita las lluvias intensas de enero a abril, porque algunas áreas pueden ser inaccesibles."],
    sections: [{ title: "Principales puntos de visita", items: [
      "Barreirinhas: principal base para excursiones, agencias y alojamiento.",
      "Atins: tranquilo y bohemio, perfecto para relajarse después de recorrer las dunas.",
      "Santo Amaro: puerta de entrada al parque, con dunas y lagunas espectaculares.",
      "Caburé: punto donde el río y el mar se encuentran, ideal para fotos al atardecer.",
    ] }],
    transport: ["Desde São Luís: entre 4 y 5 horas en coche o bus hasta Barreirinhas o Santo Amaro.", "Para acceder a dunas y lagunas, contrata tours 4x4 o guías locales.", "También puedes llegar en barco por los ríos desde Barreirinhas o Atins."],
  },
];

function FourPointStar({ className = "" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" /></svg>; }

function List({ items }: { items: string[] }) { return <ul className="mt-3 grid gap-2.5 text-sm leading-relaxed text-gray-600 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul>; }

export default function Brasil() {
  return <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}><ScrollReveal><article className="w-full">
    <section className="relative w-full" aria-label="Portada del viaje por Brasil"><div className="min-h-[42vh] w-full bg-cover bg-center sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[62vh]" style={{ backgroundImage: `url("${HERO_IMAGE}")` }} /><div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50" /></section>

    <section className="relative z-10 mx-auto -mt-16 max-w-4xl px-4 sm:-mt-20 sm:px-6 md:-mt-24 md:px-8"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f4fff5] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32"><span role="img" aria-label="Bandera de Brasil">🇧🇷</span></div><div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-9"><FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" /><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Mi recorrido desde 2018</p><h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>Brasil<span className="block font-normal italic" style={{ color: ACCENT }}>playas paradisíacas, fiesta y paisajes únicos</span></h1><FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" /><p className="text-sm leading-relaxed text-gray-600 sm:text-base">Brasil fue uno de esos destinos que lo tiene todo: playas de agua cristalina, ciudades vibrantes, naturaleza salvaje y celebraciones inolvidables. Es un país con lugares increíbles que siempre invita a volver para seguir conociendo. Mi primer viaje fue en 2018 y desde entonces recorrí varios destinos más.</p><div className="mx-auto mt-5 flex max-w-3xl items-start justify-center gap-2 text-sm text-gray-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p>Río de Janeiro · Ilha Grande · Florianópolis · Maceió · São Luís · Lençóis Maranhenses</p></div></div></section>

    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:space-y-8 sm:px-6 sm:py-14 md:px-8 md:py-16">{destinations.map((destination) => <section key={destination.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-shadow hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] sm:rounded-3xl"><div className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[21/9]" style={{ backgroundImage: `url("${destination.image}")` }} role="img" aria-label={destination.title} /><div className="bg-white px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8"><p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Destino {destination.id}</p><h2 className={`${playfair.className} mt-1 text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>{destination.title}</h2><p className={`${playfair.className} mt-1 italic text-gray-500`}>{destination.subtitle}</p><p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">{destination.description}</p>
      {destination.tip && <div className="mt-5 rounded-xl bg-[#fffaf1] px-4 py-4"><div className="flex items-center gap-2"><Sparkles className="h-4 w-4" style={{ color: ACCENT }} /><h3 className="text-sm font-semibold" style={{ color: NAVY }}>Tip viajero</h3></div><List items={destination.tip} /></div>}
      {destination.sections.map((section) => <div key={section.title} className="mt-6 border-t border-gray-100 pt-5"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{section.title}</h3><List items={section.items} /></div>)}
      {destination.note && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8f9fa] px-4 py-4 text-sm leading-relaxed text-gray-600"><Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p>{destination.note}</p></div>}
      {destination.season && <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4"><div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" style={{ color: ACCENT }} /><h3 className="text-sm font-semibold" style={{ color: NAVY }}>Mejor época</h3></div><List items={destination.season} /></div>}
      {destination.transport && <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4"><div className="flex items-center gap-2"><Car className="h-4 w-4" style={{ color: ACCENT }} /><h3 className="text-sm font-semibold" style={{ color: NAVY }}>Cómo llegar y moverse</h3></div><List items={destination.transport} /></div>}
    </div></section>)}</section>

    <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8"><FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" /><p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>Brasil siempre deja algo pendiente: otra playa, otra ciudad, otra celebración y una nueva razón para volver.</p></section>
  </article></ScrollReveal><Footer /></div>;
}
