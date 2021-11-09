import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../utils/connectors";
import useENSName from "../../../hooks/web3/useENSName";
import useMetaMaskOnboarding from "../../../hooks/web3/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../../../utils/formaters";

const MetaMaskButton = ({ triedToEagerConnect, isShorthand = true }) => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, error]);

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            className="py-2 px-2 font-medium text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
          </button>
        ) : (
          <button
            className="py-2 px-2 font-medium text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
            onClick={startOnboarding}
          >
            Install Metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <a
      className="py-2 px-2 font-medium text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
      {...{
        href: formatEtherscanLink("Account", [chainId, account]),
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      {isShorthand
        ? ENSName || `${shortenHex(account, 4)}`
        : `Wallet connected: ${account}`}
    </a>
  );
};

export default MetaMaskButton;
