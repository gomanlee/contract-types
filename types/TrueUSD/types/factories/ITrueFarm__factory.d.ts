import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFarm } from "../ITrueFarm";
export declare class ITrueFarm__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFarm;
}
