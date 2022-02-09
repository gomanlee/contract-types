import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { InterestRateModel, InterestRateModelInterface } from "../InterestRateModel";
export declare class InterestRateModel__factory {
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
    static createInterface(): InterestRateModelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InterestRateModel;
}
