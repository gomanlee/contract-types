import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVoteTokenWithErc20 } from "../IVoteTokenWithErc20";
export declare class IVoteTokenWithErc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IVoteTokenWithErc20;
}
