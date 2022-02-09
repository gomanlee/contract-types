import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITimelock } from "../ITimelock";
export declare class ITimelock__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITimelock;
}
