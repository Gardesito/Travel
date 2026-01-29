import Link from "next/link";

export default function Blog() {
    const destinos = [
      {
        id: 1,
        nombre: "De la Posta al mundo",
        pais: "Cordoba, Argentina",
        imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1765215006/IMG_00005_zxz3wo.jpg",
        link: null
      },
      {
        id: 2,
        nombre: "Las Maravillas del mundo",
        pais: "Todo el mundo",   
        imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1769712429/Firefly_Gemini_Flash_12_j4pb7h.png",
        link: "/blog1"
      },
      {
        id: 3, 
        nombre: "Alma Viajera",            
        pais: "Cordoba, Argentina",
        imagen: "https://res.cloudinary.com/dtmziqubb/image/upload/v1765214628/2a284007-8467-40ed-9071-61cb020fc812_m6eyup.jpg",
        link: null
      }
    ];

    const CardContent = ({ destino }: { destino: typeof destinos[0] }) => (
      <>
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url("${destino.imagen}")`
          }}
        />

        {/* Icono en la esquina superior derecha */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        {/* Overlay semi-transparente en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-8">
          {/* Nombre del destino */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            {destino.nombre}
          </h3>
          
          {/* País con icono de pin */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-white/90 text-base md:text-lg font-medium">
              {destino.pais}
            </p>
          </div>
        </div>
      </>
    );
  
    return (
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 md:mb-16 text-center">
          Conoce mi blog
          </h2>
  
          {/* Grid de tarjetas responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {destinos.map((destino) => (
              destino.link ? (
                <Link
                  key={destino.id}
                  href={destino.link}
                  className="group relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 block"
                >
                  <CardContent destino={destino} />
                </Link>
              ) : (
                <div
                  key={destino.id}
                  className="group relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <CardContent destino={destino} />
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    );
  }