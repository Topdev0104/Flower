import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ADDRESS } from "../../../config";
import useTokenTotalSupply from "../../../hooks/web3/useTokenSupply";

import HeroLogo from "../../../components/Common/HeroLogo";
import ImageSlideshow from "../../../components/Common/ImageSlideshow";
import MetaMaskButton from "../../../components/Common/MetaMaskButton";
import FlowerSupply from "../../../components/FlowerSupply";

function MintInfoSection({ isConnected, triedToEagerConnect }) {
  const { account } = useWeb3React();
  const { data: totalSupply } = useTokenTotalSupply(account, ADDRESS);
  const currentSupply = totalSupply - 30;

  return (
    <section>
      <div className="max-w-6xl mx-auto pt-20 pb-10 px-4 flex flex-col justify-between items-center">
        <HeroLogo />
        <div className="my-10 flex flex-col items-center">
          <MetaMaskButton
            isShorthand={false}
            triedToEagerConnect={triedToEagerConnect}
          />
          <div className="flex items-center mt-5">
            {isConnected && <p className="text-xl mr-3">Total minted:</p>}
            <FlowerSupply
              isConnected={isConnected}
              currentSupply={currentSupply}
            />
          </div>
        </div>
        <ImageSlideshow />
      </div>
    </section>
  );
}

export default MintInfoSection;
