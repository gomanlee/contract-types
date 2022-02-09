import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFiPool2WithDecimals } from "../ITrueFiPool2WithDecimals";
export declare class ITrueFiPool2WithDecimals__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFiPool2WithDecimals;
}
