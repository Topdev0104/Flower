import { ABI } from "../../config";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress) {
  return useContract(tokenAddress, ABI);
}
