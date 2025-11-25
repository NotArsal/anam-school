export default function Gallery() {
  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/sports.jpg",
    "/images/playground.jpg",
    "/images/classroom1.jpg",
    "/images/classroom2.jpg",
  ];

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-4xl font-bold text-primary mb-6">School Gallery</h1>

      <p className="text-gray-700 mb-6">
        Explore moments from school events, classrooms, celebrations, and daily
        activities.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src) => (
          <img key={src} src={src} className="rounded shadow-lg" />
        ))}
      </div>
    </section>
  );
}
