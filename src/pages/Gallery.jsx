export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  ];

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src) => (
          <img key={src} className="rounded shadow" src={src} alt="" />
        ))}
      </div>
    </section>
  );
}
