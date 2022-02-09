import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IHook } from "../IHook";
export declare class IHook__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IHook;
}
