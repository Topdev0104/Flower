import Card from "../../../components/Common/Card";
import CtaLinkButton from "../../../components/Common/CtaButton";

function HomeShowcaseSection() {
  return (
    <section>
      <div className="mx-auto mt-14 px-4 md:px-36 flex flex-col">
        <div className="mx-auto uppercase text-center">
          <h1 className="text-5xl">Generation zero: fractal</h1>
          <h2 className="mt-6 text-xl">
            Seed phrase used to generate: <span>&quot;frank&quot;</span>
          </h2>
        </div>
        <div className="w-100 md:py-24 flex flex-col md:flex-row flex-wrap justify-evenly items-center md:items-stretch">
          <Card title="Aquatic Pokeweed" src="/images/flower1.png">
            A rare, medium-size plant and can be found only at river borders. It
            blooms twice a year, for 2 months. It has thick, wedge shaped
            leaves, which are usually aquamarine. They can be eaten to relief a
            sore throat.
          </Card>
          <Card title="Tickle Fieldcress" src="/images/flower2.png">
            An extremely common, tiny plant and can be found anywhere near
            rivers and lakes. It blooms once a year, for 2 weeks. It has small
            leaves but for its size grows huge flowers, which can be dark
            yellow, light blue and bronze. They can be used as a hallucinogen.
          </Card>
          <Card title="Funeral Berry" src="/images/flower3.png">
            A rare, medium-sized plant and can be found in some forests. It
            blooms twice a year, for 3 weeks. It has large eaves, which are
            usually shades of violet. The small flowers can be used to create a
            poison. As a defense mechanism, they taste extremely sour.
          </Card>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 px-4 flex flex-col items-center">
        <p className="mx-auto mb-10 max-w-2xl text-center text-xl">
          Each NFT is unique with hi-res artwork contains a procedurally
          generated name, species, and description embedded in the metadata. The
          retainer of the nft will have full rights to use the flower art and
          text in whichever creative or commercial manner they wish.
        </p>
        {/* <CtaLinkButton href="/mint">Mint a NuBloom flower now</CtaLinkButton> */}
        <hr className="mt-10 w-1/3" />
      </div>
    </section>
  );
}

export default HomeShowcaseSection;
