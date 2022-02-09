import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILineOfCreditAgency } from "../ILineOfCreditAgency";
export declare class ILineOfCreditAgency__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILineOfCreditAgency;
}
