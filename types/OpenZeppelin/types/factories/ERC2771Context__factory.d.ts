import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC2771Context, ERC2771ContextInterface } from "../ERC2771Context";
export declare class ERC2771Context__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ERC2771ContextInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771Context;
}
