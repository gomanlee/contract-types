import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOwnable } from "../IOwnable";
export declare class IOwnable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOwnable;
}
