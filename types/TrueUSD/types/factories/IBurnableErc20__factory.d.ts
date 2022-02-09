import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBurnableErc20 } from "../IBurnableErc20";
export declare class IBurnableErc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IBurnableErc20;
}
