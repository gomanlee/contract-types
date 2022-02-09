import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStkTruToken } from "../IStkTruToken";
export declare class IStkTruToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStkTruToken;
}
