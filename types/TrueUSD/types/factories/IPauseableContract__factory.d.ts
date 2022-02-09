import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPauseableContract } from "../IPauseableContract";
export declare class IPauseableContract__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPauseableContract;
}
