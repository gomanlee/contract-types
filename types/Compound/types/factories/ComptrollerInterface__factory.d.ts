import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ComptrollerInterface, ComptrollerInterfaceInterface } from "../ComptrollerInterface";
export declare class ComptrollerInterface__factory {
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
    static createInterface(): ComptrollerInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerInterface;
}
