import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TruVoteToken } from "../TruVoteToken";
export declare class TruVoteToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TruVoteToken;
}
