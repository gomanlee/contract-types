import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Pausable, ERC20PausableInterface } from "../ERC20Pausable";
export declare class ERC20Pausable__factory {
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
    static createInterface(): ERC20PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Pausable;
}
