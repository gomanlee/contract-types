import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurveMinter } from "../ICurveMinter";
export declare class ICurveMinter__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ICurveMinter;
}
