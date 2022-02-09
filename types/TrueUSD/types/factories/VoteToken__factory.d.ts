import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VoteToken } from "../VoteToken";
export declare class VoteToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VoteToken;
}
