import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MockTrueCurrencyWithDelegate } from "../MockTrueCurrencyWithDelegate";
export declare class MockTrueCurrencyWithDelegate__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueCurrencyWithDelegate;
}
