import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFiPool2 } from "../ITrueFiPool2";
export declare class ITrueFiPool2__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFiPool2;
}
