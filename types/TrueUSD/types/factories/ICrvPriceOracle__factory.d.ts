import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICrvPriceOracle } from "../ICrvPriceOracle";
export declare class ICrvPriceOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ICrvPriceOracle;
}
