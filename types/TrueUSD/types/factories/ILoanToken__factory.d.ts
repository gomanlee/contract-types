import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILoanToken } from "../ILoanToken";
export declare class ILoanToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILoanToken;
}
