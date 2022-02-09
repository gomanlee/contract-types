import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CDelegatorInterface, CDelegatorInterfaceInterface } from "../CDelegatorInterface";
export declare class CDelegatorInterface__factory {
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
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
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
        anonymous?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): CDelegatorInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CDelegatorInterface;
}
