import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDebtToken } from "../IDebtToken";
export declare class IDebtToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IDebtToken;
}
