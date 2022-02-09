import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CDelegateInterface, CDelegateInterfaceInterface } from "../CDelegateInterface";
export declare class CDelegateInterface__factory {
    static readonly abi: ({
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
    } | {
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
    })[];
    static createInterface(): CDelegateInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CDelegateInterface;
}
