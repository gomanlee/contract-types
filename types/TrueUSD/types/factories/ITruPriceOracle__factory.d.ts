import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITruPriceOracle } from "../ITruPriceOracle";
export declare class ITruPriceOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITruPriceOracle;
}
