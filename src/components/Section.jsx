export default function Section({ title, children }) {
  return (
    <section className="p-6 md:p-12">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      {children}
    </section>
  );
}
