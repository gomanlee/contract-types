import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GemLike, GemLikeInterface } from "../GemLike";
export declare class GemLike__factory {
    static readonly abi: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): GemLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GemLike;
}
