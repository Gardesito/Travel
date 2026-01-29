export const Intro = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Texto principal con imágenes integradas */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-gray-900 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            {/* Línea 1 */}
            <span className="inline-flex items-center flex-wrap justify-center gap-x-2 md:gap-x-3">
              <span>Animate a dar el primer paso </span>
              {/* Imagen de playa/agua */}
              <span 
                className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-28 md:h-12 lg:w-36 lg:h-14 rounded-full bg-cover bg-center align-middle"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=200&fit=crop")'
                }}
                aria-hidden="true"
              />
              <span>y</span>
            </span>
            <br className="hidden sm:block" />
            {/* Línea 2 */}
            <span className="inline-flex items-center flex-wrap justify-center gap-x-2 md:gap-x-3">
              <span>descubrí el mundo</span>
              {/* Imagen de montaña */}
              <span 
                className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-28 md:h-12 lg:w-36 lg:h-14 rounded-full bg-cover bg-center align-middle"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=200&fit=crop")'
                }}
                aria-hidden="true"
              />
              <span>que te está esperando.</span>
            </span>
          </h2>
        </div>

        {/* Subtexto */}
        <p className="text-center text-gray-500 text-sm md:text-base lg:text-lg mt-8 md:mt-12 max-w-3xl mx-auto">
        Viajar te transforma: conocés nuevos lugares, nuevas personas y te convertís en una nueva versión de vos.
        </p>
      </div>
    </section>
  );
};
