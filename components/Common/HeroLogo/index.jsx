function HeroLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="object-contain relative h-auto w-1/3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="NuBloom Logo"
          className="mx-auto"
          src="/images/logoTransparent.png"
        />
      </div>
      <p className="uppercase text-3xl text-center">
        Generation <span>0</span>:{" "}
        <span className="text-customBlue">fractal</span>
      </p>
    </div>
  );
}

export default HeroLogo;
