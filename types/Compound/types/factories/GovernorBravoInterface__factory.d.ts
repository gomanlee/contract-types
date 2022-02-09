import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorBravoInterface, GovernorBravoInterfaceInterface } from "../GovernorBravoInterface";
export declare class GovernorBravoInterface__factory {
    static readonly abi: ({
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
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): GovernorBravoInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorBravoInterface;
}
