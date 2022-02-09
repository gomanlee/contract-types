import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniswapRouter } from "../IUniswapRouter";
export declare class IUniswapRouter__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapRouter;
}
