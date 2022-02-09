import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IArbitraryDistributor } from "../IArbitraryDistributor";
export declare class IArbitraryDistributor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IArbitraryDistributor;
}
