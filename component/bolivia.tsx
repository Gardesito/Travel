"use client";

import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";
import { Playfair_Display } from "next/font/google";
import { Check, MapPin, Sparkles } from "lucide-react";
import { NAVY, ACCENT } from "@/lib/theme";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair" });
const HERO_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785259464/Sin_t%C3%ADtulo-11c3c_fb75ar.jpg";
const LA_PAZ_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785341565/198A98C3-4A74-4494-BB82-B4F8971A1A60_1_105_c_evtbzr.jpg";
const COCHABAMBA_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785256540/Sin_t%C3%ADtulo-1C1C_qr6m8r.jpg";
const TARATA_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785259426/Enhance_image_quality_202607281423_q0ljja.jpg";
const TUNARI_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785341656/DC5496B1-60A4-4DE2-B066-0D1165E19F39_1_105_c_w3da4n.jpg";
const SALAR_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785259464/Sin_t%C3%ADtulo-11c3c_fb75ar.jpg";
const ORURO_IMAGE = "https://res.cloudinary.com/dtmziqubb/image/upload/v1785341600/909C44A7-A127-46BA-8F9B-20F9AE1CF5BA_1_105_c_k83hdy.jpg";
const CITY_IMAGE = LA_PAZ_IMAGE;
const ALTIPLANO_IMAGE = TUNARI_IMAGE;

type Place = { id: number; title: string; subtitle: string; description: string; image: string; activities: string[]; recommendations: string[]; advice?: string; season?: string[] };
const basePlaces: Place[] = [
  { id: 1, title: "La Paz", subtitle: "Una ciudad entre montañas", description: "La Paz es una ciudad única, construida en un enorme valle rodeado por montañas y dominada por la imponente silueta del Illimani. Su combinación de cultura, historia y vida cotidiana la convierten en una parada imprescindible.", image: CITY_IMAGE, activities: ["Recorrer la ciudad en el sistema de teleféricos.", "Visitar la Plaza Murillo y la Basílica de San Francisco.", "Pasear por el Mercado de las Brujas.", "Explorar la Calle Jaén.", "Hacer una excursión al Valle de la Luna."], recommendations: ["Dedica al menos 2 o 3 días para conocer la ciudad.", "Utiliza los teleféricos para desplazarte y disfrutar de las vistas.", "Lleva siempre una chaqueta, ya que el clima cambia rápidamente."], advice: "La Paz está a más de 3.600 metros sobre el nivel del mar. Tómate el primer día con calma, bebe mucha agua y evita comidas muy pesadas para facilitar la adaptación a la altura." },
  { id: 2, title: "Cochabamba", subtitle: "La Ciudad de la Eterna Primavera", description: "Cochabamba ofrece un clima agradable durante casi todo el año y es famosa por su excelente gastronomía.", image: CITY_IMAGE, activities: ["Visitar el Cristo de la Concordia.", "Pasear por la Plaza 14 de Septiembre.", "Conocer el Palacio Portales.", "Disfrutar de la gastronomía local."], recommendations: ["Prueba platos tradicionales como el silpancho, el pique macho y el chicharrón.", "Reserva al menos dos días para recorrer la ciudad."], advice: "Si eres amante de la buena comida, Cochabamba es uno de los mejores destinos gastronómicos de Bolivia." },
  { id: 3, title: "Tarata", subtitle: "Encanto colonial", description: "Tarata es uno de los pueblos coloniales mejor conservados del país.", image: CITY_IMAGE, activities: ["Caminar por sus calles empedradas.", "Visitar la iglesia colonial.", "Disfrutar de su plaza principal.", "Probar la gastronomía tradicional."], recommendations: ["Es una excelente excursión de un día desde Cochabamba.", "Lleva efectivo, ya que algunos comercios pequeños no aceptan tarjetas."] },
  { id: 4, title: "Parque Nacional Tunari", subtitle: "Senderismo y naturaleza", description: "Un destino ideal para quienes disfrutan del senderismo, los paisajes de altura y el contacto con la naturaleza.", image: ALTIPLANO_IMAGE, activities: ["Caminatas por diferentes senderos.", "Fotografía de paisajes.", "Observación de flora y fauna."], recommendations: ["Lleva protector solar y ropa de abrigo.", "Usa calzado de montaña.", "Comienza las caminatas temprano."], advice: "La altitud puede hacer que el esfuerzo físico sea mayor de lo habitual. Camina a un ritmo cómodo." },
  { id: 5, title: "Salar de Uyuni", subtitle: "El mayor desierto de sal del mundo", description: "El mayor desierto de sal del mundo es uno de los paisajes más impresionantes de Sudamérica.", image: SALAR_IMAGE, activities: ["Tomar fotografías con perspectiva.", "Visitar la Isla Incahuasi, si las condiciones lo permiten.", "Contemplar el amanecer y el atardecer.", "Dormir en un hotel construido con bloques de sal."], recommendations: ["Reserva un tour con una agencia de buena reputación.", "Lleva gafas de sol con protección UV.", "Usa protector solar incluso cuando esté nublado.", "Lleva batería adicional para la cámara y el teléfono."], season: ["Temporada seca (mayo a noviembre): ideal para recorrer el salar en vehículo.", "Temporada de lluvias (enero a marzo): se forma el famoso efecto espejo."] },
  { id: 6, title: "Oruro", subtitle: "Historia minera y riqueza cultural", description: "Oruro destaca por su historia minera, sus tradiciones y una de las celebraciones más famosas de Bolivia.", image: ALTIPLANO_IMAGE, activities: ["Recorrer el centro histórico.", "Visitar museos.", "Conocer el Santuario de la Virgen del Socavón.", "Si viajas en febrero o marzo, asistir al famoso Carnaval de Oruro."], recommendations: ["Reserva alojamiento con mucha anticipación durante el carnaval.", "Aprovecha para conocer la historia minera de la ciudad."] },
];

const placeImages = [
  LA_PAZ_IMAGE,
  COCHABAMBA_IMAGE,
  TARATA_IMAGE,
  TUNARI_IMAGE,
  SALAR_IMAGE,
  ORURO_IMAGE,
];

const places: Place[] = basePlaces.map((place, index) => ({
  ...place,
  image: placeImages[index],
}));

const travelInfo = [
  { title: "Documentación", items: ["Consulta los requisitos de entrada según tu nacionalidad antes de viajar."] },
  { title: "Dinero", items: ["Lleva algo de efectivo para pueblos pequeños.", "En las principales ciudades encontrarás cajeros automáticos y casas de cambio."] },
  { title: "Transporte", items: ["Los autobuses son la forma más económica de desplazarse.", "Para largas distancias, los vuelos nacionales permiten ahorrar tiempo."] },
  { title: "Salud", items: ["La altitud puede afectar a algunas personas.", "Mantente hidratado.", "Evita el alcohol durante el primer día en zonas de gran altitud.", "Consulta con tu médico si tienes problemas cardíacos o respiratorios."] },
];
const luggage = ["Ropa para clima frío y templado.", "Protector solar.", "Gafas de sol.", "Sombrero o gorra.", "Botella reutilizable para agua.", "Calzado cómodo para caminar.", "Chaqueta impermeable, especialmente en temporada de lluvias.", "Batería portátil para dispositivos electrónicos."];

function FourPointStar({ className = "" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" /></svg>; }
function ItemList({ items }: { items: string[] }) { return <ul className="mt-3 grid gap-2.5 text-sm leading-relaxed text-gray-600 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><span>{item}</span></li>)}</ul>; }

export default function Bolivia() {
  return <div className={`${playfair.variable} min-h-screen bg-[#f8f9fa]`}><ScrollReveal><article className="w-full">
    <section className="relative w-full" aria-label="Portada de la guía de viaje por Bolivia"><div className="min-h-[42vh] w-full bg-cover bg-center sm:min-h-[48vh] md:min-h-[56vh] lg:min-h-[62vh]" style={{ backgroundImage: `url("${HERO_IMAGE}")` }} /><div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50" /></section>
    <section className="relative z-10 mx-auto -mt-16 max-w-4xl px-4 sm:-mt-20 sm:px-6 md:-mt-24 md:px-8"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#f8fff4] text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl md:h-32 md:w-32"><span role="img" aria-label="Bandera de Bolivia">🇧🇴</span></div><div className="mt-4 rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_40px_rgba(26,43,76,0.1)] sm:mt-5 sm:rounded-3xl sm:px-8 sm:py-9"><FourPointStar className="mx-auto mb-3 h-2.5 w-2.5 text-[#5D87FF]" /><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Mis viajes de 2019 y 2023</p><h1 className={`${playfair.className} font-semibold leading-tight`} style={{ color: NAVY, fontSize: "clamp(1.9rem, 5vw, 3rem)" }}>Guía de viaje por Bolivia<span className="block font-normal italic" style={{ color: ACCENT }}>altura, cultura y paisajes infinitos</span></h1><FourPointStar className="mx-auto my-4 h-3 w-3 text-[#5D87FF]" /><p className="text-sm leading-relaxed text-gray-600 sm:text-base">Bolivia es uno de esos países que sorprenden desde el primer momento. Sus paisajes cambian constantemente: montañas que superan los 6.000 metros, ciudades llenas de historia, pueblos coloniales y el salar más grande del planeta. Viajé en 2019 y 2023; aquí comparto los lugares que visité, junto con recomendaciones para organizar tu propio viaje.</p><div className="mx-auto mt-5 flex max-w-3xl items-start justify-center gap-2 text-sm text-gray-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p>La Paz · Cochabamba · Tarata · Parque Nacional Tunari · Salar de Uyuni · Oruro</p></div></div></section>

    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:space-y-8 sm:px-6 sm:py-14 md:px-8 md:py-16">{places.map((place) => <section key={place.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_24px_rgba(26,43,76,0.07)] transition-shadow hover:shadow-[0_8px_32px_rgba(26,43,76,0.12)] sm:rounded-3xl"><div className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[21/9]" style={{ backgroundImage: `url("${place.image}")` }} role="img" aria-label={place.title} /><div className="bg-white px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8"><p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Destino {place.id}</p><h2 className={`${playfair.className} mt-1 text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>{place.title}</h2><p className={`${playfair.className} mt-1 italic text-gray-500`}>{place.subtitle}</p><p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">{place.description}</p><div className="mt-6 border-t border-gray-100 pt-5"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>Qué hacer</h3><ItemList items={place.activities} /></div><div className="mt-6 border-t border-gray-100 pt-5"><h3 className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: NAVY }}>Recomendaciones</h3><ItemList items={place.recommendations} /></div>{place.advice && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#fffaf1] px-4 py-4 text-sm leading-relaxed text-gray-600"><Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} /><p><strong style={{ color: NAVY }}>Consejo:</strong> {place.advice}</p></div>}{place.season && <div className="mt-5 rounded-xl bg-[#f8f9fa] px-4 py-4"><h3 className="text-sm font-semibold" style={{ color: NAVY }}>¿Cuál es la mejor época?</h3><ItemList items={place.season} /></div>}</div></section>)}</section>

    <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16 md:px-8"><div className="rounded-2xl bg-white px-5 py-7 shadow-[0_4px_24px_rgba(26,43,76,0.07)] sm:rounded-3xl sm:px-8 sm:py-9"><h2 className={`${playfair.className} text-2xl font-semibold sm:text-3xl`} style={{ color: NAVY }}>Consejos generales para viajar por Bolivia</h2><div className="mt-6 grid gap-6 sm:grid-cols-2">{travelInfo.map((section) => <div key={section.title} className="rounded-xl bg-[#f8f9fa] px-4 py-4"><h3 className="font-semibold" style={{ color: NAVY }}>{section.title}</h3><ItemList items={section.items} /></div>)}</div><div className="mt-6 border-t border-gray-100 pt-6"><h3 className={`${playfair.className} text-xl font-semibold`} style={{ color: NAVY }}>Equipaje recomendado</h3><ItemList items={luggage} /></div></div></section>
    <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6 sm:pb-20 md:px-8"><FourPointStar className="mx-auto mb-5 h-4 w-4 text-[#5D87FF]" /><p className={`${playfair.className} text-base italic leading-relaxed text-gray-600 sm:text-lg`}>Bolivia invita a viajar despacio, respetar la altura y dejarse sorprender por algunos de los paisajes más extraordinarios de Sudamérica.</p></section>
  </article></ScrollReveal><Footer /></div>;
}
