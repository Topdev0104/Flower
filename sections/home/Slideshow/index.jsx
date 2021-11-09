import CtaLinkButton from "../../../components/Common/CtaButton";
import ImageSlideshow from "../../../components/Common/ImageSlideshow";

function HomeSlideshowSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 pb-14 flex flex-col justify-center items-center border-b-2 border-gray-200">
        <ImageSlideshow />
        <CtaLinkButton
          href="https://opensea.io/collection/nubloomfractal"
          target="_blank"
        >
          See the Current Minted Collection on OpenSea
        </CtaLinkButton>
      </div>
    </section>
  );
}

export default HomeSlideshowSection;
