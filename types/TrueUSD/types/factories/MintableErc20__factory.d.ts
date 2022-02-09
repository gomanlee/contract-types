import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MintableErc20 } from "../MintableErc20";
export declare class MintableErc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): MintableErc20;
}
