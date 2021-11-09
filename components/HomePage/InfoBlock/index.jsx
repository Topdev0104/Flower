function InfoBlock({ children, imageSrc, title }) {
  return (
    <div className="my-10 max-w-2xl text-center text-xl flex flex-col items-center">
      <h1 className="font-bold text-2xl">{title}</h1>
      <img
        alt={title}
        className="opacity-50"
        height="200"
        src={imageSrc}
        width="200"
      />
      {children}
    </div>
  );
}

export default InfoBlock;
