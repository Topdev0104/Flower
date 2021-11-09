import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useTokenContract from "./useTokenContract";

function getTokenTotalSupply(contract) {
  return async () => {
    const totalSupply = await contract.totalSupply();
    return totalSupply;
  };
}

export default function useTokenTotalSupply(
  address,
  tokenAddress,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenSupply", address, tokenAddress] : null,
    getTokenTotalSupply(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
