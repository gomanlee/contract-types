import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueCurrency } from "../ITrueCurrency";
export declare class ITrueCurrency__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueCurrency;
}
