import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DelegateErc20 } from "../DelegateErc20";
export declare class DelegateErc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): DelegateErc20;
}
