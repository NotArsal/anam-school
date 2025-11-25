export default function Hero({ title, subtitle, image }) {
  return (
    <div
      className="h-[300px] md:h-[450px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">{title}</h1>
      <p className="mt-4 text-lg md:text-2xl drop-shadow">{subtitle}</p>
    </div>
  );
}
