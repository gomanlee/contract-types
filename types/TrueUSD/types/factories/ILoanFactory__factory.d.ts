import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILoanFactory } from "../ILoanFactory";
export declare class ILoanFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILoanFactory;
}
