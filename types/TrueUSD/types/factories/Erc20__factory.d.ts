import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Erc20 } from "../Erc20";
export declare class Erc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Erc20;
}
