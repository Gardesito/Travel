export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1764894014/Rectangle-1_uyt5r8.webp"
            alt="Mujer sonriente usando tablet"
            className="h-full w-full object-cover"
          />
          {/* Overlay gradiente para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-16 lg:px-20">
          {/* Hero Text */}
          <div className="flex flex-1 items-center">
            <div className="max-w-2xl">
              <h1 className="mb-8 font-bold leading-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Explorá destinos,
                <br />
                viví experiencias,
                <br />
                guardá recuerdos.
              </h1>

              <button
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-transform hover:bg-blue-700 hover:scale-105"
              >
                Hablemos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tags at bottom */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="text-sm font-medium text-white/90">Tags</span>
            <div className="flex flex-wrap gap-2">
              {["Viajes", "Reservas", "Rutas"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
