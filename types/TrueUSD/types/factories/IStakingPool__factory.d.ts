import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakingPool } from "../IStakingPool";
export declare class IStakingPool__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStakingPool;
}
