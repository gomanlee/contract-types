import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ComptrollerLensInterface, ComptrollerLensInterfaceInterface } from "../ComptrollerLensInterface";
export declare class ComptrollerLensInterface__factory {
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
    static createInterface(): ComptrollerLensInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerLensInterface;
}
