import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Isafu } from "../Isafu";
export declare class Isafu__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Isafu;
}
