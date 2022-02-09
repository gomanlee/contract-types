import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueDistributor } from "../ITrueDistributor";
export declare class ITrueDistributor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueDistributor;
}
