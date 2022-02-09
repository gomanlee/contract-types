import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TrueCurrencyWithGasRefund } from "../TrueCurrencyWithGasRefund";
export declare class TrueCurrencyWithGasRefund__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TrueCurrencyWithGasRefund;
}
