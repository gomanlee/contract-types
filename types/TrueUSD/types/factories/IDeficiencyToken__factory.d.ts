import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDeficiencyToken } from "../IDeficiencyToken";
export declare class IDeficiencyToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IDeficiencyToken;
}
