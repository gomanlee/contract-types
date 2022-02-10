import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC721Royalty, ERC721RoyaltyInterface } from "../ERC721Royalty";
export declare class ERC721Royalty__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721RoyaltyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Royalty;
}
