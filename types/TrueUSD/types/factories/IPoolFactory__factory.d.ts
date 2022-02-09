import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPoolFactory } from "../IPoolFactory";
export declare class IPoolFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPoolFactory;
}
