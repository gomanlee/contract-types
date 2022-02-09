import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorAlpha, GovernorAlphaInterface } from "../GovernorAlpha";
export declare class GovernorAlpha__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): GovernorAlphaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorAlpha;
}
