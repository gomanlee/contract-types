import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapPair } from "../IUniswapPair";
export declare class IUniswapPair__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapPair;
}
