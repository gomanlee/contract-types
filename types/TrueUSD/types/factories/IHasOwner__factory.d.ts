import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IHasOwner } from "../IHasOwner";
export declare class IHasOwner__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IHasOwner;
}
