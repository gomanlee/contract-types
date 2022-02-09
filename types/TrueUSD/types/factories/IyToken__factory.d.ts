import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IyToken } from "../IyToken";
export declare class IyToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IyToken;
}
