import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LegacyInterestRateModel, LegacyInterestRateModelInterface } from "../LegacyInterestRateModel";
export declare class LegacyInterestRateModel__factory {
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
    static createInterface(): LegacyInterestRateModelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LegacyInterestRateModel;
}
