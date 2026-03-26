import Custom404 from "@/component/404";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dtmziqubb/image/upload/v1774532926/Sin_t%C3%ADtulo-2sdf_ukldar.jpg";

export default function PlaceholderPostPage() {
  return (
    <main className="w-full">
      <Custom404
        fullScreen
        src={DEFAULT_IMAGE}
        alt=""
        emptyLabel="Esta entrada estará disponible pronto"
      />
    </main>
  );
}
