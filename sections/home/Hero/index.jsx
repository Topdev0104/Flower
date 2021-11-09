import { useWeb3React } from "@web3-react/core";
import { ADDRESS } from "../../../config";
import useTokenTotalSupply from "../../../hooks/web3/useTokenSupply";

import HeroLogo from "../../../components/Common/HeroLogo";
import SocialList from "../../../components/Common/SocialList";
import FlowerSupply from "../../../components/FlowerSupply";
import Flower from "../../../components/HomePage/Flower";

function HomeHeroSection({ isConnected }) {
  const { account } = useWeb3React();
  const { data } = useTokenTotalSupply(account, ADDRESS);
  const currentSupply = data - 30;

  return (
    <section className="h-screen">
      <div className="h-full max-w-6xl mx-auto pt-20 pb-10 px-4 flex flex-col justify-between items-center">
        <HeroLogo />
        {/* <Flower />
        <div className="flex items-center">
          {/* <FlowerSupply
            isConnected={isConnected}
            currentSupply={currentSupply}
          />
          {isConnected && <p className="text-xl ml-3">SOLD OUT</p>
        </div>*/}
        <p className="mx-auto pt-10 text-md md:text-lg max-w-2xl text-center">
          NuBloom: Fractal is a collection of 8888 unique flower species
          generated using Lindenmayer systems, which rewrite strings iteratively
          creating fractal patterns. This series will be automatically minted on
          OpenSea as it&apos;s purchased, and will be the first generation of
          NuBloom flowers. Each generation will have its own distinct aesthetic.
        </p>
        <SocialList />
      </div>
    </section>
  );
}

export default HomeHeroSection;
