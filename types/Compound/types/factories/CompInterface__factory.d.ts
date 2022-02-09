import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CompInterface, CompInterfaceInterface } from "../CompInterface";
export declare class CompInterface__factory {
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
    static createInterface(): CompInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompInterface;
}
