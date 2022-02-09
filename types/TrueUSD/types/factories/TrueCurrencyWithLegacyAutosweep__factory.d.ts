import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TrueCurrencyWithLegacyAutosweep } from "../TrueCurrencyWithLegacyAutosweep";
export declare class TrueCurrencyWithLegacyAutosweep__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TrueCurrencyWithLegacyAutosweep;
}
