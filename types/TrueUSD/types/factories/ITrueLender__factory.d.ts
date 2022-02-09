import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueLender } from "../ITrueLender";
export declare class ITrueLender__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueLender;
}
