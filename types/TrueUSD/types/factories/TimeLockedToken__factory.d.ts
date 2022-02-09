import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TimeLockedToken } from "../TimeLockedToken";
export declare class TimeLockedToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TimeLockedToken;
}
