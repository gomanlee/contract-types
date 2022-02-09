import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakingVault } from "../IStakingVault";
export declare class IStakingVault__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStakingVault;
}
