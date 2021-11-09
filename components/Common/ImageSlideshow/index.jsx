function ImageSlideshow() {
  return (
    <div className="mx-auto mb-10 p-2 bg-green-500 rounded-full shadow-2xl">
      <a href="images/nubloom-fractal-gif-transparent.webp" target="_blank">
        <img
          alt="Slideshow of minted flowers"
          className="border-solid rounded-full"
          height="400"
          src="/images/nubloom-fractal-gif-transparent.webp"
          width="400"
        />
      </a>
    </div>
  );
}

export default ImageSlideshow;
