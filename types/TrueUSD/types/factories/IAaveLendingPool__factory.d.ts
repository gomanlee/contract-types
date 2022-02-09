import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAaveLendingPool } from "../IAaveLendingPool";
export declare class IAaveLendingPool__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IAaveLendingPool;
}
