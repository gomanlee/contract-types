import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFiPool } from "../ITrueFiPool";
export declare class ITrueFiPool__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFiPool;
}
