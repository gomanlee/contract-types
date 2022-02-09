import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFiPoolOracle } from "../ITrueFiPoolOracle";
export declare class ITrueFiPoolOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFiPoolOracle;
}
