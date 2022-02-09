import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IImplementationReference } from "../IImplementationReference";
export declare class IImplementationReference__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IImplementationReference;
}
