"use client";

import ScrollReveal from "@/component/ScrollReveal";

export default function Hero() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <section className="relative h-screen w-full overflow-hidden min-h-[500px]">
          {/* Video de fondo - loop, responsive */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://nafulltur.com.ar/wp-content/uploads/2026/01/banner_video_inicio.webm"
                type="video/webm"
              />
            </video>
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Contenido */}
          <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              {/* Línea superior */}
              <p className="text-sm md:text-base mb-4 md:mb-6">
                <span style={{ color: "#5DD4D4" }}>Nuevas Rutas</span>
                <span style={{ color: "#5DD4D4" }}> • </span>
                <span className="text-white">Nuevos Destino</span>
              </p>

              {/* Título principal */}
              <h1 className="font-bold leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                Explorá destinos, viví
                <br />
                experiencias, guardá <span style={{ color: "#4285F4" }}>recuerdos.</span>
              </h1>

              {/* Párrafo descriptivo */}
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                Hola, soy Vanesa. Desde un pequeño pueblo al mundo, convertí mi pasión por viajar en una forma de inspirar y acompañar a otros a vivir experiencias que dejan huella.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
