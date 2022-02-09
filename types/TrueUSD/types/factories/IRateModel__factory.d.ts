import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRateModel } from "../IRateModel";
export declare class IRateModel__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRateModel;
}
