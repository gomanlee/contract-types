import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRegistry } from "../IRegistry";
export declare class IRegistry__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRegistry;
}
