import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CompLike, CompLikeInterface } from "../CompLike";
export declare class CompLike__factory {
    static readonly abi: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): CompLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompLike;
}
