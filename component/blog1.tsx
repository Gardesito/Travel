import Footer from "./footer";
import ScrollReveal from "@/component/ScrollReveal";

export default function Blog1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contenido que aparece con scroll */}
      <ScrollReveal>
        {/* Contenedor principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 italic mb-8 md:mb-12">
          De la posta al mundo
        </h1>

        {/* Sección 1: Imagen izquierda, texto derecha */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <div 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: 'url("https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg")'
              }}
            />
          </div>
          
          {/* Texto */}
          <div className="w-full md:w-1/2 flex items-center">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Soy Vanesa Cordoba y vengo de un pueblito de la localidad de La Posta. Crecí entre calles de tierra, rutinas simples y sueños grandes. Desde chica miraba los aviones pasar y me quedaba imaginando cómo sería estar ahí arriba, viajando, descubriendo, sintiendo que el mundo era más grande que mi realidad.
            </p>
          </div>
        </div>

        {/* Sección 2: Texto izquierda, imagen derecha */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Texto */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Desde ese pequeño rincón imaginaba cómo sería estar ahí arriba, viajar lejos, sentir que la vida podía ser más grande que mis miedos y más amplia que mis posibilidades.
              </p>
              <p>
                Vengo de una familia muy humilde, donde soñar no siempre parecía permitido, pero aun así lo hice. Soñé fuerte. Soñé siempre. Y un día, aquello que parecía imposible se volvió realidad: viajé. Crucé fronteras, subí a ese avión que tantas veces miré desde abajo y sentí que estaba honrando a la niña que nunca dejó de creer.
              </p>
            </div>
          </div>
          
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <div 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop")'
              }}
            />
          </div>
        </div>

        {/* Sección 3: Imagen panorámica */}
        <div className="mb-8 md:mb-12">
          <div 
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=400&fit=crop")'
            }}
          />
        </div>

        {/* Párrafos finales */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Con el tiempo, la vida me regaló algo que jamás pensé posible: conocer las 7 maravillas del mundo moderno. Cada una fue un abrazo al destino, una prueba de que no importa de dónde vengamos, sino la fuerza con la que caminamos hacia lo que deseamos.
          </p>
          
          <p>
            Hoy viajo no solo para conocer lugares, sino para honrar mis raíces, para demostrarme que los sueños sí se cumplen, aunque tarden, aunque duelan, aunque parezcan demasiado grandes para quien los imagina.
          </p>
          
          <p>
            Este espacio, Alma Viajera, nace de esa historia. De las ganas de inspirar, de contar mis caminos, de mostrar que no importa de dónde vengamos, sino hacia dónde nos animamos a ir.
          </p>
          
          <div className="pt-4">
            <p className="font-medium">Bienvenidos a mi viaje.</p>
            <p className="font-medium">Yo soy Vanesa, la chica de La Posta que un día miró el cielo... y decidió volar.</p>
          </div>
        </div>
        </div>
      </ScrollReveal>
      <Footer/>
    </div>
  );
}
