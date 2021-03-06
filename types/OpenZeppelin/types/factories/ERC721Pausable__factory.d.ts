import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC721Pausable, ERC721PausableInterface } from "../ERC721Pausable";
export declare class ERC721Pausable__factory {
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
    static createInterface(): ERC721PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Pausable;
}
