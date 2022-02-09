import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ChainlinkTruOracle } from "../ChainlinkTruOracle";
export declare class ChainlinkTruOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkTruOracle;
}
