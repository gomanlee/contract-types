import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFixedTermLoan } from "../IFixedTermLoan";
export declare class IFixedTermLoan__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFixedTermLoan;
}
