import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC721Votes, ERC721VotesInterface } from "../ERC721Votes";
export declare class ERC721Votes__factory {
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
    static createInterface(): ERC721VotesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Votes;
}
