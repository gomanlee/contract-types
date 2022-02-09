import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueStrategy } from "../ITrueStrategy";
export declare class ITrueStrategy__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueStrategy;
}
