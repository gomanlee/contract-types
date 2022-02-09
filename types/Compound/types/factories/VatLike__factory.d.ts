import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VatLike, VatLikeInterface } from "../VatLike";
export declare class VatLike__factory {
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
    static createInterface(): VatLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VatLike;
}
