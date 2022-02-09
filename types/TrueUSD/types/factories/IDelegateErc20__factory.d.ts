import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDelegateErc20 } from "../IDelegateErc20";
export declare class IDelegateErc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IDelegateErc20;
}
