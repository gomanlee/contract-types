import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVoteToken } from "../IVoteToken";
export declare class IVoteToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IVoteToken;
}
