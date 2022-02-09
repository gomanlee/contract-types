import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TimelockInterface, TimelockInterfaceInterface } from "../TimelockInterface";
export declare class TimelockInterface__factory {
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
    static createInterface(): TimelockInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TimelockInterface;
}
