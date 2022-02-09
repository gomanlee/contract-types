import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PotLike, PotLikeInterface } from "../PotLike";
export declare class PotLike__factory {
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
    static createInterface(): PotLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PotLike;
}
