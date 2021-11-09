import InfoBlock from "../../../components/HomePage/InfoBlock";

function HomeAboutSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 pb-14 flex flex-col justify-center items-center">
        <InfoBlock
          imageSrc="/images/garden-graphic-transparent.png"
          title="Show off in the garden"
        >
          <p>
            The <strong>Garden</strong> dApp / farm will allow users to plant
            their NuBloom flowers in private and public virtual gardens.
            Relax in your digital oasis, complete with soundscapes, radio, and
            online interactivity to get in touch with your fellow Bloomers. Earn
            rewards and prizes as you stake.
          </p>
        </InfoBlock>
        <InfoBlock
          imageSrc="/images/group-graphic-transparent.png"
          title="A community for every generation"
        >
          <p>
            Each generation will have its private Discord channel, with
            community features on NuBloom&apos;s dApp.
          </p>
          <p>
            NuBloom flowers aren&apos;t just designed for art, but for community
            value. Partake in virtual events, exhibitions, job fairs, meetups,
            and more, all vetted constantly by our moderation team.
          </p>
        </InfoBlock>
        {/* <InfoBlock
          imageSrc="/images/future-graphic-transparent.png"
          title="The future"
        >
          <p>
            {/* NuBloom was created by Johnny Dunn and{" "}
            <a className="" href="http://test.com">
              Llorenzo#3734
            </a>
            , digital artists / blockchain developers working to challenge the
            crypto art space to address environmentalism and social media
  critiques with NuBloom, and the upcoming Bloom project.  Future plans
            also include launching a farm (Garden) where it will be possible to 
            interest in a native token, and other benefits.
          </p>
        </InfoBlock> */}
        <p className="mt-10 max-w-2xl text-center text-xl">
          Stay tuned for our upcoming roadmap, as Generation 0 buyers will
          receive exclusive rights later for some upcoming features.
        </p>
      </div>
    </section>
  );
}

export default HomeAboutSection;
