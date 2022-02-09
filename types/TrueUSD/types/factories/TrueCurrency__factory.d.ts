import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TrueCurrency } from "../TrueCurrency";
export declare class TrueCurrency__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TrueCurrency;
}
