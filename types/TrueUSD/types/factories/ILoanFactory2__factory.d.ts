import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILoanFactory2 } from "../ILoanFactory2";
export declare class ILoanFactory2__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILoanFactory2;
}
