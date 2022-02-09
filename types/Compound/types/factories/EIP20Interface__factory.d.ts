import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { EIP20Interface, EIP20InterfaceInterface } from "../EIP20Interface";
export declare class EIP20Interface__factory {
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
    static createInterface(): EIP20InterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EIP20Interface;
}
