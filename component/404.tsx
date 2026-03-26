type PlaceholderImageProps = {
  /** URL de la imagen; si no hay, se muestra el hueco vacío */
  src?: string;
  alt?: string;
  className?: string;
  /** Texto opcional sobre el placeholder vacío */
  emptyLabel?: string;
  /** Imagen a todo el ancho y alto de la ventana (viewport) */
  fullScreen?: boolean;
};

/**
 * Bloque responsive para una imagen (secciones o páginas aún sin contenido final).
 * Con `fullScreen` ocupa todo el tamaño de la pantalla (100dvh × 100% ancho).
 */
export default function Custom404({
  src,
  alt = "",
  className = "",
  emptyLabel = "Imagen pendiente",
  fullScreen = false,
}: PlaceholderImageProps) {
  const media = (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center px-4 text-center"
          aria-label={emptyLabel}
          role="status"
        >
          <span className="text-sm font-medium text-gray-500 sm:text-base">
            {emptyLabel}
          </span>
        </div>
      )}
    </>
  );

  if (fullScreen) {
    return (
      <div
        className={`relative h-[100dvh] min-h-[100svh] w-full max-w-[100vw] overflow-hidden bg-gray-100 ${className}`}
      >
        {media}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className={[
          "relative w-full overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-100",
          "aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] lg:aspect-[2.4/1]",
          "min-h-[180px] sm:min-h-[220px]",
        ].join(" ")}
      >
        {media}
      </div>
    </div>
  );
}
