function Card({ children, src, title }) {
  return (
    <div className="bg-white min-w-sm max-w-sm md:mx-1 mt-10 rounded overflow-hidden shadow-lg border-2 rounded-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={title} src={src} />
      <div className="px-6 py-4">
        <div className="text-center font-bold text-2xl mb-4">{title}</div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Card;
