import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Impl, ImplInterface } from "../Impl";
export declare class Impl__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Impl;
}
