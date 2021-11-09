import useSWR from "swr";
import { useState, useEffect } from "react";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useTokenContract from "./useTokenContract";
import useTokenBalance from "./useTokenBalance";

/*
function getTokens(contract, number) {
  return async (_, address) => {
    //let i = 0;
    let x = []
    // const firstToken = await contract.tokenOfOwnerByIndex(address, 0);
    let token = null
    while (token != 0 ){
        token = 0
        try {
          token = await contract.tokenOfOwnerByIndex(address, i);
          x.push(token);
        } catch (error) {
          console.log(error)
        }
        i +=1
    } 
    for (let i = 0; i < number; i++) {
      try {
        token = await contract.tokenOfOwnerByIndex(address, i);
        x.push(token);
      } catch (error) {
        console.log(error)
      }
    }
    return x;
  };
} 
export default function useTokensID(
  address,
  tokenAddress,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);
  const [number, setNumber] = useState(0);

  const shouldFetch = typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;
  console.log("ciao")

  const {data} = useTokenBalance(address, "0xee126216132B0FF09268657468B89eCCC4f8a6b8", false)

  useEffect(() => {
    data != undefined ? setNumber(data.toNumber()): console.log(data);#

  }, [data])

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, tokenAddress] : null,
    getTokens(contract, number),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
*/
 
function getTokens(contract) {
  return async (_, address) => {
    let i = 0;
    let x = []
    // const firstToken = await contract.tokenOfOwnerByIndex(address, 0);
    let token = null
    while (token != 0 ){
        token = 0
        try {
          token = await contract.tokenOfOwnerByIndex(address, i);
          // console.log(token.toNumber())
          x.push(token.toNumber());
        } catch (error) {
          //console.log(error)
        }
        i +=1
    }
    // const balance = await contract.balanceOf(address);
    //console.log(balance);
    return x;
  };
}

export default function useTokensID(
  address,
  tokenAddress,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch = typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, tokenAddress] : null,
    getTokens(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
