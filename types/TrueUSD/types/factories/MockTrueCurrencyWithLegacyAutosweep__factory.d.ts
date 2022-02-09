import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MockTrueCurrencyWithLegacyAutosweep } from "../MockTrueCurrencyWithLegacyAutosweep";
export declare class MockTrueCurrencyWithLegacyAutosweep__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueCurrencyWithLegacyAutosweep;
}
