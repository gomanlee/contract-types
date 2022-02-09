import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMockTruPriceOracle } from "../IMockTruPriceOracle";
export declare class IMockTruPriceOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMockTruPriceOracle;
}
