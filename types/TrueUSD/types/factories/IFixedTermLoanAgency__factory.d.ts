import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFixedTermLoanAgency } from "../IFixedTermLoanAgency";
export declare class IFixedTermLoanAgency__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IFixedTermLoanAgency;
}
