import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DaiJoinLike, DaiJoinLikeInterface } from "../DaiJoinLike";
export declare class DaiJoinLike__factory {
    static readonly abi: ({
        constant: boolean;
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    } | {
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
    })[];
    static createInterface(): DaiJoinLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DaiJoinLike;
}
