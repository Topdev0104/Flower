import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ADDRESS } from "../../../config";
import useTokenTotalSupply from "../../../hooks/web3/useTokenSupply";

import CtaLinkButton from "../../../components/Common/CtaButton";
import BloomForm from "../../../components/MintPage/BloomForm";

function MintMintSection({ isConnected }) {
  const { account } = useWeb3React();
  const { data: totalSupply } = useTokenTotalSupply(account, ADDRESS);
  const currentSupply = totalSupply - 30;

  const [bloomValue, setBloomValue] = useState(1);

  const requestChangeBloomValue = (event) => {
    setBloomValue(event.target.value);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto pb-10 px-4 flex flex-col justify-between items-center">
        <div className="text-center">
          <h1 className="text-2xl mb-5">
            Which new species of flower will you bloom?
          </h1>
          <p className="text-lg text-gray-500">
            First 50 NFTs are free to mint!
            <br />
            After that, the price is <span className="font-bold">.015</span> ETH
            per flower.
          </p>
        </div>
        <BloomForm
          bloomValue={bloomValue}
          currentSupply={currentSupply}
          isConnected={isConnected}
          requestChangeBloomValue={requestChangeBloomValue}
          totalSupply={totalSupply}
        />
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

export default MintMintSection;
