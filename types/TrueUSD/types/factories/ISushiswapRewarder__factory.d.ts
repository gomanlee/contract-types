import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISushiswapRewarder } from "../ISushiswapRewarder";
export declare class ISushiswapRewarder__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISushiswapRewarder;
}
