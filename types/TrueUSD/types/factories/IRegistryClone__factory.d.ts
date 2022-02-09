import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRegistryClone } from "../IRegistryClone";
export declare class IRegistryClone__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRegistryClone;
}
